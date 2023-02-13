package chapter01;

public class javaEnum {
    public static void main(String[] args) {
        System.out.println(City.BEIJING.name);
        System.out.println(City.SHANGHAI.name);
    }
}

enum City {
    BEIJING("北京",10001),SHANGHAI("上海",10002);
    public String name;
    public int code;
    City(String name,int code) {
        this.code = code;
        this.name = name;
    }
}