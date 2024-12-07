

// Question- Find  freequency
// #include<iostream>
// using namespace std;
// int main(){
// //    int n=11;
// //    int arr[]={2, 3, 2, 4, 3, 2, 4, 5, 0, 0, 0};
//     cin<<"Enter the array length:";
//     int maximum=arr[0];
//     for(int i=1; i<n; i++){
//         if(arr[i]>maximum){
//             maximum=arr[i];
//         }
//     }

//     int a[maximum+1];
//     fill(a,a+maximum+1, 0);
//     for(int i=0;i<n;i++){
//         a[arr[i]]++;
//     }
//     for(int i=0; i<maximum+1; i++){
//         if(a[i]>0){
//         cout<<i<<" = "<<a[i]<<endl;
//         }
//     }
// }

#include <iostream>
using namespace std;

int main()
{
    int n;
    cin>>n;
    int arr[n][n];
    for(int i=0; i<n; i++)
    {
        for(int j=0; j<n; j++)
        {
            cin>>arr[i][j];
        }
    }
    int i=0, sum=0, ans=0;
    for(int j=0; j<n; j++)
    {
        ans+=arr[i][j];
    }
    for(int i=1; i<n; i++)
    {
        for(int j=0; j<n; j++)
        {
            sum+=arr[i][j];
        }
        if(sum!=ans)
        {
           cout<<" Not a magic square ";
           return 0;
        }
        sum=0;
    }
    for(int j=0; j<n; j++)
    {
        for(int i=0; i<n; i++)
        {
            sum+=arr[i][j];
        }
        if(sum!=ans)
        {
           cout<<" Not a magic square ";
           return 0;
        }
        sum=0;
    }
    for(int i=0; i<n; i++)
    {
        for(int j=0; j<n; j++)
        {
            if(i==j)
            {
                sum+=arr[i][j];
            }
        }
    }
    if(sum!=ans)
        {
           cout<<" Not a magic square ";
           return 0;
        }
        sum=0;
        for(int i=0; i<n; i++)
    {
        for(int j=0; j<n; j++)
        {
            if(i+j==n-1)
            {
                sum+=arr[i][j];
            }
        }
    }
     if(sum!=ans)
        {
           cout<<" Not a magic square ";
           return 0;
        }
        cout<<"It is a magic square"<<endl;
    
}