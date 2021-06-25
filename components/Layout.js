import React from 'react'
import Footer from './footer'
import Header from './header'

const Layout = ({children}) => {
     return (
          <>
          <Header layout={children.type.layout}/>
          {children}
          <Footer />
          </>
     )
}

export default Layout
