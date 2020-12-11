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
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <NavMenu />
  </>
)

export default Header
