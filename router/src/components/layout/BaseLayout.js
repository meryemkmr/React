import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'

function Baselayout(props) {
    return (
        <>
        <Header />

                {props.children}

        <Footer />
            
        </>
    )
}

export default Baselayout
