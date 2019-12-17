
let post = [
    {
        title : 'first title'
    },{
        title : 'second title'
    }
]

let createPost = (pst , callback) =>{
    return new Promise((resolve , reject)=>{
        setTimeout (()=>{
            post.push(pst);
            resolve();
        } , 2000)
    });
    
}

let getPost = () =>{
    
    setTimeout(()=>{
        
        console.log(post);
    },1000)
}

createPost({title:'thrid title'}).then(getPost);

// getPost();





































// let postArray = [
//     {title:'First post' , body:'First post body'},
//     {title:'Second post' , body:'second post body'},
//     {title:'Third post' , body:'third post body'}
// ]

// let createPost = (post , callback) =>{

//     return new Promise((resolve , reject) => {
//         setTimeout(()=> {
//             postArray.push(post);
//             resolve();
//         }, 2000);
        
//     })

   
    
// }

// let getPost = () =>{
//     setTimeout(()=>{
//         let output = '';
//         postArray.forEach((item)=>{
//             output += `<li>${item.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     } , 1000);
// }

// createPost({title:'Forth Post' , body:'Forth Post Body'}).then(getPost);
// createPost({title : 'Fifth Post' , body:'Fifth post body'}).then(getPost);
// // getPost();

// console.log(postArray);