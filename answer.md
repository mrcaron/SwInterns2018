# Project Description
The topic of my choice is checking if a given string is a palindrome. Based on the prompt, I have created two separate programs with simple and more complex functionalities.

## Running The Project
To compile all the cpp files for the project, cd into the directory and type:
```{bash}
make all
```
To compile only the simple program, type:
```{bash}
make check
```
To compile only the complex program, type:
```{r}
make enhanced-check
```
To run either one of the programs, type:
```{bash}
./check ./enhanced-check
```
To clear the compiled .exe files, type:
```{bash}
make clean
```
## Program Functionality
### check.cpp
This program is a simple implementation of string checking to see if it is a palindrome or not, it does not take into account special characters in between.

### enhanced-check.cpp
This program has 2 different functions. 
1. Checking strings on the command line. Run the program without additional parameters after compilation:
```{bash}
./enhanced-check
```
An empty prompt comes up, all you have to do is type in your desired string onto the command line and press enter. The answer will pop up in a new line. This can be continued as long as you like, however you can terminate the program by typing exit.

2. Checking strings from a file. This is in case you have a file with multiple strings that you want to check if they are palindromes:
```{bash}
./enhanced-check (file1) (file2) ...
```
The input file has to have each string that you want to check on a new line (a test file has been attached). The sample output is run by running two same files. The program outputs an answer.txt file with all the strings you have attached in the input file(s).

### Additional Questions
- When I hear "Agile", I think of a highly cohesive team that writes code, fixes bugs and handles various issues on a project collaboratively. I also think of a team of programmers who are accountable for their own work and keeps each other up to date on their project progress.
- DevOps prompts to think of a application building ecosystem where each team member understands the complete cycle of building of building an application, for example he/she is informed about the UI/UX, backend, infrastructure etc of a specific project they are working on. This ensures that a team member develops holistic skills in all aspects of an application building cycle.
- When I think of C++, which is a coding language I am fond of, I think of a beautiful programming language that merges lower-level functionality (such as C) with object-oriented programming which enhances its functionality compared to other programming languages. Compared to other languages, C++ seems to give programmers a lot more freedom to build their desired applications, thus giving programmers more power.
- I think of a vibrant working culture where interns get to learn new stuff, be tasked to a project and be accountable for it throughout the duration of an internship, explore various facets of software development and technology in the company and have the chance to interact with colleagues to spark new and exciting ideas.
