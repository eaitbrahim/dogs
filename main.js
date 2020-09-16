async function start(){
 const response = await fetch('https://dog.ceo/api/breeds/list/all');
 const data = await response.json();
 createBreedList(data.message);
}

function createBreedList(breedList){
    document.getElementById('breed').innerHTML = `
    <select onchange="loadByBread(this.value)">
        <option>Choose a dog breed</option>
        ${Object.keys(breedList).map(function(breed){
            return `<option>${breed}</option>`
        }).join('')}
    </select>
    `
}

async function loadByBread(breed){
    if(breed != 'Choose a dog breed'){
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await response.json();
        console.log(data.message);
    }
}

start();