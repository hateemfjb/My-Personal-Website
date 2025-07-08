function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-GB', options);
  const timeString = now.toLocaleTimeString('en-GB');
  document.getElementById('datetime').textContent = 🕒 ${dateString} — ${timeString};
}

setInterval(updateDateTime, 1000);
updateDateTime();