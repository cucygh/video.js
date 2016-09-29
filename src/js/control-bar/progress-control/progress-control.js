/**
 * @file progress-control.js
 */
import Component from '../../component.js';
import * as Dom from '../../utils/dom.js';
import './seek-bar.js';
import './mouse-time-display.js';
/**
 * The Progress Control component contains the seek bar, load progress,
 * and play progress
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class ProgressControl
 */
class ProgressControl extends Component {
  /**
   *
   * 修改日志
   *
   * 日期       修改人     类型      描述
   *2016-09-27 yinguohui 增加       进度条增加点击事件，扩大进度条点击范围
   *
   */
  constructor(player, options) {
    super(player, options);
    this.on(this.el(), 'mouseup', function(event) {
      const mouseDisplay = Dom.$('.vjs-mouse-display', this.el());
      let currentTime = Dom.getElAttributes(mouseDisplay)['data-current-time'];

      if (currentTime) {
        currentTime = currentTime.split(':');
        if (currentTime.length === 2) {
          currentTime = currentTime[0] * 60 * 1 + currentTime[1] * 1;
          this.player_.currentTime(currentTime);
        }
      }
    });
  }
    /**
     * Create the component's DOM element
     *
     * @return {Element}
     * @method createEl
     */
  createEl() {
    return super.createEl('div', {
      className: 'vjs-progress-control vjs-control'
    });
  }
}
ProgressControl.prototype.options_ = {
  children: ['seekBar']
};
Component.registerComponent('ProgressControl', ProgressControl);
export default ProgressControl;
