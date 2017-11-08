'use strict';

angular.
  module('phoneDetail').
  component('phoneDetail', {
    // template: 'TBD: Detail view for <span>{{$ctrl.phone.id}}</span>',
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
        var self = this;

        $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
          self.phone = response.data;
        });

        // this.phoneId = $routeParams.phoneId;
      }
    ]
  });
