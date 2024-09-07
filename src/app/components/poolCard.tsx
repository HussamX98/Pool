import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Image from "next/image";
import Link from "next/link";
import { people } from "../data/cardInfo";
import AddPoolModal from "./addPoolModal";

type propsType={
    title:string,
    balance:string,
    src:string,
    id:string,
}


export function PoolCard(props:propsType){

if(props.id === "")
{
    return(
        <>
            <AddPoolModal/>
        </>
    )
}
else
{
    return(  
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 md:w-[40rem] sm:w-[30rem] h-auto relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border  ">
      <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {props.title.length > 0? props.title : ""}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Current Balance : ${props.balance}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={props.src}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20} >
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={people} />
                </div>
          </CardItem>
          <Link href={`/poolDetails/${props.id}`}>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Details
          </CardItem>
          </Link>
          
        </div>
      </CardBody>
    </CardContainer>
    )
}
}


