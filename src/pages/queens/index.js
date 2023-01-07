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
  imageContainer,
  portraitQueensOfHenry,
  homeContainerLower,
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
      <section className={homeContainerLower}>
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

// const ArtistsPage = ({data: {allWpArtist: {edges}}}) => {
//   return (
//     <Layout pageTitle="Artists of Inghelbrecht Agency">
//       {edges.map((item) => {
//         const artist = item.node.artistMeta;
//         const slug = item.node.slug;
//         return <Link to={`/artists/${slug}`}>
//           <p key={item.node.id}>{artist.firstName} {artist.lastName}</p>
//         </Link>

//       })}
//     </Layout>
//   )
// }

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

// export const query = graphql`
//   query {
//     allWpQueen {
//       edges {
//         node {
//           queenMeta {
//             name
//           }
//           id
//           slug
//           }
//         }
//       }
//     }
// `

// import * as React from 'react'
// import Layout from '../../components/layout'
// import { Link, graphql } from 'gatsby'
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Queen from "../../components/queen"
// import {
//   hero,
//   section,
//   subtitle,
//   queens,
//   description,
// } from "../../page.module.css"

// const QueensPage =  ({
//   data: {
//     allWpQueen: {edges},
//     wpPage: {queensFields},

//   },
//     }) => {
//       console.log("test");
//       console.log(queensFields, edges);
//       // const image = getImage(queen.firstImageOfMediaPortrayal.localFile)
//       // const image = getImage( queensFields.picture.localFile )
//       const image = getImage("./images/example.png");
//   return (
//     <Layout pageTitle="The queens of England between 1450 and 1550">
//         <p>A list of queens will be displayed here.</p>
//       {/* <GatsbyImage
//       className={hero}
//         image={image}
//         alt={queensFields.picture.altText}
//       /> */}
//       <section className={section}>
//         <h2 className={subtitle}>{queensFields.title}</h2>
//         <div
//         className={description}
//           dangerouslySetInnerHTML={{
//             __html: queensFields.description,
//           }}
//         />
//         <div className={queens}>
//           {edges.map(({ node: queen}) => (
//             <Queen key={queen.id} slug={queen.slug} queen={queen} />
//           ))}
//         </div>
//       </section>
//   </Layout>
//   )
// }

// // const ArtistsPage = ({data: {allWpArtist: {edges}}}) => {
// //   return (
// //     <Layout pageTitle="Artists of Inghelbrecht Agency">
// //       {edges.map((item) => {
// //         const artist = item.node.artistMeta;
// //         const slug = item.node.slug;
// //         return <Link to={`/artists/${slug}`}>
// //           <p key={item.node.id}>{artist.firstName} {artist.lastName}</p>
// //         </Link>

// //       })}
// //     </Layout>
// //   )
// // }

// export default QueensPage
