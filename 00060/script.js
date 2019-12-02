document.getElementById('btnSubmit').addEventListener('click' , function(e) {
    debugger;
    const number = document.getElementById('jokeNumber');
    const numberOfJokes = number.value;
    debugger;
    number.value = '';
    document.querySelector('.loader').style.display = 'block';
    e.preventDefault();
    if(numberOfJokes > 0){
        
        const xhr = new XMLHttpRequest();
        
        xhr.open('GET' , `http://api.icndb.com/jokes/random/${numberOfJokes}` , true);
        
        xhr.onload = function() {
            
            const response = JSON.parse(this.responseText);
            const list = document.querySelector('.list-group');
            list.addEventListener('load' , function() {
                setTimeout(function () {
                    document.querySelector('.loader').style.display = 'none';
                } , 3000);
                
            })
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

