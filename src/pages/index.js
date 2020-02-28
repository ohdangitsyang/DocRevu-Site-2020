import React from "react"
import { graphql } from 'gatsby'
import StyledHero from '../components/StyledHero'
import Layout from "../components/Layout"
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default ({data}) => (

  <Layout>
    <StyledHero home="true" img=
      {data.defaultBcg.childImageSharp.fluid}>
      <Banner  
        title="simple e-discovery" 
        info="Elit eiusmod do aute voluptate et aliqua esse officia ex laboris consequat in."
      >        
        <AniLink fade to="/products" className="btn-white">Explore Products</AniLink>
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
