/**
 * FRAMER CODE OVERRIDES — Henrietta-Style Scroll Animations for REVIEWS.io
 *
 * HOW TO USE IN FRAMER:
 * 1. In Figma, run the official "Figma to HTML with Framer" plugin on frame `LDP` (164:13640)
 *    and paste your layers directly onto the Framer canvas.
 * 2. In Framer, go to Assets -> Code -> New Code File -> name it `FramerScrollOverrides.tsx`
 *    and paste this file.
 * 3. Select each frame in Framer and assign its matching Override in the Right Sidebar -> Code Overrides:
 *    - Hero 1, Hero 2, Hero 3 -> `withHeroCard1`, `withHeroCard2`, `withHeroCard3`
 *    - How It Works (`slide 1`, `slide 2`, `slide 3`) -> `withHowSlide1`, `withHowSlide2`, `withHowSlide3`
 *    - Feedback (`testimonial 1`..`7`) -> `withTestimonial1` .. `withTestimonial7`
 *    - AI Insights Dashboard -> `withDashboard3DTilt`
 *    - Floating Cards / Integrations -> `withFloatingParallax`
 */

import type { ComponentType } from "react";
import React, { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

// ============================================================================
// 1. HERO 1, 2, 3 STICKY STACK OVERRIDES ("Lying on the previous page")
// ============================================================================

export function withHeroCard1(Component: ComponentType<any>): ComponentType<any> {
  return (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
    const smooth = useSpring(scrollYProgress, { stiffness: 110, damping: 26 });
    const scale = useTransform(smooth, [0, 1], [1, 0.92]);
    const borderRadius = useTransform(smooth, [0, 1], [0, 40]);

    return (
      <Component
        {...props}
        ref={ref}
        style={{
          ...props.style,
          position: "sticky",
          top: 0,
          zIndex: 10,
          scale,
          borderRadius,
          transformOrigin: "top center",
        }}
      />
    );
  };
}

export function withHeroCard2(Component: ComponentType<any>): ComponentType<any> {
  return (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
    const smooth = useSpring(scrollYProgress, { stiffness: 110, damping: 26 });
    const scale = useTransform(smooth, [0, 1], [1, 0.93]);
    const borderRadius = useTransform(smooth, [0, 1], [24, 40]);

    return (
      <Component
        {...props}
        ref={ref}
        style={{
          ...props.style,
          position: "sticky",
          top: 0,
          zIndex: 20,
          scale,
          borderRadius,
          boxShadow: "0 -28px 70px rgba(0, 45, 42, 0.32)",
          transformOrigin: "top center",
        }}
      />
    );
  };
}

export function withHeroCard3(Component: ComponentType<any>): ComponentType<any> {
  return (props) => {
    return (
      <Component
        {...props}
        style={{
          ...props.style,
          position: "sticky",
          top: 0,
          zIndex: 30,
          boxShadow: "0 -28px 70px rgba(0, 45, 42, 0.36)",
          transformOrigin: "top center",
        }}
      />
    );
  };
}

// ============================================================================
// 2. "HOW IT WORKS" HORIZONTAL SLIDE STACK OVERRIDES
//    ("Someone call us spicy" horizontal overlapping deck)
// ============================================================================

export function withHowSlide1(Component: ComponentType<any>): ComponentType<any> {
  return (props) => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.18, 0.34], [1, 0.96]);
    return (
      <Component
        {...props}
        style={{
          ...props.style,
          zIndex: 10,
          scale,
          transformOrigin: "left center",
        }}
      />
    );
  };
}

export function withHowSlide2(Component: ComponentType<any>): ComponentType<any> {
  return (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start 90%", "center 45%"],
    });
    const smooth = useSpring(scrollYProgress, { stiffness: 110, damping: 26 });
    const x = useTransform(smooth, [0, 1], [720, 34]);

    return (
      <Component
        {...props}
        ref={ref}
        style={{
          ...props.style,
          zIndex: 20,
          x,
          boxShadow: "-24px 0 50px rgba(0,0,0,0.22)",
        }}
      />
    );
  };
}

export function withHowSlide3(Component: ComponentType<any>): ComponentType<any> {
  return (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start 75%", "center 30%"],
    });
    const smooth = useSpring(scrollYProgress, { stiffness: 110, damping: 26 });
    const x = useTransform(smooth, [0, 1], [720, 68]);

    return (
      <Component
        {...props}
        ref={ref}
        style={{
          ...props.style,
          zIndex: 30,
          x,
          boxShadow: "-28px 0 60px rgba(0,40,37,0.35)",
        }}
      />
    );
  };
}

// ============================================================================
// 3. "FEEDBACK" 7-CARD TESTIMONIAL STACK OVERRIDES
// ============================================================================

function createTestimonialOverride(index: number, initialTilt: number) {
  return function (Component: ComponentType<any>): ComponentType<any> {
    return (props) => {
      const ref = useRef<HTMLDivElement>(null);
      const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 95%", "center 50%"],
      });
      const smooth = useSpring(scrollYProgress, { stiffness: 110, damping: 26 });
      const start = (index - 1) * 0.12;
      const end = Math.min(1, start + 0.18);
      const y = useTransform(smooth, [start, end], [index === 1 ? 0 : 650, 0]);
      const rotate = useTransform(
        smooth,
        [start, end],
        [index === 1 ? 0 : initialTilt, 0]
      );
      const opacity = useTransform(
        smooth,
        [start, start + 0.06],
        [index === 1 ? 1 : 0, 1]
      );

      return (
        <Component
          {...props}
          ref={ref}
          style={{
            ...props.style,
            zIndex: 10 + index,
            y,
            rotate,
            opacity,
            boxShadow: "0 24px 55px rgba(0, 40, 37, 0.22)",
          }}
        />
      );
    };
  };
}

export const withTestimonial1 = createTestimonialOverride(1, 0);
export const withTestimonial2 = createTestimonialOverride(2, 12);
export const withTestimonial3 = createTestimonialOverride(3, -12);
export const withTestimonial4 = createTestimonialOverride(4, 10);
export const withTestimonial5 = createTestimonialOverride(5, -10);
export const withTestimonial6 = createTestimonialOverride(6, 8);
export const withTestimonial7 = createTestimonialOverride(7, -8);

// ============================================================================
// 4. CREATIVE OVERRIDES FOR OTHER FRAMES (3D Dashboard Tilt & Floating Cards)
// ============================================================================

export function withDashboard3DTilt(
  Component: ComponentType<any>
): ComponentType<any> {
  return (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "center center"],
    });
    const rotateX = useTransform(scrollYProgress, [0, 1], [24, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

    return (
      <Component
        {...props}
        ref={ref}
        style={{
          ...props.style,
          perspective: 1400,
          rotateX,
          scale,
          y,
          transformOrigin: "top center",
        }}
      />
    );
  };
}

export function withFloatingParallax(
  Component: ComponentType<any>
): ComponentType<any> {
  return (props) => {
    return (
      <Component
        {...props}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.06 }}
      />
    );
  };
}

