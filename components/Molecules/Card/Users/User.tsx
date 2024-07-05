import Image from "next/image";
import styles from './User.module.css';

interface IUserInfo {
  username: string;
  userImage: string;
}

export const UserInfo = ({ userImage, username }: IUserInfo) => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.containerImage}>
        <Image
          src={userImage}
          alt={`${username}'s profile`}
          width={40}
          height={40}
          className={styles.userImage}
        />
        <div className={styles.onlineStatus} data-testid="online-dot">
          <span className={styles.onlineDot}></span>
        </div>
      </div>

      <span className={styles.username}>{username}</span>
    </div>
  );
};