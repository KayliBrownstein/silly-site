import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const ProfileCard = ({ dogBreedData }) => {
  console.log(`ProfileCard ${dogBreedData}`)
  return (
    <Card className="text-center my-4" border="dark">
      <Card.Img
        variant="top"
        src="https://www.aspca.org/sites/default/files/blog_make-dogs-day_101619_main.jpg"
      />
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
            <dd>{dogBreedData.origin}</dd>
            <dt>Weight:</dt>
            <dd>{dogBreedData.weight.imperial}</dd>
            <dt>Height:</dt>
            <dd>{dogBreedData.height.imperial}</dd>
          </Card.Text>
          <Button variant="primary">Next Dog Breed</Button>
        </Card.Body>
      )}
    </Card>
  )
}

export default ProfileCard
