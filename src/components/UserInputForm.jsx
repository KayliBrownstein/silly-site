import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const UserInputForm = ({ dogBreed }) => {
  const styles = {
    inputField: {
      width: "28vw",
    },
  }

  const handleSubmit = event => {
    // debugger
    const form = event.currentTarget
    event.preventDefault()
    console.log(dogBreed)
    console.log(event.target[0].value)
    const userGuess = event.target[0].value
    const isUserCorrect = checkUserGuess(userGuess)
  }

  const checkUserGuess = userGuess => {
    return dogBreed === userGuess
  }

  return (
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
  )
}

export default UserInputForm

// TODO: Tell the user if they're right or not
// Clear user guess when clicking Next Breed
