// forEach and map are array methods that allow you to loop through items in an array and perform operations on them.

const productList = document.querySelector(".product-list");
const cartList = document.querySelector(".cart-list");
const cart = [];

const boys = document.querySelector(".boys");
boys.addEventListener("click", (e) => {
    e.preventDefault();

    fetch("../objects/boys.json")
    .then(res => res.json())
    .then(data => {
        const itemsContainer = document.querySelector(".items-container");
        itemsContainer.innerHTML = ""; // Clear previous items
        itemsContainer.classList.add("row");

        data.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("col-md-4", "mb-4");
            itemElement.innerHTML = `
                <div class="card bg-light h-100" style="width: 18rem;">
                    <img src="${item.image}" class="card-img-top" alt="Product Image">
                    <div class="card-body">
                        <p class="card-text">Price: ${item.price}</p>
                    </div>
                </div>
            `;
            itemsContainer.appendChild(itemElement);
        });
        
    }).catch(error => {
        console.error('Error fetching clothes:', error);
    });
});

// girls clothes
const girls = document.querySelector(".girls");
girls.addEventListener("click", (e) => {
    e.preventDefault();

    fetch("../objects/girls.json")
    .then( res => res.json())
    .then(data => {
        const itemsContainer = document.querySelector(".items-container");
        itemsContainer.innerHTML = ""; // Clear previous items

        itemsContainer.classList.add("row");

        data.forEach( item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("col-md-4", "mb-4");
            itemElement.innerHTML = `
                <div class="card bg-light h-100" style="width: 18rem;">
                    <img src="${item.image}" class="card-img-top" alt="Product Image">
                    <div class="card-body">
                        <p class="card-text">Price: ${item.price}</p>
                    </div>
                </div>
            `;
            itemsContainer.appendChild(itemElement);

        })
    }).catch(error => {
        console.error('Error fetching clothes:', error);
    });
})

           
const pajamas = document.querySelector('.pajamas');
pajamas.addEventListener('click', (e) => {
    
    e.preventDefault();

    fetch('../objects/pajamas.json')
    .then(response => response.json())
    .then(data => {
        const itemsContainer = document.querySelector(".items-container");
        itemsContainer.innerHTML = ""; // Clear previous items

        itemsContainer.classList.add("bg-secondary", "row");
        
        data.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("col-md-3", "mb-4");
            itemElement.innerHTML = `

                 <div class="p-2 bg-dark card bg-light h-100" style="width: 18rem;">
                    <img src="${item.image}" class="card-img-top" alt="Product Image">
                    <div class="card-body">
                        <h5 class="card-title text-white">Elegant</h5>
                        <p class="card-text text-light">Price: ${item.price}</p>
                        <a class="btn btn-primary card-btn">Add To Cart</a>
                    </div>
                </div>

            `;
            itemsContainer.appendChild(itemElement);
            
        });

        setupAddToCartButtons(data);

    }).catch(error => {
        console.error('Error fetching pajamas:', error);
    });
});
// Function to attach event listeners to "Add to Cart" buttons
function setupAddToCartButtons(data) {
    const addToCartButtons = document.querySelectorAll(".card-btn");
    addToCartButtons.forEach((button, index)) => {
        button.addEventListener("click", () => {
            addItem(data[index]);// Pass the corresponding item data to addItem
        });
    });
}

function addItem(item) {
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.createElement("li");
    cartItem.classList.add("list-group-item", "d-flex", "justify-content-center", "align-items-center");
    cartItem.innerHTML = `
        <span> ${item.image} - ${item.price} </span>
        <button class="btn btn-danger btn-sm remove-btn">Remove</button>
    `;
    cartList.appendChild(cartItem);

    //add functionality to remove the item from the cart
    cartItem.querySelector(".remove-btn").addEventListener("click", () => {
        cartItem.remove();
    });
}
