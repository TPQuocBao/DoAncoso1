// Fancy Header
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

// Load more button
// $(function(){
//     $("#blog-post div").slice(0, 10).show(); // select the first ten
//     $("#loadmore").click(function(e){ // click event for load more
//         e.preventDefault();
//         $("div:hidden").slice(0, 10).show(); // select next 10 hidden divs and show them
//         if($("div:hidden").length == 0){ // check if any hidden divs still exist
//             alert("No more divs"); // alert if there are none left
//         }
//     });
// });
