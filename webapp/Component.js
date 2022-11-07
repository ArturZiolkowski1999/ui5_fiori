/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "sap/demo/buttons/buttonspage/model/models",
        "./controller/ButtonDialog"
    ],
    function (UIComponent, Device, models, ButtonDialog) {
        "use strict";

        return UIComponent.extend("sap.demo.buttons.buttonspage.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                // set dialog
                this._buttonDialog = new ButtonDialog(this.getRootControl());
            },

            openButtonDialog: function (buttonText){
                this._buttonDialog.open(buttonText);
            }
        });
    }
);