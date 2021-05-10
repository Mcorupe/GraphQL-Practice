import React, { useReducer, useState } from "react"
import PropTypes from "prop-types"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
// import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles, useTheme } from "@material-ui/core/styles"

// use connect to connect components to redux
import { connect } from "react-redux"
import { IDS_DEV_PAGE_ACTION, IDS_PROD_PAGE_ACTION, IDS_SYSTEST_PAGE_ACTION } from "../state/actions/pageDetailsActions"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))


function ResponsiveDrawer(props) {
  const { dispatch } = props;
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div elevation={8}>
      <List>
        <div className={classes.root.drawer}>
          <List>
            <Divider />
            <ListItem>
              <ListItemText>IDS</ListItemText>
            </ListItem>
            <Divider />
            <ListItem button id="ids_prod" onClick={() => this.props.IDS_DEV_PAGE_ACTION(pageDetails)}> 
              <ListItemText>PROD</ListItemText>
            </ListItem>
            <ListItem button id="ids_systest" onClick={() => dispatch(IDS_SYSTEST_PAGE_ACTION())}>
              <ListItemText>Systest</ListItemText>
            </ListItem>
            <ListItem button id="ids_dev" onClick={() => dispatch(IDS_DEV_PAGE_ACTION())}>
              <ListItemText>Dev</ListItemText>
            </ListItem>
          </List>
        </div>
        <div className={classes.root.drawer}>
          <List>
            <Divider />
            <ListItem>
              <ListItemText>KIRBY</ListItemText>
            </ListItem>
            <Divider />
            <ListItem button id="kirby_prod">
              <ListItemText>PROD</ListItemText>
            </ListItem>
            <ListItem button id="kirby_systest">
              <ListItemText>Systest</ListItemText>
            </ListItem>
            <ListItem button id="kirby_dev">
              <ListItemText>Dev</ListItemText>
            </ListItem>
          </List>
        </div>
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      {/* <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            // container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    name: state.name, 
    climate: state.climate,
    population: state.population,
    terrain: state.terrain
  }
}

// use dispatch to call actions
const mapDispatchToProps = dispatch => {
  return {
     IDS_DEV_PAGE_ACTION: () => dispatch(IDS_DEV_PAGE_ACTION()),
     IDS_PROD_PAGE_ACTION: () => dispatch(IDS_PROD_PAGE_ACTION()),
     IDS_SYSTEST_PAGE_ACTION: () => dispatch(IDS_SYSTEST_PAGE_ACTION()),
     
   }
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

const ConnectedResponsiveDrawer = connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer)

export default ConnectedResponsiveDrawer