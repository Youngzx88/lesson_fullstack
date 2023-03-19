package chapter01;

public class javaArray {
    public static void main(String[] args) {
        String[] names = new String[3];
        for (int i = 0; i < names.length; i++) {
            names[i] = "Youngzx" + i;
        }
        System.out.println("names"+names[0]+names[1]+names[2]);//namesYoungzx0Youngzx1Youngzx2
    }
}
