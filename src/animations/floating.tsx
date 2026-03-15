"use client";
import { useRef } from "react";

interface FloatingProps {
  children: React.ReactNode;
  direction?: "up" | "down"; // الاتجاه
  distance?: number; // المسافة الافتراضية 30px
  duration?: number; // مدة الحركة الافتراضية 0.8s
}

export default function Floating({
  children,
  direction = "down",
  distance = 20,
  duration = 1,
}: FloatingProps) {
  const elRef = useRef<HTMLDivElement>(null);

  return <div ref={elRef}>{children}</div>;
}
