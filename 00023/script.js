//how to select elements in js?


//-------------------------------singular selecting


//document.getElementById();

// let list = document.getElementById('list-1');
// list.style.backgroundColor = '#eee';
// list.style.padding = '10px';
// list.style.borderRadius = '10px';
// list.style.display ='block';

//document.querySelector();

// let item = document.querySelector('.list-group .list-group-item');

// item.style.color = 'red';

// let h2 =document.querySelector('.h2');
// h2.style.color = 'red';

//---------------------------------plural Selector


// let h2 = document.getElementsByClassName('h2');

// h2[0].textContent = 'first';
// h2[1].innerText = 'second';
// h2[2].innerHTML = '<span style="color:red">third</span>';

let color = ['#333' , '#eee' , '#ddd'];

let h2 = document.getElementsByClassName('h2');
console.log(h2);

let arr = Array.from(h2);
console.log(arr);

arr.forEach(function (item , index){
    item.style.color =`${color[index]}`;
});


