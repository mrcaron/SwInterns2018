#include <iostream>
using namespace std;

int main() {
    string sentence;
    cout << "Enter string : ";
    getline(cin, sentence);
    bool isPalindrome = true;
    for(int i = 0; i < sentence.length()/2; i++){
        if(tolower(sentence[i]) != tolower(sentence[sentence.length() - i - 1])){
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome){
        cout << "It is a palindrome" << endl;
    }
    else{
        cout << "It is not a palindrome" << endl;
    }
    return 0;
}
