// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('socialAuth', ['ionic','firebase','com.htmlxprs.socialAuth.controllers','com.htmlxprs.socialAuth.services'])

    .run(function($ionicPlatform,$state,$rootScope,userSession) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }

        $state.go('login');

        //$rootScope.$on('$firebaseSimpleLogin:login', function(event, user) {
        //  userSession.user=user;
        //  $state.go('home');
        //});
        //
        //$rootScope.$on('$firebaseSimpleLogin:error', function(event, error) {
        //  console.log('Error logging user in: ', error);
        //});
        //
        //$rootScope.$on('$firebaseSimpleLogin:logout', function(event) {
        //  $state.go('login');
        //});
      });
    }).config(['$stateProvider',function($stateProvider){

      $stateProvider.state('login',{
        url:'/login',
       // controller:'LoginController',
        templateUrl:'views/login.html'
      }).state('home',{
        url:'/home',
        //controller:'HomeController',
        templateUrl:'views/man.html'
      }).state('children',{
        url:'/children',
        //controller:'HomeController',
        templateUrl:'views/children.html'
      }).state('woman',{
        url:'/woman',
        //controller:'HomeController',
        templateUrl:'views/woman.html'
      });

    }])
.controller('manCtrl',['$scope',function($scope){


        var a = 1;
        $scope.a = a;
        $scope.mancloth = [
            {name:'SKINNY JEANS',
                title:'brands of famous blaster jeans',
                corr:function(){
                    return 3600;
                },
                img:"img/images1.jpg"

            },
            {name:'SILM JEANS',
                title:'brands of famous blaster jeans',
                corr:function(){
                    return 1500;
                },
                img:"img/silm.jpg"
            },
            {name:'RELAXED JEANS',
                title:'brands of famous blaster jeans',
                corr:function(){
                    return 1700;
                },
                img:"img/images2.jpg"
            },
            {name:'RELAXED JEANS',
                title:'brands of famous blaster jeans',
                corr:function(){
                    return 1300;
                },
                img:"img/stylo.jpg"
            }
        ];
        $scope.cur = "Rs. ";
        $scope.pak = function(){
            $scope.a  = 1;
            //alert(a);
            $scope.cur = function(){
                return "Rs. ";
            }
        };

        $scope.bang = function(){
            $scope.a = 0.77;
            //alert(a);
            $scope.cur = function(){
                return "BDT. ";
            }
        };

        $scope.count = 0;
        $scope.like = function(){
            //alert('like');
            $scope.count +=1;
        }




    }])
.controller('womanCtrl',['$scope',function($scope){


       var a = 1;
        $scope.a = a;
        $scope.cloth = [
            {name:'GULL AHMAD COLLECTION',
             title:'fashion cafe style',
             corr:function(){
                 return 1500;
             },
             img:"img/fashion-cafe-1.jpg"
            },
            {name:'GULL AHMAD COLLECTION',
                title:'fashion cafe style',
                corr:function(){
                    return 1500;
                },
                img:"img/fashion-cafe-2.jpg"
            },
            {name:'GULL AHMAD COLLECTION',
                title:'aybeez style',
                corr:function(){
                    return 1500;
                },
                img:"img/aybeez.jpg"
            },
            {name:'GULL AHMAD COLLECTION',
                title:'karachi wearhouse style',
                corr:function(){
                    return 1500;
                },
                img:"img/karachi wearhouse2.jpg"
            },
            {name:'GULL AHMAD COLLECTION',
                title:'river-rock style',
                corr:function(){
                    return 1500;
                },
                img:"img/river-rock2.jpg"
            },
            {name:'GULL AHMAD COLLECTION',
                title:'river-rock style',
                corr:function(){
                    return 1500;
                },
                img:"img/river-rock1.jpg"
            }
        ];
        $scope.cur = "Rs. ";
        $scope.pak = function(){
            $scope.a  = 1;
            //alert(a);
            $scope.cur = function(){
                return "Rs. ";
            }
        };

        $scope.bang = function(){
            $scope.a = 0.77;
            //alert(a);
            $scope.cur = function(){
                return "BDT. ";
            }
        };
        $scope.count = 0;
        $scope.like = function(){
            //alert('like');
            $scope.count +=1;
        }
        //console.log(a);

    }])

.controller('childCtrl',['$scope',function($scope){


    var a = 1;
    $scope.a = a;
    $scope.childcloth = [
        {name:'SKINNY CHILD STYLE',
            title:'brands of child',
            corr:function(){
                return 1500;
            },
            img:"img/p1.jpg"

        },
        {name:'SKINNY CHILD STYLE',
            title:'brands of child',
            corr:function(){
                return 1200;
            },
            img:"img/p2.jpg"
        },
        {name:'SKINNY CHILD STYLE',
            title:'brands of child',
            corr:function(){
                return 900;
            },
            img:"img/p3.jpg"
        }

    ];
    $scope.cur = "Rs. ";
    $scope.pak = function(){
        $scope.a  = 1;
        //alert(a);
        $scope.cur = function(){
            return "Rs. ";
        }
    };

    $scope.bang = function(){
        $scope.a = 0.77;
        //alert(a);
        $scope.cur = function(){
            return "BDT. ";
        }
    };

        $scope.count = 0;
        $scope.like = function(){
            //alert('like');
            $scope.count +=1;
        }




}]);
