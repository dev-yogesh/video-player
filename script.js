const playPauseBtn = document.querySelector('.play-pause-btn');
const theaterBtn = document.querySelector('.theater-btn');
const fullScreenBtn = document.querySelector('.full-screen-btn');
const miniPlayerBtn = document.querySelector('.mini-player-btn');
const videoContainer = document.querySelector('.video_container');
const video = document.querySelector('video');

document.addEventListener('keydown', (e) => {
  const tagName = document.activeElement.tagName.toLowerCase();

  if (tagName === 'input') return;

  switch (e.key.toLowerCase()) {
    case ' ':
      if (tagName === 'button') return;
    case 'k':
      togglePlay();
      break;
    case 'f':
      toggleFullScreenMode();
      break;
    case 't':
      toggleTheaterMode();
      break;
    case 'i':
      toggleMiniPlayerMode();
      break;
  }
});

// View Modes
theaterBtn.addEventListener('click', toggleTheaterMode);
fullScreenBtn.addEventListener('click', toggleFullScreenMode);
miniPlayerBtn.addEventListener('click', toggleMiniPlayerMode);

function toggleTheaterMode() {
  videoContainer.classList.toggle('theater');
}

function toggleFullScreenMode() {
  if (document.fullscreenElement == null) {
    videoContainer.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function toggleMiniPlayerMode() {
  if (videoContainer.classList.contains('mini_player')) {
    document.exitPictureInPicture();
  } else {
    video.requestPictureInPicture();
  }
}

document.addEventListener('fullscreenchange', (e) => {
  videoContainer.classList.toggle('full_screen', document.fullscreenElement);
});

video.addEventListener('enterpictureinpicture', (e) => {
  videoContainer.classList.add('mini_player');
});

video.addEventListener('leavepictureinpicture', (e) => {
  videoContainer.classList.remove('mini_player');
});

// Play / Pause
playPauseBtn.addEventListener('click', togglePlay);

video.addEventListener('click', togglePlay);

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

video.addEventListener('play', () => {
  videoContainer.classList.remove('paused');
});

video.addEventListener('pause', () => {
  videoContainer.classList.add('paused');
});
