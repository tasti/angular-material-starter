'use strict';

App.controller('DemoCtrl', [
    '$scope',
    function($scope) {
        /* Checkbox */
        $scope.data = {};
        $scope.data.cb1 = true;
        $scope.data.cb2 = false;

        /* Lists */
        $scope.todos = [
            {
                face : 'img/list/60.jpeg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : 'img/list/60.jpeg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : 'img/list/60.jpeg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : 'img/list/60.jpeg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : 'img/list/60.jpeg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            }
        ];

        /* Radio Button */
        $scope.data = {
            group2 : '6',
            group1 : '2'
        };
        $scope.radioData = [
            { label: 'Label 4', value: '4' },
            { label: 'Label 5', value: '5' },
            { label: 'Label 6', value: '6' }
        ];
        $scope.addItem = function() {
            var r = Math.ceil(Math.random() * 1000);
            $scope.radioData.push({ label: 'Label ' + r, value: r });
        };
        $scope.removeItem = function() {
            $scope.radioData.pop();
        };
    }
]);
