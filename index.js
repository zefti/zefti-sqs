var AWS = require('aws-sdk');

module.exports = function(config){
  AWS.config.update({region: 'us-east-1'});
  AWS.config.update({accessKeyId: config.accessKeyId, secretAccessKey: config.secretAccessKey});
  var sqs = new AWS.SQS();
  return sqs;
};