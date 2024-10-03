import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styles from "./statcard.module.css";
export default function Statcard() {
  return (
    <div>
      <div className={styles.statcard}>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}
