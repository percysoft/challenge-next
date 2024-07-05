"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hamburguer } from "@/components/Atoms/Hamburguer";
import { UserInfo } from "../Card/Users/User";

interface HeaderProps {
  username: string;
  userImage: string;
}

const Header: React.FC<HeaderProps> = ({ username, userImage }) => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  const ItemMenu = (path:string, title:string) => {
    const handleItemClick = () => {
      closeMenu(); 
    };
    return (
      <li
        className={
          pathName === path
            ? `${styles.menuItem} ${styles.active}`
            : styles.menuItem
        }
      >
        <Link href={path}>
          <a onClick={handleItemClick}>{title}</a>
        </Link>
      </li>
    );
  }

  return (
    <div className={styles.header}>
      <Hamburguer onCallback={toggleMenu} menuOpen={menuOpen} />
      <nav className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
        <ul className={styles.menu}>
          {ItemMenu("/", "About Me")}
          {ItemMenu("/interest", "Interest")}
          {ItemMenu("/contact", "Contact")}
        </ul>
      </nav>
      <UserInfo username={username} userImage={userImage} />
    </div>
  );
};

export default Header;
