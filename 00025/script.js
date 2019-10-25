//traversing the dom

let output;

list = document.querySelector('ul.list-group');
// output = list.children;

output = list.children[0].textContent;
output = list.children[0].innerText;
output = list.children[0].classList;
output = list.children[0].className;
output = list.children[0].nodeType;
output = list.children[1].nodeName;
output = list.children[1].parentNode;
output = list.children[0].firstElementChild;
output =  list.children[1].parentNode.parentNode.parentNode.parentNode.parentNode;









console.log(output);