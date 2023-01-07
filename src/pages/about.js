// Stap 1: Importeer React
import * as React from 'react'
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Queen from "../components/queenHome.js"
import { 
  homeContainerUpperFull,
  homeContainerUpper,
  infoContainer,
  pageTitle,
  imageAboutContainer,
  aboutImages,
} from '../page.module.css'
// Stap 2: definieer je component
const AboutPage = ({
  data: {
    wpPage: { aboutFields },
  },
}) => {
  const imageAbout1 = getImage(aboutFields.picture.localFile)
  const imageAbout2 = getImage(aboutFields.picture2.localFile)

  return (
    <main>
      <Layout>
      <section className={homeContainerUpperFull}>
        <section className={homeContainerUpper}>
        <section className={infoContainer}>
          <h1 className={pageTitle}>{aboutFields.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: aboutFields.description,
            }}
          />
        </section>
        <section className={imageAboutContainer}>
          <GatsbyImage
            className={aboutImages}
            image={imageAbout1}
            alt={aboutFields.picture.altText}
          />
          <GatsbyImage
            className={aboutImages}
            image={imageAbout2}
            alt={aboutFields.picture2.altText}
          />
        </section>
        </section>
      </section>
      </Layout>
    </main>
  )
}

export const query = graphql`
  query{
    wpPage(slug: {eq: "about"}) {
      aboutFields {
        title
        description
        fieldGroupName
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture2{
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
// Stap 3: Exporteer je component
export default AboutPage

//gatsby develop