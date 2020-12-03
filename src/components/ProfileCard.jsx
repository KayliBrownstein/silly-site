import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Col, Row } from "react-bootstrap"

const ProfileCard = ({ dogBreedData, dogBreedImage }) => {
  const styles = {
    cardImage: {
      // objectFit: "cover",
      height: `${dogBreedImage.height}`,
      width: `${dogBreedImage.width}`,
    },
    col: {
      background: "black",
    },
  }

  console.log(`ProfileCard ${dogBreedImage}`)

  return (
    <Card className="text-center my-4" border="dark">
      <Row>
        <Col style={styles.col}>
          <Card.Img src={dogBreedImage.url} style={styles.cardImage} />
        </Col>
        <Col>
          {dogBreedData && (
            <Card.Body>
              <Card.Title>{dogBreedData.name}</Card.Title>
              <Card.Text>
                <dt>Lifespan:</dt>
                <dd>{dogBreedData.life_span}</dd>
                <dt>Bred For:</dt>
                <dd>{dogBreedData.bred_for}</dd>
                <dt>Breed Group:</dt>
                <dd>{dogBreedData.breed_group}</dd>
                <dt>Temperament:</dt>
                <dd>{dogBreedData.temperament}</dd>
                <dt>Origin:</dt>
                <dd>{dogBreedData.country_code}</dd>
                <dt>Weight:</dt>
                <dd>
                  Imperial: {dogBreedData.weight.imperial}, Metric:{" "}
                  {dogBreedData.weight.metric}
                </dd>
                <dt>Height:</dt>
                <dd>
                  Imperial: {dogBreedData.height.imperial}, Metric{" "}
                  {dogBreedData.height.metric}
                </dd>
              </Card.Text>
              <Button variant="primary">Next Dog Breed</Button>
            </Card.Body>
          )}
        </Col>
      </Row>
    </Card>
  )
}

export default ProfileCard
