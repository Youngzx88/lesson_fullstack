//RHS报错
// function foo(a) {
//     console.log( a + b );
//     b = a;
// }
// foo( 2 );

//LHS
function foo(a) {
    c=a;
    console.log(c);
}
foo( 2 );
