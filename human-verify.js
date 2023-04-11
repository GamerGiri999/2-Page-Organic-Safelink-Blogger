if (localStorage.getItem("twoken")) {


// Get the 'hmVrfy' element and remove the 'hidden' class
  const hmVrfy = document.getElementById('hmVrfy');
 
  hmVrfy.classList.remove('hidden');

  // Show the 'Generating Link... Please Wait' message
  const hmvD = hmVrfy.querySelector('.hmvD');
  hmvD.style.display = 'block';

  // Wait for 4 seconds
  setTimeout(() => {
  
 
    // Hide the 'Generating Link... Please Wait' message
    hmvD.style.display = 'none';

    // Show the 'I am not a Robot' button
    const button = hmVrfy.querySelector('.button');

    button.style.display = 'block';
    button.setAttribute('href', 'https://gamergiri.blogspot.com/2020/07/gloud-games-svip-account-giveaway.html');
 }, 4000);
const countdownElement = document.getElementById("countdown");
const progressBar = document.querySelector(".progress-bar");
const aScr = document.querySelector(".aScr");
const goToLink = document.getElementById("gotolink");

let countdown = 10;
let timer = setInterval(() => {
  countdown--;
  countdownElement.textContent = countdown;
  const progress = 100 - (countdown / 10) * 100;
  progressBar.querySelector(".progress").style.width = progress + "%";
  if (countdown === 0) {
    clearInterval(timer);
    progressBar.style.display = "none";
    aScr.style.display = "block";
    goToLink.classList.remove("hidden");
}
}, 1000);}
