import styles from "./footer.module.css"
export default function Footer(){
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.footer_writings}>10K+ <br/><span style={{color:"hsla(0, 0%, 100%, 0.6)"}}>COMPANIES</span></div>
                <div className={styles.footer_writings}>314 <br /><span style={{color:"hsla(0, 0%, 100%, 0.6)"}}>TEMPLATES</span></div>
                <div className={styles.footer_writings}>12M+ <br /><span style={{color:"hsla(0, 0%, 100%, 0.6)"}}>QUERIES</span></div>
            </div>
        </div>
    )
}