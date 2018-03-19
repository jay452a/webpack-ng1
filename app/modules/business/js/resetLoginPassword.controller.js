/**
 * Created by 56234 on 2018/3/13.
 */
module.exports = angular.module('app.business')
    .controller('resetLoginPasswordCtrl', ['$scope', '$http', '$stateParams', '$state', '$rootScope', '$filter', appointmentManagementCtrl])

var CryptoJS = require('crypto-js')
function appointmentManagementCtrl($scope, $http, $stateParams, $state, $rootScope, $filter) {
    //提交数据
   $scope.formData = {}
   $scope.historyBack = function () {
       history.go(-1)
   }
   $scope.resetSure  = function () {
      // console.log(CryptoJS.MD5(123).toString())
       console.log($scope.formData.oldPassword)
   }
}



