const getDogBreedData = breedId => {
  return fetch(
    `https://api.thedogapi.com/v1/images/search?breed_id=${breedId}`
  ).then(response => response.json())
}

export default getDogBreedData
