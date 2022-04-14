function func( num) {
    this.count++;
}
func.count = 0;
func(0);
console.log( func.count);
    