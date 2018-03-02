/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from "data/observable";
import * as dialogs from "ui/dialogs";
import { Page } from "ui/page";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    const page = args.object as Page;

}

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Add Grid to StackLayout
    const page = args.object as Page;
}

// Alert(Web browser style)
export function alertWebBrowserStyle(args) {
    dialogs.alert("Your message").then(() => {
        console.log("Dialog closed!");
    });
}

// Alert(Using an options object)
export function alertUsingAnOptionsObject(args) {
    dialogs.alert({
        message: "Your message",
        okButtonText: "Your button text",
        title: "Your title",
    }).then(() => {
        console.log("Dialog closed!");
    });
}

// Confirem(Web browser style)
export function confirmWebBrowserStyle(args) {
    dialogs.confirm("Your message").then((result) => {
        console.log("Dialog result: " + result);
    });
}

// Confirem(Using an options object)
export function confirmUsingAnOptionsObject(args) {
    dialogs.confirm({
        cancelButtonText: "Cancel text",
        message: "Your message",
        neutralButtonText: "Neutral text",
        okButtonText: "Your button text",
        title: "Your title",
    }).then((result) => {
        // result argument is boolean
        console.log("Dialog result: " + result);
    });
}

// Prompt(Web browser style)
export function promptWebBrowserStyle(args) {
    // Second argument is optional.
    dialogs.prompt("Your message", "Default text").then((r) => {
        console.log("Dialog result: " + r.result + ", text: " + r.text);
    });
}

// Prompt(Using an options object)
export function promptUsingAnOptionsObject(args) {
    // inputType property can be dialogs.inputType.password or dialogs.inputType.text.
    dialogs.prompt({
        cancelButtonText: "Cancel text",
        defaultText: "Default text",
        inputType: dialogs.inputType.password,
        message: "Your message",
        neutralButtonText: "Neutral text",
        okButtonText: "Your button text",
        title: "Your title",
    }).then((r) => {
        console.log("Dialog result: " + r.result + ", text: " + r.text);
    });
}

// Login(Web browser style)
export function loginWebBrowserStyle(args) {
    // User name and password arguments are optional.
    dialogs.login("Your message", "User name label text", "Password label text").then((r) => {
        console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
    });
}

// Login(Using an options object)
export function loginUsingAnOptionsObject(args) {
    dialogs.login({
        cancelButtonText: "Cancel button text",
        message: "Your message",
        neutralButtonText: "Neutral button text",
        okButtonText: "Your button text",
        password: "Password label text",
        title: "Your title",
        userName: "User name label text",
    }).then((r) => {
        console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
    });
}

// Action(Web browser style)
export function actionWebBrowserStyle(args) {
    dialogs.action("Your message", "Cancel button text", ["Option1", "Option2"]).then((result) => {
        console.log("Dialog result: " + result);
        if (result === "Options1") {
            // Do action1
        } else if (result === "Option2") {
            // Do action2
        }
    });
}

// Action(Using an options object)
export function actionUsingAnOptionsObject(args) {
    dialogs.action({
        actions: ["Option1", "Option2"],
        cancelButtonText: "Cancel text",
        message: "Your message",
    }).then((result) => {
        console.log("Dialog result: " + result);
        if (result === "Options1") {
            // Do action1
        } else if (result === "Option2") {
            // Do action2
        }
    });
}