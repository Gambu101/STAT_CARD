import styles from "./rightside.module.css"
import image from "../assets/image-header-desktop.jpg"
export default function RightSide(){
    return (
        <div className={styles.rightSide}>
            <div>
            <img className={styles.image} src={image} />
            </div>
        </div>
    )
}