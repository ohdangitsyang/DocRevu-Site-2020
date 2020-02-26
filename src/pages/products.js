import React, { Component } from "react"
import Layout from "../components/Layout"
import Header from '../examples/RegularHeader'

export default class products extends Component {
  render() {
    return (
      <Layout>
        This is where we'll have our products
        <Header />
      </Layout>
    )
  }
}
