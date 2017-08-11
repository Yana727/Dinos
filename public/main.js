const allDinos = document.querySelector('.allDinos')
const dinoInfo = document.querySelector('.dinoInfo')

if (allDinos) {
  fetch('/dinos').then(res => res.json()).then(json => {
    json.forEach(dino => {
      let newDinoLI = document.createElement('li')

      let newDinoIMG = document.createElement('img')
      newDinoIMG.src = dino.pic
      newDinoLI.appendChild(newDinoIMG)

      let newDinoA = document.createElement('a')
      newDinoA.textContent = dino.name
      newDinoA.href = 'dinoInfo/' + dino.id

      newDinoLI.appendChild(newDinoA)

      allDinos.appendChild(newDinoLI)
    })
  })
}

if (dinoInfo) {
  const id = window.location.pathname.split('/')[2]
  fetch(`/dino/${id}`).then(res => res.json()).then(json => {
    //${}look at every id and picks the dino by the link
    console.log(json)

    // DO DOM STUFF WITH JSON
  })
}

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

//
// newDinoA.addEventListener('click', event => {
//   const id = dino.id - 1
//
//   // what is this dino's id
//   // use fetch to get /dino/id
//   // that returns json
//   // show that dino's information using that json
// })
