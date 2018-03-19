import { EventData } from "data/observable";
import { Page } from "ui/page";

export function onPageLoaded(args: EventData): void {
    // Get the event sender
    const page: Page = args.object as Page;
}
