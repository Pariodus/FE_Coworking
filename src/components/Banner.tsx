'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner () {
    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg']
    const [index,setIndex] = useState(0)
    const router = useRouter()

    return (
        <div className={styles.banner} onClick={ ()=> {setIndex(index+1) }}>
            <Image src={covers[index%3]}
                alt='cover'
                fill={true}
                objectFit='cover'/>

            <div className={styles.backgroundtexture}></div>
            
            <div className={styles.bannerText}>
                <h1 className='text-5xl font-medium '>FridayBid</h1>
                <h3 className='text-2xl font-medium m-3'>Working together is better than apart</h3>
                <button className={styles.button}
                    onClick={(e)=>{e.stopPropagation(); router.push('/coworkings')}}>
                    CoworkingSpace
                </button>
            </div>

            

        </div>
    )
}