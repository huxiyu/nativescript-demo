"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
// To import the "ui/frame" module:
var frames = require("ui/frame");
var DetailModel = /** @class */ (function (_super) {
    __extends(DetailModel, _super);
    function DetailModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetailModel.prototype.onFrame = function () {
        // Navigate to page
        // frames.topmost().navigate("views/main/main-page");
        // frames goBack
        frames.goBack();
    };
    return DetailModel;
}(observable_1.Observable));
exports.DetailModel = DetailModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWwtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QyxtQ0FBbUM7QUFDbkMsaUNBQW1DO0FBRW5DO0lBQWlDLCtCQUFVO0lBQTNDOztJQVNBLENBQUM7SUFQVSw2QkFBTyxHQUFkO1FBQ0ksbUJBQW1CO1FBQ25CLHFEQUFxRDtRQUNyRCxnQkFBZ0I7UUFDaEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUMsQUFURCxDQUFpQyx1QkFBVSxHQVMxQztBQVRZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbi8vIFRvIGltcG9ydCB0aGUgXCJ1aS9mcmFtZVwiIG1vZHVsZTpcbmltcG9ydCAqIGFzIGZyYW1lcyBmcm9tIFwidWkvZnJhbWVcIjtcblxuZXhwb3J0IGNsYXNzIERldGFpbE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgICBwdWJsaWMgb25GcmFtZSgpIHtcbiAgICAgICAgLy8gTmF2aWdhdGUgdG8gcGFnZVxuICAgICAgICAvLyBmcmFtZXMudG9wbW9zdCgpLm5hdmlnYXRlKFwidmlld3MvbWFpbi9tYWluLXBhZ2VcIik7XG4gICAgICAgIC8vIGZyYW1lcyBnb0JhY2tcbiAgICAgICAgZnJhbWVzLmdvQmFjaygpO1xuICAgIH1cblxufVxuIl19