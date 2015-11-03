'use strict';

var app = app || {};

app.Consultants_Collection = Backbone.Collection.extend({
	model : app.Consultant_Model,
	localStorage: new Backbone.LocalStorage('bd_consultants'),
	initialize : function () {
		console.log('-init Consultants_Collection-');
		this.fetch();
	},
	comparator : function (_arg) {
		return _arg;
	}
});