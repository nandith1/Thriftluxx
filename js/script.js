// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Handle "Add to Cart" button clicks
    const addToCartButtons = document.querySelectorAll(".card button");
  
    addToCartButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        // Example: Log which product was added
        const productCard = button.closest(".card");
        const productName = productCard.querySelector("h3").innerText;
        const productDescription = productCard.querySelector("p").innerText;
  
        console.log(`Added to cart: ${productName} - ${productDescription}`);
  
        // You can add more logic, such as:
        // - Updating a cart count badge
        // - Adding the item to a shopping cart (local storage, database, etc.)
      });
    });
  
    // Handle "Sign Up" form submission
    const signUpForm = document.querySelector(".form-section form");
  
    if (signUpForm) {
      signUpForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission
  
        // Get input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        // Example: Log the user information
        console.log(`User signed up: Name: ${name}, Email: ${email}`);
  
        // Redirect to dashboard (optional)
        // window.location.href = "dashboard.html";
  
        // Show a success message
        alert("Thank you for signing up!");
      });
    }
  
    // Handle "Contact" button click (if any custom functionality is needed)
    const contactButton = document.querySelector("nav a[href='#CONTACT']");
    if (contactButton) {
      contactButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Contact button clicked!");
        // Add any logic to scroll to the contact section
      });
    }
  
    // Handle "Sign In" button click (optional logic for the navigation link)
    const signInButton = document.querySelector("nav a[href='#SIGNIN']");
    if (signInButton) {
      signInButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Sign In button clicked!");
        // Redirect to sign-in page
        window.location.href = "signin.html";
      });
    }
  });
  