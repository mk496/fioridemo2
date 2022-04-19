/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fioridemo2/fioridemo2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});