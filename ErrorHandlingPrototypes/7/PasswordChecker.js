class User {
    #username; // Private field for username
    #password; // Private field for password
  
    constructor(username, password) {
      this.#username = username; // Set the private username
      this.password = password;  // Use the setter to validate and set the password
    }
  
    // Getter for the password, returns asterisks
    get password() {
      return '*'.repeat(this.#password.length);
    }
  
    // Setter for the password with validation
    set password(newPassword) {
      if (this.#isValidPassword(newPassword)) {
        this.#password = newPassword; // Set the private password if valid
      } else {
        console.error('Password must be at least 8 characters long and include at least one number and one uppercase letter.');
      }
    }
  
    // Method to validate the password
    #isValidPassword(password) {
      const minLength = 8;
      
      // Check if the password is at least 8 characters long
      if (password.length < minLength) return false;
  
      // Check if the password contains at least one number
      const hasNumber = /\d/.test(password);
      if (!hasNumber) return false;
  
      // Check if the password contains at least one uppercase letter
      const hasUppercase = /[A-Z]/.test(password);
      if (!hasUppercase) return false;
  
      return true; // Return true if all checks are passed
    }
  
    // Getter for username (optional but useful)
    get username() {
      return this.#username;
    }
  }
  
  // Example usage
  const user = new User('john_doe', 'Password1');
  console.log(user.password); // Output: "*********"
  user.password = 'newPass232'; // This will log an error message because the password does not meet the criteria
  console.log(user.password); // Output: "*********"
  