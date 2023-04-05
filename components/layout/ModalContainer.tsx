import { Dispatch, SetStateAction } from "react";
import styles from "@styles/layout/ModalContainer.module.css";

interface IModalContainerProps {
  component: JSX.Element;
  showModalContainer: boolean;
  setShowModalContainer: Dispatch<SetStateAction<boolean>>;
}

export default function ModalContainer({
  component,
  showModalContainer,
  setShowModalContainer,
}: IModalContainerProps) {
  return (
    <>
      <div
        className={`${styles.modal_container} ${
          showModalContainer && styles.show
        }`}
      >
        {component}
      </div>

      <div
        onClick={() => setShowModalContainer(false)}
        className={`${styles.overlay} ${showModalContainer && styles.show}`}
      ></div>
    </>
  );
}
