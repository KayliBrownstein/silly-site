import React from "react"
import Button from "react-bootstrap/Button"

const RetryButton = ({ handleRetry }) => {
  return (
    <Button
      variant="outline-primary"
      className="m-3"
      size="sm"
      onClick={handleRetry}
    >
      Try Again!
    </Button>
  )
}

export default RetryButton
