import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  wrapper,
  queenImage,
  image,
  queenInfo,
  queenText,
  queenName,
} from "./queenHome.module.css"


const Queen = ({ queen, slug }) => {
  const profile = getImage(queen.queenMeta.portraitOfTheQueen.localFile)
  return (
    <Link className={wrapper} to={slug}>
      <section >
      <GatsbyImage
        className={queenImage}
        image={profile}
        alt={queen.queenMeta.portraitOfTheQueen.altText}
      />
      <article className={queenInfo}>
        <section className={queenText}>
          <p className={queenName} > {queen.queenMeta.name}</p>
          <p> {queen.queenMeta.aliveFrom}</p>
        </section>
      </article>
      </section>
    </Link>
  )
}

export default Queen;

