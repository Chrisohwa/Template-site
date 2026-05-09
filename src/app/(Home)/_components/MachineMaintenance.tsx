/**
 * MachineMaintenance.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Promotional banner section — refactored to match the reference UI.
 *
 * Layout (reference breakdown):
 * ┌──────────────────────────┬──────────────────────────┐
 * │   LEFT · white bg        │   RIGHT · full photo      │
 * │                          │                           │
 * │   [large bold headline]  │   <compImage>             │
 * │                          │   object-cover            │
 * │   [SHOP ALL]  ←red btn   │                           │
 * └──────────────────────────┴──────────────────────────┘
 * [──── thin teal accent line spanning full width ─────]
 *
 * Key design decisions vs. original:
 *  • Column order reversed  — content left, image right  (was: image left, content right)
 *  • Background changed     — white on left              (was: black on right)
 *  • Headline colour        — near-black #111            (was: amber #DC8204)
 *  • CTA colour             — red #E8201A                (was: amber, routed to /contact-us)
 *  • CTA route              — /category (shop all)       (was: /contact-us)
 *  • Description text       — removed                    (not present in reference)
 *  • Bottom accent          — thin teal gradient rule    (new, matches reference)
 *  • Same `compImage` asset used as the right-panel photo
 * ─────────────────────────────────────────────────────────────────────────────
 */

"use client";

import React from "react";
import Link from "next/link";
import Picture from "@src/components/picture/Picture";
import { compImage } from "@public/images";

const MachineMaintenance = () => {
  return (
    /*
     * Section wrapper
     * ─────────────────────────────────────────────────────────────────────────
     * `relative`          — stacking context for the bottom accent line.
     * `overflow-hidden`   — clips the image to the section boundary.
     * `pb-[3px]`          — reserves 3 px of height for the accent line so it
     *                       doesn't overlap content.
     * Grid: equal halves on md+, single column (image stacked below) on mobile.
     */
    <section className="relative grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden border-t">
      {/* ═══════════════════════════════════════════════════════════════════
          COLUMN 2 · Content (left on desktop, top on mobile)
          White background, generous horizontal padding, vertically centred.
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        className="relative
    before:absolute before:top-0 before:left-0 before:w-full before:h-[2px]
    before:bg-gradient-to-r before:from-#616980 before:via-#6174b0 before:to-#bbcced
    after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px]
    after:bg-gradient-to-r after:from-#1c6973 after:via-green-400 after:to-#bbcced flex flex-col justify-center bg-white px-10 sm:px-14 lg:px-20 py-12 md:py-16"
      >
        {/* ── Main headline ───────────────────────────────────────────────
            Heavy weight, dark colour, large size — matches the editorial
            typographic style in the reference.
            `leading-snug` tightens the multi-line headline for visual density.
        ────────────────────────────────────────────────────────────────── */}
        <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#111111] leading-snug tracking-tight max-w-[500px] mb-8">
          Our products are 100% guarantee to last for at least 10 years.
        </h2>

        {/* ── CTA button ──────────────────────────────────────────────────
            Solid red fill, white uppercase text, wide letter-spacing,
            sharp corners (rounded-none) — all matching the reference exactly.
            `active:scale-95` adds tactile press feedback.
        ────────────────────────────────────────────────────────────────── */}
        <Link
          href="/category"
          className="
            w-[274px]
            bg-[#E8201A] hover:bg-[#c41b15]
            text-white
            text-xs font-semibold text-center
            uppercase tracking-[0.18em]
            px-8 py-3
            rounded-[8px]
            transition-colors duration-200
            active:scale-95
          "
        >
          Shop All
        </Link>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          COLUMN 1 · Photo (right on desktop, bottom on mobile)
          Fixed height on mobile so the image doesn't collapse.
          On md+ the height stretches to match the content column via the
          grid's implicit row height.
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative w-full h-[260px] md:h-[523px] min-h-[260px]">
        <Picture
          src={compImage}
          alt="Gaming setup with monitor, PC tower, mechanical keyboard and headphones"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default MachineMaintenance;
