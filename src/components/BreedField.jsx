import React from "react"
import Card from "react-bootstrap/Card"

const BreedField = ({ dogBreedData }) => {
  const dogBreedDataKeys = [
    "life_span",
    "bred_for",
    "breed_group",
    "temperament",
    "country_code", // I dont think this one is returned from the API
    "height",
    "weight",
  ]

  const displayBreedKey = breedKey => {
    return (
      breedKey.charAt(0).toUpperCase() + breedKey.slice(1).replace("_", " ")
    )
  }

  return (
    <>
      {dogBreedDataKeys.map(key => (
        <>
          {dogBreedData[key] ? (
            <>
              <Card.Header as="h3">{displayBreedKey(key)}</Card.Header>
              <Card.Text className="p-3">
                {["height", "weight"].includes(key)
                  ? `Imperial: ${dogBreedData[key]["imperial"]}; Metric: ${dogBreedData[key]["metric"]}`
                  : dogBreedData[key]}
              </Card.Text>
            </>
          ) : (
            ""
          )}
        </>
      ))}
    </>
  )
}

export default BreedField
