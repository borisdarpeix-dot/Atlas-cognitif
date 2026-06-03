"use client";

import React, { createContext, useContext, useState } from "react";

type Lang = "fr" | "en";

const LangContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: "fr", toggle: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
