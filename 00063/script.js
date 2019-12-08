const http = new easyHttp();
debugger;
let response = http.get('https://jsonplaceholder.typicode.com/posts' , function (data) {
    console.log(data);
});
debugger;