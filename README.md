# 📰 Frontend Mentor - Newsletter Sign-Up Form Solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## 📋 Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## 🔎 Overview

### The Challenge

Users should be able to:

- ✅ Add their email and submit the form
- ✅ See a success message with their email after successfully submitting the form
- ✅ See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- ✅ View the optimal layout for the interface depending on their device's screen size
- ✅ See hover and focus states for all interactive elements on the page

### 📸 Screenshot

#### Desktop Design
![](./Preview/Screenshot%20(33).png)

#### Desktop active-states
![](./Preview/Screenshot%20(34).png)

#### Desktop Success Page
![](./Preview/Screenshot%20(35).png)

#### Desktop Success active-states
![](./Preview/Screenshot%20(36).png)

#### Mobile Design Page
![](./Preview/mobile-design.jpg)

#### Mobile Success Page
![](./Preview/mobile-success.jpg)

### 🔗 Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/css-custom-properties-flexbox-mobile-first-workflow-zCmqOeX2uj)
- Live Site URL: [Newsletter Sign-Up Form](https://newsletter-sign-up-gamma-drab.vercel.app/)

## 🚀 My Process

### Built With

- 🌟 Semantic HTML5 markup
- 🎨 CSS custom properties
- 📏 Flexbox
- 📱 Mobile-first workflow
- 🧠 JavaScript for form validation and dynamic content

### 🧠 What I Learned

During this project, I strengthened my skills in:

- Implementing responsive design techniques
- Creating and styling custom form elements
- Handling form validation with JavaScript
- Managing state for success/error messages

```html
<!-- Example of semantic HTML structure -->
<main class="container">
  <section class="card">
    <!-- Content here -->
  </section>
</main>
```

```css
/* Example of mobile-first approach */
.card {
  flex-direction: column;
}

@media (min-width: 768px) {
  .card {
    flex-direction: row;
  }
}
```

```js
// Example of form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
```

### 🔮 Continued Development

In future projects, I plan to focus on:

- Enhancing accessibility features
- Exploring more advanced CSS animations
- Implementing more complex form validations
- Optimizing performance for larger applications

### 📚 Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive web development documentation.
- [CSS-Tricks](https://css-tricks.com/) - Great for CSS techniques and flexbox guides.
- [JavaScript.info](https://javascript.info/) - In-depth JavaScript tutorials.

## 👤 Author

- LinkedIn - [LinkedIn](https://www.linkedin.com/in/abdullah-a-2940b7260/)
- Frontend Mentor - [Abdullah](https://www.frontendmentor.io/profile/Ayyubiy90)
- Twitter - [Abdullah](https://www.twitter.com/ayyubiy10)
- Instagram - [Abdullah](https://www.instagram.com/ayyubiy_10)

## 🙏 Acknowledgments

I'd like to thank Frontend Mentor for providing this challenge and the Frontend Mentor community for their invaluable feedback and support.