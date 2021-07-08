document.addEventListener('DOMContentLoaded', () => {
    dogFetch()
})

function dogFetch(){
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(dogsData => dogsData.forEach(renderDog))
}

function renderDog(dogsData){
    let tray = document.createElement('tr')
    let dogName = document.createElement('td')
    let dogBreed = document.createElement('td')
    let dogSex = document.createElement('td')
    let editBtn = document.createElement('button')
    
    editBtn.type = 'submit'
    editBtn.textContent = 'Edit Dog'
    dogName.textContent = dogsData.name
    dogBreed.textContent = dogsData.breed
    dogSex.textContent = dogsData.sex
    
    tray.append(dogName, dogBreed, dogSex, editBtn)

    let table = document.querySelector('#table-body')
    table.append(tray)
}