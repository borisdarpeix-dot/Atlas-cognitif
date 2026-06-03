"use client";

import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/lang";
import { t } from "@/lib/translations";

const Section = styled.section`
  padding: 7rem 2rem;
  background: var(--text);
  color: white;
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
  color: rgba(255,255,255,0.4);
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 400;
  margin-bottom: 1rem;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.55);
  max-width: 52ch;
  line-height: 1.7;
  margin-bottom: 4rem;
`;

const Formula = styled.div`
  font-family: var(--font-mono);
  font-size: clamp(0.9rem, 2vw, 1.15rem);
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.85);
  margin-bottom: 3.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const FormulaStep = styled.button<{ $active: boolean; $isKey: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: inherit;
  letter-spacing: inherit;
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  transition: all 0.2s;
  color: ${p => p.$active ? 'white' : p.$isKey ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)'};
  background: ${p => p.$active ? 'rgba(255,255,255,0.12)' : 'transparent'};
  border: 1px solid ${p => p.$active ? 'rgba(255,255,255,0.2)' : 'transparent'};

  &:hover {
    color: white;
    background: rgba(255,255,255,0.08);
  }
`;

const Arrow = styled.span`
  color: rgba(255,255,255,0.25);
  font-size: 0.85em;
`;

const DetailCard = styled(motion.div)`
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 600px;
`;

const DetailId = styled.div`
  font-family: var(--font-mono);
  font-size: 2rem;
  font-weight: 300;
  color: white;
  margin-bottom: 0.5rem;
`;

const DetailName = styled.div`
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: rgba(255,255,255,0.6);
  margin-bottom: 1.2rem;
  font-style: italic;
`;

const DetailDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.55);
`;

const SpecialNote = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: rgba(255,255,255,0.3);
  letter-spacing: 0.04em;
`;

const positionKeys = ["⊚₀", "0", "1", "O", "un", "∞", "⊚₀⁺"];

export default function LoiMere() {
  const { lang } = useLang();
  const tr = t[lang];
  const [active, setActive] = useState("O");

  const pos = tr.loi.positions as Record<string, { name: string; desc: string }>;
  const current = pos[active];

  return (
    <Section id="loi">
      <Inner>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Label>{tr.loi.label}</Label>
          <Title>{tr.loi.title}</Title>
          <Subtitle>{tr.loi.subtitle}</Subtitle>

          <Formula>
            {positionKeys.map((key, i) => (
              <span key={key} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <FormulaStep
                  $active={active === key}
                  $isKey={["⊚₀", "O", "⊚₀⁺"].includes(key)}
                  onClick={() => setActive(key)}
                >
                  {key}
                </FormulaStep>
                {i < positionKeys.length - 1 && <Arrow>→</Arrow>}
              </span>
            ))}
          </Formula>

          <AnimatePresence mode="wait">
            <DetailCard
              key={active}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <DetailId>{active}</DetailId>
              <DetailName>{current?.name}</DetailName>
              <DetailDesc>{current?.desc}</DetailDesc>
              {active === "O" && (
                <SpecialNote>
                  {lang === "fr"
                    ? "O n'apparaît pas dans les cycles purement humains — il devient nécessaire dès qu'une IA entre dans le cycle."
                    : "O does not appear in purely human cycles — it becomes necessary as soon as an AI enters the cycle."}
                </SpecialNote>
              )}
            </DetailCard>
          </AnimatePresence>
        </motion.div>
      </Inner>
    </Section>
  );
}
