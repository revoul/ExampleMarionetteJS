'use strict';

var app = app || {};

app.Add_Edit_View = Mn.ItemView.extend({
	template : '#tpl_add_edit',
	ui : {
		save : '#btnAceptar',
		cancel : '#btnCancelar',
		form : 'form'
	},
	events : {
		'click @ui.save' : '_save',
		'click @ui.cancel' : '_cancel'
	},
	_save : function () {
		this.model.set(app.Tools.serialize(this.ui.form));
		if(this.model.isValid()) app.Application.commands.execute('saveModel', this.model);
		else this._showErrors();
	},
	_cancel : function () {
		app.Application.commands.execute('goHome');
	},
	_showErrors : function(){
		var _inputs = {name : '', surname : '', age : ''};
		_.extend(_inputs, this.model.validationError);
		_.each(_inputs, function(_string, _name){
			var _set = (_string != '') ? 'invalid' : 'valid';
			var _rem = (_string == '') ? 'invalid' : 'valid';
			$('#'+_name).addClass(_set).removeClass(_rem);
			$('#'+_name).next().attr('data-error', _string);
		});
	}
});