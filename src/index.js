// Code here

//define the beerdetails region

const beerDetails = document.querySelector('div.beer-details');

const init = () =>{
    
}

function fetchElement(){

    const beerName = document.getElementById('beer-name');
    const beerImage = document.getElementById('beer-image');
    const beerDescription = document.getElementById('beer-description');
    let beerReviews = document.getElementById('review-list');
    

    return fetch('http://localhost:3000/beers/1')
    .then(res => res.json())
    .then(data =>{
        beerName.innerText = data.name;
        beerImage.src = data.image_url;
        beerDescription.innerText = data.description;
        beerReviews.innerHTML="";
        data.reviews.forEach(
            review =>{
                const listItem = document.createElement('li');
                listItem.textContent=review;
                beerReviews.appendChild(listItem);          
        });
        console.log(data.reviews);
        // data.reviews.map(x=>{
        //     listItem.innerText=x;
        //     beerReviews.appendChild(listItem);
        // });        

    });

    function addReview(list){
        for(const item of list){
            listItem.innerText = item;
            return listItem;
        }
    }
}

fetchElement();


