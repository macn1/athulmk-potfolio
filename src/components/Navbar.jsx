import { useEffect, useState } from "react";

import { styles } from "../styles";
import { navLinks, profile } from "../constants";
import Icon from "./Icons";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full fixed top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-primary/80 backdrop-blur-xl border-b border-line"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#top"
          className="flex items-center gap-3"
          onClick={() => setActive("")}
          aria-label="Back to top"
        >
          <span className="w-9 h-9 rounded-lg glass flex items-center justify-center font-display font-bold text-[14px] text-white">
            AM
          </span>
          <span className="font-display font-semibold text-white text-[16px] tracking-tight sm:block hidden">
            Athul M K
          </span>
        </a>

        <ul className="list-none hidden lg:flex items-center gap-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className={`text-[14px] font-medium transition-colors hover:text-white ${
                  active === nav.id ? "text-white" : "text-secondary"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            download
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium text-white glass hover:border-accent/60 transition-colors"
          >
            <Icon name="download" className="w-4 h-4" />
            Resume
          </a>

          <button
            type="button"
            className="lg:hidden w-10 h-10 rounded-lg glass flex items-center justify-center text-white"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
            aria-expanded={toggle}
          >
            <Icon name={toggle ? "close" : "menu"} className="w-5 h-5" />
          </button>
        </div>
      </div>

      {toggle && (
        <div className="lg:hidden max-w-7xl mx-auto mt-3 glass rounded-xl p-5 bg-primary/95">
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => setToggle(false)}
                  className={`text-[16px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 text-[16px] font-medium text-accent2"
              >
                <Icon name="download" className="w-4 h-4" />
                Download resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
