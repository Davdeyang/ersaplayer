import SetCurrent from "./timer";

function Eventinit(player) {
  var change = true;
  var toggleScreen = true;
  var minute;
  var second
  const { playBtn, pauseBtn, video,videoJd,voice,mute,ersaplay,bigPlay,bigPause,fulltime,refresh,FullScreen,voiceJd } = player.template;
  
  // 播放按钮
  playBtn.addEventListener('click', function () {
    pauseBtn.style.display = "block";
    playBtn.style.display = "none";
    bigPlay.style.display ="none";
    video.play();
  })
  // 暂停按钮
  pauseBtn.addEventListener('click', function () {
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";
    bigPlay.style.display ="block";
    video.pause();
  })
  // 重播按钮
  refresh.addEventListener('click', function () {
    video.load();
    videoJd.value = 0;
    video.currentTime = 0;
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
    bigPlay.style.display ="block";
  })
  // 声音按钮
  voice.addEventListener('click', function () {
    voice.style.display = "none";
    mute.style.display = "block";
    video.muted = true;
  })
  // 静音按钮
  mute.addEventListener('click', function () {
    mute.style.display = "none";
    voice.style.display = "block";
    video.muted = false;
  })
  // 全屏
  FullScreen.addEventListener('click', function () {
    if (toggleScreen) {
      if (ersaplay.requestFullscreen) {
        ersaplay.requestFullscreen();
      } else if (ersaplay.mozRequestFullScreen) {
        ersaplay.mozRequestFullScreen();
      } else if (ersaplay.webkitRequestFullScreen) {
        ersaplay.webkitRequestFullScreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      // else if (dc.mozCancelFullScreen) {
      //   dc.mozCancelFullScreen();
      // } else if (dc.webkitCancelFullScreen) {
      //   dc.webkitCancelFullScreen();
      // }
      console.log("dd");
    }
    toggleScreen = !toggleScreen;
  })
  // 声音进度设置
  voiceJd.addEventListener("change", function () {
    video.volume = this.value / 100;  
  })

  // 默认视频自动播放时
  video.ontimeupdate = function(){
    videoJd.value = video.currentTime / video.duration * 10000;
    player.setCurrentTime();
  }

  // 视频进度改变时
  videoJd.addEventListener('input', function () {
    video.ontimeupdate = null;
  })

  // 当进度条被点击或者拖拽时 改变当前位置 并且自动播放
  videoJd.addEventListener("change", function () {
    video.currentTime = this.value / 10000 * video.duration;
    player.setCurrentTime();
    video.ontimeupdate = function () {
      this.value = video.currentTime / video.duration * 10000;
      player.setCurrentTime();
    }
  })
   
  // 视频播放结束时
  video.addEventListener('ended', function () {
    video.currentTime = videoJd.value;
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";
  })
  // 视频正在播放时获取的视频总长
  video.addEventListener('playing', function () {
    var Atime = video.duration;
    let m = Math.floor(Atime % 60);
    let s = Math.floor(Atime % 3600 / 60);
    minute = m >= 10 ? m : '0' + m;
    second = s >= 10 ? s : '0' + s;
    fulltime.innerHTML = second + ":" + minute;
  })

  video.addEventListener('click', function () {
    if (change) {
      bigPause.style.display = "block";
      playBtn.style.display = "none";
      pauseBtn.style.display = "block"
      bigPlay.style.display = "none";
      setTimeout(function () {
        bigPause.style.display = "none";
      }, 100)
      video.play();
    } else {
      bigPlay.style.display = "block";
      playBtn.style.display = "block";
      pauseBtn.style.display = "none";
      video.pause();
    }
    change = !change;
  })
}
export default Eventinit;