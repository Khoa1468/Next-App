import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { MenuItem } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(): JSX.Element {
  const classes = useStyles();

  return (
    <div className="makeStyles-root-4">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className="MuiTypography-root makeStyles-title-57 MuiTypography-h6"
          >
            React App
          </Typography>
          <Link href="/about" passHref>
            <a href="/about">
              <MenuItem>About</MenuItem>
            </a>
          </Link>
          <Link href="/" passHref>
            <a href="/">
              <MenuItem>Home</MenuItem>
            </a>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
