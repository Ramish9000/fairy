angular
	.module('wardrobe-fairy', ['angular-jwt', 'ngResource', 'ui.router', 'ngFileUpload'])
	// .constant('API', 'https://after-n.herokuapp.com/api')
	.constant('API', '../api')
	.constant('S3_BUCKET', 'https://s3-us-west-2.amazonaws.com/wardrobefairy/')
	.config(function($httpProvider, $stateProvider, $urlRouterProvider){

		//Injecting AuthInterceptor
		$httpProvider.interceptors.push('AuthInterceptor');

		//STATES
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl: "js/welcome.php"
			})
			.state('signup', {
				url: "/signup",
				templateUrl: "js/signup.php",
				controller: "UsersController as users"
			})
			.state('login', {
				url: "/login",
				templateUrl: "js/login.php",
				controller: "UsersController as users"
			})
			.state('upload', {
				url: "/upload",
				templateUrl: "js/upload.html",
				controller: "mainController as main"
			})
			.state('generator', {
				url: "/generator",
				templateUrl: "js/generator.html",
				controller: "mainController as main"
			})
			.state('about', {
				url: "/about",
				templateUrl: "js/about.html",
				controller: "mainController as main"
			})



		//Otherwise
		$urlRouterProvider.otherwise('/');
	})