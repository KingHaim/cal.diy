"use client";

import { useState, type CSSProperties } from "react";

type Lang = "en" | "es" | "fr";

const PORTAL_SIGN_IN = "https://book.haimphysio.com/account/login/google";

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
  const langRow: CSSProperties = { display: "flex", gap: "12px", marginTop: "6px" };
  const langBtn: CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "22px 6px",
    background: "#fff",
    border: "1.5px solid #e3e3e8",
    borderRadius: "14px",
    cursor: "pointer",
  };
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
  const orLine: CSSProperties = {
    margin: "18px 0 0",
    fontSize: "12px",
    letterSpacing: "0.04em",
    color: "#6b6b73",
  };
  const googleBtn: CSSProperties = { ...btn, margin: "10px 0 0" };

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
            <div style={langRow}>
              {LANGS.map((l) => (
                <button key={l.code} style={langBtn} onClick={() => setLang(l.code)}>
                  <span style={{ fontSize: "40px", lineHeight: 1 }}>{l.flag}</span>
                  <span style={{ fontSize: "13px", fontWeight: 600, marginTop: "10px", color: "#1a1a1a" }}>
                    {l.label}
                  </span>
                </button>
              ))}
            </div>
            <p style={orLine}>or · o · ou</p>
            <a style={googleBtn} href={PORTAL_SIGN_IN}>
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.5 5.7-6.6 7.1l6.3 5.3C37.4 38.4 44 33 44 24c0-1.2-.1-2.3-.4-3.5z"/>
              </svg>
              Continue with Google
            </a>
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
