import { Title } from '@/components/Atoms/Labels/Title';
import styles from './interest.module.css';
import { InfoDetail } from '@/components/Molecules/Card/InfoDetail/InfoDetail';

const Interests = () => {
  return (
    <div className={styles.container}>
      <Title>My Interests</Title>
      <InfoDetail
        title="Hobbies"
        data={["Photography", "Cooking", "Music", "Video Games", "Travel"]}
      />
     
      <InfoDetail
        title="Favorite Sports"
        data={["Footbaill", "Basketball", "Chess"]}
      />
      <InfoDetail
        title="Favorite Books"
        data={["Harry Potter", "Maze Runner", "Game of Thrones"]}
      />
    </div>
  );
};

export default Interests;
