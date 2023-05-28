import Image from "next/image";
import styles from "../styles/Header.module.scss";
import Logo from "/public/logo.webp";
import Basket from "/public/icons/basket.svg";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Drawer, IconButton, List, ListItem, ListItemText, AppBar, Toolbar} from "@mui/material";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Header = ({ basketQuantity }) => {
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);

    return scrollDirection;
  };

  const scrollDirection = useScrollDirection();
  return (
    <div className={`${styles.header} ${scrollDirection === "down" ? styles.down : ''}`}>

      <div className={styles.nav}>

        <div className={styles.burger}>
          <AppBar
            position="static"
            sx={{
              backgroundColor: 'black',
            }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                <DensityMediumIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Drawer open={open} onClose={handleMenuClose}>
            <List>
              <ListItem button onClick={handleMenuClose}>
                <ListItemText primary="WOMAN">
                  <Link className={styles.navLink} href="/product">WOMAN</Link>
                </ListItemText>
              </ListItem>
              <ListItem button onClick={handleMenuClose}>
                <ListItemText primary="MAN">
                  <Link className={styles.navLink}href="/product">MAN</Link>
                </ListItemText>
              </ListItem>
            </List>
          </Drawer>
        </div>

        <div className={styles.desktopNav}>
          <Link className={styles.navLink} href="/product">WOMAN</Link>
          <Link className={styles.navLink}href="/product">MAN</Link>
        </div>

      </div>
      <div className={styles.logo}>
        <Link className={styles.navLink} href="/">
          <Image src={Logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.basket}>
        <Link className={styles.navLinkBag} href="/basket">
          <Basket className={styles.basketLogo} />
          {basketQuantity > 0 ? <div className={styles.basketQuantity}>{ basketQuantity }</div> : null}
        </Link>
      </div>
    </div>
  );
}
export default Header;
