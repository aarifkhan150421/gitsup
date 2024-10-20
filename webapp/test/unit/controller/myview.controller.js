/*global QUnit*/

sap.ui.define([
	"gitsup/controller/myview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("myview Controller");

	QUnit.test("I should test the myview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
