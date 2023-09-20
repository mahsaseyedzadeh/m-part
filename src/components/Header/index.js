import Logo from "@/components/Logo";
import styles from './Header.module.scss';
import SearchBox from "@/components/SearchBox";
import SwitchTheme from "@/components/SwitchTheme";

const Header = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <Logo/>
        <div className={styles.leftSide}>
          <SearchBox/>
          <SwitchTheme/>
        </div>
      </div>

    </nav>
  )
}
export  default Header;