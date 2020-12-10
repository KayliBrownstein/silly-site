import React from "react"
import { useState } from "react"
import Result from "./Result"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Col } from "react-bootstrap"

const Guess = ({ dogBreed, userGuessed, setUserGuessed }) => {
  const [userCorrect, setUserCorrect] = useState(false)

  const styles = {
    inputField: {
      // width: "100%",
      borderRadius: "0",
    },
    form: {
      // textAlign: "left",
    },
    formGroup: {
      marginTop: "12px",
      marginBottom: "12px",
    },
    button: {
      borderRadius: "0",
      width: "100%",
    },
    formCol: {
      padding: 0,
    },
    formRow: {
      marginRight: 0,
      marginLeft: 0,
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
          <Form onSubmit={handleSubmit}>
            <Form.Row className="align-items-center" style={styles.formRow}>
              <Col xs={12} md={8} style={styles.formCol}>
                <Form.Group style={styles.formGroup} controlId="formDogBreed">
                  <Form.Label srOnly>Dog breed</Form.Label>
                  <Form.Control
                    required
                    style={styles.inputField}
                    type="text"
                    placeholder="Enter dog breed"
                  />
                </Form.Group>
              </Col>
              <Col style={styles.formCol}>
                <Button
                  xs={12}
                  md={2}
                  style={styles.button}
                  variant="dark"
                  type="submit"
                >
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </>
      )}
    </div>
  )
}

export default Guess
