let products = [
    {
      image:"img/item1.webp",  
      name: "Catalina 4 Stool Coffee Table- Grey",
      mainPrice: "21,999.00",
      discountPrice: "17,920.00",
    },
    {
      image: "img/item2.webp",
      name: "Delphi Chest of Drawers-Black",
      mainPrice: "34,999.00",
      discountPrice: "24,488.00",
    },
    {
      image: "img/item3.webp",
      name: "Alen Solidwood Dresser-Natural", 
      mainPrice: "19,499.00",
      discountPrice: "12,488.00",
    },
    {
      image:"img/item4.webp",
      name: "Verina Solidwood Study Table-Teak",
      mainPrice: "29,999.00 ",
      discountPrice: "21,999.00",
    },
    {
        image:"img/item5.webp",
        name: "Celestin Solidwood Bookshelve-Teak", 
        mainPrice: "72,999.00 ",
        discountPrice: "51,699.00",
      },
      {
        image:"img/item6.webp",
        name: "Weave Six Seater Dining With Bench-Teak", 
        mainPrice: "50,899.00 ",
        discountPrice: "41,999.00",
      },
      {
        image:"img/item7.webp",
        name: "Alton Four(4) Stool Coffee Table-Floral",
        mainPrice: "14,999.00",
        discountPrice: "9,588.00",
      },
      {
        image:"img/item8.webp",
        name: "Carroway Wooden Consol Table-Teak",
        mainPrice: "37,999.00",
        discountPrice: "35,990.00",
      },
      {
        image:"img/item9.webp",
        name: "Murphy Grey Sofa Cum Bed-Mahogany", 
        mainPrice: "48,999.00",
        discountPrice: "37,488.00",
      },
      {
        image:"img/item10.webp",
        name: "Zelki Six Seater Dining Set-Mahogany",
        mainPrice: "71,999.00",
        discountPrice: "52,999.00",
      },
      {
        image:"img/item11.webp",
        name: "TLolah King Without Storage Bed-Teak Yellow", 
        mainPrice: "27,999.00 ",
        discountPrice: "21,000.00",
      },
      {
        image:"img/item12.webp",
        name: "Cambay Tv Unit (w / 3) Drw. Storage",
        mainPrice: "18,999.00",
        discountPrice: "13,899.00",
      },
    
  ];

  
  
 
  function product(){
    let div = document.getElementById("adder");

    for(let i=0;i<products.length;i++){
      div.innerHTML +=` <div class="col">
      <div class="card">
        <div class="wrapper">
        <img src="${products[i].image}" class="card-img-top" alt="loading image">
    </div>
        <div class="card-body">
          <h7 class="card-title">${products[i].name}</h7>
          <div class="title">
            <p class="card-text"> Rs.<del>${products[i].mainPrice} </del> Rs. ${products[i].discountPrice} </p>
            <p class="sale">sale</p>
          </div>
          <div class="text-center"><button type="button"><i class='fa fa-shopping-cart'></i> Add to Cart </button></div>
  
        </div>
      </div>
    </div>`
    }
  }
    product();


function searchCards(query) {
  const postconatiner = document.getElementById("adder");
  postconatiner.innerHTML = '';

  const filteredCards = products.filter((card) =>
      card.name.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredCards.length === 0) {
      alert("No match found.");
      return; 
  }

  

    for(let i=0;i<filteredCards.length;i++){
      postconatiner.innerHTML +=` <div class="col">
      <div class="card">
        <div class="wrapper">
        <img src="${filteredCards[i].image}" class="card-img-top" alt="loading image">
    </div>
        <div class="card-body">
          <h7 class="card-title">${filteredCards[i].name}</h7>
          <div class="title">
            <p class="card-text"> Rs.<del>${filteredCards[i].mainPrice} </del> Rs. ${filteredCards[i].discountPrice} </p>
            <p class="sale">sale</p>
          </div>
          <div class="text-center"><button type="button"><i class='fa fa-shopping-cart'></i> Add to Cart </button></div>
  
        </div>
      </div>
    </div>`
    }
}