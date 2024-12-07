



# Flowchart New Database
"""Question-01...Write a program to take three variables to store your birth date,birth month,and birth year,
                 respectively,and print them one by one in a specified order."""

# birthDate=int(input("Enter the birth date:"))
# birthMonth=input("Enter the birth month:")
# birthYear=int(input("Enter the birth year:"))

# print( birthDate,"\n",birthMonth,"\n",birthYear)



"""Question-02...Write a program to take input from the user, and then print it to the output."""

# input=input("Enter the input:")
# print(input)



"""Question-03...Imagine you and your friend have brought different snacks for lunch. However, you want to 
                exchange your snacks with each other. To do this, you decide to enlist the help of a friend 
                who can hold one snack box while you exchange with your other friend.Similarly, in programming, 
                we can use a third variable to help us swap the values of two variables.

                Write a program to take two values from the user and swap them.
                Hint: You can use a third variable.
                Tips:
                1. Think about how you would exchange snack boxes with your friend and the helper.
                2. Pay attention to the role of the helper in facilitating the swap.
                3. Understand why the helper variable is necessary for the swap operation. """

# a=input("Enter the first value:")
# b=input("Enter the second value:")

# temp=a
# a=b
# b=temp

# print("a =",a,"\n","b =",b)


"""Question-04...Write a program to take two numbers from the user and perform Six basic operations (addition, 
                subtraction, multiplication, division, integer division and modulus) on those two numbers.
                Note: Print the output in the order as mentioned in the question.     """

# num1=int(input("Enter the first Number:"))
# num2=int(input("Enter the second Number:"))

# addition=num1+num2
# subtraction=num1-num2
# multiplication=num1*num2
# division=num1/num2
# integerDivision=num1//num2
# modulus=num1%num2

# print("addition=",addition,"\n","subtraction=",subtraction,"\n","multiplication=",multiplication,"\n","division=",division,"\n","integerDivision=",integerDivision,"\n","modulus=",modulus)


"""Question-05...Write a program to take two numbers A and B from the user and calculate the quotient and 
                 remainder when number A is divided by number B.
                 Note: Print the output in the order as mentioned in the question. """

# num1=int(input("Enter the first number:"))
# num2=int(input("Enter the second number:"))

# quotient=num1//num2
# remainder=num1%num2

# print("Quotient=",quotient,"\n","Remainder=",remainder)


"""Question-06...Write a program to take a positive number from the user and then display the last digit of 
                 that number.   """

# num=int(input("Enter a positive number:"))

# print("Last Digit=",num%10)


"""Question-07...Write a program to convert a temperature from Celsius to Fahrenheit using the formula C/5 = (F-32)/9 """

# C=int(input("Enter the value of C:"))
# F=9*(C/5)+32
# print("Temperature=",F)


"""Question-08...Write a program to take two inputs from the user and swap them without using a temporary or third variable. """

a=int(input("Enter the first input:"))
b=int(input("Enter the second input:"))



a=a+b
b=a-b
a=a-b

print("a=",a,"\n","b=",b)



"""Question-09..Write a program to take two numbers, A and B from the user. Your task is to find the largest 
                number that is less than A and can be divided evenly by B. Can you figure out that number? """


# a = int(input ("Enter the value of a:"))
# b = int(input ("Enter the value of b:"))

# temp=a%b
# print("Number=",a-temp)




