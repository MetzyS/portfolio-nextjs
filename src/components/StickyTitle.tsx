"use client";
import { RevealWrapper } from "next-reveal";
export default function StickyTitle(props: { title: string; type: string }) {
  <RevealWrapper delay={100}>
    {props.type == "h1" && <h1></h1>}
    {props.type == "span" && <span></span>}
  </RevealWrapper>;
}
