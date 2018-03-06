if (global.TNS_WEBPACK) {
    // registers tns-core-modules UI framework modules
    require("bundle-entry-points");
    // register application modules
    // This will register each `page` postfixed xml, css, js, ts, scss etc. in the app/ folder
    var context = require.context("~/", true, /(page|fragment)\.(xml|css|js|ts|scss|less|sass)$/);
    global.registerWebpackModules(context);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1bmRsZS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsRUFBRSxDQUFDLENBQUUsTUFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUIsa0RBQWtEO0lBQ2xELE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRS9CLCtCQUErQjtJQUMvQiwwRkFBMEY7SUFDMUYsSUFBTSxPQUFPLEdBQUksT0FBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLGtEQUFrRCxDQUFDLENBQUM7SUFDekcsTUFBTSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoKGdsb2JhbCBhcyBhbnkpLlROU19XRUJQQUNLKSB7XG4gICAgLy8gcmVnaXN0ZXJzIHRucy1jb3JlLW1vZHVsZXMgVUkgZnJhbWV3b3JrIG1vZHVsZXNcbiAgICByZXF1aXJlKFwiYnVuZGxlLWVudHJ5LXBvaW50c1wiKTtcblxuICAgIC8vIHJlZ2lzdGVyIGFwcGxpY2F0aW9uIG1vZHVsZXNcbiAgICAvLyBUaGlzIHdpbGwgcmVnaXN0ZXIgZWFjaCBgcGFnZWAgcG9zdGZpeGVkIHhtbCwgY3NzLCBqcywgdHMsIHNjc3MgZXRjLiBpbiB0aGUgYXBwLyBmb2xkZXJcbiAgICBjb25zdCBjb250ZXh0ID0gKHJlcXVpcmUgYXMgYW55KS5jb250ZXh0KFwifi9cIiwgdHJ1ZSwgLyhwYWdlfGZyYWdtZW50KVxcLih4bWx8Y3NzfGpzfHRzfHNjc3N8bGVzc3xzYXNzKSQvKTtcbiAgICBnbG9iYWwucmVnaXN0ZXJXZWJwYWNrTW9kdWxlcyhjb250ZXh0KTtcbn1cbiJdfQ==