// <countdown> 
function makeTimer() {

    var endTime = new Date('2022-04-20T19:00:00');
    // endTime.setHours(23,59,59,999);
    
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#hari").html(days);
    $("#jam").html(hours);
    $("#menit").html(minutes);
    $("#detik").html(seconds);		

}

setInterval(function() { makeTimer(); }, 1000);

$("#clabel").text("Flashsale .COM")
$("#cdiskon").text("75")

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

// Animation
jQuery(function(){
    function random(n) {
        return Math.floor(Math.random() * n);
    }
    var transition_time = 200;
    var waiting_time = 100;
    var images = $('#text1 rect, #text rect');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    var interval_id = setInterval(function () {
        images.eq(current).fadeOut(transition_time, function () {
            current = random(n);
            images.eq(current).fadeIn(transition_time);
        });
    }, 2 * transition_time + waiting_time);
})



document.querySelector("#select-signature").onchange = function(){
            document.querySelector("#lanjut-signature").setAttribute('href', `https://portal.qwords.com/order/?promocode=FRSTTMESGN&pid=${this.value}`)
        }
document.querySelector("#select-signature").dispatchEvent(new Event("change"))

document.querySelector("#select-premiere").onchange = function(){
    document.querySelector("#lanjut-premiere").setAttribute('href', `https://portal.qwords.com/order/?promocode=FRSTTMEPRM&pid=${this.value}`)
}
document.querySelector("#select-premiere").dispatchEvent(new Event("change"))

document.querySelector("#select-infinite").onchange = function(){
    document.querySelector("#lanjut-infinite").setAttribute('href', `https://portal.qwords.com/order/?promocode=FRSTTMEINF&pid=${this.value}`)
}
document.querySelector("#select-infinite").dispatchEvent(new Event("change"))