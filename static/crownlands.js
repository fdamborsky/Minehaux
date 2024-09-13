let products = {
  data: [
    {
      productName: "Charming Inn",
      category: "Apartment",
      price: "400 GD",
      image: "static/resources/crownlands/bar_emmon.webp",
      authorImage: "static/resources/crownlands/House_Bar_Emmon.svg",
      authorText: "House Bar Emmon",
      Published: ""

    },
    {
      productName: "Stone Workshop",
      category: "Apartment",
      price: "350 GD",
      image: "static/resources/crownlands/bywater.webp",
      authorImage: "static/resources/crownlands/house_bywater.svg",
      authorText: "House Bywater",
      Published: ""

    },
    {
      productName: "Seaside Manor",
      category: "Apartment",
      price: "600 GD",
      image: "static/resources/crownlands/celtigar.webp",
      authorImage: "static/resources/crownlands/House_Celtigar.svg",
      authorText: "House Celtigar",
      Published: ""

    },
    {
      productName: "Rustic Homestead",
      category: "Cottage",
      price: "340 GD",
      image: "static/resources/crownlands/crowlands4.webp",
      authorImage: "static/resources/crownlands/House_Baratheon.svg",
      authorText: "The Iron Throne",
      Published: ""
    },
    {
      productName: "Rustic Barnhouse",
      category: "Cottage",
      price: "200 GD",
      image: "static/resources/crownlands/crownlands1.webp",
      authorImage: "static/resources/crownlands/House_Baratheon.svg",
      authorText: "The Iron Throne",
      Published: ""
    },
    {
      productName: "Castle Watchtower",
      category: "Castle",
      price: "700 GD",
      image: "static/resources/crownlands/crownlands2.webp",
      authorImage: "static/resources/crownlands/House_Baratheon.svg",
      authorText: "The Iron Throne",
      Published: ""
    },
    {
      productName: "Timbered Townhall",
      category: "Villa",
      price: "800 GD",
      image: "static/resources/crownlands/crownlands3.webp",
      authorImage: "static/resources/crownlands/House_Baratheon.svg",
      authorText: "The Iron Throne",
      Published: ""
    },
    {
      productName: "Crossroad Inn",
      category: "Apartment",
      price: "930 GD",
      image: "static/resources/crownlands/kettleblack.webp",
      authorImage: "static/resources/crownlands/House_Kettleblack.svg",
      authorText: "House Kettleblack",
      Published: ""
    },
    {
      productName: "Sunrise Farmhouse",
      category: "Cottage",
      price: "250 GD",
      image: "static/resources/crownlands/massey.webp",
      authorImage: "static/resources/crownlands/House_Massey.svg",
      authorText: "House Massey",
      Published: ""
    },
    {
      productName: "Greenhill Estate",
      category: "Cottage",
      price: "450 GD",
      image: "static/resources/crownlands/rosby.webp",
      authorImage: "static/resources/crownlands/House_Rosby.svg",
      authorText: "House Rosby",
      Published: ""
    },
    {
      productName: "Blackwood Lodge",
      category: "Cottage",
      price: "180 GD",
      image: "static/resources/crownlands/stokeworth.webp",
      authorImage: "static/resources/crownlands/House_Stokeworth.svg",
      authorText: "House Stokeworth",
      Published: ""
    },
    {
      productName: "Cliffside Residence",
      category: "Villa",
      price: "560 GD",
      image: "static/resources/crownlands/sunglass.webp",
      authorImage: "static/resources/crownlands/House_Sunglass.svg",
      authorText: "House Sunglass",
      Published: ""
    },
  ],
};
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = i.price;
    container.appendChild(price);

    card.appendChild(container);

    let author = document.createElement("div");
    author.classList.add("author");
    card.appendChild(author);

    let authorImage = document.createElement("img");
    authorImage.setAttribute("src", i.authorImage);  // Replace with actual path
    authorImage.classList.add("author-image");
    author.appendChild(authorImage);
  
    // Add an h7 (or p) inside author
    let authorText = document.createElement("h1");
    authorText.innerText = i.authorText;  // Customize as needed
    author.appendChild(authorText);
    let Published = document.createElement("h2");
    Published.innerText = i.Published;  // Customize as needed
    author.appendChild(Published);
  
    card.appendChild(author);
    



    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", searchProducts);

// Trigger search on Enter key press
document.getElementById("search-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchProducts();
  }
});

function searchProducts() {
  //initializations
  let searchInput = document.getElementById("search-input").value.toUpperCase();
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.toUpperCase().includes(searchInput)) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
}

  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
    });
  });
  

