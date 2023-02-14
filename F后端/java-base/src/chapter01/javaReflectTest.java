package chapter01;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class javaReflectTest {
    public static void main(String[] args) throws Exception {
        //使用反射登陆
        //得到反射class
        Class<Emp> empClass = Emp.class;
        //通过构造函数对象，构建反射对象
        Constructor<Emp> declaredConstructor = empClass.getDeclaredConstructor();
        Emp emp = declaredConstructor.newInstance();
        Field account = empClass.getField("account");
        Field pwd = empClass.getField("pwd");
        account.set(emp,"admin");
        pwd.set(emp,"admin");

        Method login = empClass.getMethod("login");
        login.invoke(emp);
    }
}

class Emp {
    public String account;
    public String pwd;
    public void login() {
        if("admin".equals(account) && "admin".equals(pwd)){
            System.out.println("登陆成功");
        }else {
            System.out.println("账号或密码错误");
        }
    }
}