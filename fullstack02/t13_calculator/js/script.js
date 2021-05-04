function Calculator() {
    this.result = 0;
    this.init = function(a){
        this.result = a;
       // alert(this.result);
        return this;
    };
    this.add = function(b){
        this.result = this.result + b;
       // alert(this.result);
        return this;
    };
    this.mul = function(c){
        this.result = this.result * c;
       // alert(this.result);
        return this;
    };
    this.div = function(d){
        this.result = this.result / d;
        //alert(this.result);
        return this;
    };
    this.sub = function(e) {
        this.result = this.result - e;
        //alert(this.result);
        return this;
    };
    this.alert = function(){
       setTimeout(() => alert(this.result), 5000) ;
    };
}

const calc = new Calculator();
console.log(
    calc
        .init(2)
        .add(2)
        .mul(3)
        .div(4)
        .sub(2).result
// 1
);
calc.alert();
