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
      maxWidth: "550px",
      // maxHeight: "500px",
    },
    card: {
      border: "none",
    },
    cardTitle: {
      textAlign: "center",
    },
  }

  return (
    <Card style={styles.card}>
      <Row>
        <Col style={styles.col}>
          <Row>
            <Button
              variant="dark"
              onClick={toggleShowDogBreed}
              size="lg"
              className="my-3"
            >
              {showDogBreed ? "Hide Dog Breed" : "Show Dog Breed"}
            </Button>
          </Row>
          <Row>
            <Card.Img
              // width={dogBreedImage.width}
              // height={dogBreedImage.height}
              className="my-1"
              src={dogBreedImage.url}
              style={styles.cardImage}
              alt={showDogBreed ? dogBreedData.name : "Dog breed to guess"}
            />
          </Row>
        </Col>
        <Col>
          {dogBreedData && (
            <Card.Body className="p-3">
              <Card.Title style={styles.cardTitle}>
                {showDogBreed ? (
                  <h2>{dogBreedData.name}</h2>
                ) : (
                  <Guess
                    dogBreed={dogBreedData.name}
                    userGuessed={userGuessed}
                    setUserGuessed={setUserGuessed}
                  />
                )}
              </Card.Title>
              <BreedField dogBreedData={dogBreedData} />
            </Card.Body>
          )}
        </Col>
      </Row>
    </Card>
  )
}

export default ProfileCard
