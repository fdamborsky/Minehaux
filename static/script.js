let currentSelection = 'buy';

function toggleButton(selected) {
    const buyImage = document.getElementById('buyImage');
    const rentImage = document.getElementById('rentImage');

    if (selected === 'buy') {
        buyImage.src = '../static/resources/home/Buy-active.svg';   // Nastavení aktivního obrázku pro "Buy"
        rentImage.src = '../static/resources/home/Rent-unactive.svg'; // Nastavení neaktivního obrázku pro "Rent"
        currentSelection = 'buy';
    } else if (selected === 'rent') {
        buyImage.src = '../static/resources/home/Buy-unactive.svg'; // Nastavení neaktivního obrázku pro "Buy"
        rentImage.src = '../static/resources/home/Rent-active.svg'; // Nastavení aktivního obrázku pro "Rent"
        currentSelection = 'rent';
    }
  updateShowMeLink();
  console.log("Selected:", selected);
}

function updateShowMeLink() {
  const showMeLink = document.getElementById('showMeLink');
  if (currentSelection === 'buy') {
      showMeLink.href = '/houses?mode=buy';  // Redirect to the Buy page
  } else if (currentSelection === 'rent') {
      showMeLink.href = '/houses?mode=rent';  // Redirect to the Rent page
  }
}

document.addEventListener('DOMContentLoaded', updateShowMeLink);





function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }



  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  

