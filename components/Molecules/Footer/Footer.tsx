import styles from './Footer.module.css';

interface ILabel {
  title:string;
}

const LabelFooter = ({title}:ILabel) => {
  return <p className={styles.text}>{title}</p>;
}
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <LabelFooter title="Software Engineer" />
      <LabelFooter title="Frontend Developer" />
    </footer>
  );
};

export default Footer;
