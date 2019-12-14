function getFetch(){
    fetch('https://api.github.com/users')
        .then(function(res){
            return res.json();
        })
        .then((data) => {
            data.forEach(item => console.log(item.login))
        });
}
getFetch();