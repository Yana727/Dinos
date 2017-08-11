const express = require('express')
const app = express()

const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')

app.engine('mst', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mst')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('home')
})

let dinos = [
  {
    id: 1,
    name: 'Alamosaurus',
    pic:
      'https://vignette1.wikia.nocookie.net/landbeforetime/images/f/fb/Alamosaurus-texas-geology.jpg/revision/latest?cb=20150810232317',
    size: '98 ft',
    weight: '73 tonnes',
    habitat:
      'Skeletal elements of Alamosaurus are among the most common Late Cretaceous dinosaur fossils found in the United States Southwest and are now used to define the fauna of that time and place, known as the "Alamosaurus fauna."'
  },
  {
    id: 2,
    name: 'Albertaceratops',
    pic:
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Albertaceratops_BW2.jpg',
    size: '19 ft',
    weight: '7,700 lb',
    habitat: 'North America.'
  },
  {
    id: 3,
    name: 'Anchiceratops',
    pic:
      'https://vignette1.wikia.nocookie.net/dinosaurs/images/a/af/3724819_orig.png/revision/latest?cb=20150911223624',
    size: '16.4 ft',
    weight: '1.2 tonnes',
    habitat:
      'Most Anchiceratops fossils have been discovered in the Horseshoe Canyon Formation of Alberta, which belongs to the later part of the Campanian stage of the Late Cretaceous Period (Anchiceratops remains are known from the lower part of the formation, and range in age between 72.5-71 million years ago).'
  },
  {
    id: 4,
    name: 'Ankylosaurus',
    pic:
      'http://vignette1.wikia.nocookie.net/the-isle-dinosaur-game/images/b/b1/Ankylo.png/revision/latest?cb=20161111102210',
    size: '20.5 feet',
    weight: '13,000 lb',
    habitat: 'Canada'
  },
  {
    id: 5,
    name: 'Barney',
    pic:
      'http://vignette2.wikia.nocookie.net/supermarioglitchy4/images/6/67/1828759-barney.jpg/revision/latest?cb=20170223142113',
    size: '6 ft',
    weight: '150 lb',
    habitat: 'Hollywood, CA'
  }
]

app.get('/dinos', (req, res) => {
  res.json(dinos)
})

app.get('/dino/:id', (req, res) => {
  //Make sure to have :, since it's THE id
  res.json(dinos.find(dino => dino.id === parseInt(req.params.id)))
})

app.get('/dinoInfo/:id', (req, res) => {
  res.render('dinoInfo')
})

//rout to the website
app.get('/api/dinos/', (req, res) => {
  res.json(dinos)
})
app.get('/api/dinos/:id', (req, res) => {
  res.json(dinos[req.params.id])
})
app.get('/api/dinos/:id/habitat', (req, res) => {
  l
  res.json(dinos[req.params.id].habitat)
})

app.post('/api/dinos/', (req, res) => {
  res.json(dinos)
})
app.post('/api/dinos/update/:id', (req, res) => {
  res.json(dinos)
})
app.post('/api/dinos/delete/:id', (req, res) => {
  res.json(dinos)
})

app.listen(3000, function() {
  console.log('Successfully started express application!')
})
