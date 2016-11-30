var express = require('express');

var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var eventData = [ {
                name: 'Event 1',
                description: 'The First Event',
                date: '2016.01.01',
                time: '1:00 PM',
                duration: '1 Hour',
                location: {
                    streetAddr: '101 Main St.',
                    city: 'Los Angeles',
                    state: 'CA',
                    zip: '87885',
                    lon: 0,
                    lat: 0
                },
                capacity: 100
                },
                {
                name: 'Event 2',
                description: 'The 2nd Event',
                date: '2016.02.02',
                time: '2:00 PM',
                duration: '2 Hour',
                location: {
                    streetAddr: '202 Main St.',
                    city: 'Los Angeles',
                    state: 'CA',
                    zip: '87885',
                    lon: 0,
                    lat: 0
                },
                capacity: 200
                },
                {
                name: 'Event 3',
                description: 'The 3rd Event',
                date: '2016.03.03',
                time: '3:00 PM',
                duration: '3 Hour',
                location: {
                    streetAddr: '303 Main St.',
                    city: 'Los Angeles',
                    state: 'CA',
                    zip: '87885',
                    lon: 0,
                    lat: 0
                },
                capacity: 300
                },
                {
                name: 'Event 4',
                description: 'The 4th Event',
                date: '2016.04.04',
                time: '4:00 PM',
                duration: '4 Hour',
                location: {
                    streetAddr: '404 Main St.',
                    city: 'Los Angeles',
                    state: 'CA',
                    zip: '87885',
                    lon: 0,
                    lat: 0
                },
                capacity: 100
}];

dbRouter.route('/AddEventData')
    .get(function(req, res){
       // res.send('Adding Events');
       var url = 'mongodb://localhost:27017/eventsApp';
       mongodb.connect(url, function(err, db){
           var collection = db.collection('events');
           collection.insertMany(eventData, function(err, results){
               res.send(results);
               db.close();
           });
           
       });
    });



module.exports = dbRouter;