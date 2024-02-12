/**
* @ignore
*/
define([
    "knockout",
    "ojs/ojcontext",
    "ojs/ojknockout",
    "ojs/ojinputtext"
], function (ko, Context) {
    function DashboardViewModel(Context) {
        this.dashboardInputValue = "Hello Pavan";
    }
    return DashboardViewModel;
});
