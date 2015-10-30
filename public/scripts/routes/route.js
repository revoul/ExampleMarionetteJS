'use strict';

var app = app || {};

app.Router = Mn.AppRouter.extend({
	appRoutes : {
		'' : 'home',
		'add' : 'add',
		'edit/:id' : 'edit',
	}
});