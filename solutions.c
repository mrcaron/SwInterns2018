#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[]) {
	printf("Give me a string. I'll show you some tricks.\n\n");
	
	// receive input string
	char buffer[512];
	if(fgets(buffer, sizeof(buffer), stdin) == NULL)
		exit(1);
	
	char input[512];
	while(1) {
		printf("\nEnter 1 if you want to check for palindrome\n");
		printf("Enter 2 if you want to split it into parts based off a given character\n");
		printf("Enter 3 if you want to find the 5th character of it\n");
		printf("Enter 4 if you want to reverse it\n");
		printf("Enter 5 if you want to quit\n\n");

		// receive user choice
		if(fgets(input, sizeof(input), stdin) == NULL)
			exit(1);
		int option;
		option = input[0] - 48;
		printf("\n");

		int i,j,k,h,split;
		switch(option) {

			case 1 :
				i = 0;
				j = strlen(buffer) - 2;
				//printf("the length of input string is %d\n", j);
				while(i < j) {
					if(buffer[i] != buffer[j]) {
						printf("NOT a palindrom\n");
						break;
					}
					i ++;
					j --;
					if(i < j)
						printf("It is a palindrom!\n");
				}
				break;

			case 2 :
				printf("Enter the splitting character\n");
				if(fgets(input, sizeof(input), stdin) == NULL)
					exit(1);
				split = input[0];

				printf("The splitting result is:\n");
				k = 0;
				while(k < (strlen(buffer) - 1)) {
					if(buffer[k] == split) {
						printf("\n");
					} else {
						fputc(buffer[k], stdout);
					}
					k ++;
					if(k == (strlen(buffer) - 1))
						printf("\n");
				}
				break;

			case 3 :
				if(strlen(buffer) <= 6) {
					printf("The string length is not larger than 5\n");
					break;
				}
				printf("The 5th character is %c\n", *(buffer + 4*sizeof(char)));
				break;

			case 4 :
				h = strlen(buffer) - 2;
				printf("The reversed string is:\n");
				while(h >= 0) {
					fputc(buffer[h], stdout);
					h --;
				}
				printf("\n");
				break;

			case 5 :
				exit(0);

			default :
				printf("The number entered is not an option.\n");
				break;
		}

		printf("\n");
	}
	return 0;
}







