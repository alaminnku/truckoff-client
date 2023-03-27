import {
  RingLoader,
  PropagateLoader,
  SyncLoader,
  BeatLoader,
} from "react-spinners";
import styles from "@styles/layout/SectionLoader.module.css";

function SectionLoader() {
  return (
    <div className={styles.section_loader}>
      <BeatLoader color="#333333" margin={5} />
    </div>
  );
}

export default SectionLoader;
