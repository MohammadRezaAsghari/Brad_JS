const list = document.querySelector('ul.list-group');
const listItem = document.createElement('li');
const link = document.createElement('a');
const button = document.createElement('button');

//configure a
link.setAttribute('href' , '#');
link.textContent = 'last Item';
//configure li
listItem.className = 'list-group-item';
listItem.setAttribute('title' , 'item');

//configure button
button.className = 'btn  rounded close';
button.innerHTML = '&times;'

//append <a> and <button> to <li>
listItem.appendChild(link);
listItem.appendChild(button);

// append <li> to <ul>
list.appendChild(listItem);










console.log(listItem);