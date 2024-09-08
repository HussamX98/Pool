"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/moving-border";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalTrigger
} from "../../components/ui/animated-modal";
import { IPeople, people } from "../data/cardInfo";

export default function AddMemeberModal() {
  const [currentPeople, setCurrentPeople] = React.useState<IPeople[]>([]);
  const [index, setIndex] = React.useState<number>(1)


    const updateList = () =>{
        var n = people.slice(0,index)
        setCurrentPeople([...n])
    }
     


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log(currentPeople)
    updateList();
    if(currentPeople.length < 2)
    {
        setIndex(index + 1)
    }
    
    
    console.log(currentPeople);
  };

const placeholders = [
    "Hussam Alsiliti",
    "Yousef Langi",
    "Tupac",
    "Marshal Mathers",
    "Tyler Durden",
    "Andrew Laeddis",
  ];


  return (
    <div className="  flex items-center justify-center">
      <Modal>
        <ModalTrigger className=" flex justify-center group/modal-btn">
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Add Friends!
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            🤑
          </div>
      </Button>
          
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Who You Poolin Up With?
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div className="flex flex-row items-center justify-center mt-20 w-full">
                    <AnimatedTooltip items={currentPeople} />
         </div>
         <button
          className="mb-4 mt-20 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        >
          Pool It!
          <BottomGradient />
        </button>
    </div>
</ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

