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
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
        rel="stylesheet"
        rel="preload"
      />
    </Helmet>
    <NavMenu />
  </>
)

export default Header
