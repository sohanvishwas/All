
import java.util.Scanner;
import java.util.Arrays;

public class Hello {
    public static void main(String[] args) {   //psvm
        // System.out.println("Hello World");     //sout
        // System.out.println("Hello Java");      //sysout   

        // Arrays
        // int[] marks=new int[4];
        // marks[0]=97;
        // marks[1]=98;
        // marks[2]=95;
        // marks[3]=92;

        // System.out.println(marks.length);

        // System.out.println(marks[0]);
        // Arrays.sort(marks);
        // System.out.println(marks[0]);


        // int[] marks={97, 98, 95};
        // System.out.println(marks[0]);

        // int[][] finalMarks={{97, 98, 95}, {95, 94, 92}};
        // System.out.println(finalMarks[0][0]);

        
        //casting
        // double price=100.00;
        // double finalPrice=price+18;
        // System.out.println(finalPrice);

        // int p=100;
        // int fp=p+(int)18.99;
        // System.out.println(fp);


        //constants
        // int age=30;
        // age=31;
        // age=32;

        // final float PI=3.14F;

        
        //Operators

        // How to take input
        // Scanner sc=new Scanner(System.in);
        // System.out.println("Enter Your Age: ");
        // int age=sc.nextInt();
        // System.out.println(age);

        // System.out.println("Enter Your Age: ");
        // float age=sc.nextFloat();
        // System.out.println(age);

        // System.out.println("Enter Your Name: ");
        // String name=sc.next();
        // System.out.println(name);

        // System.out.println("Enter Your Sentence: ");
        // String sentence=sc.nextLine();
        // System.out.println(sentence);


        // if-else
        // Scanner sc=new Scanner(System.in);
        // System.out.println("Enter the Number: ");
        // int number=sc.nextInt();

        // if(number==0){
        //     System.out.println("Zero");
        // }
        // else if(number>0){
        //     System.out.println("Positive");
        // }
        // else{
        //     System.out.println("Negative");
        // }


        // Switch
        // Scanner sc=new Scanner(System.in);
        // System.out.println("Enter the Day: ");
        // int day=sc.nextInt();

        // switch (day) {
        //     case 1:
        //         System.out.println("Monday");
        //         break;
        //     case 2:
        //         System.out.println("Tuesday");
        //         break;
        //     case 3:
        //         System.out.println("Wednesday");
        //         break;
        //     case 4:
        //         System.out.println("Thursday");
        //         break;
        //     case 5:
        //         System.out.println("Friday");
        //         break;
        //     case 6:
        //         System.out.println("Saturday");
        //         break;
        //     case 7:
        //         System.out.println("Sunday");
        //         break;
        //     default:
        //         System.out.println("Invalid");
        // }
    

        // Loop
        // for(int i=1;i<=10;i++){
        //     System.out.println(i);
        // }

        // int i=1;
        // while (i<=10) {
        //     System.out.println(i);
        //     i++;
        // }

        // int i=1;
        // do{
        //     System.out.println(i);
        //     i++;
        // }while(i<=10);

        // break & continue
        // int i=1;
        // while(i<=10){
        //     if(i==3){
        //         i++;
        //         continue;  
        //     }
        //     else if(i==5){
        //         break;
        //     }else{
        //         System.out.println(i);
        //         i++;
        //     }
            
        // }


        // try-catch in exception handling
        // int[] marks={97, 98, 95};
        // try{
        //     System.out.println(marks[5]);
        // } catch(Exception exception){
        //     //do something after catching
        // }
        // System.out.println("The name is Alex");

        
        //Function/Methods
        

    }

    public static void printJava(){
        System.out.println("Hello Java");
    }
    public static void printName(String name){
        System.out.println(name);
    }
    public static void printSum(int a, int b){
        int sum=a+b;
        System.out.println(sum);
    }
    public static void Hello(String[] args){
        //Methods
        printJava();
        printName("Alex");
        printSum(1, 2);
    }
}

1
121
12321