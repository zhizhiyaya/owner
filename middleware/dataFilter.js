/**
**  filter response data
**/

var util = require('../public/javascripts/common/util.js');

module.exports = {
    DBErrData: {status: 1, errMsg: 'error'}, // 数据库出错
    trimReqData: function (data) {
        if (util.isObject(data)) {
            var key = '';
            for (key in data) {
                data[key] = util.trim(data[key]);
            }
        }

        return data;
    },
    formatResData: function (data) {

        var resData = {status: 0};
        console.log(util.extend({}, resData, data));
        return util.extend({}, resData, data);
    }
};


