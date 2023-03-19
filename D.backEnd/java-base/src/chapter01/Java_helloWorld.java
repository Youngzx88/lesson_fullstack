package chapter01;

public class Java_helloWorld {
    public static void main(String[] args) {
        String username = "Youngzx";
        System.out.println(username);
        System.out.println("计算后的值为"+ (1-4));
        Cooking c1 = new Cooking();
        c1.name = "红烧肉";
        c1.time = "120min";
        c1.makeCooking();
    }
}

class Cooking {
    String name;
    String time;

    void makeCooking () {
        System.out.println("做"+name + "花费了" + time);
    }
}