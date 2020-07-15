// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

let headerContainer = document.querySelector('.header-container');

function Header() {
    let headerDiv = document.createElement('div');
    let date = document.createElement('span');
    let title = document.createElement('h1');
    let temp = document.createElement('span');

    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp')

    date.textContent = 'March 28, 2020';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    headerContainer.appendChild(headerDiv);
    headerDiv.appendChild(date);
    headerDiv.appendChild(title);
    headerDiv.appendChild(temp);

    return headerDiv
}

Header();
