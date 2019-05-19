import java.util.Scanner;

public class Jutsu {
    public static void main(String[] args) {
        Scanner read = new Scanner(System.in);
        while (read.hasNext()) {
            int clones = read.nextInt();
            System.out.println((int) Math.round(Math.log(clones) / Math.log(2)));
        }
    }
}
