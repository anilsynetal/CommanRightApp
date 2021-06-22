import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const Appbar = ({title}) => {
  return (
    <AppBar position="static" className="MuiAppBar-colorTransp ">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="w-100 text-primary" >
          {title}
        </Typography>
        <ul className="appbar-links">
          <li><Link to='/Manage'>Manage</Link></li>
          <li><Link to='/Register'>Register</Link></li>
          <li><Link to='/EmployeeList'>Employee</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </Toolbar>
    </AppBar>
  )
}
Appbar.defaultProps = {
  title: 'Employee Tracker',
}
export default Appbar
