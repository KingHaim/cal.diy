"use client";

import { useState, type CSSProperties } from "react";

type Lang = "en" | "es" | "fr";

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

const CONTENT: Record<Lang, { heading: string; back: string; items: { label: string; slug: string }[] }> = {
  en: {
    heading: "Choose a duration",
    back: "← Change language",
    items: [
      { label: "1 hour", slug: "physiotherapy-session" },
      { label: "2 hours", slug: "120-minutes-session" },
      { label: "3 hours", slug: "180-minutes-session" },
    ],
  },
  es: {
    heading: "Elige una duración",
    back: "← Cambiar idioma",
    items: [
      { label: "1 hora", slug: "sesion-de-1-hora" },
      { label: "2 horas", slug: "sesion-de-2-horas" },
      { label: "3 horas", slug: "sesion-de-3-horas" },
    ],
  },
  fr: {
    heading: "Choisissez une durée",
    back: "← Changer de langue",
    items: [
      { label: "1 heure", slug: "seance-d-1-heure" },
      { label: "2 heures", slug: "seance-de-2-heures" },
      { label: "3 heures", slug: "seance-de-3-heures" },
    ],
  },
};

const ACCENT = "#ff4f00";

export default function RootLanding() {
  const [lang, setLang] = useState<Lang | null>(null);

  const wrap: CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f7f7f8",
    padding: "24px",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  };
  const card: CSSProperties = {
    width: "100%",
    maxWidth: "440px",
    background: "#fff",
    border: "1px solid #e3e3e8",
    borderRadius: "16px",
    padding: "32px 28px",
    textAlign: "center",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  };
  const avatar: CSSProperties = {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0 auto 14px",
    display: "block",
  };
  const name: CSSProperties = { fontSize: "20px", fontWeight: 700, margin: "0 0 4px" };
  const sub: CSSProperties = { fontSize: "14px", color: "#6b6b73", margin: "0 0 24px" };
  const btn: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: "100%",
    padding: "15px",
    margin: "10px 0",
    fontSize: "16px",
    fontWeight: 600,
    color: "#1a1a1a",
    background: "#fff",
    border: "1.5px solid #e3e3e8",
    borderRadius: "11px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "border-color .15s, background .15s",
  };
  const accentBtn: CSSProperties = { ...btn, borderColor: ACCENT, color: ACCENT };
  const back: CSSProperties = {
    background: "none",
    border: "none",
    color: "#6b6b73",
    fontSize: "13px",
    cursor: "pointer",
    marginTop: "8px",
  };
  const waitlist: CSSProperties = {
    display: "block",
    marginTop: "22px",
    fontSize: "13px",
    color: ACCENT,
    textDecoration: "none",
  };

  return (
    <div style={wrap}>
      <div style={card}>
        <img
          style={avatar}
          src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/31578625/63055b24.jpg"
          alt="Haim Ganancia"
        />
        <h1 style={name}>Haim Ganancia</h1>

        {!lang ? (
          <>
            <p style={sub}>Choose your language · Elige tu idioma · Choisissez votre langue</p>
            {LANGS.map((l) => (
              <button key={l.code} style={btn} onClick={() => setLang(l.code)}>
                <span style={{ fontSize: "22px" }}>{l.flag}</span> {l.label}
              </button>
            ))}
          </>
        ) : (
          <>
            <p style={sub}>{CONTENT[lang].heading}</p>
            {CONTENT[lang].items.map((it) => (
              <a key={it.slug} style={accentBtn} href={`/haimphysio/${it.slug}`}>
                {it.label}
              </a>
            ))}
            <button style={back} onClick={() => setLang(null)}>
              {CONTENT[lang].back}
            </button>
          </>
        )}

        <a style={waitlist} href="https://waitlist.haimphysio.com">
          ⏳ Fully booked? Join the waiting list →
        </a>
      </div>
    </div>
  );
}
