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
          <div className="my-3" style={styles.form}>
            Guess this dog breed!
          </div>
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
