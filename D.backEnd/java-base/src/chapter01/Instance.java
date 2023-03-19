package chapter01;

public class Instance {
    public static void main(String[] args) {
        User instance1 = User.getInstance();
        User instance2 = User.getInstance();
        User instance3 = User.getInstance();
        System.out.println(instance3 == instance1);
        System.out.println(instance1.equals(instance2));
    }
}

class User{
    private static User user = null;
    private String name;
    public static User getInstance () {
        if(user == null){
            user = new User();
        }
        return user;
    }
}