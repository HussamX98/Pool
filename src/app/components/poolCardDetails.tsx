import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";



type propsType={
    member:string,
    date:string,
    src:string,
    id:string,
    from:string,
    price:string
}

export function PoolCardDetails(props:propsType){

    return(
                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none"
                                >
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    height={400}
                                    src={props.src}
                                    width={200}
                                    style={{height:"250px"}}
                                />
                                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <div className="text-tiny text-white/80" style={{flex:"auto"}}>
                                    <div className="flex" style={{flexDirection:"column"}}>
                                        <p>
                                            Member: {props.member}
                                        </p>
                                        <p>
                                            Date: {props.date}
                                        </p>
                                        <p>
                                            From: {props.from}
                                        </p>
                                        <p>
                                            Price: ${props.price}
                                        </p>
                                    </div>
                                    </div>
                                </CardFooter>
                            </Card>
    )
}