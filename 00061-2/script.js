let posts = [
    {title: 'First Post' , body:'First Body'},
    {title: 'Second Post' , body:'Second Body'},
    {title: 'Third Post' , body:'Thrid Body'},
    {title: 'Forth Post' , body:'Forth Body'},
    {title: 'Fifth Post' , body:'Fifth Body'}
]

let addPost = function (post , callBack){
    debugger;
    setTimeout(function() {
        debugger;
        posts.push(post);
        callBack();
    },2000);
    debugger;
}

let getPost = function () {
    debugger;
    setTimeout(function () {
        debugger;
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title} + ${post.body}</li>`
        });
        document.body.innerHTML = output;
    } , 1000);
    debugger;
}

addPost({title:'Sixthed Post' , body:'Sixthed Body'} , getPost);