const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    displayPhns(phones, isShowAll)
}

const displayPhns = (phones, isShowAll) => {
     console.log(phones)
    const phoneContainer = document.getElementById("phone-container")
    // clear phone container cards before adding new cards 
    phoneContainer.textContent='';
    // display show all button if there are more than 12photos 
    const showAllContainer = document.getElementById("show-all-container");
    if(phones.length> 12 && !isShowAll){
        showAllContainer.classList.remove("hidden");
    }
    else{
        showAllContainer.classList.add('hidden')
    }
    console.log("is show", isShowAll)
    // diplay only first 12 phones if not show all 
    if(!isShowAll){
        phones = phones.slice(0,12);
    }

    // display only first 12phons 
    
    
    phones.forEach(Element => {
       
  // create div 
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card gap-7 bg-gray-100 shadow-xl`
        phoneCard.innerHTML = `
    <figure><img src="${Element.image}" alt="Shoes" /></figure>
    <div class="card-body">
    <h2 class="card-title">${Element.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
    <button onclick="handleShowDetail('${ Element.slug}')" class="btn btn-primary">Buy Now</button>
    </div>
    </div>
         `;
         phoneContainer.appendChild(phoneCard);

    });
    // hidden spinner loading 
    toggleLoadingSpinner(false)
}


const handleSearch = (isShowAll) =>{
    toggleLoadingSpinner(true)
 const inputField = document.getElementById("input-button");
 const searchText = inputField.value;
 console.log(searchText)
 loadPhone(searchText, isShowAll)
}

// const handlSearch2 = () =>{
//     toggleLoadingSpinner(true)
//    const inputFild2 = document.getElementById('input-buton2');
//    const searchText = inputFild2.value ;
//    loadPhone(searchText)
// }


//  loading Sppiner
const toggleLoadingSpinner = (isloading) => {
    const loadingSpinner = document.getElementById("loading-spinner");
    if(isloading){
        loadingSpinner.classList.remove("hidden");
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
    
}

// handle Show showAllContainer 
const handleShowall = () => {
    handleSearch(true)
}

const handleShowDetail = async (id) => {
    console.log("clicked show deta", id)
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data =await res.json();
    console.log(data);
    // load single phone data
}

// loadPhone()