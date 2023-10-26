import { Link, Outlet } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { HiOutlineShoppingCart } from "react-icons/hi";

import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <Link className={styles.logo} to="/">
          <img src={logo} alt="" />
        </Link>
        <ul className={styles.navLinksContainer}>
          <Link className={styles.navLink} to="/shop">
            Shop
          </Link>
          <Link className={styles.navLink} to="/contact">
            Contact
          </Link>
          <Link className={styles.navLink} to="/signIn">
            Sign In
          </Link>
          <Link className={styles.navLink}>
            <HiOutlineShoppingCart size={24} />
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
