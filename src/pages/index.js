import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

export default () => (
  <Layout>
    <SimpleHero>
      <Banner title="simple e-discovery" 
              info="Elit eiusmod do aute voluptate et aliqua esse officia ex laboris consequat in.">        
        <Link to="/products" className="btn-white">Explore Products</Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)