const express = require ('express')
const cors = require('cors')
const { default: axios } = require('axios')
const { response } = require('express')

const app = express()

app.use(express.json())
app.use(cors())

let genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
  ]

app.get('/api/movie/:genre', (req, res) => {
    const {genre} = req.params
    let genreObj = genres.filter (g => g.name === genre)
    console.log(genreObj)
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=fd74cca7bbde28e3c48a22e6cd9fe7fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreObj[0].id}`)
    .then(response => {
        res.status(200).send(response.data)
    })
})



app.listen(4004, () => console.log('Running on 4004'))