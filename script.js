const focusModes = {
  pomodoro: { label: 'Pomodoro', workMinutes: 25, restMinutes: 5 },
  'deep-focus': { label: 'Deep Focus', workMinutes: 0, restMinutes: 10 },
  'extreme-focus': { label: 'Extreme Focus', workMinutes: 100, restMinutes: 20 }
};

const modeButtons = document.querySelectorAll('.mode-button');
const timeValue = document.getElementById('timeValue');
const modeName = document.getElementById('modeName');
const timerState = document.getElementById('timerState');
const startPauseButton = document.getElementById('startPauseButton');
const resetButton = document.getElementById('resetButton');

let activeMode = 'pomodoro';
let currentPhase = 'work';
let remainingSeconds = 25 * 60;
let countdownTimer = null;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function renderTimer() {
  timeValue.textContent = formatTime(remainingSeconds);
  modeName.textContent = focusModes[activeMode].label;
  timerState.textContent = currentPhase === 'work' ? 'Work' : 'Rest';
}

function highlightActiveMode(mode) {
  modeButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.mode === mode);
  });
}

function switchMode(mode) {
  activeMode = mode;
  currentPhase = 'work';
  remainingSeconds = focusModes[mode].workMinutes * 60;

  if (remainingSeconds === 0) {
    currentPhase = 'rest';
    remainingSeconds = focusModes[mode].restMinutes * 60;
  }

  clearInterval(countdownTimer);
  countdownTimer = null;
  startPauseButton.textContent = 'Start';
  highlightActiveMode(mode);
  renderTimer();
}

function tickTimer() {
  if (remainingSeconds > 0) {
    remainingSeconds -= 1;
    renderTimer();
    return;
  }

  if (currentPhase === 'work') {
    currentPhase = 'rest';
    remainingSeconds = focusModes[activeMode].restMinutes * 60;
  } else {
    currentPhase = 'work';
    remainingSeconds = focusModes[activeMode].workMinutes * 60;

    if (remainingSeconds === 0) {
      currentPhase = 'rest';
      remainingSeconds = focusModes[activeMode].restMinutes * 60;
    }
  }

  renderTimer();
}

function toggleTimer() {
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
    startPauseButton.textContent = 'Start';
    return;
  }

  countdownTimer = setInterval(tickTimer, 1000);
  startPauseButton.textContent = 'Pause';
}

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    switchMode(button.dataset.mode);
  });
});

startPauseButton.addEventListener('click', toggleTimer);

resetButton.addEventListener('click', () => {
  switchMode(activeMode);
});

switchMode(activeMode);
