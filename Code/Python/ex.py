# for loop

# for i in range(5): #(by default(0),stop)
#     print(i)       #(i+1)

# for i in range(1,5): #(start,stop)
#     print(i)

# for i in range(1,10,2): #(strat,stop,step)
#     print(i)


name="python"
for i in name:
    print(i)

colors=["red","green","blue","white"]
for i in colors:
    print(i)
#OR
colors=["red","green","blue","white"]
for i in colors:
    print(i)
    for j in i:     #Nasted for loop
        print(j)


# a = 1
# while(a<10): 
#     print(a)
#     a+=1
# for(a=1;a<10;a+=1):
#     print(a)