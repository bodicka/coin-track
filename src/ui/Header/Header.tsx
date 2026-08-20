import {
  NAV_ITEM_LEFT,
  NAV_ITEM_RIGTH,
} from "../../constants/header.constants";
import styles from "./Header.module.scss";
import logo from "../../../assets/logo/cointracker-logo.png";
import { useState } from "react";
import burger from "../../../assets/logo/Group 692.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const allNav = [...NAV_ITEM_LEFT, ...NAV_ITEM_RIGTH];

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <img src={logo} alt="LOGO" width={200} height={150} />
          <nav className={styles.desktopNav}>
            {NAV_ITEM_LEFT.map((item) => (
              <Link key={item.id} to={item.url}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.containerRigth}>
          <nav className={styles.desktopNav}>
            {NAV_ITEM_RIGTH.map((item) => (
              <Link key={item.id} to={item.url}>
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className={styles.burgerButton}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <img src={burger} alt="burger" />
          </button>
        </div>
        {isOpen && (
          <nav className={styles.mobileNav}>
            {allNav.map((item) => (
              <a key={item.id} href={item.url}>
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
