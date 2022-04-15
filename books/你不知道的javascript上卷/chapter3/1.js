// let sayHi = function() {
//     console.log( "Hello" );
// };
// sayHi();

var a = 2;
(function IIFE( global ) {
    var a = 3;
    console.log( a ); // 3
    console.log( global.a ); // 2
})( window );