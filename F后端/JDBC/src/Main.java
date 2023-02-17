import java.sql.*;

public class Main {
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        //加载驱动
        Class.forName("com.mysql.jdbc.Driver");//固定写法
        //用户信息和url
        String url = "jdbc:mysql://localhost:3306/myData?useUnicode=true&characterEncoding=utf8&useSSL=true&serverTimezone=GMT%2B8";
        String username = "root";
        String password = "12345678";
        //连接成功数据库对象
        Connection connection = DriverManager.getConnection(url, username, password);
        Statement statement = connection.createStatement();//statement执行sql
        //执行sql
        String sql = "SELECT * FROM result";
        ResultSet resultSet = statement.executeQuery(sql);//返回结果集
        while(resultSet.next()){
            System.out.println("studentNo" + resultSet.getObject("studentNo"));
            System.out.println("subjectNo" + resultSet.getObject("studentNo"));
            System.out.println("examdate" + resultSet.getObject("examdate"));
            System.out.println("studentresult" + resultSet.getObject("studentresult"));
            System.out.println("====== ");
        }
        //释放sql
        resultSet.close();
        statement.close();
        connection.close();
    }
}