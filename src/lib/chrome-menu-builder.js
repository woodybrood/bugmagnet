module.exports = function ChromeMenuBuilder(chrome) {
	'use strict';
	let itemValues = {},
		itemHandlers = {};
	const self = this;
	self.rootMenu = function (title) {
		return chrome.contextMenus.create({'title': title, 'contexts': ['editable']});
	};
	self.subMenu = function (title, parentMenu) {
		return chrome.contextMenus.create({'title': title, 'parentId': parentMenu, 'contexts': ['editable']});
	};
	self.separator = function (parentMenu) {
		return chrome.contextMenus.create({'type': 'separator', 'parentId': parentMenu, 'contexts': ['editable']});
	};
	self.menuItem = function (title, parentMenu, clickHandler, value) {
		const id = chrome.contextMenus.create({'title': title, 'parentId': parentMenu, 'contexts': ['editable']});
		itemValues[id] = value;
		itemHandlers[id] = clickHandler;
		return id;
	};
	self.removeAll = function () {
		itemValues = {};
		itemHandlers = {};
		return new Promise(resolve => chrome.contextMenus.removeAll(resolve));
	};
	chrome.contextMenus.onClicked.addListener((info, tab) => {
		const itemId = info && info.menuItemId;
		if (itemHandlers[itemId]) {
			itemHandlers[itemId](tab.id, itemValues[itemId]);
		}
	});
};
