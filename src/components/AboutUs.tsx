import Image from "next/image"

export default function AboutUs({github, discord}: {github:string, discord:string}){
    return (
        <div className="flex flex-col my-5">
            {/* <Image src="/img/gitLogo.jpg"/> */}
            <div>{github}</div>
            

            <div>{discord}</div>
            
        </div>
    )
}