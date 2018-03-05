import { CreateViewEventData } from "ui/placeholder";

export function creatingView(args: CreateViewEventData) {
    const coder = new NSCoder();
    const nativeView = new UILabel({ coder });
    nativeView.text = "Native";
    args.view = nativeView;
}