


# ($)What is Python?
#   (Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.)
#  > Python is simple & easy
#  > Free & Open Source
#  > High Level language
#  > Developed by Gudio van Rossum (released in 1991)
#  > Portable

"""($)Chapter 1-Variables & Data types"""

# print("Hello World")
# print("Hello.","python.")

# print(25)
# print(25+15)

# (*)Python Character Set-
# > Letters- A to Z, a to Z
# > Digit- 0 to 9
# > Special Symbols- -,+,-,*,/,% etc.
# > Whitespaces- Blank Space,tab,carriage return,newline,formfeed
# > Other characters- Python can process all ASCII and Unicode characters as part of data or literals

# (*)Variables-A variable is a name given to a memory location in a program.
#      name="alex"
#      age=21


# (*)Rules for Identifiers-
# 1.Identifiers can be combination of uppercase and lowercase letters,digit or an underscore(_).
#   So myVariable,variable_1,variable_for_print all are valid python identifiers.
# 2.An Identifier can not start with digit.So while variable1 is valid,1variable is not valid.
# 3.We can't use special symbols like !,#,@,%,$ etc in our Identifier.
# 4.Identifier can be of any length.


# (*)Data Type-
#    >Integers -25
#    >String -"Hello" 
#    >Float -2.5
#    >boolean -True/False
#    >None -None

# age=22
# name="alex" ('alex',"alex",'''alex''')
# price=2.5
# old=False
# a=None

# print(type(age))
# print(type (name))
# print(type(price))
# print(type(old))
# print(type(a))

# Keywords-Keywords are reserved words in python.(There are 36 keywords in Python)
# and       else       in       return
# as        except     is       True
# assert    finally    lambda   try
# break     False      nonlocal with
# class     for        None     while
# continue  from       not      yield
# def       global     or
# del       if         pass
# elif      import     raise


# Print Sum-
# a=2
# b=5
# sum=a+b
# print(sum)


#Comments in Python-
# Single line comment
"""This is a multi-line comment"""


"""Types of Operators-
   An operator is a symbol that performs a certain operation between operands.
   
   >Arithmetic Operators(+,-,*,/,//,%,**)
   >Relational/Comparison Operators(==,!=,>,<,>=,<=)
   >Assignment Operators(=,+=,-=,*=,/=,//=,%=,**=,&=,|=,^=,>>=,<<=,:=)
   >Logical Operators(not,and,or) 
   >Identity Operators(is,is not)
   >Membership Operators(in,not in)
   >Bitwise Operators(& (And),| (OR),^ (XOR),~ (NOT),<< (Zero fill left shift),>> (Signed right shift) )

"""


"""Type Conversion-
   Python defines type conversion functions to directly convert one data type to 
   another which is useful in day-to-day and competitive programming.
   
   There are two types of Type Conversion-
   1.Implicit Type Conversion
   2.Explicit Type Conversion
   
   
   (1)Implicit Type Conversion- In Implicit type conversion of data types in Python,the Python interpreter 
   automatically converts one data type to another without any user involvement.
   Example-
   a=2
   b=4.25
   sum=a+b
   print(sum) #(6.25)

   (2)Explicit Type Conversion-In Explicit Type Conversion in Python,the data type is manually changed by 
   the user as per their requirement.With explicit type conversion,there is a risk of data loss since we 
   are forcing an expression to be changed in some specific data type.
   Example-
   s="10010"
   i=int(s)
   print(i)
   f=float(s)
   print(f)
   
   >int(a,base):This function converts any data type to an integer.
    'Base' specifies the base in which the string is if the data type 
    is a string.
   
   >float():This function is used to convert any data type to a 
    floating-point number.

   >str():This function is used to convert any data type to an string.

   >ord():This function is used to convert a character to an integer.

   >hex():This function is to convert an integer to a hexadecimal string.

   >oct():This function is to convert an integer to an octal string.

   >tuple():This function is used to convert to a tuple.

   >set():This function returns the type after converting to set.

   >list():This function is used to convert any data type to a list type.

   >dict():This function is used to convert a tuple of order (key,value) 
    into a dictionary.

   >str():Used to convert an integer into string.

   >complex(real,imag):This function converts real numbers to
    complex(real,imag) number.

   >chr(number):This function converts a number to its corresponding 
    ASCII character. 
    
   Note:Explicit type conversion,also known as type casting, is when the programmar 
        intentionally changes the data type of a value. 

"""


"""Input in Python-
 input()statement is used to accept values (using keybord) from user

 >string input
    name=input("name:")

 >int input
    age=int(input("age:"))
      
 >float input
    price=float(input("price:"))  

"""


"""Let's Practice-
 1.Write a program to input 2 numbers & print their sum.
  
 first=int(input("Enter the first number:"))
 second=int(input("Enter the second number:"))
  
 print("sum=",first+second)
  
  
 2.Write a program to input side of a square & print its area.
 
 side=float(input("Enter the square side:"))
 print("Area=",side**2)
 
 
 3.Write a program to input 2 floating point numbers & print their average.
 
 a=float(input("Enter the first number:"))
 b=float(input("Enter the second number:"))
 
 print("Average=",(a+b)/2)
 
 
 4.Write a program to input 2 int number,a and b.Print True if a is greater
   than or equal to b.If not print False.
   
 a=int(input("Enter the first number:"))
 b=int(input("Enter the second number:"))

 print(a>=b)
 
"""

# Types of Tokens-
#   Punctuators -Punctuators are symbols to organize sentance structure in programming.
#  (),{},@,[],# etc.
#  -=,+=,/=,*=,//=,= etc.

# Typed language-Python is a implicit language
#      implicit          explicit
#        python            c++,Java


# Expression Execution-
#  >string & Numeric values can operate together with*
# A,B=2,3
# Txt="@"
# print(2*Txt*3) #(@@@@@@)

# >String & String can operate with+  (concatination)
# A,B="2",3
# Txt="@"
# print((A+Txt)*B) #(2@2@2@)

# >Numeric values can operate with all arithmetic operators
# A,B=2,3
# C=4
# print(A+B*C) #(14)

# >Arithmetic expression with Integer and float will result in float
# A,B=10,5.0
# C=A*B
# print(C) #(50.0)

# >Result of division operator with two integers will be float
# A,B=1,2
# C=A/B
# print(C)  #(0.5)

# >Integer division with float and int will give int displayed as float
# A,B=1.5,3
# C=A//B
# print(C,A/B) #(0.0,0.5)

# >floor gives closest integer,which is lesser then or equal to the float value
#  Result of(A//B) is same as floor(A/B)
# A,B=12,5
# C=A//B
# print(C) #(2)

# A,B=-12,5
# C=A//B
# print(C) #(-3)

# A,B=12,-5
# C=A//B
# print(C) #(-3)

# >Remainder is negative when denominator is negative
#  Nominator %  Denominator = Result
#      +            +           +
#      -            -           +
#      +            -           -                 
#      -            +           +

# A,B=5,2                   
# C=A%B                  
# print(C) #(1)              
                                        
# A,B=-5,-2                    
# C=A%B                       
# print(C) #(1)

# A,B=5,-2
# C=A%B
# print(C) #(-1)

# A,B=-5,2
# C=A%B
# print(C)  #(1)





#Taking input from user & printing it-
# name=input("name:")
# age=int(input("age:"))
# price=float(input("price:"))

# print("My name is",name,"and I am",age,"years old and my shoes price is",price)


"""Practice Time-
     (State True or False)
     
     1)/* is a symbol used in Python for single line comment. (False)
     
     2)2ndNAME is an invalid identifier in Python. (True)
     
     3)** is a valid arithmetic operators in Python. (True)
     
     4)in is a logical operator in Python. (False)
     
     5)Variable declaration is implicit in Python. (True)  
     
     6)Consider the given expression: not True and False or True
      Which of the folloing will be correct output if the given expression is evaluated?
      (a)True (Right)
      (b)False
      (c)NONE
      (d)NULL """


"""Conditional Statements-
   if-elif-else(SYNTEX)
   
   if(condition):
      Statement1
   elif(condition):
      Statement2
   else:
      StatementN     """

#Traffic Light Code-

# light=input("light color:")
# if(light=="red"):
#    print("stop")
# elif(light=="yellow"):
#    print("look")
# elif(light=="green"):
#    print("go")
# else:
#    print("light is broken")



#Grades of students
# marks=int(input("marks:"))
# if(marks >= 90):
#    print("A")
# elif(marks >= 80 and marks <90):
#    print("B")
# elif(marks >=70 and marks <80):
#    print("C")
# else:
#    print("D")


#Practice Time
#Print output for:
#A=5 & G=M
#A=2 & G=F

# A=int(input("A:"))
# G=input("M/F:")
# if((A==1 or A==2) and G=="M"):
#    print("fee is 100")
# elif(A==3 or A==4 or G=="F"):
#    print("fee is 200")
# elif(A==5 and G=="M"):
#    print("fee is 300")
# else:
#    print("no fee")


"""Conditional Statements
   Single Line If/Ternary Operator"""
# <var>=<val1> if <condition>else<val2>
# food=input("food:")
# eat="Yes" if food=="cake" else "no"
# print(eat)

# <stt1> if <condition> else <stt2>
# food=input("food:")
# print("sweet") if food=="cake" or food=="jalebi" else print("not sweet")

"""Conditional Statements
   Clever if/Ternary Operator """
#<var>=(false_val,true_val)[<condition]

# age=int(input("age:"))
# vote=("yes","no")[age<=18]
# print(vote)

# sal=float(input("salary:"))
# tax=sal*(0.1,0.2)[sal>=50000]
# print(tax)


"""Best Practices-
   >simple instructions
   >one instruction per task
   >short & meaningful variable names
   >use appropriate comments
   >avoid complex expressions   """

"""Best Practices-
   Calculate Simple Interest
   a=float(input("a:"))
   b=float(input("b:"))
   c=float(input("c:"))
   print(a*b*c/100)
   
   >improved
   p=float(input("p:"))
   r=float(input("r:"))
   t=float(input("t:"))
   si=(p*r*t)/100
   print(si)         """

"""Escape Sequence-
   An escape sequence is a sequence of characters that,when used inside a character or string,does
   not represent itself but is converted into another character or series of characters that may
   be difficult or impossible to express directly,like newline(\n),tab(\t),and so on.

   Escape Characters-
     Code                Result
      \'                  Single Quote
      \\                  Backslash
      \n                  New Line
      \r                  Carriage Return
      \t                  Tab
      \b                  Backspace
      \f                  Form Feed
      \ooo                Octal Value
      \xhh                Hex Value
"""



"""($)Chapter 2-String & Conditional Statements """

"""Strings-(String is immutable in Python)
   String is data type that stores a sequence of characters.
   
   str1='This is a string'
   str2="This is a string"
   str3="""This is a string"""

   str4="This is a string.\nWe are creating it in Python." (for next line)
   str5="This is a string.\tWe are creating it in Python." (for tab)
   
 (*)Basic Operations-
   >concatenation-
      "hello"+"world" - "helloworld"

   >length of string-
      len(str)  

 (*)Indexing-
    P y t h o n _ S t r i  n  g
    0 1 2 3 4 5 6 7 8 9 10 11 12

    str="Python_String"

    str[0] is 'P',str[1] is 'y',.....

    str[0]='A' #not allowed

 (*)Slicing- Accessing parts of a string.
   
   str[string_idx:ending_idx] #ending idx is not included

   str="Python"
   str[0:4] is "Pyt"
   str[:4] is same as str[0:4]
   str[0:] is same as str[1:len(str)]

 (*)Slicing (Negative Index)-
     P  y  t  h  o  n
    -6 -5 -4 -3 -2 -1

   str="Python"
   
   str[-3:-1] is "ho"

 
 (*)String Functions-
    str="I am a coder"

   >str.endswith("er.") #returns true if string ends with substr
   >str.capitalize() #capitalizes 1st char (str=str.capitalize() for change to original string)
   >str.replace("old","new") #replaces all occurrences of old with new
   >str.find("word") #returns 1st index of 1st occurrence
   >str.count("am") #count the occurrence of substr in string

 (*)String Methods-There are 47 String Methods in Python
   >capitalize() #Converts the first character to upper case
   >casefold() #Converts string into lower case
   >center() #Returns a centered string
   >count() #Returns the number of times a specified value occurs in a string
   >encode() #Returns an encoded version of the string
   >endswith() #Returns true if the string ends with the specified value
   >expandtabs() #Sets the tab size of the string
   >find() #Searches the string for a specified value and returns the position of where it was found
   >format() #Formats specified values in a string
   >format_map() #Formats specified values in a string
   >index()	#Searches the string for a specified value and returns the position of where it was found
   >isalnum() #Returns True if all characters in the string are alphanumeric
   >isalpha() #Returns True if all characters in the string are in the alphabet
   >isascii() #Returns True if all characters in the string are ascii characters
   >isdecimal() #Returns True if all characters in the string are decimals
   >isdigit() #Returns True if all characters in the string are digits
   >isidentifier() #Returns True if the string is an identifier
   >islower() #Returns True if all characters in the string are lower case
   >isnumeric() #Returns True if all characters in the string are numeric
   >isprintable()	#Returns True if all characters in the string are printable
   >isspace() #Returns True if all characters in the string are whitespaces
   >istitle() #Returns True if the string follows the rules of a title
   >isupper() #Returns True if all characters in the string are upper case
   >join() #Converts the elements of an iterable into a string
   >ljust()	#Returns a left justified version of the string
   >lower()	#Converts a string into lower case
   >lstrip() #Returns a left trim version of the string
   >maketrans() #Returns a translation table to be used in translations
   >partition() #Returns a tuple where the string is parted into three parts
   >replace() #Returns a string where a specified value is replaced with a specified value
   >rfind()	#Searches the string for a specified value and returns the last position of where it was found
   >rindex() #Searches the string for a specified value and returns the last position of where it was found
   >rjust()	#Returns a right justified version of the string
   >rpartition() #Returns a tuple where the string is parted into three parts
   >rsplit() #Splits the string at the specified separator, and returns a list
   >rstrip() #Returns a right trim version of the string
   >split()	#Splits the string at the specified separator, and returns a list
   >splitlines() #Splits the string at line breaks and returns a list
   >startswith() #Returns true if the string starts with the specified value
   >strip()	#Returns a trimmed version of the string
   >swapcase()	#Swaps cases, lower case becomes upper case and vice versa
   >title()	#Converts the first character of each word to upper case
   >translate() #Returns a translated string
   >upper()	#Converts a string into upper case
   >zfill()	#Fills the string with a specified number of 0 values at the beginning

 #Note: All string methods returns new values. They do not change the original string.


 (*)Let's Practice-
   1.Write a program to input user's first name & print its length.
     name=input("Enter the name:)
     print("length of the name is:",len(name))

   2.Write a program to find the occurrence of '$' in a String.
     str="Hi,$I am the $ symbol $99.99"
     print(str.count("$"))
    
"""

"""Conditional Statements-
   if-elif-else(SYNTAX)

   if(Condition):
      Statement     #4 spaces(____)called Indentation in programming
   elif(Condition):
      Statement
   else:
      Statement

 (*)Using Logical Operators-
   if(Condition and/or/not condition):
      Statement
   else:
      Statement

 (*)Nesting-
   if(Condition):
      if(Condition):
         Statement
      else:
         Statement
   else:
      Statement

 (*)Let's Practice-
   1.Write a program to check if a number entered by the user is odd or even.
   
   num=int(input("Enter the number:"))
   if(num%2==0):
      print("Even")
   else:
       print("Odd")


   2.Write a program to find the greatest of 3 number entered by the user.
   
   a=int(input("Enter the first number:"))
   b=int(input("Enter the second number:"))
   c=int(input("Enter the third number:"))
   if(a>=b and a>=c):
      print("first number is greatest",a)
   elif(b>=c):
      print("second number is greatest",b)
   else:
      print("third number is greatest",c)


   3.Write a program to check if a number is a multiple of 7 or not.
   
   num=int(input("Enter the number:"))
   if(num%7==0):
      print("multiple of 7")
   else:
      print("not multiple of 7")

"""



"""($)Chapter 3-List & Tuples"""
"""List in Python-(List is mutable in Python)
   A built-in data type that stores set of values
   It can store elements of different types(integer,float,string,etc.)

   marks=[87,64,33,95,76] #marks[0],marks[1],...

   student=["karan",85,"Delhi"] #student[0],student[1],...

   student[0]="Arjun" #allowed in Python

   len(student) #returns length
   
 (*)List Slicing-Similar to String Slicing

   list_name[starting_idx:ending_idx] #ending idx is not included

   marks=[87,64,33,95,76]
   marks[1:4] is [64,33,95]
   marks[:4] is same as marks[0:4]
   marks[1:] is same as marks[1:len(marks)]
   marks[-3:-1] is [33,95] #Negative Index Slicing

 (*)List Methods-
   list=[2,1,3]
   >list.append(4) #adds one element at the end [2,1,3,4]
   >list.sort() #sorts in acending order [1,2,3]
   >list.sort(reverse=True) #sorts in descending order [3,2,1]
   >list.reverse() #reverses list [3,1,2]
   >list.insert(idex,el) #insert element at index
   >list.remove(1) #removes first occurrence of element [2,3,1]
   >list.pop(idx) #removes element at idx
   >list.clear() #Removes all the elements from the list
   >list.copy() #Returns a copy of the list (list2=list.copy())
   >list.count() #Returns the number of element with the specified value
   >list.extend() #Add the elements of a list(or any iterable),to the end of the current list
   >list.index() #Returns the index of the first element with the specified value
  
"""

"""Tuples in Python-
   A built-in data type that lets us create immutable sequences of values.

   tup=(87,64,33,95,76) #tup[0],tup[1],...
   
   tup[0]=43 #NOT allowed in Python

   tup1=()
   tup2=(1,)
   tup3=(1,2,3)

 (*)Tuples Slicing-Similar to List Slicing
   tuples_name[starting_idx:ending_idx] #ending idx is not included

   marks=(87,64,33,95,76)
   marks[1:4] is (64,33,95)
   marks[:4] is same as marks[0:4]
   marks[1:] is same as marks[1:len(marks)]
   marks[-3:-1] is (33,95) #Negative Index Slicing

 (*)Tuple Methods-
   tup=(2,1,3,1)

   >tup.index(el) #returns index of first occurrence (tup.index(1) is 1)
   >tup.count(el) #counts total occurrences (tup.count(1) is 2)

"""

"""Let's Practice-
   1.Write a program to ask the user to enter names of their 3 favorite movies & store them in a list.
   
   movies=[]
   n=int(input("Enter the length:"))
   for i in range(n):
      el=input("Enter the movies name:")
      movies.append(el)
   print(movies)

   
   2.Write a program to check if a list contains a plindrome of elements.(Hint:use copy() method)
     [1,2,3,2,1]   [1,"abc","abc"]

   list=[]
   n=int(input("Enter the length:"))
   for i in range(n):
      el=input("Enter the elements:")
      list.append(el)
   print(list)
   copy=list.copy()
   copy.reverse()
   print(copy)
   if(list==copy):
      print("Yes")
   else:
      print("No")

   
   3.Write a program to count the number of students with the "A" greade in the following tuple.
     ("c","D","A","A","B","B","A")

   grade=("c","D","A","A","B","B","A")
   print(grade.count("A"))

   4.Store the above values in a list & sort them from "A" to "D".
   
   grade=["c","D","A","A","B","B","A"]
   grade.sort()
   print(grade)
   
"""


"""Chapter 4-Dictionary & Set"""
"""Dictionary in Python-
   Dictionaries are used to store data values in key:value pairs
   They are unordered,mutable(changeable) & don't allow duplicate keys

   dict={
      "name" : "shradha",
      "cgpa" : "9.6",
      "marks": [98,97,95],
   }
   dict["name"],dict["cgpa"],dict["marks"] #access value
   dict["key"]="value" #to assign or add new

 (*)Access Dictionary value through key-
   info={
      "name":"Alex",
      "surname":"Justin",
      "gender":"Male",
      "age":20,   
   }
   print(info) #print all key & value
   
   print(info["name"])
   print(info["surname"])
   print(info["gender"])
   print(info["age"])


 (*)Reassign/Update value or Add new key & value-
   info={
      "name":"Alex",
      "surname":"Justin",
      "gender":"Male",
      "age":20,
   }
   
   info["age"]=22        #Reassign/Update value
   info["city"]="Mumbai" #Add new key & value

   print(info["name"])
   print(info["surname"])
   print(info["gender"])
   print(info["age"])
   print(info["city"])

 (*)Create Empty/null Dictionary-
   
   info={} #Empty Dictionary
   print(info) #print Empty({})

   info["name"]="Alex" #Add key & value

   print(info["name"]) #print Add key & value


 (*)Nested Dictionaries-
   student={
      "name":"Alex"
      "score":{
         "physics":92,
         "chemistry":94,
         "math":96,
      }
   }
   print(student) #print all key & value
   print(student["score"]) #print nested dictionaries all key & value
   print(student["score"]["math"]) #print nested dictionaries single key's value


 (*)Dictionary Methods-
   >clear()	#Removes all the elements from the dictionary
   >copy()	#Returns a copy of the dictionary
   >fromkeys()	#Returns a dictionary with the specified keys and value
   >get()	#Returns the value of the specified key
   >items()	#Returns a list containing a tuple for each key value pair
   >keys()	#Returns a list containing the dictionary's keys  (also use len() method)
   >pop()	#Removes the element with the specified key
   >popitem()	#Removes the last inserted key-value pair
   >setdefault()	#Returns the value of the specified key. If the key does not exist: insert the key, with the specified value
   >update()	#Updates the dictionary with the specified key-value pairs
   >values()	#Returns a list of all the values in the dictionary
 
"""

"""Set in Python-
   Set is the collection of the unordered items.
   Each element in the set must be unique & immutable.

   nums={1,2,3,4}
   set={1,2,2,2} #repeated elements stored only once,so it resolved to {1,2}
   null_set=set() #empty set syntex

 (*)Set Methods-
   >add()	 	   #Adds an element to the set
   >clear()	 	   #Removes all the elements from the set
   >copy()	 	   #Returns a copy of the set
   >pop()	 	   #Removes an element from the set
   >remove()	 	#Removes the specified element
   >discard()	 	#Remove the specified item
   >isdisjoint()	#Returns whether two sets have a intersection or not
   
   More Methods-
      Method                      Shortcut     Description
    difference()              	  -	      Returns a set containing the difference between two or more sets
    difference_update()	           -=	      Removes the items in this set that are also included in another, specified set
    intersection()	              &	      Returns a set, that is the intersection of two other sets
    intersection_update()	        &=	      Removes the items in this set that are not present in other, specified set(s)
    issubset()	                    <=	      Returns whether another set contains this set or not
    issuperset()	                 >=	      Returns whether this set contains another set or not
 	                                <	      Returns whether all items in this set is present in other, specified set(s)
 	                                >	      Returns whether all items in other, specified set(s) is present in this set
    symmetric_difference()	        ^	      Returns a set with the symmetric differences of two sets
    symmetric_difference_update()  ^=	      Inserts the symmetric differences from this set and another
    union()	                       |	      Return a set containing the union of sets
    update()	                    |=	      Update the set with the union of this set and others

"""

"""Let's Practice-
   1.Store following word meaning in a ptyhon dictionary:
     table:"a piece of furniture","list of facts & figures"
     cat:"a small animal"

   dictionary={
      "cat":"a small animal",
      "table":["a piece of furniture","list of facts & figures"]
   }
   print(dictionary)

   2.You are given a list of subjects for students.Aussume one classroom is required for 1
     subject.How many classrooms are needed by all students.
      "python","java","c++","python","javascript","java","python","java","c++","c"

   subjects={"python","java","c++","python","javascript","java","python","java","c++","c"}
   print(len(subjects))


   3.Write a program to enter marks of 3 subjects from the user and store them in a dictionary.Start with
     an empty dictionary & add one by one.Use subject name as key & marks as value.

   marks={}
   
   x=int(input("Enter physics marks:"))
   marks.update({"physics":x})

   x=int(input("Enter chemistry marks:"))
   marks.update({"chemistry":x})

   x=int(input("Enter math marks:"))
   marks.update({"math":x})

   print(marks)

   
   4.Figure out a way to store 9 & 9.0 as separate values in the set.
     (You can take help of built-in data types)

   values={9,"9.0"}
   print(values)

   #OR

   values={
      ("float",9.0),
      ("int",9)
   }
   print(values)
 
"""
      


"""Chapter 5-Loops"""
"""Loops in Python-
   Loops are used to repeat instructions.
    
 ($)while Loops-With the while loop we can execute a set of statements as long as a condition is true.

   while(condition):
      #some work

  #Example-
   i=1                 #Iterator 
   while (i<=5):       #Iteration
      print("Hello")
      i+=1

 (*)Let's Practice- Using while loop
   1.Print numbers from 1 to 100.
   
   i=1
   while(i<=100):
      print(i)
      i+=1

   2.Print numbers from 100 to 1.
   
   i=100
   while(i>=1):
      print(i)
      i-=1


   3.Print the multiplication table of a number n.
   
   n=int(input("Enter the value of n:"))
   i=1
   while(i<=10):
      print(n*i)
      i+=1

   4.Print the elements of the following list using a loop:
      [1,4,9,16,25,36,49,64,81,100]
   
   list=[1,4,9,16,25,36,49,64,81,100]
   
   idx=0
   while(idx<len(list)):
      print(list[idx])
      idx+=1

   
   5.Search for a number x in this tuple using loop:
      [1,4,9,16,25,36,49,64,81,100]
   
   tuple=(1,4,9,16,25,36,49,64,81,100)
   
   x=16
   count=0
   idx=0
   while(idx<len(tuple)):
      if(tuple[idx]==x):
         print("Yes")
         count+=1
      idx+=1
   if(count==0):
      print("No")


 (*)While Loop Statements- There are three statements in while loop
   
   1.The break Statement- Used to terminate the loop when encountered. 
    
   With the break statement we can stop the loop even if the while condition is true.

   #Example-
   Exit the loop when i is 3

   i=1
   while i<6:
      print(i)
      if i==3:
         break
      i+=1

   
   2.The continue Statement- Terminates execution in the current iteration & continues execution of the loop with the next iteration.
   
   With the continue statement we can stop the current iteration, and continue with the next.
   
   #Example
   Continue to the next iteration if i is 3

   i=0
   while i<6:
      i+=1
      if i==3:
         continue
      print(i)

   
   
   3.The else Statement- 
   
   With the else statement we can run a block of code once when the condition no longer is true.

   #Example
   Print a message once the condition is false

   i=1
   while i<6:
      print(i)
      i+=1
   else:
      print("i is no longer less than 6")




   
 ($)For Loops- Loops are used for sequential traversal.For traversing list,string,tuples etc.
   
   for Loops-         list=[1,2,3]
   for el in list:    for el in list:     
      #some work          print(el)

   for Loop with else-
   for el in list:              for el in list:
      #some work                    print(el)
   else:                        else:
      #work when loop ends          print("End")

  
   >With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.
   #Example-
   fruits=["apple","banana","cherry"]
   for x in fruits:
      print(x)
   
   >Looping through a string-
   Even strings are iterable objects, they contain a sequence of characters.

   #Example-
   Loop through the letters in the word "banana":

   for x in "banana":
      print(x)
   


 (*)The range() Function-
   Range function returns a sequence of numbers,starting from 0 by default,and increments by
   1 (by default),and stops before a specified number.

   range(start?,stop,step?)

   for el in range(5):
      print(el)
   
   for el in range(1,5):
      print(el)
   
   for el in range(1,5,2):
      print(el)



   To loop through a set of code a specified number of times, we can use the range() function,
   The range() function returns a sequence of numbers, starting from 0 by default, and increments 
   by 1 (by default), and ends at a specified number.

   #Example
   Using the range() function

   for x in range(6):
      print(x)

   Note that range(6) is not the values of 0 to 6, but the values 0 to 5.

   The range() function defaults to 0 as a starting value, however it is possible to specify the starting 
   value by adding a parameter: range(2, 6), which means values from 2 to 6 (but not including 6).

   #Example
   Using the start parameter:

   for x in range(2, 6):
      print(x)

   The range() function defaults to increment the sequence by 1, however it is possible to specify the
   increment value by adding a third parameter: range(2, 30, 3).

   #Example
   Increment the sequence with 3 (default is 1)

   for x in range(2, 30, 3):
      print(x)


 (*)For Loop Statements- 
   
   1.The break Statement-
   With the break statement we can stop the loop before it has looped through all the items.

   #Example
   Exit the loop when x is "banana"

   fruits = ["apple", "banana", "cherry"]
   for x in fruits:
      print(x)
      if x == "banana":
         break
   

   2.The continue Statement-
   With the continue statement we can stop the current iteration of the loop, and continue with the next.

   #Example-
   Do not print banana

   fruits = ["apple", "banana", "cherry"]
   for x in fruits:
      if x == "banana":
         continue
      print(x)


   3.The else Statement-
   The else keyword in a for loop specifies a block of code to be executed when the loop is finished.

   #Example
   Print all numbers from 0 to 5, and print a message when the loop has ended

   for x in range(6):
      print(x)
   else:
      print("Finally finished!")

   Note: The else block will NOT be executed if the loop is stopped by a break statement.

   #Example-
   Break the loop when x is 3, and see what happens with the else block.

   for x in range(6):
      if x == 3: 
         break
      print(x)
   else:
      print("Finally finished!")

   
   4.The pass Statement- Pass is a null statement that does nothing.It is used as a placeholder for future code.
   
   for el in range(10):
      pass
   print("some useful work")

   for loops cannot be empty, but if you for some reason have a for loop with no content, put in the
   pass statement to avoid getting an error.

   #Example-
   for x in [0, 1, 2]:
      pass

 (*)Nested Loops-
   A nested loop is a loop inside a loop.

   The "inner loop" will be executed one time for each iteration of the "outer loop".

   #Example-
   Print each adjective for every fruit

   adj = ["red", "big", "tasty"]
   fruits = ["apple", "banana", "cherry"]

   for x in adj:
      for y in fruits:
         print(x, y)

 (*)Let's Practice- Using for loop
   1.Print the elements of the following list using a loop.
     [1,4,9,16,25,36,49,64,81,100]

   list=[1,4,9,16,25,36,49,64,81,100]

   for el in nums:
      print(el)


   2.Search for a number x in this tuple using loop.
     [1,4,9,16,25,36,49,64,81,100]

   tuple=(1,4,9,16,25,36,49,64,81,100)
   
   x=49
   count=0
   idx=0
   for el in tuple:
      if(el==x):
         print("Yes Number found at idx",idx)
         count+=1
      idx+=1
   if(count==0):
      print("No")

   
 (*)Let's Practice- Using for & range()
   1.Print numbers from 1 to 100.
   
   for i in range(1,101):
      print(i)

   
   2.Print number from 100 to 1.
   
   for i in range(100,0,-1):
      print(i)


   3.Print the multiplication table of a number n.
   
   n=int(input("Enter the value of n:"))

   for i in range(1,11):
      print(i*n)

 (*)Let's Practice-
   1.Write a program to find the sum of first n numbers.(using while)
   
   n=int(input("Enter the value of n:"))
   sum=0
   i=1
   while(i<=n):
      sum+=i
      i+=1
   print("Sum =",sum)



   2.Write a program to find the factorial of first n numbers.(using for)

   n=int(input("Enter the value of n:"))
   factorial=1
   for i in range(1,n+1):
      factorial*=i
   print("factorial=",factorial)
   
"""

"""Chapter 6-Functions & Recursion"""
"""Functions in Python-
   Block of statements that perform a specific task.

   def function_name(parameter1,parameter2,...):  #Function Definition
      #some work
      return value

   function_name(argument1,argument2,...)  #function call

   def sum(a,b):
      s=a+b
      return s
   
   print(sum())

"""
"""There are two types of functionin python-
   1.Built-in Functions        2.User defined Functons
     print()
     len()
     type()
     range()
   
"""
"""Default Parameters- Assigning a default value to parameter, which is used when no argument is passed.
   
   def product(a=1,b=1): #set the default value in last parameter,after that first parameter.
      print(a*b)
      return a*b
   
   product()

"""
"""Let's Practice-
   1.Write a function to print the length of a list.(list is the parameter)
   
   numbers=[1,2,3,4,5]
   heroes=["Iron Man","Captain America","Thor","Spider Man"]

   def length(list):
      print(len(list))
   
   length(numbers)
   length(heroes)


   2.Write a function to print the elements of a list in a single line.(list is the parameter)

   heroes=["Iron Man","Captain America","Thor","Spider Man"]

   def elements(list):
      for item in list:
         print(item,end=" ")

   elements(heroes)
   print()
   

   3.Write a function to find the factorial of n.(n is the parameter)

   def factorial(n):
      fact=1
      for i in range(1,n+1):
         fact*=i
      print(fact)

   factorial(5)

   4.Write a function to convert USD to INR.
   
   def converter(USD):
      INR=USD*82
      print(USD,"USD =",INR,"INR")
    
   converter(4)

"""

"""Recursion- When a function calls itself repeatedly.
   
   #prints n to 1 backwards (n=5)
   
   def show(n):
      if(n==0):       #Base case
         return 0
      print(n)
      show(n-1)
   show(5)     
      

   #returns n! (factorial) (n=5)
   def fact(n):
      if(n==0 or n==1):   #Base case (stopping condition)
         return 1
      else:
         return n*fact(n-1)
   print(fact(5))

"""
"""Let's Practice-
   1.Write a recursive function to calculate the sum of first n natural numbers.
   
   def calc_sum(n):
      if(n==0):
         return 0
      return calc_sum(n-1)+n

   print(calc_sum(10))


   2.Write a recursive function to print all elements in a list. (Hint: use list & index as parameters.)
   
   def print_list(list,idx=0):
      if(idx==len(list)):
         return 0
      print(list[idx])
      print_list(list,idx+1)

   fruits=["apple", "banana", "mango", "orange"]
   print_list(fruits)

"""


"""Chapter 7- File Input/Output """
"""File I/O in Python- 
   Python can be used to perform operations on a file. (read & write data)

  #Types of all files-
   1.Text Files: .txt, .docx, .log  etc.
   2.Binary Files: .mp4, .mov, .png, .jpej  etc.


  #Open, read & close File-
   We have to open a file before reading or writing.
   
   Syntex:
   f=open("file_name","mode") #file_name- sample.txt,demo.docx etc.  #mode-r:read mode, w:write mode etc.

   data=f.read()
   f.close()

   Example:
   f=open("demo.txt","r")
   data=f.read()
   print(data)
   print(type(data))
   f.close()

  #mode-
   Character            Meaning
   'r'            Open for reading (default)
   'w'            Open for writing, truncating the file first
   'x'            Create a new file and open it for writing
   'a'            Open for writing, appending to the end of the file if it exists
   'b'            Binary mode
   't'            text mode (default)
   '+'            Open a disk file for updating (reading and writing) 


  #Reading a file
   data=f.read()     #reads entire file
   data=f.readline() #reads one line at a time

   >Read only some letter-
   f=open("demo.txt","r")
   data=f.read(5)
   print(data)
   f.close()

   >Read Only some specific line-
   f=open("demo.txt","r")
   line1=f.read()
   print(line1)
   line2=f.read()
   print(line2)
   f.close()


  #Writing to a file
   f=open("demo.txt", "w")
   f.write("This is a new line")   #overwrites the entire file

   f=open("demo.txt", "a")
   f.write("This is a new line")   #adds to the file

   >Overwrites the entire file-
   f=open("demo.txt","w")
   f.write("I want to learn JavaScript tomorrow.")
   print(f.read())
   f.close()

   >Add at the end (appended)-
   f=open("demo.txt","a")
   f.write("\nThen I'll move to React JS.")
   print(f.read())
   f.close()

   >If you want to create a file and write in a file-
   f=open("sample.txt", "a")
   f.close()

   >If you want to overwrite in starting ("r+" mode)
   f=open("demo.txt","r+")
   f.write("abc")
   print(f.read())
   f.close()

   >If you want to read & Write in a file with truncate mode ("w+" mode)
   f=open("demo.txt","w+")
   f.write("abc")
   print(f.read())
   f.close()

   >If you want to read & write in a file with appended mode ("a+" mode)
   f=open("demo.txt","a+")
   f.write("abc")
   print(f.read())
   f.close()

  #with Syntex-
   with open("demo.txt","a") as f:
      data=f.read()

   >Read a file using with syntex-
   with open("demo.txt","r") as f:
      data=f.read()
      print(data)

   >write new data in a file using with syntex-
   with open("demo.txt","w") as f:
      f.write("new data")
      

  #Deleting a File- using the os module
   Module (like a code library) is a file written by another programmer that generally has
   a functions we can use.

   import os
   os.remove(filename)

   >Install any module in Python
   pip install module_name
   pip3 install module_name

""" 

"""Let's Practice
   1.Create a new file "practice.txt" using python. Add the following data in it.
     Hi everyone
     We are learning File I/O
     Using Java.
     I like programming in Java.

   with open("practice.txt","w") as f:
      f.write("Hi everyone\nWe are learning File I/O\n")
      f.write("Using Java.\nI like programming in Java.")

   
   2.Write a function that replace all occurrences of "java" with "python" in above file.
   
   with open("practice.txt","r") as f:
      data=f.read()

   newData=data.replace("Java", "Python")
   print(newData)

   with open("practice.txt","w") as f:
      f.write(newData)


   3.Search if the word "learning" exists in the file or not.

   word="learning"
   with open("practice.txt","r") as f:
      data=f.read()
      if(data.find(word)!=-1):
         print("Found")
      else:
         print("Not Found")

   
   4.Write a function to find in which line of the file does the word "learning" occur first.
     print -1 if word not found.

   def check_for_line():
      word="learning"
      data=True
      line_no=1
      with open("practice.txt", "r") as f:
         while data:
            data=f.readline()
            if(word in data):
               print(line_no)
               return 0
            line_no +=1
      return -1
   print(check_for_line())

   
   5.From a file containing numbers separated by comma, print the count of even numbers.
   
   count=0
   with open("practice.txt", "r") as f:
      data=f.read()
      nums=data.split(",")
      for val in nums:
         if(int(val)%2==0):
            count+=1
   
   print(count)


"""


"""Chapter 8- OOPS in Python | Object Oriented Programming | Classes & Objects """





"""Chapter 9- OOPS Part 2 | Object Oriented Programming """
