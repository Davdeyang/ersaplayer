import Template from "./template";
import Eventinit from "./events";
import SetCurrent from "./timer";
interface IPlayerProps {
  container: HTMLElement;
  url: string;
}

// interface IPlayer {
//   container: HTMLElement;
//   url: String;
//   template: typeof Template;
//   extendController: Function;
// }

function Player(options: IPlayerProps) {
  this.container = options.container;
  this.url = options.url;
  this.template = new Template(options.container);
  console.log(this.template);
  let minute;
  let second;
  //用于扩展控制插件功能的
  this.extendController = function (plugin: Object) {

  }

  // 调用Eventinit模块
  Eventinit(this);
 
  // 初始化
  this.init = function () {
    this.template.video.volume = 0.5;
    this.template.video.currentTime = 0;
    this.template.videoJd.value = 0;
  }
  this.init();

  this.play = function () {
    this.template.video.play();
  }

  this.pause = function () {
    this.template.video.pause()
  }
  // this.updateTime = function () {
  //   (this.template.video.currentTime / this.template.video.duration) * 10000;
  // }
  // this.updateTime();

  this.setCurrentTime = function () {
    var time = this.template.video.currentTime;
    var m = Math.floor(time % 60);
    var s = Math.floor(time % 3600 / 60);
    minute = m >= 10 ? m : '0' + m;
    second = s >= 10 ? s : '0' + s;
    this.template.cutime.innerHTML = second + ":" + minute;
  }
  this.setCurrentTime();
}
export default Player;