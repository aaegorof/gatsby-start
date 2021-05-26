import React, { useState, useEffect, useContext } from "react"
import { AppContext } from "../contexts/ThemeContext"
import { graphql, Link, StaticQuery, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

type Props = {}

const Header: React.FC<Props> = props => {
  const { languages, setLang, activeLanguage } = useContext(AppContext)
  const {
    wp: {
      header: { siteTitle, siteTagLine, siteLogoUrl }
    }
  } = useStaticQuery(graphql`
      query HeaderQuery {
          wp {
              header: getHeader {
                  siteLogoUrl
                  siteTagLine
                  siteTitle
                  favicon
              }
          }
      }
  `)
  return (
    <header className="site-header container">
      <div className="site-brand">
        <Link to="/" title={siteLogoUrl}>
          <img src={siteLogoUrl} alt={`${siteTitle} - logo`} title={`${siteTitle} - logo`} className={"logo"}/>
        </Link>
        <div className="site-brand__content">
          <h2 className="screen-reader-text site-brand__title">{siteTitle}</h2>
          <p className="site-brand__description">{siteTagLine}</p>
        </div>
      </div>
      {/*<PrimaryMenuRu />*/}
      {/*{languages.length > 0 && <Select*/}
      {/*  onChange={val => setLang(val)}*/}
      {/*  options={languages.map(lang => ({*/}
      {/*    label: lang.name,*/}
      {/*    value: lang.slug*/}
      {/*  }))}*/}
      {/*  value={activeLanguage.slug}*/}
      {/*/>}*/}
    </header>
  )
}

export default Header
