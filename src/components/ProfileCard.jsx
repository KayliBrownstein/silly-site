import React from "react"
import Card from "react-bootstrap/Card"
import { Col, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Guess from "./Guess"
import BreedField from "./BreedField"

const ProfileCard = ({
  dogBreedData,
  dogBreedImage,
  toggleShowDogBreed,
  showDogBreed,
  userGuessed,
  setUserGuessed,
}) => {
  const styles = {
    cardImage: {
      maxWidth: "100%",
      padding: "0.5rem",
      height: "auto",
    },
    card: {
      border: "none",
    },
    cardTitle: {
      textAlign: "center",
    },
    button: {
      borderRadius: "0",
      width: "100%",
    },
    dogBreedName: {
      border: "dotted #aec6cf",
    },
  }

  return (
    <Card style={styles.card}>
      <Row>
        <Col sm={12} md={6}>
          {showDogBreed ? (
            <h2 style={styles.dogBreedName} className="text-center mt-3">
              {dogBreedData.name}
            </h2>
          ) : (
            <Guess
              dogBreed={dogBreedData.name}
              userGuessed={userGuessed}
              setUserGuessed={setUserGuessed}
            />
          )}
          <Row>
            <Col>
              <Button
                variant="outline-dark"
                onClick={toggleShowDogBreed}
                size="lg"
                className="my-3"
                style={styles.button}
              >
                {showDogBreed ? "Hide Dog Breed" : "Show Dog Breed"}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Img
                // width={dogBreedImage.width}
                // height={dogBreedImage.height}
                className="my-1"
                src={dogBreedImage.url}
                style={styles.cardImage}
                alt={showDogBreed ? dogBreedData.name : "Dog breed to guess"}
              />
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={6}>
          <Card.Body className="py-3 px-0">
            <Card.Title style={styles.cardTitle} as="h2">
              Breed Profile
            </Card.Title>
            <BreedField dogBreedData={dogBreedData} />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default ProfileCard
