console.log('Hello from the JavaScript console!');

// Your AJAX request here

$.ajax({
  type: 'GET',
  url:
    'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b',
  success: data => {
    console.log(data);
  },
  error: error => {
    console.log(error);
  }
});
// Add another console log here, outside your AJAX request

console.log('abcdefgh');

setTimeout(() => {
  console.log('world');
}, 200);
// Make sure you can answer the following questions:

// When does the request get sent?
// - request is sent immediatly

// When does the response come back?
// - once it finishes

// What's the current weather in New York?
// - Rain mist thunderstorm - temp 297.15
// Did the page refresh?
// - No
// How could we use different HTTP methods in our request?
// - ?? Use POST with the weather info in the query string
