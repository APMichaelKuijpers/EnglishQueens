import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'

const QueensPage = ({data: {allWpQueen: {edges}}}) => {
  return (
    <Layout pageTitle="The queens of England between 1450 and 1550">
        <p>A list of queens will be displayed here.</p>
    {edges.map((item) => {
      const queen = item.node.queenMeta;
      const slug = item.node.slug;
      return <Link to={`/queens/${slug}`}>
            <p key={item.node.id}>{queen.name}</p>
          </Link>
      // return <p key={item.node.id}>{queen.name}</p>
    })}
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
    allWpQueen {
      edges {
        node {
          queenMeta {
            name
            portrait
          }
          id
          slug
          }
        }
      }
    }
`