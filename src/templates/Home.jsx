import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Home = (props) => {
  const {
    pageContext: {
      data: {
        allWpPage: { nodes: pages }
      }
    }
  } = props

  return (
    <Layout>
      <StaticImage src={"https://avatars.yandex.net/get-music-content/38044/a4061b90.p.218333/400x400"} alt={"Носков"}/>
      {pages?.map(({ title }) => <div key={title}>{title}</div>)}
    </Layout>
  )
}

export default Home
