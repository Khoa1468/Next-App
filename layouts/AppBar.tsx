import Link from "next/link";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
} from "@material-ui/core";
import LinkComponent, { DetailProps } from "components/AppBar-Link";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      cursor: "pointer",
      display: "flex-box",
    },
  })
);

/**
 * This Is NavBar Component
 * @returns ```JSX.Element```
 */

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const className = "a black";

  const detailLink: Array<DetailProps> = [
    {
      href: "/",
      className,
      text: "Home",
    },
    {
      href: "/about",
      className,
      text: "About",
    },
    {
      href: "/todos",
      className,
      text: "Todos",
    },
    {
      href: "/j4f",
      className,
      text: "J4F",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <LinkComponent handleClose={handleClose} detail={detailLink} />
          </Menu>
          <Link href="/" passHref>
            <a href="/" className="a white">
              <Typography variant="h6" className={classes.title}>
                Next App
              </Typography>
            </a>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
