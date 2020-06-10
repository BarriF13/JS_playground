// Fetch ---- using ES6

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);

function getText() {
  // fetch return promises-- res = response
  fetch('my-text.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      // console.log(data);

      document.getElementById('output').innerText = data;
    })
    .catch(function (err) {
      console.log(err);
    })
}

// local Json data
function getJson() {
  // fetch return promises-- res = response
  fetch('my-post.JSON')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function(post){
        output += `<li>${post.title}</li>`
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    })
}
