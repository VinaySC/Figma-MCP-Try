# EZ-Banko

EZ-Banko is a fast, lightweight, responsive mobile banking web application prototype designed using HTML, Vanilla CSS, and minimal Javascript. It was built referencing a clean, modern Figma design aesthetic without relying on hefty external CSS frameworks like Tailwind or Bootstrap. Let your banking experience be easy and engaging.

## Features

- **Home Dashboard:** Displays real-time total balances and quick actions (Send, Receive, Trade). 
- **Interactive Wallets:** Smooth horizontal pill-navigation layout. Toggling between "Primary Card" and "Bitcoin Wallet" alters the featured banking card, triggering a color gradient swap and balance details shift accompanied by responsive pagination dots.
- **Send Money Flow:** A dedicated `send.html` screen featuring a quick recipient selection list and large numpad amount entry.
- **Recent Activity:** A detailed transaction ledger (`activity.html`) equipped with aesthetic, categorized transaction icon markers and date-grouped headers.
- **Micro-Interactions:** Subtle, satisfying CSS transforms and active states enhance the touch-friendly mobile feel. Action buttons scale down responsively upon being pressed.

## Technologies Used

- **HTML5**: Semantic document structuring.
- **Vanilla CSS (CSS3)**: Custom properties (Variables) for theming, Flexbox for layout control, and native CSS transitions for smooth state changes.
- **Vanilla JavaScript**: Used strictly for DOM manipulation related to the card-switching interactivity and toggle states. 

## Running Locally

Because this project consists of standard web configurations, getting it running is incredibly simple:

1. Clone the repository to your local machine.
2. Open `index.html` in any modern web browser or run it through a local HTTP server such as python's (`python3 -m http.server 8080`).

## Project Structure

- `index.html`: The main dashboard view.
- `styles.css`: The global and primary stylesheet formatting the app wrapper, fonts, color variables, and home components.
- `script.js`: The interactivity layer handling the feature card pagination and content replacement.
- `send.html` / `send.css`: The "Send Money" auxiliary view and its relative styling.
- `activity.html` / `activity.css`: The complete "See All" transaction ledger view and its relative styling.
