import java.util.Scanner;

public class IdadeEmDias {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int value = in.nextInt();

        int ano = value / 365;

        value = value % 365;

        int meses = value / 30;

        value = value % 30;

        int dias = value;

        System.out.println(ano + " ano(s)");
        System.out.println(meses + " mes(es)");
        System.out.println(dias + " dia(s)");

    }

}
