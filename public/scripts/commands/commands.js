'use strict';

var app = app || {};

app.Application.commands.setHandler('goAdd', function() {
    Backbone.history.navigate('add', {trigger : true});
});

app.Application.commands.setHandler('goHome', function() {
    Backbone.history.navigate('', {trigger : true});
});

app.Application.commands.setHandler('goSearch', function(_field) {
	Backbone.history.navigate('search/'+_field, {trigger : true});
});

app.Application.commands.setHandler('goEdit', function(_modelId) {
	Backbone.history.navigate('edit/'+_modelId, {trigger : true});
});

app.Application.commands.setHandler('saveModel', function(_model) {
	if(!!_model.id) _model.save();
	else app.Collection.create(_model);
	app.Application.execute('goHome');
});

app.Application.commands.setHandler('removeModel', function(_model){
	_model.destroy();
});