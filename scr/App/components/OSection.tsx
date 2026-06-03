"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { t } from "@/lib/translations";

const Section = styled.section`
  padding: 7rem 2rem;
  background: var(--bg);
`;

const Inner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Left = styled.div``;

const Label = styled.div`
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--signal);
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 1.2rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 2.5rem;
`;

const BlockTitle = styled.div`
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.9rem;
`;

const Raison = styled.p`
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: #f8f8f8;
  border-left: 2px solid var(--text);
  border-radius: 0 8px 8px 0;
`;

const ProtectionList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ProtectionItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text);
`;

const ProtectionSquare = styled.span`
  width: 6px;
  height: 6px;
  background: var(--signal);
  flex-shrink: 0;
  margin-top: 0.55rem;
`;

const Right = styled.div``;

const InvariantCard = styled.div`
  background: var(--text);
  color: white;
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 2rem;
`;

const InvariantTitle = styled.div`
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  margin-bottom: 1.2rem;
`;

const InvariantFormula = styled.div`
  font-family: var(--font-mono);
  font-size: 1.1rem;
  color: white;
  margin-bottom: 1.2rem;
  letter-spacing: 0.06em;
`;

const InvariantText = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.6);
`;

const OrbitalViz = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export default function OSection() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <Section>
      <Inner>
        <Left>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Label>{tr.O.label}</Label>
            <Title>{tr.O.title}</Title>
            <Subtitle>{tr.O.subtitle}</Subtitle>

            <BlockTitle>{tr.O.raison_title}</BlockTitle>
            <Raison>{tr.O.raison}</Raison>

            <BlockTitle>{tr.O.protection_title}</BlockTitle>
            <ProtectionList>
              {tr.O.protections.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <ProtectionItem>
                    <ProtectionSquare />
                    {p}
                  </ProtectionItem>
                </motion.div>
              ))}
            </ProtectionList>
          </motion.div>
        </Left>

        <Right>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <InvariantCard>
              <InvariantTitle>Invariant</InvariantTitle>
              <InvariantFormula>1 → O → un</InvariantFormula>
              <InvariantText>{tr.O.invariant}</InvariantText>
            </InvariantCard>

            <OrbitalViz>
              <svg viewBox="0 0 240 240" width="240" height="240" fill="none">
                {/* Outer orbit ring */}
                <motion.circle
                  cx={120} cy={120} r={90}
                  stroke="#e8e8e8" strokeWidth="1"
                  strokeDasharray="4 6"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                {/* Middle orbit */}
                <circle cx={120} cy={120} r={55} stroke="#e8e8e8" strokeWidth="0.5" />
                {/* Center — ⊚₀ */}
                <circle cx={120} cy={120} r={18} fill="#111" />
                <circle cx={120} cy={120} r={5} fill="white" />
                <text x={120} y={152} textAnchor="middle" fontSize="10" fontFamily="DM Mono" fill="#666" letterSpacing="0.05em">⊚₀</text>
                {/* O orbiting dot */}
                <motion.g
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "120px", originY: "120px" }}
                >
                  <circle cx={210} cy={120} r={11} fill="white" stroke="#111" strokeWidth="1.5" />
                  <circle cx={210} cy={120} r={3} fill="#0057FF" />
                  <text x={210} y={110} textAnchor="middle" fontSize="9" fontFamily="DM Mono" fill="#111" fontWeight="500">O</text>
                </motion.g>
                {/* 1 — static */}
                <circle cx={65} cy={120} r={10} fill="white" stroke="#ccc" strokeWidth="1" />
                <text x={65} y={124} textAnchor="middle" fontSize="9" fontFamily="DM Mono" fill="#666">1</text>
                {/* un — static */}
                <circle cx={175} cy={120} r={10} fill="white" stroke="#ccc" strokeWidth="1" />
                <text x={175} y={124} textAnchor="middle" fontSize="9" fontFamily="DM Mono" fill="#666">un</text>
              </svg>
            </OrbitalViz>
          </motion.div>
        </Right>
      </Inner>
    </Section>
  );
}
