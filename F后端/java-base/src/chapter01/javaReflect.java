package chapter01;

public class javaReflect {
    public static void main(String[] args) {
        User22 user = new Child();
        user.test1();
//        user.test2();
        Class<? extends User22> aClass = user.getClass();
        System.out.println(aClass.getName());
//        System.out.println(aClass.getdeclared());
    }
}

class User22{
    public void test1 () {
        System.out.println("test1");
    }
}

class Child extends User22 {
    public void test2 () {
        System.out.println("test2");
    }
}