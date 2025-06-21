// Apply 2.5× speed to the first <video> found.
function setSpeed() {
  const vid = document.querySelector('video');
  if (vid && vid.playbackRate !== 2.5) {
    vid.playbackRate = 2.5;
  }
}

setSpeed();

// Some sites (YouTube, Netflix, single-page apps) inject <video>
// after navigation, so keep watching for new elements.
const observer = new MutationObserver(setSpeed);

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});

const stopWhenSet = () => {
  if (document.querySelector('video')?.playbackRate === 2.5) {
    observer.disconnect();
  }
};
observer.observe(document.documentElement, { childList: true, subtree: true });
setInterval(stopWhenSet, 2000);
