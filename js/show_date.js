module.exports = function() {
  
  var date = new Date();
  
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var month = date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1);
  var year = date.getFullYear().toString().slice(-2);
  var minute = date.getMinutes()<10 ? "0" + date.getMinutes() : date.getMinutes();
  var hour = date.getHours()<10 ? "0" + date.getHours() : date.getHours();
  
  var formatDate = day + '-' + month + '-' + year + ' ' + hour  + ':' + minute;
  
  return formatDate;
};