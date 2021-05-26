import React from "react"
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

// normalize CSS across browsers
import "./src/css/normalize.css"

// custom CSS styles
import "./src/css/style.css"
import ThemeContext from "./src/contexts/ThemeContext"

export const wrapRootElement = ({ element }) => <ThemeContext>{element}</ThemeContext>
