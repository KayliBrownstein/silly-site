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
  let [dogBreedImage, setDogBreedImage] = useState({})

  const getRandomDogBreedId = () => {
    return Math.floor(Math.random() * 264 + 1)
  }

  useEffect(() => {
    console.log("useEffect called")

    getDogBreedData(getRandomDogBreedId()).then(response => {
      // console.log(getRandomDogBreedId())
      // console.log(response[0])
      setDogBreedImage({
        url: response[0].url,
        height: response[0].height,
        width: response[0].width,
      })
      // console.log(dogBreedImage)
      setDogBreedData(response[0].breeds[0])
    })
  }, [dogBreed])

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <ProfileCard
              dogBreedData={dogBreedData}
              dogBreedImage={dogBreedImage}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
