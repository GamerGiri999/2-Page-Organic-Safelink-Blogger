if (localStorage.getItem("twoken")) {
  const progress = document.getElementById("progress");
  progress.classList.remove("hidden");

  const countdownElement = document.getElementById("countdown");
  const progressBar = document.querySelector(".progress-bar");
  const aScr = document.querySelector(".aScr");
  const goToLink = document.getElementById("gotolink");

  let countdown = 14;
  let timer = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;
    const progressValue = 100 - (countdown / 14) * 100;
    progressBar.querySelector(".progress").style.width = `${progressValue}%`;
    if (countdown === 0) {
      clearInterval(timer);
      progressBar.style.display = "none";
      aScr.style.display = "block";
      goToLink.classList.remove("hidden");
    }
  }, 1000);

}

 
var twoken = localStorage.getItem('twoken');
// Check if the twoken value exists in localStorage
if (twoken) {
  
  var destiButton = document.getElementById('desti');
  destiButton.setAttribute('href', atob(twoken));


  destiButton.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('twoken');
    localStorage.removeItem('desti');
   destiButton.textContent = '';

    
    var redirectMsg = document.createElement('span');
    redirectMsg.innerHTML = 'Redirecting in 7 seconds...';
    destiButton.appendChild(redirectMsg); 
    var count = 7;
    var timer = setInterval(function() {
      redirectMsg.innerHTML = 'Redirecting in ' + count + ' seconds...';
      count--;
      if (count < 0) {
        clearInterval(timer);
        window.location.href = destiButton.getAttribute('href');
      }
    }, 1000);
  });
}


