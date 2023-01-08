import * as React from 'react'
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  containerUpperFull,
  pageTitle,
  rosesContainter,
  rose,
  containerUpper,
  containerLower,
  sectionTitle,
  formContact,
} from "./../page.module.css"


const ContactPage = ({
  data: {
    wpPage: { contactFields },
  },
}) => {
  const image = getImage(contactFields.picture.localFile)
  return (
    <Layout pageTitle="The queens of England between 1450 and 1550">
      
  
      
      <section className={containerUpperFull}>
        <section className={rosesContainter}>
          <GatsbyImage className={rose}image={image} alt={contactFields.picture.altText} />
          <GatsbyImage className={rose}image={image} alt={contactFields.picture.altText} />
          <GatsbyImage className={rose}image={image} alt={contactFields.picture.altText} />
        </section>
        <section className={containerUpper}>
          <h1 className={pageTitle}>{contactFields.title}</h1>
          <div
              dangerouslySetInnerHTML={{
                __html: contactFields.description,
              }}
            />


            <section>
                <p>Email: <a href={`mailto:${contactFields.email}`}> {contactFields.email} </a></p>
                <p>Tel: <a href={`tel:${contactFields.phoneNumber}`}> {contactFields.phoneNumber} </a></p>
                <p><a target="__blank" href={contactFields.otherQueens}> Get more information about queens from other time periods. </a></p>
          </section>
        </section>
      </section>
      <section className={containerLower}>
          {/* <section className={formContact}>
              <h1 className={sectionTitle}>Send us a message</h1>
              <form name="contact" method="POST" data-netlify="true">
                <label>Your Name:</label>
                  <input type="text" name="name" required={true} />
                <label>Your Email:</label>
                  <input type="email" name="email" required={true} />
                <label>Message:</label>
                  <textarea name="message" required={true}></textarea>
              <input type="hidden" name="form-name" value="contact" />
                  <button type="submit">Send</button>
          </form>
        </section> */}
      </section>
    
    </Layout>
  )
}


export const query = graphql`
  query {
    wpPage(slug: {eq: "contact"}) {
      contactFields {
        title
        description
        email
        phoneNumber
        otherQueens
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  }
`
export default ContactPage