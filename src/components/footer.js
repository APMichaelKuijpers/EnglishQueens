import * as React from 'react'
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    footer,
    infoContainer,
    contactContainer,
    colorChange,
  } from "./footer.module.css"



const Footer = ({ siteTitle, contactInfo }) => {
  return (
    <footer className={footer}>
      <section className={infoContainer}>
        <section className={colorChange}>{siteTitle}</section>
        <p>All rights reserved. ©MichaelAP</p>
      </section>
      <section className={contactContainer}>
        <div>
          <p>Contact us:</p>
          <p><a target="__blank" href={`mailto:${contactInfo.email}`}> {contactInfo.email} </a></p>
          <p><a target="__blank" href={`tel:${contactInfo.phoneNumber}`}>{contactInfo.phoneNumber} </a> </p>
        
        </div>
      </section>
    </footer>
  )
}

export default Footer

