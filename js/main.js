
$(function () {
	// $(".play-box").on("click", function() {
 //        var a = $(this);
 //        showVideo(a.attr("id"), a.data("vid"));
	// 	$(this).unbind('click');
 //    });
 //解决mac下问题
    $(".play-box").one("click", function() {
        var a = $(this);
        showVideo(a.attr("id"), a.data("vid"));
    });
    $(".btn").on("click", function() {
        player.playVideo();
    });
});

var showVideo = function (domid, vid) {
    player = new YKU.Player(domid, {
        client_id: 'eb069d0386c909e9',
        vid: vid,
        show_related: false,
        autoplay: false,
        flashext: '<param name="wmode"value="transparent">'
    });
}

showVideo("play-box2", "XMTMzMzE4OTA3Mg");
function playVideo(){
    player.playVideo();
}