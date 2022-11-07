sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
    'use strict';

    return ManagedObject.extend("sap.demo.buttons.buttonspage.controller.ButtonDialog", {

        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oView;
        },

        open: function (buttonText) {
            var oView = this._oView;

            // create the dialog lazily

            if (!oView.byId("ButtonDialog")) {
                var oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("ButtonDialog").close();
                    }
                }

                // load asynchronous XML fragment
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.demo.buttons.buttonspage.view.ButtonDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    // conect dilog to the root view of the comonent (models. lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();
                    oView.byId("ButtonDialog").setTitle(buttonText);
                })
            } else {
                oView.byId("ButtonDialog").open();
                oView.byId("ButtonDialog").setTitle(buttonText);
            }

            
        },
    })
});