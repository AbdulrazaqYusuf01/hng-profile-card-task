// script.js
function updateTime() {
  const timeElement = document.getElementById('current-time');
  timeElement.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000); // optional, updates every second
