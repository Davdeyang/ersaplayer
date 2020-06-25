

const html = `
<div id="ersaplay" class="overflow positionRelative col-lg-6">
<div class="ersaplay-bigPlay positionAbsolute displayNone">
  <svg class="icon ersaplay-bigPlay-son colorWhite fontSize90" aria-hidden="true">
    <use xlink:href="#icon-bofangqi1"></use>
  </svg>
</div>
<div class="ersaplay-bigPause positionAbsolute displayNone">
  <svg class="icon ersaplay-bigPause-son colorWhite fontSize90" aria-hidden="true">
    <use xlink:href="#icon-zanting2"></use>
  </svg>
</div>
<video id="video" class="ersav-ideo pr" src="../video/sa.mp4" x5-video-orientation="portraint"
  x5-video-player-fullscreen="true" x-webkit-airplay="allow"></video>
<div id="mask"></div>
<div class="ersaplay-controller">
  <div class="ersaplay-controller-videoJd">
    <input id="ersaplay-videoJd" type="range" max="10000">
  </div>
  <div class="ersaplay-controller-bottom">
    <div class="ersaplay-controller-left">
      <div id="playbutton" class="ersaplay-controller-left-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofanganniu3"></use>
        </svg>
      </div>
      <div id="pausebutton" class="ersaplay-controller-left-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zantinganniu"></use>
        </svg>
      </div>
      <div id="refresh" class="ersaplay-controller-left-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuaxinanniu"></use>
        </svg>
      </div>
      <div id="time" class="ersaplay-controller-left-icon">
        <span id="cutime">00:00</span> / <span id="fulltime">00:00</span>
      </div>
    </div>
    <div class="ersaplay-controller-right">
      <div id="voice" class="ersaplay-controller-right-icon">
        <svg class="icon hidden-xs show" aria-hidden="true">
          <use xlink:href="#icon-shengyin"></use>
        </svg>
      </div>
      <div id="mute" class="ersaplay-controller-right-icon">
        <svg class="icon hidden-xs show" aria-hidden="true">
          <use xlink:href="#icon-jingyin"></use>
        </svg>
      </div>
      <div id="volJd" class="ersaplay-controller-right-icon hidden-xs show">
        <input type="range" id="ersaplay-voiJd">
      </div>
      <div id="FullScreen" class="ersaplay-controller-right-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuidahuazhijiao"></use>
        </svg>
      </div>
    </div>
  </div>
</div>
</div>
 `;

function Template(container: HTMLElement) {
  container.innerHTML = html;
  this.video = document.querySelector("#video");
  this.playBtn = document.getElementById("playbutton");
  this.pauseBtn = document.getElementById("pausebutton");
  this.refresh = document.getElementById("refresh");
  this.voice = document.getElementById("voice");
  this.mute = document.getElementById("mute");
  this.FullScreen = document.getElementById("FullScreen");
  this.time = document.getElementById("time");
  this.cutime = document.getElementById("cutime");
  this.fulltime = document.getElementById("fulltime");
  this.voiceJd = document.getElementById("ersaplay-voiJd");
  this.videoJd =document.getElementById("ersaplay-videoJd");
  this.bigPlay =document.querySelector(".ersaplay-bigPlay");
  this.bigPause = document.querySelector(".ersaplay-bigPause");
  this.bigPlaySon= document.getElementById("ersaplay-bigPlay-son");
  this.bigPauseSon= document.getElementById("ersaplay-bigPause-son");
  this.ersaplay =document.querySelector("#ersaplay");
}

export default Template;