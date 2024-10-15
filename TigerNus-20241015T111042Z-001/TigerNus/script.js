 $(document).ready(function () {
     $(".mbl-icn").click(function () {
         $(".mbl-header-menu").slideToggle();
        $(this).toggleClass("fa-bars");
        $(this).toggleClass("fa-xmark");
        console.log("c---")
     });




 });
// function myFunction(x) {
//     x.classList.toggle("change");
    
//   }

//   $(".myFunction ").onclick (function () {
//      $(".mbl-header-menu").slideToggle();
//   });