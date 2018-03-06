import { Observable } from "data/observable";
// To import the "ui/frame" module:
import * as frames from "ui/frame";

export class MainModel extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange("message", value);
        }
    }

    public onTap() {
        this._counter--;
        this.updateMessage();
    }

    public onFrame() {
        // Navigate to page
        frames.topmost().navigate("views/detail/detail-page");
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = "Hoorraaay! You unlocked the NativeScript clicker achievement!";
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}
