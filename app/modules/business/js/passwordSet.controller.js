var api =  require('api/api')
console.log(api)
module.exports = angular.module('app.business')
    .controller('passwordSetCtrl', ['$scope', '$http', '$stateParams', '$state', '$rootScope', '$filter', appointmentManagementCtrl])


function appointmentManagementCtrl($scope, $http, $stateParams, $state, $rootScope, $filter) {
    $scope.request = new api($http) // 所有后端api接口在此初始化


    $scope.isActualName = true
    $scope.historyBack = function () {
        history.go(-1)
    }
    $scope.nextPage = function (url) {
        window.location.href = '#/' + url
    }
}



