// Stap 1: Importeer React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// Stap 2: definieer je component
const IndexPage = () => {
  return (
    <main>
       <Layout pageTitle="Home">
       <p>Lorem ipsum</p>
       <StaticImage
        alt="randomized unsplash image!"
        src="https://source.unsplash.com/random/800x600"
      />
       </Layout>     
    </main>
  )
}
// Stap 3: Exporteer je component
export default IndexPage

//gatsby develope