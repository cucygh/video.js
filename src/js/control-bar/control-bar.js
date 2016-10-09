/**
 * @file control-bar.js
 */
import Component from '../component.js';

// Required children
import './play-toggle.js';
import './time-controls/current-time-display.js';
import './time-controls/duration-display.js';
import './time-controls/time-divider.js';
import './time-controls/remaining-time-display.js';
import './live-display.js';
// import './progress-control/progress-control.js';
import './fullscreen-toggle.js';
import './volume-control/volume-control.js';
import './volume-menu-button.js';
import './mute-toggle.js';
import './text-track-controls/chapters-button.js';
import './text-track-controls/descriptions-button.js';
import './text-track-controls/subtitles-button.js';
import './text-track-controls/captions-button.js';
import './audio-track-controls/audio-track-button.js';
import './playback-rate-menu/playback-rate-menu-button.js';
import './spacer-controls/custom-control-spacer.js';

/**
 * Container of main controls
 *
 * @extends Component
 * @class ControlBar
 */
class ControlBar extends Component {

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */
  createEl() {
    return super.createEl('div', {
      className: 'vjs-control-bar',
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
ControlBar.prototype.options_ = {
  children: [
    'playToggle',
    // 'progressControl',
    // 'liveDisplay',
    // 'remainingTimeDisplay',
    'currentTimeDisplay',
    'timeDivider',
    'durationDisplay',
    'customControlSpacer',
    'playbackRateMenuButton',
    // 'chaptersButton',
    // 'descriptionsButton',
    // 'subtitlesButton',
    // 'captionsButton',
    // 'audioTrackButton',
    'volumeMenuButton',
    'fullscreenToggle'
  ]
};

Component.registerComponent('ControlBar', ControlBar);
export default ControlBar;
