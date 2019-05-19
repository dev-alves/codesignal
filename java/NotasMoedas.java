import java.util.Scanner;

public class NotasMoedas {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        float value = in.nextFloat();

        int cem = (int) value / 100;
        value = value % 100;

        int cinquenta = (int) value / 50;
        value = value % 50;

        int vinte = (int) value / 20;
        value = value % 20;

        int dez = (int) value / 10;
        value = value % 10;

        int cinco = (int) value / 5;
        value = value % 5;

        int dois = (int) value / 2;
        value = value % 2;

        value = value * 100;

        int umReal = (int) value / 100;
        value = value % 100;

        int cinquentaCentavos = (int) value / 50;
        value = value % 50;

        int vinteCincoCentavos = (int) value / 25;
        value = value % 25;

        int dezCentavos = (int) value / 10;
        value = value % 10;

        int cincoCentavos = (int) value / 5;
        value = value % 5;

        int umCentavo = (int) Math.round(value);

        System.out.println("NOTAS:");
        System.out.println(cem + " nota(s) de R$ 100.00");
        System.out.println(cinquenta + " nota(s) de R$ 50.00");
        System.out.println(vinte + " nota(s) de R$ 20.00");
        System.out.println(dez + " nota(s) de R$ 10.00");
        System.out.println(cinco + " nota(s) de R$ 5.00");
        System.out.println(dois + " nota(s) de R$ 2.00");
        System.out.println("MOEDAS:");
        System.out.println(umReal + " moeda(s) de R$ 1.00");
        System.out.println(cinquentaCentavos + " moeda(s) de R$ 0.50");
        System.out.println(vinteCincoCentavos + " moeda(s) de R$ 0.25");
        System.out.println(dezCentavos + " moeda(s) de R$ 0.10");
        System.out.println(cincoCentavos + " moeda(s) de R$ 0.05");
        System.out.println(umCentavo + " moeda(s) de R$ 0.01");

    }

}
