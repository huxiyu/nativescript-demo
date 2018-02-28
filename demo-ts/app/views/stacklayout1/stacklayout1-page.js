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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tsYXlvdXQxLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFja2xheW91dDEtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7RUFJRTs7QUFLRix3RUFBd0U7QUFDeEUsc0JBQTZCLElBQWU7SUFDeEM7Ozs7TUFJRTtJQUNGLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFN0I7Ozs7Ozs7OztNQVNFO0lBQ0YsNENBQTRDO0FBQ2hELENBQUM7QUFuQkQsb0NBbUJDO0FBRUQsa0VBQWtFO0FBQ2xFLG9CQUEyQixJQUFlO0lBQ3RDLHVCQUF1QjtJQUN2QixJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ2pDLENBQUM7QUFIRCxnQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbiBOYXRpdmVTY3JpcHQsIGEgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYW4gWE1MIGZpbGUgaXMga25vd24gYXNcbmEgY29kZS1iZWhpbmQgZmlsZS4gVGhlIGNvZGUtYmVoaW5kIGlzIGEgZ3JlYXQgcGxhY2UgdG8gcGxhY2UgeW91ciB2aWV3XG5sb2dpYywgYW5kIHRvIHNldCB1cCB5b3VyIHBhZ2XigJlzIGRhdGEgYmluZGluZy5cbiovXG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJuYXZpZ2F0aW5nVG9cIiBldmVudCBhdHRhY2hlZCBpbiBtYWluLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8qXG4gICAgVGhpcyBnZXRzIGEgcmVmZXJlbmNlIHRoaXMgcGFnZeKAmXMgPFBhZ2U+IFVJIGNvbXBvbmVudC4gWW91IGNhblxuICAgIHZpZXcgdGhlIEFQSSByZWZlcmVuY2Ugb2YgdGhlIFBhZ2UgdG8gc2VlIHdoYXTigJlzIGF2YWlsYWJsZSBhdFxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FwaS1yZWZlcmVuY2UvY2xhc3Nlcy9fdWlfcGFnZV8ucGFnZS5odG1sXG4gICAgKi9cbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIFxuICAgIC8qXG4gICAgQSBwYWdl4oCZcyBiaW5kaW5nQ29udGV4dCBpcyBhbiBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBwZXJmb3JtXG4gICAgZGF0YSBiaW5kaW5nIGJldHdlZW4gWE1MIG1hcmt1cCBhbmQgVHlwZVNjcmlwdCBjb2RlLiBQcm9wZXJ0aWVzXG4gICAgb24gdGhlIGJpbmRpbmdDb250ZXh0IGNhbiBiZSBhY2Nlc3NlZCB1c2luZyB0aGUge3sgfX0gc3ludGF4IGluIFhNTC5cbiAgICBJbiB0aGlzIGV4YW1wbGUsIHRoZSB7eyBtZXNzYWdlIH19IGFuZCB7eyBvblRhcCB9fSBiaW5kaW5ncyBhcmUgcmVzb2x2ZWRcbiAgICBhZ2FpbnN0IHRoZSBvYmplY3QgcmV0dXJuZWQgYnkgY3JlYXRlVmlld01vZGVsKCkuXG5cbiAgICBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgZGF0YSBiaW5kaW5nIGluIE5hdGl2ZVNjcmlwdCBhdFxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2NvcmUtY29uY2VwdHMvZGF0YS1iaW5kaW5nLlxuICAgICovXG4gICAgLy8gcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBUYWJ2aWV3TW9kZWwoKTtcbn1cblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcImxvYWRlZFwiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8vIEdldCB0aGUgZXZlbnQgc2VuZGVyXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbn0iXX0=