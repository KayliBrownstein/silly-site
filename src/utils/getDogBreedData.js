const getDogBreedData = () => {
  return fetch("https://api.thedogapi.com/v1/breeds/1").then(response =>
    response.json()
  )
}

export default getDogBreedData
