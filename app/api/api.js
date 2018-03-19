var config = require('./config')
var base = config.appHost
console.log(base, 'base')
var api = function ($http) {
  this.$http = $http
}
api.prototype = {
    getSome: function (param) {
        return this.$http({
            method: 'post',
            url: '/someUrl',
            data: param
        })
    }
}
module.exports = api