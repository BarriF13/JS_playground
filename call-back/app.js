const posts = [
{title: 'Post One', body: 'this is post one'},
{title: 'Post two', body: 'this is post  two'}

];
//------------------------------------
// function createPost(post){
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});
// getPosts();

//----------------------------------------
// function createPost(post, callback){
//   setTimeout(function() {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'}, getPosts);


//----------------------------
// Using promises --alternative to call back and used in ES6
function createPost(post){
//create a promise
return new Promise(function(resolve, reject){
  setTimeout(function() {
    posts.push(post);

    const error = true;
    if(!error){
      resolve();
    }else{
      reject('Error something went wrong');
    }
   
  }, 2000);
});

}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(error){
  console.log(error);
});
