
// Observera att du ska använda dig av arraymetoderna  map, filter, reduce, sort utan att förändra orginalobjektet!

//------------------ data att jobba med - tweets -------------------  //

const tweets = [
    { text: 'Elon Musk is ..', id: 523423 },
    { text: 'World Cup Quatar is ..', id: 823423 },
    { text: 'Bye bye Cov-id..', id: 2039842 },
    { text: 'Meatballs, oh meatballs', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // 1. Använd Array.prototype.filter() för att ta bort kommentaren med id 823423


  const filteredTweets = tweets.filter(tweet => tweet.id !== 823423);
 // console.log(filteredTweets);
  


  // 2. Använd Array.prototype.map() för att lägga till <li> taggar runt varje tweet-text. Arrayen ska slås ihop till en sträng med hjälp av Array.prototype.join() som ska läggas till i ul-elementet i DOM:en (se index.html). 
  const liTweets = tweets
                    .map(tweet => `<article>
                        <img>
                        <li>${tweet.text}</li>
                        </article>`)
                    .join("");

 //const myList = document.getElementById("myList")
 //myList.innerHTML = liTweets;

//   tweets.forEach(tweet => {
//     const li = document.createElement("li");
//     li.textContent = tweet.text;
//     myList.appendChild(li);
//   })


  //------------------ny data att jobba med - authors -------------------  //

 const authors = [
    { first: 'Leo', last: 'Tolstoj', year: 1828, passed: 1910 },
    { first: 'Alexander', last: 'Pusjkin', year: 1799, passed: 1837 },
    { first: 'Fjodor', last: 'Dostojevski', year: 1821, passed: 1881 },
    { first: 'Anton', last: 'Tjechov', year: 1860, passed: 1904 },
    { first: 'Vladimir', last: 'Nabokov', year: 1899, passed: 1997 },
    { first: 'Maksim', last: 'Gorkij', year: 1868, passed: 1936 },
    { first: 'Koldan', last: 'Egorov', year: 1921, passed: 1821 },
    { first: 'Nikolaj', last: 'Gogl', year: 1809, passed: 1852 },
    { first: 'Leonid', last: 'Andrejev', year: 1871, passed: 1919 },
    { first: 'Mirra', last: 'Lokhvitskaya', year: 1869, passed: 1905 },
    { first: 'Ivan', last: 'Krylov', year: 1769, passed: 1844 },
    { first: 'Michail', last: 'Lermontov', year: 1814, passed: 1841 },
    { first: 'Alexandr', last: 'Blok', year: 1880, passed: 1921 }
  ];

  
  // 3. Det finns en fake-författare i authors som är död före den är född! Hitta elementet genom att använda Array.prototype.filter()
  const fakeAuthor = authors.filter(author => (author.year - author.passed) > 0);
  //console.log(fakeAuthor);


  // 4. Använd Array.prototype.map för att skapa en array som innehåller endast författarnas fullständiga namn (förnamn och efternamn)

  const authorsFullName = authors.map(author => `${author.first} ${author.last}`);
  //console.log(authorsFullName);

  // 5. Använd Array.prototype.filter() för att skapa en array för författare som föddes på 1800-talet
    const authors19thCentury = authors.filter(author => (author.year >= 1800 && author.year < 1900)); 
    //console.log(authors19thCentury);                                                
 
   // 6. Anvvänd Array.protoype.sort() för att skapa en array som innehåller författarna sorterade i bokstavsordning (stigande ordning) efter efternamn
   
   // sorterar först födelseår  
   const sortedAuhtorDescendingYear = authors.sort((a,b) => a.year - b.year); // Detta fungerar bara numerisk, inte alfabetiskt!
   //console.log(sortedAuhtorDescendingYear);       
   
   // sorterar stigande i alfabetisk ordning på efternam
   const sortedAuthorDescendingLastname  = authors.sort((a,b) => a.last.localeCompare(b.last));
   //console.log(sortedAuthorDescendingLastname);

   // 7. Använd Array.protoype.sort() för att skapa en array som innehåller författarna sorterade i fallande ordning efter hur många år de levde
   const sortedAuthorAscendingLastname  = authors.sort((a,b) => b.last.localeCompare(a.last));
   console.log(sortedAuthorAscendingLastname);


  // 8. Använd Array.protype.reduce() för att skapa en array som innehåller författarnas totala ålder
    // Reduce 
// istället för
// let sum = 0
// const products = [{},{},{}]
// for(let i=0; i < products.length; i++) {
//    sum += products[i].price * products[i].stock;
//}
// console.log(sum);

const totalYears = authors.reduce((sum, author) => sum + (author.passed - author.year), 0);
//console.log(totalYears);


  //------------------ny data att jobba med - players -------------------  //

 const players = [
    { name: 'Modrić, Luka', year: 1985 },
    { name: 'Christian, Eriksen', year: 1992 },
    { name: 'Griezmann, Antoine', year: 1991 },
    { name: 'Achraf, Hakimi', year: 1998 },
    { name: 'Martínez, Lautaro', year: 1997 }
  ];


  // 9. Använd Array.prototype.some() för att ta reda på om någon spelare är äldre än 35 år?

 
  const isPlayerAbove35 = players.some(player => {
    const now = new Date();
    const year = now.getFullYear();
    return (year - player.year) >= 35;
  })

 //console.log(isPlayerAbove35);

  // 10. Använd Array.prototype.every()  för att ta reda på om alla spelare är äldre än 20 år?
  const isPlayerAbove20 = players.every(player => {
    const now = new Date();
    const year = now.getFullYear();
    return (year - player.year) >= 20;
  })

  //console.log(isPlayerAbove20);


  // 11. Använd Array.prototype.map() och Array.prototype.split() för att göra om 'name' så att den innehåller 'förnamn efternamn' i stället för nuvarande "efternamn, förnamn"
  const newFullNamePlayers = players.map(player => {
    const namesArray = player.name.split(",");
    const first = namesArray[1].trim();
    const last = namesArray[0];
    return `${first} ${last}`;
  })

  console.log(newFullNamePlayers);
  //------------------och en sista -------------------  //

   // Bonus! 
    
   // 12. Använd Array.prototype.reduce() samt Array.prototype.includes() för att skapa en array som innehåller endast unika värden från arrayen products.
   // Lite annan variant av reduce() - istället för att börja på accumalatorn på 0, börja på en tom array och pusha in värden i den!


   // Den unika arrayen ska alltå se ut så här: ['t-shirt', 'trousers', 'polos', 'shoes', 'jewellery']