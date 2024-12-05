import hashlib
import getpass

# In-memory user database (dictionary)
users_db = {}

# Function to hash passwords
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

# Function to register a new user
def register():
    print("\n=== Register ===")
    username = input("Enter username: ")
    if username in users_db:
        print("Error: Username already exists.")
        return

    password = getpass.getpass("Enter password: ")
    confirm_password = getpass.getpass("Confirm password: ")

    if password != confirm_password:
        print("Error: Passwords do not match.")
        return

    users_db[username] = hash_password(password)
    print("Registration successful!")

# Function to log in a user
def login():
    print("\n=== Login ===")
    username = input("Enter username: ")
    if username not in users_db:
        print("Error: User does not exist.")
        return False

    password = getpass.getpass("Enter password: ")
    if users_db[username] != hash_password(password):
        print("Error: Incorrect password.")
        return False

    print("Login successful!")
    return True

# Secured page for logged-in users
def secured_page():
    print("\n=== Secured Page ===")
    print("Welcome to the secured page!")

# Main application loop
def main():
    while True:
        print("\n=== Main Menu ===")
        print("1. Register")
        print("2. Login")
        print("3. Exit")
        choice = input("Choose an option: ")

        if choice == "1":
            register()
        elif choice == "2":
            if login():
                secured_page()
        elif choice == "3":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
