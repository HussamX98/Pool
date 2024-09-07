"use client";


export default function PoolDetails({ params }: { params: { id: string } }){
    return(
        <>
    <h1>ID: {params.id}</h1>
        </>
    );
}