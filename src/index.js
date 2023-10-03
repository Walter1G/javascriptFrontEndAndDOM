// Code here

//define the beerdetails region

const beerDetails = document.querySelector('div.beer-details');
const beerNav  = document.getElementById('beer-list');
const beerName = document.getElementById('beer-name');


const init = () =>{
    
}

function fetchElement(id){

    
    const beerImage = document.getElementById('beer-image');
    const beerDescription = document.getElementById('beer-description');
    let beerReviews = document.getElementById('review-list');
    

    return fetch(`http://localhost:3000/beers/${id}`)
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
              

    });

    // function addReview(list){
    //     for(const item of list){
    //         listItem.innerText = item;
    //         return listItem;
    //     }
    // }
}

function setBeerNav(){
    //get list of beers
    //get the names of each bear
    //create a list and append to the ul

    fetch(`http://localhost:3000/beers`).then(res => res.json())
    .then(data =>{
    

    beerNav.innerHTML=""; //clear the Nav list        
    for(let obj in data){
        const listItem = document.createElement('li');      
        
        listItem.textContent=data[obj].name;
        beerNav.appendChild(listItem);  


    }    
    });
    
}

fetchElement(1);
setBeerNav()




