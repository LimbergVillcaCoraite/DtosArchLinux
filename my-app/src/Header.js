import React from 'react'
import {AppBar, Tab, Tabs, Toolbar} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

const Header = () => {
  return (
    <React.Fragment>
        <AppBar>
            <Toolbar>
                <a href='google.com' target='_blanck'><GitHubIcon sx={{ color: "#ffffff" }}/></a>
                <Tabs sx={{marginLeft: 'auto'}} textColor="inherit">
                    <a href='#'><Tab label="Code" sx={{ color: "#ffffff"}}/></a>
                    <a href='#'><Tab label="About US" sx={{ color: "#ffffff"}}/></a>
                </Tabs>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Header