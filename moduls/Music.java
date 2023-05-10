package javafiles;

public interface Music {
static int  a=56;
   void play();
   void pause();
   void change();
   default void chance(){
       System.out.println("final things");
   }
}

interface Control{
    void race();
    void breake();
    void clutch();
}
interface Light{
    void head();
    void back();
    void change();

}