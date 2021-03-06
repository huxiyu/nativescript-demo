"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var frames = require("ui/frame");
var main_view_model_1 = require("../../models/main/main-view-model");
// To import the "ui/frame" module:
var context;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    console.log("navigatingTo main-page");
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    // page.bindingContext = new MainModel();
    if (!context) {
        context = new main_view_model_1.MainModel();
        console.log("初始化 context");
        page.bindingContext = context;
    }
}
exports.navigatingTo = navigatingTo;
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    // Get the event sender
    var page = args.object;
    console.log("pageLoaded main-page");
}
exports.pageLoaded = pageLoaded;
function buttonTap(args) {
    context.onTap();
}
exports.buttonTap = buttonTap;
function frameButtonTap(args) {
    // Get the event sender
    console.log("frameButtonTap");
    var dataItem = args.object;
    console.log("framename: " + dataItem.framename);
    // console.log(" dataItem: " + JSON.stringify(dataItem));
    // Navigate to page
    frames.topmost().navigate("views/" + dataItem.framename + "/" + dataItem.framename + "-page");
}
exports.frameButtonTap = frameButtonTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUdGLGlDQUFtQztBQUluQyxxRUFBOEQ7QUFDOUQsbUNBQW1DO0FBRW5DLElBQUksT0FBTyxDQUFDO0FBRVosd0VBQXdFO0FBQ3hFLHNCQUE2QixJQUFlO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUV0Qzs7OztNQUlFO0lBQ0YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQWMsQ0FBQztJQUVqQzs7Ozs7Ozs7O01BU0U7SUFDRix5Q0FBeUM7SUFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ1gsT0FBTyxHQUFHLElBQUksMkJBQVMsRUFBRSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFDbEMsQ0FBQztBQUNMLENBQUM7QUExQkQsb0NBMEJDO0FBRUQsa0VBQWtFO0FBQ2xFLG9CQUEyQixJQUFlO0lBQ3RDLHVCQUF1QjtJQUN2QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBYyxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBSkQsZ0NBSUM7QUFFRCxtQkFBMEIsSUFBc0I7SUFDNUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BCLENBQUM7QUFGRCw4QkFFQztBQUVELHdCQUErQixJQUFJO0lBQy9CLHVCQUF1QjtJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQseURBQXlEO0lBRXpELG1CQUFtQjtJQUNuQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQ2xHLENBQUM7QUFURCx3Q0FTQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbiBOYXRpdmVTY3JpcHQsIGEgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYW4gWE1MIGZpbGUgaXMga25vd24gYXNcbmEgY29kZS1iZWhpbmQgZmlsZS4gVGhlIGNvZGUtYmVoaW5kIGlzIGEgZ3JlYXQgcGxhY2UgdG8gcGxhY2UgeW91ciB2aWV3XG5sb2dpYywgYW5kIHRvIHNldCB1cCB5b3VyIHBhZ2XigJlzIGRhdGEgYmluZGluZy5cbiovXG5cbmltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCAqIGFzIGZyYW1lcyBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbi8vIGltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgTWFpbk1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9tYWluL21haW4tdmlldy1tb2RlbFwiO1xuLy8gVG8gaW1wb3J0IHRoZSBcInVpL2ZyYW1lXCIgbW9kdWxlOlxuXG5sZXQgY29udGV4dDtcblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcIm5hdmlnYXRpbmdUb1wiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJuYXZpZ2F0aW5nVG8gbWFpbi1wYWdlXCIpO1xuXG4gICAgLypcbiAgICBUaGlzIGdldHMgYSByZWZlcmVuY2UgdGhpcyBwYWdl4oCZcyA8UGFnZT4gVUkgY29tcG9uZW50LiBZb3UgY2FuXG4gICAgdmlldyB0aGUgQVBJIHJlZmVyZW5jZSBvZiB0aGUgUGFnZSB0byBzZWUgd2hhdOKAmXMgYXZhaWxhYmxlIGF0XG4gICAgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYXBpLXJlZmVyZW5jZS9jbGFzc2VzL191aV9wYWdlXy5wYWdlLmh0bWxcbiAgICAqL1xuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdCBhcyBQYWdlO1xuXG4gICAgLypcbiAgICBBIHBhZ2XigJlzIGJpbmRpbmdDb250ZXh0IGlzIGFuIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHBlcmZvcm1cbiAgICBkYXRhIGJpbmRpbmcgYmV0d2VlbiBYTUwgbWFya3VwIGFuZCBUeXBlU2NyaXB0IGNvZGUuIFByb3BlcnRpZXNcbiAgICBvbiB0aGUgYmluZGluZ0NvbnRleHQgY2FuIGJlIGFjY2Vzc2VkIHVzaW5nIHRoZSB7eyB9fSBzeW50YXggaW4gWE1MLlxuICAgIEluIHRoaXMgZXhhbXBsZSwgdGhlIHt7IG1lc3NhZ2UgfX0gYW5kIHt7IG9uVGFwIH19IGJpbmRpbmdzIGFyZSByZXNvbHZlZFxuICAgIGFnYWluc3QgdGhlIG9iamVjdCByZXR1cm5lZCBieSBjcmVhdGVWaWV3TW9kZWwoKS5cblxuICAgIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBkYXRhIGJpbmRpbmcgaW4gTmF0aXZlU2NyaXB0IGF0XG4gICAgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvY29yZS1jb25jZXB0cy9kYXRhLWJpbmRpbmcuXG4gICAgKi9cbiAgICAvLyBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IE1haW5Nb2RlbCgpO1xuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IE1haW5Nb2RlbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWIneWni+WMliBjb250ZXh0XCIpO1xuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG59XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJsb2FkZWRcIiBldmVudCBhdHRhY2hlZCBpbiBtYWluLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvLyBHZXQgdGhlIGV2ZW50IHNlbmRlclxuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdCBhcyBQYWdlO1xuICAgIGNvbnNvbGUubG9nKFwicGFnZUxvYWRlZCBtYWluLXBhZ2VcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidXR0b25UYXAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIGNvbnRleHQub25UYXAoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lQnV0dG9uVGFwKGFyZ3MpIHtcbiAgICAvLyBHZXQgdGhlIGV2ZW50IHNlbmRlclxuICAgIGNvbnNvbGUubG9nKFwiZnJhbWVCdXR0b25UYXBcIik7XG4gICAgY29uc3QgZGF0YUl0ZW0gPSBhcmdzLm9iamVjdDtcbiAgICBjb25zb2xlLmxvZyhcImZyYW1lbmFtZTogXCIgKyBkYXRhSXRlbS5mcmFtZW5hbWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiIGRhdGFJdGVtOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGFJdGVtKSk7XG5cbiAgICAvLyBOYXZpZ2F0ZSB0byBwYWdlXG4gICAgZnJhbWVzLnRvcG1vc3QoKS5uYXZpZ2F0ZShcInZpZXdzL1wiICsgZGF0YUl0ZW0uZnJhbWVuYW1lICsgXCIvXCIgKyBkYXRhSXRlbS5mcmFtZW5hbWUgKyBcIi1wYWdlXCIpO1xufSJdfQ==