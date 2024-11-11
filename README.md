# ToDoo

A To-Do list app with online user logins. 

Created using React, mySQL and Express.

Notes goes here:

# Project Documentation

## Login Page

The login page is designed to be **fully responsive** for both desktop and mobile users. It uses state management to handle form inputs and error tracking effectively. This means that when a user enters incorrect information, the page immediately updates to display error messages and guides them towards correct input. The layout adapts seamlessly across different screen sizes, ensuring an optimal user experience on both mobile and desktop devices.

### Features:
- **Responsiveness**: Adjusts layout and elements for mobile and desktop views.
- **Error Handling**: Uses state to manage and display form errors in real time.
- **Intuitive Design**: A simple and clean design that provides visual feedback for user actions.

### Register Page

The register page is also responsive and optimized for a user-friendly experience across different devices. One unique feature of the register page is its **password strength indicator**. Using state management, the application dynamically tracks and displays password strength as the user types, providing instant feedback on whether the password is weak, moderate, or strong. This ensures users create secure passwords in line with best practices.

 ### Features:
- **Responsiveness**: The layout adjusts for both mobile and desktop screens.
- **Password Strength Indicator**: Uses state to evaluate password strength in real-time and display visual feedback.
- **Error Handling**: Provides immediate feedback for any form input errors to guide the user.


### Screenshots

<div style="display: flex; gap: 100px; flex-wrap:wrap;">
    <img src="./docs/login-mobile.png" alt="Login Page - Mobile View" width="200">
    <img src="./docs/login-desktop.png" alt="Login Page - Desktop View" width="800">
    <img src="./docs/login-failed-mobile.png" alt="Login Page - Error Handling" width="200">    
    <img src="./docs/register-state.png" alt="Login Page - Error Handling" width="330">
</div>

