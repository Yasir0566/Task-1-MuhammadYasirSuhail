# FocusFlow

FocusFlow is a lightweight, browser-based focus timer designed to help you stay on task with a calm, distraction-free interface. It includes multiple focus modes, a countdown timer, and simple controls for starting, pausing, and resetting your session.

## Overview

This project is a single-page web app built with plain HTML, CSS, and JavaScript. It is ideal for studying, deep work, or short productivity sprints without requiring any installation or external dependencies.

## Features

- Three focus modes:
  - Pomodoro: 25-minute work session with 5-minute rest
  - Deep Focus: 10-minute rest interval for longer concentration blocks
  - Extreme Focus: 100-minute work session with 20-minute rest
- Start, pause, and reset controls
- Clear visual status for current mode and timer phase
- Responsive layout for desktop and mobile screens
- Simple, polished design with accessible buttons and keyboard-friendly interaction

## Project Structure

```text
FocusFlow/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive layout
└── script.js       # Timer logic and focus mode behavior
```

## Getting Started

1. Open the project folder in your preferred code editor.
2. Launch the app by opening [index.html](index.html) in a browser.
3. Select a focus mode and press Start to begin your session.

## Usage

- Click a mode button to switch between Pomodoro, Deep Focus, and Extreme Focus.
- Press Start to begin the countdown.
- Press Pause to stop the timer temporarily.
- Press Reset to return the timer to the selected mode's default duration.

## Customization

You can customize the timer by editing the values in [script.js](script.js):

- Adjust work and rest durations for each focus mode
- Change the timer labels or states
- Modify colors, spacing, and layout in [style.css](style.css)

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## Notes

This project is intentionally simple and dependency-free, making it easy to understand and extend. It is a great starting point for adding features such as:

- Sound alerts when a session ends
- Progress bars or circular timers
- Session history and statistics
- Dark mode support


