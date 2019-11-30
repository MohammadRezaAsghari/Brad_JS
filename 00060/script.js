document.getElementById('btnSubmit').addEventListener('click' , function(e) {

    const number = document.getElementById('jokeNumber');
    const numberOfJokes = number.value;
    number.value = '';
    if(numberOfJokes > 0){
        const xhr = new XMLHttpRequest();

        xhr.open('GET' , `http://api.icndb.com/jokes/random/${numberOfJokes}` , true);

        xhr.onload = function() {
            const response = JSON.parse(this.responseText);
            const list = document.querySelector('.list-group');
            let output = '';
            response.value.forEach(function (item , index) {
            output +=`
            <li class='list-group-item'>${index+1} : ${item.joke}</li>
            `
        });
            list.innerHTML = output;
    }

    xhr.send();
    }
    
    
    e.preventDefault();
});

