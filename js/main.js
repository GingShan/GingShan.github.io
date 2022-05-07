$(function() {
    $(".MenuBlock").slideUp();
    $(".Humber").click(() => {
        $(".MenuBlock").slideToggle(800);
    });
    $(".menulink").click(() => {
        $(".MenuBlock").slideToggle(800);
    });
})