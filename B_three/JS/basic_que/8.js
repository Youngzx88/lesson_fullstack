const a = {
    value: 1,
    valueOf(){
        return this.value++;
    }
}


if(a == 1 && a == 2 && a == 3){
    console.log('yzx');
}