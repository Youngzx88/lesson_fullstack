package chapter01;

public class extend {
    public static void main(String[] args) {
        Youngzx y1 = new Youngzx("亦庄线");

    }
}

class Person {
    public Person(String name) {
        System.out.println("name"+name);
    }
}

class Youngzx extends Person {
    public Youngzx(String name) {
        super(name);
    }
}