let currentPlaying = null;

// RC Audio
const rcAudio = document.getElementById("music-audio");
const rcPlayBtn = document.getElementById("music-play-btn");

// Vory Audio
const voryAudio = document.getElementById("vory-audio");
const voryPlayBtn = document.getElementById("vory-play-btn");
const voryImg = document.getElementById("profile-img");

// Function to stop all audio
function stopAllAudio() {
  if (currentPlaying === "rc") {
    rcAudio.pause();
    rcAudio.currentTime = 0;
    rcPlayBtn.classList.remove("bi-pause-circle");
    rcPlayBtn.classList.add("bi-play-circle");
  } else if (currentPlaying === "vory") {
    voryAudio.pause();
    voryAudio.currentTime = 0;
    voryImg.classList.remove("rotate");
    voryPlayBtn.classList.remove("bi-pause-circle");
    voryPlayBtn.classList.add("bi-play-circle");
  }
  currentPlaying = null;
}

// Event listener for RC Audio
rcPlayBtn.addEventListener("click", function () {
  if (currentPlaying !== "rc") {
    stopAllAudio(); // Stop Vory's audio if playing
    rcAudio.play();
    rcPlayBtn.classList.remove("bi-play-circle");
    rcPlayBtn.classList.add("bi-pause-circle");
    currentPlaying = "rc";
  } else {
    rcAudio.pause();
    rcPlayBtn.classList.remove("bi-pause-circle");
    rcPlayBtn.classList.add("bi-play-circle");
    currentPlaying = null;
  }
});

// Event listener for Vory Audio
voryPlayBtn.addEventListener("click", function () {
  if (currentPlaying !== "vory") {
    stopAllAudio(); // Stop RC's audio if playing
    voryAudio.play();
    voryImg.classList.add("rotate");
    voryPlayBtn.classList.remove("bi-play-circle");
    voryPlayBtn.classList.add("bi-pause-circle");
    currentPlaying = "vory";
  } else {
    voryAudio.pause();
    voryImg.classList.remove("rotate");
    voryPlayBtn.classList.remove("bi-pause-circle");
    voryPlayBtn.classList.add("bi-play-circle");
    currentPlaying = null;
  }
});