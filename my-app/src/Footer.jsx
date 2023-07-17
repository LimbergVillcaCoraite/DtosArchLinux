import React from 'react'
import {AppBar, Tab, Tabs, Toolbar} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import './Header.css'

const Footer = () => {
  return (
    <div className='Footer'>
    <React.Fragment>
        <AppBar>
            <Toolbar>
                <a href='https://github.com/LimbergVillcaCoraite' target='_blanck'><GitHubIcon sx={{ color: "#ffffff" }}/></a>
                <Tabs sx={{marginLeft: 'auto'}} textColor="inherit">
                    <a href='https://www.clamav.net/' target='_blanck'><Tab label="Documentation" sx={{ color: "#ffffff"}}/></a>
                    <a href='https://github.com/LimbergVillcaCoraite/DtosArchLinux/tree/react-app' target='_blanck'><Tab label="Code" sx={{ color: "#ffffff"}}/></a>
                </Tabs>
            </Toolbar>
        </AppBar>
    </React.Fragment>
    </div>
  )
}

export default Footer