"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
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
    // page.bindingContext = new TabviewModel();
}
exports.navigatingTo = navigatingTo;
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    // Get the event sender
    var page = args.object;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tsYXlvdXQtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YWNrbGF5b3V0LXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0VBSUU7O0FBS0Ysd0VBQXdFO0FBQ3hFLHNCQUE2QixJQUFlO0lBQ3hDOzs7O01BSUU7SUFDRixJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCOzs7Ozs7Ozs7TUFTRTtJQUNGLDRDQUE0QztBQUNoRCxDQUFDO0FBbkJELG9DQW1CQztBQUVELGtFQUFrRTtBQUNsRSxvQkFBMkIsSUFBZTtJQUN0Qyx1QkFBdUI7SUFDdkIsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUNqQyxDQUFDO0FBSEQsZ0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCBhIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGFuIFhNTCBmaWxlIGlzIGtub3duIGFzXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xubG9naWMsIGFuZCB0byBzZXQgdXAgeW91ciBwYWdl4oCZcyBkYXRhIGJpbmRpbmcuXG4qL1xuXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGluZ1RvXCIgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvKlxuICAgIFRoaXMgZ2V0cyBhIHJlZmVyZW5jZSB0aGlzIHBhZ2XigJlzIDxQYWdlPiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBcbiAgICAvKlxuICAgIEEgcGFnZeKAmXMgYmluZGluZ0NvbnRleHQgaXMgYW4gb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gcGVyZm9ybVxuICAgIGRhdGEgYmluZGluZyBiZXR3ZWVuIFhNTCBtYXJrdXAgYW5kIFR5cGVTY3JpcHQgY29kZS4gUHJvcGVydGllc1xuICAgIG9uIHRoZSBiaW5kaW5nQ29udGV4dCBjYW4gYmUgYWNjZXNzZWQgdXNpbmcgdGhlIHt7IH19IHN5bnRheCBpbiBYTUwuXG4gICAgSW4gdGhpcyBleGFtcGxlLCB0aGUge3sgbWVzc2FnZSB9fSBhbmQge3sgb25UYXAgfX0gYmluZGluZ3MgYXJlIHJlc29sdmVkXG4gICAgYWdhaW5zdCB0aGUgb2JqZWN0IHJldHVybmVkIGJ5IGNyZWF0ZVZpZXdNb2RlbCgpLlxuXG4gICAgWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IGRhdGEgYmluZGluZyBpbiBOYXRpdmVTY3JpcHQgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9jb3JlLWNvbmNlcHRzL2RhdGEtYmluZGluZy5cbiAgICAqL1xuICAgIC8vIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgVGFidmlld01vZGVsKCk7XG59XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJsb2FkZWRcIiBldmVudCBhdHRhY2hlZCBpbiBtYWluLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvLyBHZXQgdGhlIGV2ZW50IHNlbmRlclxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG59Il19