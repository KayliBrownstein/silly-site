import React from "react"
import { useState } from "react"
import Result from "./Result"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Guess = ({ dogBreed, userGuessed, setUserGuessed }) => {
  const [userCorrect, setUserCorrect] = useState(false)

  const styles = {
    inputField: {
      width: "28vw",
    },
    form: {
      textAlign: "left",
    },
  }

  const handleSubmit = event => {
    setUserGuessed(true)
    const userGuess = event.target[0].value
    setUserCorrect(dogBreed.toLowerCase() === userGuess.toLowerCase())
  }

  const handleRetry = () => {
    setUserGuessed(false)
  }

  return (
    <div>
      {userGuessed ? (
        <Result userCorrect={userCorrect} handleRetry={handleRetry} />
      ) : (
        <>
          <Form inline onSubmit={handleSubmit}>
            <Form.Group controlId="formDogBreed">
              <Form.Label srOnly>Dog breed</Form.Label>
              <Form.Control
                required
                style={styles.inputField}
                type="text"
                placeholder="Enter dog breed"
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </>
      )}
    </div>
  )
}

export default Guess
