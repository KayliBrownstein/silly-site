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
import "./index.css"

const Home = () => {
  let [dogBreedData, setDogBreedData] = useState(null)
  let [dogBreedImage, setDogBreedImage] = useState({})
  const [isSending, setIsSending] = useState(false)
  const [showDogBreed, setShowDogBreed] = useState(false)
  const [userGuessed, setUserGuessed] = useState(false)

  const getRandomDogBreedId = () => {
    return Math.floor(Math.random() * 264 + 1)
  }

  const getNextDogBreed = () => {
    setIsSending(true)
    getDogBreedData(getRandomDogBreedId()).then(response => {
      if (!response[0]) {
        console.log("No response from API")
        return getNextDogBreed()
      } else {
        setDogBreedImage({
          url: response[0].url,
          height: response[0].height,
          width: response[0].width,
        })
        setDogBreedData(response[0].breeds[0])
        setIsSending(false)
        setShowDogBreed(false)
        setUserGuessed(false)
      }
    })
  }

  const toggleShowDogBreed = () => {
    setShowDogBreed(!showDogBreed)
    setUserGuessed(false)
  }

  useEffect(() => {
    console.log("useEffect called")
    getNextDogBreed()
  }, [])

  const styles = {
    button: {
      borderRadius: "0",
      width: "100%",
    },
    bannerText: {
      backgroundColor: "bisque",
      fontFamily: "Amatic SC",
      fontWeight: 700,
    },
  }

  return (
    <>
      <Header />
      <Container fluid style={styles.bannerText}>
        <Row className="mb-4 text-center">
          <Col>
            <h1 style={styles.bannerText} className="m-4">
              Guess the dog breed!
            </h1>
          </Col>
        </Row>
      </Container>
      <Container xs={12} md={10}>
        <Row className="text-center">
          <Col sm={12} md={6} className="ml-auto">
            <Button
              disabled={isSending}
              onClick={getNextDogBreed}
              variant="dark"
              size="lg"
              style={styles.button}
            >
              Next Dog Breed
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {dogBreedData && (
              <ProfileCard
                dogBreedData={dogBreedData}
                dogBreedImage={dogBreedImage}
                toggleShowDogBreed={toggleShowDogBreed}
                showDogBreed={showDogBreed}
                userGuessed={userGuessed}
                setUserGuessed={setUserGuessed}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home

// TODO:
// There's a weird lag for images after clicking Next.
// Work on security rating.
