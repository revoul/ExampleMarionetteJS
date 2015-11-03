'use strict';

var app = app || {};

app.List_Item_View = Mn.ItemView.extend({
	template : '#tpl_list_item',
	className : 'collection-item',
	ui : {
		editLink : '.hrefEdit',
		removeLink : '.hrefRemove'
	},
	triggers : {
		'click @ui.editLink' : 'edit',
		'click @ui.removeLink' : 'remove'
	}
});