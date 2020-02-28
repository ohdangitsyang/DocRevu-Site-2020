import React from "react"
import { Link, graphql } from 'gatsby'
import StyledHero from '../components/StyledHero'
import Layout from "../components/Layout"

const blog = ({data}) => {

  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid}/>
    </Layout>
  )
}

export const query = graphql`
query {
	blogBcg: file(relativePath:{eq:"blogBcg.jpeg"}) {
    childImageSharp{
      fluid(quality:90, maxWidth:4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default blog
