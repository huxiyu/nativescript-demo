"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    // Add Grid to StackLayout
    var page = args.object;
    var viewModel = new observable_1.Observable();
    var glyphs = new Array();
    var charCode = 0xe903;
    for (; charCode <= 0xeaea; charCode++) {
        var glyph = new observable_1.Observable();
        glyph.set("icon", String.fromCharCode(charCode));
        glyph.set("code", charCode.toString(16));
        glyphs.push(glyph);
    }
    viewModel.set("glyphs", glyphs);
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbmZvbnRzMS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaWNvbmZvbnRzMS1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUVGLDhDQUF3RDtBQUd4RCxrRUFBa0U7QUFDbEUsb0JBQTJCLElBQWU7SUFDdEMsMEJBQTBCO0lBQzFCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFjLENBQUM7SUFDakMsSUFBTSxTQUFTLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFDbkMsSUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQWMsQ0FBQztJQUN2QyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDdEIsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLElBQUksTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUM7UUFDcEMsSUFBTSxLQUFLLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDL0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pELEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztBQUNwQyxDQUFDO0FBZEQsZ0NBY0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCBhIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGFuIFhNTCBmaWxlIGlzIGtub3duIGFzXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xubG9naWMsIGFuZCB0byBzZXQgdXAgeW91ciBwYWdl4oCZcyBkYXRhIGJpbmRpbmcuXG4qL1xuXG5pbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcImxvYWRlZFwiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8vIEFkZCBHcmlkIHRvIFN0YWNrTGF5b3V0XG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0IGFzIFBhZ2U7XG4gICAgY29uc3Qgdmlld01vZGVsID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICBjb25zdCBnbHlwaHMgPSBuZXcgQXJyYXk8T2JzZXJ2YWJsZT4oKTtcbiAgICBsZXQgY2hhckNvZGUgPSAweGU5MDM7XG4gICAgZm9yICg7IGNoYXJDb2RlIDw9IDB4ZWFlYTsgY2hhckNvZGUrKykge1xuICAgICAgICBjb25zdCBnbHlwaCA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIGdseXBoLnNldChcImljb25cIiwgU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSkpO1xuICAgICAgICBnbHlwaC5zZXQoXCJjb2RlXCIsIGNoYXJDb2RlLnRvU3RyaW5nKDE2KSk7XG4gICAgICAgIGdseXBocy5wdXNoKGdseXBoKTtcbiAgICB9XG4gICAgdmlld01vZGVsLnNldChcImdseXBoc1wiLCBnbHlwaHMpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2aWV3TW9kZWw7XG59Il19