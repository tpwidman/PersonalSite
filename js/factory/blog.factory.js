myApp.factory('Parse', ['$resource', function ($resource) {
    
	var reqHeaders = {
                'X-Parse-Application-Id': "6BU1cXCRDzdoRmiXBxdkg4dqLPELeM9n2vtfnuvX",
                'X-Parse-REST-API-Key': "KjqeeFdw16PaXuRV7f26cUegmInDJm8VoH2aFSNX",
                "Content-Type": "application/json"
            };

         var Member = $resource('https://api.parse.com/1/classes/BlogPosts/:Id', {}, 
                 {
                'query': {
                    headers: reqHeaders
                },
                'save': {
                    method: 'POST',
                    headers: reqHeaders
                },
                'get': {
                    method: 'GET',
                    params: {Id: "@Id"},
                    headers: reqHeaders
                },
                'update': {
                    method: 'PUT',
                    params: {Id: "@Id"},
                    headers: reqHeaders
                },
                'remove': {
                    method: 'DELETE',
                    headers: reqHeaders
                }
            });

        return Member;
}]);