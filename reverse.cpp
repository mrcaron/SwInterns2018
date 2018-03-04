#include <iostream>
using namespace std;

int main() {
    string sentence;
    string reverse = "";
    cout << "Enter string : ";
    getline(cin, sentence);
    for(int i = sentence.length() - 1; i >= 0; i--){
        reverse += sentence[i];
    }
    cout << "Reverse of the given string is : " << reverse << endl;
    return 0;
}

