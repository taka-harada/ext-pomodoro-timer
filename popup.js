'use strict';

const setAlarm = (e) => {
  let minutes = parseFloat(e.target.value);
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.alarms.create({ delayInMinutes: minutes });
  chrome.storage.sync.set({ minutes: minutes });
  window.close();
}

const clearAlarm = () => {
  chrome.action.setBadgeText({ text: '' });
  chrome.alarms.clearAll();
  window.close();
}

document.getElementById('pomodoroStart').addEventListener('click', setAlarm);
document.getElementById('shortBreak').addEventListener('click', setAlarm);
document.getElementById('longBreak').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);
