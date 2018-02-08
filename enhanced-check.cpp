/**
 * Simple implementation of the palindrome checking algorithm, in this first version we check
 * only strings without special characters (i.e. no commas, big caps etc).
 */

#include <string>
#include <iostream>
using namespace std;

int main(int argc, char* argv[])
{
	string s("hannah");
	/**
	 * The algorithm has two pointers, i which starts from the beginning, j which starts from the
	 * end of the string, which checks if the string is symmetric, ending in the center.
	 */
	int i = 0;
	int j = s.length() - 1;
	int ind = 0;
	while(i < j)
	{
		if(s[i] != s[j])
		{
			cout << s << " is not a palindrome!\n";
			ind = 1;
			break;
		}
		j--;
		i++;
	}

	if(ind == 0)
	{
		cout << s << " is a palindrome!\n";
	}
	return 0;
}



