"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
// To import the "ui/frame" module:
var frames = require("ui/frame");
var DetailModel = (function (_super) {
    __extends(DetailModel, _super);
    function DetailModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetailModel.prototype.onFrame = function () {
        // Navigate to page
        //frames.topmost().navigate("views/main/main-page");
        // frames goBack
        frames.goBack();
    };
    return DetailModel;
}(observable_1.Observable));
exports.DetailModel = DetailModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWwtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QyxtQ0FBbUM7QUFDbkMsaUNBQW1DO0FBRW5DO0lBQWlDLCtCQUFVO0lBQTNDOztJQVNBLENBQUM7SUFQVSw2QkFBTyxHQUFkO1FBQ0ksbUJBQW1CO1FBQ25CLG9EQUFvRDtRQUNwRCxnQkFBZ0I7UUFDaEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUMsQUFURCxDQUFpQyx1QkFBVSxHQVMxQztBQVRZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG4vLyBUbyBpbXBvcnQgdGhlIFwidWkvZnJhbWVcIiBtb2R1bGU6XG5pbXBvcnQgKiBhcyBmcmFtZXMgZnJvbSBcInVpL2ZyYW1lXCI7XG5cbmV4cG9ydCBjbGFzcyBEZXRhaWxNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHVibGljIG9uRnJhbWUoKSB7XG4gICAgICAgIC8vIE5hdmlnYXRlIHRvIHBhZ2VcbiAgICAgICAgLy9mcmFtZXMudG9wbW9zdCgpLm5hdmlnYXRlKFwidmlld3MvbWFpbi9tYWluLXBhZ2VcIik7XG4gICAgICAgIC8vIGZyYW1lcyBnb0JhY2tcbiAgICAgICAgZnJhbWVzLmdvQmFjaygpO1xuICAgIH1cblxufVxuIl19