/**
 * @file control-bar.js
 */
import Component from '../component.js';

// Required children
import './progress-control/progress-control.js';


/**
 * Container of main controls
 *
 * @extends Component
 * @class ControlBar
 */
class ProgressBar extends Component {

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */
  createEl() {
    return super.createEl('div', {
      className: 'vjs-progress-bar',
      dir: 'ltr'
    }, {
      // The control bar is a group, so it can contain menuitems
      role: 'group'
    });
  }
}
/**
 *
 * 修改日志
 *
 * 日期         类型    修改人          描述
 * 2016-09-27  修改    yinguohui      去除多余的控件
 * 2016-09-27  修改    yinguohui      调整声音控件的顺序从playToggle后面移动到fullscreenToggle前面
 * 2016-09-29  修改    yinguohui      调整当前时间、剩余时间的顺序
 *
 */
ProgressBar.prototype.options_ = {
  children: [
    'progressControl'
  ]
};

Component.registerComponent('ProgressBar', ProgressBar);
export default ProgressBar;
