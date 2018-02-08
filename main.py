#case sensitive
#recursive way take more space

def isPalindrome(s):
  if len(s) <= 1:
    return True
  else:
   return isPalindrome(s[1:len(s)-1]) and s[0] == s[len(s)-1]
     
def isPalindrome2(s):
    return s[:len(s)//2] == s[:(len(s)-1)//2:-1]
    
def reversedString(s):
  return s[::-1]
  
def makeItCrash():
  return 1.0>>10
  
#I say "Agile", you think Fast
#I say "DevOps", you think Dev + Ops
#I say "C++", you think C'
#I say "Internship", you think Opportunity