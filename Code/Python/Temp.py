print("Hello World")

# str=input("enter the string:")

# max=0
# max_el=0
# min=2^32
# min_el=0

# for i in range(str.length):
#     fr=0
#     el=str[i]
#     fr=str.count(str[i])

#     if(max>fr):
#         max=max
#         max_el=el
#     else:
#         max=fr
#         max_el=el

#     if(min<fr):
#         min=min
#         min_el=el
#     else:
#         min=fr
#         min_el=el

# print(max)
# print(min)


# def cal_sum(a,b):
#     sum=a+b
#     print(sum)
#     return sum

# cal_sum(2,2)

# cal_sum(5,3)

# cal_sum(10,2)

# def hello():
#     print("hello")

# hello()


# a,b,c=map(int,input("Enter the value of a,b,c sperated by space:").split())

# print (a,b,c)


# i=1
# while(i<10):
#     if(i==5):
#         exit()
#     print(i)
#     i+=1

# print()

# i=0
# while True:
#     # print("**")
#     i+=1
#     print(i)
#     if(i==5):
        

# print(5)

# i=1
# while(i<10):
#     if(i==5):
#         break
#     print(i)
#     i+=1
# print("**")

# i=1
# while(i<10):
#     if(i==5):
#         exit()
#     print(i)
#     i+=1
# print("**")

# print("**")

# i=0
# while i<6:
#     i+=1
#     if i==3:
#         continue
#     print(i)

# i=1
# while(i<10):
#     print(i,end="")
#     i+=1


# for i in range(1,10):
#     print(i)
#     os.system("clear")


# import os,time
# print("welcome")
# print("To")
# print("replit")

# time.sleep(1)
# os.system("clear")

# username=input("Username:")


# from replit import audio
# def play():
#     source=audio.play_file('audio.wav')
#     while True:
#         input()

"""Question-42...Write a program to print the frist 'n' Fibonacci numbers.Take N from the user as input.
                 Fibonacci number are a series of number where each number is the sum of the two
                 preceding number.We start with the numbers 0 and 1,and then calculate and print."""


# N=int(input("Enter the value of N:"))
# x=0
# y=1
# z=0
    
# while(N>0):
#     print(z,end=" ")
#     x=y
#     y=z
#     z=x+y
#     N=N-1


#Question-Write a program to take three numbers as input from the user and find HCF & LCM.
# a=int(input("Enter the value of a:"))
# b=int(input("Enter the value of b:"))
# c=int(input("Enter the value of c:"))
# min=2^32
# if(a>b):
#    min=b
# else:
#     min=a

# if(min>c):
#     min=c

# HCF=0
# i=1
# while(i<=min):
#     if(a%i==0 and b%i==0 and c%i==0):
#         HCF=i
#     i+=1

# print("HCF=",HCF)
# n=(a*b*c)//(HCF*HCF)
# print(n)

# LCM=0
# i=min
# while(i<=n):
#     if(i%a==0 and i%b==0 and i%c==0 ):
#         LCM=i
#         break
#     i+=1

# print("LCM=",LCM)





# def converter(USD):
#     INR=USD*82
#     print(USD,"USD =",INR,"INR")
    
# converter(4)

# B=input("Enter the value:")
# d=int(B,2)
# print(d)

# n=int(input("Enter the value of n:"))
# i=1
# while(i<=n):
#     j=1
#     while(j<=n-i):
#         print(" ",end='')
#         j+=1
#     k=1
#     while(k<=2*i-1):
#         print("*")
#         k+=1
#     i+=1

# n=int(input("Enter the decimal number:"))
# b=""
# while(n!=0):
#     r=n%2
#     b+=str(r)
#     n=n//2

# print(b)
# bi=""
# for i in b:
#     bi=i+bi

# print(bi)

# n=int(input("entr:: "))
# sum=""
# while n>0:
#   rem=n%2 
#   sum=str(rem)+sum
#   n=n//2  
# print(sum)

# n=int(input("Enter the number:"))
# count=0
# while(n>0):
#     count+=1
#     n=n//10
# print(count)





# n=int(input("Enter the number:"))
# i=1
# while(i<=n):
#     if(i*i<=n):
#         print(i)
#     i+=1
    

#Question- 2,4,8,14,22,32,44....,n

# n=int(input("Enter the value of n:"))
# i=0
# a=2
# while(i<n):
#     print(a,end=" ")
#     a+=2*i+2
#     i+=1


# a,b=map(int,input().split())
# a,b=map(str,input().split())

# a=list(map(int,input.split()))
# a=list(map(str,input.split()))

# def show(n):
#     if(n==0):
#         return 0
#     print(n)
#     show(n-1)
# show(5)

# def fact(n):
#     if(n==0 or n==1):
#         return 1
#     else:
#         return n*fact(n-1)
# print(fact(5))


# def calc_sum(n):
#     if(n==0):
#         return 0
#     return calc_sum(n-1)+n

# print(calc_sum(10))

# def print_list(list,idx=0):
#     if(idx==len(list)):
#         return 0
#     print(list[idx])
#     print_list(list,idx+1)

# fruits=["apple", "banana", "mango", "orange"]
# print_list(fruits)

# f=open("demo.txt","r")
# data=f.read()
# print(data)
# print(type(data))
# f.close()



# n = int(input("Enter the length: "))
# list = [0]*n

# i = 0
# while i < n:
#     el = int(input("Enter element: "))
#     list[i] = el 
#     i += 1

# print(list)

# num=0
# i=len(list)
# while(i>0):
#     num+=i
#     i-=1

# print(num)

# new_list=[0]*num
# a=0
# i=0
# while(i<n):
#     j=i
#     while(j<n):
#         k=i
#         while(k<=j):
#             new_list[a]=list[k]
#             a+=1
#             k+=1
#         j+=1
#     i+=1
    
# print(new_list)


# f=open("demo.txt","w")
# f.write("I want to learn JavaScript tomorrow.")
# f.close()

# f=open("demo.txt","a")
# f.write("\nThen I'll move to React JS.")
# f.close()

"""Question:
****
****
****
****   """

# n=int(input("Enter the value of n:"))
# str=n*'*'
# i=1
# while(i<=n):
#     print(str)
#     i+=1


"""
Question: Validate a given year.
(Hints. The year in the date must be greater than zero, the months must lie between 1 and 12, and the days must lie between 1 and 31, depending on the month numbers.)
a. 03,94,2022  Invalid (Month 94 is not possible, valid months are 1-12).
b. 09,08,1999  Valid.
c. 30,02,1789  Invalid (February has a maximum of 29 days in leap years).
d. 31,03,9192  Invalid (Year 9192 is out of typical human history, generally 4-digit years are used in dates).
e. 15,10,1999  Valid.
f. 05,09,8976  Invalid (Year 8976 is out of typical human history).
g. 45,3,2022   Invalid (Day 45 is not possible, valid days are 1-31 depending on the month).
h. 21,13,4     Invalid (Month 13 is not possible, and Year 4 is unusually low for typical usage).
i. 1,1,-1      Invalid (Negative years are not valid in the common date system).     

"""


# print("Enter the date, month, year:")
# date, month, year=map(int,input().split())

# if(month>0 and month<=12):
#     if(month==2):
#         if(year>=1582 and year<=2024):
#             if(year%400==0):
#                 if(date>0 and date<=29):
#                     print("Valid") 
#                     print("Leap Year")
#                 else:
#                     print("Invalid Date, valid dates are 1-29 for leap years")    
#             elif(year%4==0 and year%100!=0):
#                 if(date>0 and date<=29):
#                     print("Valid") 
#                     print("Leap Year")
#                 else:
#                     print("Invalid Date, valid dates are 1-29 for leap years") 
#             else:
#                 if(date>0 and date<=28):
#                     print("Valid") 
#                     print("Not Leap Year")
#                 else:
#                     print("Invalid Date, valid dates are 1-28 for non-leap years") 
#         else:
#             print("Invalid Year, valid years are 1582-2024")
#     elif(month==4 or month==6 or month==9 or month==11):
#         if(year>=1582 and year<=2024):
#             if(date>0 and date<=30):
#                 print("Valid")
#             else:
#                 print("Invalid Date, valid dates are 1-30")
#         else:
#             print("Invalid Year, valid years are 1582-2024")
#     else:
#         if(year>=1582 and year<=2024):
#             if(date>0 and date<=31):
#                 print("Valid")
#             else:
#                 print("Invalid Date, valid dates are 1-31")
#         else:
#             print("Invalid Year, valid years are 1582-2024")     
# else:
#     print("Invalid Month, valid months are 1-12")


"""Accept the age, gender ('M', 'F'), and the number of days and display the wages accordingly

If the age does not fall in any range then display the following message: “Enter appropriate age”
Age                    Sex           Wage/day
>=18 and <30            M              700
                        F              750
>=30 and <=40           M              800                                     
                        F              850

Input:
26,M,7   (4900)
18,F,13  (9750)
32,M,10  (8000)
40,M,8   (6400)
45,F,4   ("Enter appropriate age")"""


# age=int(input("Enter the Age:"))
# sex=str(input("Enter the sex:"))
# days=int(input("Enter the days:"))

# if(sex=="M"):
#     if(age>=18 and age<30):
#         print(days*700)
#     elif(age>=30 and age<=40):
#         print(days*800)
#     else:
#         print("Enter appropriate age")
# else:
#     if(age>=18 and age<30):
#         print(days*750)
#     elif(age>=30 and age<=40):
#         print(days*850)
#     else:
#         print("Enter appropriate age")



"""7.You have denominations of rupee notes in the following form—1, 2, 5, 10, 20, 50, 100, 200, 500, 2000. Take 
any amount from the user and print the minimum number of notes needed to add up to that number.
a. 4      (2 notes of 2.)
b. 56300  (28 notes of 2000, 1 note of 200, 1 note of 100)
c. 10090  (5 notes of 2000, 1 notes of 50, 2 note of 20)
d. 89     (1 notes of 50, 1 note of 20, 1 notes of 10, 1 notes of 5, 2 notes of 2)
e. 90787  (45 notes of 2000, 1 note of 500, 1 note of 200, 1 notes of 50, 1 note of 20, 1 note of 10, 1 notes of 5, 1 notes of 2)
f. 1286   (2 notes of 500, 1 note of 200, 1 notes of 50, 1 note of 20, 1 note of 10, 1 notes of 5, 1 notes of 1)"""


# n=int(input("Enter the amount:"))

# if(n>=2000):
#     r=n//2000
#     n=n-(2000*r)
#     print("2000 =",r)

# if(n>=500):
#     r=n//500
#     n=n-(500*r)
#     print("500 =",r)

# if(n>=200):
#     r=n//200
#     n=n-(200*r)
#     print("200 =",r)

# if(n>=100):
#     r=n//100
#     n=n-(100*r)
#     print("100 =",r)

# if(n>=50):
#     r=n//50
#     n=n-(50*r)
#     print("50 =",r)

# if(n>=20):
#     r=n//20
#     n=n-(20*r)
#     print("20 =",r)

# if(n>=10):
#     r=n//10
#     n=n-(10*r)
#     print("10 =",r)

# if(n>=5):
#     r=n//5
#     n=n-(5*r)
#     print("5 =",r)

# if(n>=2):
#     r=n//2
#     n=n-(2*r)
#     print("2 =",r)

# if(n>=1):
#     r=n//1
#     n=n-(1*r)
#     print("1 =",r)


"""
8.Construct a flowchart to categorize the shape of a quadrilateral as either a square, rhombus, rectangle, 
parallelogram, or irregular quadrilateral, having input the lengths of the four sides and one internal angle.
a. 4,4,4,4,60(Internal angle)       Rhombus
b. 5,5,5,5,90(Internal angle)       Square
c. 7,4,7,4,130(Internal angle)      Parallelogram
d. 11,6,11,6,90(Internal angle)     Rectangle
e. 2,2,3,4,50(internal angle)       Irregular Quadrilateral
f. 2,3,2,4,90(internal angle)       Irregular Quadrilateral

"""

# a,b,c,d,angle=map(int,input().split())

# if(a==b==c==d):
#     if(angle==90):
#         print("Square")
#     else:
#         print("Rhombus")
# elif(a==c and b==d):
#     if(angle==90):
#         print("Rectangle")
#     else:
#         print("Parallelogram")
# else:
#     print("Irregular Quadrilateral")


"""
9.The grades in a certain class are determined by coursework and a written examination. Both components of the 
assessment carry a maximum of 50 points.

(i) A student must score a total of 45% or more in order to pass
(ii) A total grade of 44% is moderated to 45%
(iii) Each component must be passed with a minimum of 20 points
(iv) If a student scores 45% or more, but does not achieve the minimum grade in one component, he is given a 
technical fail of 44%, which is not moderated to 45%.
	
Print whether the student has passed or failed and also the course total.
Test cases:-		    Output
a. 25,25		        50, Pass
b. 22,45		        67, Pass
c. 45,33		        88, Pass
d. 50,25		        75, Pass  
e. 22,19		        41, Fail
f. 30,16		        44, Technical fail
g. 22,22		        45, Moderated
h. 19,16		        35, Fail         

"""

# print("Enter the coursework_score & examination_score:")
# courseScore, examScore=map(int,input().split())
# if(courseScore>=0 and courseScore<=50 and examScore>=0 and examScore<=50):
#     totalScore = int(((courseScore + examScore) / 100) * 100)
#     if(courseScore>=20 and examScore>=20):
#         if(totalScore>=45):
#             print(totalScore,"Pass")
#         elif(totalScore==44):
#             print("45 Moderated")
#     else:
#         if(totalScore>=45):
#             print("44 Technical Fail")
#         else:
#             print(totalScore,"Fail")
# else:
#     print("Invalid scores")


"""
10.The following rules are used to calculate the bonus for the employees of an organization.
(i) If the pay is more than $3,000, the bonus amount is fixed, and it is equal to $300.
(ii) If the pay is more than $1,600, but less than or equal to $3,000, the bonus will be 10% of the pay subject to a maximum of $240.
(iii) If the pay is less than or equal to $1,600, the bonus is 15% of pay, subject to a minimum of $100.

Test cases:-
a. 3050      (300)
b. 1800      (180)
c. 500       (100)
d. -3500     (Invalid pay amount)

"""
# pay=int(input("Enter the pay amount:"))
# if(pay>3000):
#     print(300)
# elif(pay>1600 and pay<= 3000):
#     bonus = int(pay * 10/100)
#     print(min(bonus, 240))
# elif(pay<=1600 and pay>0):
#     bonus = int(pay * 15/100)
#     print(max(bonus, 100))
# else:
#     print("Invalid pay amount")


"""
11.A certain steel is graded according to the following conditions:
(i) Rockwell-hardness > 50
(ii) Carbon content > 0.7
(iii) Tensile strength > 5600 kg/cm2
The steel is graded as follows:
a. Grade 10, if all the conditions are satisfied
b. Grade 9, if conditions (i) and (ii) are satisfied
c. Grade 8, if conditions (ii) and (iii) are satisfied
d. Grade 7, if conditions (i) and (iii) are satisfied
e. Grade 0, otherwise
	
Test cases:-
a. Rockwell-hardness=60
   Carbon content=1.8
   Tensile strength=5660kg/cm2     (Grade 10)

b. Rockwell-hardness=70
   Carbon content=2.0
   Tensile strength=4400kg/cm2     (Grade 9)
	
c. Rockwell-hardness=70
   Carbon content=2
   Tensile strength=5668kg/cm2     (Grade 10)

d. Rockwell-hardness=60
   Carbon content=2
   Tensile strength=5686kg/cm2     (Grade 10)
	
e. Rockwell-hardness=5
   Carbon content=2
   Tensile strength=440kg/cm2      (Grade 0)

"""

# rockwell_hardness=int(input("Enter the Rockwell-hardness:"))
# carbon_content=float(input("Enter the Carbon content:"))
# tensile_strength=int(input("Enter the Tensile strength:"))

# if(rockwell_hardness>50 and carbon_content>0.7 and tensile_strength>5600):
#     print("Grade 10")
# elif(rockwell_hardness>50 and carbon_content>0.7):
#     print("Grade 9")
# elif(carbon_content>0.7 and tensile_strength>5600):
#     print("Grade 8")
# elif(rockwell_hardness>50 and tensile_strength>5600):
#     print("Grade 7")
# else:
#     print("Grade 0")


"""
15.Accept three integers representing the angles of a triangle in degrees to determine whether they form a 
valid set of angles of a triangle. If it is not a valid set, then generate a message and terminate the process. 
If it is a valid set, then the process determines whether it is equiangular (all three angles are the same). 
It also determines if the triangle is right-angled (has one angle with 90 degrees), obtuse-angled (one angle 
above 90), or acute-angled (all three angles are below 90 degrees). Finally, it shows the conclusion about the 
triangle.

Input:
a. 60,60,60      (Equiangular triangle)
b. 20,30,40      (Not a valid triangle)
c. 40,50,90      (Right-angled triangle)
d. 90,90,60      (Not a valid triangle)
e. 30,80,70      (Acute-angled triangle)
f. 0,0,180       (Not a valid triangle)
h. -20,-10,210   (Not a valid triangle)
i. 40, 40, 100   (obtuse-angled triangle)

"""

# print("Enter the three angles:")
# angle1, angle2, angle3=map(int,input().split())

# if(angle1<=0 or angle2<=0 or angle3<=0 or (angle1 + angle2 + angle3 != 180)):
#    print("Not a valid triangle.")
# elif(angle1 == angle2 == angle3):
#    print("The triangle is equiangular.")
# elif(angle1==90 or angle2==90 or angle3==90):
#    print("The triangle is right-angled.")
# elif(angle1>90 or angle2>90 or angle3>90):
#    print("The triangle is obtuse-angled.")
# else:
#    print("The triangle is acute-angled.")


"""
Accept the lengths of the three sides of a triangle to validate whether they can be the sides of a triangle and 
then classify the triangle as equilateral (all three sides are equal), scalene (all three sides are different), 
or isosceles (exactly two sides are equal), and then to see whether it is a right-angled triangle (the sum of 
the squares of two sides is equal to the square of the third side.)

(Hint. Three numbers are valid as the sides of a triangle if each one is positive and the sum of every two 
numbers is greater than the third.)

Input:
a. 2,4,5      (scalene)
b. 4,9,10
c. 33,45,90  (scalene and right-angled)
d. 34,34,90  (Isosceles)
e. 1,1,10    (Not a valid triangle)
f. 5,5,5     (Equilateral)

"""

# print("Enter the three sides:")
# side1, side2, side3=map(int,input().split())

# if(side1<=0 or side2<=0 or side3<=0 or side1+side2<=side3 or side1+side3<=side2 or side2+side3<=side1):
#    print("Not a valid triangle.")
# elif((side1+side2)**2==side3**2 or (side1+side3)**2==side2**2 or (side2+side3)**2==side1**2):
#    print("Right-angled triangle")
# elif(side1==side2 or side1==side3 or side2==side3):
#    print("Isosceles")
# elif(side1 == side2 == side3):
#    print("Equilateral")
# else:
#    print("Scalene")