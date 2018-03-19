import { EventData } from "data/observable";
import { Label } from "ui/label";
import { Page } from "ui/page";

export function onPageLoaded(args: EventData): void {
    console.log("pagemanagement2-page Loaded");
}

export function createPage(): Page {
    console.log("createPage");
    const label = new Label();
    label.text = "Hello, world! Create page via code.";
    const page = new Page();
    page.content = label;

    return page;
}