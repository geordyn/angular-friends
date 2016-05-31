app.controller('FriendController', function($scope, $http) {

	$scope.friends = [];

	$http.get('friend-data.json')
		.then(function(response) {
			$scope.friends = response.data;
		}, function(response) {
			console.log('error getting data');
		});





//// NG OPTIONS BELOW ////

	$scope.sortUpDown = [
		{name: "Descending", value: true },
		{name: 'Ascending', value: false }
	];

	$scope.sortOptions = [
		{
			name: 'Name', //what we want it to display as - "option.name"
			value: 'name' //the value we want it to be when it's clicked on - "option.value"
		},
		{name: '#Friends', value: 'friend_count'},
		{name: 'City', value: 'current_location.city'},
		{name: 'State', value: 'current_location.state'},
		{name: 'Country', value: 'current_location.country'},
		{name: 'Rommel', value: 'current_location.country'}

	]

	$scope.sortType = 'name'; // defaults the sortType to be name on page load.
    $scope.sortReverse = false; // defaults the sortReverse to False.

});
