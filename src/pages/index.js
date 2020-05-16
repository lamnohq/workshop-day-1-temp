import React from "react"
import Image from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>Home</h1>
    <p>Welcome to our site.</p>
    <Image fluid={data.file.childImageSharp.fluid} />
  </Layout>
)

export const pageQuery = graphql`
  query randomImage {
    file(absolutePath: { regex: "/random-unsplash/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
