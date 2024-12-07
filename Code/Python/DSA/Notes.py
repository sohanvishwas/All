
# DSA (Data Structures & Algorithms)

"""(1)-Introduction to DSA

Agenda-
1.Why to learn DSA?
2.What is the importance of structuring data?
3.What is a data structure?
4.Where are data structure resides?
5.Classification of data structure.
6.Algorithms.
7.Prereqursites.


(1)Why to learn DSA?
>Raise level of programming
>Efficient Programming
>Able to solve complex problems
>Campus Placement
>A-Grade company placements

(2)What is the importance of structuring data?
>Dictionary
>Almirah
>Map
>Ledger

(3)What is a data structure?
Data Structure is a particular way of storing and organizing data in a computer so that it can be used 
efficiently.

(4)Where are data structure resides?
>RAM

(5)Classification of data structure.
>Linear Data Structures-
Array, Dynamic array, Linked List, Stack, Queue, Deque etc.

>Non-Linear Data Structures-
BST(Binary Search Tree), AVL Tree(Adelson-Velsky and Landis Tree), B Tree, B+ Tree, Graph etc.

(6)Algorithms.
An algorithm is the step by step, linguistic representation of logic to solve a given problem.

(7)Prereqursites.
Python
>built-in types
>control statements
>functions
>classes and objects
>--init--()
>Types of variables and functions in class

"""


"""(2)-Array and List 
Agenda-
1.Array and List
2.Array module
3.Creating array
4.Type codes
5.Array methods
6.List
7.Creating list object
8.Methods of list
9.Built-in methods
10.NumPy


(1)Array and List 
>built-in module  - builtins
>There are several classes defined in builtins module - int,floot,str,list,tuple,dict,set,range,bytes,object,Exception
>Another module - array
Array is not a built-in data structure and therefore need to be imported.

(2)Array module
This module defines an object type which can efficiently represent an array of basic values: characters,integers,floating point numbers.

Arrays are sequence types and behave very much like lists, but arrays can have elements of limited types.

(3)Creating array
from array import *
a=array(type code, [elements])

(4)Type codes
Type Code        C Type
'b'             signed integer
'B'             unsigned integer
'u'             unicode character
'h'             signed integer
'H'             unsigned integer
'i'             signed integer
'I'             unsigned integer
'l'             signed integer
'L'             unsigned integer
'q'             signed integer
'Q'             unsigned integer
'f'             flooting point
'd'             flooting point

Example:
from array import *
a=array('i',[5,10,15,40])

for i in range(4):
    print(a[i],end=" ")  #5 10 15 40

(5)Array methods
append()
count()
extend()
fromlist()
index()
insert()
pop()
remove()
reverse()
tolist()

(6)List
>list is a class
>list is mutable
>list elements are indexed
>list is an iterable
>list can grow (dynamic array)
>list can contain different type elements.

(7)Creating list object
list1=[10,20,30]
list2=[]
list3=[10,5.7,'abc']

(8)Methods of list
append()
clear()
count()
extend()
index()
insert()
pop()
remove()
sort()
reverse()

(9)Built-in methods
len()
sum()
max()
min()
sorted()

(*)What is the different between list and array
>list and array both are grewable.
>list can contain heterogeneous data.
>array can contain homogeneous data.

(10)NumPy
If you want to perform mathematical calculations, then you should use NumPy arrays by importing NumPy package.
Otherwise use lists as it work in a similar way and more flexible to work with.

(*)Install NumPy
open cmd/terminal
>pip install numpy (for Windows)
>pip3 install numpy (for Mac)

(*)Import NumPy

from array import *
a=array('i',[5,10,15,40])

OR

import numpy as np 
a=np.array([1,2,3,4])
print(a)

b=np.array([[1,2,3],[10,20,30]]) (2d array)
print(b)

c=np.array([[1,2,3],[10,20]]) (1d array with two list type elements)
print(c)

"""


"""(3)-Classes and Objects
Agenda-
1.Class
2.Attributes
3.Objects
4.Class Object
5.--init--() method
6.Types of methods
7.Types of variables


(1)Class
Class is a description of an object
"""