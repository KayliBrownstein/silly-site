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
  // let [dogBreed, setDogBreed] = useState("Affenpinscher")
  let [dogBreedData, setDogBreedData] = useState(null)
  let [dogBreedImage, setDogBreedImage] = useState({})
  const [isSending, setIsSending] = useState(false)
  // const [showDogBreed, setShowDogBreed] = useState(false)
  // const [dogBreedButtonText, setDogBreedButtonText] = useState("")

  const getRandomDogBreedId = () => {
    return Math.floor(Math.random() * 264 + 1)
  }

  const toggleButtonState = () => {
    setIsSending(true)
    getDogBreedData(getRandomDogBreedId()).then(response => {
      if (!response[0]) {
        console.log("No response from API")
        return toggleButtonState()
      } else {
        setDogBreedImage({
          url: response[0].url,
          height: response[0].height,
          width: response[0].width,
        })
        setDogBreedData(response[0].breeds[0])
        setIsSending(false)
      }
    })
  }

  // const toggleShowDogBreed = () => {
  //   setShowDogBreed(!showDogBreed)
  // }

  useEffect(() => {
    console.log("useEffect called")
    toggleButtonState()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Row className="my-3 text-center">
          <Col>
            <Button
              disabled={isSending}
              onClick={toggleButtonState}
              variant="primary"
              mt={2}
              size="lg"
            >
              Next Dog Breed
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <Button onClick={toggleShowDogBreed}>Show / Hide Dog Breed</Button> */}
            <ProfileCard
              dogBreedData={dogBreedData}
              dogBreedImage={dogBreedImage}
              // showDogBreed={showDogBreed}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home

// TODO:
// There's a weird lag for images after clicking Next
