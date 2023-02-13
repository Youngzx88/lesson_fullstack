package chapter01;

public class nimingclass {
    public static void main(String[] args) {
        SayHello sayHello = new SayHello();
        sayHello.SayHello(new Person11(){
            public String name(){
                return "Youngzx";
            }
        });
    }
}

abstract class Person11 {
    public abstract String name();
}

class SayHello {
    public void SayHello(Person11 person11){
        System.out.println("hello" + person11.name());
    }
}
