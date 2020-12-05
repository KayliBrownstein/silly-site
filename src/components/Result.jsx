import React from "react"

const Result = ({ userCorrect }) => {
  console.log("heyyyy")
  return <div>Your guess is {userCorrect ? "correct" : "incorrect"}</div>
}

export default Result
