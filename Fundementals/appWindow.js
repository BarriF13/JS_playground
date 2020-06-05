//Window object is global object --node and chrome are using this.
//WINDOW METHODS / OBEJCTS / PROPERTIES

// console.log(123)
//--------------Alert
// window.alert('WHAT IS UP')

//-------------Prompt
// const input = prompt();
// alert(input);

//------------Confirm
// if(confirm('are you sure?')) {
//   console.log('YES');
// } else {
//   console.log('No')
// }

let value;

//Outer height and width
value = window.outerHeight;
value = window.outerWidth;

//Inner height and width
value = window.innerHeight;
value = window.innerWidth;

//Scroll points
value = window.scrollY;

//Location object

value = window.location;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;
value = window.location.search;

//Redirect
// window.location.href = 'http://google.com';

//Reload
// window.location.reload();


//History Object
// window.history.go(-2);
// value = window.history.length;

//Navigator object

value = window.navigator;
value = window.navigator.appName;
value = window.navigator.appVersion;
value = window.navigator.userAgent;
value = window.navigator.platform;
value = window.navigator.vendor;
value = window.navigator.language;

console.log(value)