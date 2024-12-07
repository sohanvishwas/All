// 1
// 121
// 12321
// 1234321
// 123454321


public class main {
    public static void main(String[] args) {
        // int n=5;
        // int p=1;
        // for(int i=1;i<=n;i++){
        //     int x=(int)Math.pow(p,2);
        //     System.out.println(x);  
        //     p=p*10+1;
        // }

        // prime number
        int n=10;
        int count=0;
        int prime=0;
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                if(i%j==0){
                    count++;
                }
            }
            if(count==2){
                count=0;
                prime++;
            }
            else{
                count=0;
            }
        }
        System.out.println(prime);
    }  
}
