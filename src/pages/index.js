import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

export default ({data}) => (

  <Layout>
    <StyledHero home="true" img=
      {data.defaultBcg.childImageSharp.fluid}>
      <Banner  
        title="simple e-discovery" 
        info="Elit eiusmod do aute voluptate et aliqua esse officia ex laboris consequat in."
      >        
        <Link to="/products" className="btn-white">Explore Products</Link>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
)

export const query = graphql`
query {
	defaultBcg: file(relativePath:{eq:"defaultBcg.jpeg"}) {
    childImageSharp{
      fluid(quality:90, maxWidth:4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
