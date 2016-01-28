var app = angular.module('sampleApp', []);

// create angular controller
app.controller('mainController', function($scope, $http) {
    $scope.display = true;
    // function to submit the form after all validation has occurred            
    $scope.submitForm = function(isValid) {
        var path = $scope.xmlpath.substring(12);
        var suffix = path.split('.');
        if (suffix[1] == "xml") {
            $scope.display = false;
            $scope.personInfo = {};
            // check to make sure the form is completely valid
            if (isValid) {
                $http.get(path, {
                        transformResponse: function(cnv) {
                            var x2js = new X2JS();
                            var aftCnv = x2js.xml_str2json(cnv);
                            return aftCnv;
                        }
                    })
                    .success(function(response) {
                        //console.log(response);
                        var personal = {
                            Name: response.MyXmLBody.PersonalInformation.Name,
                            dob: response.MyXmLBody.PersonalInformation.DOB,
                            address: response.MyXmLBody.PersonalInformation.Address,
                            gender: response.MyXmLBody.OtherInformation._gender,
                            edu: response.MyXmLBody.OtherInformation.Education
                        };
                        //console.log(personal.Name, personal.dob, personal.address, personal.gender, personal.edu);
                        $http.post('/api/user', {
                                Name: personal.Name,
                                DOB: personal.dob,
                                Address: personal.address,
                                Gender: personal.gender,
                                Education: personal.edu
                            })
                            .then(function(response) {
                                $scope.personInfo = response.data;
                                // console.log($scope.personInfo);
                            }, function() {
                                console.log("SORRY");
                            });

                    });
            }
        } else
            alert('Please import xml file!');
    };

});

app.directive('validFile', function() {
    return {
        require: 'ngModel',
        link: function(scope, el, attrs, ngModel) {
            //change event is fired when file is selected
            el.bind('change', function() {
                scope.$apply(function() {
                    ngModel.$setViewValue(el.val());
                    ngModel.$render();
                })
            })
        }
    }
})
