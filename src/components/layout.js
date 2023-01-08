import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  nav,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitleNav,
  roseTudor,
  roseLancaster,
  roseYork,
} from "./layout.module.css"
import Footer from "./footer";

import test from "../images/RoseLA.png";


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      wpPage(slug: { eq: "contact" }) {
        contactFields {
          title
          email
          phoneNumber
          otherQueens
        }
      }
    }
  `)
  return (
    <div>
     <title>{data.site.siteMetadata.title}</title>
      <nav className={nav}>
        <header className={siteTitleNav}>  
              <div className={roseTudor}></div> 
              {data.site.siteMetadata.title} 
              <div className={roseLancaster}></div>
              <div className={roseYork}></div>
          </header>
        {/* <GatsbyImage className={roseTudor} image={image} alt="tudorRose" /> */}
        {/* <img src="../images/RoseLA.png" alt="test" style={{width: "100px", height: "100px"}}></img> */}
        <ul className={navLinks}>
        <li>
        </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
          <Link className={navLinkText} to="/queens/">
            Queens
          </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/contact-us">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {/* <h1>{pageTitle}</h1> */}
        {children}
      </main>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        contactInfo={data.wpPage.contactFields}
      />
    </div>
  )
}

export default Layout