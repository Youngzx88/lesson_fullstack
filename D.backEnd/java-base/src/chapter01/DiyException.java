package chapter01;

public class DiyException {
    public static void main(String[] args) {
        String name = "admin";
        String pwd = "admin";

        try{
            Login(name,pwd);
        }catch (Exception e){
            System.out.println(e);
        }

    }
    public static void Login(String name,String pwd) {
        if(!"admin".equals(name)){
            throw new AccountException("账户名不正确");
        }
        if(!"admin".equals(pwd)){
            throw new PwdException("密码不正确");
        }
        System.out.println("登陆成功");
    }
}

class AccountException extends RuntimeException {
    public AccountException(String msg) {
        super(msg);
    }
}

class PwdException extends RuntimeException {
    public PwdException(String msg) {
        super(msg);
    }
}
