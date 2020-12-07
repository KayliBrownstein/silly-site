import React from "react"
// import { useState } from "react"
// import Result from "./Result"
import Card from "react-bootstrap/Card"
// import Button from "react-bootstrap/Button"

const BreedField = ({ dogBreedData }) => {
  //   debugger
  //   //   console.log(typeOf(dogBreedData))
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
    return breedKey.replace("_", " ").toUpperCase()
  }

  return (
    <>
      {dogBreedDataKeys.map(key => (
        <>
          {dogBreedData[key] ? (
            <>
              <Card.Header>{displayBreedKey(key)}</Card.Header>
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
