'use strict';

var app = app || {};

app.Application = new Mn.Application({
	regions : {
		head : 'header',
		main : 'main',
		footer : 'footer'
	},
	initialize : function () {
		app.Collection = new app.Consultants_Collection;
		this.on('start', function () {
			Backbone.history.start();
		});
	}
});

new app.Router({
	controller : new app.Controller
});

app.Application.start();