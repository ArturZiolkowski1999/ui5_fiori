sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.demo.buttons.buttonspage.controller.Buttons", {
            onInit: function () {

            },

            onOpenDialog: function(buttonText){
                this.getOwnerComponent().openButtonDialog(buttonText);
            }
        });
    });
