"use client";
import { motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { cards } from "../cardInfo";
import { PageTitle } from "../components/pageTitle";
import { PoolCard } from "../components/poolCard";
import { useOutsideClick } from "../hooks/useOutsideClick";

export default function Home() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div style={{display:"flex", overflow:"auto", flex:"1", flexDirection:"column", height:"100vh"}}>
    <PageTitle title="Pools"/>
    <div className="grid grid-cols-2">
    {cards.map((card, index) =>(
      <PoolCard title={card.title} src={card.src} balance={card.balance} id={card.id} key={index}/>
    ))}
    <PoolCard title={""} src={""} balance={""} id={""} key={"none"}/>
    </div>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

