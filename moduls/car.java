package javafiles;

public class car implements Control, Music, Light {

    public  void race() {
        System.out.println("i am increasing speed");
    }

    @Override
    public void breake() {
        System.out.println("i am break");
    }

    @Override
    public void clutch() {
        System.out.println("i am clutch");
    }

    @Override
    public void play() {
        System.out.println("i am in playing music");
    }

    @Override
    public void pause() {
        System.out.println("i am pause music");
    }

    @Override
    public void head() {
        System.out.println("i am headlight");
    }


  public void back() {
        System.out.println("i am back light");
    }

    @Override
    public void change() {
        System.out.println("i can change light");
    }
    public static void main(String[] args) {
        car swift=new car();
        swift.back();
        System.out.println(Music.a);
    }
}


