// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//     const cardContainer = document.getElementById('card-container');

//     // Example data source URL
//     const dataSource = 'https://jsonplaceholder.typicode.com/photos?_limit=6';

//     fetch(dataSource)
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(item => {
//                 const card = document.createElement('div');
//                 card.className = 'card';

//                 card.innerHTML = `
//                     <img src="${item.url}" alt="${item.title}">
//                     <div class="card-content">
//                         <h2 class="card-title">${item.title}</h2>
//                         <p class="card-description">${item.title}</p>
//                     </div>
//                 `;

//                 cardContainer.appendChild(card);
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });

const img = document.querySelector("img");
         const icons = document.querySelector(".icons");
         img.onclick = function(){
           this.classList.toggle("active");
           icons.classList.toggle("active");
         }