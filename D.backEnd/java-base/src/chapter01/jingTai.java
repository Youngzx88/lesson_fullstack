package chapter01;


import java.util.Date;

public class jingTai {
    public static void main(String[] args) {
        Chinese c1 = new Chinese();
//        Chinese c2 = null;
        c1.name="heihei";
//        c2.name="??";
        System.out.println(c1.name);
        System.out.println(Chinese.country);
        Date d = new Date();
    }
}

class Chinese {
    String name;
    //静态方法/属性不用实例去调用，可以直接调用
    static String country = "中国";

    static  {
        //静态代码块，类的信息加载完成后会自动调用静态代码块
        System.out.println("静态代码块");
    }
}

