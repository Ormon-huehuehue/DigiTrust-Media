"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Sparkles,
  Users,
  Heart,
  Play,
  MessageCircle,
  TrendingUp,
  Star,
  BadgeCheck,
  Crown,
  Search,
  ArrowUp,
  MousePointerClick,
  Ticket,
  CalendarDays,
} from "lucide-react"

/* ============================================================
 * Shared decorative graphics for the service cards.
 * Each graphic is FLUID — it fills the full width of its
 * container (square graphics use aspect-square, the chart/list
 * ones are full-width). Grayscale / blueish palette, subtle
 * float animations. Purely visual (aria-hidden).
 * ============================================================ */

const easeFloat = "easeInOut" as const

function Pill({
  children,
  className = "",
  dy = -6,
  duration = 5,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  dy?: number
  duration?: number
  delay?: number
}) {
  return (
    <motion.div
      className={`absolute flex items-center gap-1.5 rounded-full border border-blue-100 bg-white/90 px-3 py-1.5 shadow-md backdrop-blur ${className}`}
      animate={{ y: [0, dy, 0] }}
      transition={{ duration, repeat: Infinity, ease: easeFloat, delay }}
    >
      {children}
    </motion.div>
  )
}

/* Dotted texture with a circular fade, sits behind a graphic. */
function TexturedBackdrop() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.12) 1px, transparent 0)",
        backgroundSize: "22px 22px",
        maskImage: "radial-gradient(circle at center, black 28%, transparent 72%)",
        WebkitMaskImage: "radial-gradient(circle at center, black 28%, transparent 72%)",
      }}
    />
  )
}

/* ============================================================
 * 1. Creator Activation — brand hub with orbiting creators
 * ============================================================ */
// Five nodes evenly spaced (72° apart) on a circle of radius 40% around the
// centre (50,50) — so they sit exactly on the 80%-size orbit ring below.
const NODES = [
  { x: 50, y: 10, icon: <Users />, delay: 0 },
  { x: 88, y: 38, icon: <Play />, delay: 0.6 },
  { x: 74, y: 82, icon: <Heart />, delay: 1.2 },
  { x: 26, y: 82, icon: <MessageCircle />, delay: 0.9 },
  { x: 12, y: 38, icon: <TrendingUp />, delay: 0.3 },
]

export function CreatorConstellation() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[400px]" aria-hidden>
      {/* concentric orbit rings — nodes sit on the 80%-size middle ring */}
      {[100, 80, 48].map((size) => (
        <div
          key={size}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-200/70"
          style={{ width: `${size}%`, height: `${size}%` }}
        />
      ))}

      {/* connecting lines from hub to each node */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
        {NODES.map((n, i) => (
          <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke="rgb(191 219 254 / 0.7)" strokeWidth="1" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>

      {/* central brand hub — static wrapper centres it, inner motion only scales */}
      <div className="absolute left-1/2 top-1/2 z-10 aspect-square w-[24%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-600 text-white shadow-lg"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: easeFloat }}
        >
          <Sparkles className="h-1/3 w-1/3" />
          <span className="absolute inset-0 -z-10 rounded-full bg-zinc-400/40 blur-md" />
        </motion.div>
      </div>

      {/* orbiting creator nodes — wrapper positions on the ring, inner motion floats */}
      {NODES.map((n, i) => (
        <div
          key={i}
          className="absolute aspect-square w-[14%] -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <motion.div
            className="grid h-full w-full place-items-center rounded-full border border-blue-100 bg-white text-zinc-600 shadow-md [&>svg]:h-2/5 [&>svg]:w-2/5"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: easeFloat, delay: n.delay }}
          >
            {n.icon}
          </motion.div>
        </div>
      ))}

      {/* floating engagement metrics */}
      <Pill className="right-[0%] top-[6%]" dy={-6} duration={5}>
        <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
        <span className="font-mono text-[11px] tabular-nums text-zinc-700">1.2M reach</span>
      </Pill>
      <Pill className="bottom-[35%] left-[-20%]" dy={6} duration={5.6} delay={0.8}>
        <Heart className="h-3.5 w-3.5 text-rose-500" />
        <span className="font-mono text-[11px] tabular-nums text-zinc-700">+248% engagement</span>
      </Pill>
    </div>
  )
}

/* ============================================================
 * 2. Sourcing — talent spotlight profile card
 * ============================================================ */
const CANDIDATES = [
  { x: -5, y: 50, delay: 0.4, bg: "bg-indigo-100", text: "text-indigo-500" },
  { x: 85, y: 68, delay: 1.1, bg: "bg-sky-100", text: "text-sky-500" },
  { x: 40, y: 17, delay: 0.7, bg: "bg-slate-200", text: "text-slate-500" },
]

export function SourcingSpotlight() {
  return (
    <div className="flex justify-center items-center relative mx-auto aspect-square w-full max-w-[400px]" aria-hidden>
      <TexturedBackdrop />
      {/* soft spotlight glow */}
      <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blueish to-blue-200/40 blur-2xl" />

      {/* candidate avatars hugging the card's edges */}
      {CANDIDATES.map((c, i) => (
        <motion.div
          key={i}
          className={`absolute z-10 grid aspect-square w-[13%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white shadow-md [&>svg]:h-2/5 [&>svg]:w-2/5 ${c.bg} ${c.text}`}
          style={{ left: `${c.x}%`, top: `${c.y}%` }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5 + i * 0.5, repeat: Infinity, ease: easeFloat, delay: c.delay }}
        >
          <Users />
        </motion.div>
      ))}

      {/* central featured "reach" card */}
      <motion.div
        className="relative w-[90%] rounded-2xl border border-blue-100 bg-white p-6 shadow-xl"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: easeFloat }}
      >
        {/* verified match — pinned to the card's top-right corner */}
        <div className="absolute -right-3 -top-3 flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-1.5 shadow-md">
          <BadgeCheck className="h-3.5 w-3.5 text-sky-500" />
          <span className="font-mono text-[11px] text-zinc-700">Verified match</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-600 text-white">
            <Crown className="h-8 w-8" />
            <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-white text-sky-500">
              <BadgeCheck className="h-5 w-5" />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="h-3 w-28 rounded-full bg-zinc-300" />
            <span className="flex items-center gap-1 font-mono text-[13px] text-zinc-600">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.9
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          <span>reach</span>
          <span className="text-lg tabular-nums text-zinc-800">8.2M</span>
        </div>
        {/* match progress */}
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-blueish">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-zinc-700 to-zinc-500"
            initial={{ width: "0%" }}
            whileInView={{ width: "92%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </motion.div>
    </div>
  )
}

/* ============================================================
 * 3. SEO — search ranking climb
 * ============================================================ */
const RANK_ROWS = [
  { rank: 1, w: "82%", you: true },
  { rank: 2, w: "64%", you: false },
  { rank: 3, w: "70%", you: false },
  { rank: 4, w: "52%", you: false },
]

export function SeoRanking() {
  return (
    <div className="relative mx-auto w-full max-w-[400px]" aria-hidden>
      {/* search bar */}
      <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3.5 shadow-md">
        <Search className="h-5 w-5 text-zinc-400" />
        <span className="font-mono text-[14px] text-zinc-600">your brand</span>
        <motion.span
          className="ml-0.5 inline-block h-4 w-px bg-zinc-500"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>

      {/* ranked results */}
      <div className="mt-4 space-y-3">
        {RANK_ROWS.map((r) => (
          <motion.div
            key={r.rank}
            className={`flex items-center gap-3 rounded-lg border px-3 py-3 ${
              r.you ? "border-blue-200 bg-blueish/60 shadow-sm" : "border-blue-50 bg-white/70"
            }`}
            animate={r.you ? { scale: [1, 1.015, 1] } : undefined}
            transition={r.you ? { duration: 2.4, repeat: Infinity, ease: easeFloat } : undefined}
          >
            <span
              className={`grid h-7 w-7 shrink-0 place-items-center rounded-md font-mono text-[12px] ${
                r.you ? "bg-zinc-800 text-white" : "bg-blueish text-zinc-500"
              }`}
            >
              {r.rank}
            </span>
            <span className="h-2.5 rounded-full bg-zinc-300" style={{ width: r.w }} />
            {r.you && (
              <span className="ml-auto flex items-center gap-0.5 font-mono text-[11px] text-emerald-600">
                <ArrowUp className="h-3.5 w-3.5" />4
              </span>
            )}
          </motion.div>
        ))}
      </div>

      <Pill className="right-[2%] top-[-6%]" dy={-6} duration={5}>
        <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
        <span className="font-mono text-[11px] text-zinc-700">Rank ▲ #1</span>
      </Pill>
    </div>
  )
}

/* ============================================================
 * 4. Ads Marketing — performance bar chart
 * ============================================================ */
const BARS = [38, 52, 46, 68, 80, 96]

export function AdsPerformance() {
  return (
    <div className="relative mx-auto w-full max-w-[400px]" aria-hidden>
      <div className="rounded-2xl border border-blue-100 bg-white/80 p-6 pb-5 shadow-md">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          <span>impressions</span>
          <span className="tabular-nums text-zinc-700">1.4M</span>
        </div>

        {/* bars */}
        <div className="relative mt-5 flex h-[210px] items-end justify-between gap-3">
          {/* trend line */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline
              points="8,64 25,50 42,55 59,34 76,22 92,8"
              fill="none"
              stroke="rgb(16 185 129 / 0.6)"
              strokeWidth="1"
              strokeDasharray="3 3"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-zinc-300 to-zinc-500"
              style={{ height: `${h}%`, transformOrigin: "bottom" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </div>
        <div className="mt-2 h-px w-full bg-blue-100" />
      </div>

      <Pill className="bottom-[6%] right-[2%]" dy={6} duration={5.6} delay={0.6}>
        <MousePointerClick className="h-3.5 w-3.5 text-emerald-500" />
        <span className="font-mono text-[11px] text-zinc-700">CPA ▼ 38%</span>
      </Pill>
    </div>
  )
}

/* ============================================================
 * 5. Events & Experiences — ticket on a textured backdrop
 * ============================================================ */
export function EventsTicket() {
  return (
    <div className="flex justify-center items-center relative mx-auto aspect-square w-full max-w-[400px]" aria-hidden>
      <TexturedBackdrop />
      {/* soft glow behind the ticket */}
      <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blueish to-blue-200/40 blur-2xl" />

      {/* ticket card */}
      <motion.div
        className="flex w-[100%] -rotate-6 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xl"
        animate={{ y: [0, -5, 0], rotate: [-6, -4, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: easeFloat }}
      >
        {/* stub */}
        <div className="flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-zinc-800 to-zinc-600 px-6 py-7 text-white">
          <CalendarDays className="h-10 w-10" />
          <span className="font-mono text-lg uppercase tracking-[0.18em]">Sat</span>
          <span className="font-anton text-5xl leading-none">09</span>
        </div>
        {/* perforation */}
        <div className="my-2 border-l border-dashed border-blue-200" />
        {/* body */}
        <div className="flex flex-1 flex-col  gap-3 px-6 py-7">
          <span className="flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.16em] text-zinc-500">
            <Ticket className="h-4 w-4" /> VIP access
          </span>
          <span className="h-3 w-[90%] rounded-full bg-zinc-300" />
          <span className="h-2.5 w-[80%] rounded-full bg-zinc-200" />
          <span className="h-3 w-[85%] rounded-full bg-zinc-300" />
          <span className="h-2.5 w-[60%] rounded-full bg-zinc-200"/>
          <span className="h-2.5 w-[40%] rounded-full bg-zinc-200" />
        </div>
      </motion.div>

      {/* guest avatars below the ticket */}
      <motion.div className="flex absolute bottom-[20%] -translate-x-1/2 -space-x-2.5"
        animate={{ y: [0, -5, 0], rotate: [-6, -4, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: easeFloat }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="grid h-12 w-12 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-blueish to-blue-200 text-zinc-500 shadow-sm"
          >
            <Users className="h-4 w-4" />
          </span>
        ))}
        <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-white bg-zinc-800 font-mono text-[11px] text-white shadow-sm">
          +9
        </span>
      </motion.div>
    </div>
  )
}
