'use strict';

var app = app || {};

app.Tools = {
	serialize : function (_ser) {
		var _obj = {};
		_.each(_ser.serializeArray(), function(_index){
			_obj[_index.name] = _index.value;
		});
		return _obj;
	}
}