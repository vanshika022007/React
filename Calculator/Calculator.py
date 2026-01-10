a = float(input("Enter first no.: "))
b = float(input("Enter second no.: "))
operator = input("Enter operator: ")

def calculator(a, b, operator):
    if operator == "+":
        return a + b
    
    elif operator == "-":
        return a - b 
    
    elif operator == "*":
        return a * b 

    elif operator == "/":
        if b != 0:
            return a/b
        else:
            print("Error, division by 0 is not possible")

    elif operator == "%":
        if b != 0:
            return a%b
        else:
            print("Error, division by 0 is not possible")

    else:
        print("Select any one of them -, +, *, /, %")

print(calculator(a, b, operator)) 

c, d = map(int,input("Enter two numbers: ").split())
e = c/d

if e:
    print("True") 

else:
    print("Remainder:", c % d)
    print("False")