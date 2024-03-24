import TopMenuItem from "./TopMenuItem"
import styles from './topmenu.module.css'

export default function TopMenu(){
    return (
            <div className={styles.menucontainer}>
                <TopMenuItem title='Home' pageRef='/'/>
                <TopMenuItem title='CoworkingSpaces' pageRef='coworkings/'/>
                <TopMenuItem title='About us' pageRef="aboutus/"/>
                <div className='flex flex-row absolute right-0 h-full'>
                    <TopMenuItem title="Cart" pageRef="/cart/"/>
                    <TopMenuItem title='Profile' pageRef="/profile/"/>
                </div>
            </div>
    )
}