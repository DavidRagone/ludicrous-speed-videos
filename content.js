/* global chrome */

chrome.action.onClicked.addListener((tab) => {
  // Inject a tiny function into the current page.
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const vid = document.querySelector('video');
      if (vid) {
        vid.playbackRate = 2.5;
        // Optional toast in the console:
        console.log('Video speed set to 2.5×');
      } else {
        console.warn('No <video> element found on this page.');
      }
    }
  });
});
