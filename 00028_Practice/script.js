//
let btn = document.querySelector('.btn')
console.log(btn);

btn.addEventListener('click', function() {

    const span = document.createElement('span');
    //configure span
    span.className = 'preloader mx-3';

    //append span to btn


    console.log(btn);
    btn.textContent = '';
    btn.appendChild(span);


});