// load cards
const loadCards = () =>{
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    fetch(url)
    .then(res => res.json())
    .then(data => displayCards(data.categories))
    .catch(error => console.log(error));
}


const displayCards = (items) => {
    const slicedItems = items.slice(0, 6);
    const cardSec = document.getElementById('cards-sec')
    slicedItems.forEach((item) => {
        const div = document.createElement('div');
        div.classList="border-2 border-black rounded-xl"
        div.innerHTML=`
        <div class="flex flex-col space-y-2 items-center text-center">
            <div class="">
                <img src="${item.strCategoryThumb}" class="rounded-xl ">
            </div>
            <div class="space-y-2">
                <h3 class="font-bold text-xl text-black">${item.strCategory}</h3>
                <a class="underline">View Details</a>
            </div>
        </div>
        `
        cardSec.append(div)
    });
}

loadCards();