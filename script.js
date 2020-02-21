const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//play & pause video
function toggleVideoStatus() {
  video.paused ? video.play() : video.pause();
}

//update play/pause icon
function updatePlayIcon() {
  play.innerHTML = video.paused
    ? '<i class="fa fa-play fa-2x"></i>'
    : '<i class="fa fa-pause fa-2x"></i>';
}

//update progress and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //Get minutes
  let mins = Math.floor(video.currentTime / 60);
  mins = mins < 10 ? '0' + String(mins) : mins;
  let secs = Math.floor(video.currentTime % 60);
  secs = secs < 10 ? '0' + String(secs) : secs;

  timestamp.innerHTML = `${mins}:${secs}`;
}

//set video time to progress
function setVideoProgress() {
  video.currentTime = +(progress.value * video.duration) / 100;
}

//stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
