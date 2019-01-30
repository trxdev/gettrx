$(document).ready(function(){
  setInterval(function(){
    $.getJSON("https://api.coincap.io/v2/assets/tron", function(result){
        var price = result.data['priceUsd'];
        var inputvalue = $('#trx_input').val();
        var mainprice = '$' + parseFloat(price).toFixed(4);
        var pricechange = '(' + (parseFloat(result.data['changePercent24Hr']).toFixed(2)) + '%)';
     
        $('#cap').html('$' + ((result.data['marketCapUsd'])/1000000000).toFixed(2) + 'B');
        $('#rank').html(result.data['rank']);
        $('#volumetoday').html('$' + ((result.data['volumeUsd24Hr'])/1000000).toFixed(2) + 'M');
        $('#price').html('$' + parseFloat(price).toFixed(6));
    });
  }, 2000);
});
