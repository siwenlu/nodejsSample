'use strict';

describe('Controller: mainController -->', function() {
	// Load the controller's module
	beforeEach(module('sampleApp'));
	var mainCtrl,
		scope,
		httpBackend,
		requestHandler;
	// Initialize the controller and mock scope
	beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
		scope = $rootScope.$new();
		mainCtrl = $controller('mainController', {
			$scope: scope
		});
		httpBackend = _$httpBackend_;
		// requestHandler = httpBackend.when('GET', scope.xmlpath.substring(12)).respond({
		// 	name: 'userX'
		// }, {
		// 	dob: 'xxx'
		// });
	}));
	describe('when initialize the mainController', function() {
		it('should have display variable set to true on scope', function() {
			expect(scope.display).toBeTruthy();
		});
	});
	describe('when submit the XML file', function() {
		beforeEach(function() {
			scope.xmlpath = 'C:\\fakepath\\person.xml';
			scope.submitForm(true);
		});
		it('should fetch the JSON file', function() {
			httpBackend.expectGET(scope.xmlpath.substring(12));
			httpBackend.flush();
		});
	});
});

// describe('Controller: mainController', function(){
// 	var scope,$httpBackend, requestHandler;
// 	var ctrl;
// 	beforeEach(module('sampleApp'));
// 	beforeEach(inject(function($rootScope, $controller,_$httpBackend_) {
//         $httpBackend = _$httpBackend_;
        
//         scope = $rootScope.$new();
//         ctrl = $controller('mainController', {
//             $scope: scope
//         });
//         requestHandler=$httpBackend.when('GET', scope.xmlpath.substring(12)).respond({name: 'userX'}, {dob: 'xxx'});
//     }));

//     it('should fetch json file', function() {
//      $httpBackend.expectGET(scope.xmlpath.substring(12));
//      var controller = ctrl;
//      $rootScope.submitForm(true);
//      $httpBackend.flush();
//    });

//     it('should fail get json file', function() {

//      // Notice how you can change the response even after it was set
//      requestHandler.respond(401, '');

//      $httpBackend.expectGET(scope.xmlpath.substring(12));
//      var controller = ctrl;
//      $rootScope.submitForm(true);
//      $httpBackend.flush();
//    });

//      it('should send info to server', function() {
//      var controller = ctrl;
//      $httpBackend.flush();

//      $httpBackend.expectPOST('/api/user').respond(200, '');
//      requestHandler.respond(200, '');
//      $httpBackend.flush();
     
//    });


//    it('should send the info from database', function() {
//      var controller = ctrl;
//      $httpBackend.flush();

//      $httpBackend.expectPOST('/api/user', function(name,dob,address,gender,education) {

//        return true;
//      }).respond(200, '');
//      requestHandler.respond(200, '');
//      $httpBackend.flush();
//    });
// });
// });