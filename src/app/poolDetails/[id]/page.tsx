"use client";

import { cards, ICard, people } from "@/app/cardInfo";
import { PageTitle } from "@/app/components/pageTitle";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Card, CardFooter, Image } from "@nextui-org/react";
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
                <div className="flex flex-row items-center justify-center pb-10 w-full">
                        <AnimatedTooltip items={people} />
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
                            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold  dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-start mx-auto bg-transparent flex"
                            style={{width:"100vw"}}
                        >
                            <div style={{overflow:"scroll"}} >
                                <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none"
                                style={{}}
                                >
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    height={200}
                                    src="https://nextui.org/images/hero-card.jpeg"
                                    width={200}
                                />
                                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <p className="text-tiny text-white/80" style={{flex:"auto"}}>
                                    <div className="flex" style={{flexDirection:"column"}}>
                                        <p>
                                            Member:
                                        </p>
                                        <p>
                                            Date:
                                        </p>
                                        <p>
                                            From:
                                        </p>
                                        <p>
                                            Price:
                                        </p>
                                    </div>
                                    </p>
                                </CardFooter>
                            </Card>
                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none"
                                style={{}}
                                >
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    height={200}
                                    src="https://nextui.org/images/hero-card.jpeg"
                                    width={200}
                                />
                                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <p className="text-tiny text-white/80" style={{flex:"auto"}}>
                                    <div className="flex" style={{flexDirection:"column"}}>
                                        <p>
                                            Member:
                                        </p>
                                        <p>
                                            Date:
                                        </p>
                                        <p>
                                            From:
                                        </p>
                                        <p>
                                            Price:
                                        </p>
                                    </div>
                                    </p>
                                </CardFooter>
                            </Card>
                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none"
                                style={{}}
                                >
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    height={200}
                                    src="https://nextui.org/images/hero-card.jpeg"
                                    width={200}
                                />
                                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <p className="text-tiny text-white/80" style={{flex:"auto"}}>
                                    <div className="flex" style={{flexDirection:"column"}}>
                                        <p>
                                            Member:
                                        </p>
                                        <p>
                                            Date:
                                        </p>
                                        <p>
                                            From:
                                        </p>
                                        <p>
                                            Price:
                                        </p>
                                    </div>
                                    </p>
                                </CardFooter>
                            </Card>
                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none"
                                style={{}}
                                >
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    height={200}
                                    src="https://nextui.org/images/hero-card.jpeg"
                                    width={200}
                                />
                                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <p className="text-tiny text-white/80" style={{flex:"auto"}}>
                                    <div className="flex" style={{flexDirection:"column"}}>
                                        <p>
                                            Member:
                                        </p>
                                        <p>
                                            Date:
                                        </p>
                                        <p>
                                            From:
                                        </p>
                                        <p>
                                            Price:
                                        </p>
                                    </div>
                                    </p>
                                </CardFooter>
                            </Card>
                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none"
                                style={{}}
                                >
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    height={200}
                                    src="https://nextui.org/images/hero-card.jpeg"
                                    width={200}
                                />
                                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <p className="text-tiny text-white/80" style={{flex:"auto"}}>
                                    <div className="flex" style={{flexDirection:"column"}}>
                                        <p>
                                            Member:
                                        </p>
                                        <p>
                                            Date:
                                        </p>
                                        <p>
                                            From:
                                        </p>
                                        <p>
                                            Price:
                                        </p>
                                    </div>
                                    </p>
                                </CardFooter>
                            </Card>
                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none"
                                style={{}}
                                >
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    height={200}
                                    src="https://nextui.org/images/hero-card.jpeg"
                                    width={200}
                                />
                                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <p className="text-tiny text-white/80" style={{flex:"auto"}}>
                                    <div className="flex" style={{flexDirection:"column"}}>
                                        <p>
                                            Member:
                                        </p>
                                        <p>
                                            Date:
                                        </p>
                                        <p>
                                            From:
                                        </p>
                                        <p>
                                            Price:
                                        </p>
                                    </div>
                                    </p>
                                </CardFooter>
                            </Card>
                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none"
                                style={{}}
                                >
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    height={200}
                                    src="https://nextui.org/images/hero-card.jpeg"
                                    width={200}
                                />
                                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <p className="text-tiny text-white/80" style={{flex:"auto"}}>
                                    <div className="flex" style={{flexDirection:"column"}}>
                                        <p>
                                            Member:
                                        </p>
                                        <p>
                                            Date:
                                        </p>
                                        <p>
                                            From:
                                        </p>
                                        <p>
                                            Price:
                                        </p>
                                    </div>
                                    </p>
                                </CardFooter>
                            </Card>
                            </div>
                        </motion.h1>
                        
                    </HeroHighlight>
                </div>
            </div>
        </div>
    );
}