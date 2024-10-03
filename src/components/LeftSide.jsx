import Header from "./Header";
import Writing from "./Writing";
import Footer from "./Footer"
import styles from "./leftside.module.css";
export default function LeftSide() {
  return (
    <div>
      <div className={styles.leftSide}>
        <Header />
        <Writing />
        <Footer />
      </div>
    </div>
  );
}
