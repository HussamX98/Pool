"use client";

import AddMemeberModal from "@/app/components/addMemeberModal";
import { NavigationBar } from "@/app/components/navigationBar";
import { PageTitle } from "@/app/components/pageTitle";
import { PoolCardDetails } from "@/app/components/poolCardDetails";
import { cards, ICard, people, poolDetials } from "@/app/data/cardInfo";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import React, { useState } from "react";


export default function PoolDetails({ params }: { params: { id: string } }){


    const [pool, setPool] = React.useState<ICard>();

    useState(()=>{
        cards.map((card, index)=>{
            if(card.id === params.id)
            {
                setPool(pool => ({
                    ...pool,
                    ...card
                }))
            }
        })
    })

    return(
        <div style={{display:"flex", overflow:"auto", flex:"1", flexDirection:"column", height:"100vh"}}>
            <PageTitle title={pool?.title!}/>
            <div className="grid grid-cols-1">
                <p className="flex items-center justify-center text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 mb-10">
                    Balance:
                    <Highlight className="text-black dark:text-white">
                ${pool?.balance}
                </Highlight>
                </p>
                <div className="flex flex-row items-center justify-center pb-10 w-full" style={{gap:"30px"}} >
                      <div className="flex">
                        <AnimatedTooltip items={people} />
                      </div>
                        <div className="flex">
                        <AddMemeberModal/>
                        </div>
                        
                </div>
                <div >
                    <HeroHighlight >
                        <motion.h1
                            initial={{
                            opacity: 0,
                            y: 20,
                            }}
                            animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                            }}
                            transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                            }}
                            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold  dark:text-white  leading-relaxed lg:leading-snug text-start mx-auto bg-transparent grid grid-cols-1"
                            style={{overflow:"scroll", width:"100vw", height:"100%"}}
                        >
                            {poolDetials.map((detail, index)=>{
                                var side:string = "start"
                                if(detail.member === "Hussam Alsiliti")
                                {
                                    side = "end"
                                }
                                return(
                                    <div style={{justifySelf:side}} className="mb-5">
                                        <PoolCardDetails member={detail.member} date={detail.date} src={detail.src} id={detail.id} from={detail.from} price={detail.price}/>
                                    </div>
                                )
                            })}
                        </motion.h1>
                    </HeroHighlight>
                </div>
            </div>
            <NavigationBar/>
        </div>
    );
}