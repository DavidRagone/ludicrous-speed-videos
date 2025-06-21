# Ludicrous Speed Videos

**Instantly bump any webpage’s first `<video>` to 2.5 × speed—only when *you* ask for it.**

---

## ✨ What it does

When you click the extension’s toolbar button, a tiny script runs in the active tab:

```js
const vid = document.querySelector('video');
if (vid) vid.playbackRate = 2.5;
```

That’s it—no background polling, no performance hit, nothing automatic.&#x20;

---

## 🗂️ Repository layout

| Path            | Purpose                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| `manifest.json` | Chrome **Manifest V3** descriptor (declares permissions, background service-worker, and the click-to-run action)  |
| `content.js`    | Service-worker script injected on click; sets the playback rate                                                   |
| `LICENSE`       | MIT licence text                                                                                                  |

---

## 🚀 Installation (local “unpacked”)

1. Clone or download this repo.
2. Open **chrome://extensions** in Chrome.
3. Enable **Developer mode** (toggle in the upper-right).
4. Click **Load unpacked**, choose the project folder, and confirm.

The extension icon should now appear in your toolbar (pin it if desired).

---

## 🎮 Usage

1. Navigate to any page that contains a video (YouTube, embedded HTML5 video, etc.).
2. Press **Ludicrous Speed Videos** in the toolbar.
3. The first `<video>` element on the page will start playing at **2.5×**.

   * If no video is found you’ll see a console warning instead.&#x20;

---

## 🛠️ Customising

* **Different speed** – edit the hard-coded value in `content.js`, e.g. `playbackRate = 1.75`.
* **Multiple videos** – swap `document.querySelector` for `document.querySelectorAll` and loop.
* **Keyboard shortcut** – add a `"commands"` section to `manifest.json` for quick hotkeys.

After any change, visit **chrome://extensions**, hit the **refresh** icon on the extension card, and reload your target tab.

---

## 🧪 Development tips

* **Live re-load**: keep the **Extensions** page open; Chrome lets you one-click reload.
* **Debugging**:

  * `console.log` from the injected function appears in the target page’s DevTools.
  * Service-worker logs appear in **chrome://extensions → service worker → inspect**.

---

## 📦 Distributing

To publish on the Chrome Web Store:

1. Zip the project folder (only the three files above + optional icons).
2. Upload via the [Chrome Web Store dashboard](https://chrome.google.com/webstore/devconsole).
3. Fill in store listing, icons (16 / 32 / 48 / 128 px), screenshots, and submit for review.

---

## ⚖️ Licence

Released under the **MIT License**—see `LICENSE` for details.&#x20;
