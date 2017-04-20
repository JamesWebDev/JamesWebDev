export const TreeShakeThisFunctionAway = function(one, two) {
    var _this = this;
    this.addThemTogether = function () {
        _this.result = _this.numberone + _this.numbertwo;
    };
    this.logTheResult = function () {
        console.log(_this.result);
    };
    this.numberone = one;
    this.numbertwo = two;
    this.addThemTogether();
    this.logTheResult();
}