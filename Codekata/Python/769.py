import math
def check_recurrence(val):
    s=str(val).split(".") 
    if(s[0]==s[1]):
        st="("+s+")"
        return float(st)
    return val

def cal_roots(a,b,c,r):
    r1=((-b)+r)/(2*a)
    r2=((-b)-r)/(2*a)
    if(len(str(r1).split("."))>2):
        r1=round(r1,2)
    if(len(str(r2).split("."))>2):
        r2=round(r2,2)
    r1=check_recurrence(r1)
    r2=check_recurrence(r2)
    print("{:.2f}".format(r1))
    print("{:.2f}".format(r2))
    
def root_value(a,b,c):
    r=math.sqrt((b**2)-(4*a*c))
    cal_roots(a,b,c,r)


input_string=input()
input_list=input_string.split()
a=float(input_list[0])
b=float(input_list[1])
c=float(input_list[2])
root_value(a,b,c)
