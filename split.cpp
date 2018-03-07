#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<string> split;
    string sentence;
    string s = "";
    char c;
    cout << "Enter string : ";
    getline(cin, sentence);
    cout << "Enter character to split by :";
    cin >> c;
    for(int i = 0; i < sentence.length(); i++){
        if(sentence[i] == c){
            if(s != "") {
                split.push_back(s);
                s = "";
            }
        }
        else{
            s += sentence[i];
            if(i == sentence.length()-1){
                if(s != "") {
                    split.push_back(s);
                }
            }
        }
    }
    for(int i = 0; i < split.size(); i++){
        cout << split[i] << " ";
    }
    return 0;
}


