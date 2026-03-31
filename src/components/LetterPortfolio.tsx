"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./LetterPortfolio.module.css";

type FadeSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const IMAGE_BASE_PATH =
  process.env.NODE_ENV === "production" ? "/pakkiana" : "";

const works = [
  "Remix d’Emigrazione",
  "Two Hours Ago I Fell in Love",
  "Glitch of Intimacy",
  "About",
];

function FadeSection({ children, delay = 0, className }: FadeSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = [styles.fadeSection, isVisible ? styles.visible : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      ref={sectionRef}
      className={classes}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}

export function LetterPortfolio() {
  return (
    <main className={styles.page}>
      <FadeSection className={styles.heading}>
        <p>
          <span>Alice Minervini</span>
          <em> a quiet, poetic archive</em>
        </p>
      </FadeSection>

      <FadeSection className={styles.core} delay={280}>
        <figure className={styles.flowerFrame}>
          <Image
            src={`${IMAGE_BASE_PATH}/flower-botanical.svg`}
            alt="Delicate botanical flower"
            width={220}
            height={300}
            priority
          />
        </figure>

        <ul className={styles.workList}>
          {works.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </FadeSection>

      <FadeSection className={styles.closing} delay={560}>
        <p>
          Write me a <em>love letter</em> at
        </p>
        <a href="mailto:aliceminervini@yahoo.com">aliceminervini@yahoo.com</a>
        <p>@p.arkivana</p>
      </FadeSection>
    </main>
  );
}
