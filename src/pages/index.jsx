import React from "react"
import Header from "../components/Header"
import ProfileCard from "../components/ProfileCard"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useEffect, useState } from "react"
import getDogBreedData from "../utils/getDogBreedData"

const Home = () => {
  let [dogBreed, setDogBreed] = useState("Affenpinscher")
  let [dogBreedData, setDogBreedData] = useState(null)

  useEffect(() => {
    console.log("useEffect called")
    getDogBreedData().then(response => {
      console.log(`hiiii ${response}`)
      setDogBreedData(response)
    })
  }, [dogBreed])

  console.log(`line 23 ${dogBreedData}`)

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <ProfileCard dogBreedData={dogBreedData} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home

// useEffect(() => {
//   let mounted = true
//   getList().then(items => {
//     if (mounted) {
//       setList(items)
//     }
//   })
//   return () => (mounted = false)
// }, [])
