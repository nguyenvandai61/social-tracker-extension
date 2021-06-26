import trackableWebsites from './config/index'


const name = Object.keys(trackableWebsites).find(key => {
    return trackableWebsites[key].regex.test(window.location.host)
})

const port = chrome.runtime.connect({name})
// ======================================================
// Time tracking event detection
// ======================================================
let idleTimer; // the 5s timer that checks idleness of user

/**
 * Resets the idle timer, triggered when a user event (e.g. click, mousemove) is detected
 */
const resetIdleTimer = () => {
    console.log('resettindle time')
  clearTimeout(idleTimer);
  startTrackingTime();
  idleTimer = setTimeout(stopTrackingTime, 5000); // 1000 millisec = 1 sec
};

// Reset idleness on the following events
window.addEventListener('load', resetIdleTimer);
window.addEventListener('mousemove', resetIdleTimer);
window.addEventListener('mousedown', resetIdleTimer);
window.addEventListener('keypress', resetIdleTimer);
window.addEventListener('DOMMouseScroll', resetIdleTimer);
window.addEventListener('mousewheel', resetIdleTimer);
window.addEventListener('touchmove', resetIdleTimer);
window.addEventListener('MSPointerMove', resetIdleTimer);

// Stop counting time when the page closes, and disconnect port
window.addEventListener('beforeunload', () => {
  port.disconnect();
  stopTrackingTime();
});


const startTrackingTime = () => {
    console.log('start tracking time')
    port.postMessage({ action: 'SET_ACTIVE', payload: true})
}

const stopTrackingTime = () => {
  port.postMessage({ action: 'SET_ACTIVE', payload: false });
};

label.init(name);