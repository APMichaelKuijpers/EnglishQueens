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
  imageContainer,
  portraitQueensOfHenry,
  homeContainerLower,
  containerLowerInfo,
  containerQueens,
} from '../page.module.css'
// Stap 2: definieer je component
const IndexPage = ({
  data: {
    wpPage: { homeFields },
  },
}) => {
  const image = getImage(homeFields.picture.localFile)

  return (
    <main>
      <Layout>
      <section className={homeContainerUpperFull}>
        <section className={homeContainerUpper}>
        <section className={infoContainer}>
          <h1 className={pageTitle}>{homeFields.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homeFields.description,
            }}
          />
        </section>
        <section className={imageContainer}>
          <GatsbyImage
            className={portraitQueensOfHenry}
            image={image}
            alt={homeFields.picture.altText}
          />
        </section>
        </section>
      </section>


      <section className={homeContainerLower}>
          <section className={containerLowerInfo}>
              <h2 className={pageTitle}>Important queens to look at:</h2>
              <hr/>
              <p> Some of the queens with the most influence on English history, but far from the only interesting once.  </p>
          </section>
              <article className={containerQueens}>
                {homeFields.queens.map(queen => {
                    return <Queen slug={`queens/${queen.slug}`} key={queen.id} queen={queen} />
                })}
          </article>
      </section>
      </Layout>
    </main>
  )
}

export const query = graphql`
  query{
    wpPage(slug: {eq: "home"}) {
      homeFields {
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
        queens {
          ... on WpQueen {
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
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
// Stap 3: Exporteer je component
export default IndexPage

//gatsby develop