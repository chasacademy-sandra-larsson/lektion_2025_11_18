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