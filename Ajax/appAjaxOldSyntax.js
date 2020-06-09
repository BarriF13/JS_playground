document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //-1 Create an XHR object
  const xhr = new XMLHttpRequest();
  // Sate 1 
  //-2 Open property -- to open the file 
  xhr.open('GET', 'data.txt', true);

  // Optional - used for loaders -- state 3
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  }


  console.log('READYSTATE', xhr.readyState);

  //-3 load the file if everything is ok on port 200
  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      // console.log(this.responseText); // response text is the data that is inside the data.txt

      document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`;
    }
  }

  // // Older syntax  we needed to do with on ready state change-- no need to use it
  // xhr.onreadystatechange = function () {
  //   console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }
  //-4 send the file to show

  // if there is an error
  xhr.onerror = function () {
    console.log('Request error ...');
  }


  xhr.send();

  // readyState Values
  //0: request not initialized
  //1: server connection established
  //2: request received
  //3: processing request
  //4: request finished and response is ready

  // HTTP Statuses
  // 200: "ok"
  // 403: "Forbidden"
  // 404: "Not Found"
}