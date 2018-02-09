
#include <string>
#include <iostream>
#include <ctype.h>
#include <regex>
#include <fstream>
using namespace std;

// Checks to see if the given string is a palindrome
bool is_palindrome(string s)
{
	/**
	 * This algorithm is an enhancement of the previous simple algorithm such that we check for
	 * special characters and only match alphabetical characters.
	 */
	int i = 0;
	int j = s.length() - 1;
	regex r("[a-zA-z]");
	while(s[i])
	{
		s[i] = tolower(s[i]);
		i++;
	}
	i = 0;
	bool skip_i = false;
	bool skip_j = false;
	string temp_i;
	string temp_j;
	while(i < j)
	{
		temp_i = s[i];
		temp_j = s[j];
		if(regex_match(temp_i, r) == false)
		{
			skip_i = true;
		}
		else if(regex_match(temp_j, r) == false)
		{
			skip_j = true;
		}
		if(skip_i == false && skip_j == false)
		{
			if(s[i] != s[j])
			{
				return false;
			}
			j--;
			i++;
		}
		if (skip_j == true)
		{
			j--;
		}
		else if (skip_i == true)
		{
			i++;
		}
		skip_i = false;
		skip_j = false;
	}

	return true;
}

// Opens one or more given files to write string evaluation results to result.txt
void write_file(int num, char** arr)
{
	string line;
	ofstream out;
	bool ans;
	out.open ("result.txt");
	for(int i = 1; i < num; i++)
	{
		ifstream myfile (arr[i]);
		if(myfile.is_open())
		{
			while(!myfile.eof())
			{
				getline(myfile, line);
				out << line << '\n';
				ans = is_palindrome(line);
				if(ans == true)
				{
					out << "True\n";
				}
				else
				{
					out << "False\n";
				}
			}
			myfile.close();
		}
		else
		{
			cout << "File error for " << "\"" << arr[i]  << "\"" << "!\n";
		}

	}
	out.close();
}

int main(int argc, char* argv[])
{
	string s;
	if(argc == 1)
	{
		while(true)
		{
			getline(cin, s);
			if(s == "exit")
				break;
			bool check = is_palindrome(s);
			if(check == true)
			{
				cout << "True\n";
			}
			else
			{
				cout << "False\n";
			}
		}
	}
	else if (argc > 1)
	{
		write_file(argc, argv);
	}
	return 0;
}
