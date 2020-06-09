document.getElementById('button1').addEventListener('click' , loadCustomer);

document.getElementById('button2').addEventListener('click' , loadCustomers);


function loadCustomer(e){

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if (this.status === 200) {
      // Json file needs to parsed first
      const customer = JSON.parse(this.responseText);
      const output = `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
        </ul>
      `;


      document.getElementById('customer').innerHTML =output;
    };
  }
  xhr.send()

}
// Load customers
function loadCustomers(e){

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if (this.status === 200) {
      // Json file needs to parsed first
      const customers = JSON.parse(this.responseText);
      // because it is an array we need to loop through it

      // Instantiate a var for getting the individual customer
      let output = '';

      customers.forEach(function(customer){
        output += `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      });


      document.getElementById('customers').innerHTML = output;
    };
  }
  xhr.send()

}