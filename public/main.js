
const allDinos = document.querySelector('.allDinos');

const getDinoDetails = (id) => {
  fetch(`http://localhost:3000/dinos/${id}`).then(res => res.json()).then(data => {
    const template = `
      <h2>${dinos.name}</h2>
      <img src="${dinos.pic}" alt="">
    `
    details.innerHTML = template
  })
}
fetch('http://localhost:3000/dinos')
  .then(res => res.json())
  .then(json =>  {
  json.forEach(dino => {
  console.log(dino)
  let newDinoLI = document.createElement('li')

  let newDinoIMG = document.createElement ('img')
  newDinoIMG.src = dino.pic
  newDinoLI.appendChild(newDinoIMG)

  let newDinoA = document.createElement('a')
  newDinoA.textContent = dino.name
  newDinoA.href = '#'
  newDinoLI.appendChild(newDinoA)

  allDinos.appendChild(newDinoLI)

  newDinoA.addEventListener('click', ()=>{
   getDinoDetails(dinos.id)

  res.json(myDino)
   })

   })
  })

  // const dinoID = parsentInt(req.params.id)
  // const myDino = dinos.find(dinosaur  => dinosaur.id === dinoID)// so the rest don't show up...



    //img.src = json[i].pic
    // new h2
    // h2.textcontent = json[i].name
     // append those to li
    // append those to the document.

  //  }

   // Create a new element (li? -- not sure)
   // Add the dino's name and it's picture, and whatever else to that li
   // Append the li to the `allDinos` ul










// const promise = fetch(
//   `https://itunes.apple.com/search?term=${searchTerm}&limit=15`
// )
//   .then(response => response.json())
//   .then(musicResults => {
//     resultList.innerHTML=""
//     musicResults.results.forEach(function (musicData, index) {
//       let musicBox = document.createElement('li')
//       let bandName = document.createElement('h4')
//       let songTitle = document.createElement('p')
//       let image = document.createElement('img')
//       let currentSong = document.querySelector('.now')
// )}
