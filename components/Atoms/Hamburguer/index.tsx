import styles from "./Hamburguer.module.css";

interface IHamburguer {
  menuOpen: boolean;
  onCallback: () => void;
}
export const Hamburguer = ({ onCallback, menuOpen }: IHamburguer) => {
  return (
    <div className={styles.hamburger} onClick={onCallback} role="button">
      <div
        className={`${styles.bar} ${menuOpen ? styles.change : ""}`}
        role="presentation"
      ></div>
      <div
        className={`${styles.bar} ${menuOpen ? styles.change : ""}`}
        role="presentation"
      ></div>
      <div
        className={`${styles.bar} ${menuOpen ? styles.change : ""}`}
        role="presentation"
      ></div>
    </div>
  );
};
