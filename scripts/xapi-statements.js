// let xhr = new XMLHttpRequest();

// xhr.open("GET", "https://watershedlrs.com/api/organizations/6592/lrs/statements");

// xhr.setRequestHeader('Authorization', 'Basic N2NhODg4YTIzNDg3OWQ6TFd1YUZmV0tJa0E1Mkg=');
// xhr.setRequestHeader('X-Experience-API-Version', "1.0.1");
// xhr.setRequestHeader('Content-Type', "application/json");
// // xhr.setRequestHeader('statementId', "");

// var stmt = 
// {
//   "actor":{"mbox":"mailto:tom@example.com"},
//   "verb":{"id":"http://adlnet.gov/expapi/verbs/answered",
//   "display":{"en-US":"answered"}},
//   "object":{"id":"http://adlnet.gov/expapi/activities/question"},
//   "id":"8b7ab2f6-da46-4eb9-9960-fb07c490114e"
// }
// console.log(stmt);

// xhr.send(JSON.stringify(stmt));


// // basic configuration for xAPI wrapper
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
//     console.log(stmt);
// });

// // basic function to retreive statements
// ADL.XAPIWrapper.getStatements(null, null,
//     function(r){ADL.XAPIWrapper.log(JSON.parse(r.response).statements);});