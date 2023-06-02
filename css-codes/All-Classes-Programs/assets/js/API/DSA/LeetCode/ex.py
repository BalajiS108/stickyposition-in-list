# AAAABBBCCD  -- 4A3B2C1DA
def compress(s):
   str1=""
   dict={}
   for ch in s:
    if ch in dict:
      dict[ch]+=1
    else:
      dict[ch]=1
   for key,value in dict.items():
     str1=str1+str(value)+key
   return(str1)
print(compress('AAAABBBCCDAS'))


arr=[]
arr.append(10)
arr.append(12)
print(arr)


      
      
      



