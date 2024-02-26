function startTimer(duration, display) {
  let timer = duration;
  let minutes;
  let seconds;

  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = minutes + ':' + seconds;

    localStorage.setItem('timer', timer);
    if (--timer < 0) {
      localStorage.removeItem('timer');
      alert('Вам потрібен ще час?');
      timer = 60 * 3;
    }
  }, 1000);
}

window.onload = function () {
  const time = localStorage.getItem('timer') || 60 * 5;
  const display = document.querySelector('#timer');
  startTimer(time, display);
};
