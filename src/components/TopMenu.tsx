import TopMenuItem from "./TopMenuItem"
import styles from './topmenu.module.css'

export default function TopMenu(){
    return (
            <div className={styles.menucontainer}>
                <TopMenuItem title='Reservations' pageRef='reservations/'/>
                <TopMenuItem title='Profile' pageRef="/profile/"/>
            </div>
    )
}