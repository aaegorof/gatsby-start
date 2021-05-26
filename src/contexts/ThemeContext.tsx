import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

type Props = {}


export const AppContext = React.createContext<any>({})

const ThemeContext: React.FC<Props> = ({ children }) => {
  const {
    wp: { languages, defaultLanguage, generalSettings }
  } = useStaticQuery(graphql`
      query SiteMetaData {
          wp {
              languages {
                  slug
                  name
              }
              defaultLanguage {
                  name
                  slug
              }
              generalSettings {
                  title
                  timeFormat
                  email
                  description
                  dateFormat
              }
          }
      }
  `)
  const PREFIXEDURL = window.location.pathname.slice(1).split("/")[0]
  const DEFAULTLANG = languages
    .map(lang => lang.slug)
    .includes(PREFIXEDURL) ? languages.filter(lang => lang.slug === PREFIXEDURL)[0] : defaultLanguage
  const [activeLanguage, setLanguage] = useState(DEFAULTLANG)

  const setLang = val => {
    setLanguage(languages.filter(lng => lng.slug === val)[0])
  }

  return (
    <AppContext.Provider value={{ languages, defaultLanguage, generalSettings, activeLanguage, setLang }}>
      {children}
    </AppContext.Provider>
  )
}

export default ThemeContext
