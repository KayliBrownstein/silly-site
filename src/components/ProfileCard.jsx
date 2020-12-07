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
      maxWidth: "300px",
    },
    card: {
      width: "auto",
      height: "auto",
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
          <Card.Img
            className="my-3 pt-3"
            src={dogBreedImage.url}
            style={styles.cardImage}
          />
        </Col>
        <Col>
          {dogBreedData && (
            <Card.Body className="p-3">
              <Card.Title style={styles.cardTitle}>
                {showDogBreed ? (
                  dogBreedData.name
                ) : (
                  <Guess
                    dogBreed={dogBreedData.name}
                    userGuessed={userGuessed}
                    setUserGuessed={setUserGuessed}
                  />
                )}
              </Card.Title>
              <Button
                variant="dark"
                onClick={toggleShowDogBreed}
                size="sm"
                className="my-3"
              >
                {showDogBreed ? "Hide Dog Breed" : "Show Dog Breed"}
              </Button>
              <BreedField dogBreedData={dogBreedData} />
            </Card.Body>
          )}
        </Col>
      </Row>
    </Card>
  )
}

export default ProfileCard
