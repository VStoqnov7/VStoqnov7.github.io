const dynamicText = document.querySelector(".dynamic-text");
const resumeDiv = document.querySelector(".resume");
const text = document.querySelector("body > div.text");
const certificateButton = document.querySelector(".certificate-button");
const certificateContainer = document.querySelector(".certificate-container");
const email = document.querySelector(".email");
const emailText = document.querySelector(".email-text");
const emailIcon = document.querySelector(".email-icon");
let isEmailTextVisible = false;

setTimeout(function () {
  dynamicText.classList.add("fade-out");

  setTimeout(function () {
    dynamicText.innerText = "art";
    dynamicText.classList.add("change-color");

    setTimeout(function () {
      resumeDiv.style.display = "block";
      text.style.display = "none";
    }, 6000);
  }, 1000);
}, 2000);

document.addEventListener("DOMContentLoaded", function () {
  const certificateButton = document.querySelector(".certificate-button");

  certificateButton.addEventListener("click", function () {
    window.open("certificate.html", "_blank", "width=1920,height=900");
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const certificateButton = document.querySelector(".contact-button");

//   certificateButton.addEventListener("click", function () {
//     // Изчисляване на центъра на екрана
//     const screenWidth = window.screen.width;
//     const screenHeight = window.screen.height;
//     const windowWidth = 600;
//     const windowHeight = 600;
//     const left = (screenWidth - windowWidth) / 2;
//     const top = (screenHeight - windowHeight) / 2;

//     // Отваряне на прозорец в центъра на екрана
//     window.open(
//       "contact.html",
//       "_blank",
//       `width=${windowWidth}, height=${windowHeight}, left=${left}, top=${top}`
//     );
//   });
// });

email.addEventListener("click", function (event) {
  event.preventDefault();

  if (!isEmailTextVisible) {
    emailText.style.display = "block";
    emailIcon.classList.add("no-margin-bottom");
    isEmailTextVisible = true;
  } else {
    emailText.style.display = "none";
    emailIcon.classList.remove("no-margin-bottom");
    isEmailTextVisible = false;
  }
});
