"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { t } from "@/lib/translations";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.88);
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
`;

const NavInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: var(--text);
  text-decoration: none;
`;

const LogoMark = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  position: relative;
  
  &::after {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--signal);
    position: absolute;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 0.82rem;
  font-weight: 400;
  color: var(--muted);
  letter-spacing: 0.02em;
  transition: color 0.2s;
  text-decoration: none;

  &:hover {
    color: var(--text);
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LangToggle = styled.button`
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--muted);
  background: none;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.3rem 0.75rem;
  cursor: pointer;
  letter-spacing: 0.06em;
  transition: all 0.2s;

  &:hover {
    color: var(--text);
    border-color: var(--text);
  }
`;

export default function Navigation() {
  const { lang, toggle } = useLang();
  const tr = t[lang];

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Nav>
        <NavInner>
          <Logo href="#">
            <LogoMark />
            ATLAS ⊙
          </Logo>

          <NavLinks>
            <NavLink href="#concept">{tr.nav.concept}</NavLink>
            <NavLink href="#loi">{tr.nav.loi}</NavLink>
            <NavLink href="#couches">{tr.nav.couches}</NavLink>
            <NavLink href="#agents">{tr.nav.agents}</NavLink>
            <NavLink href="#modes">{tr.nav.modes}</NavLink>
          </NavLinks>

          <NavRight>
            <LangToggle onClick={toggle}>
              {lang === "fr" ? "EN" : "FR"}
            </LangToggle>
          </NavRight>
        </NavInner>
      </Nav>
    </motion.div>
  );
}
