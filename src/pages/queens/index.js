import * as React from "react"
import Layout from "../../components/layout"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Queen from "../../components/queen.js"
import {
  containerUpperFull,
  pageTitle,
  rosesContainter,
  rose,
  containerUpper,
  containerLower,
  containerLowerInfo,
  containerQueens,
} from "../../page.module.css"

const QueensPage = ({
  data: {
    allWpQueen: { edges },
    wpPage: { queensFields },
  },
}) => {
  const image = getImage(queensFields.picture.localFile)
  return (
    <Layout pageTitle="The queens of England between 1450 and 1550">
      
  
      
      <section className={containerUpperFull}>
        <section className={rosesContainter}>
          <GatsbyImage className={rose}image={image} alt={queensFields.picture.altText} />
          <GatsbyImage className={rose}image={image} alt={queensFields.picture.altText} />
          <GatsbyImage className={rose}image={image} alt={queensFields.picture.altText} />
        </section>
        <section className={containerUpper}>
          <h1 className={pageTitle}>{queensFields.title}</h1>
          <div
              dangerouslySetInnerHTML={{
                __html: queensFields.description,
              }}
            />
        </section>
      </section>
      <section className={containerLower}>
          <section className={containerLowerInfo}>
             
          </section>
              <article className={containerQueens}>
                {edges.map(({ node: queen }) => (
                <Queen key={queen.id} slug={queen.slug} queen={queen} />
              ))}
          </article>
      </section>
    
    </Layout>
  )
}

export default QueensPage

export const query = graphql`
  query {
    wpPage(slug: { eq: "queens" }) {
      queensFields {
        title
        description
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
              )
            }
          }
          altText
        }
      }
    }
    allWpQueen {
      edges {
        node {
          id
          slug
          queenMeta {
            name
            aliveFrom
            portraitOfTheQueen {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: BLURRED
                    layout: FULL_WIDTH
                    height: 100
                    width: 100
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
