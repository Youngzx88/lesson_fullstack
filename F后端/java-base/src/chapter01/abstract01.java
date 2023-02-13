package chapter01;

public class abstract01 {
    public static void main(String[] args) {
        Chinese2 c1 = new Chinese2();
        c1.eat();
    }
}

abstract class People{
    public abstract void  eat();
}

class Chinese2 extends People {
    //抽象类无法直接构建对象，但是可以通过子类间接构建对象
    public void eat(){
        System.out.println("中国人用筷子吃饭");
    }
}