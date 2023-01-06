import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerVideo = document.querySelector('#vimeo-player');
const player = new Player(playerVideo);
const videoplayerTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

const onPlay = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(videoplayerTime);
