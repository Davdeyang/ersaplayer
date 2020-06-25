function SetCurrent(Player){
  let minute;
  let second;
  var time = Player.template.video.currentTime;
  var m = Math.floor(time % 60);
  var s = Math.floor(time % 3600 / 60);
  minute = m >= 10 ? m : '0' + m;
  second = s >= 10 ? s : '0' + s;
  Player.template.cutime.innerHTML = second + ":" + minute;
}
export default SetCurrent;