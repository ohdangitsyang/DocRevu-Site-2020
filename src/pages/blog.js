import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      Welcome to the Blog Page
      <Link to="/">Home Page</Link>
    </Layout>
  )
}

export default blog
