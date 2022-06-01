import React from 'react'
import { Box } from '@material-ui/core';
import Header from './Header'
import PropTypes from 'prop-types'
import "./Layout.css"

const propTypes = {
    children: PropTypes.node.isRequired
}

const Layout = ({children}) => {
  return (
    <Box>
        <Box>
            <Header/>
        </Box>
        <Box mt={8} ml={5} className="children-styles">
            {children}
        </Box>
    </Box>
  )
}

Layout.propTypes = propTypes;

export default Layout