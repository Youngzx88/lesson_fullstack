package chapter01;

public class xiancheng {
    public static void main(String[] args) throws InterruptedException {
        System.out.println(Thread.currentThread().getName());//main
        MyThread thread = new MyThread();
        thread.start();
        thread.join();
    }
}

class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("myThread" + Thread.currentThread().getName());//myThreadThread-0
    }
}