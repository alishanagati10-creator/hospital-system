import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String input = sc.nextLine();   // read full string

        String reversed = new StringBuilder(input).reverse().toString();

        System.out.println(reversed);
    }
}