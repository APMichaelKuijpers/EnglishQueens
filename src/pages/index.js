// Stap 1: Importeer React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
// Stap 2: definieer je component
const IndexPage = () => {
  return (
    <main>
       <Layout pageTitle="English queens from 1450 till 1550">
       <p>Lorem ipsum</p>
       
       </Layout>     
    </main>
  )
}
// Stap 3: Exporteer je component
export default IndexPage

//gatsby develope