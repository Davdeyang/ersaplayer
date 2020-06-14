import Template from "./template";


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

  //用于扩展控制插件功能的
  this.extendController = function (plugin: Object) {

  }

}


export default Player;