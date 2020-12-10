import React from "react"
import RetryButton from "./RetryButton"

const Result = ({ userCorrect, handleRetry }) => {
  return (
    <div xs={12} md={2} className="my-3">
      {userCorrect ? (
        "Correct!"
      ) : (
        <>
          <div>Incorrect!</div>
          <RetryButton handleRetry={handleRetry} />
        </>
      )}
    </div>
  )
}

export default Result
