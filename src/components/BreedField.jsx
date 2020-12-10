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

  const styles = {
    cardHeader: {
      backgroundColor: "#aec6cf",
      fontWeight: 400,
    },
  }

  return (
    <>
      {dogBreedDataKeys.map(key => (
        <>
          {dogBreedData[key] ? (
            <>
              <Card.Header style={styles.cardHeader} as="h3">
                {displayBreedKey(key)}
              </Card.Header>
              <Card.Text className="py-3 px-3">
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
