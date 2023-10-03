// Code here

//define the beerdetails region

const beerDetails = document.querySelector('div.beer-details');

const init = () =>{
    
}

function fetchElement(){

    const beerName = document.getElementById('beer-name');
    const beerImage = document.getElementById('beer-image');
    const beerDescription = document.getElementById('beer-description');



    return fetch('http://localhost:3000/beers/1')
    .then(res => res.json())
    .then(data =>{
        beerName.innerText = data.name;
        beerImage.src = data.image_url;
        beerDescription.innerText = data.description;
    });
}

fetchElement();


