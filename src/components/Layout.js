import React from "react"
import Header from "./Header"

const Layout = ({ isHomePage, children }) => {
  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <Header/>
      <main>{children}</main>
    </div>
  )
}

export default Layout
