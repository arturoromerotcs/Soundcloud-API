angular
	.module('SoundCloudApp')
	.service('MainService', function($http, $log) {
		this.getUsers = function() {
			$http.get('http://api.soundcloud.com/users/' + 'lifeplus' + '/tracks.json?client_id=bda4ada8694db06efcac9cf97b872b3e')
				.then(function(res) {
					var data = res.data
					console.log(data);
				})
		}
	})