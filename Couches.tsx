"use client";

import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CoucheCell = styled.button<{ $active: boolean; $isRupture: boolean }>`
  background: ${p => p.$active ? 'var(--text)' : p.$isRupture ? '#f0f0f0' : 'white'};
  border: none;
  padding: 1.2rem 1rem;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  &:hover {
    background: ${p => p.$active ? 'var(--text)' : '#f5f5f5'};
  }
`;

const CoucheId = styled.div<{ $active: boolean }>`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: ${p => p.$active ? 'rgba(255,255,255,0.5)' : 'var(--muted)'};
`;

const CoucheName = styled.div<{ $active: boolean }>`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${p => p.$active ? 'white' : 'var(--text)'};
`;

const CoucheAgent = styled.div<{ $active: boolean }>`
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: ${p => p.$active ? 'rgba(255,255,255,0.4)' : '#aaa'};
`;

const Detail = styled(AnimatePresence)``;

const DetailPanel = styled(motion.div)`
  background: white;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem 2.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: start;
`;

const DetailId = styled.div`
  font-family: var(--font-mono);
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--text);
  line-height: 1;
`;

const DetailRight = styled.div``;

const DetailName = styled.div`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 0.3rem;
`;

const DetailAgent = styled.div`
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--signal);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const DetailDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--muted);
`;

export default function Couches() {
  const { lang } = useLang();
  const tr = t[lang];
  const [active, setActive] = useState(0);

  const current = tr.couches.items[active];

  return (
    <Section id="couches">
      <Inner>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Label>{tr.couches.label}</Label>
          <Title>{tr.couches.title}</Title>
          <Subtitle>{tr.couches.subtitle}</Subtitle>

          <Grid>
            {tr.couches.items.map((c, i) => (
              <CoucheCell
                key={c.id}
                $active={active === i}
                $isRupture={c.id === "C10"}
                onClick={() => setActive(i)}
              >
                <CoucheId $active={active === i}>{c.id}</CoucheId>
                <CoucheName $active={active === i}>{c.name}</CoucheName>
                <CoucheAgent $active={active === i}>{c.agent}</CoucheAgent>
              </CoucheCell>
            ))}
          </Grid>

          <AnimatePresence mode="wait">
            <DetailPanel
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <DetailId>{current.id}</DetailId>
              <DetailRight>
                <DetailName>{current.name}</DetailName>
                <DetailAgent>{current.agent}</DetailAgent>
                <DetailDesc>{current.desc}</DetailDesc>
              </DetailRight>
            </DetailPanel>
          </AnimatePresence>
        </motion.div>
      </Inner>
    </Section>
  );
}
