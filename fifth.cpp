#include <iostream>
using namespace std;

int main() {
    string sentence;
    char fifth;
    cout << "Enter string : ";
    getline(cin, sentence);
    if (sentence.length() > 5){
        cout << "Fifth character of the given string is : "<< sentence[4] <<endl;
    }
    else{
        cout << "Enter a string of length more than 5"<<endl;
    }
    return 0;
}



