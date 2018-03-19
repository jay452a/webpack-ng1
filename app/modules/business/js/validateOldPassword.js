/**
 * Created by 56234 on 2018/3/19.
 */
var api =  require('api/api')
console.log(api)
module.exports = angular.module('app.business')
    .controller('validateOldPasswordCtrl', ['$scope', '$http', '$stateParams', '$state', '$rootScope', '$filter', appointmentManagementCtrl])


function appointmentManagementCtrl($scope, $http, $stateParams, $state, $rootScope, $filter) {
    $scope.request = new api($http) // 所有后端api接口在此初始化
    $scope.ceshi = 'ceshi'

    $scope.historyBack = function () {
        history.go(-1)
    }
    $scope.resetLoginPassword = function () {
    }
}




