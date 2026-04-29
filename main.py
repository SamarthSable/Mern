class Dog:
    # A class attribute, shared by all instances
    species = "canine"

    # The __init__ method (constructor) initializes each new object
    def __init__(self, name, age):
        self.name = name  # Instance attribute unique to each object
        self.age = age    # Instance attribute unique to each object

    # A method (function inside the class) that objects can use
    def bark(self):
        return f"{self.name} says woof!"


# Create the first Dog object
dog1 = Dog("Buddy", 3)

# Create a second, independent Dog object
dog2 = Dog("Lucy", 5)
# Access attributes (data)
print(f"{dog1.name} is {dog1.age} years old.")
# Output: Buddy is 3 years old.

# Access the class attribute
print(f"Both dogs are {dog1.species} species.")
# Output: Both dogs are canine species.

# Call a method (behavior)
print(dog2.bark())
# Output: Lucy says woof!
