import { CreateViewEventData } from "ui/placeholder";

export function creatingView(args: CreateViewEventData) {
    console.log("creatingView");
    let nativeView = new android.widget.TextView(args.context) as any;
    nativeView.setSingleLine(true);
    nativeView.setEllipsize(android.text.TextUtils.TruncateAt.END);
    nativeView.setText("Native");
    args.view = nativeView;
}