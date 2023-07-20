function updateClock() {
    var now = new Date();
    var time = now.toLocaleTimeString();
    var date = now.toLocaleDateString();
  
    var clock = document.getElementById('clock');
    clock.innerHTML = time + ' - ' + date;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);