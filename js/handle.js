// load cards
const loadCards = async (status) =>{
    const res = await fetch( `https://www.themealdb.com/api/json/v1/1/categories.php`)
    const data = await res.json()
    if(status){
        displayCards(data.categories)
    }else{
        displayCards(data.categories.slice(0,6))
    }
    
}

// display all cards
const displayCards = (items) => {
    // const slicedItems = items.slice(0, 6);
    const cardSec = document.getElementById('cards-sec')
    items.forEach((item) => {
        const div = document.createElement('div');
        div.classList="border-2 border-black rounded-xl"
        div.innerHTML=`
        <div class="flex flex-col space-y-2 py-5 items-center text-center">
            <div class="">
                <img src="${item.strCategoryThumb}" class="rounded-xl ">
            </div>
            <div class="space-y-2">
                <h3 class="font-bold text-xl text-black">${item.strCategory}</h3>
                <a class="underline view-details" href="#">View Details</a>
            </div>
        </div>
        `
        cardSec.append(div)


        //"View Details" link
        div.querySelector('.view-details').addEventListener('click', (e) => {
            e.preventDefault();
            displayDetails(item);
        });
    });
}


// Display details for a single item
const displayDetails = (item) => {
    const infoModal = document.getElementById('modal-infos');
    infoModal.innerHTML = ''; // Clear previous details
    const div = document.createElement('div');
    div.classList = "space-y-2";
    div.innerHTML = `
        <div class="flex flex-col space-y-2 py-1 items-center text-center">
            <div class="">
                <img src="${item.strCategoryThumb}" class="rounded-xl">
            </div>
            <div class="space-y-2">
                <h3 class="font-bold text-xl text-black">${item.strCategory}</h3>
                <p>${item.strCategoryDescription}</p>
            </div>
        </div>
    `;
    infoModal.append(div);
    document.getElementById('my_modal').showModal();
};


// show all btn
const showAllDiv = document.getElementById('showAllBtn-div');
const handleShowAll = () => {
    document.getElementById('cards-sec').innerHTML = '';
    showAllDiv.classList.add('hidden');
    loadCards(true);  
}

loadCards();