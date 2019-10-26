let list = document.querySelector('ul.list-group')
let listItem = document.querySelectorAll('ul.list-group li.list-group-item');
let firstListItem = document.querySelector('li.list-group-item');
//create li
let li = document.createElement('li');

// create span
let span = document.createElement('span');
//configure span
span.className = 'badge badge-pill badge-primary ml-1 p-2';
span.textContent = 'NEW!'


// cinfigure li
li.className = 'list-group-item list-group-item-primary'
li.setAttribute('title', 'list item')
li.textContent = 'New Element'

//append span to li
li.appendChild(span);

//append li to ul
list.appendChild(li);



//remove items

// firstListItem.remove();
// list.removeChild(listItem[listItem.length - 1]);

listItem = document.querySelectorAll('li.list-group-item')
list.removeChild(listItem[listItem.length - 1]);













console.log(listItem);