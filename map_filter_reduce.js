/*
 * VAD ÄR EN HIGHER ORDER FUNKTION?
 * 
 * En higher order funktion är en funktion som:
 * 1. Tar en eller flera funktioner som argument, ELLER
 * 2. Returnerar en funktion som resultat
 * 
 * Detta gör att vi kan skriva mer flexibel och återanvändbar kod.
 * 
 * EXEMPEL PÅ HIGHER ORDER FUNKTIONER:
 * 
 * - map()      - tar en funktion som argument och applicerar den på varje element i en array
 * - filter()   - tar en funktion som argument och filtrerar element baserat på funktionens returvärde
 * - reduce()   - tar en funktion som argument och reducerar arrayen till ett enda värde
 * 
 * - forEach()  - tar en funktion som argument och kör den för varje element
 * - sort()     - tar en funktion som argument och sorterar arrayen baserat på jämförelsefunktionen
 * - find()     - tar en funktion som argument och returnerar det första elementet som uppfyller villkoret
 * - findIndex() - tar en funktion som argument och returnerar indexet för det första elementet som uppfyller villkoret
 * - every()    - tar en funktion som argument och returnerar true om alla element uppfyller villkoret
 * - some()     - tar en funktion som argument och returnerar true om minst ett element uppfyller villkoret
 * 
 */

const products = [
    { id: 1, name: "Laptop", price: 12999, category: "Electronics", stock: 15, discount: 0.1 },
    { id: 2, name: "Mouse", price: 299, category: "Electronics", stock: 50, discount: 0 },
    { id: 3, name: "Keyboard", price: 899, category: "Electronics", stock: 30, discount: 0.15 },
    { id: 4, name: "Monitor", price: 3499, category: "Electronics", stock: 20, discount: 0.05 },
    { id: 5, name: "Book", price: 199, category: "Books", stock: 100, discount: 0 },
    { id: 6, name: "Magazine", price: 49, category: "Books", stock: 200, discount: 0 },
    { id: 7, name: "T-shirt", price: 299, category: "Clothing", stock: 75, discount: 0.2 },
    { id: 8, name: "Jeans", price: 799, category: "Clothing", stock: 40, discount: 0.1 },
    { id: 9, name: "Coffee", price: 89, category: "Food & Drink", stock: 150, discount: 0 },
    { id: 10, name: "Tea", price: 79, category: "Food & Drink", stock: 120, discount: 0 },
    { id: 11, name: "Smartphone", price: 8999, category: "Electronics", stock: 25, discount: 0.12 },
    { id: 12, name: "Headphones", price: 1299, category: "Electronics", stock: 35, discount: 0.08 },
    { id: 13, name: "Sweater", price: 499, category: "Clothing", stock: 60, discount: 0.15 },
    { id: 14, name: "Shoes", price: 1299, category: "Clothing", stock: 45, discount: 0.05 },
    { id: 15, name: "Water Bottle", price: 149, category: "Food & Drink", stock: 80, discount: 0 }
];

// Exempel 1 - Använd map för att mappa <li></li> runt varje item. Innehållet ska vara produktnamn med pris
// join() - från array => sträng
const productList = products
                    .map( product => `<li>${product.name} kostar ${product.price}</li>`)
                    .join(""); // Att man bygger på array-metoder efter hand med . kallas för chaining

const myList = document.getElementById("myList");

myList.innerHTML = productList;

// Exempel 2. Använd map för att beräkna det rabatterade priset för alla producter
const productsWithDiscount = products.map(product => {

        const discount = Math.round((1 - product.discount) * product.price);

        return {
            name: product.name,
            orginalPrice: product.price,
            discount: discount
        }
});   

console.log("ProductWithDiscount", productsWithDiscount);

// Exempel 3: Använd filter() för att filtrera produkter

// Per kategori "Electronics"
const productsElectronics = products.filter((product) => product.category === "Electronics");
console.log("productElectronics", productsElectronics);


// Varorna som finns i lager stock > 0
const productsInStock = products.filter(product => product.stock > 0);
console.log("productsInstock", productsInStock);

// Varorna som finns är få kvar stock > 30
const productsFewLeft = products.filter(product => product.stock < 30);
console.log("productsFewLeft ", productsFewLeft);

// Filterera på flera villkor - kategori "Clothin" med discount > 0
const clothingWithDiscount = products.filter(product => product.category === "Clothing" && product.discount > 0);
console.log("clothingWithDiscoutn", clothingWithDiscount);


// Exempel 4:
// Reduce 
// istället för
// let sum = 0
// const products = [{},{},{}]
// for(let i=0; i < products.length; i++) {
//    sum += products[i].price * products[i].stock;
//}
// console.log(sum);

// Beräkna totalStock
const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
console.log("totalStock", totalStock);

// Beräkna totalt lagervärder (pris * lager för varje product)
const totalInventoryValue = products.reduce((sum, product) => sum + (product.price * product.stock), 0);
console.log("totalInventoryValue", totalInventoryValue);

// Exempel 5: Använd sort för att sortera arrayen på lägst => högst pris och högt => lägst

const sortProductsLowestToHighest = products.sort((a, b) => (a.price - b.price));
console.log("sortProductsLowestToHighest", sortProductsLowestToHighest);

const sortProductsHighestToLowest = products.sort((a, b) => (b.price - a.price));
console.log("sortProductsHighestToLowest", sortProductsHighestToLowest);


// Array med användare
const users = [
    { id: 1, name: "Anna Andersson", email: "anna@example.com", role: "admin", active: true },
    { id: 2, name: "Erik Johansson", email: "erik@example.com", role: "user", active: true },
    { id: 3, name: "Maria Svensson", email: "maria@example.com", role: "user", active: false },
    { id: 4, name: "Lars Nilsson", email: "lars@example.com", role: "moderator", active: true },
    { id: 5, name: "Sara Karlsson", email: "sara@example.com", role: "user", active: true },
    { id: 6, name: "Johan Larsson", email: "johan@example.com", role: "user", active: false }
];


// Exempel 6: find() - hittar första match  (som filter men returnera endast första som överenstämmer villkoret)
// Hitta specifik användare efter email

const userByEmail = users.find(user => user.email === "maria@example.com");
console.log("userByEmail", userByEmail);

const userIndexByEmail = users.findIndex(user => user.email === "maria@example.com");
console.log("userIndexByEmail", userIndexByEmail);



// Exempel 7: Använd every() om alla användare är aktiva
const usersActive = users.every(user => user.active === true);
console.log("usersActive", usersActive);

// Exempel 8: Avnänd some() för att se om någon användare är aktiv

const isSomeoneActive = users.some(user => user.active === true);
console.log("isSomeoneActive", isSomeoneActive);

// Kontrollera om någon användare är admin?
const isSomeoneAdmin = users.some(user => user.role === "admin");
console.log("isSomeoneAdmin", isSomeoneAdmin);