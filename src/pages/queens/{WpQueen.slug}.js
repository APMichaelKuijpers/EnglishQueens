import * as React from "react"
import Layout from "../../components/layout"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  queenContainers,
  infoContainer,
  portraitContainer,
  portraitQueen,
  queenname,
  portrayalContainer,
  imagePortrayal,
  bioContainer,
  queenColumn,
  descriptionTitle,
} from "./queen.module.css"
// data: {
//   wpArtist: { artistMeta: artist },
// },
// }) => {
// pageTitle={queen.name}
// const ArtistPage = ({data: {wpArtist: {artistMeta: artist}}}) => {
const QueenPage = ({
  data: {
    wpQueen: { queenMeta: queen },
  },
}) => {
  const portrait = getImage(queen.portraitOfTheQueen.localFile)
  const portrayal1 = getImage(queen.firstImageOfMediaPortrayal.localFile)
  const portrayal2 = getImage(queen.secondImageOfMediaPortrayal.localFile)
  return (
    <Layout>
      <section className={queenContainers}>
        <section className={infoContainer}>
          <p className={queenname}>Queen {queen.name}</p>
          <p>Orgin: {queen.orgin}</p>
          <p>Alive from: {queen.aliveFrom}</p>
          {queen.relgion[1] ? (
            <p> Relgion: {queen.relgion[0]}, {queen.relgion[1]} </p>
          ) : (
            <p>Relgion: {queen.relgion[0]}</p>
          )}
           {queen.coronation ? (
            <p> Coronation: {queen.coronation} </p>
            ) : <p></p>}
          <p>Tenure: {queen.tenure}</p>
          <p>Husband: {queen.husband}</p>
          {queen.wpChildren ? (
            <p>Children: {queen.wpChildren}</p>
            ) : <p></p>}
          
        </section>

        <section className={portrayalContainer}>
          <section className={portraitContainer}>
            <GatsbyImage
              className={imagePortrayal}
              image={portrayal1}
              alt={queen.firstImageOfMediaPortrayal.altText}
            />
          </section>
          <section className={portraitContainer}>
            <GatsbyImage
              className={portraitQueen}
              image={portrait}
              alt={queen.portraitOfTheQueen.altText}
            />
          </section>
          <section className={portraitContainer}>
            <GatsbyImage
              className={imagePortrayal}
              image={portrayal2}
              alt={queen.secondImageOfMediaPortrayal.altText}
            />
          </section>
        </section>
        <section className={queenColumn}></section>
        <section className={queenColumn}></section>
      </section>

      <section className={bioContainer}>
        <p className={descriptionTitle}>Description: </p>
        <div dangerouslySetInnerHTML={{ __html: queen.description }} />
      </section>
    </Layout>
  )
}

export default QueenPage

export const query = graphql`
  query ($id: String) {
    wpQueen(id: { eq: $id }) {
      queenMeta {
        name
        description
        orgin
        relgion
        coronation
        tenure
        husband
        aliveFrom
        wpChildren
        portraitOfTheQueen {
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
          altText
        }
        firstImageOfMediaPortrayal {
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
          altText
        }
        secondImageOfMediaPortrayal {
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
          altText
        }
      }
    }
  }
`

//{
//   wpArtist(id: {eq: $id}) {
//     artistMeta {
//       firstName
//       lastName
//       email
//       description
//       artistName
//       height
//       origin
//       phoneNumber
//       shirtSize
//       shoeSize
//     }
//   }
// }
// `

// import * as React from 'react'
// import Layout from '../../components/layout'
// import { Link, graphql } from 'gatsby'
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import {
//   queenContainers,
//   infoContainer,
//   portraitContainer,
//   portraitQueen,
//   queenname,
//   portrayalContainer,
//   imagePortrayal,
//   bioContainer,
//   queenColumn
// } from './queen.module.css'
// // data: {
// //   wpArtist: { artistMeta: artist },
// // },
// // }) => {
// // pageTitle={queen.name}
// // const ArtistPage = ({data: {wpArtist: {artistMeta: artist}}}) => {
// const QueenPage =  ({
//   data: {
//     wpQueen: {queenMeta: queen},
//   },
//     }) => {
//     const portrait = getImage(queen.portraitOfTheQueen.localFile);
//     const portrayal1 = getImage(queen.firstImageOfMediaPortrayal.localFile)
//     const portrayal2 = getImage(queen.secondImageOfMediaPortrayal.localFile)
//   return (
//     <Layout>
//        <section className={queenContainers}>
//           <section className={queenColumn}>
//             <section className={infoContainer}>
//               <p className={queenname}>Queen {queen.name}</p>
//               <p>Orgin: {queen.orgin}</p>
//               <p>Alive from: {queen.aliveFrom}</p>
//               {queen.relgion[1] ?  (<p>Relgion: {queen.relgion[0]}, {queen.relgion[1]}</p>) : (<p>Relgion: {queen.relgion[0]}</p>)}
//               <p>Coronation: {queen.coronation}</p>
//               <p>Tenure: {queen.tenure}</p>
//               <p>Husband: {queen.husband}</p>
//               <p>Children: {queen.wpChildren}</p>
//             </section>
//           </section>
//           <section className={queenColumn}>
//             <section className={portraitContainer}>
//               <GatsbyImage
//                   className={portraitQueen}
//                   image={portrait}
//                   alt={queen.portraitOfTheQueen.altText}/>
//             </section>
//           </section>
//           <section className={queenColumn}>
//             <section className={portrayalContainer}>
//               <section className={portraitContainer}>
//                 <GatsbyImage
//                   className={imagePortrayal}
//                   image={portrayal1}
//                   alt={queen.firstImageOfMediaPortrayal.altText}/>
//                 </section>
//                 <section className={portraitContainer}>
//                   <GatsbyImage
//                   className={imagePortrayal}
//                   image={portrayal2}
//                   alt={queen.secondImageOfMediaPortrayal.altText}/>
//               </section>
//             </section>
//           </section>
//           <section className={queenColumn}>
//           <section className={bioContainer}>
//             <p>Description: </p>
//             <div dangerouslySetInnerHTML={{__html: queen.description}} />
//           </section>
//         </section>

// {/*

//         */}
//         </section>
//     </Layout>
//   )
// }

// export default QueenPage

// export const query = graphql`
//   query ($id: String) {
//     wpQueen(id: {eq: $id}) {
//           queenMeta {
//             name
//             description
//             orgin
//             relgion
//             coronation
//             tenure
//             husband
//             aliveFrom
//             wpChildren
//             portraitOfTheQueen  {
//               localFile {
//                 childImageSharp {
//                   gatsbyImageData(
//                     quality: 100
//                     placeholder: BLURRED
//                     layout: FULL_WIDTH
//                     height: 100
//                     width: 100
//                   )
//                 }
//               }
//               altText
//             }
//             firstImageOfMediaPortrayal {
//               localFile {
//                 childImageSharp {
//                   gatsbyImageData(
//                     quality: 100
//                     placeholder: BLURRED
//                     layout: FULL_WIDTH
//                     height: 100
//                     width: 100
//                   )
//                 }
//               }
//               altText
//             }
//             secondImageOfMediaPortrayal {
//               localFile {
//                 childImageSharp {
//                   gatsbyImageData(
//                     quality: 100
//                     placeholder: BLURRED
//                     layout: FULL_WIDTH
//                     height: 100
//                     width: 100
//                   )
//                 }
//               }
//               altText
//             }
//       }
//     }
//   }
// `

// //{
// //   wpArtist(id: {eq: $id}) {
// //     artistMeta {
// //       firstName
// //       lastName
// //       email
// //       description
// //       artistName
// //       height
// //       origin
// //       phoneNumber
// //       shirtSize
// //       shoeSize
// //     }
// //   }
// // }
// // `
