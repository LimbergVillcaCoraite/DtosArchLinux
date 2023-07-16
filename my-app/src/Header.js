import React from 'react'
import {AppBar, Tab, Tabs, Toolbar} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

const Header = () => {
  return (
    <React.Fragment>
        <AppBar>
            <Toolbar>
                <a href='https://github.com/LimbergVillcaCoraite' target='_blanck'><GitHubIcon sx={{ color: "#ffffff" }}/></a>
                <Tabs sx={{marginLeft: 'auto'}} textColor="inherit">
                    <a href='https://github.com/LimbergVillcaCoraite/DtosArchLinux/tree/react-app' target='_blanck'><Tab label="Code" sx={{ color: "#ffffff"}}/></a>
                    <a href='#' target='_blanck'><Tab label="About US" sx={{ color: "#ffffff"}}/></a>
                </Tabs>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Header