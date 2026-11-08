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
    }, { rootMargin: "0px 0px 20px 0px" });

    for (const element of document.querySelectorAll("[data-reveal]")) {
      // Keep content already visible on load, including deep links, steady.
      if (element.getBoundingClientRect().top >= window.innerHeight) observer.observe(element);
    }
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
          <ol className="stories" role="list">
            {articles.map((article, index) => (
              <li className="story" key={article.url} data-reveal="">
                <span className="story-number mono" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <article>
                  <p className="meta">
                    {article.publisher} <span aria-hidden="true">/</span> {article.format}{" "}
                    <span aria-hidden="true">/</span> <time dateTime={article.dateTime}>{article.displayDate}</time>
                  </p>
                  <h3>
                    <a href={article.url}>
                      <span className="story-title">{article.title}</span>
                      <span className="story-link-mark" aria-hidden="true"><span className="arrow">↗</span></span>
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
          <div className="section-head" data-reveal="">
            <h2 id="experience-title">Experience</h2>
          </div>
          <div className="work-layout">
            <ul className="work-list" role="list">
              {experiences.map((experience) => (
                <li key={`${experience.organization}:${experience.role}:${experience.dates}`} data-reveal="">
                  {experience.logo ? (
                    <img className="work-icon" src={experience.logo} alt="" />
                  ) : (
                    <svg className="work-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="7" width="18" height="13" rx="2" />
                      <path d="M8.5 7V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2M3 12a25 25 0 0 0 18 0m-9 0v2.5" />
                    </svg>
                  )}
                  <div>
                    <p className="work-date mono">{experience.dates}</p>
                    <h3>{experience.role}</h3>
                    <p className="work-org">{experience.organization}</p>
                    <p className="work-description">{experience.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <aside className="profile" aria-labelledby="profile-title" data-reveal="">
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
