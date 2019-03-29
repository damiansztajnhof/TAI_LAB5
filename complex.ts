class Complex{
    private re:number;
    private im:number;
    constructor(re:number,im:number){
        this.re=re;
        this.im=im;

    }
    add(obj:Complex):Complex{
        return new Complex(this.re + obj.re, this.im + obj.im);

    }
    sub(obj:Complex):Complex{
        return new Complex(this.re - obj.re, this.im - obj.im);
    }
    module(){
        return Math.sqrt(Math.pow(this.re,2)+Math.pow(this.im,2));
    }
    toString(){
        
        console.log(this.re + ' + ' + this.im);
    }


}

let com=new Complex(2,7);
let com2=new Complex(3,5);
console.log(com.add(com2));
console.log(com.sub(com2));
console.log(com.module());

com2.toString();
