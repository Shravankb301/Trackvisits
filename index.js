/*
window is an object that represents the browser window
window.addEventListener is a method that listens for events on the window object
'load' is the event that is being listened for
the second argument is a callback function that will be called when the event occurs
the callback function will display an alert with the message "It's loaded!"
*/

//log the page visit count with time stamp

window.addEventListener('load', function () {
    //localStorage is a part of the Web Storage API that provides a way to store data on the client-side in the web browser
        let count = localStorage.getItem('visitCount') || 0
        count++
        localStorage.setItem('visitCount', count)
        console.log(`You have visited this page ${count} times.`)
        console.log(`Last visited: ${new Date().toLocaleString()}`)
        
      })
    
    //Track Click Events
    
    //event listener to the document object. 
    //The document object represents the entire HTML document loaded in the browser.
    // Generate a unique ID for each click and session
let clickID = 0;
let sessionID = Math.random().toString(36).substring(2, 15);
document.addEventListener('click', function (event) {
  clickID++;
  console.log(`Session ID: ${sessionID}, Click ID: ${clickID}, Timestamp: ${new Date().toLocaleString()}`);
})
    
    // Track Form Submissions
    document.addEventListener('submit', function (event) {
        console.log('Form submitted')
        // You can access the form data using event.target
        // For example, to access the value of an input field with name 'username':
        // const username = event.target.username.value
    })


