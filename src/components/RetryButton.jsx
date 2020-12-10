import React from "react"
import Button from "react-bootstrap/Button"

const RetryButton = ({ handleRetry }) => {
  const styles = {
    button: {
      borderRadius: "0",
      width: "100%",
    },
  }
  return (
    <Button
      style={styles.button}
      variant="dark"
      className="my-3"
      onClick={handleRetry}
    >
      Try Again!
    </Button>
  )
}

export default RetryButton
