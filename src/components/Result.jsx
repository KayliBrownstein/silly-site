import React from "react"
import RetryButton from "./RetryButton"

const Result = ({ userCorrect, handleRetry }) => {
  return (
    <div className="my-3">
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
