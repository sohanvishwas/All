
# for loop

# for i in range(5): #(by default(0),stop)
#     print(i)       #(i+1)
    
# print("*****")

# for i in range(1,5): #(start,stop)
#     print(i)

# print("****")

# for i in range(1,10,2): #(strat,stop,step)
#     print(i)
    
# print("****")


# name="python"
# for i in name:
#     print(i)

# colors=["red","green","blue","white"]
# for i in colors:
#     print(i)

# number=[1,2,3,4,5]
# for i in number:
#     print(i)
# #OR
# colors=["red","green","blue","white"]
# for i in colors:
#     print(i)
#     for j in i:     #Nasted for loop
#         print(j)




#while loop

# i =1
# while(i<10): 
#     print(i)
#     i+=1

# i=1
# while(i<=4):
#     i=int(input("Enter the Number:"))
#     print(i) 
#     i+=1
# print("Done")

# i=1
# while(i<=3):
#     print(i)
#     i+=1
# else:
#     print("Done")


# i=1
# while(i<=3):
#     if(i%2==0):
#         print("Even") 
#     else:
#         print("Odd")
#     i+=1
# else:
#     print("N")


# i = 1
# while i < 6:
#   print(i)
#   if i == 3:
#     break
#   i += 1


# i = 0
# while i < 6:
#   i += 1
#   if i == 3:
#     continue
#   print(i)




# Flowchart New Database
"""Question-23...Take the number N and the name from the user as inputs, and print the name N times."""

# N=int(input("Enter the number:"))
# name=input("Enter the name:")
# i=1
# while(i<=N):
#     print(name)
#     i+=1

"""Question-24...Imagine you're on a fun journey of exploring numbers! You're interested in finding out all the 
                even numbers up to a certain value. Even numbers are those that are divisible by 2 without leaving 
                a remainder. Your task is to print all the even numbers from 1 up to the number you choose.

               Take a number N from the user as input, and print even numbers up to N.
              
               Tips:
               1. Remember, even numbers are those that are divisible by 2 without leaving a remainder.
               2. Pay attention to printing the numbers in the correct format.
               3. Ensure accuracy in the range of numbers displayed.  """

# N=int(input("Enter the number:"))
# i=1
# while(i<N):
#     if(i%2==0):
#         print(i)
#     i+=1


"""Question-25...Imagine you're on an adventurous quest to unravel the mysteries of numbers! Today, your quest
                involves exploring the realm of odd numbers. Odd numbers are those that are not divisible by 2, 
                leaving a remainder of 1. Your task is to calculate the sum of all the odd numbers up to a 
                certain value chosen by you.
               
                Write a program to print the sum of odd numbers up to N.
                
                Tips:
                1. Remember, odd numbers are those that are not divisible by 2, leaving a remainder of 1.
                2. Pay attention to calculating the sum accurately.
                3. Ensure the correctness of the range of numbers included in the sum. """

# N=int(input("Enter the number:"))
# sum=0
# i=1
# while(i<N):
#     if(i%2!=0):
#         sum+=i
#     i+=1
# print(sum)


"""Question-26...Write a program to take two integers M, and N and print the sum of numbers in the range M to N."""

# M=int(input("Enter the first integer:"))
# N=int(input("Enter the second integer:"))
# sum=0
# while(M<=N):
#     sum+=M
#     M+=1
# print(sum)


"""Question-27...Write a program to calculate the sum of the following series where N is input from the user. 
                1 + 1/2 + 1/3 + 1/4 + 1/5+…………1/N   """

# N=int(input("Enter the value of N:"))
# sum=0
# i=1
# while(i<=N):
#     sum+=1/i
#     i+=1
# print(sum)


"""Question-28...Write a program to take a number from the user and print the number of digits in the given 
                number. (can you do it without loop O(1) )   """

# num=int(input("Enter the number:"))
# count=0
# while(num>0):
#     count+=1
#     num=num//10
# print(count)

"""Question-29...Write a program to take a number from the user and print the sum of the digits of the given number."""

# num=int(input("Enter the number:"))
# remainder=0
# sum=0
# while(num>0):
#     remainder=num%10
#     sum+=remainder
#     num=num//10
# print(sum)


"""Question-31...Write a program that takes a number from the user and prints the number that is formed by 
                reversing the digits of the number. """

# num=int(input("Enter the number:"))
# remainder=0
# revers=0
# while(num>0):
#     remainder=num%10
#     revers=revers*10+remainder
#     num=num//10
# print(revers)

"""Question-34...Write a program to take a number from the user and print all the factors of
                the given number.A factor is a number that can divide another number evenly
                without leaving a remainder.  """

# num=int(input("Enter the number:"))
# i=1
# while(i<=num):
#     if(num%i==0):
#         print(i)
#     i+=1


"""Question-35...Write a program to check if a number is a special type of number called a 'prime number'. A prime 
                number is a number that is only divisible by 1 and itself, and it doesn't have any other factors.
                
                For example, the number 7 is a prime number because it can only be divided by 1 and 7 without 
                leaving a remainder. However,the number 12 is not a prime number because it has other factors, 
                such as 2, 3, 4, and 6, in addition to 1 and 12. (Take the number from the user)? Learn sieve 
                algorithm  """

# number=int(input("Enter the Number:"))
# count=0
# i=1
# while(i<=number):
#     if(number%i==0):
#         count+=1
#     i+=1

# if(count==2):
#     print("Yes")
# else:
#     print("No")


"""Question-37...Write a program to take a number from the user and then determine if that number is a special 
                type of number called a 'perfect number'.
                A perfect number is a number where the sum of all its factors (excluding the number itself) is
                equal to the number itself. Print Yes if the number is a perfect number else print No. """

# number=int(input("Enter the Number:"))
# sum=0
# i=1
# while(i<number):
#     if(number%i==0):
#         sum+=i
#     i+=1

# if(number==sum):
#     print("Yes")
# else:
#     print("No")





n=int(input("Enter the value of n:"))
a=0
b=1
c=0
while(n>0):
    print(c)
    a=b
    b=c
    c=a+b  
    n=n-1