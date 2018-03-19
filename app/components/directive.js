/**
 * Created by 56234 on 2018/3/19.
 */
var angular = require('angular');
var app = angular.module('app')
require('./index.css')
app.directive('passwordKeycode', function () {
    return {
        restrict:'EAC',
        replace: true,
        template:function(el,$attr){
            var html = require('app/components/passwordSoftDisk/passwordKeycode.html')
            return html
        },
        controller: function($scope){
            $scope.phones = [{
                name:'123',detail:'this is a good idea'
            },{
                name:'456',detail:'this is a good idea'
            },{
                name:'789',detail:'this is a good idea'
            }]
            $scope.ceshi = function (name) {
                alert(name)
            }
        }

    };
})
module.exports = app