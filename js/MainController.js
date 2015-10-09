

app.controller('MainController', ['$scope', function($scope, $http) {
  //$scope.title = 'Find The Gram'; 
  $scope.instructions = '* Right click on an area of the map to view images from that location';
  $scope.secondaryTitle = 'Recent Grams Based On Your Search:';


  // $http.get(myurl2).success(function(response)
  // {
  //   $scope.images = response.data;
  // });


  $scope.imagesOriginal = [
  	{ 
    	image: 'https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/11203399_806631449426649_2070423860_n.jpg', 
    	location: 'BYU LAUNDRY', 
    	username: 'r7bear'
  	}, 
  	{ 
    	image: 'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11821282_1705837886302824_998604239_n.jpg', 
      location: 'BYU (Brigham Young University)', 
      username: 'kyleesuebear'
  	}, 
  	{ 
    	image: 'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12142557_1648340592049449_1933313300_n.jpg', 
      location: '(Brigham Young University)', 
      username: 'spence_580'
  	}, 
  	{ 
    	image: 'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/12132967_533707176781384_1261124492_n.jpg', 
      location: '(Brigham Young University)', 
      username: 'byuhonors'
  	}
  ];

}]);


