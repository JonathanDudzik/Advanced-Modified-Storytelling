let xhr = new XMLHttpRequest();

xhr.open("PUT", "https://watershedlrs.com/api/organizations/6592/lrs/statements/?statementId=ed1d064a-eba6-45ea-a3f6-34cdf6e1dfd9");

xhr.setRequestHeader('Authorization', 'Basic N2NhODg4YTIzNDg3OWQ6TFd1YUZmV0tJa0E1Mkg=');
xhr.setRequestHeader('X-Experience-API-Version', "1.0.1");

var stmt = 
{
    "actor": {
      "name": "Sally Glider",
      "mbox": "mailto:sally@example.com"
    },
    "verb": {
      "id": "http://adlnet.gov/expapi/verbs/experienced",
      "display": { "en-US": "experienced" }
    },
    "object": {
      "id": "http://example.com/activities/solo-hang-gliding",
      "definition": {
        "name": { "en-US": "Solo Hang Gliding" }
      }
    }
  }

xhr.send(JSON.stringify(stmt));


// basic configuration for xAPI wrapper
// var conf = {
//     "endpoint" : "https://watershedlrs.com/api/organizations/6592/lrs/",
//     "auth" : "Basic " + toBase64('7ca888a234879d:LWuaFfWKIkA52H'),
// };
// ADL.XAPIWrapper.changeConfig(conf);


// // basic function to send a statement to LRS
// var stmt = {"actor" : {"mbox" : "mailto:tom@example.com"},
//             "verb" : {"id" : "http://adlnet.gov/expapi/verbs/answered",
//                       "display" : {"en-US" : "answered"}},
//             "object" : {"id" : "http://adlnet.gov/expapi/activities/question"}};

// ADL.XAPIWrapper.sendStatement(stmt, function() {
//     console.log("got it!");
// });

// basic function to retreive statements
// ADL.XAPIWrapper.getStatements(null, null,
//     function(r){ADL.XAPIWrapper.log(JSON.parse(r.response).statements);});