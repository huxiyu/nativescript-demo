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
        message: "Your message",
        okButtonText: "Your button text",
        title: "Your title",
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
        cancelButtonText: "Cancel text",
        message: "Your message",
        neutralButtonText: "Neutral text",
        okButtonText: "Your button text",
        title: "Your title",
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
        cancelButtonText: "Cancel text",
        defaultText: "Default text",
        inputType: dialogs.inputType.password,
        message: "Your message",
        neutralButtonText: "Neutral text",
        okButtonText: "Your button text",
        title: "Your title",
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
        cancelButtonText: "Cancel button text",
        message: "Your message",
        neutralButtonText: "Neutral button text",
        okButtonText: "Your button text",
        password: "Password label text",
        title: "Your title",
        userName: "User name label text",
    }).then(function (r) {
        console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
    });
}
exports.loginUsingAnOptionsObject = loginUsingAnOptionsObject;
// Action(Web browser style)
function actionWebBrowserStyle(args) {
    dialogs.action("Your message", "Cancel button text", ["Option1", "Option2"]).then(function (result) {
        console.log("Dialog result: " + result);
        if (result === "Options1") {
            // Do action1
        }
        else if (result === "Option2") {
            // Do action2
        }
    });
}
exports.actionWebBrowserStyle = actionWebBrowserStyle;
// Action(Using an options object)
function actionUsingAnOptionsObject(args) {
    dialogs.action({
        actions: ["Option1", "Option2"],
        cancelButtonText: "Cancel text",
        message: "Your message",
    }).then(function (result) {
        console.log("Dialog result: " + result);
        if (result === "Options1") {
            // Do action1
        }
        else if (result === "Option2") {
            // Do action2
        }
    });
}
exports.actionUsingAnOptionsObject = actionUsingAnOptionsObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nczEtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpYWxvZ3MxLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0VBSUU7O0FBR0Ysb0NBQXNDO0FBR3RDLHdFQUF3RTtBQUN4RSxzQkFBNkIsSUFBZTtJQUN4Qzs7OztNQUlFO0lBQ0YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQWMsQ0FBQztBQUVyQyxDQUFDO0FBUkQsb0NBUUM7QUFFRCxrRUFBa0U7QUFDbEUsb0JBQTJCLElBQWU7SUFDdEMsMEJBQTBCO0lBQzFCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFjLENBQUM7QUFDckMsQ0FBQztBQUhELGdDQUdDO0FBRUQsMkJBQTJCO0FBQzNCLDhCQUFxQyxJQUFJO0lBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFKRCxvREFJQztBQUVELGlDQUFpQztBQUNqQyxtQ0FBMEMsSUFBSTtJQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ1YsT0FBTyxFQUFFLGNBQWM7UUFDdkIsWUFBWSxFQUFFLGtCQUFrQjtRQUNoQyxLQUFLLEVBQUUsWUFBWTtLQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVJELDhEQVFDO0FBRUQsOEJBQThCO0FBQzlCLGdDQUF1QyxJQUFJO0lBQ3ZDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUMs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RSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07UUFDckYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4QixhQUFhO1FBQ2pCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsYUFBYTtRQUNqQixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBVEQsc0RBU0M7QUFFRCxrQ0FBa0M7QUFDbEMsb0NBQTJDLElBQUk7SUFDM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7UUFDL0IsZ0JBQWdCLEVBQUUsYUFBYTtRQUMvQixPQUFPLEVBQUUsY0FBYztLQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDeEIsYUFBYTtRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLGFBQWE7UUFDakIsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWJELGdFQWFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkluIE5hdGl2ZVNjcmlwdCwgYSBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhbiBYTUwgZmlsZSBpcyBrbm93biBhc1xuYSBjb2RlLWJlaGluZCBmaWxlLiBUaGUgY29kZS1iZWhpbmQgaXMgYSBncmVhdCBwbGFjZSB0byBwbGFjZSB5b3VyIHZpZXdcbmxvZ2ljLCBhbmQgdG8gc2V0IHVwIHlvdXIgcGFnZeKAmXMgZGF0YSBiaW5kaW5nLlxuKi9cblxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJuYXZpZ2F0aW5nVG9cIiBldmVudCBhdHRhY2hlZCBpbiBtYWluLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8qXG4gICAgVGhpcyBnZXRzIGEgcmVmZXJlbmNlIHRoaXMgcGFnZeKAmXMgPFBhZ2U+IFVJIGNvbXBvbmVudC4gWW91IGNhblxuICAgIHZpZXcgdGhlIEFQSSByZWZlcmVuY2Ugb2YgdGhlIFBhZ2UgdG8gc2VlIHdoYXTigJlzIGF2YWlsYWJsZSBhdFxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FwaS1yZWZlcmVuY2UvY2xhc3Nlcy9fdWlfcGFnZV8ucGFnZS5odG1sXG4gICAgKi9cbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QgYXMgUGFnZTtcblxufVxuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibG9hZGVkXCIgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgLy8gQWRkIEdyaWQgdG8gU3RhY2tMYXlvdXRcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QgYXMgUGFnZTtcbn1cblxuLy8gQWxlcnQoV2ViIGJyb3dzZXIgc3R5bGUpXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRXZWJCcm93c2VyU3R5bGUoYXJncykge1xuICAgIGRpYWxvZ3MuYWxlcnQoXCJZb3VyIG1lc3NhZ2VcIikudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgfSk7XG59XG5cbi8vIEFsZXJ0KFVzaW5nIGFuIG9wdGlvbnMgb2JqZWN0KVxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0VXNpbmdBbk9wdGlvbnNPYmplY3QoYXJncykge1xuICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICBtZXNzYWdlOiBcIllvdXIgbWVzc2FnZVwiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiWW91ciBidXR0b24gdGV4dFwiLFxuICAgICAgICB0aXRsZTogXCJZb3VyIHRpdGxlXCIsXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgfSk7XG59XG5cbi8vIENvbmZpcmVtKFdlYiBicm93c2VyIHN0eWxlKVxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1XZWJCcm93c2VyU3R5bGUoYXJncykge1xuICAgIGRpYWxvZ3MuY29uZmlybShcIllvdXIgbWVzc2FnZVwiKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgfSk7XG59XG5cbi8vIENvbmZpcmVtKFVzaW5nIGFuIG9wdGlvbnMgb2JqZWN0KVxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1Vc2luZ0FuT3B0aW9uc09iamVjdChhcmdzKSB7XG4gICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWwgdGV4dFwiLFxuICAgICAgICBtZXNzYWdlOiBcIllvdXIgbWVzc2FnZVwiLFxuICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsIHRleHRcIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIllvdXIgYnV0dG9uIHRleHRcIixcbiAgICAgICAgdGl0bGU6IFwiWW91ciB0aXRsZVwiLFxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxuICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcbiAgICB9KTtcbn1cblxuLy8gUHJvbXB0KFdlYiBicm93c2VyIHN0eWxlKVxuZXhwb3J0IGZ1bmN0aW9uIHByb21wdFdlYkJyb3dzZXJTdHlsZShhcmdzKSB7XG4gICAgLy8gU2Vjb25kIGFyZ3VtZW50IGlzIG9wdGlvbmFsLlxuICAgIGRpYWxvZ3MucHJvbXB0KFwiWW91ciBtZXNzYWdlXCIsIFwiRGVmYXVsdCB0ZXh0XCIpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHRleHQ6IFwiICsgci50ZXh0KTtcbiAgICB9KTtcbn1cblxuLy8gUHJvbXB0KFVzaW5nIGFuIG9wdGlvbnMgb2JqZWN0KVxuZXhwb3J0IGZ1bmN0aW9uIHByb21wdFVzaW5nQW5PcHRpb25zT2JqZWN0KGFyZ3MpIHtcbiAgICAvLyBpbnB1dFR5cGUgcHJvcGVydHkgY2FuIGJlIGRpYWxvZ3MuaW5wdXRUeXBlLnBhc3N3b3JkIG9yIGRpYWxvZ3MuaW5wdXRUeXBlLnRleHQuXG4gICAgZGlhbG9ncy5wcm9tcHQoe1xuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbCB0ZXh0XCIsXG4gICAgICAgIGRlZmF1bHRUZXh0OiBcIkRlZmF1bHQgdGV4dFwiLFxuICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnBhc3N3b3JkLFxuICAgICAgICBtZXNzYWdlOiBcIllvdXIgbWVzc2FnZVwiLFxuICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsIHRleHRcIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIllvdXIgYnV0dG9uIHRleHRcIixcbiAgICAgICAgdGl0bGU6IFwiWW91ciB0aXRsZVwiLFxuICAgIH0pLnRoZW4oKHIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHRleHQ6IFwiICsgci50ZXh0KTtcbiAgICB9KTtcbn1cblxuLy8gTG9naW4oV2ViIGJyb3dzZXIgc3R5bGUpXG5leHBvcnQgZnVuY3Rpb24gbG9naW5XZWJCcm93c2VyU3R5bGUoYXJncykge1xuICAgIC8vIFVzZXIgbmFtZSBhbmQgcGFzc3dvcmQgYXJndW1lbnRzIGFyZSBvcHRpb25hbC5cbiAgICBkaWFsb2dzLmxvZ2luKFwiWW91ciBtZXNzYWdlXCIsIFwiVXNlciBuYW1lIGxhYmVsIHRleHRcIiwgXCJQYXNzd29yZCBsYWJlbCB0ZXh0XCIpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHVzZXI6IFwiICsgci51c2VyTmFtZSArIFwiLCBwd2Q6IFwiICsgci5wYXNzd29yZCk7XG4gICAgfSk7XG59XG5cbi8vIExvZ2luKFVzaW5nIGFuIG9wdGlvbnMgb2JqZWN0KVxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luVXNpbmdBbk9wdGlvbnNPYmplY3QoYXJncykge1xuICAgIGRpYWxvZ3MubG9naW4oe1xuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbCBidXR0b24gdGV4dFwiLFxuICAgICAgICBtZXNzYWdlOiBcIllvdXIgbWVzc2FnZVwiLFxuICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsIGJ1dHRvbiB0ZXh0XCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJZb3VyIGJ1dHRvbiB0ZXh0XCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlBhc3N3b3JkIGxhYmVsIHRleHRcIixcbiAgICAgICAgdGl0bGU6IFwiWW91ciB0aXRsZVwiLFxuICAgICAgICB1c2VyTmFtZTogXCJVc2VyIG5hbWUgbGFiZWwgdGV4dFwiLFxuICAgIH0pLnRoZW4oKHIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHVzZXI6IFwiICsgci51c2VyTmFtZSArIFwiLCBwd2Q6IFwiICsgci5wYXNzd29yZCk7XG4gICAgfSk7XG59XG5cbi8vIEFjdGlvbihXZWIgYnJvd3NlciBzdHlsZSlcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25XZWJCcm93c2VyU3R5bGUoYXJncykge1xuICAgIGRpYWxvZ3MuYWN0aW9uKFwiWW91ciBtZXNzYWdlXCIsIFwiQ2FuY2VsIGJ1dHRvbiB0ZXh0XCIsIFtcIk9wdGlvbjFcIiwgXCJPcHRpb24yXCJdKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IFwiT3B0aW9uczFcIikge1xuICAgICAgICAgICAgLy8gRG8gYWN0aW9uMVxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJPcHRpb24yXCIpIHtcbiAgICAgICAgICAgIC8vIERvIGFjdGlvbjJcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBBY3Rpb24oVXNpbmcgYW4gb3B0aW9ucyBvYmplY3QpXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uVXNpbmdBbk9wdGlvbnNPYmplY3QoYXJncykge1xuICAgIGRpYWxvZ3MuYWN0aW9uKHtcbiAgICAgICAgYWN0aW9uczogW1wiT3B0aW9uMVwiLCBcIk9wdGlvbjJcIl0sXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsIHRleHRcIixcbiAgICAgICAgbWVzc2FnZTogXCJZb3VyIG1lc3NhZ2VcIixcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IFwiT3B0aW9uczFcIikge1xuICAgICAgICAgICAgLy8gRG8gYWN0aW9uMVxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJPcHRpb24yXCIpIHtcbiAgICAgICAgICAgIC8vIERvIGFjdGlvbjJcbiAgICAgICAgfVxuICAgIH0pO1xufSJdfQ==