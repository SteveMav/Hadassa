import { useEffect, useLayoutEffect } from "react";
import { articles, contact, experiences, journal, profile } from "./content";
import portrait from "./assets/hadassa.jpg";

const fullName = `${profile.firstName} ${profile.lastName}`;

export function App() {
  useLayoutEffect(() => {
    // A direct link can reach the browser before React mounts the section.
    const sectionId = window.location.hash.slice(1);
    if (sectionId && window.scrollY === 0) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -7% 0px" });

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-head wrap">
        <a className="wordmark" href="#top">{fullName}</a>
        <nav aria-label="Portfolio">
          <a href="#writing">Writing</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero" aria-labelledby="name">
          <div className="hero-copy">
            <p className="role">{profile.role}</p>
            <h1 id="name">{profile.firstName}<br />{profile.lastName}</h1>
            <p className="intro">{profile.intro}</p>
            <a className="hero-cta" href="#writing">
              <span className="cta-label">Explore my writing</span>
              <span className="arrow" aria-hidden="true">↓</span>
            </a>
          </div>
          <figure className="portrait">
            <div className="photo">
              <img
                src={portrait}
                width={1024}
                height={768}
                alt="Black-and-white portrait of Hadassa Serrano in a pinstriped jacket."
                fetchPriority="high"
              />
            </div>
          </figure>
        </section>

        <section className="writing wrap" id="writing" aria-labelledby="writing-title">
          <div className="section-head" data-reveal="">
            <h2 id="writing-title">Selected writing</h2>
          </div>
          <ol className="stories">
            {articles.map((article, index) => (
              <li className="story" key={article.url} data-reveal={index === 0 ? "" : undefined}>
                <article>
                  <p className="meta">
                    {article.publisher} <span aria-hidden="true">/</span> {article.format}{" "}
                    <span aria-hidden="true">/</span> <time dateTime={article.dateTime}>{article.displayDate}</time>
                  </p>
                  <h3>
                    <a href={article.url}>
                      {article.title}{"\u00a0"}<span className="arrow" aria-hidden="true">↗</span>
                    </a>
                  </h3>
                  <p className="summary">{article.summary}</p>
                  {article.credit && <p className="credit">{article.credit}</p>}
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className="journal wrap" id="journal" aria-labelledby="journal-title">
          <div className="journal-inner" data-reveal="">
            <div>
              <p className="mono">Independent publication</p>
              <h2 id="journal-title">{journal.titleLead}<br /><em>{journal.titleEmphasis}</em></h2>
            </div>
            <div className="journal-info">
              <p>{journal.description}</p>
              <a className="text-link" href={journal.url}>Visit the journal <span className="arrow" aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="experience wrap" id="experience" aria-labelledby="experience-title">
          <div className="section-head">
            <h2 id="experience-title">Experience</h2>
          </div>
          <div className="work-layout" data-reveal="">
            <ul className="work-list">
              {experiences.map((experience) => (
                <li key={`${experience.organization}:${experience.role}:${experience.dates}`}>
                  <p className="work-date mono">{experience.dates}</p>
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="work-org">{experience.organization}</p>
                    <p>{experience.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <aside className="profile" aria-labelledby="profile-title">
              <p className="mono">About</p>
              <h3 id="profile-title">{fullName}</h3>
              <p>{profile.biography} <i>{journal.title}</i>.</p>
              <dl>
                <dt>Education</dt><dd>{profile.education}</dd>
                <dt>Languages</dt><dd>{profile.languages}</dd>
              </dl>
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="wrap footer-content" data-reveal="">
          <div>
            <p className="mono">Contact / {contact.location}</p>
            <h2>Get in touch.</h2>
            <a className="email text-link" href={`mailto:${contact.email}`}>
              {contact.email} <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="footer-links">
            <a href={contact.instagramUrl}>Instagram <span className="arrow" aria-hidden="true">↗</span></a>
            <a href={journal.url}>Substack <span className="arrow" aria-hidden="true">↗</span></a>
            <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
          </div>
        </div>
      </footer>
    </>
  );
}
