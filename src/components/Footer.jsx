import { profile } from "../constants";

const Footer = () => (
  <footer className="relative border-t border-line">
    <div className="max-w-7xl mx-auto sm:px-16 px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-[13px] text-secondary">
      <p>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <p className="font-mono text-[12px]">Built with React · Tailwind CSS · Framer Motion</p>
    </div>
  </footer>
);

export default Footer;
