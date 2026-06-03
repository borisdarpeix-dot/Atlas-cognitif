"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { t } from "@/lib/translations";
import SpiralDiagram from "./SpiralDiagram";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 7rem 2rem 4rem;
  max-width: 1120px;
  margin: 0 auto;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const HeroLeft = styled.div``;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--signal);
  border: 1px solid rgba(0, 87, 255, 0.2);
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
  margin-bottom: 1.5rem;
`;

const BadgeDot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--signal);
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

const HeroTitle = styled(motion.h1)`
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: 1.5rem;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--muted);
  max-width: 44ch;
  margin-bottom: 2.5rem;
`;

const HeroActions = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.6rem;
  border-radius: 999px;
  background: var(--text);
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  text-decoration: none;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const BtnSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.4rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 400;
  text-decoration: none;
  transition: border-color 0.2s;
  cursor: pointer;

  &:hover {
    border-color: var(--text);
  }
`;

const HeroNote = styled(motion.p)`
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
  letter-spacing: 0.04em;
`;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <HeroSection id="concept">
      <HeroGrid>
        <HeroLeft>
          <motion.div variants={container} initial="hidden" animate="show">
            <Badge variants={item}>
              <BadgeDot />
              {tr.hero.badge}
            </Badge>

            <HeroTitle variants={item}>{tr.hero.title}</HeroTitle>

            <HeroSubtitle variants={item}>{tr.hero.subtitle}</HeroSubtitle>

            <HeroActions variants={item}>
              <BtnPrimary href="#loi">{tr.hero.cta_primary}</BtnPrimary>
              <BtnSecondary href="#couches">{tr.hero.cta_secondary}</BtnSecondary>
            </HeroActions>

            <HeroNote variants={item}>{tr.hero.note}</HeroNote>
          </motion.div>
        </HeroLeft>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <SpiralDiagram />
        </motion.div>
      </HeroGrid>
    </HeroSection>
  );
}
