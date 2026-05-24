"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Play,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

function GithubGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.05c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.21.66.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
import { StatusPill } from "./ui/StatusPill";
import { Kbd } from "./ui/Kbd";

/* -------------------------------------------------------------------------- */
/*  Brand mark                                                                */
/* -------------------------------------------------------------------------- */

function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <div
      className="grid place-items-center rounded-(--r-md) bg-[var(--text-1)] text-[var(--canvas)]"
      style={{ width: size, height: size }}
    >
      <span style={{ fontWeight: 700, fontSize: size * 0.5, letterSpacing: "-0.02em" }}>S</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Top navigation                                                            */
/* -------------------------------------------------------------------------- */

function TopNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color-mix(in_srgb,var(--canvas)_82%,transparent)] border-b border-subtle">
      <div className="max-w-[1180px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <BrandMark />
          <div className="flex flex-col leading-tight">
            <span className="text-heading text-primary">Steel sentinel</span>
            <span className="text-micro text-muted -mt-0.5">Stalowa Wola · Digital twin</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-body text-secondary">
          <a href="#mission" className="hover:text-primary transition-colors">Misja</a>
          <a href="#features" className="hover:text-primary transition-colors">Możliwości</a>
          <a href="#strateg" className="hover:text-primary transition-colors">Strateg AI</a>
          <a href="#stack" className="hover:text-primary transition-colors">Stack</a>
          <a href="#sources" className="hover:text-primary transition-colors">Źródła</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-(--r-md) text-secondary hover:text-primary hover:bg-surface-hover transition-colors"
            aria-label="GitHub"
          >
            <GithubGlyph className="w-4 h-4" />
          </a>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-(--r-md) bg-[var(--text-1)] text-[var(--canvas)] text-body font-medium hover:bg-[color-mix(in_srgb,var(--text-1)_88%,transparent)] transition-colors"
          >
            Otwórz dashboard
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero — left text, right tactical preview                                  */
/* -------------------------------------------------------------------------- */

function ClockLine() {
  const [t, setT] = useState("--:--:--");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      const ss = String(d.getUTCSeconds()).padStart(2, "0");
      setT(`${hh}:${mm}:${ss}Z`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="text-data text-muted">{t}</span>;
}

function TacticalPreview() {
  return (
    <div className="relative w-full aspect-[5/4] rounded-(--r-xl) bg-surface-1 elev-3 overflow-hidden border border-subtle">
      {/* Header strip */}
      <div className="absolute top-0 inset-x-0 h-9 flex items-center justify-between px-3 border-b border-subtle bg-surface-2/80 backdrop-blur">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[var(--error)]" />
          <span className="w-2 h-2 rounded-full bg-[var(--warn)]" />
          <span className="w-2 h-2 rounded-full bg-[var(--ok)]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-micro text-muted">DEFCON</span>
          <StatusPill tone="ok" size="xs" dot>3 · nominalny</StatusPill>
        </div>
        <ClockLine />
      </div>

      {/* Map "canvas" */}
      <svg
        className="absolute inset-0 top-9 w-full"
        style={{ height: "calc(100% - 36px)" }}
        viewBox="0 0 500 400"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="terrain" cx="55%" cy="40%" r="80%">
            <stop offset="0%" stopColor="#f4f6fa" />
            <stop offset="55%" stopColor="#e8ecf3" />
            <stop offset="100%" stopColor="#d6dde9" />
          </radialGradient>
          <linearGradient id="riv" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="dome-cyan">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.22" />
            <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="dome-red">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#dc2626" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
          </radialGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(15,23,42,0.05)" strokeWidth="0.5" />
          </pattern>
        </defs>

        <rect width="500" height="400" fill="url(#terrain)" />
        <rect width="500" height="400" fill="url(#grid)" />

        {/* River San */}
        <path
          d="M 60 30 Q 110 110 145 170 T 220 280 T 360 380"
          stroke="url(#riv)"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 60 30 Q 110 110 145 170 T 220 280 T 360 380"
          stroke="#0891b2"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />

        {/* Defense domes */}
        <circle cx="280" cy="180" r="110" fill="url(#dome-cyan)" />
        <circle cx="280" cy="180" r="110" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 4" opacity="0.45" />

        <circle cx="200" cy="280" r="78" fill="url(#dome-cyan)" />
        <circle cx="200" cy="280" r="78" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />

        {/* Damaged-area halo */}
        <circle cx="380" cy="110" r="80" fill="url(#dome-red)" />

        {/* Connections between nodes */}
        <g stroke="rgba(15,23,42,0.18)" strokeWidth="1" fill="none">
          <path d="M 280 180 Q 320 140 360 110" />
          <path d="M 280 180 Q 240 200 200 260" />
          <path d="M 280 180 Q 300 220 320 280" />
          <path d="M 360 110 Q 330 130 280 180" />
        </g>

        {/* Threat vector — Shahed along river */}
        <path
          d="M 470 380 Q 380 360 300 320 T 180 220 T 90 80"
          stroke="#d97706"
          strokeWidth="1.4"
          strokeDasharray="5 5"
          fill="none"
          opacity="0.75"
        />
        <circle cx="300" cy="320" r="3.5" fill="#d97706" />

        {/* Threat vector — missile */}
        <path
          d="M 480 60 Q 430 90 380 110"
          stroke="#dc2626"
          strokeWidth="1.4"
          strokeDasharray="2 4"
          fill="none"
        />

        {/* Critical infrastructure nodes */}
        {/* OBJ_01 — HSW */}
        <g>
          <circle cx="280" cy="180" r="6" fill="#0b1220" />
          <circle cx="280" cy="180" r="10" fill="none" stroke="#0b1220" strokeOpacity="0.2" />
          <text x="294" y="183" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#0b1220">OBJ_01 · HSW</text>
        </g>
        {/* OBJ_02 — Power */}
        <g>
          <circle cx="360" cy="110" r="6" fill="#0b1220" />
          <text x="372" y="113" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#0b1220">OBJ_02 · Power</text>
        </g>
        {/* OBJ_03 — Water */}
        <g>
          <circle cx="200" cy="280" r="6" fill="#0b1220" />
          <text x="214" y="283" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#0b1220">OBJ_03 · Water</text>
        </g>
        {/* OBJ_04 — GPZ */}
        <g>
          <circle cx="320" cy="280" r="5" fill="#0b1220" />
          <text x="332" y="283" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#0b1220">OBJ_04</text>
        </g>
        {/* OBJ_05 — Rail */}
        <g>
          <circle cx="150" cy="110" r="5" fill="#0b1220" />
          <text x="160" y="113" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#0b1220">OBJ_05</text>
        </g>
        {/* OBJ_06 — Bridge */}
        <g>
          <circle cx="245" cy="220" r="5" fill="#0b1220" />
        </g>
        {/* OBJ_07 — HQ */}
        <g>
          <circle cx="240" cy="155" r="5" fill="#0b1220" />
          <text x="252" y="158" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#0b1220">OBJ_07</text>
        </g>

        {/* DAMAGED indicator on OBJ_02 — pulse ring */}
        <circle cx="360" cy="110" r="11" fill="none" stroke="#dc2626" strokeWidth="1.5">
          <animate attributeName="r" from="6" to="22" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.9" to="0" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Floating mini cards */}
      <div className="absolute left-3 bottom-3 right-3 flex items-end justify-between gap-3 pointer-events-none">
        <div className="bg-surface-2/95 backdrop-blur rounded-(--r-md) px-3 py-2 elev-1 border border-subtle">
          <div className="text-micro text-muted">Wykryto echo radarowe</div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--warn)] anim-pulse" />
            <span className="text-data text-primary">SHAHED-136 · sektor 7</span>
          </div>
        </div>
        <div className="bg-surface-2/95 backdrop-blur rounded-(--r-md) px-3 py-2 elev-1 border border-subtle text-right">
          <div className="text-micro text-muted">PSR-A PILICA</div>
          <div className="text-data text-primary mt-0.5">5000 m · ready</div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="max-w-[1180px] mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-[1.05fr,1fr] gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-7">
          <div className="inline-flex self-start items-center gap-2 pl-2 pr-3 py-1 rounded-(--r-pill) bg-surface-1 border border-subtle elev-1">
            <StatusPill tone="accent" size="xs" dot pulse>Live</StatusPill>
            <span className="text-caption text-secondary">Common Operational Picture · v2</span>
          </div>

          <h1 className="text-primary font-semibold tracking-[-0.02em] leading-[1.04] text-[44px] sm:text-[56px] lg:text-[64px]">
            Niemy strażnik <br className="hidden sm:block" />
            <span className="text-secondary">infrastruktury krytycznej.</span>
          </h1>

          <p className="text-secondary text-[17px] leading-relaxed max-w-[560px]">
            Cyfrowy bliźniak miasta średniej wielkości — analizuje powiązania kaskadowe,
            symuluje wektory ataku z powietrza i pomaga rozstawić obronę zanim dron
            dotrze do bramy Huty.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-(--r-md) bg-[var(--text-1)] text-[var(--canvas)] text-heading font-medium hover:bg-[color-mix(in_srgb,var(--text-1)_88%,transparent)] transition-colors"
            >
              Uruchom dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#mission"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-(--r-md) bg-surface-1 border border-subtle text-primary text-heading hover:bg-surface-hover transition-colors"
            >
              <Play className="w-4 h-4" />
              Zobacz koncepcję
            </a>
          </div>

          <div className="flex items-center gap-5 pt-3 text-caption text-muted">
            <div className="flex items-center gap-1.5">
              <Kbd>A</Kbd>
              <span>Strateg AI</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Kbd>1</Kbd><Kbd>2</Kbd><Kbd>3</Kbd><Kbd>4</Kbd>
              <span>Scenariusze</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <Kbd>Q</Kbd><Kbd>W</Kbd><Kbd>E</Kbd><Kbd>R</Kbd>
              <span>Arsenał</span>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Soft backdrop glow */}
          <div
            aria-hidden
            className="absolute -inset-8 -z-10 rounded-full blur-3xl opacity-50"
            style={{ background: "radial-gradient(closest-side, var(--accent-soft), transparent 70%)" }}
          />
          <TacticalPreview />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stats strip                                                               */
/* -------------------------------------------------------------------------- */

const STATS: { value: string; label: string; sub: string }[] = [
  { value: "7", label: "Obiektów krytycznych", sub: "Realny rejestr HSW · MZK · GPZ" },
  { value: "4", label: "Systemy obronne", sub: "Pilica · WRE · Radar · Patriot" },
  { value: "3", label: "Klasy zagrożeń", sub: "Dron · Shahed · Rakieta" },
  { value: "GPT-4o", label: "Vision strateg AI", sub: "Ocena · plan · red team · AAR" }
];

function StatsStrip() {
  return (
    <section className="border-y border-subtle bg-surface-1/50">
      <div className="max-w-[1180px] mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span className="text-display text-primary">{s.value}</span>
            <span className="text-heading text-primary">{s.label}</span>
            <span className="text-caption text-muted">{s.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mission                                                                   */
/* -------------------------------------------------------------------------- */

function Mission() {
  return (
    <section id="mission" className="max-w-[1180px] mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-[1fr,1.4fr] gap-12 lg:gap-20 items-start">
        <div>
          <span className="text-micro text-muted uppercase tracking-wider">01 · Misja</span>
          <h2 className="text-primary mt-3 text-[34px] sm:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1]">
            Niebezpieczeństwo<br />nadchodzi z góry.
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <blockquote className="text-[19px] leading-relaxed text-primary border-l-2 border-[var(--text-1)] pl-5">
            „Jego wzrok przebija ściany, sieci i instalacje. Zna każdy punkt strategiczny
            i każdą słabość, którą miasto musi chronić."
          </blockquote>
          <p className="text-secondary text-body leading-relaxed">
            Stalowa Wola to miasto z silną tradycją przemysłową i obronną — Huta produkuje Kraby
            i Borsuki, blok gazowo-parowy zasila region, węzeł kolejowy obsługuje logistykę wojskową.
            Steel sentinel mapuje te obiekty, ich kaskadowe zależności i strefy podatności na
            drony komercyjne, amunicję krążącą oraz rakiety manewrujące.
          </p>
          <p className="text-secondary text-body leading-relaxed">
            Narzędzie zaprojektowane jako szablon „Digital Twin" możliwy do wdrożenia w dowolnym
            średnim mieście z przemysłem zbrojeniowym lub ciężkim. Model B2G dla wydziałów
            zarządzania kryzysowego i B2B dla zarządów spółek operujących infrastrukturą krytyczną.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Features — hero card + 5 secondary                                        */
/* -------------------------------------------------------------------------- */

function Features() {
  return (
    <section id="features" className="bg-surface-1/40 border-y border-subtle">
      <div className="max-w-[1180px] mx-auto px-6 py-24">
        <div className="flex flex-col gap-3 max-w-[640px] mb-12">
          <span className="text-micro text-muted uppercase tracking-wider">02 · Możliwości</span>
          <h2 className="text-primary text-[34px] sm:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1]">
            Cały cykl decyzyjny — w jednym ekranie.
          </h2>
          <p className="text-secondary text-body leading-relaxed">
            Od mapy infrastruktury, przez symulację scenariuszy ataku, po automatyczne playbooki
            reagowania. Wszystko działa w czasie rzeczywistym, na cyfrowym bliźniaku miasta.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Hero feature — Cesium 3D map (spans 2 cols on lg) */}
          <article className="lg:col-span-2 lg:row-span-2 relative rounded-(--r-xl) bg-[var(--text-1)] text-[var(--canvas)] p-8 lg:p-10 elev-2 overflow-hidden flex flex-col gap-5 min-h-[420px]">
            {/* Decorative grid */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.07]" aria-hidden>
              <defs>
                <pattern id="hg" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hg)" />
            </svg>

            <div className="relative flex flex-col gap-5 flex-1">
              <span className="text-micro text-[var(--canvas)]/60 uppercase tracking-wider">Centralny widok</span>
              <h3 className="text-[28px] lg:text-[34px] font-semibold tracking-[-0.02em] leading-[1.1]">
                Cyfrowy bliźniak Stalowej Woli na fotorealistycznym globusie 3D.
              </h3>
              <p className="text-[var(--canvas)]/75 leading-relaxed max-w-[520px]">
                CesiumJS z terenem 3D, podkładami satelitarnymi i własną warstwą obiektów krytycznych.
                Klikalne markery, paraboliczne krzywe zależności, kopuły zasięgu broni nakładane na
                rzeczywistą topografię — od koryta Sanu po blok gazowo-parowy.
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-3">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 h-10 px-4 rounded-(--r-md) bg-[var(--canvas)] text-[var(--text-1)] text-body font-medium hover:bg-white transition-colors"
                >
                  Wejdź na mapę
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-caption text-[var(--canvas)]/55">
                  CesiumJS 1.118 · Esri imagery · Photorealistic 3D Tiles
                </span>
              </div>
            </div>
          </article>

          {/* Secondary features */}
          <FeatureCard
            eyebrow="Sieć zależności"
            title="Graf kaskadowych awarii."
            body="Skierowany graf zależności analizuje co padnie po uderzeniu w GPZ — Centrum kryzysowe traci łączność, Huta przechodzi na rezerwę, woda w zbiornikach starcza na 12h."
            hint="@xyflow/react · klawisz S"
          />
          <FeatureCard
            eyebrow="Scenariusze"
            title="Symulator wektorów ataku."
            body="Rój dronów rozpoznawczych, Shahed ukrywający się w korytarzu Sanu, taktyczny pocisk manewrujący, atak saturacyjny. Każdy z realistyczną trajektorią i charakterystyką."
            hint="4 scenariusze · klawisze 1–4"
          />
          <FeatureCard
            eyebrow="Arsenał"
            title="Pilica · WRE · Radar · Patriot."
            body="Rozstawiaj systemy obronne klikiem na mapie. Pilica zwalcza wszystko w 5 km, WRE neutralizuje drony komercyjne, Patriot PAC-3 pokrywa 40 km dla rakiet i Shahedów."
            hint="Q · W · E · R"
          />
          <FeatureCard
            eyebrow="Reagowanie"
            title="Automatyczne playbooki."
            body="Po impakcie aplikacja odpala procedury kryzysowe — syreny miejskie, broadcast SMS przez RCB, ręczne załączanie generatorów rezerwowych w 7 obiektach jednocześnie."
            hint="DEFCON · cascading alarm"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  eyebrow,
  title,
  body,
  hint
}: {
  eyebrow: string;
  title: string;
  body: string;
  hint: string;
}) {
  return (
    <article className="relative rounded-(--r-xl) bg-surface-1 border border-subtle p-6 elev-1 flex flex-col gap-3 transition-shadow hover:elev-2">
      <span className="text-micro text-muted uppercase tracking-wider">{eyebrow}</span>
      <h3 className="text-title text-primary leading-[1.25]">{title}</h3>
      <p className="text-secondary text-body leading-relaxed">{body}</p>
      <span className="text-caption text-muted mt-auto pt-3 border-t border-subtle">{hint}</span>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*  Infrastructure roster                                                     */
/* -------------------------------------------------------------------------- */

const ROSTER: { id: string; name: string; type: string; lat: string; role: string }[] = [
  { id: "OBJ_01", name: "Huta Stalowa Wola S.A.", type: "Przemysł obronny", lat: "50.5482 N · 22.0495 E", role: "Produkcja Krab · Borsuk" },
  { id: "OBJ_02", name: "Elektrownia Stalowa Wola", type: "Energetyka", lat: "50.5574 N · 22.0621 E", role: "Blok gazowo-parowy" },
  { id: "OBJ_03", name: "Ujęcie wody MZK", type: "Wodociągi", lat: "50.5841 N · 22.0315 E", role: "Zaopatrzenie miasta + chłodzenie elektrowni" },
  { id: "OBJ_04", name: "GPZ Maziarnia", type: "Energetyka", lat: "50.5395 N · 22.0682 E", role: "Stacja transformatorowa WN" },
  { id: "OBJ_05", name: "Węzeł Rozwadów", type: "Logistyka", lat: "50.5878 N · 22.0465 E", role: "Kolej towarowa i wojskowa" },
  { id: "OBJ_06", name: "Most gen. Bora-Komorowskiego", type: "Komunikacja", lat: "50.5744 N · 22.0678 E", role: "Przeprawa przez San" },
  { id: "OBJ_07", name: "Centrum zarządzania kryzysowego", type: "Administracja", lat: "50.5701 N · 22.0524 E", role: "Węzeł decyzyjny obrony cywilnej" }
];

function Infrastructure() {
  return (
    <section className="max-w-[1180px] mx-auto px-6 py-24">
      <div className="flex flex-col gap-3 max-w-[640px] mb-10">
        <span className="text-micro text-muted uppercase tracking-wider">03 · Rejestr</span>
        <h2 className="text-primary text-[34px] sm:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1]">
          Siedem obiektów. Cztery łańcuchy zależności.
        </h2>
        <p className="text-secondary text-body leading-relaxed">
          Realne dane GPS, realne role w sieci miasta. To nie demo-mockup — to operacyjny zestaw,
          który można podmienić na rejestr dowolnej innej średniej aglomeracji.
        </p>
      </div>

      <div className="rounded-(--r-xl) bg-surface-1 border border-subtle elev-1 overflow-hidden">
        <div className="hidden md:grid grid-cols-[110px_1.4fr_1fr_1.3fr_1.5fr] gap-4 px-6 py-3 border-b border-subtle bg-surface-data text-micro text-muted uppercase tracking-wider">
          <span>ID</span>
          <span>Obiekt</span>
          <span>Typ</span>
          <span>GPS</span>
          <span>Rola</span>
        </div>
        {ROSTER.map((r, i) => (
          <div
            key={r.id}
            className={`grid md:grid-cols-[110px_1.4fr_1fr_1.3fr_1.5fr] gap-y-1 md:gap-4 px-6 py-4 ${
              i !== ROSTER.length - 1 ? "border-b border-subtle" : ""
            } hover:bg-surface-hover transition-colors`}
          >
            <span className="text-data text-muted">{r.id}</span>
            <span className="text-heading text-primary">{r.name}</span>
            <span className="text-body text-secondary">{r.type}</span>
            <span className="text-data text-secondary">{r.lat}</span>
            <span className="text-body text-secondary">{r.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Threats vs Defense                                                        */
/* -------------------------------------------------------------------------- */

function ThreatsVsDefense() {
  return (
    <section className="border-y border-subtle bg-surface-1/40">
      <div className="max-w-[1180px] mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12">
        {/* Threats */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-micro text-muted uppercase tracking-wider">04 · Threat library</span>
            <h2 className="text-primary text-[28px] font-semibold tracking-[-0.01em] leading-[1.15]">
              Trzy klasy zagrożeń, które dziś naprawdę latają nad linią frontu.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { name: "Dron komercyjny", spec: "Pułap 120 m · niska prędkość", soft: "Podatny na WRE i Pilicę", tone: "info" as const },
              { name: "Shahed-136", spec: "Pułap 250 m · trajektoria wzdłuż Sanu", soft: "Odporny na WRE, Pilica + Patriot", tone: "warn" as const },
              { name: "Rakieta manewrująca", spec: "Pułap 600 m · wysoka prędkość", soft: "Tylko Patriot · korytarz minięty w sekundy", tone: "error" as const }
            ].map((t) => (
              <div key={t.name} className="flex items-start justify-between gap-4 p-5 rounded-(--r-md) bg-surface-1 border border-subtle">
                <div className="flex flex-col gap-1">
                  <span className="text-heading text-primary">{t.name}</span>
                  <span className="text-caption text-muted">{t.spec}</span>
                  <span className="text-body text-secondary mt-1">{t.soft}</span>
                </div>
                <StatusPill tone={t.tone} size="sm" dot>
                  {t.tone === "info" ? "Niskie" : t.tone === "warn" ? "Średnie" : "Krytyczne"}
                </StatusPill>
              </div>
            ))}
          </div>
        </div>

        {/* Defense */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-micro text-muted uppercase tracking-wider">05 · Arsenal</span>
            <h2 className="text-primary text-[28px] font-semibold tracking-[-0.01em] leading-[1.15]">
              Cztery warstwy obrony — od jammingu po przechwytywanie kinetyczne.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { kb: "Q", name: "PSR-A Pilica", range: "5 000 m", note: "VSHORAD — drony, Shahed, rakieta w zasięgu" },
              { kb: "W", name: "WRE Jammer", range: "2 000 m", note: "Walka radioelektroniczna — drony komercyjne" },
              { kb: "E", name: "Radar dopplerowski", range: "3 500 m", note: "Wczesne wykrywanie ech radarowych" },
              { kb: "R", name: "Patriot PAC-3", range: "40 000 m", note: "Daleki zasięg — Shahed i rakiety manewrujące" }
            ].map((w) => (
              <div key={w.kb} className="flex items-center justify-between gap-4 p-5 rounded-(--r-md) bg-surface-1 border border-subtle">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <Kbd>{w.kb}</Kbd>
                  <div className="flex flex-col min-w-0">
                    <span className="text-heading text-primary truncate">{w.name}</span>
                    <span className="text-caption text-muted">{w.note}</span>
                  </div>
                </div>
                <span className="text-data text-primary shrink-0">{w.range}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  STRATEG AI                                                                */
/* -------------------------------------------------------------------------- */

function StrategAI() {
  const phases = [
    { n: "01", title: "Ocena sytuacyjna", body: "Screenshot Cesium → vision model identyfikuje wrażliwości, rysuje pomarańczowe parabole wektorów i czerwone halo wokół najbardziej narażonych węzłów." },
    { n: "02", title: "Plan obrony", body: "Strukturalna rekomendacja 3–6 deploymentów (typ + GPS + rationale), playbooki i warstwowa strategia z ryzykiem rezydualnym." },
    { n: "03", title: "Rozstawienie", body: "Każda rekomendacja ma przycisk „Rozstaw” lub „Rozstaw wszystko” — sekwencyjna animacja, tym samym pipeline'em co manualny click." },
    { n: "04", title: "Red team + AAR", body: "AI wciela się w przeciwnika, generuje scenariusz dopasowany do luk w planie, po wykonaniu — streaming AAR z lekcjami do następnej rotacji." }
  ];

  return (
    <section id="strateg" className="max-w-[1180px] mx-auto px-6 py-28">
      <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:sticky lg:top-24 self-start">
          <div className="inline-flex items-center gap-2 self-start pl-2 pr-3 py-1 rounded-(--r-pill) bg-accent-soft border border-[var(--accent)]/30">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-caption text-accent">Strateg AI · GPT-4o vision</span>
          </div>
          <h2 className="text-primary text-[34px] sm:text-[42px] font-semibold tracking-[-0.02em] leading-[1.05]">
            Architekt obrony, który <span className="text-accent">widzi mapę</span>.
          </h2>
          <p className="text-secondary text-body leading-relaxed">
            Cztero-etapowa pętla planowania i red-teamu zbudowana na Vercel AI SDK ze
            strumieniowymi structured outputs. UI renderuje karty rekomendacji „na żywo"
            zanim cała struktura dotrze z modelu.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-(--r-md) bg-[var(--text-1)] text-[var(--canvas)] text-body font-medium hover:bg-[color-mix(in_srgb,var(--text-1)_88%,transparent)] transition-colors"
            >
              Otwórz panel
              <Kbd className="!bg-[var(--canvas)]/15 !border-[var(--canvas)]/20 !text-[var(--canvas)]">A</Kbd>
            </Link>
          </div>
        </div>

        <ol className="flex flex-col">
          {phases.map((p, i) => (
            <li
              key={p.n}
              className={`grid grid-cols-[auto,1fr] gap-6 py-7 ${
                i !== phases.length - 1 ? "border-b border-subtle" : ""
              }`}
            >
              <span className="text-data text-muted pt-0.5">{p.n}</span>
              <div className="flex flex-col gap-2">
                <h3 className="text-title text-primary">{p.title}</h3>
                <p className="text-secondary text-body leading-relaxed">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tech stack                                                                */
/* -------------------------------------------------------------------------- */

function TechStack() {
  const items = [
    { name: "Next.js 16", role: "App Router · React 19" },
    { name: "CesiumJS 1.118", role: "3D terrain · entities · drillPick" },
    { name: "Tailwind v4", role: "Design tokens · soft SaaS" },
    { name: "@xyflow/react", role: "Graf zależności kaskadowych" },
    { name: "React Three Fiber", role: "Katalog 3D modeli GLB" },
    { name: "Vercel AI SDK", role: "streamObject · structured outputs" },
    { name: "OpenAI GPT-4o", role: "Vision strateg + red team" },
    { name: "Zod", role: "Schematy + walidacja structured outputs" }
  ];

  return (
    <section id="stack" className="border-y border-subtle bg-surface-1/40">
      <div className="max-w-[1180px] mx-auto px-6 py-24">
        <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
          <div className="flex flex-col gap-3 max-w-[560px]">
            <span className="text-micro text-muted uppercase tracking-wider">06 · Stack</span>
            <h2 className="text-primary text-[34px] sm:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1]">
              Zbudowane na narzędziach, które utrzymasz po hackathonie.
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-1.5 text-body text-secondary hover:text-primary transition-colors">
            CLAUDE.md
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.name} className="rounded-(--r-md) bg-surface-1 border border-subtle px-5 py-4">
              <div className="text-heading text-primary">{it.name}</div>
              <div className="text-caption text-muted mt-1">{it.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Closing CTA                                                               */
/* -------------------------------------------------------------------------- */

function ClosingCTA() {
  return (
    <section className="max-w-[1180px] mx-auto px-6 py-28">
      <div className="relative rounded-(--r-xl) bg-[var(--text-1)] text-[var(--canvas)] p-10 lg:p-14 overflow-hidden">
        {/* Decorative arcs */}
        <svg className="absolute right-0 top-0 h-full w-2/3 opacity-[0.08]" viewBox="0 0 600 400" aria-hidden>
          <defs>
            <radialGradient id="g2" cx="100%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="600" cy="200" r="180" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="600" cy="200" r="260" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="600" cy="200" r="340" fill="none" stroke="white" strokeWidth="0.5" />
          <rect width="600" height="400" fill="url(#g2)" />
        </svg>

        <div className="relative flex flex-col gap-6 max-w-[680px]">
          <ShieldCheck className="w-7 h-7 text-[var(--canvas)]/80" />
          <h2 className="text-[34px] sm:text-[44px] font-semibold tracking-[-0.02em] leading-[1.05]">
            Każde miasto średniej wielkości zasługuje na własny digital twin.
          </h2>
          <p className="text-[var(--canvas)]/75 text-body leading-relaxed">
            Steel sentinel został zaprojektowany jako szablon — geometrię obiektów, sieć
            zależności i bibliotekę zagrożeń wymieniasz w plikach JSON. Reszta dashboardu
            zostaje.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-(--r-md) bg-[var(--canvas)] text-[var(--text-1)] text-heading font-medium hover:bg-white transition-colors"
            >
              Uruchom dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#sources"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-(--r-md) border border-[var(--canvas)]/30 text-[var(--canvas)] text-heading hover:bg-[var(--canvas)]/10 transition-colors"
            >
              Zobacz źródła danych
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer id="sources" className="border-t border-subtle bg-surface-1/50">
      <div className="max-w-[1180px] mx-auto px-6 py-14 grid md:grid-cols-[1.4fr,1fr,1fr,1fr] gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <BrandMark size={26} />
            <div className="flex flex-col leading-tight">
              <span className="text-heading text-primary">Steel sentinel</span>
              <span className="text-micro text-muted -mt-0.5">Common Operational Picture</span>
            </div>
          </div>
          <p className="text-caption text-muted max-w-[320px]">
            Projekt hackathonowy · Stalowa Wola · Digital twin krytycznej infrastruktury
            przed zagrożeniami napowietrznymi.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="text-micro text-muted uppercase tracking-wider mb-1">Produkt</span>
          <Link href="/dashboard" className="text-body text-secondary hover:text-primary transition-colors">Dashboard</Link>
          <a href="#features" className="text-body text-secondary hover:text-primary transition-colors">Możliwości</a>
          <a href="#strateg" className="text-body text-secondary hover:text-primary transition-colors">Strateg AI</a>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="text-micro text-muted uppercase tracking-wider mb-1">Zasoby</span>
          <a href="#mission" className="text-body text-secondary hover:text-primary transition-colors">Misja</a>
          <a href="#stack" className="text-body text-secondary hover:text-primary transition-colors">Stack</a>
          <a href="#sources" className="text-body text-secondary hover:text-primary transition-colors">Źródła danych</a>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="text-micro text-muted uppercase tracking-wider mb-1">Kontakt</span>
          <a href="mailto:hello@steelsentinel.dev" className="text-body text-secondary hover:text-primary transition-colors">hello@steelsentinel.dev</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-body text-secondary hover:text-primary transition-colors inline-flex items-center gap-1.5">
            GitHub <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="border-t border-subtle">
        <div className="max-w-[1180px] mx-auto px-6 py-5 flex items-center justify-between flex-wrap gap-3">
          <span className="text-caption text-muted">© 2026 Steel sentinel · zbudowane na Next.js 16 · CesiumJS · OpenAI</span>
          <span className="text-data text-muted">v2.0 · build sentinel-prod</span>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function LandingPage() {
  // Root layout body has `overflow: hidden` (dashboard requirement) — landing needs to scroll.
  useEffect(() => {
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, []);

  // CSS scroll-behavior is unreliable when both html and body are scrollable —
  // intercept anchor clicks and drive the scroll explicitly so it always animates.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <main className="text-primary min-h-screen bg-canvas-gradient">
      <TopNav />
      <Hero />
      <StatsStrip />
      <Mission />
      <Features />
      <Infrastructure />
      <ThreatsVsDefense />
      <StrategAI />
      <TechStack />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
