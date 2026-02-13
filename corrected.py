# Challenge 1a - No Errors
number = 4
if number % 2 == 0:
    print("This number is even.")
else:
    print("This number is odd.")


# Challenge 1b - Error Fixed: >18 should be >=18
age = 18
if age >= 18: 
    print("You are eligible to vote.")
else:
    print("You are not eligible to vote.")


# Challenge 1c - No Errors
num = -5
if num > 0:
    print("This number is positive.")
elif num < 0:
    print("This number is negative.")
else:
    print("This number is zero.")


#Challenge 2a - No Errors
for i in range(1, 11):
    print(i)


# Challenge 2b - Error Fixed
i = 1
while i <= 5:   
    print(i)
    i += 1


# Challenge 2c - No Errors
num2 = 5
factorial = 1
for i in range(1, num2 + 1):
    factorial *= i
print("Factorial =", factorial)


# Challenge 3a - No Errors
def greet(name):
    print("Hello,", name)
greet("Alice.")


# Challenge 3b - No Errors, but added a condition to check for zero as well.
def check_even_odd(number):
    if number % 2 == 0:
        return "Even"
    elif number == 0:
        return "Zero"
    else:
        return "Odd"
print(check_even_odd(9))


#  Challenge 3c - No Errors, but I had to make text lowercase to count both uppercase and lowercase vowels.
def count_vowels(text):
    vowels = "aeiou"  
    count = 0
    for char in text.lower():
        if char in vowels:
            count += 1
    return count
print("Vowel count:", count_vowels("Hello"))


#  Challenge 4a - No Errors
fruits = ["Apple", "Banana", "Orange"]
for fruit in fruits:
    print(fruit)


# Challenge 4b - No Errors
students = {
    "Alice": 90,
    "Bob": 85,
    "Charlie": 88
}
for name, grade in students.items():
    print(name, ":", grade)


# Challenge 4c - No Errors
numbers = [5, 10, 3, 8, 20]

def find_highest(nums):
    highest = nums[0]
    for num in nums:
        if num > highest:
            highest = num
    return highest

print("Highest number:", find_highest(numbers))