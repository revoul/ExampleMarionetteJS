'use strict';

var app = app || {};

app.Router = Mn.AppRouter.extend({
	appRoutes : {
		'' : 'home',
		'add' : 'add_edit',
		'edit/:id' : 'add_edit',
		'search/:field' : 'search'
	}
});