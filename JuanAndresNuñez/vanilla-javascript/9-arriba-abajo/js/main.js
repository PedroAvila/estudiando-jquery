
$(document).ready(function () {
    // Parent / parents
    // let $parent = $(".lateral").find("span").last().parents();
    // $parent.css("border", "1px solid red");

    // Children / find
    let $children = $("main").find("*");
    $children.css({
        "transition": "all 2s",
        "transform": "rotate(180deg)"
    });
});