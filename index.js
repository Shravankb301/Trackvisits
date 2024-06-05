function trackEvent(eventType, eventProperties) {
  // Log the event type and properties to the console
  const event = {
    eventType: eventType,
    eventProperties: eventProperties,
    sessionId: getSessionId(),
  }
  console.log("Event Tracked",event)

  // Save the event to local storage
  const events = JSON.parse(localStorage.getItem('events')) || []
  events.push(event)
localStorage.setItem('events', JSON.stringify(events))
}

function getSessionId() {
  let sessionId = localStorage.getItem('sessionId')
  if (!sessionId) {
    sessionId = Math.random().toString(36).substring(2, 15)
    localStorage.setItem('sessionId', sessionId)
  }
  return sessionId
  
}

document.addEventListener('DOMContentLoaded', function() {
  //track page event
  trackEvent('pageview',{
    //colon is asigning the property to the object
    url: window.location.href,
    timeStamp: new Date().toISOString()
  });
  // console.log('Page loaded',trackEvent);
});

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
let clickNo = 0;
let clicksessionId = Math.random().toString(36).substring(2, 15);

document.addEventListener('click', function (event) {
  clickNo++;
  console.log(`Click Session ID: ${clicksessionId}, Click NO: ${clickNo}, Timestamp: ${new Date().toLocaleString()}`);
})
    
    // Track Form Submissions
    document.addEventListener('submit', function (event) {
        console.log('Form submitted')
        // You can access the form data using event.target
        // For example, to access the value of an input field with name 'username':
        // const username = event.target.username.value
    })


