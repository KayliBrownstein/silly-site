import React from "react"
import Card from "react-bootstrap/Card"
import { Col, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import UserInputForm from "./UserInputForm"

const ProfileCard = ({ dogBreedData, dogBreedImage }) => {
  const styles = {
    cardImage: {
      // objectFit: "cover",
      // height: `${dogBreedImage.height}`,
      // width: `${dogBreedImage.width}`,
      maxWidth: "300px",
    },
    col: {
      textAlign: "center",
      // background: "black",
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

  const [showDogBreed, setShowDogBreed] = useState(false)

  const toggleShowDogBreed = () => {
    setShowDogBreed(!showDogBreed)
  }

  return (
    <Card style={styles.card}>
      <Row className="justify-content-md-center">
        <Col style={styles.col}>
          <Card.Img src={dogBreedImage.url} style={styles.cardImage} />
        </Col>
        <Col>
          {dogBreedData && (
            <Card.Body className="p-3">
              <Card.Title style={styles.cardTitle}>
                {showDogBreed ? (
                  dogBreedData.name
                ) : (
                  <UserInputForm dogBreed={dogBreedData.name} />
                )}
              </Card.Title>
              <Button onClick={toggleShowDogBreed} size="sm">
                Show / Hide Dog Breed
              </Button>
              {dogBreedData.life_span && (
                <>
                  <Card.Header>Lifespan</Card.Header>
                  <Card.Text className="p-3">
                    {dogBreedData.life_span}
                  </Card.Text>
                </>
              )}
              {dogBreedData.bred_for && (
                <>
                  <Card.Header>Bred for</Card.Header>
                  <Card.Text className="p-3">{dogBreedData.bred_for}</Card.Text>
                </>
              )}
              {dogBreedData.breed_group && (
                <>
                  <Card.Header>Breed Group</Card.Header>
                  <Card.Text className="p-3">
                    {dogBreedData.breed_group}
                  </Card.Text>
                </>
              )}
              {dogBreedData.temperament && (
                <>
                  <Card.Header>Temperament</Card.Header>
                  <Card.Text className="p-3">
                    {dogBreedData.temperament}
                  </Card.Text>
                </>
              )}
              {dogBreedData.country_code && (
                <>
                  <Card.Header>Origin</Card.Header>
                  <Card.Text className="p-3">
                    {dogBreedData.country_code}
                  </Card.Text>
                </>
              )}
              {(dogBreedData.weight.imperial || dogBreedData.weight.metric) && (
                <>
                  <Card.Header>Weight</Card.Header>
                  <Card.Text className="p-3">
                    Imperial: {dogBreedData.weight.imperial}; Metric:{" "}
                    {dogBreedData.weight.metric}
                  </Card.Text>
                </>
              )}

              {(dogBreedData.height.imperial || dogBreedData.height.metric) && (
                <>
                  <Card.Header>Height</Card.Header>
                  <Card.Text className="p-3">
                    Imperial: {dogBreedData.height.imperial}; Metric:{" "}
                    {dogBreedData.height.metric}
                  </Card.Text>
                </>
              )}
            </Card.Body>
          )}
        </Col>
      </Row>
    </Card>
  )
}

export default ProfileCard

// TODO: Make these dynamic so I don't need to create an entry for all of these fields?
// Show/hide button text - dont show both.
