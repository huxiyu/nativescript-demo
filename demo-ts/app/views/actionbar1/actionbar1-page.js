"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view = require("ui/core/view");
var frames = require("ui/frame");
var tipLabel;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
}
exports.navigatingTo = navigatingTo;
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    var page = args.object;
    // tip label
    tipLabel = view.getViewById(page, "tipLabel");
    tipLabel.text = "";
}
exports.pageLoaded = pageLoaded;
function onNavBtnTap() {
    // This code will be called only in Android.
    console.log("Navigation button tapped!");
    frames.goBack();
}
exports.onNavBtnTap = onNavBtnTap;
function onShare(args) {
    console.log("Share action item tapped.");
    tipLabel.text = "Share action item tapped.";
}
exports.onShare = onShare;
function onDelete(args) {
    console.log("Delete action item tapped.");
    tipLabel.text = "Delete action item tapped.";
}
exports.onDelete = onDelete;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uYmFyMS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWN0aW9uYmFyMS1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsbUNBQXFDO0FBQ3JDLGlDQUFtQztBQUluQyxJQUFJLFFBQTJCLENBQUM7QUFFaEMsd0VBQXdFO0FBQ3hFLHNCQUE2QixJQUFlO0lBQ3hDOzs7O01BSUU7SUFDRixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBYyxDQUFDO0FBQ3JDLENBQUM7QUFQRCxvQ0FPQztBQUVELGtFQUFrRTtBQUNsRSxvQkFBMkIsSUFBZTtJQUN0QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBYyxDQUFDO0lBRWpDLFlBQVk7SUFDWixRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFzQixDQUFDO0lBQ25FLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFORCxnQ0FNQztBQUVEO0lBQ0ksNENBQTRDO0lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUN6QyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQUpELGtDQUlDO0FBRUQsaUJBQXdCLElBQWU7SUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ3pDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsMkJBQTJCLENBQUM7QUFDaEQsQ0FBQztBQUhELDBCQUdDO0FBRUQsa0JBQXlCLElBQWU7SUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQzFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsNEJBQTRCLENBQUM7QUFDakQsQ0FBQztBQUhELDRCQUdDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkluIE5hdGl2ZVNjcmlwdCwgYSBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhbiBYTUwgZmlsZSBpcyBrbm93biBhc1xuYSBjb2RlLWJlaGluZCBmaWxlLiBUaGUgY29kZS1iZWhpbmQgaXMgYSBncmVhdCBwbGFjZSB0byBwbGFjZSB5b3VyIHZpZXdcbmxvZ2ljLCBhbmQgdG8gc2V0IHVwIHlvdXIgcGFnZeKAmXMgZGF0YSBiaW5kaW5nLlxuKi9cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCAqIGFzIHZpZXcgZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0ICogYXMgZnJhbWVzIGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0ICogYXMgbGFiZWxNb2R1bGUgZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxubGV0IHRpcExhYmVsOiBsYWJlbE1vZHVsZS5MYWJlbDtcblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcIm5hdmlnYXRpbmdUb1wiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgLypcbiAgICBUaGlzIGdldHMgYSByZWZlcmVuY2UgdGhpcyBwYWdl4oCZcyA8UGFnZT4gVUkgY29tcG9uZW50LiBZb3UgY2FuXG4gICAgdmlldyB0aGUgQVBJIHJlZmVyZW5jZSBvZiB0aGUgUGFnZSB0byBzZWUgd2hhdOKAmXMgYXZhaWxhYmxlIGF0XG4gICAgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYXBpLXJlZmVyZW5jZS9jbGFzc2VzL191aV9wYWdlXy5wYWdlLmh0bWxcbiAgICAqL1xuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdCBhcyBQYWdlO1xufVxuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibG9hZGVkXCIgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0IGFzIFBhZ2U7XG5cbiAgICAvLyB0aXAgbGFiZWxcbiAgICB0aXBMYWJlbCA9IHZpZXcuZ2V0Vmlld0J5SWQocGFnZSwgXCJ0aXBMYWJlbFwiKSBhcyBsYWJlbE1vZHVsZS5MYWJlbDtcbiAgICB0aXBMYWJlbC50ZXh0ID0gXCJcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2QnRuVGFwKCkge1xuICAgIC8vIFRoaXMgY29kZSB3aWxsIGJlIGNhbGxlZCBvbmx5IGluIEFuZHJvaWQuXG4gICAgY29uc29sZS5sb2coXCJOYXZpZ2F0aW9uIGJ1dHRvbiB0YXBwZWQhXCIpO1xuICAgIGZyYW1lcy5nb0JhY2soKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uU2hhcmUoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJTaGFyZSBhY3Rpb24gaXRlbSB0YXBwZWQuXCIpO1xuICAgIHRpcExhYmVsLnRleHQgPSBcIlNoYXJlIGFjdGlvbiBpdGVtIHRhcHBlZC5cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRGVsZXRlKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlIGFjdGlvbiBpdGVtIHRhcHBlZC5cIik7XG4gICAgdGlwTGFiZWwudGV4dCA9IFwiRGVsZXRlIGFjdGlvbiBpdGVtIHRhcHBlZC5cIjtcbn0iXX0=