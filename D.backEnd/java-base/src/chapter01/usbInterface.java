package chapter01;

public class usbInterface {
    public static void main(String[] args) {
        Computer c = new Computer();
        Light l1 = new Light();
        c.usb1 = l1;
        Light l2 = new Light();
        c.usb2 = l2;
        c.supply();
    }
}
interface UInterface {

}
interface UsbSupply extends UInterface {
    public void supply();
}
interface UsbReceive extends UInterface  {
    public void receive();
}
class Computer implements UsbSupply{
    public UsbReceive usb1;
    public UsbReceive usb2;
    @Override
    public void supply() {
        System.out.println("电脑提供能源");
        usb1.receive();
        usb2.receive();
    }
}
class Light implements UsbReceive {
    @Override
    public void receive() {
        System.out.println("电灯接受供电");
    }
}