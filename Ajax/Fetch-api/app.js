// Fetch ---- using ES6

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', externalApi);
function getText() {
  // fetch return promises-- res = response
  fetch('my-text.txt')
    // .then(function (res) {
    //   return res.text();
    // })
    // .then(function (data) {
    //   // console.log(data);

    //   document.getElementById('output').innerText = data;
    // })
    //  .catch(function (err) {
    //   console.log(err);
    // })
    .then(res => res.text())
    .then(data => document.getElementById('output').innerText = data)
    .catch(err => console.log(err));
}

// local Json data
function getJson() {
  // fetch return promises-- res = response
  fetch('my-post.JSON')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

// External API
function externalApi() {
  // fetch return promises-- res = response
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

