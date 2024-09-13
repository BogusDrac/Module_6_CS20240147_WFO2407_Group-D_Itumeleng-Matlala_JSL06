// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [
        {name: "Garlic Bread", price: 15} , 
        {name: "Bruschetta", price: 40}
    ],
    MainCourses: [
        {name: "Margherita Pizza", price: 140},
        {name: "Spaghetti Carbonara", price: 66}
        ],
    Desserts: [
        {name:"Tiramisu", price: 300},
        {name: "Cheesecake", price: 250}
    ]
};

// QUESTION: What should you do first? How can you display menu items by category?

// Function to display menu items by category
function displayMenuItems(menu) {
    // QUESTION: What do you need to get from the HTML to display the menu? Find a way to reference it.

    const displayMenu = document.getElementById('menu')

    // QUESTION: How can you loop through each category and its items in the menu object?
    
    for (const [category, items] of Object.entries(menu)) {
        // QUESTION: What HTML element represents a category? Create it here.
        const categoryElement = document.createElement('h2')
        // QUESTION: How can you set the text content of the category element to the category name?
        categoryElement.textContent = category
        // QUESTION: How can you append the category element to the menu container in the HTML?
        displayMenu.appendChild(categoryElement)
        // QUESTION: What HTML element represents a list of items? Create it here.
        const listItems = document.createElement('ul')
        // QUESTION: Loop through the items in the category and create list items for each one.

        items.forEach(item => {
            // QUESTION: Create a list item element here.
            const itemElement = document.createElement('li')
            // QUESTION: How can you set the text content of the list item element to the item name?
            itemElement.textContent = item.name
            // QUESTION: Attach a click event listener to the list item to add it to the order.
            itemElement.addEventListener('click', () => addToOrder(item.name, item.price))
            // QUESTION: How can you append the list item to the list of items for this category?
            listItems.appendChild(itemElement)
        });

        // append the list of items to the menu element
        displayMenu.appendChild(listItems)
    }
}

// QUESTION: How can you update the order when an item is added? What elements in the HTML do you need to reference?

// Callback function for adding an item to the order
function addToOrder(itemName, itemPrice) {
    // QUESTION: What HTML elements represent the order items list and the order total?
    const orderItems = document.getElementById('order-items')
    const orderTotal = document.getElementById('order-total')
    // QUESTION: Create a list item for the order here.
    const listItemOrder = document.createElement('li')
    // QUESTION: How can you set the text content of the list item to the item name?
    listItemOrder.textContent = itemName
    // QUESTION: How can you append the list item to the order items list?
    orderItems.appendChild(listItemOrder)
    // QUESTION: Calculate and update the total price. How can you access the current total and item price?
    let total = parseFloat(orderTotal.textContent)
    total += itemPrice
    // QUESTION: How can you update the text content of the order total element with the new total?
    orderTotal.textContent = total.toFixed(2) //two decimal place
}

// QUESTION: What's the first step to initialize the menu system and display the menu?

// Function to initialize the menu system
function initMenuSystem(menu) {
    // QUESTION: What function should you call to display the menu?
    displayMenuItems(menu)
}

// QUESTION: How can you start the menu system? What function should you call here?
initMenuSystem(menu)

// Call the init function to start the menu system

