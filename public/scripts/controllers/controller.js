'use strict';

var app = app || {};

app.Controller = Mn.Controller.extend({
	initialize : function () {
		app.Application.head.show(new app.Title_View);
	},
	home : function () {
		app.Application.main.show(
			new app.List_View({
				collection : app.Collection
			})
		);
	},
	add_edit : function (_id) {
		var _model = (!!_id) ? app.Collection.get(_id) : new app.Consultant_Model;
		app.Application.main.show(
			new app.Add_Edit_View({
				model : _model
			})
		);
	},
	search : function (_field){
		app.Application.main.show(
			new app.List_View({
				collection : app.Collection,
				_secondFilter : _field
			})
		);
	}
});