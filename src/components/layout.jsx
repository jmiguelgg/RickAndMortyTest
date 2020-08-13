import React from 'react'
import NavBar from './navBar'

const Layout = (props) => {
    return(
        <React.Fragment>
            <link rel="stylesheet" href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css" integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=" crossorigin="anonymous"></link>
            <div className="h-full w-screen">
                <NavBar/>
                {props.children}
            </div>
        </React.Fragment>
    )
} 

export default Layout