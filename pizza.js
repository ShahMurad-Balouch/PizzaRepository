const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
  $(document).ready(function(){
  
  const menuGroup = document.querySelector(".menu-group");
  pizzaData.map(pizza => {
    let menuItem = document.createElement("div");
    menuItem.className = "menu-item"
     menuItem.innerHTML = `<img class="menu-item-image" src=${pizza.photoName} alt="" srcset="">
            <div class="menu-item-text">
                <h3 class="menu-item-text-heading">
                    ${pizza.name}
                </h3>
                <p>${pizza.ingredients}</p>
                <p class="price-text">${pizza.price}</p>
            </div>`

            menuGroup.appendChild(menuItem)
// // Change background color if soldOut is false
if (pizza.soldOut) {
  menuItem.querySelector(".price-text").textContent = 'Sold Out';
  menuItem.style.backgroundColor = "#9b9b9b"; // Change to the desired color
  menuItem.querySelector('.menu-item-image').style.filter = "grayscale(100%)"; // Apply grayscale filter to the image
}
});
  var today = new Date();
  var hourNow = today.getHours();
  console.log(hourNow)
  var message = document.querySelector(".footer-para");
  console.log(message)
  let openHour = 2;
  let closeHour = 10;
  if(hourNow >= 14 && hourNow <= 22 ) {
    console.log("good after")
    message.textContent = `We're open from ${openHour}:00 to ${closeHour}:00. Come Visit us or order`
  }
  else {
    console.log("good morn")
    message.textContent = `We're happy to welcome you between ${openHour}:00 and ${closeHour}:00.`
  }
})
