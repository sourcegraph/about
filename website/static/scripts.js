/**
 * Core event logging
 */

function initializeGA() {
  if (!window.ga) {
    return
  }
  this.ga(function(trackerId) {
  })
}

function logToConsole(eventName, object) {
  const eventLogDebug = typeof localStorage !== 'undefined' && localStorage.getItem('eventLogDebug') !== null
  if (eventLogDebug) {
    console.log('%cEVENT %s', 'color: #aaa', eventName, object)
  }
}
