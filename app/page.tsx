
import { Title } from '@/components/Atoms/Labels/Title';
import styles from './page.module.css';
import { InfoDetail } from '@/components/Molecules/Card/InfoDetail/InfoDetail';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <Title>About Me</Title>
      <InfoDetail
        title="Introduction"
        data={[
          "  Hello! I am Victor Percy Tataje Guzman,I’m Software Engineer with 7 years of experience working on software develop, specialized in Frontend Developer using as base language JAVASCRIPT, with different frameworks or libraries, React, Vue, Redux, Micro frontends, Documentation of components with Design System. I like to learn about the new JavaScript technologies and implement it in my work place.",
        ]}
      />
      <div className={styles.containerImage}>
        <Image
          src="/percy.png"
          alt="percy"
          width={180}
          height={120}
          className={styles.userImage}
        />
      </div>
      <InfoDetail
        title="Skills"
        data={[
          "JavaScript / TypeScript",
          "React /Gatsby/ Next.js",
          "Node.js",
          "HTML / CSS",
          "GIT",
          "AWS",
          "Vue",
        ]}
      />
      <InfoDetail
        title="Education"
        data={[
          "Bachelor's Degree in Software Engineer  from Universidad Nacional Mayor de San Marcos (2013 - 2018)",
        ]}
      />
    </div>
  );
};

export default AboutMe;
