$(document).ready(function(){
  $('#button1').click(function(){
    var x = $('#text1').val();
    var y = $('#text2').val();
    $.get('http://localhost:3000/Calculate' + x + '/' + y, function(data, status){
      $('#result').html(data.result);
    });
  });
});
