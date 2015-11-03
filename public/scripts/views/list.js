'use strict';

var app = app || {};

app.List_View = Mn.CompositeView.extend({
	template : '#tpl_list',
	childViewContainer : '.collection',
	childView : app.List_Item_View,
	emptyView : app.List_Empty_View,
	ui : {
		addLink : '#add',
		search : '#search',
		searchLink : '.pagination li'
	},
	events : {
		'click @ui.addLink' : '_add',
		'keyup @ui.search' : '_search',
		'click @ui.searchLink' : '_searchLink'
	},
	childEvents : {
		'edit' : '_edit',
		'remove' : '_remove'
	},
	initialize : function (options) {
		if(!!options._secondFilter) this._secondFilter = options._secondFilter;
	},
	templateHelpers : function () {
		var _tmp = _.clone(this._links);
		_tmp[this._secondFilter] = 'active';
		return {links : _tmp};
	},
	filter : function (_child, _index, _collection) {
		if(_child.get('name').toLowerCase().indexOf(this._secondFilter.toLowerCase()) != 0 &&  this._secondFilter != 'Todos') return false;
		var _nameComplete = _child.get('name')+' '+_child.get('surname')+' '+ _child.get('age');
		return (_nameComplete.toLowerCase().search(this._filter.trim().toLowerCase()) != -1) ? true : false;
	},
	_add : function () {
		app.Application.execute('goAdd');
	},
	_edit : function (_viewItem) {
		app.Application.execute('goEdit', _viewItem.model.id);
	},
	_remove : function (_viewItem) {
		app.Application.execute('removeModel', _viewItem.model);
	},
	_search : function () {
		this._filter = this.ui.search.val();
		this._renderChildren();
	},
	_searchLink : function (_event, b, c) {		
		app.Application.execute('goSearch', $(_event.currentTarget).children().data('filter'));
	},
	_links : {'A':'','B':'','C':'','D':'','E':'','F':'','G':'','H':'','I':'','J':'','K':'','L':'','M':'','N':'','Ñ':'','O':'','P':'','Q':'','R':'','S':'','T':'','U':'','V':'','W':'','X':'','Y':'','Z':'','Todos':''},
	_filter : '',
	_secondFilter : ''
});