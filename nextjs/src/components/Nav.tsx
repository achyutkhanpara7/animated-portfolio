"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavProps {
  variant?: "default" | "casestudy";
  showBack?: boolean;
  introDone?: boolean;
}

const RESUME_URL =
  "https://drive.google.com/file/d/1achyut-resume/view";

export default function Nav({
  variant = "default",
  showBack = false,
  introDone = true,
}: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = variant === "casestudy" ? true : introDone;

  return (
    <nav
      id="nav"
      className={`${variant === "casestudy" ? "nav-cs" : ""} ${
        visible ? "visible" : ""
      } ${scrolled ? "scrolled" : ""}`}
    >
      {showBack && (
        <Link href="/" className="nav-back">
          ← Back
        </Link>
      )}
      <Link href="/" className="nav-brand">
        <div className="nav-avatar">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/images/profile.png" alt="Achyut" />
        </div>
        <span className="nav-name">ACHYUT</span>
      </Link>
      <div className="nav-sep"></div>
      <div className="nav-links">
        <Link href="/#work" className="nav-link">
          Work
        </Link>
        <Link href="/about" className="nav-link">
          About
        </Link>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link cta"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
