"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onPageLoaded(args) {
    // Get the event sender
    var page = args.object;
    // You can access `info` property from the navigationEntry
    var context = page.navigationContext;
    console.log("context: " + JSON.stringify(context));
}
exports.onPageLoaded = onPageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZW1hbmFnZW1lbnQ0LXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlbWFuYWdlbWVudDQtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHNCQUE2QixJQUFlO0lBQ3hDLHVCQUF1QjtJQUN2QixJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsTUFBYyxDQUFDO0lBQ3ZDLDBEQUEwRDtJQUMxRCxJQUFNLE9BQU8sR0FBUSxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFORCxvQ0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25QYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xuICAgIC8vIEdldCB0aGUgZXZlbnQgc2VuZGVyXG4gICAgY29uc3QgcGFnZTogUGFnZSA9IGFyZ3Mub2JqZWN0IGFzIFBhZ2U7XG4gICAgLy8gWW91IGNhbiBhY2Nlc3MgYGluZm9gIHByb3BlcnR5IGZyb20gdGhlIG5hdmlnYXRpb25FbnRyeVxuICAgIGNvbnN0IGNvbnRleHQ6IGFueSA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHQ7XG4gICAgY29uc29sZS5sb2coXCJjb250ZXh0OiBcIiArIEpTT04uc3RyaW5naWZ5KGNvbnRleHQpKTtcbn1cbiJdfQ==