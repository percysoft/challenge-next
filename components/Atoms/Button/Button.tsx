import styles from "./Button.module.css";

interface IButton {
  type?: "submit" | "reset" | "button";
  onChange?: () => void;
  label: string;
}
export const Button = ({ type, onChange, label }: IButton) => {
  return (
    <button type={type} className={styles.submitButton} onClick={onChange}>
      {label}
    </button>
  );
};
