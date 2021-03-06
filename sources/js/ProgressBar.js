var ProgressBar,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ProgressBar = (function(_super) {
  __extends(ProgressBar, _super);

  ProgressBar.prototype._kind = 'ProgressBar';

  function ProgressBar(properties) {
    properties.noknob = true;
    ProgressBar.__super__.constructor.apply(this, arguments);
    this.removeChild(this.knob);
    if (properties.value === NULL) {
      this.value = 0.5;
    }
  }

  return ProgressBar;

})(Slider);
