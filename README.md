# ToDoo

A To-Do list app with online user logins for personalized task management.

## Tech Stack

### Frontend

<table style="width: 100%; display: flex; flex-wrap: wrap; justify-content: center; padding: 10px;">
  <tr>
    <td align="center" width="20">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="20" height="20" alt="React" />
      <br />React
    </td>
    <td align="center" width="20">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        width="20"
        height="20"
        alt="Tailwind"
      />
      <br />Tailwind
    </td>
    <td align="center" width="20">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="20" height="20" alt="HTML5" />
      <br />HTML5
    </td>
    <td align="center" width="20">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="20" height="20" alt="TypeScript" />
      <br />TypeScript
    </td>
    <td align="center" width="20">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="20" height="20" alt="" />
      <br />Shadcn
    </td>
  </tr>
</table>

### Backend

<table>
  <tr>
    <td align="center" width="20">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="20" height="20" alt="Express" />
      <br />Express
    </td>
    <td align="center" width="20">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="20" height="20" alt="Node.js" />
      <br />Node.js
    </td>
    <td align="center" width="20">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="20" height="20" alt="MySQL" />
      <br />MySQL
    </td>
    <td align="center" width="20">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="20" height="20" alt="JavaScript" />
      <br />JavaScript
    </td>
  </tr>
</table>


### Tools

<table>
  <tr>
    <td align="center" width="20">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="20" height="20" alt="GitHub" />
      <br />GitHub
    </td>
    <td align="center" width="20">
      <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" width="20" height="20" alt="Postman" />
      <br />Postman
    </td>
    <td align="center" width="20">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="20" height="20" alt="Figma" />
      <br />Figma
    </td>
    <td align="center" width="20">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="20" height="20" alt="NPM" />
      <br />NPM
    </td>
    <td align="center" width="20">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="20" height="20" alt="Visual Studio Code" />
      <br />VS 
    </td>
    <td align="center" width="108">
      <img src="https://vitejs.dev/logo.svg" width="20" height="20" alt="Vite" />
      <br />Vite
    </td>
  </tr>
</table>


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
**Login and Register**

<div style="display: flex; gap: 10px; margin-bottom: 20px; flex-wrap:wrap;">
    <img src="./docs/login-desktop.png" alt="Login Page - Desktop View" width="800">   
    <img src="./docs/register-state.png" alt="Login Page - Error Handling" width="800">
</div>

**Home Page**

#### Desktop
<div style="display: flex; gap: 5px; margin-bottom: 20px; flex-wrap:wrap;">
    <img src="./docs/desktop-1.png" alt="Login Page - Desktop View" width="800">   
    <img src="./docs/desktop-2.png" alt="Login Page - Desktop View" width="800">
    <img src="./docs/desktop-3.png" alt="Login Page - Desktop View" width="800">  
    <img src="./docs/desktop-4.png" alt="Login Page - Desktop View" width="800"> 
</div>

#### Mobile

<div style="display: flex; gap: 5px; margin-bottom: 20px; flex-wrap:wrap;">
    <img src="./docs/phone-1.png" alt="Login Page - Desktop View" width="100">   
    <img src="./docs/phone-2.png" alt="Login Page - Desktop View" width="100">
    <img src="./docs/phone-3.png" alt="Login Page - Desktop View" width="100">  
    <img src="./docs/phone-4.png" alt="Login Page - Desktop View" width="100"> 
    <img src="./docs/phone-5.png" alt="Login Page - Desktop View" width="100"> 
</div>

**Other**

<div style="display: flex; gap: 5px; margin-bottom: 20px; flex-wrap:wrap;">
<div>Task card:</div>
    <img src="./docs/part-1.png" alt="Login Page - Desktop View" width="800">  

<div>Success Toasts:</div> 
    <img src="./docs/part-2.png" alt="Login Page - Desktop View" width="800">
<div>Finished Tasks:</div> 
    <img src="./docs/part-3.png" alt="Login Page - Desktop View" width="800">   
</div>

## Future Updates

Here are some exciting features I plan to add in the future:

### 1. **Collections**
- Users will be able to group their tasks into different collections or categories (e.g., Work, Personal, Study).
- This feature will allow for better organization and management of tasks.

### 2. **Notifications**
- A notification system will alert users when tasks are due or approaching their deadline.
- Users will be able to customize notification settings (e.g., frequency, time of notification).

### 3. **Reminder System**
- A reminder feature will allow users to set reminders for specific tasks, which can trigger notifications at chosen times.
- The reminder system will include options for recurring tasks and one-time reminders.
  
These features will enhance the user experience and make managing tasks even more efficient!
