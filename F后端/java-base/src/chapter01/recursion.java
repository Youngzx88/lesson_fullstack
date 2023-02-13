package chapter01;

public class recursion {
    static int fibonaqie(int i){
        if(i == 1){
            return 1;
        }else
        return i + fibonaqie(i - 2);
    }
    public static void main(String[] args) {
        System.out.println(fibonaqie(9));
    }
}
