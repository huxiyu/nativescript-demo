"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
var observable_1 = require("data/observable");
var context;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    if (!context) {
        console.log("初始化 actionbar2 page context");
        context = new observable_1.Observable();
        page.bindingContext = context;
        page.bindingContext.set("isEditing", false);
    }
}
exports.navigatingTo = navigatingTo;
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    var page = args.object;
}
exports.pageLoaded = pageLoaded;
function onEdit(args) {
    console.log("Edit item tapped.");
    var btn = args.object;
    btn.bindingContext.set("isEditing", true);
}
exports.onEdit = onEdit;
function onSave(args) {
    console.log("Save item tapped.");
    var btn = args.object;
    btn.bindingContext.set("isEditing", false);
}
exports.onSave = onSave;
function onCancel(args) {
    console.log("Cancel item tapped.");
    var btn = args.object;
    btn.bindingContext.set("isEditing", false);
}
exports.onCancel = onCancel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uYmFyMi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWN0aW9uYmFyMi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7RUFJRTtBQUNGLDhDQUF3RDtBQUl4RCxJQUFJLE9BQU8sQ0FBQztBQUVaLHdFQUF3RTtBQUN4RSxzQkFBNkIsSUFBZTtJQUN4Qzs7OztNQUlFO0lBRUYsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQWMsQ0FBQztJQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDM0MsT0FBTyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0FBQ0wsQ0FBQztBQWRELG9DQWNDO0FBRUQsa0VBQWtFO0FBQ2xFLG9CQUEyQixJQUFlO0lBQ3RDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFjLENBQUM7QUFDckMsQ0FBQztBQUZELGdDQUVDO0FBRUQsZ0JBQXVCLElBQWU7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFtQixDQUFDO0lBQ3JDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBSkQsd0JBSUM7QUFFRCxnQkFBdUIsSUFBZTtJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDakMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQW1CLENBQUM7SUFDckMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFKRCx3QkFJQztBQUVELGtCQUF5QixJQUFlO0lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNuQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBbUIsQ0FBQztJQUNyQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUpELDRCQUlDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkluIE5hdGl2ZVNjcmlwdCwgYSBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhbiBYTUwgZmlsZSBpcyBrbm93biBhc1xuYSBjb2RlLWJlaGluZCBmaWxlLiBUaGUgY29kZS1iZWhpbmQgaXMgYSBncmVhdCBwbGFjZSB0byBwbGFjZSB5b3VyIHZpZXdcbmxvZ2ljLCBhbmQgdG8gc2V0IHVwIHlvdXIgcGFnZeKAmXMgZGF0YSBiaW5kaW5nLlxuKi9cbmltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCAqIGFzIHZpZXcgZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbmxldCBjb250ZXh0O1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGluZ1RvXCIgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvKlxuICAgIFRoaXMgZ2V0cyBhIHJlZmVyZW5jZSB0aGlzIHBhZ2XigJlzIDxQYWdlPiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG5cbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QgYXMgUGFnZTtcbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLliJ3lp4vljJYgYWN0aW9uYmFyMiBwYWdlIGNvbnRleHRcIik7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dC5zZXQoXCJpc0VkaXRpbmdcIiwgZmFsc2UpO1xuICAgIH1cbn1cblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcImxvYWRlZFwiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdCBhcyBQYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25FZGl0KGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiRWRpdCBpdGVtIHRhcHBlZC5cIik7XG4gICAgY29uc3QgYnRuID0gYXJncy5vYmplY3QgYXMgdmlldy5WaWV3O1xuICAgIGJ0bi5iaW5kaW5nQ29udGV4dC5zZXQoXCJpc0VkaXRpbmdcIiwgdHJ1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblNhdmUoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJTYXZlIGl0ZW0gdGFwcGVkLlwiKTtcbiAgICBjb25zdCBidG4gPSBhcmdzLm9iamVjdCBhcyB2aWV3LlZpZXc7XG4gICAgYnRuLmJpbmRpbmdDb250ZXh0LnNldChcImlzRWRpdGluZ1wiLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNhbmNlbChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNhbmNlbCBpdGVtIHRhcHBlZC5cIik7XG4gICAgY29uc3QgYnRuID0gYXJncy5vYmplY3QgYXMgdmlldy5WaWV3O1xuICAgIGJ0bi5iaW5kaW5nQ29udGV4dC5zZXQoXCJpc0VkaXRpbmdcIiwgZmFsc2UpO1xufVxuIl19