"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var label_1 = require("ui/label");
var page_1 = require("ui/page");
function onPageLoaded(args) {
    console.log("pagemanagement2-page Loaded");
}
exports.onPageLoaded = onPageLoaded;
function createPage() {
    console.log("createPage");
    var label = new label_1.Label();
    label.text = "Hello, world! Create page via code.";
    var page = new page_1.Page();
    page.content = label;
    return page;
}
exports.createPage = createPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZW1hbmFnZW1lbnQyLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlbWFuYWdlbWVudDItcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtDQUFpQztBQUNqQyxnQ0FBK0I7QUFFL0Isc0JBQTZCLElBQWU7SUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFGRCxvQ0FFQztBQUVEO0lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQixJQUFNLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO0lBQzFCLEtBQUssQ0FBQyxJQUFJLEdBQUcscUNBQXFDLENBQUM7SUFDbkQsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUVyQixNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFSRCxnQ0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uUGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcInBhZ2VtYW5hZ2VtZW50Mi1wYWdlIExvYWRlZFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoKTogUGFnZSB7XG4gICAgY29uc29sZS5sb2coXCJjcmVhdGVQYWdlXCIpO1xuICAgIGNvbnN0IGxhYmVsID0gbmV3IExhYmVsKCk7XG4gICAgbGFiZWwudGV4dCA9IFwiSGVsbG8sIHdvcmxkISBDcmVhdGUgcGFnZSB2aWEgY29kZS5cIjtcbiAgICBjb25zdCBwYWdlID0gbmV3IFBhZ2UoKTtcbiAgICBwYWdlLmNvbnRlbnQgPSBsYWJlbDtcblxuICAgIHJldHVybiBwYWdlO1xufSJdfQ==