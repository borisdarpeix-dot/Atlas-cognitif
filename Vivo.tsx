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

const CheckList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 700px;
`;

const CheckItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: white;
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--text);
  }
`;

const CheckId = styled.div`
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--signal);
  letter-spacing: 0.06em;
`;

const CheckQuestion = styled.p`
  font-size: 0.93rem;
  line-height: 1.6;
  color: var(--text);
`;

const FailNote = styled.div`
  margin-top: 2rem;
  padding: 1.2rem 1.5rem;
  background: #f8f8f8;
  border-left: 2px solid var(--text);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
  letter-spacing: 0.02em;
`;

// Footer
const Footer = styled.footer`
  padding: 4rem 2rem 3rem;
  background: var(--text);
  color: white;
`;

const FooterInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const FooterSpiral = styled.div`
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.4);
  margin-bottom: 2rem;
`;

const FooterMeta = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.3);
`;

export default function Vivo() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <>
      <Section>
        <Inner>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Label>{tr.vivo.label}</Label>
            <Title>{tr.vivo.title}</Title>
            <Subtitle>{tr.vivo.subtitle}</Subtitle>

            <CheckList>
              {tr.vivo.items.map((item, i) => (
                <CheckItem
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <CheckId>{item.id}</CheckId>
                  <CheckQuestion>{item.question}</CheckQuestion>
                </CheckItem>
              ))}
            </CheckList>

            <FailNote>
              {lang === "fr"
                ? "Si INT · ALI · ou SEM échouent → suspension complète · retour humain obligatoire."
                : "If INT · ALI · or SEM fail → complete suspension · mandatory human return."}
            </FailNote>
          </motion.div>
        </Inner>
      </Section>

      <Footer>
        <FooterInner>
          <FooterSpiral>{tr.footer.spiral}</FooterSpiral>
          <FooterMeta>
            <span>{tr.footer.built}</span>
            <span>{tr.footer.version}</span>
          </FooterMeta>
        </FooterInner>
      </Footer>
    </>
  );
}
