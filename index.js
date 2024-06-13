(function(global) {
  let mousemoveData = [];

  function getSessionId() {
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15);
      localStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  }

  function trackEvent(eventType, eventProperties) {
    const event = {
      eventType,
      eventProperties,
      sessionId: getSessionId(),
      timestamp: new Date().toISOString()
    };

    // Save the event to local storage
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));

    // Send the event to the server
    fetch('http://127.0.0.1:4560/trackEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    })
      .then(response => response.json())
      .then(data => {
        // Event sent to server
      })
      .catch(error => {
        console.error('Error sending event to server:', error);
      });
  }

  function renderHeatmap() {
    const canvas = document.querySelector('.heatmap-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the heatmap
    mousemoveData.forEach(point => {
      const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 50);
      gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)');
      gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(point.x - 50, point.y - 50, 100, 100);
    });
  }

  function addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .demo-wrapper {
        position: relative;
        width: 100%;
        height: 100vh;
        border: 1px solid #ccc;
      }
      .heatmap-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none; /* Allows clicks to pass through to underlying elements */
      }
    `;
    document.head.appendChild(style);
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Add styles to the document
    addStyles();

    // Track page view event
    trackEvent('pageview', {
      url: window.location.href,
      timestamp: new Date().toISOString()
    });
  });

  window.addEventListener('load', function () {
    let count = localStorage.getItem('visitCount') || 0;
    count++;
    localStorage.setItem('visitCount', count);
    console.log(`You have visited this page ${count} times.`);
    console.log(`Last visited: ${new Date().toLocaleString()}`);
  });

  let clickNo = 0;
  let clickSessionId = Math.random().toString(36).substring(2, 15);

  document.addEventListener('click', function (event) {
    clickNo++;
    trackEvent('click', {
      clickNo,
      clickSessionId,
      x: event.clientX,
      y: event.clientY,
      timestamp: new Date().toISOString()
    });
  });

  document.querySelector('.demo-wrapper').onmousemove = function(ev) {
    const point = {
      x: ev.layerX,
      y: ev.layerY,
      value: 1
    };
    mousemoveData.push(point);
    console.log(point);
    trackEvent('mousemove', point);
    renderHeatmap();
  };

  global.eventTracker = { initialize: function(config) {
    // Initialize tracking
    if (!config.userId || !config.serverUrl) {
      console.error('User ID and Server URL are required');
      return;
    }

    // Custom initialization logic if needed
  } };
})(window);
