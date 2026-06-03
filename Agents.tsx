"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { t } from "@/lib/translations";

const Section = styled.section`
  padding: 7rem 2rem;
  background: white;
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

const AgentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const AgentCard = styled(motion.div)<{ $index: number }>`
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 2rem 1.75rem;
  background: white;
  transition: border-color 0.2s, box-shadow 0.2s;
  cursor: default;

  &:hover {
    border-color: var(--text);
    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  }
`;

const AgentId = styled.div`
  font-family: var(--font-mono);
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: 0.06em;
  color: var(--text);
  margin-bottom: 0.3rem;
`;

const AgentRole = styled.div`
  font-size: 0.8rem;
  color: var(--signal);
  font-family: var(--font-mono);
  letter-spacing: 0.04em;
  margin-bottom: 1.2rem;
`;

const AgentDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--muted);
  margin-bottom: 1.5rem;
`;

const AgentMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
`;

const MetaKey = styled.span`
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #bbb;
  min-width: 56px;
`;

const MetaVal = styled.span`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text);
`;

const AgentRisk = styled.div`
  margin-top: 1.2rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--border);
  font-size: 0.75rem;
  color: #ccc;
  font-family: var(--font-mono);
`;

export default function Agents() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <Section id="agents">
      <Inner>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Label>{tr.agents.label}</Label>
          <Title>{tr.agents.title}</Title>
          <Subtitle>{tr.agents.subtitle}</Subtitle>

          <AgentGrid>
            {tr.agents.items.map((agent, i) => (
              <AgentCard
                key={agent.id}
                $index={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <AgentId>{agent.id}</AgentId>
                <AgentRole>{agent.role}</AgentRole>
                <AgentDesc>{agent.desc}</AgentDesc>
                <AgentMeta>
                  <MetaRow>
                    <MetaKey>{lang === "fr" ? "ancrage" : "anchor"}</MetaKey>
                    <MetaVal>{agent.ancrage}</MetaVal>
                  </MetaRow>
                  <MetaRow>
                    <MetaKey>{lang === "fr" ? "couches" : "layers"}</MetaKey>
                    <MetaVal>{agent.couches}</MetaVal>
                  </MetaRow>
                  <MetaRow>
                    <MetaKey>tours</MetaKey>
                    <MetaVal>{agent.tours}</MetaVal>
                  </MetaRow>
                </AgentMeta>
                <AgentRisk>{agent.risks}</AgentRisk>
              </AgentCard>
            ))}
          </AgentGrid>
        </motion.div>
      </Inner>
    </Section>
  );
}
