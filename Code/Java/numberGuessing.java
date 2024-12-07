
import java.util.Scanner;

public class numberGuessing {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int number=(int)(Math.random()*100);
        int userNumber=0;

        do{
            System.out.println("Guess The number (1-100):");
            userNumber=sc.nextInt();

            if(userNumber==number){
                System.out.println("Correct Number!");
                break;
            }
            else if(userNumber>number){
                System.out.println("Your number is too large");
            }
            else{
                System.out.println("Your number is too small");
            }
        }while (userNumber>=0);

        System.out.println("The number was:");
        System.out.println(number);
            
        
    }
    
}
