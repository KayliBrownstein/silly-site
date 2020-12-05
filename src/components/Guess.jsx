import React from "react"
import { useState } from "react"
import Result from "./Result"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Guess = ({ dogBreed }) => {
  const [userGuessed, setUserGuessed] = useState(false)
  const [userCorrect, setUserCorrect] = useState(false)

  const styles = {
    inputField: {
      width: "28vw",
    },
  }

  const handleSubmit = event => {
    setUserGuessed(true)
    // event.preventDefault()
    const userGuess = event.target[0].value
    setUserCorrect(dogBreed === userGuess)
  }

  return (
    <div>
      {userGuessed ? (
        <Result userCorrect={userCorrect} />
      ) : (
        <>
          Guess the dog breed!
          <Form inline onSubmit={handleSubmit}>
            <Form.Group controlId="formDogBreed">
              <Form.Control
                required
                style={styles.inputField}
                type="text"
                placeholder="Enter dog breed"
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </>
      )}
    </div>
  )
}

export default Guess

// TODO:
// Clear user guess when clicking Next Breed
