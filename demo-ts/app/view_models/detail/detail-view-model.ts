import { Observable } from 'data/observable';
// To import the "ui/frame" module:
import * as frames from "ui/frame";

export class DetailModel extends Observable {

    public onFrame() {
        // Navigate to page
        //frames.topmost().navigate("views/main/main-page");
        // frames goBack
        frames.goBack();
    }

}
