"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { t } from "@/lib/translations";

const Section = styled.section`
  padding: 7rem 2rem;
  background: #f8f8f8;
`;

const Inner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const Label = styled.div`
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-weight: 400;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.7;
  max-width: 56ch;
  margin-bottom: 3.5rem;
`;

const ModeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`;

const ModeRow = styled(motion.div)<{ $default: boolean }>`
  background: ${p => p.$default ? 'var(--text)' : 'white'};
  padding: 1.8rem 2.2rem;
  display: grid;
  grid-template-columns: 160px 80px 1fr;
  gap: 1.5rem;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${p => p.$default ? 'var(--text)' : '#fafafa'};
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const ModeId = styled.div<{ $default: boolean }>`
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: ${p => p.$default ? 'white' : 'var(--text)'};
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const DefaultBadge = styled.span`
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 999px;
  padding: 0.15rem 0.5rem;
`;

const ModeAncrage = styled.div<{ $default: boolean }>`
  font-family: var(--font-mono);
  font-size: 1rem;
  color: ${p => p.$default ? 'rgba(255,255,255,0.5)' : 'var(--muted)'};
`;

const ModeDesc = styled.p<{ $default: boolean }>`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${p => p.$default ? 'rgba(255,255,255,0.65)' : 'var(--muted)'};
`;

export default function Modes() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <Section id="modes">
      <Inner>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Label>{tr.modes.label}</Label>
          <Title>{tr.modes.title}</Title>
          <Subtitle>{tr.modes.subtitle}</Subtitle>

          <ModeList>
            {tr.modes.items.map((mode, i) => (
              <ModeRow
                key={mode.id}
                $default={mode.default}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <ModeId $default={mode.default}>
                  {mode.id}
                  {mode.default && <DefaultBadge>default</DefaultBadge>}
                </ModeId>
                <ModeAncrage $default={mode.default}>{mode.ancrage}</ModeAncrage>
                <ModeDesc $default={mode.default}>{mode.desc}</ModeDesc>
              </ModeRow>
            ))}
          </ModeList>
        </motion.div>
      </Inner>
    </Section>
  );
}
