



# Flowchart New Database
"""Question-10...Write a program to take two numbers from the user and determine the greater of those two given numbers."""

# a=int(input("Enter the first number:"))
# b=int(input("Enter the second number:"))

# if (a>b):
#     if()
#     print(a)
# else:
#     print(b)

"""Question-11...Write a program to take a number from the user and print that number as Odd or Even."""

# num=int(input("Enter the number:"))

# if(num%2==0):
#     print("Even")
# else:
#     print("Odd")


"""Question-12...Write a program to take a number from the user and output whether that number is negative, 
                positive or zero. """

# num=int(input("Enter the number:"))

# if(num==0):
#     print("Zero")
# elif(num>0):
#     print("Positive")
# else:
#     print("Negative")


"""Question-13...Write a program to take an integer as input and print the smallest positive integer that is a 
                multiple of both 2 and n. """

# num=int(input("Enter the number:"))

# if(num%2==0):
#     print(num)
# else:
#     print(num*2)

"""Question-14...Write a program to take three numbers from the user and print the greater number of the three 
                 numbers. (Assume all three numbers are distinct)  """


# a=int(input("Enter the first number:"))
# b=int(input("Enter the second number:"))
# c=int(input("Enter the third number:"))
# max=0

# if(a>b):
#     max=a
# else:
#     max=b

# if(max>c):
#     max=max
# else:
#     max=c

# print(max)



"""Question-15...Write a program to take four numbers from the user and print the greater number of the four 
                 numbers. (assume all the numbers are distinct).  """

# a=int(input("Enter the first number:"))
# b=int(input("Enter the second number:"))
# c=int(input("Enter the third number:"))
# d=int(input("Enter the fourth number:"))
# max=0

# if(a>b):
#     max=a
# else:
#     max=b

# if(max>c):
#     max=max
# else:
#     max=c

# if(max>d):
#     max=max
# else:
#     max=d

# print(max)


"""Question-16...Imagine you and your friends are exploring the concept of leap years. A leap year is a year that 
                is evenly divisible by 4, except for years that are divisible by 100 but not divisible by 400.
                In simpler terms, it's a special year with an extra day in February (February 29th). You're 
                curious to know whether a particular year is a leap year or not.

                Write a program to take a year from the user and output whether a given year is a leap year or not.
                Note: A year is said to be a leap year if it is either divisible by 400 or it should be divisible 
                by 4 and not by 100.
               
                Tips:
                1. Remember, a leap year occurs every 4 years, except for years that are divisible by 100 but not by 400.
                2. Pay attention to the conditions for determining a leap year.
                3. Understand the significance of leap years in adjusting the calendar.  """

# year=int(input("Enter the year:"))

# if(year%400==0):
#     print("Yes")
# elif(year%4==0 and year%100!=0):
#     print("Yes")
# else:
#     print("No")

"""Question-17...Write a program to take 3 numbers from the user and output the second max of 3 numbers.
                (First, do it in the normal way then do it by using 3 comparisons)  """

# a=int(input("Enter the first number:"))
# b=int(input("Enter the second number:"))
# c=int(input("Enter the third number:"))
# max=0
# smax=0

# if(a>b):
#     max=a
#     smax=b
# else:
#     max=b
#     smax=a

# if(max>c):
#     if(smax>c):
#         smax=smax
#     else:
#         smax=c
# else:
#     smax=max
#     max=c

# print(smax)



"""Question-18...Imagine you're working as a payroll manager in a company, and your job is to calculate the gross 
                salary of employees based on their basic salary and certain allowances. The gross salary includes 
                the basic salary along with House Rent Allowance (HRA) and Dearness Allowance (DA), which vary 
                based on the employee's basic salary range.

                Write a program to take the basic salary of an employee and calculate its Gross salary according to 
                the following: (Gross salary is the sum of basic salary, HRA, and DRA)
                Basic Salary <= 10000 : HRA = 20%, DA = 80%
                Basic Salary <= 20000 : HRA = 25%, DA = 90%
                Basic Salary > 20000 : HRA = 30%, DA = 95%
                
                Tips:
                1. Understand the different allowance percentages based on the employee's basic salary range.
                2. Pay attention to how the gross salary is calculated by adding the basic salary, HRA, and DA.
                3. Ensure accuracy in calculations and handle different basic salary scenarios effectively. """

# Basic_Salary=int(input("Enter the Basic Salary:"))
# HRA=0
# DA=0
# Gross_Salary=0

# if (Basic_Salary<=10000):
#     HRA=Basic_Salary*20/100
#     DA=Basic_Salary*80/100
#     Gross_Salary=Basic_Salary+HRA+DA
#     print(Gross_Salary)
# elif(Basic_Salary<=20000):  
#     HRA=Basic_Salary*25/100
#     DA=Basic_Salary*90/100
#     Gross_Salary=Basic_Salary+HRA+DA
#     print(Gross_Salary)
# else:
#     HRA=Basic_Salary*30/100
#     DA=Basic_Salary*95/100
#     Gross_Salary=Basic_Salary+HRA+DA
#     print(Gross_Salary)



"""Question-19...Imagine you're responsible for calculating electricity bills for households. Each household 
                consumes electricity, and the bill varies based on the number of units consumed. The bill 
                calculation involves different rates for different ranges of units consumed,along with an 
                additional surcharge.

                Write a program to input electricity unit charges and calculate the total electricity bill 
                according to the given condition:
                For the first 50 units Rs. 0.50/unit
                For the next 100 units Rs. 0.75/unit
                For the next 100 units Rs. 1.20/unit
                For units above 250 Rs. 1.50/unit
                An additional surcharge of 20% is added to the bill
                
                Tips:
                1. Understand how the bill amount varies for different ranges of units consumed.
                2. Pay attention to adding the surcharge correctly to the total bill amount.
                3. Ensure accuracy in calculations and handle different scenarios effectively.   """


# Electricity_units=int(input("Enter the Electricity_units:"))
# Unit_charges=0
# Additional_charges=0
# Total_bill=0

# if(Electricity_units<=50):
#     Unit_charges=Electricity_units*0.50
#     Additional_charges=Unit_charges*20/100
#     Total_bill=Unit_charges+Additional_charges
#     print(Total_bill)
# elif(Electricity_units<=150):
#     Unit_charges=50*0.50 +(Electricity_units -50)*0.75
#     Additional_charges=Unit_charges*20/100
#     Total_bill=Unit_charges+Additional_charge
#     print(Total_bill)
# elif(Electricity_units<=250):
#     Unit_charges=50*0.50+100*0.75+(Electricity_units-150)*1.20
#     Additional_charges=Unit_charges*20/100
#     Total_bill=Unit_charges+Additional_charges
#     print(Total_bill)
# else:
#     Unit_charges=50*0.50+100*0.75+100*1.20+(Electricity_units-250)*1.50
#     Additional_charges=Unit_charges*20/100
#     Total_bill=Unit_charges+Additional_charges
#     print(Total_bill)


"""Question-20...Write a program to take 4 numbers from the user and output the third max of these 4 numbers."""

# a=int(input("Enter the first number:"))
# b=int(input("Enter the second number:"))
# c=int(input("Enter the third number:"))
# d=int(input("Enter the fourth number:"))
# max=0
# smax=0
# tmax=0

# if(a>b):
#     max=a
#     smax=b
# else:
#     max=b
#     smax=a

# if(max>c):
#     if(smax>c):
#         smax=smax
#         tmax=c
#     else:
#         tmax=smax
#         smax=c
# else:
#     tmax=smax
#     smax=max
#     max=c

# if(max>d):
#     if(smax>d):
#         if(tmax>d):
#             tmax=tmax
#         else:
#             tmax=d
#     else:
#         tmax=smax
#         smax=d
# else:
#     tmax=smax
#     smax=max
#     max=d

# print(tmax)


"""Question-21...Write a program to take 5 numbers from the user and print the frequency of every number."""


a =int(input("Enter the value of a:"))
b =int(input("Enter the value of b:"))
c =int(input("Enter the value of c:"))
d =int(input("Enter the value of d:"))
e =int(input("Enter the value of e:"))
fr1=1
fr2=1
fr3=1
fr4=1
fr5=1


if(a==b):
    fr1+=1
    b=0
    if(a==c):
        fr1+=1
        c=0
        if(a==d):
            fr1+=1
            d=0
            if(a==e):
                fr1+=1
                e=0
        elif(a==e):
            fr1+=1
            e=0
    elif(a==d):
        fr1+=1
        d=0
        if(a==e):
            fr1+=1
            e=0
    elif(a==e):
        fr1+=1
        e=0
elif(a==c):
    fr1+=1
    c=0
    if(a==d):
        fr1+=1
        d=0
        if(a==e):
            fr1+=1
            e=0
    elif(a==e):
        fr1+=1
        e=0
elif(a==d):
    fr1+=1
    d=0
    if(a==e):
        fr1+=1
        e=0
elif(a==e):
    fr1+=1
    e=0
    print("a=",fr1)



if(b!=0):
    if(b==c):
        fr2+=1
        c=0
        if(b==d):
            fr2+=1
            d=0
            if(b==e):
                fr2+=1
                e=0
        elif(b==e):
            fr2+=1
            e=0
    elif(b==d):
        fr2+=1
        d=0
        if(b==e):
            fr2+=1
            e=0
elif(b==e):
    fr2+=1
    e=0
    print("b=",fr2)



if(c!=0):
    if(c==d):
        fr3+=1
        d=0
        if(c==e):
            fr3+=1
            e=0
    elif(c==e):
        fr3+=1
        e=0
    print("c=",fr3)


if(d!=0):
    if(d==e):
        fr4+=1
        e=0
    print("d=",fr4)


if(e!=0):
    print("e=",fr5)
