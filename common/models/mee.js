'use strict';

module.exports = function(Mee) {
    Mee.status = function(cb) {
        var currentDate = new Date();
        var currentHour = currentDate.getHours();
        var OPEN_HOUR = 6;
        var CLOSE_HOUR = 20;
        console.log('Current hour is %d', currentHour);
        var response;
        if (currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR) {
          response = 'We are open for business.';
        } else {
          response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
        }
        cb(null, response);
      };

      Mee.whtthehell = function(cb) {
        var response = [new Mee ({city: "dd", name: "name"}), new Mee ({city: "Rio", name: "is it OK?"})];
        cb(null, response);
      };
      
    Mee.remoteMethod(
        'status', {
          http: {
            path: '/status',
            verb: 'get',
          },
          description: 'this is a test',          
          returns: {
            arg: 'status',
            type: 'string'
          }
        }
      );
      Mee.remoteMethod(
        'whtthehell', {
          http: {
            path: '/whtthehell',
            verb: 'get',
          },
          description: 'this is a test 2',          
          returns: {
            arg: 'res',
            type: 'Array'
          }
        }
      );
};
