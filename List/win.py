t = int(input())
for i in range(t):
    n = int(input())
    list1 = list(map(int,input().split()))
    list2 = list(map(int,input().split()))
    if list1 == list2 or list2 == list1[::-1]:
        print("Bob")
    else:
        print("Alice")