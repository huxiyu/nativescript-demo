"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs = require("ui/dialogs");
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
    // Add Grid to StackLayout
    var page = args.object;
}
exports.pageLoaded = pageLoaded;
// Alert(Web browser style)
function alertWebBrowserStyle(args) {
    dialogs.alert("Your message").then(function () {
        console.log("Dialog closed!");
    });
}
exports.alertWebBrowserStyle = alertWebBrowserStyle;
// Alert(Using an options object)
function alertUsingAnOptionsObject(args) {
    dialogs.alert({
        title: "Your title",
        message: "Your message",
        okButtonText: "Your button text"
    }).then(function () {
        console.log("Dialog closed!");
    });
}
exports.alertUsingAnOptionsObject = alertUsingAnOptionsObject;
// Confirem(Web browser style)
function confirmWebBrowserStyle(args) {
    dialogs.confirm("Your message").then(function (result) {
        console.log("Dialog result: " + result);
    });
}
exports.confirmWebBrowserStyle = confirmWebBrowserStyle;
// Confirem(Using an options object)
function confirmUsingAnOptionsObject(args) {
    dialogs.confirm({
        title: "Your title",
        message: "Your message",
        okButtonText: "Your button text",
        cancelButtonText: "Cancel text",
        neutralButtonText: "Neutral text"
    }).then(function (result) {
        // result argument is boolean
        console.log("Dialog result: " + result);
    });
}
exports.confirmUsingAnOptionsObject = confirmUsingAnOptionsObject;
// Prompt(Web browser style)
function promptWebBrowserStyle(args) {
    // Second argument is optional.
    dialogs.prompt("Your message", "Default text").then(function (r) {
        console.log("Dialog result: " + r.result + ", text: " + r.text);
    });
}
exports.promptWebBrowserStyle = promptWebBrowserStyle;
// Prompt(Using an options object)
function promptUsingAnOptionsObject(args) {
    // inputType property can be dialogs.inputType.password or dialogs.inputType.text.
    dialogs.prompt({
        title: "Your title",
        message: "Your message",
        okButtonText: "Your button text",
        cancelButtonText: "Cancel text",
        neutralButtonText: "Neutral text",
        defaultText: "Default text",
        inputType: dialogs.inputType.password
    }).then(function (r) {
        console.log("Dialog result: " + r.result + ", text: " + r.text);
    });
}
exports.promptUsingAnOptionsObject = promptUsingAnOptionsObject;
// Login(Web browser style)
function loginWebBrowserStyle(args) {
    // User name and password arguments are optional.
    dialogs.login("Your message", "User name label text", "Password label text").then(function (r) {
        console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
    });
}
exports.loginWebBrowserStyle = loginWebBrowserStyle;
// Login(Using an options object)
function loginUsingAnOptionsObject(args) {
    dialogs.login({
        title: "Your title",
        message: "Your message",
        okButtonText: "Your button text",
        cancelButtonText: "Cancel button text",
        neutralButtonText: "Neutral button text",
        userName: "User name label text",
        password: "Password label text"
    }).then(function (r) {
        console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
    });
}
exports.loginUsingAnOptionsObject = loginUsingAnOptionsObject;
// Action(Web browser style)
function actionWebBrowserStyle(args) {
    dialogs.action("Your message", "Cancel button text", ["Option1", "Option2"]).then(function (result) {
        console.log("Dialog result: " + result);
        if (result == "Options1") {
            //Do action1
        }
        else if (result == "Option2") {
            //Do action2
        }
    });
}
exports.actionWebBrowserStyle = actionWebBrowserStyle;
// Action(Using an options object)
function actionUsingAnOptionsObject(args) {
    dialogs.action({
        message: "Your message",
        cancelButtonText: "Cancel text",
        actions: ["Option1", "Option2"]
    }).then(function (result) {
        console.log("Dialog result: " + result);
        if (result == "Options1") {
            //Do action1
        }
        else if (result == "Option2") {
            //Do action2
        }
    });
}
exports.actionUsingAnOptionsObject = actionUsingAnOptionsObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nczEtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpYWxvZ3MxLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0VBSUU7O0FBSUYsb0NBQXNDO0FBRXRDLHdFQUF3RTtBQUN4RSxzQkFBNkIsSUFBZTtJQUN4Qzs7OztNQUlFO0lBQ0YsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUVuQyxDQUFDO0FBUkQsb0NBUUM7QUFFRCxrRUFBa0U7QUFDbEUsb0JBQTJCLElBQWU7SUFDdEMsMEJBQTBCO0lBQzFCLElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7QUFFbkMsQ0FBQztBQUpELGdDQUlDO0FBRUQsMkJBQTJCO0FBQzNCLDhCQUFxQyxJQUFJO0lBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFKRCxvREFJQztBQUVELGlDQUFpQztBQUNqQyxtQ0FBMEMsSUFBSTtJQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ1YsS0FBSyxFQUFFLFlBQVk7UUFDbkIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsWUFBWSxFQUFFLGtCQUFrQjtLQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVJELDhEQVFDO0FBRUQsOEJBQThCO0FBQzlCLGdDQUF1QyxJQUFJO0lBQ3ZDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUMs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RSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07UUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN2QixZQUFZO1FBQ2hCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsWUFBWTtRQUNoQixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBVEQsc0RBU0M7QUFFRCxrQ0FBa0M7QUFDbEMsb0NBQTJDLElBQUk7SUFDM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNYLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLGdCQUFnQixFQUFFLGFBQWE7UUFDL0IsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQztLQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsWUFBWTtRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdCLFlBQVk7UUFDaEIsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWJELGdFQWFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkluIE5hdGl2ZVNjcmlwdCwgYSBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhbiBYTUwgZmlsZSBpcyBrbm93biBhc1xuYSBjb2RlLWJlaGluZCBmaWxlLiBUaGUgY29kZS1iZWhpbmQgaXMgYSBncmVhdCBwbGFjZSB0byBwbGFjZSB5b3VyIHZpZXdcbmxvZ2ljLCBhbmQgdG8gc2V0IHVwIHlvdXIgcGFnZeKAmXMgZGF0YSBiaW5kaW5nLlxuKi9cblxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJuYXZpZ2F0aW5nVG9cIiBldmVudCBhdHRhY2hlZCBpbiBtYWluLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8qXG4gICAgVGhpcyBnZXRzIGEgcmVmZXJlbmNlIHRoaXMgcGFnZeKAmXMgPFBhZ2U+IFVJIGNvbXBvbmVudC4gWW91IGNhblxuICAgIHZpZXcgdGhlIEFQSSByZWZlcmVuY2Ugb2YgdGhlIFBhZ2UgdG8gc2VlIHdoYXTigJlzIGF2YWlsYWJsZSBhdFxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FwaS1yZWZlcmVuY2UvY2xhc3Nlcy9fdWlfcGFnZV8ucGFnZS5odG1sXG4gICAgKi9cbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG5cbn1cblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcImxvYWRlZFwiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8vIEFkZCBHcmlkIHRvIFN0YWNrTGF5b3V0XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuXG59XG5cbi8vIEFsZXJ0KFdlYiBicm93c2VyIHN0eWxlKVxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0V2ViQnJvd3NlclN0eWxlKGFyZ3MpIHtcbiAgICBkaWFsb2dzLmFsZXJ0KFwiWW91ciBtZXNzYWdlXCIpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgIH0pO1xufVxuXG4vLyBBbGVydChVc2luZyBhbiBvcHRpb25zIG9iamVjdClcbmV4cG9ydCBmdW5jdGlvbiBhbGVydFVzaW5nQW5PcHRpb25zT2JqZWN0KGFyZ3MpIHtcbiAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgdGl0bGU6IFwiWW91ciB0aXRsZVwiLFxuICAgICAgICBtZXNzYWdlOiBcIllvdXIgbWVzc2FnZVwiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiWW91ciBidXR0b24gdGV4dFwiXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgfSk7XG59XG5cbi8vIENvbmZpcmVtKFdlYiBicm93c2VyIHN0eWxlKVxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1XZWJCcm93c2VyU3R5bGUoYXJncykge1xuICAgIGRpYWxvZ3MuY29uZmlybShcIllvdXIgbWVzc2FnZVwiKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByZXN1bHQpO1xuICAgIH0pO1xufVxuXG4vLyBDb25maXJlbShVc2luZyBhbiBvcHRpb25zIG9iamVjdClcbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtVXNpbmdBbk9wdGlvbnNPYmplY3QoYXJncykge1xuICAgIGRpYWxvZ3MuY29uZmlybSh7XG4gICAgICAgIHRpdGxlOiBcIllvdXIgdGl0bGVcIixcbiAgICAgICAgbWVzc2FnZTogXCJZb3VyIG1lc3NhZ2VcIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIllvdXIgYnV0dG9uIHRleHRcIixcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWwgdGV4dFwiLFxuICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsIHRleHRcIlxuICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgfSk7XG59XG5cbi8vIFByb21wdChXZWIgYnJvd3NlciBzdHlsZSlcbmV4cG9ydCBmdW5jdGlvbiBwcm9tcHRXZWJCcm93c2VyU3R5bGUoYXJncykge1xuICAgIC8vIFNlY29uZCBhcmd1bWVudCBpcyBvcHRpb25hbC5cbiAgICBkaWFsb2dzLnByb21wdChcIllvdXIgbWVzc2FnZVwiLCBcIkRlZmF1bHQgdGV4dFwiKS50aGVuKHIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdGV4dDogXCIgKyByLnRleHQpO1xuICAgIH0pO1xufVxuXG4vLyBQcm9tcHQoVXNpbmcgYW4gb3B0aW9ucyBvYmplY3QpXG5leHBvcnQgZnVuY3Rpb24gcHJvbXB0VXNpbmdBbk9wdGlvbnNPYmplY3QoYXJncykge1xuICAgIC8vIGlucHV0VHlwZSBwcm9wZXJ0eSBjYW4gYmUgZGlhbG9ncy5pbnB1dFR5cGUucGFzc3dvcmQgb3IgZGlhbG9ncy5pbnB1dFR5cGUudGV4dC5cbiAgICBkaWFsb2dzLnByb21wdCh7XG4gICAgICAgIHRpdGxlOiBcIllvdXIgdGl0bGVcIixcbiAgICAgICAgbWVzc2FnZTogXCJZb3VyIG1lc3NhZ2VcIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIllvdXIgYnV0dG9uIHRleHRcIixcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWwgdGV4dFwiLFxuICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsIHRleHRcIixcbiAgICAgICAgZGVmYXVsdFRleHQ6IFwiRGVmYXVsdCB0ZXh0XCIsXG4gICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUucGFzc3dvcmRcbiAgICB9KS50aGVuKHIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdGV4dDogXCIgKyByLnRleHQpO1xuICAgIH0pO1xufVxuXG4vLyBMb2dpbihXZWIgYnJvd3NlciBzdHlsZSlcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbldlYkJyb3dzZXJTdHlsZShhcmdzKSB7XG4gICAgLy8gVXNlciBuYW1lIGFuZCBwYXNzd29yZCBhcmd1bWVudHMgYXJlIG9wdGlvbmFsLlxuICAgIGRpYWxvZ3MubG9naW4oXCJZb3VyIG1lc3NhZ2VcIiwgXCJVc2VyIG5hbWUgbGFiZWwgdGV4dFwiLCBcIlBhc3N3b3JkIGxhYmVsIHRleHRcIikudGhlbihyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHVzZXI6IFwiICsgci51c2VyTmFtZSArIFwiLCBwd2Q6IFwiICsgci5wYXNzd29yZCk7XG4gICAgfSk7XG59XG5cbi8vIExvZ2luKFVzaW5nIGFuIG9wdGlvbnMgb2JqZWN0KVxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luVXNpbmdBbk9wdGlvbnNPYmplY3QoYXJncykge1xuICAgIGRpYWxvZ3MubG9naW4oe1xuICAgICAgICB0aXRsZTogXCJZb3VyIHRpdGxlXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiWW91ciBtZXNzYWdlXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJZb3VyIGJ1dHRvbiB0ZXh0XCIsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsIGJ1dHRvbiB0ZXh0XCIsXG4gICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIk5ldXRyYWwgYnV0dG9uIHRleHRcIixcbiAgICAgICAgdXNlck5hbWU6IFwiVXNlciBuYW1lIGxhYmVsIHRleHRcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiUGFzc3dvcmQgbGFiZWwgdGV4dFwiXG4gICAgfSkudGhlbihyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHVzZXI6IFwiICsgci51c2VyTmFtZSArIFwiLCBwd2Q6IFwiICsgci5wYXNzd29yZCk7XG4gICAgfSk7XG59XG5cbi8vIEFjdGlvbihXZWIgYnJvd3NlciBzdHlsZSlcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25XZWJCcm93c2VyU3R5bGUoYXJncykge1xuICAgIGRpYWxvZ3MuYWN0aW9uKFwiWW91ciBtZXNzYWdlXCIsIFwiQ2FuY2VsIGJ1dHRvbiB0ZXh0XCIsIFtcIk9wdGlvbjFcIiwgXCJPcHRpb24yXCJdKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0ID09IFwiT3B0aW9uczFcIikge1xuICAgICAgICAgICAgLy9EbyBhY3Rpb24xXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IFwiT3B0aW9uMlwiKSB7XG4gICAgICAgICAgICAvL0RvIGFjdGlvbjJcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBBY3Rpb24oVXNpbmcgYW4gb3B0aW9ucyBvYmplY3QpXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uVXNpbmdBbk9wdGlvbnNPYmplY3QoYXJncykge1xuICAgIGRpYWxvZ3MuYWN0aW9uKHtcbiAgICAgICAgbWVzc2FnZTogXCJZb3VyIG1lc3NhZ2VcIixcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWwgdGV4dFwiLFxuICAgICAgICBhY3Rpb25zOiBbXCJPcHRpb24xXCIsIFwiT3B0aW9uMlwiXVxuICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHQgPT0gXCJPcHRpb25zMVwiKSB7XG4gICAgICAgICAgICAvL0RvIGFjdGlvbjFcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gXCJPcHRpb24yXCIpIHtcbiAgICAgICAgICAgIC8vRG8gYWN0aW9uMlxuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuXG4iXX0=