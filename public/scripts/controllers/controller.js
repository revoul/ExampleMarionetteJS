'use strict';

var app = app || {};

app.Controller = Mn.Controller.extend({
	initialize : function () {
		app.Application.head.show(new app.Title_View);
	},
	home : function () {
		var _view = new app.List_View({
			collection : app.Collection
		});

		app.Application.main.show(_view);
	},
	add : function () {
		console.log('add');
	},
	edit : function () {
		console.log('edit');
	}
});