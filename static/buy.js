let products = {
    data: [
      {
        productName: "Renovated Apartment",
        category: "Apartment",
        price: "250,000",
        image: "static/resources/buy/house1.svg",
        authorImage: "static/resources/buy/majnkrafák.svg",
        authorText: "Majnkrafák",
        Published: "3 months ago"
      },
      {
        productName: "Georgeous Villa Bay",
        category: "Villa",
        price: "320,000",
        image: "static/resources/buy/house2.svg",
        authorImage: "static/resources/buy/gejmr.svg",
        authorText: "Gejmr",
        Published: "2 months ago"
      },
      {
        productName: "Oakstone Lodge",
        category: "Cottage",
        price: "180,000",
        image: "static/resources/buy/house3.svg",
        authorImage: "static/resources/buy/jirkakral.svg",
        authorText: "Jirka Král",
        Published: "1 months ago"
      },
      {
        productName: "Traditional Family Home",
        category: "Apartment",
        price: "500,000",
        image: "static/resources/buy/house4.png",
        authorImage: "static/resources/buy/big-mooshroom-face.png",
        authorText: "TommyInnit",
        Published: "4 months ago"
      },
      {
        productName: "Mountain Lodge",
        category: "Villa",
        price: "400,000",
        image: "static/resources/buy/house5.png",
        authorImage: "static/resources/buy/big-shulker-face.png",
        authorText: "Sapnap",
        Published: "6 months ago"
      },
      {
        productName: "Charming Estate",
        category: "Cottage",
        price: "500,000",
        image: "static/resources/buy/house6.png",
        authorImage: "static/resources/buy/big-snowgolem-face.png",
        authorText: "CaptainSparklez",
        Published: "2 weeks ago"
      },
      {
        productName: "Lakeside Villa",
        category: "Villa",
        price: "650,000",
        image: "static/resources/buy/house7.png",
        authorImage: "static/resources/buy/big-wandering-trader-face.png",
        authorText: "DanTDM",
        Published: "5 months ago"
      },
      {
        productName: "Grand Tower House",
        category: "Castle",
        price: "750,000",
        image: "static/resources/buy/house8.png",
        authorImage: "static/resources/buy/big-wither-skeleton-face.png",
        authorText: "Skeppy",
        Published: "1 months ago"
      },
      {
        productName: "Farmhouse Retreat",
        category: "Castle",
        price: "300,000",
        image: "static/resources/buy/house9.png",
        authorImage: "static/resources/buy/big-zombie-pigman-face.png",
        authorText: "Grian",
        Published: "4 years ago"
      },

      {
        productName: "Pinegrove Retreat",
        category: "Villa",
        price: "500,000",
        image: "static/resources/buy/house10.png",
        authorImage: "static/resources/buy/big-bogged-face.png",
        authorText: "Dream",
        Published: "7 months ago"
      },
      {
        productName: "Woodland Cottage",
        category: "Apartment",
        price: "250,000",
        image: "static/resources/buy/house11.png",
        authorImage: "static/resources/buy/big-ghast-face.png",
        authorText: "Technoblade",
        Published: "5 years ago"
      },
      {
        productName: "Timberwood Cabin",
        category: "Cottage",
        price: "250,000",
        image: "static/resources/buy/house12.png",
        authorImage: "static/resources/buy/big-iron-golem-face.png",
        authorText: "GeorgeFound",
        Published: "1 years ago"
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
    price.innerText = "$" + i.price;
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
  

