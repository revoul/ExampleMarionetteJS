'use strict';

var app = app || {};

app.List_View = Mn.CompositeView.extend({
	template : '#tpl_list',
	childView : app.List_Item_View,
	emptyView : app.List_Empty_View,
	childViewContainer : '.collection'
});