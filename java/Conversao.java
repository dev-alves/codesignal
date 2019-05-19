import java.util.Scanner;

public class ShapeArea {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int value = in.nextInt();

        int horas = value / 3600;

        value = value % 3600;
        int minutos = value / 60;

        value = value % 60;
        int segundos = value;

        System.out.println(horas + ":" + minutos + ":" + segundos);

    }

}
