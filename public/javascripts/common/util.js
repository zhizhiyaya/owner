var util = {
    formatFormData: function (data) {
        var arr = decodeURIComponent(data).split('&');
        var itemData;
        var formData = {};

        arr.forEach(function(item, index) {

            itemData = item.split('=');
            formData[util.trim(itemData[0])] = encodeURIComponent(util.trim(itemData[1]));
        });

        return formData;
    },
    trim: function (str) {
        return str.replace(/^\s+|\s+$/g, '');
    }
}

module.exports = util;