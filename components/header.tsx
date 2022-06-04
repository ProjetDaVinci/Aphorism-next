import Link from "next/link";
import { SiTerraform } from "react-icons/si";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.head}>
      <div>
        <SiTerraform size="2em" />
      </div>
      <nav className={styles.navigation}>
        <Link href="/">Главная</Link>
        <Link href="/aforism/authors">Авторы</Link>
        <Link href="/aforism/all">DCt</Link>
        <Link href="/aforism/new">Новые</Link>
        <Link href="/aforism/popular">Популярные</Link>
        <Link href="/aforism/recent">Недавние</Link>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
