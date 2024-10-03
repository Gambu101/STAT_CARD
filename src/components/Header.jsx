import styles from "./header.module.css"
export default function Header(){
    return (
        <div className={styles.header}>
            <h1>Get <span style={{color:"hsl(277, 64%, 61%)"}}>insights</span> that help <br /> your business grow.</h1>
        </div>
    )
}