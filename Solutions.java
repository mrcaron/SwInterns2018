
/**
 * @author Christian Colomb
 * @version 1
 * This single-class program is a command line tool which provides solutions and implementations of the
 * SolidWorks Software Engineering Internship coding questions. The program can run using program
 * arguments, or through a command line interface. It has the capability to determine if a string is a
 * palindrome, split a string into parts based off given a character, find the 5th character in a string
 * that is longer than 5 characters, reverse a string, print a JSON object with 2 elements, and crash. This
 program assumes that users know the associated vocabulary with the questions.
 */

import java.util.Scanner;

import org.json.JSONException;
import org.json.JSONObject;

public class Solutions {

	public static void main(String[] args) {
		// used for inputs for questions needing string input
		String StrInput = "";
		// used for the menu choice for determing what the program should do
		int choice;
		// the splitter for the option to splt a string based off a given
		// character
		String split = "";
		// used to repeat the progra, given input from a user
		boolean loop = true;
		// used to determine if the user wants to repeat the program
		String StrLoop = "";

		// handles command line input
		Scanner scnr = new Scanner(System.in);

		// main program repetition loop
		while (loop) {
			loop = false;
			// determines if the user is accessing via command line or program
			// arguments
			if (args.length == 0) {

				// displays program options and takes input
				System.out.print("What do you want to do?\n" + "Check Palindrome (1)\n" + "Split String (2)\n"
						+ "Find 5th Character (3)\n" + "Reverse String (4)\n" + "Print JSON (5)\n"
						+ "Crash the Program(6)\n\nEnter Choice: ");

				choice = Integer.valueOf(scnr.nextLine());
				System.out.println();

				if (choice != 6) {
					System.out.print("Now enter a String: ");

					StrInput = scnr.nextLine();
					System.out.println();
				}

				if (choice == 2) {
					System.out.print("Now enter a character to split by: ");

					split = scnr.nextLine();
					System.out.println();
				}

			} else {
				StrInput = args[0];
				choice = Integer.valueOf(args[1]);
			}

			// handles menu input, formats output, and calls respective methods
			// for the users choice
			if (choice == 1) {
				if (isPalindrome(StrInput)) {
					System.out.println("Yes, \"" + StrInput.toLowerCase() + "\" is a palidrome.");
				} else {
					System.out.println("No, \"" + StrInput.toLowerCase() + "\" is not a palidrome.");
				}
			} else if (choice == 2) {
				String[] splitArr = splitString(StrInput, split);
				for (int i = 0; i < splitArr.length - 1; i++) {
					System.out.print("\"" + splitArr[i] + "\", ");
				}
				System.out.println("\"" + splitArr[splitArr.length - 1] + "\"");
			} else if (choice == 3) {
				if (StrInput.length() >= 5) {
					System.out.println("The 5th character is \'" + find5th(StrInput) + "\'.");
				} else {
					System.out.println("The string must contain more than 5 characters.");
				}
			} else if (choice == 4) {
				System.out.println(StrInput + " reversed is: " + reverseString(StrInput) + ".");
			} else if (choice == 5) {
				// Aftering adding "java-json.jar" to the build path
				System.out.println("The JSON message is:");
				System.out.println(printJSON(StrInput));
				System.out.println();

			} else if (choice == 6) {
				crash();
			} else {
				System.out.println("You enterd an invalid option from the menu.");
			}

			// asks the user if they would like to repeat the program and
			// handles that input
			if (args.length == 0) {
				do {
					System.out.print("Would you like to run again? (Y/N): ");
					StrLoop = scnr.nextLine();
					StrLoop = StrLoop.toUpperCase();

					if (StrLoop.equals("Y")) {
						loop = true;
						break;
					} else if (StrLoop.equals("N")) {
						loop = false;
						break;
					} else {
						System.out.println("Invalid input, try again.");
					}
				} while (true);
			}
		}

	}

	/**
	 * Determines if a string is a palindrome
	 * @param str The String to be checked for the palindrome quality
	 * @return True if the str is a palindrom, false if not
	 */
	public static Boolean isPalindrome(String str) {
		String reverse = reverseString(str);

		if (reverse.equals(str))
			return true;
		else
			return false;

	}

	/**
	 * Splits a string based on given character
	 * @param str The string to be split
	 * @param split The character which is to do the splitting
	 * @return An array of the substrings of str after splitting
	 */
	public static String[] splitString(String str, String split) {
		return str.split(split);
	}

	/**
	 * Finds the 5th character in a string if the string is >5 characters long
	 * @param str The string which is to be searched
	 * @return The 5th character in the string
	 */
	public static char find5th(String str) {
		return str.charAt(4);
	}

	/**
	 * Reverses the order of the letters in a string
	 * @param str The string to be reversed
	 * @return The reversed string
	 */
	public static String reverseString(String str) {
		String output = "";

		for (int i = str.length() - 1; i >= 0; i--) {
			output += str.charAt(i);
		}
		return output;
	}

	/**
	 * Creates a JSON object based on attributes from the given string
	 * @param str The string to be used to find attributes for the JSON
	 * @return The string representation of the JSON object
	 */
	public static String printJSON(String str) {
		JSONObject message = new JSONObject();

		try {
			message.put("String Length", str.length());
			message.put("String Hash Code", str.hashCode());

			return message.toString();
		} catch (JSONException e) {
			System.out.println("JSON ERROR");
		}

		return "A JSON Exception has occurred.";
	}

	/**
	 * Crashes the program by sending an invalid argument to find%th
	 */
	public static void crash() {
		find5th("");
	}

}
