function trackEvent(eventType, eventProperties) {
  // Log the event type and properties to the console
  const event = {
    eventType: eventType,
    eventProperties: eventProperties,
    sessionId: getSessionId(),
    timestamp: new Date().toISOString()
  };
  console.log("Event Tracked", event);

  // Save the event to local storage
  const events = JSON.parse(localStorage.getItem('events')) || [];
  events.push(event);
  localStorage.setItem('events', JSON.stringify(events));

  fetch('http://127.0.0.1:5500/trackEvent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Event sent to server:', data);
    })
    .catch(error => {
      console.error('Error sending event to server:', error);
    });
}

function getSessionId() {
  let sessionId = localStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = Math.random().toString(36).substring(2, 15);
    localStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
}

document.addEventListener('DOMContentLoaded', function() {
  // Track page event
  trackEvent('pageview', {
    url: window.location.href,
    timeStamp: new Date().toISOString()
  });
});

// Log the page visit count with timestamp
window.addEventListener('load', function () {
  let count = localStorage.getItem('visitCount') || 0;
  count++;
  localStorage.setItem('visitCount', count);
  console.log(`You have visited this page ${count} times.`);
  console.log(`Last visited: ${new Date().toLocaleString()}`);
});

// Track Click Events
let clickNo = 0;
let clickSessionId = Math.random().toString(36).substring(2, 15);

document.addEventListener('click', function (event) {
  clickNo++;
  console.log(`Click Session ID: ${clickSessionId}, Click NO: ${clickNo}, Timestamp: ${new Date().toLocaleString()}`);
  trackEvent('click', {
    clickNo: clickNo,
    clickSessionId: clickSessionId,
    timestamp: new Date().toISOString()
  });
});

// Track Form Submissions
document.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Form submitted');
  const formData = Object.fromEntries(new FormData(event.target));
  trackEvent('formSubmission', {
    formData: formData,
    timestamp: new Date().toISOString()
  });
});
