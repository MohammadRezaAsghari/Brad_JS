let btn = document.querySelector('.btn');
console.log(btn);


btn.addEventListener('click', function(e) {
    //1.create span
    const span = document.createElement('span');
    //2.configure span
    span.className = 'circle';


    span.style.left = e.offsetX + 'px';
    span.style.top = e.offsetY + 'px';



    btn.appendChild(span);



})