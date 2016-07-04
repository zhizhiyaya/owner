var util = {
    trim: function (str) {
        return str.replace(/^\s+|\s+$/g, '');
    },
    isString: function(obj){ return typeof obj == 'string' },

    isFunction: function (value) { return type(value) == "function" },

    isWindow: function (obj) { return obj != null && obj == obj.window },

    isDocument: function(obj) { return obj != null && obj.nodeType == obj.DOCUMENT_NODE },

    isObject: function(obj) { return type(obj) == "object" },

    isPlainObject: function (obj) {
        return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
    },

    isArray: Array.isArray ||
        function(object){ return object instanceof Array },

    formatFormData: function (data) {
        var arr = data.split('&');
        var itemData;
        var formData = {};

        arr.forEach(function(item, index) {

            itemData = item.split('=');
            formData[util.trim(itemData[0])] = util.trim(itemData[1]);
        });

        return formData;
    }

};

module.exports = util;