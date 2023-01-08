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
  queenColumn,
  containerLower,
  bioContainer,
  sectionTitle,
} from "./queen.module.css"

const QueenPage = ({
  data: {
    wpQueen: {
      queenMeta: queen,
      houses: { nodes: houses },
    },
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
          <p>
            {" "}
            House(s):{" "}
            {houses.map((house, i) => (
              <span key={i}>
                {house.name} {i + 1 < houses.length && "- "}
              </span>
            ))}
          </p>
          <p>Orgin: {queen.orgin}</p>
          <p>Alive from: {queen.aliveFrom}</p>
          {queen.relgion[1] ? (
            <p>
              {" "}
              Relgion: {queen.relgion[0]}, {queen.relgion[1]}{" "}
            </p>
          ) : (
            <p>Relgion: {queen.relgion[0]}</p>
          )}
          {queen.coronation ? <p> Coronation: {queen.coronation} </p> : <p></p>}
          <p>Tenure: {queen.tenure}</p>

          {queen.husband ? (
            <>
              <p>Husband: {queen.husband}</p>
            </>
          ) : (
            <p></p>
          )}

          {queen.multipleHusbands ? (
            <>
              <p>Husbands:</p>
              <div
                dangerouslySetInnerHTML={{ __html: queen.multipleHusbands }}
              />
            </>
          ) : (
            <p></p>
          )}

          {queen.wpChildren ? (
            <>
              <p>Children: {queen.wpChildren}</p>
            </>
          ) : (
            <p></p>
          )}

          {queen.multipleChildren ? (
            <>
              <p>Children:</p>
              <div
                dangerouslySetInnerHTML={{ __html: queen.multipleChildren }}
              />
            </>
          ) : (
            <p></p>
          )}
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

      <section className={containerLower}>
        <section className={bioContainer}>
          <p className={sectionTitle}>Description: </p>
          <div dangerouslySetInnerHTML={{ __html: queen.description }} />
        </section>
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
        multipleChildren
        multipleHusbands
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
      houses {
        nodes {
          id
          name
        }
      }
    }
  }
`
