// load cards
const loadCards = async (status) =>{
    // const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    const res = await fetch( `https://www.themealdb.com/api/json/v1/1/categories.php`)
    const data = await res.json()
    if(status){
        displayCards(data.categories)
    }else{
        displayCards(data.categories.slice(0,6))
    }
    // .catch(error => console.log(error))
}
// display all cards
const displayCards = (items) => {
    // const slicedItems = items.slice(0, 6);
    const cardSec = document.getElementById('cards-sec')
    items.forEach((item) => {
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
const showAllDiv = document.getElementById('showAllBtn-div');
const handleShowAll = () => {
    document.getElementById('cards-sec').innerHTML = '';
    showAllDiv.classList.add('hidden');
    loadCards(true);
    
} 


loadCards();