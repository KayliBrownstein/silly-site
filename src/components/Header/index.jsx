import React from "react"
import NavMenu from "./Nav/NavMenu"
import { Helmet } from "react-helmet"

const Header = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Gatsby Silly Site: Guess the dog breed</title>
      <meta name="description" content="Gatsby silly site to guess dog breed" />
      <html lang="en" />
    </Helmet>
    <NavMenu />
  </>
)

export default Header
