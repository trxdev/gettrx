$(document).ready(function() {
    setInterval(function() {
        $.getJSON("https://api.coincap.io/v2/assets/tron", function(a) {
            var e = a.data.priceUsd;
            var c = $("#trx_input").val();
            var d = "$" + parseFloat(e).toFixed(4);
            var b = "(" + (parseFloat(a.data.changePercent24Hr).toFixed(2)) + "%)";
            $("title").html("Tron Price " + d + " Live Tron Price Chart For TRX - USD Price");
            $("#mdescription").attr("content", "Tron price today is " + d + " with chnage of " + b + " in last 24 hours. Tron (TRX) price chart for real time tron (TRX) coin price prediction in USD with coin market cap and 24 hour volume.");
            $("#name").html(a.data.id);
            $("#price").html("$" + parseFloat(e).toFixed(6));
            $("#change").html("(" + (parseFloat(a.data.changePercent24Hr).toFixed(2)) + "%)");
            $("#rank").html(a.data.rank);
            $("#cap").html("$" + ((a.data.marketCapUsd) / 1000000000).toFixed(2) + "B");
            $("#volumetoday").html("$" + ((a.data.volumeUsd24Hr) / 1000000).toFixed(2) + "M");
            $("#supply").html(((a.data.supply) / 1000000000).toFixed(2) + "B TRX");
            $("#usd_price").val((c * e).toFixed(6));
            $("#price2").html("$" + parseFloat(e).toFixed(6));
            $("#change2").html("(" + (parseFloat(a.data.changePercent24Hr).toFixed(2)) + "%)");
            $("#rank2").html(a.data.rank);
            $("#cap2").html("$" + ((a.data.marketCapUsd) / 1000000000).toFixed(2) + "B");
            $("#volumetoday2").html("$" + ((a.data.volumeUsd24Hr) / 1000000).toFixed(2) + "M");
            $("#supply2").html(((a.data.supply) / 1000000000).toFixed(2) + "B TRX");
            $("#change:contains('-')").removeClass("positive").addClass("negative")
        })
    }, 2000)
});
