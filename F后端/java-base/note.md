## 1、数据类型
- 基本数据类型
  - 数值
    - 整数：byte，short，int，long
    - 浮点类型：float，double
  - 字符
    - char
  - 布尔
    - boolean
- 引用数据类型
  - 类，String
  - 接口
  - 数组
  - 枚举
  - 特殊类型值：null
## 2、数据类型转换
- 隐式类型转换（小转大）
  - byte->short->int->long->float->double
- 强制转换（大转小）
## 3、计算
- 计算是有类型的，哪个类型大就取谁：1.0/2（double/int=double）
- 如果是复合赋值运算符数据类型不会改变
```java
int i = 1;
i = i + 1;

byte b1 = 10;
b1 += 20;//正确
b1 = b1 + 20;//错误。byte不能赋值给int
```
- &与运算，｜或运算
- &&短路与运算，||短路或运算
## 4、静态方法
- 静态方法/属性不用实例去调用，可以直接调用
- 有类就有静态方法了
  - 变量是在栈中
  - 对象是在堆中
- 静态代码块，类的信息加载完成后会自动调用静态代码块

## 5、包
- java中存在不同包的相同名称的类，可以用包名进行区分/import
- new java.util.Date() / import

## 6、构造方法

## 7、继承，封装，多态
- 继承
  - 关键字extends
  - super.属性，父类的属性，this.属性，自己的属性
  - 构造方法
    - 先有对象，才有构造方法
    - 子类的构造方法会默认调用父类的无参构造:super()
    - 如果父类的构造方法被修改为有参数,需要手动调用
- 多态
  - 一个对象在不同场景展现的不同形态和状态
  - 对对象的使用场景进行约束 
  - 一个对象能使用什么方法/属性，取决于引用变量的"类型"(看左边)
  - 一个对象的方法具体使用是要看具体的"对象"的(看右边 )
  - 具体的属性使用是不需要看对象的，属性在哪里声明在哪里使用
  ```java
  class Test {
    public static void main(String[] args) {
      Person p1 = new Man();
      p1.sayMan();//错误
    }
  }
  class Person {
      
  }
  class Man extends Person {
      void sayMan(){
        System.out.println("i am a man");
      }
  }
  ```
## 8、重载
- 方法名字相同，参数(类型，个数)/返回值不同。
## 9、重写
- 父类方法其实主要体现共同性，无法在特殊场合下使用
- 如果子类对象需要在特殊场合下使用，就需要重写方法的逻辑
- 并不是说父类的方法会被覆盖掉，只是在
- 当前场合不使用，如果使用super关键字还是可以访问的
## 10、访问权限
- private：私有，同一个类中可以使用
- default：默认权限，不设定权限jvm会提供默认权限，包权限
- protected：受保护的权限，子类可以访问
- public：公共的，任意使用
## 11、内部类
- 内部类：类中声明的类
- java不允许外部类使用private修饰
- 因为内部类可以看作是外部类的属性，所以需要构建外部类对象才可以使用 
- `OuterClass.InnerClass innerClass = outer.new InnerClass()`
## 12、单例模式
- 频繁创建对象内存开销大，使用单例模式
```java
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
```
## 13、final
- java提供了一种语法可以在数据初始化后不被修改，使用关键字final
- final可以修饰变量，变量的值一旦初始化后无法修改
- finale可以修饰属性，那么jvm无法自动进行初始化，需要自己进行初始化，属性值不能发生改变
- final可以修饰`方法`,这个方法不能被子类重谢
- final可以修饰`类`,这样没有子类
- final不可以修饰`构造方法`
- final可以修改方法的参数，一旦修饰，参数就无法修改
## 14、抽象类/抽象方法
- 类的概念很抽象的时候，需要抽象类/抽象方法
- 抽象方法：只有声明没有实现`abstract 返回值类型 方法名`
- 抽象类：有/没有 抽象方法
```java
public class abstract01 {
    public static void main(String[] args) {
        Chinese2 c1 = new Chinese2();
        c1.eat();
    }
}

abstract class People{
    public abstract void  eat();
}
 
class Chinese2 extends People {
    //抽象类无法直接构建对象，但是可以通过子类间接构建对象
    public void eat(){
        System.out.println("中国人用筷子吃饭");
    }
}
```
## 15、接口
- 接口简单理解为规则
- 基本语法，`interface { //规则属性//规则行为 }`
- 接口属性应该是静态的
- 接口方法应该是抽象的
- 类需要实现接口，而且可以实现多个接口
## 16、枚举类：enum
- Java 枚举是一个特殊的类，一般表示一组常量，比如一年的 4 个季节，一个年的 12 个月份，一个星期的 7 天，方向有东南西北等
- Java 枚举类使用 enum 关键字来定义，各个常量使用逗号 , 来分割。
- 枚举类不能创建对象，是在枚举类内部自己创建的
```java
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
```
## 17、匿名类
- 某些场合类的名字不重要，匿名类
- 匿名类直接实现抽象类，不用创建类去实现它
```java
public class nimingclass {
    public static void main(String[] args) {
        SayHello sayHello = new SayHello();
        sayHello.SayHello(new Person11(){
            public String name(){
                return "Youngzx";
            }
        });
    }
}

abstract class Person11 {
    public abstract String name();
}

class SayHello {
    public void SayHello(Person11 person11){
        System.out.println("hello" + person11.name());
    }
}

```
## 18、bean规范
- 数据模型
- Bean类的设计规范
  - 类要求必须含有无参，公共的set，get方法
## 19、作用域
- 子类的静态方法中是不允许用super去调用父类的属性方法的
- 因为静态方法不一定有对象，在类建立的时候就有了静态方法
- 如果仍让需要父类的属性或方法可以用`父类名.父类方法`
## 20、常用类和对象
#### 20.0、Object
- 可以重写toString方法
- hashCode()获取对象的内存地址
- equals()判断两个对象是否相等
- getClass()获取对象的类型信息
#### 20.1、数组
- 一种连续存储的数据结构
```java
public class javaArray {
    public static void main(String[] args) {
        String[] names = new String[3];
        for (int i = 0; i < names.length; i++) {
            names[i] = "Youngzx" + i;
        }
        System.out.println("names"+names[0]+names[1]+names[2]);//namesYoungzx0Youngzx1Youngzx2
    }
}
```
- 二维数组
```java
String[][] names = {{1,2,3},{2,3,4}};
```
#### 20.2、字符串
#### 20.3、包装类
#### 20.4、日期类
#### 20.5、日历类
#### 20.6、打印日历
#### 20.7、工具类
#### 20.8、比较
## 21、异常
## 22、集合
## 23、IO
## 24、线程
## 25、反射