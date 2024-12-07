/*JavaScript History-

 #This is Netscape Navigator-
  A web browser which used to dominate the world in 90s with rhe market share of around 90%.
  This is where the story of JavaScript starts form.
   
 #Static Websites-
  Websites used to be static then. And browsers could not do even a single calculation at that time.
  In order to do even a simple math browser had to talk to servers.

 #Making the language of web-
  So the founder of Netscape decided to develope a programming language for his Netscape.
  (Founder of Netscape: Marc Andreessen)
  In September 1995 Andreessen hired one guy called Brendan Eich to develop that language.
  (Creator of JavaScript: Brendan Eich)

 #Question-Which was the first browser for public use and who developed it.
  The first web browser, "World Wide Web", was developed in 1990 by "Tim Berners-Lee" for the NeXT Computer 
  (at the same time as the first web server for the same machine) and introduced to his colleagues at CERN 
  in March 1991.

 #Development of JavaScript-
  Brendan starts the development and the rest is history.He developed the whole new language in just 10 
  freaking days.
  And that language was called "Mocha".Then it was changed to "LiveScript" and then finally "JavaScript".

 #Atwood's law-
  "Any application that can be written in JavaScript, will eventually be written in JavaScript."
  (Founder of Stackoverflow: Jeff Atwood)

 #JavaScript Versions-
  JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.
  ECMA(European Computer Manufacturers Association) is an International Organisation.
  ECMAScript is the official name of the language.
  
  ECMAScript versions have been abbreviated to ES1-1997, ES2-1998, ES3-1999, ES4-Never Released,
  ES5-2009 and ES6-2015.

  Since 2016, versions are named by year (ECMAScript 2016,2017,2018,2019,2020).

*/

/*Variables in JavaScript-
  A JavaScript variable is just a name of storage location.
  Variables are Containers for Storing Data in JavaScript.

  JavaScript is a dynamically typed language so the type of variables is decided at runtime.Therefore there is
  no need to explicitly define the type of a variable.

  >JavaScript Variables can be declared in 4 ways.
   1.Automatically
   2.Using Var keyword
   3.Using let keyword
   4.Using const keyword

 1.Automatically-
   Example:
     x=4
     y=5

   Note: It is considered good programming practice to always declare variables before use.

 2.Using var keyword-
   Example:
     var x=4
     var x=5
    
   Note: 
    The var keyword was used in all JavaScript code from 1995 to 2015.
    The let and const keywords were added to JavaScript in 2015.

 3.Using let keyword-
   Example:
     let x=4
     let y=5

 4.Using const keyword-
   Example:
     const x=4
     const y=5


 #Explanation: const keyword is used when we assign a value permanently to a variable.So when we try to change
  the value of a variable declared with the const keyword it will throw an error.The variables declared with 
  var and let are mutable that is their value can be changed but variables declared using const are immutable.

 #Note: The newly introduced keywords let and const are block scoped whereas var is function scope.

 #When to use var,let or const-
  >Always declare variables.
  >Always use const if the value should not be changed.
  >Always use const if the type should not be changed(Arrays & Objects).
  >We should use let if we want mutable value or we can not use const.
  >We use var only if we support old browser.

 #Comparison of properties of let,var,and const keywords in JavaScript:
   Property                var                 let                  const
    Scope         -->   Function scoped    Block scoped          Block scoped
    Updation      -->   Mutable            Mutable               Immutable
    Redeclaration -->   can be redeclared  cannot be redeclared  cannot be redeclared
    Hoisting      -->   Hoisted at top     Hoisted at top        Hoisted at top
    Origins       -->   Pre ES2015 (ES6)   ES2015 (ES6)          ES2015 (ES6)
    Support       -->   Supported in the   Not Supported in the  Not Supported in the
                        old version of     old version of the    old version of the
                        Browser            browser               browser

 #JavaScript Identifiers- JavaScript variables must have unique names.These names are called Identifiers.
  Basic rules to declare a variable in JavaScript:
  >These are case-sensitive (a and A are different variables).
  >It can contain letters,numbers,underscore("_"),or dollar signs("$").
  >Can only begin with a letter,underscore("_"),or dollar signs("$").
  >A variable name cannot be a reserved keyword.

 #Programming Naming Conventions-
  1.Camel Case- In camel case,you start a name with a small letter.If the name has multiple words,the later 
  words will start with a capital letter.
  Example: firstName,lastName.

  2.Snake Case- Like in camel case,you start the name with a small letter in snake case.If the name has multiple 
  words,the later words will start with small latters and you use a underscore("_") to separate the words.
  Example: first_name,last_name.

  3.Kabab Case- Kabab case is similar to snake case,but you use a hyphen("-") instead of an underscore("_") to
  separate the words.
  Example: first-name,last-name.

  4.Pascal Case- Unlike the previous examples,names in pascal case start with a capital letter.In case of the
  names with multiple words,all words will start with capital letters.
  Example: FirstName,LastName.
  
*/

/*Data Types in JavaScript-
  In JavaScript,variables hold values,and each value possesses a data type that indicates the nature of the
  stored information.
  There are two types of data types in JavaScript.
  1.Primitive
  2.Non Primitive


 #Primitive data types-
  The predefined data types provided by JavaScript language are known as primitive data types.
  Primitive data types are also known as in-built data types.
  There are seven types of primitive data types in JavaScript.

  1.Number- The number data type in JavaScript can be used to hold decimal values as well as values without decimals.
    Example:
      let X=250;
      let y=40.5;
  
  2.String- The string data type in JavaScript represents a sequence of characters that are surrounded by single or 
    double quotes.
    Example:
      let str="Hello All"

  3.Undefined- This means that a variable has been declared but has not been assigned a value, or it has been
    explicitly set to the value `undefined`.
    Example:
      let x;
      console.log(x); //Output= undefined

  4.Boolean- The boolean data types can accept only two values true & false.
    Example:
      let x=true   //true=1
      let y=false  //false=0
      console.log(typeof(x)) //Output= boolean
      console.log(typeof(y)) //Output= boolean

  5.Null- This data type can hold only one possible value that is null.
    Example:
      let x=null;
      console.log(typeof(x))  // Output= object

  6.BigInt- The bigint data type can represent numbers greater than 2**53-1 which helps to perform operations
    on large numbers.The number is specified by writing 'n' at the end of the value.
    Example:
      let x=12342222222222222222n
      console.log(typeof(x))       //Output= bigint

  7.Symbol- The symbol data type is used to create objects which will always be unique.These objects can be 
    created using symbol constructor.
    Example:
      let sym=Symbol("Hello")
      console.log(sym)           //Output= Symbol(Hello)
      console.log(typeof(sym))   //Output= Symbol


 #Non Primitive data types-
  The data types that are derived from primitive data types of the JavaScript language are known as non-primitive
  data types.It is also known as derived data types or reference data types.
  There are two types of non-primitive data types in JavaScript.
  1.Array- With the help of an array,we can store more than one element under a single name.
    Example:
      let arr=[1,2,3,4,5]
      console.log(arr)          //Output= [1,2,3,4,5]
      console.log(typeof(arr))  //Output= object

  2.Object- An object in JavaScript is an entity having properties and methods.Everything is an object in JavaScript.
    Example:
      let person={
        Name:"Alex",
        Age:18,
      }
      console.log(person.Name,person.Age) //Output= Alex 18
      console.log(typeof(person))         //Output= object

 
 #Difference between primitive vs Non-Primitive-

  >Primitive- Primitive data types are immutable,store single values,do not have methods,cannot be shared,and
   have default values when not assigned.

  >Non Primitive- Non primitive data types are mutable,store multiple values, have pre-defined methods,can be
   shared,and their default value is null when not assigned.

*/

/*JavaScript Dialogue Boxes-
  Dialogue boxes are a kind of popup notification,this kind of informative functionality is used to show 
  success, failure, or any particular/important notification to the user.

 #JavaScript uses 3 kinds of dialog boxes:
  1.Alert Box- alert("Warning danger you have not filled everything !")
    An alert box is used on the website to show a warning message to the user that they have entered the wrong 
    value other than what is required to fill in that position. Nonetheless,an alert box can still be used for
    friendlier messages.The alert box gives only one button "OK" to select and proceed.
  
  2.Confirm Box- confirm("Do you want to continue ?")
    A confirm box is often used if you want the user to verify or accept something.When a confirm box pops up,
    the user will have to click either "OK" or "Cancel" to proceed.If the user clocks on the OK button,the 
    window method confirm() will return true.If the user clicks on the Cancel button,then confirm() returns 
    false and will show null. 


  3.Prompt Box- prompt("Please enter your name...")
    A prompt box is often used if you want the user to input a value before entering a page.When a prompt box
    pops up,the user will have to click either "OK" or "Cancel" to proceed after entering an input value.If the
    user clicks the OK button,the window method prompt() will return the entered value from the text box.If the 
    user clicks the Cancel button,the window method prompt() returns null.
    
*/

/*JavaScript Operators-
  An operator is a character that represents a specific mathematical or logical action or process.

 #Types of Operators-
  There are 7 types of Operaters in JavaScript.
  
  1.Arithmetic Operators
  2.Assignment Operators
  3.Comparison Operators
  4.Logical Operators
  5.Bitwise Operators
  6.Ternary Operators
  7.Unary Operators


 1.Arithmetic Operators- Arithmetic Operators are used to perform arithmetic on numbers.
   Operator	    Description
    +	            Addition
    -	            Subtraction
    *	            Multiplication
    **	          Exponentiation (ES2016)
    /	            Division
    %	            Modulus (Division Remainder)

 2.Assignment Operators- Assignment operators are used to assign values to variables.
   Operator      Example	      Same As
    =	            x=y	           x=y
    +=	          x+=y	         x=x+y
    -=	          x-=y	         x=x-y
    *=	          x*=y	         x=x*y
    /=	          x/=y	         x=x/y
    %=	          x%=y	         x=x%y
    **=	          x**=y	         x=x**y

 3.Comparison Operators- Comparison operators can compare numbers or strings and perform evaluations.
   Operator	      Description
    ==	             equal to
    ===	             equal value and equal type
    !=	             not equal
    !==	             not equal value or not equal type
    >	               greater than
    <	               less than
    >=	             greater than or equal to
    <=	             less than or equal to

 4.Logical Operators- Logical operators are generally used for combining two or more relational statements.They 
   return Boolean values. The logical operators are used primarily in the expression evaluation to make a decision. 
   Operator	   Description
    &&	          and
    ||	          or
    !	            not
  
 5.Bitwise Operators- A bitwise operator is a character representing an action that works on data at the bit 
   level rather than with bytes or larger units of data, as is more common.
   Operator	  Name	                 Description
    &	         AND	                  Sets each bit to 1 if both bits are 1
    |	         OR	                    Sets each bit to 1 if one of two bits is 1
    ^	         XOR	                  Sets each bit to 1 if only one of two bits is 1
    ~	         NOT	                  Inverts all the bits
    <<	       Zero fill left shift	  Shifts left by pushing zeros in from the right and let the leftmost bits fall off
    >>	       Signed right shift	    Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
    >>>	       Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off
  
  #Examples-
   Operation	Result	Same as	     Result
   5 & 1	      1	    0101 & 0001	 0001
   5 | 1	      5	    0101 | 0001	 0101
   ~ 5	        10	  ~0101	       1010
   5 << 1	      10	  0101 << 1	   1010
   5 ^ 1	      4	    0101 ^ 0001	 0100
   5 >> 1	      2	    0101 >> 1	   0010
   5 >>> 1	    2	    0101 >>> 1	 0010
  
  #JavaScript Uses 32 bits Bitwise Operands-
   JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.
   Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.
   after the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.

   The examples above uses 4 bits unsigned binary numbers. Because of this ~ 5 returns 10.
   Since JavaScript uses 32 bits signed integers, it will not return 10. It will return -6.

   00000000000000000000000000000101 (5)
   11111111111111111111111111111010 (~5 = -6)

   A signed integer uses the leftmost bit as the minus sign.

 6.Ternary Operators- A ternary operator is a conditional operator in programming that takes three operands and 
   evaluates an expression based on a condition.It is commonly represented as "condition? expression1: expression2" 
   in many programming languages.
   Operator  Name       Description                  Syntax                            Example
    (?):     Ternary     It is like the short form    Y = ? A : B If the condition is   let PMarks=40;
             Operator    of the if-else condition.    true then Y = A otherwise Y = B   let result=(PMarks>39)?"Pass":"Fail";
                                                                                        console.log(result);

 7.Unary Operators- A unary operation is an operation with only one operand. This operand comes either before or 
   after the operator. Unary operators are more efficient than standard JavaScript function calls. Additionally, 
   unary operators can not be overridden, therefore their functionality is guaranteed. Operator.
   Operator	    Description
    ++	          Increment
    --	          Decrement


*/

/*Conditional Statements in JavaScript- 
  Conditional statements are used to perform different actions based on different conditions.

  There are several methods that can be used to perform Conditional Statements in JavaScript-
  Conditional Statement	     Description
   if statement	               Executes a block of code if a specified condition is true.
   else statement	             Executes a block of code if the same condition of the preceding if statement is false.
   else if statement	         Adds more conditions to the if statement, allowing for multiple alternative conditions to be tested.
   Nested if else statement	   Allows for multiple conditions to be checked in a hierarchical manner.
   ternary operator	           Provides a concise way to write if-else statements in a single line.
   switch statement	           Evaluates an expression, then executes the case statement that matches the expression’s value.


 #Using if Statement-
  Use the if statement to specify a block of code to be executed if a condition is true.
  
  >Syntax:
  if (condition) {
    //  block of code to be executed if the condition is true
  }

  >Example: In this example, we are using the if statement to find given number is even or odd.
  let num = 20;
  if (num % 2 === 0) {
    console.log("Given number is even number.");
  }

  if (num % 2 !== 0) {
    console.log("Given number is odd number.");
  };

  Output- Given number is even number.

 
 #Using else Statement- (if-else)
  Use the else statement to specify a block of code to be executed if the condition is false.

  >Syntax:
  if (condition) {
    //  block of code to be executed if the condition is true
  } else {
    //  block of code to be executed if the condition is false
  }

 >Example: In this example, we are using if-else conditional statement to check the driving licence eligibility date.
  let age = 25;
  if (age >= 18) {
    console.log("You are eligible of driving licence")
  } else {
    console.log("You are not eligible for driving licence")
  };

  Output- You are eligible of driving licence


 #Using else if Statement-
  Use the else if statement to specify a new condition if the first condition is false.
  
  >Syntex:
  if (condition1) {
    //  block of code to be executed if condition1 is true
  } else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    //  block of code to be executed if the condition1 is false and condition2 is false
  }

  >Example: In this example, we are using the above-explained approach.
  const num = 0;
  if (num > 0) {
    console.log("Given number is positive.");
  } else if (num < 0) {
    console.log("Given number is negative.");
  } else {
    console.log("Given number is zero.");
  };

  Output- Given number is zero.


 #Nested if else statement-
  Nested if-else statements are the ones in which one conditional statement (if statement or if-else statement)
  is nested inside another conditional statement (if statement or if-else statement).

  >Syntax:
  if (condition1) {
    // Code block 1
    if (condition2) {
      // Code block 2
    } else {
      // Code block 3
    }
  } else {
    // Code block 4
  }

  >Example: This example demonstrates how nested if…else statements can be used to handle different scenarios 
  based on multiple conditions.
  let weather = "sunny";
  let temperature = 25;
  if (weather === "sunny") {
    if (temperature > 30) {
      console.log("It's a hot day!");
    } else if (temperature > 20) {
      console.log("It's a warm day.");
    } else {
      console.log("It's a bit cool today.");
    }
  } else if (weather === "rainy") {
    console.log("Don't forget your umbrella!");
  } else {
    console.log("Check the weather forecast!");
  };

  Output- It's a warm day.


 #Using Ternary Operator ( ?: )-
  The conditional operator, also referred to as the ternary operator (?:), is a shortcut for expressing 
  conditional statements in JavaScript.

  >Syntax:
  condition ? value if true : value if false

  >Example: In this example, we use the ternary operator to check if the user’s age is 18 or older. It prints eligibility for voting based on the condition.
  let age = 21;
  const result =
    (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";

  console.log(result);

  Output- You are eligible to vote.


 #Using Switch Statement- (Switch Case)
  The switch statement is used to perform different actions based on different conditions.

  As the number of conditions increases, you can use multiple else-if statements in JavaScript. but when we 
  dealing with many conditions, the switch statement may be a more preferred option.
  
  >Syntax
  switch(expression) {
    case value1:
      // code block
      break;
    case value2:
      // code block
      break;
    default:
      // code block
  }

  >How Switch Statement Works-
   1.Evaluation: The expression inside the switch the statement is evaluated once.
   2.Comparison: The value of the expression is compared with each case label (using strict equality ===).
   3.Execution: If a match is found, the corresponding code block following the matching case the label is 
     executed. If no match is found, the execution jumps to the default case (if present) or continues with 
     the next statement after the switch block.
   4.Break Statement: After executing a code block, the break statement terminates the switch statement, 
     preventing execution from falling through to subsequent cases. If break is omitted, execution will 
     continue to the next case (known as “fall-through”).
   5.Default Case: The default case is optional. If no match is found, the code block under default is executed.

  >Example: Here, we will print the day name on day 3.
  let day = 3;
  let dayName;
  switch (day) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "Invalid day";
  }
  console.log(dayName);

  Output- Wednesday.


  >The break Keyword-
  When JavaScript reaches a break keyword, it breaks out of the switch block.
  This will stop the execution inside the switch block.
  It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

  Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

  >The default Keyword-
  The default the keyword is used within a switch statement as a fallback option when none of the case 
  expressions match the value being evaluated. It acts similarly to the else statement in an if...else chain, 
  providing a default action to take when no other specific cases match.

  Position of default case does not matter: Regardless of its placement, the default case only gets executed if 
  none of the other case conditions are met. So, putting it at the beginning, middle, or end doesn’t change the 
  core logic (unless you’re using a less common technique called fall-through).
  
  Example: we will print the default case.
  let day = 8;
  let dayName;
  switch (day) {
    default:
      dayName = "Invalid day";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    
  }
  console.log(dayName);

  Output- Invalid day.

  >Common Code Blocks-
  In some cases, we need to use the same code for multiple switch cases. 
  let day=7;
  let text;
  switch (day) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 6:
    case 7:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  console.log(text)

  Output- It is Weekend.

  Note: If multiple switch cases match a value, the first is executed.

*/

/*JavaScript Loops-
  JavaScript loops are essential for efficiently handling repetitive tasks. They execute a block of code 
  repeatedly as long as a specified condition remains true. 

 #Different Kinds of Loops- 
  JavaScript supports different kinds of loops:

  1.for - loops through a block of code a number of times
  2.for-in - loops through the properties of an object
  3.for-of - loops through the values of an iterable object
  4.while - loops through a block of code while a specified condition is true
  5.do-while - also loops through a block of code while a specified condition is true 

 1.for loop-
  The for loop provides a concise way of writing the loop structure. The for loop contains initialization, 
  condition, and increment/decrement in one line thereby providing a shorter, easy-to-debug structure of 
  looping. 

  Syntax:
  for (initialization; testing condition; increment/decrement) {
    statement(s)
  }
  
  >Initialization condition: It initializes the variable and mark the start of a for loop. An already declared 
  variable can be used or a variable can be declared, local to loop only.
  >Test Condition: It is used for testing the exit condition of a for loop. It must return a boolean value. It 
  is also an Entry Control Loop as the condition is checked prior to the execution of the loop statements.
  >Statement execution: Once the condition is evaluated to be true, the statements in the loop body are executed.
  >Increment/ Decrement: It is used for updating the variable for the next iteration.
  >Loop termination: When the condition becomes false, the loop terminates marking the end of its life cycle.

  Example:
  for (let i = 2; i <= 4; i++) {
    console.log("Value of i: " + i);
  }

  Output:
  Value of x: 2
  Value of x: 3
  Value of x: 4
  
 2.for-in Loop-
   for-in loop is used to iterate over the properties of an object. The for-in loop iterates only over those 
   keys of an object which have their enumerable property set to “true”.

  Syntax:
  for(let variable_name in object_name) {
    // Statement
  }

  Example: This example shows the use of for-in loop.
  let myObj = { x: 1, y: 2, z: 3 };
  for (let key in myObj) {
    console.log(key, myObj[key]);
  }

  Output:
  x 1
  y 2
  z 3


  >in keyword
  'x' in myObj //true (Only for Browser)
  console.log('a' in myObj); //false
  console.log('x' in myObj); //true

 3.for-of Loop-
   for-of loop is used to iterate the iterable objects for example – array, object, set and map. It directly 
   iterate the value of the given iterable object and has more concise syntax than for loop.

  Syntax:
  for(let variable_name of  object_name) {
    // Statement
  }

  Example: This example shows the use of for-of loop.
  let arr = [1, 2, 3, 4, 5];
  for (let value of arr) {
    console.log(value);
  }

  Output:
  1
  2
  3
  4
  5
  
 >convert object to array-
  let myObj = { 
    x: 1, 
    y: 2, 
    z: 3,
  };

  const myObjKeys=Object.keys(myObj)
  const myObjValues=Object.values(myObj)
  const myObjEntries=Object.entries(myObj)

  console.log(myObjKeys);
  for(let key of myObjKeys){
    console.log(key);
  }

  console.log(myObjValues);
  for(let key of myObjValues){
    console.log(key);
  }

  console.log(myObjEntries);
  for(let key of myObjEntries){
    console.log(key);
  }


 4.while Loop-
   The while loop is a control flow statement that allows code to be executed repeatedly based on a given 
   Boolean condition. The while loop can be thought of as a repeating if statement. 

  Syntax:
  while (boolean condition) {
    loop statements...
  }
    
  OR
  initialization
  while (testing condition) {
    loop statements...
    increment/decrement
  }
  
  >While loop starts with checking the condition. If it is evaluated to be true, then the loop body statements
  are executed otherwise first statement following the loop is executed. For this reason, it is also called 
  the Entry control loop
  >Once the condition is evaluated to be true, the statements in the loop body are executed. Normally the 
  statements contain an updated value for the variable being processed for the next iteration.
  >When the condition becomes false, the loop terminates which marks the end of its life cycle.

  Example:
  let i = 1;
  while (i < 5) {
    console.log(i); 
    i += 1;
  }

  Output:
  1
  2
  3
  4

 5.do-while Loop-
   The do-while loop is similar to the while loop with the only difference is that it checks for the condition
   after executing the statements, and therefore is an example of an Exit Control Loop. It executes loop 
   content at least once event the condition is false.

  Syntax:
  do {
    Statements...
  }
  while (condition);  

  OR
  initialization
  do {
    loop statements...
    increment/decrement
  }
  while (condition);  


  >The do-while loop starts with the execution of the statement(s). There is no checking of any condition for
  the first time.
  >After the execution of the statements and update of the variable value, the condition is checked for a true
  or false value. If it is evaluated to be true, the next iteration of the loop starts.
  >When the condition becomes false, the loop terminates which marks the end of its life cycle.
  >It is important to note that the do-while loop will execute its statements at least once before any 
  condition is checked and therefore is an example of the exit control loop.

  Example:
  let i = 1;
  do {
    console.log(i);
    i++;
  } while(i <= 4)

  Output:
  1
  2
  3
  4


 #Infinite Loop (Loop Error)
  One of the most common mistakes while implementing any sort of loop is that it may not ever exit, i.e. the 
  loop runs for infinite times. This happens when the condition fails for some reason. 

  Example: This example shows an infinite loop.
  let x = 5;
  while (x == 5) {
    console.log("In the loop");
  }

 #break Statement-
  break statement is used to terminate the execution of the loop or switch statement when the condition is true.

  Syntax:   break;

  Example:
  for (let i = 1; i < 6; i++) {
    if (i == 4) {
      break;
    }
    console.log(i);
  }

  Output:
  1
  2
  3

  
 #continue Statement-
  continue statement is used to break the iteration of the loop and follow with the next iteration. The break 
  in iteration is possible only when the specified condition going to occur. The major difference between the 
  continue and break statement is that the break statement breaks out of the loop completely while continue is 
  used to break one statement and iterate to the next statement.

  Syntax:  continue;

  Example:
  for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) {
      continue;
    }  
    console.log(i);
  }

 Output:
 1
 3
 5
 7
 9

*/

/*JavaScript Arrays-
  JavaScript Array is used to store multiple elements in a single variable. It can hold various data types, 
  including numbers, strings, objects, and even other arrays. It is often used when we want to store a list 
  of elements and access them by a single variable.

  Syntax:
  const arr = ["Item1", "Item2", "Item3", ...];

  Example: Creating an array and copying its items to another array, and displaying the copied items.
  // Create and initialize an array 
  let courses = ["HTML", "CSS", "JavaScript", "React"]; 
  
  // Display the array items 
  console.log(courses); 

  // Create a new empty array 
  let newArray = []; 
   
  // forEach loop to push elements 
  // into new array 
  courses.forEach(function (course) { 
    newArray.push(course); 
  }); 
   
  // Display the new array of items 
  console.log(newArray); 

  Output:
  [ 'HTML', 'CSS', 'JavaScript', 'React' ]
  [ 'HTML', 'CSS', 'JavaScript', 'React' ]

 #JavaScript Array Methods and Properties-
    Name	               Description
   [ ]	            Creates a new Array
   new Array()	    Creates a new Array
   at()	            Returns an indexed element of an array
   concat()	        Joins arrays and returns an array with the joined arrays
   constructor	    Returns the function that created the Array prototype
   copyWithin()	    Copies array elements within the array, to and from specified positions
   entries()	      Returns a key/value pair Array Iteration Object
   every()	        Checks if every element in an array pass a test
   fill()	          Fill the elements in an array with a static value
   filter()	        Creates a new array with every element in an array that pass a test
   find()	          Returns the value of the first element in an array that pass a test
   findIndex()	    Returns the index of the first element in an array that pass a test
   findLast()	      Returns the value of the last element in an array that pass a test
   findLastIndex()	Returns the index of the last element in an array that pass a test
   flat()	          Concatenates sub-array elements
   flatMap()	      Maps all array elements and creates a new flat array
   forEach()	      Calls a function for each array element
   from()	          Creates an array from an object
   includes()	      Check if an array contains the specified element
   indexOf()	      Search the array for an element and returns its position
   isArray()	      Checks whether an object is an array
   join()	          Joins all elements of an array into a string
   keys()	          Returns a Array Iteration Object, containing the keys of the original array
   lastIndexOf()	  Search the array for an element, starting at the end, and returns its position
   length	          Sets or returns the number of elements in an array
   map()	          Creates a new array with the result of calling a function for each array element
   of()	            Creates an array from a number of arguments
   pop()	          Removes the last element of an array, and returns that element
   prototype	      Allows you to add properties and methods to an Array object
   push()	          Adds new elements to the end of an array, and returns the new length
   reduce()	        Reduce the values of an array to a single value (going left-to-right)
   reduceRight()	  Reduce the values of an array to a single value (going right-to-left)
   shift()	        Removes the first element of an array, and returns that element
   reverse()	      Reverses the order of the elements in an array
   slice()	        Selects a part of an array, and returns the new array
   some()	          Checks if any of the elements in an array pass a test
   sort()	          Sorts the elements of an array
   splice()	        Adds or Removes array elements
   toReversed()	    Reverses the order of array elements (to a new array)
   toSorted()	      Sorts the elements of an array (to a new array)
   toSpliced()	    Adds or Removes array elements (to a new array)
   toString()	      Converts an array to a string, and returns the result
   unshift()	      Adds new elements to the beginning of an array, and returns the new length
   valueOf()	      Returns the primitive value of an array
   with()	          Returns a new array with updated elements


 #forEach() Method in array-
  The forEach() method calls a function for each element in an array. It does not return a new array and does 
  not modify the original array. It’s commonly used for iteration and performing actions on each array element.

  Syntax:
  array.forEach(callback(element, index, arr), thisValue);


  Parameters:  This method accepts five parameters as mentioned above and described below:

  Parameter	                         Description
  callback	 This parameter holds the function to be called for each array element.
  element	   The parameter holds the value of the elements being processed currently.
  index	     This parameter is optional, it holds the index of the current value element in the array starting from 0.
  array	     This parameter is optional, it holds the complete array on which forEach is called.
  thisArg	   This parameter is optional, it holds the context to be passed as this to be used while executing 
             the callback function. If the context is passed, it will be used as this for each invocation of 
             the callback function, otherwise undefined is used as default.

  Return value:
  The return value of this method is always undefined. This method may or may not change the original array 
  provided as it depends upon the functionality of the argument function. 

  Example 1: In this example, the Array.forEach() method is used to copy every element from one array to another.
  // JavaScript to illustrate forEach() method
  function func() {

    // Original array
    const items = [12, 24, 36];
    const copy = [];
    items.forEach(function (item) {
        copy.push(item + item + 2);
    });
    console.log(copy);
  }
  func();

  Output:
  [ 26, 50, 74 ]

  
  Example 2: In this example, the method forEach() calculates the square of every element of the array.
  // JavaScript to illustrate forEach() method
  function func() {

    // Original array
    const items = [1, 29, 47];
    const copy = [];
    items.forEach(function (item) {
        copy.push(item * item);
    });
    console.log(copy);
  }
  func();

  Output:
  [ 1, 841, 2209 ]

  Example:
  let arr=['banana', 'apple', 'peach', 'mango', 'grapes']
  arr.forEach(function(fruit){
    console.log(fruit)
  });
  OR
  arr.forEach((fruit)=>{
    console.log(fruit)
  });
  
  #print index and element
  let arr=['banana', 'apple', 'peach', 'mango', 'grapes']
  arr.forEach(function(index,fruit){
    console.log(index,fruit)
  });
  OR
  arr.forEach((index,fruit)=>{
    console.log(index,fruit)
  });

 #Use XOR Operator to find unique value in the array
  let arr=[2,2,3,3,4,5,5]
  let a="";
  for(let i=0;i<arr.length;i++){
    a^=arr[i]
  }
  console.log(a);

  OR

  let arr = [2,2,3,3,4,5,5]
  let result =0
  arr.forEach((element)=>{
    result = result ^ element
  })
  console.log(result);

 #Right Way to Copy Objects and Arrays-
  const userName1='Justin'
  let userName2=userName1
  userName2=userName2+'Trudo'

 >Array-
  let fruits1=['Mango','Apple','Orange']
  let fruits2=fruits1
  fruits2.push('Grapes')
  console.log(fruits1);
  console.log(fruits2);

  //Right Way:
  let fruits3=[]
  Object.assign(fruits3,fruits1)
  fruits3.push('Dates')
  console.log(fruits3);

  //Using Spread Operator(...) :
  let fruits4=[]
  fruits4 ={...fruits1}  
  //fruits4.push('Banana') //(only for browser. In VS Code give Error)
  console.log(fruits4);  
  
  //Using concat() method:
  let fruits5=[].concat(fruits1)
  fruits5.push('Barries')
  console.log(fruits5);

  // Using slice() method:
  let fruits6=fruits1.slice()
  fruits6.push('Lichi')
  console.log(fruits6);


 >Object-
  const user1={
    firstName:'Justin',
    lastName:'Trudo',
    address:{
      state:'Uttar Pradesh',
      city:'Lucknow',
    },
    subject:['Physics','Chemistry','Math']
  }
  console.log(user1);
  const user2=user1
  user2.lastName='Alex'
  console.log(user2);

  Right Way:
  const user3={}
  Object.assign(user3,user1)
  user3.lastName='Brabo'
  console.log(user3);

  Using Spread Operator(...) :
  const user4={...user1}
  user4.lastName='Mike'
  console.log(user4)
  
  #Deep Vs Shallow Copy -
  >Shallow Copy:
  In JavaScript, a shallow copy refers to creating a new object or array and copying the top-level structure 
  of the original data structure. However, for nested objects or arrays within the original structure, only 
  references to those nested objects or arrays are copied, rather than duplicating them.
  
  const user5={}
  Object.assign(user5,user1)
  user5.lastName='Brabo'
  console.log(user5);

  const user6={...user1}
  user6.address.city='mumbai'
  user6.subject[0]='English'
  console.log(user6);

  NOTE: To create a shallow copy of an Object or Array and store it in another variable then change the nested 
  Object's or Array's values in new Object or Array but it also change the nested Object's or Array's values 
  in old Object or Array.


 >Deep Copy:
  we read it after read JSON

*/

/*Compound(Combined Assignment) Operators-
  +=  Addition Assignment Operator
  -=  Subtraction Assignment Operator
  *=  Multiplication Assignment Operator
  /=  Division Assignment Operator
  %=  Modulus Assignment Operator
  **= Exponentiation Assignment Operator
  ++  Increment
  --  Decrement

*/

/*JavaScript String- 
  String is a sequence of characters,typically used to represent text.It is enclosed in single or 
  double quotes.
  Example:
    let str="I am a String"
 
 #Basic Terminologies of String-
  >String: A sequence of characters enclosed in single('') or double("") quotes.
  >Length: The number of characters in a string,obtained using the length property.
  >Index: The position of a characters within a string,string from 0.
  >Concatenation: The process of combining two or more string to create a new one.
  >Substring: A portion of a string,obtained by extracting characters between specified indices.

 #Declaration of a string-
  1.Using Single Quotes- Single Quotes can be used to create a string in JavaScript. Simply enclose your text 
    Using Single Quotes within single quotes to declare a string.
    Syntax: let str = 'String with single quote';

  2.Using Double Quotes- Double Quotes can also be used to create a string in JavaScript. Simply enclose your 
    text within double quotes to declare a string.
    Syntax: let str = “String with double quote”;
    
    Note: String created with single or double quotes works the same.There is no difference between the two.

    >Quotes Inside Quotes- You can use quotes inside a string,as long as they don't match the quotes 
    surrounding the string.
    Example:
      let str1="He is called 'Johnny'"
      let str2='He is called "Johnny"'

  3.String Constructor- You can create a string using the String Constructor. The String Constructor is less 
    common for direct string creation, it provides additional methods for manipulating strings. Generally, 
    using string literals is preferred for simplicity.
    Example: 
      let str = new String('Create String with String Constructor');
      console.log(str);

  4.Using Template Literals (String Interpolation)- You can create strings using Template Literals. Template 
    literals allow you to embed expressions within backticks (`) for dynamic string creation, making it more 
    readable and versatile.
    Syntax:
      let str = 'Template Litral String';
      let newStr = `String created using ${str}`;
    
    >Template String- Templates were introduced with ES6(JavaScript 2016).Templates are strings enclosed in 
    backticks(`This is a template string`).Templates allow single and double quotes inside a string.
    Example: let str=`He's often called "Johnny"`;

  5.Empty String- You can create an empty string by assigning either single or double quotes with no 
    characters in between.
    Syntax:
      // Create Empty String with Single Quotes
      let str1 = '';
     
      // Create Empty String with Double Quotes
      let str2 = "";

  6.Multiline Strings (ES6 and later)- You can create a multiline string using backticks (“) with template 
    literals. The backticks allows you to span the string across multiple lines, preserving the line breaks 
    within the string.
    Syntax:
      let str = `
          This is a
          multiline
          string`;

 #Escape Characters- We can use escape characters in string to add single quotes, dual quotes, and backslash.
  Syntax:
    \' - Inserts a single quote  (Example: let str="We are the so-called \"Viking\" from the north.";)
    \" - Inserts a double quote  (Example: let str='It\'s alright.';)
    \\ - Inserts a backslash     (Example: let str="The character \\ is called backslash.";)

  >Six other escape sequences are valid in JavaScript:
    Code           Result
    \b              Backspace
    \f              Form Feed
    \n              New Line
    \r              Carriage Return
    \t              Horizontal Tabulator
    \v              Vertical Tabulator


 #String Methods-
   Name	           Description
  >charAt() Returns the character at a specified index (position)
  >charCodeAt()	Returns the Unicode of the character at a specified index
  >concat()	Returns two or more joined strings
  >constructor	Returns the string's constructor function
  >endsWith()	Returns if a string ends with a specified value
  >fromCharCode()	Returns Unicode values as characters
  >includes()	Returns if a string contains a specified value
  >indexOf()	Returns the index (position) of the first occurrence of a value in a string
  >lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
  >length	Returns the length of a string
  >localeCompare()	Compares two strings in the current locale
  >match()	Searches a string for a value, or a regular expression, and returns the matches
  >prototype	Allows you to add properties and methods to an object
  >repeat()	Returns a new string with a number of copies of a string
  >replace()	Searches a string for a pattern, and returns a string where the first match is replaced
  >replaceAll()	Searches a string for a pattern and returns a new string where all matches are replaced
  >search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
  >slice()	Extracts a part of a string and returns a new string
  >split()	Splits a string into an array of substrings
  >startsWith()	Checks whether a string begins with specified characters
  >substr()	Extracts a number of characters from a string, from a start index (position)
  >substring()	Extracts characters from a string, between two specified indices (positions)
  >toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
  >toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
  >toLowerCase()	Returns a string converted to lowercase letters
  >toString()	Returns a string or a string object as a string
  >toUpperCase()	Returns a string converted to uppercase letters
  >trim()	Returns a string with removed whitespaces
  >trimEnd()	Returns a string with removed whitespaces from the end
  >trimStart()	Returns a string with removed whitespaces from the start
  >valueOf()	Returns the primitive value of a string or a string object

  
  Note: All string methods return a new value.They do not change the original variable.

*/

/*Object in JavaScript- 
  An object is a collection of properties, and a property is an association between a name (or key) and a value.
  
  Objects are one of JavaScript's data types.
  Objects are used to store key/value (name/value) collections.
  A JavaScript object is a collection of named values.

 #Create an Object-
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  OR

  const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

  OR

  // Create an Object
  const person = {};

  // Add Properties
  person.firstName = "John";
  person.lastName = "Doe";
  person.age = 50;
  person.eyeColor = "blue";

 #Nested Objects-
  Property values in an object can be other objects:

  Example:
  myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

 #Object Properties- Properties can be changed, added, deleted, and some are read only.
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

 >Accessing JavaScript Properties- 
  The syntax for accessing the property of an object is:

  // objectName.property
  let age = person.age;
 
  or

  //objectName["property"]
  let age = person["age"];
 
  or

  //objectName[expression]
  let age = person[x];

 >Adding New Properties-
  You can add new properties to an existing object by simply giving it a value:

  Example:
  person.nationality = "English";
  
 >Deleting Properties
  The delete keyword deletes a property from an object:

  Example:
  delete person.age;
  or 
  delete person["age"];

  Note:
  The delete keyword deletes both the value of the property and the property itself.
  After deletion, the property cannot be used before it is added back again.

 > in keyword-
 console.log("age" in person)
  

 #JavaScript Object Methods and Properties-
    Name	                         Description
   assign()	                    Copies properties from a source object to a target object
   create()	                    Returns an object created from an existing object
   defineProperties()	          Adds or changes properties
   defineProperty()           	Adds or changes a property
   entries()	                  Returns an array of the key/value pairs of an object
   freeze()	                    Prevents any changes to an object
   fromEntries()	              Returns an object created from an iterable list of key/value pairs
   getOwnPropertyDescriptor()	  Returns an array of the keys of an object
   getOwnPropertyDescriptors()	Returns an array of the keys of an object
   getOwnPropertyNames()	      Returns an array of the keys of an object
   groupBy()	                  Groups object elements according to returned callback values
   isExtensible()             	Returns true if an object is extensible
   isFrozen()	                  Returns true if an object is frozen
   isSealed()	                  Returns true if an object is sealed
   keys()	                      Returns an array of the keys of an object
   preventExtensions()	        Prevents adding new properties to an object
   seal()	                      Prevents adding new or deleting existing object properties
   toString()	                  Converts an object to a string and returns the result
   valueOf()	                  Returns the primitive value of an object
   values()	                    Returns an array of the property values of an object
   constructor	                Returns the function that created an object's prototype
   prototype	                  Let you to add properties and methods to JavaScript objects

*/

/*Math Object in JavaScript-
  The JavaScript Math object allows you to perform mathematical tasks on numbers.

  Unlike other objects, the Math object has no constructor.
  The Math object is static.
  All methods and properties can be used without creating a Math object first.
  
 #Math Properties (Constants)
  The syntax for any Math property is : Math.property.
  JavaScript provides 8 mathematical constants that can be accessed as Math properties.
  
  Properties        Description
    Math.E            returns Euler's number
    Math.PI           returns PI
    Math.SQRT2        returns the square root of 2
    Math.SQRT1_2      returns the square root of 1/2
    Math.LN2          returns the natural logarithm of 2
    Math.LN10         returns the natural logarithm of 10
    Math.LOG2E        returns base 2 logarithm of E
    Math.LOG10E       returns base 10 logarithm of E


 #Math Methods
  The syntax for Math any methods is : Math.method(number)

  Method	            Description
   abs(x)	              Returns the absolute value of x
   acos(x)	            Returns the arccosine of x, in radians
   acosh(x)	            Returns the hyperbolic arccosine of x
   asin(x)	            Returns the arcsine of x, in radians
   asinh(x)	            Returns the hyperbolic arcsine of x
   atan(x)	            Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
   atan2(y, x)	        Returns the arctangent of the quotient of its arguments
   atanh(x)	            Returns the hyperbolic arctangent of x
   cbrt(x)	            Returns the cubic root of x
   ceil(x)	            Returns x, rounded upwards to the nearest integer
   cos(x)	              Returns the cosine of x (x is in radians)
   cosh(x)	            Returns the hyperbolic cosine of x
   exp(x)	              Returns the value of Ex
   floor(x)	            Returns x, rounded downwards to the nearest integer
   log(x)	              Returns the natural logarithm (base E) of x
   max(x, y, z, ..., n)	Returns the number with the highest value
   min(x, y, z, ..., n)	Returns the number with the lowest value
   pow(x, y)	          Returns the value of x to the power of y
   random()	            Returns a random number between 0 and 1
   round(x)	            Rounds x to the nearest integer
   sign(x)	            Returns if x is negative, null or positive (-1, 0, 1)
   sin(x)	              Returns the sine of x (x is in radians)
   sinh(x)	            Returns the hyperbolic sine of x
   sqrt(x)	            Returns the square root of x
   tan(x)	              Returns the tangent of an angle
   tanh(x)	            Returns the hyperbolic tangent of a number
   trunc(x)	            Returns the integer part of a number (x)

  
 #Infinity Keyword-
  Infinity is a number that represents positive infinity.
  -Infinity represents negative infinity.

  A number reaches Infinity when it exceeds the upper limit for a number:
  1.797693134862315E+308.

  A number reaches -Infinity when it exceeds the lower limit for a number:
  -1.797693134862316E+308.

  Example:
   let A=4/0
   let B=-8/0
   let C=0/0
   console.log(A,B,C)         //Output= Infinity,-Infinity,NaN
   console.log(typeof(A,B,C)) //Output= number


 #Truthy and Falsy Values-
  In JavaScript, truthy and falsy values are concepts related to boolean evaluation. Every value in JavaScript 
  has an inherent boolean “truthiness” or “falsiness,” which means they can be implicitly evaluated to true or 
  false in boolean contexts, such as in conditional statements or logical operations.

 >Truthy Values: A value is considered truthy if, when coerced to a boolean, it evaluates to true. Examples of 
  truthy values include non-empty strings, numbers other than 0, arrays, objects, and functions.

 >Falsy Values: Values that are not true are considered False values.In JavaScript, there are 7 falsy values- 
  zero(0,-0), null, undefined, NaN, BigIntZero(0n,0x0n), false(Boolean value), and an empty string ("",'',``).
 
*/

/*Function in JavaScript-
  A JavaScript function is a block of code designed to perform a particular task.
  A JavaScript function is executed when "something" invokes it (calls it).

 #Function Syntax-
  A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
  Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

  The parentheses may include parameter names separated by commas:
  (parameter1, parameter2, ...)

  The code to be executed, by the function, is placed inside curly brackets: {}

  function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }

  Function parameters are listed inside the parentheses () in the function definition.

  Function arguments are the values received by the function when it is invoked.

  Inside the function, the arguments (the parameters) behave as local variables.

 #Function Invocation-
  The code inside the function will execute when "something" invokes (calls) the function:

  When an event occurs (when a user clicks a button)
  When it is invoked (called) from JavaScript code
  Automatically (self invoked)

  You will learn a lot more about function invocation later in this tutorial.

 #Function Return Keyword-
  When JavaScript reaches a return statement, the function will stop executing.
  If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
  Functions often compute a return value. The return value is "returned" back to the "caller":

  Example:
  Calculate the product of two numbers, and return the result:

  // Function is called, the return value will end up in x
  let x = myFunction(4, 3);

  function myFunction(a, b) {
    // Function returns the product of a and b
    return a * b;
  }


 #Why Functions?
  With functions you can reuse code
  You can write code that can be used many times.
  You can use the same code with different arguments, to produce different results.

 #The () Operator-
  The () operator invokes (calls) the function:

  Example: Convert Fahrenheit to Celsius-

  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  let value = toCelsius(77);

  Accessing a function with incorrect parameters can return an incorrect answer:
  Example:
  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  let value = toCelsius();

  Accessing a function without () returns the function and not the function result:
  Example:
  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  let value = toCelsius;

  Note:
  As you see from the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.


 #Functions Used as Variable Values-
  Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

  Example:
  Instead of using a variable to store the return value of a function:
  let x = toCelsius(77);
  let text = "The temperature is " + x + " Celsius";

  You can use the function directly, as a variable value:
  let text = "The temperature is " + toCelsius(77) + " Celsius";


 #Local Variables-
  Variables declared within a JavaScript function, become LOCAL to the function.
  Local variables can only be accessed from within the function.

  Example:
  // code here can NOT use carName

  function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }

  // code here can NOT use carName
  Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
  Local variables are created when a function starts, and deleted when the function is completed.


  //Function Definition
  //Function Deciaration
  function h1(){
    console.log('Hello')
  }
  
  //Function Definition
  //Function Expression
  //Anonymous function 
  var sayHi=function(){
    console.log('Hi')
  }

  //higher order function
  function first(){
    console.log("Hey");
    second()
  }
  
  function second(){
    console.log("Alex")
  }
  
  first()
  
  //call back function
  //higher order function
  function first(P){
    console.log("Hey");
    P()
  }
  //call back function
  first(function (){
    console.log("Bob");
  })

 #Arrow functions in JavaScript-
  What is Arrow Function?
  An Arrow Function in JavaScript, introduced in ES6, offers a concise syntax for defining function 
  expressions using =>. It maintains lexical `this` binding and provides shorter, more readable code compared 
  to traditional functions. Arrow functions enhance code structure by simplifying function syntax without 
  sacrificing functionality or clarity.

  Arrow functions are anonymous functions i.e. functions without a name but they are often assigned to any 
  variable. They are also called Lambda Functions.

  Syntax:
  const gfg = () => {
    console.log( "Hi Geek!" );
  }

  1) Arrow Function without Parameters
  An arrow function without parameters is defined as () => { }, useful for concise anonymous function 
  expressions without arguments in JavaScript.

  Example: In this example we Defines an arrow function hi without parameters that logs “Hi Alex!” when called.

  const hi = () => {
    console.log( "Hi Alex!" );
  }
  hi();

  Output:
  Hi Alex!

  2) Arrow Function with Single Parameters
  An arrow function with a single parameter is written as (param) => { }, allowing concise handling of 
  functions with one argument in JavaScript.

  Example: In this example we defines an arrow function square with a single parameter x, returning the square of x.

  const square = x => x*x;
  console.log(square(4));
  // output: 16

  Output
  16

  3) Arrow Function with Multiple Parameters
  Arrow functions with multiple parameters, like (param1, param2) => { }, simplify writing concise function 
  expressions in JavaScript, useful for functions requiring more than one argument.

  Example : In this example we defines an arrow function sum with parameters x, y, z, logging their sum.

  const sum = ( x, y, z ) => {
    console.log( x + y + z )
  }
  sum( 10, 20, 30 );

  Output:
  60

  4) Arrow Function with Default Parameters
  Arrow functions support default parameters, allowing predefined values if no argument is passed, making 
  JavaScript function definitions more flexible and concise.

  Example : In this example we defines an arrow function space with parameters x, y, and a default parameter z = 30.

  const space = ( x, y, z = 30 ) => {
    console.log( x + " " + y + " " + z);
  }
  space( 10, 20 );

  Output:
  10 20 30

  5) Return Object Literals
  In JavaScript, returning object literals within functions is concise: () => ({ key: value }) returns an 
  object { key: value }, useful for immediate object creation and returning.

  Example : In this example we defines an arrow function makePerson with parameters firstName, lastName,
  returning an object.


  const makePerson = (firstName, lastName) =>
  ({first: firstName, last: lastName});
  console.log(makePerson("Pankaj", "Bind"));

  Output:
  { first: 'Pankaj', last: 'Bind' }

  Arrow functions can be async by prefixing the expression with the async keyword.
  async param => expression
  async (param1, param2, ...paramN) => {
    statements
  }

 >Advantages of Arrow Functions
  Arrow functions reduce the size of the code.
  The return statement and function brackets are optional for single-line functions.
  It increases the readability of the code.
  Arrow functions provide a lexical this binding. It means, they inherit the value of “this” from the enclosing 
  scope. This feature can be advantageous when dealing with event listeners or callback functions where the 
  value of “this” can be uncertain.

 >Limitations of Arrow Functions
  Arrow functions do not have the prototype property.
  Arrow functions cannot be used with the new keyword.
  Arrow functions cannot be used as constructors.
  These functions are anonymous and it is hard to debug the code.
  Arrow functions cannot be used as generator functions that use the yield keyword to return multiple values over time.

*/

/*Call Stack in JavaScript-
  The call stack is a crucial concept in JavaScript’s runtime environment, representing the mechanism by which
  the JavaScript engine keeps track of function calls in a program. It operates as a Last In, First Out (LIFO)
  data structure, meaning that the last function called is the first one to be resolved.

  Example: The below example demonstrates the call stack.
  function f1() {
    console.log('Hi by f1!');
  }
 
  function f2() {
    f1();
    console.log('Hi by f2!');
  }
 
  f2();

  Output:
  Hi by f1!
  Hi by f2!
  
  Explanation: The steps and illustrations below explain the call stack of the above function.
  Step 1: When the code loads in memory, the global execution context gets pushed in the stack.
  Step 2: The f2() function gets called, and the execution context of f2() gets pushed into the stack.
  Step 3: The execution of f2() starts and during its execution, the f1() function gets called inside 
  the f2() function. This causes the execution context of f1() to get pushed in the call stack.
  Step 4: Now the f1() function starts executing. A new stack frame of the console.log() method will be 
  pushed to the stack.
  Step 5: When the console.log() method runs, it will print “Hi by f1” and then it will be popped from the 
  stack. The execution context will go back to the function and now there are no lines of code that remain in 
  the f1() function, and as a result, it will be popped from the call stack.
  Step 6: This will similarly happen with the console.log() method that prints the line “Hi by f2” and then 
  finally the function f2() would finish and would be pushed off the stack.


*/

/*JavaScript Hoisting- Hoisting is JavaScript's default behavior of moving declarations to the top.

 #JavaScript Declarations are Hoisted-
  In JavaScript, a variable can be declared after it has been used.
  In other words; a variable can be used before it has been declared.

  Example:
  console.log(x) 
  var x = 5;

 #The let and const Keywords
  Variables defined with let and const are hoisted to the top of the block, but not initialized.
  Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
  Using a let variable before it is declared will result in a ReferenceError.
  The variable is in a "temporal dead zone" from the start of the block until it is declared:

  Example: This will result in a ReferenceError:
  console.log(carName);
  let carName="Volvo";

  Using a const variable before it is declared, is a syntax error, so the code will simply not run.
  Example: This code will not run.
  console.log(carName);
  const carName="Volvo";

 #JavaScript Initializations are Not Hoisted-
  JavaScript only hoists declarations, not initializations.

  Example 1 does not give the same result as Example 2:

  Example 1 :
  var x = 5; 
  var y = 7; 
  console.log(x,y);

  Example 2 :
  var x = 5;
  console.log(x,y);
  var y=7;

  Does it make sense that y is undefined in the last example?
  This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.
  Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, 
  the value of y is undefined.

  Example 2 is the same as writing:

  Example 2:
  var x = 5;
  var y;  
  console.log(x,y);
  y=7;

 #Declare Your Variables At the Top !
  Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.
  If a developer doesn't understand hoisting, programs may contain bugs (errors).
  To avoid bugs, always declare all variables at the beginning of every scope.
  Since this is how JavaScript interprets the code, it is always a good rule.

  Note: JavaScript in strict mode does not allow variables to be used if they are not declared.
  Example: This will cause an error because x is not declared
  "use strict";
  x = 3.14;       
  console.log(x)

*/

/*Scope in JavaScript-
  Scope determines the accessibility (visibility) of variables.
  >Global Scope
  >Local Scope
  >Lexical Scope
  >Block Scope

 (*)Global Scope-
    Variables declared Globally (outside any function) have Global Scope.
    Global variables can be accessed from anywhere in a JavaScript program.
    Variables declared with var,let and const are quite similar when declared 
    outside a block.

    Example:
    var x=2;
    {
      // x CAN be used here
    }
    // x CAN be used here

    
    let x=2;
    {
      // x CAN be used here
    }
    // x CAN be used here
    
    
    const x=2;
    {
      // x CAN be used here
    }
    // x CAN be used here

 (*)Local Scope-
    Variables declared within a JavaScript function, are LOCAL to the function.
    Example:
    // code here can NOT use carName
    function myFunction(){
      let carName="Volvo";
      //code here CAN use carName
    } 
    //code here can NOT use carName
    
    Local variables have Function Scope:
    They can only be accessed from within the function.
    Since local variables are only recognized inside their function, variables with the same
    name can be used in different functions.
    Local variables are created when a function starts, and deleted when the function is completed.

 (*)Block Scope-
    Before ES6(2015), JavaScript variables had only Global Scope and Function Scope.
    ES6 introduced two important new JavaScript keywords: let & const.
    These two keywords provide Block Scope in JavaScript.

    Variables declared inside a {} block cannot be accessed from outside the block.
    Example:
    {
      let x=2;
    }
    // x can NOT be used here

    {
      const x=2;
    }
    // x can NOT be used here



    Variables declared with the Var keyword can NOT have block scope.
    Variables declared inside a {} block can be accessed from outside the block.
    Example:
    {
      var x=2;
    }
    // x CAN be used here

 (*)Lexical Scope-
    The variable is declared inside the function and can only be accessed inside that block or nested block is called lexical scope.

    Example:
    function outerFunction() {
      const outerVariable = "Hello";

      function innerFunction() {
        const innerVariable = "Alex";
        console.log(`${outerVariable} ${innerVariable}`);
      }

      innerFunction();
    }
    outerFunction();

    Output:
    Hello Alex


*/



/*setTimeout and setInterval function in JavaScript-
 >setTimeout() Fanction-

  function Hello(){
    console.log("Hello");
  }

  function Bye(){
    console.log("Bye");
  }

  setTimeout(Hello,2*1000)
  setTimeout(Bye,4*1000)



  setTimeout(function Hello(){
    console.log("Hello");
  },2*1000);

  setTimeout(function Bye(){
    console.log("Bye");
  },4*1000);


  Question: print 1 to 10 but with delay of 1 sec after each number gets printed
  for(let i=1;i<=10;i++){
    setTimeout(function(){
      console.log(i);
    },i*1000)
  }

  for(let i=1;i<=5;i++){
    setTimeout(function(){
      console.log(6-i);
    },i*1000)
  }

  for(let i=1;i<=5;i++){
    setTimeout(function(){
      console.log(Math.random())
    },i*1000)
  }

 #For Browser-
  const timer1=setTimeout(`console.log("Hi-1")`,1000)
  const timer2=setTimeout(`console.log("Hi-2")`,2000)
  const timer3=setTimeout(a,3000,'abc',99,89,'skl',[1,2,3])

  function a(){
    // console.log(arguments);
    // console.log(arguments[2]);
    console.log('Hello World');
  }
  
  
 >clearTimeout() Function- (For Browser)
  const timer1 = setTimeout(`console.log("Hi-1")`,1000)
  const timer2 = setTimeout(`console.log("Hi-2")`,2000)
  const timer3 = setTimeout(`console.log("Hi-3")`,3000)

  clearTimeout(timer1)



 >setInterval() Function- (For Browser)
  const timer1=setInterval(`console.log("Hi-1")`,1000)
  const timer2=setInterval(a,2000,'abc',99,89,'skl',[1,2,3])

  function a(){
    // console.log(arguments);
    // console.log(arguments[2]);
    console.log('Hello World');
  }

 >clearInterval() Function-
  clearInterval(timer1)
  clearInterval(timer2)
  
*/

/*Event Loop and Callback Queue in JavaScript-
  The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it 
  takes the first function from the callback queue and pushes it onto the call stack for execution.
  
  What is an event loop in JavaScript ?
  JavaScript’s event loop is the core mechanism that enables asynchronous operations. Though single-threaded, 
  it manages tasks efficiently. Imagine it as a queue system: events like user interactions or network 
  requests are added to the queue, and the engine processes them one by one. This allows JavaScript to handle 
  non-blocking tasks without freezing, keeping the application responsive even while waiting for data or 
  other operations.

  What does it mean when we say JavaScript is single-threaded?
  Single-threaded means that the main thread where JavaScript code is run, runs in one line at a time manner 
  and there is no possibility of running code in parallel.

  How do Event loops work?
  1.Call Stack:
    JavaScript uses a call stack to keep track of the currently executing function (where the program is in 
    its execution).
  2.Callback Queue:
    Asynchronous operations, such as I/O operations or timers, are handled by the browser or Node.js runtime. 
    When these operations are complete, corresponding functions (callbacks) are placed in the callback queue.
  3.Event Loop:
    The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it 
    takes the first function from the callback queue and pushes it onto the call stack for execution.
  4.Execution:
    The function on top of the call stack is executed. If this function contains asynchronous code, it might 
    initiate further asynchronous operations.
  5.Callback Execution:
    When an asynchronous operation is complete, its callback is placed in the callback queue.
  6.Repeat:
    The event loop continues this process, ensuring that the call stack is always empty before taking the next
    function from the callback queue.

  Example: In this example, a JavaScript script demonstrates synchronous blocking behavior. It starts by 
  logging “Before delay,” then uses a function delayBySeconds to create a delay of 5 seconds using a busy-wait 
  loop. The script then logs “After delay” after the 5-second delay completes.

  console.log("Before delay");
  function delayBySeconds(sec) {
    let start = now = Date.now()
    while(now-start < (sec*1000)) {
      now = Date.now();
    }
  }
  delayBySeconds(5);
  // Executes after delay of 5 seconds
  console.log("After delay"); 

  Output:
  Before delay
  (... waits for 5 seconds)
  After delay



 #Memory allocation in JavaScript-

  Heap memory-
  Data stored randomly and memory allocated.

  Stack memory-
  Memory allocated in the form of stacks. Mainly used for functions.

 >Function call stack-
  The function stack is a function that keeps track of all other functions executed in run time. Ever seen a 
  stack trace being printed when you ran into an error in JavaScript? That is nothing but a snapshot of the 
  function stack at that point when the error occurred.

  Example: This example shows how fuction goes into stack whenever a function is called.

  function LevelTwo() {
    console.log("Inside Level Two!")
  }

  function LevelOne() {
    LevelTwo()
  }

  function main() {
    LevelOne()
  }

  main()

  Order at which functions get executed i.e get popped out of the stack after a function’s purpose gets over.

 >Event loop-
  An event loop is something that pulls stuff out of the queue and places it onto the function execution stack 
  whenever the function stack becomes empty.

  The event loop is the secret by which JavaScript gives us an illusion of being multithreaded even though it 
  is single-threaded.

  Here the callback function in the event queue has not yet run and is waiting for its time into the stack 
  when the SetTimeOut() is being executed and the Web API is making the mentioned wait. When the function 
  stack becomes empty, the function gets loaded onto the stack.

  That is where the event loop comes into the picture, it takes the first event from the Event Queue and 
  places it onto the stack i.e. in this case the callback function. From here, this function executes calling 
  other functions inside it, if any.

  This cycle is called the event loop and this is how JavaScript manages its events.


*/
  
/*Closure in JavaScript-
  Closures in JavaScript are functions that retain access to variables from their containing scope even after 
  the parent function has finished executing. They’re useful for maintaining private data, creating modular 
  code, and implementing callback functions with persistent state.

  What is a Closure?
  A closure is the combination of a function bundled together (enclosed) with references to its surrounding 
  state (the lexical environment). When you create a closure, you gain access to an outer function’s scope 
  from an inner function. Closures are automatically created every time a function is defined in JavaScript.

  OR

  A closure is the combination of a function bundled together (enclosed) with references to its surrounding 
  state (the lexical environment). In other words, a closure gives you access to an outer function's scope
  from an inner function. In JavaScript, closures are created every time a function is created, at function
  creation time.


 #Lexical Scoping-
  Lexical scoping refers to how a parser resolves variable names when functions are nested. The location where
  a variable is declared within the source code determines where that variable is available. Nested functions 
  have access to variables declared in their outer scope.

  Example 1: This example shows the basic use of closure.

  function foo() {
    let b = 1;
    function inner() {
        return b;
    }
    return inner;
  }
  let get_func_inner = foo();

  console.log(get_func_inner());
  console.log(get_func_inner());
  console.log(get_func_inner());

  Output:
  1
  1
  1

  We can access the variable b which is defined in the function foo() through function inner() as the later 
  preserves the scope chain of the enclosing function at the time of execution of the enclosing function i.e.
  the inner function knows the value of b through its scope chain. 
  This is closure in action that is inner function can have access to the outer function variables as well as 
  all the global variables.

  Note: Closure is the concept of function + lexical environment in which function it was created. so every 
  function declared within another function then it has access to the scope chain of the outer function and 
  the variables created within the scope of the outer function will not get destroyed.


 #Creating Closures- 
  Example 1: Basic Closure.

  function foo(outer_arg) {

    function inner(inner_arg) {
        return outer_arg + inner_arg;
    }
    return inner;
  }
  let get_func_inner = foo(5);

  console.log(get_func_inner(4));
  console.log(get_func_inner(3));

  Output:
  9
  8

  In the above example we used a parameter function rather than a default one. Not even when we are done with 
  the execution of foo(5) we can access the outer_arg variable from the inner function. And on the execution 
  of the inner function produce the summation of outer_arg and inner_arg as desired. 


  Example 2: Now let’s see an example of closure within a loop. In this example, we would store an anonymous 
  function at every index of an array. 

  // Outer function
  function outer() {
    let arr = [];
    let i;
    for (i = 0; i < 4; i++) {
        // storing anonymous function
        arr[i] = function () { return i; }
    }

    // returning the array.
    return arr;
  }

  let get_arr = outer();

  console.log(get_arr[0]());
  console.log(get_arr[1]());
  console.log(get_arr[2]());
  console.log(get_arr[3]());

  Output:
  4
  4
  4
  4

  In the above code, we have created four closures that point to the variable i which is the local variable to
  the function outer. Closure doesn’t remember the value of the variable it only points to the variable or 
  stores the reference of the variable and hence, returns the current value. In the above code when we try to 
  update the value it gets reflected all because the closure stores the reference. 


  Example 3: Let’s see the correct way to write the above code so as to get different values of i at different
  indexes. 

  // Outer function
  function outer() {
    function create_Closure(val) {
        return function () {
            return val;
        }
    }
    let arr = [];
    let i;
    for (i = 0; i < 4; i++) {
        arr[i] = create_Closure(i);
    }
    return arr;
  }
  let get_arr = outer();
  console.log(get_arr[0]());
  console.log(get_arr[1]());
  console.log(get_arr[2]());
  console.log(get_arr[3]());

  Output
  0
  1
  2
  3

  In the above code we are updating the argument of the function create_Closure with every call. Hence, we get
  different values of i at different indexes.

  Note: It may be slightly difficult to get the concept of closure at once but try experimenting with closure 
  in different scenarios like for creating getter/setter, callbacks, and so on. 

 #Common Use Cases- Closures are useful in various scenarios
  1.Maintaining State: Closures help maintain state between events in event-driven JavaScript.
  2.Private Variables: You can create private variables by enclosing them within a closure.
  3.Callbacks and Asynchronous Code: Closures are essential for handling callbacks and asynchronous operations.


*/


/*Difference between Methods and Functions in JavaScript-
 #JavaScript Functions-
  A function is a block of code written to perform some specific set of tasks. We can define a function using 
  the function keyword, followed by Name and optional parameters. The body of the function is enclosed in 
  Curly braces.

  Syntax: 
  function functionName(parameters) {
    // Content
  }

  Work Around:
  The function is executed when something calls/invokes it.
  The name may contain letters, digits, dollar signs, and underscore.
  Parameters are listed inside round parenthesis after the name of the function.
  Arguments are values a function receives when it is invoked.
  When the control reaches the return statement, js will stop executing and the value is returned to the caller.
  
  Example: Below is the function to add two numbers.
  function func(a, b) {
    let sum = a + b;
    return sum;
  }
  console.log(func(1, 2));

  Output:
  3

 #JavaScript Methods-
  A JavaScript Method is a property of an object that contains a function definition. Methods are functions 
  stored as object properties.

  Syntax:
  object = {
    methodName: function() {
        // Content
    }
  };
  object.methodName()

  Work Around:
  Actions that can be performed on objects are what we term JavaScript methods.
  The objects can also be called without using parenthesis.
  This refers to the owner object in a method.

  Example: The following example shows the method that is invoked with an object called employee.
  let employee = {
    empname: "Alex",
    department: "sales",
    details: function () {
        return this.empname +
            " works with Department " +
            this.department;
    }
  };
  console.log(employee.details());

  Output:
  Alex works with Department sales

 #Difference Between Function and Method-
  >Function                                                   
  1.A JavaScript function is a block of code designed to        
  perform a particular task.	                               

  2.Syntax of Function is:                                     
  function functionName(parameters) {                        
   // Content                                                    
  }                                                                  

  3.A function can pass the data that is operated and may return the data.
      
  4.Data passed to a function is explicit.

  5.A function lives on its own.

  6.A function can be called directly by its name.

  7.Functions are helpful because it increases the reusability of the code.

  8.The () Operator is used to Invoke the Function.


  >Method
  1.The javascript method is an object property that has a function value.

  2.Syntax of Method is:
  object = {
    methodName: function() {
      // Content
    }
  };
  object.methodName()

 	3.The method operates the data contained in a Class.

	4.A method implicitly passes the object on which it was called.

	5.A method is a function associated with an object property.

	6.A method consists of a code that can be called by the name of its object and its method name using dot 
  notation or square bracket notation.

	7.Javascript includes some in-built methods also for example: parseInt() Method

  8.We can access object method by the following the syntax:
  objectName.methodName()


*/

/*Map, Filter, Reduce in JavaScript -
 >map() method: It applies a given function on all the elements of the array and returns the updated array. 
  It is the simpler and shorter code instead of a loop.

  Syntax:
  array.map(function_to_be_applied)
  array.map(function (args) {
    // code;
  })

  Example:
  function triple(n){ 
    return n*3; 
  }     
  arr = new Array(1, 2, 3, 6, 5, 4); 
  
  var new_arr = arr.map(triple) 
  console.log(new_arr); 

  Output: 
  [ 3, 6, 9, 18, 15, 12 ]

 >reduce() method: It reduces all the elements of the array to a single value by repeatedly applying a 
  function. It is an alternative of using a loop and updating the result for every scanned element.

  Syntax:
  array.reduce(function_to_be_applied)
  array.reduce(function (args) {
    // code;
  })

  Example:
  function product(accumulator,current){ 
    return accumulator * current; 
  } 
  arr = new Array(1, 2, 3, 6, 5, 4); 
  
  var product_of_arr = arr.reduce(product) 
  console.log(product_of_arr) 

  Output:
  720

 >filter() method: It filters the elements of the array that return false for the applied condition and 
  returns the array which contains elements that satisfy the applied condition.

  Syntax:
  array.filter(function_to_be_applied)
  array.filter(function (args) {
    // condition;
  })

  Example:
  arr = new Array(1, 2, 3, 6, 5, 4); 
  var new_arr = arr.filter(function (x){ 
    return x % 2==0; 
  }); 
  console.log(new_arr) 

  Output:
  [ 2, 6, 4 ]




*/

/*Set in JavaScript-
  A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. The values can 
  be of any type, primitive values or objects.

 #How to Convert Array to Set in JavaScript?
 >Approach 1: Using spread Operator
  Take the JavaScript array into a variable.
  Use the new keyword to create a new set and pass the JavaScript array as its first and only argument.
  This will automatically create the set of the provided array.

  Example:
  let arr=[1,1,2,3,4,1,3,2]
  let a=[... new Set(arr)]
  console.log(a);

  Output:
  [1,2,3,4]

 >Approach 2: Using the Set Constructor
  Create a Set from the Array
  Convert Set back to an Array
  Output the result
  
  Example: In this example we are using the set constructor.
  const array = [1, 2, 2, 3, 4, 4, 5];
  
  const setFromArr = new Set(array);
  const newArray = Array.from(setFromArr);

  console.log(setFromArr); 
  console.log(newArray);  

  Output
  Set(5) { 1, 2, 3, 4, 5 }
  [ 1, 2, 3, 4, 5 ]


 >Approach 3: Using the forEach Loop
  In this approach, we iterate over each element of the array using the forEach() loop and add each element to
  the Set. This method allows for explicit control over the transformation process and is particularly useful 
  for performing additional operations on array elements before adding them to the Set.

  Example:
  const array = [1, 2, 3, 3, 4, 4, 5];

  const setFromArr = new Set();

  array.forEach(element => {
    setFromArr.add(element);
  });
  console.log(setFromArr);

  Output:
  Set(5) { 1, 2, 3, 4, 5 }


 >Using for loop and XOR Operator to find only unique values in the array.
  let arr=[2,2,3,3,4,5,5]
  let a="";
  for(let i=0;i<arr.length;i++){
    a^=arr[i]
  }
  console.log(a); //Output= 4

 >Using forEach() method and XOR Operator to find only unique values in the array.
  let arr = [2,2,3,3,4,5,5]
  let result =0
  arr.forEach((element)=>{
    result = result ^ element
  })
  console.log(result); //Output= 4

*/

/*Some and Every Array Method in JavaScript-
  >some() Method- Checks if any of the elements in an array pass a test.
  const evenNumbers=[0,2,4,5,6,8]
  const result=evenNumbers.some((num)=>{
    return num%2==0
  })
  console.log(result);

  Note: if one condition is true return true, if all condition are false than return false.


 >every() Method- Checks if every element in an array pass a test.
  
  const evenNumbers=[0,2,4,5,6,8]
  const result=evenNumbers.some((num)=>{
    return num%2==0
  })
  console.log(result);

  Note: if one condition is false return false, if all condition are true than return true.

*/

/*
  #Arguments Keyword in JavaScript-
  function add(){
    let sum=0
    for(let i=0;i<arguments.length;i++){
      sum+=arguments[i]
    }
    return sum
  }
  console.log(add(1,2,3,4,5));


  #Default Parameters in JavaScript-
  function multiply(a,b=1){
    return a*b
  }
  console.log(multiply(2,2));

  #Spread Operator-
  >Concat array and string
  const arr1=[1,2,3,4]
  const arr2=[5,6,7,8,9]
  const myName='Alex'

  const joinedArray=[...arr1, ...arr2, 10, ...myName]
  console.log(joinedArray)

  >Copy object 
  const user={
    name:'Alex',
    age:25,
  }
  const updatedUser={...user, city:'Mumbai'}
  console.log(updatedUser);

  >Sum arrays elements
  function add(){
    let sum=0
    for(let i=0;i<arguments.length;i++){
      sum+=arguments[i]
    }
    return sum;
  }
  arr=[1,2,3,4,5]
  console.log(add(...arr));


  #Rest Parameters in JavaScript-
  function add(a, b, ...nums){
    console.log(a,b);
    console.log('nums:',nums);
    let sum=0
    for(let i=0;i<nums.length;i++){
      sum+=nums[i]
    }
    return sum;

  }
  console.log(add(1,2,3,4,5));



  const nums=[1,2,3,4,5]

  function add1(){
    return [...arguments].reduce((accumulator,current)=> accumulator+current)
  }
  const result1=add1(...nums)
  console.log(result1);


  function add2(){
    return Array.from(arguments).reduce((accumulator,current)=> accumulator+current)
  }
  const result2=add1(...nums)
  console.log(result2);

  function add3(){
    return nums.reduce((accumulator,current)=> accumulator+current)
  }

  const result3=add1(...nums)
  console.log(result3);


  #Destructuring in JavaScript-
  >Array
  const colors=['Red', 'White', 'Blue', 'Green', 'Yellow', 'Orange', 'Black']
  const[color1, color2, color7]=colors
  const[, , , color4, color5]=colors
  const{2: color3, 5: color6}=colors
  console.log(color1, color2, color3, color4, color5, color6);

  function printColor([a,b,,d]){
    console.log(a,b,d);
  }
  printColor(colors)


  >Object
  const user={
    Name: 'Alex',
    Age: 22,
    Address: {
      City : 'Bangalore',
      State: 'karnataka',
    },
  }
  const{Name, Age} = user
  const{Address: {City} } = user

  console.log( Name, Age, City);

  function intro({Name, Age}){
    console.log(Name, Age);
  }
  intro(user)

*/


/*What is BOM in JavaScript? (Window Object)-
  The Browser Object Model (BOM) is a collection of objects exposed by the browser that allow JavaScript to 
  interact with the browser window, document, and other browser-specific functionalities. The BOM includes 
  objects such as Window, Navigator, Location, History, and Screen.

 #Window Location Object-
  The window.location object can be used to get the current page address (URL) and to redirect the browser to 
  a new page.

 >Window Location
  The window.location object can be written without the window prefix.

  Some examples:
  window.location.href returns the href (URL) of the current page
  window.location.hostname returns the domain name of the web host
  window.location.pathname returns the path and filename of the current page
  window.location.protocol returns the web protocol used (http: or https:)
  window.location.assign() loads a new document


 #Window History Object-
  The window.history object contains the browsers history.

 >Window History-
  The window.history object can be written without the window prefix.
  To protect the privacy of the users, there are limitations to how JavaScript can access this object.

  Some methods:
  history.back() - same as clicking back in the browser. This method loads the previous URL in the history list. 
  This is the same as clicking the back button in the browser.
  history.forward() - same as clicking forward in the browser. This method loads the next URL in the history list.
  This is the same as clicking the Forward button in the browser.
  
  history.go(-2) - same as history.back methods.
  history.go(2) -- same as history.forward methods.


 #window outerHeight Object-	
  window.outerHeight - Returns the height of the window including toolbars, scrollbars etc.
 
 #Window innerHeight Object- 
 window.innerHeight - Returns the height of the window's content area.
  
 #Window open Object-
  window.open() - open a  new window

 #Window close Object-
  window.close() - close the current window 
  Note: Only that window which is opened by using open() method and that window which is opened first tab and 
  did not search anything in this window.

 #Window resizeTo Object-
  window.resizeTo(x ,y) - resize the current window
 
 #Window resizeBy Object-
  window.resizeBy(x, y) - resizes a window by a specified amount.


 #Window moveTo Object-
  window.moveTo(x, y) - move the current window

 #Window moveBy Object-
  window.moveBy(x, y) - moves the current window by a specified amount

 #Window scroll Object-
  window.scroll(x-coord, y-coord, behavior) - scrolls the window to a particular place in the document

 #Window scrollTo Object-
  window.scrollTo(x-coord, y-coord, behavior) - scrolls the document to specified coordinates

 #Window scrollBy Object-
  window.scrollBy(x-coord, y-coord, behavior) - scrolls the document in the window by the given amount

 #Window print Object-
  window.print() - It used to print the currently visible contents like a web page, text, image, etc., on the computer screen.


 #Window Document Object Model (DOM)
  
*/

/*DOM (Document Object Model)-
 $DOM Intro-
  With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

 #The HTML DOM (Document Object Model)
  When a web page is loaded, the browser creates a Document Object Model of the page.

  The HTML DOM model is constructed as a tree of Objects:
  |                                                                                                      
  |                        The HTML DOM Tree of Objects                                                  
  |
  |                                  Document  
  |                                     |
  |                                 Root element
  |                                   <html>
  |           __________________________|___________________________
  |          |                                                      |
  |       Element:                                               Element:
  |       <head>                                                  <body>
  |          |                                    __________________|_________________
  |       Element:                               |                                    |                              
  |       <title>              Attribute: --- Element:                             Element:
  |          |                    "href"        <a>                                 <h1>
  |        Text:                                 |                                    |
  |      "My title"                             Text:                                Text:
  |                                           "My link"                            "My header"                 
  |                                          
   

 #With the object model, JavaScript gets all the power it needs to create dynamic HTML:
  JavaScript can change all the HTML elements in the page
  JavaScript can change all the HTML attributes in the page
  JavaScript can change all the CSS styles in the page
  JavaScript can remove existing HTML elements and attributes
  JavaScript can add new HTML elements and attributes
  JavaScript can react to all existing HTML events in the page
  JavaScript can create new HTML events in the page


 #What You Will Learn-
  How to change the content of HTML elements
  How to change the style (CSS) of HTML elements
  How to react to HTML DOM events
  How to add and delete HTML elements

 #What is the DOM?
  The DOM is a W3C (World Wide Web Consortium) standard.

  The DOM defines a standard for accessing documents:
  "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and 
  scripts to dynamically access and update the content, structure, and style of a document."

  The W3C DOM standard is separated into 3 different parts:
  Core DOM - standard model for all document types
  XML DOM - standard model for XML documents
  HTML DOM - standard model for HTML documents


 #What is the HTML DOM?
  The HTML DOM is a standard object model and programming interface for HTML. It defines:
  The HTML elements as objects
  The properties of all HTML elements
  The methods to access all HTML elements
  The events for all HTML elements

  In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.



 $DOM Methods-
  HTML DOM methods are actions you can perform (on HTML Elements).

  HTML DOM properties are values (of HTML Elements) that you can set or change.

 #The DOM Programming Interface
  The HTML DOM can be accessed with JavaScript (and with other programming languages).
  In the DOM, all HTML elements are defined as objects.
  The programming interface is the properties and methods of each object.
  A property is a value that you can get or set (like changing the content of an HTML element).
  A method is an action you can do (like add or deleting an HTML element).

 #Example: The following example changes the content (the innerHTML) of the <p> element with id="demo"
  <html>
  <body>
    <p id="demo"></p>

    <script>
      document.getElementById("demo").innerHTML = "Hello World!";
    </script>

  </body>
  </html>

  In the example above, getElementById is a method, while innerHTML is a property.


 #The getElementById Method
  The most common way to access an HTML element is to use the id of the element.
  In the example above the getElementById method used id="demo" to find the element.

 #The innerHTML Property
  The easiest way to get the content of an element is by using the innerHTML property.
  The innerHTML property is useful for getting or replacing the content of HTML elements.
  The innerHTML property can be used to get or change any HTML element, including <html> and <body>.

*/

/*Difference between textContent and innerText in JavaScript-
  Using "textContent" will return the complete text content, including the hidden text. 
  However, using "innerText" will only return the visible text content, excluding the hidden text.

  const paragraph=document.querySelector('p')
  console.log(paragraph.innerHTML);

  paragraph.innerHTML='<h4>Hii</h4>'
  paragraph.innerText='<h4>Hiii!!!</h4>'
  paragraph.textContent='<h4>Hiii!!!</h4>'

*/

/*getAttribute and setAttribute in JavaScript-
 #getAttribute()-
  Examples: 
  Get the value of the class attribute of an element:
  let text = element.getAttribute("class");

  Get the value of the target attribute of an <a> element:
  let text = myAnchor.getAttribute("target");

  Description:
  The getAttribute() method returns the value of an element's attribute.

  Syntax:
  element.getAttribute(name)

  Parameters:
  Parameter	      Description
   name	           Required.
                   The name of the attribute.


  Return Value:
  Type	          Description
    String	        The attribute's value.
                    null if the attribute does not exist.

  More Examples:
  Get the value of the onclick attribute of a <button> element:
  let text = myButton.getAttribute("onclick");

 #setAttribute()-
  Example:
  Add a class attribute to an element:
  element.setAttribute("class", "democlass");


  Description:
  The setAttribute() method sets a new value to an attribute.
  If the attribute does not exist, it is created first.

  Syntax:
  element.setAttribute(name, value)

  Parameters:
  Parameter	       Description
  name	            Required.
                    The name of the attribute.
  value	            Required.
                    The new attribute value.
  
  Return Value: NONE

  Note:
  It is possible to add a style attribute with a value to an element, but it is not recommended because it 
  can overwrite other properties in the style attribute.

 >Use Properties of the Style Object instead:
  NO:
  element.setAttribute("style", "background-color:red;");
  YES:
  element.style.backgroundColor = "red";
  

  More Examples:
  Change an input field to an input button:
  myInput.setAttribute("type", "button");


  Add a href attribute to an <a> element:
  myAnchor.setAttribute("href", "https://www.w3schools.com");


  Change the value of the target attribute to "_self":
  if (element.hasAttribute("target")) {      
    element.setAttribute("target", "_self");
  }


*/

/*How to apply styles in JavaScript -
  document.querySelector('h1').style.color="blue"
  document.querySelector('h1').style.backgroundColor="green"
  h1.style.color='blue'
  h1.style.backgroundColor='green'

 #Change all <a> tag elements color
  const allLinks=document.querySelectorAll('a')
  for(let i=0;i<allLinks.length;i++){
    allLinks[i].style.color='teal'
  }
  OR
  for(const link of allLinks){
    // link.style.color='teal'
    // link.style.textDecoration='none'
    // link.style.fontWeight='700'
    // link.style.fontFamily='cursive'
    // link.style.fontSize='18px'

    // link.style.cssText=`
    //   color:teal;
    //   text-decoration-line: none;
    //   font-weight:700;
    //   font-family: cursive;
    //   font-size: 18px; `
    

    // link.className = 'green-link'
    // link.className = 'wavy-link'

    // link.setAttribute('class', 'green-Link')

    link.classList.add('green-link')
    link.classList.remove('my-link')
    // link.classList.toggle('my-link')

  }

  // document.querySelector('h1').classList.add('hidden')


*/

/*Access Parent Sibling & Children Elements using JavaScript-
  
  const firstLink = document.querySelector("body > p:nth-child(3) > a.my-link")
 
  #Access Parent Element-
  firstLink.parentElement
  firstLink.parentElement.parentElement
  firstLink.parentElement.parentElement.parentElement.
  firstLink.parentElement.parentElement.parentElement.parentElement
  firstLink.parentElement.parentElement.parentElement.parentNode

 #Access Sibling Element-
  firstLink.nextSibling
  firstLink.nextElementSibling
  firstLink.nextElementSibling.nextElementSibling
  firstLink.nextElementSibling.nextElementSibling.nextElementSibling
  firstLink.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
  firstLink.previousElementSibling
  firstLink.previousElementSibling.previousElementSibling
  
 #Access Children Element-
  firstLink.childNodes
  firstLink.children

*/

/*What is the Difference Between Element and Node-
  When working with the Document Object Model (DOM) in JavaScript, you may come across the terms “Element” and
  “Node”. While they may seem interchangeable at first, there are some key differences between the two.

 >Nodes in the DOM
  In the DOM, everything is a node. A node can be an element, attribute, text, comment, document, or any other
  type of DOM object. Nodes are organized in a tree-like structure, with the document node at the top and all 
  other nodes branching off from it.
  Nodes have properties and methods that allow you to manipulate them and their child nodes. For example, you 
  can use the appendChild() method to add a child node to an existing node.

 >Elements in the DOM
  Elements are a specific type of node that represents an HTML or XML element. Elements have all the properties 
  and methods of a node, but they also have additional properties and methods that are specific to elements.
  For example, elements have a tagName property that specifies the name of the element, such as “div” or “span”. 
  Elements also have attributes, which can be accessed using the getAttribute() method or by simply accessing 
  the attribute as a property of the element.

 #The Difference Between Element and Node
  The main difference between Element and Node is that Element is a specific type of Node that represents an 
  HTML or XML element. While all Elements are Nodes, not all Nodes are Elements.
  Another key difference is that Elements have additional properties and methods that are specific to elements. 
  For example, elements have a childNodes property that returns a NodeList of all the child nodes of the 
  element.
  Elements also have a parentElement property, which returns the parent element of the current element. This 
  property is equivalent to the parentNode property, but it only returns elements and not other types of nodes.
  Elements also have a tagName property that specifies the name of the element. This property is read-only and 
  cannot be changed.
  Some methods and properties behave differently depending on whether they are called on an Element or a Node. 
  For example, the insertBefore() method works differently when called on an Element compared to when it’s 
  called on a Node. When called on an Element, it inserts the new node as a child of the current element 
  before a specified child node. When called on a Node, it inserts the new node before the current node in the 
  same parent node.

*/
