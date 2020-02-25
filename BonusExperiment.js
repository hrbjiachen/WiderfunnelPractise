// update text when history.pushState triggers by clicking site logo
let realPushState = history.pushState;
history.pushState = function() {
  if (
    window.location.href === "https://www.dollarshaveclub.com/get-started/quiz"
  ) {
    checkPageLoad();
  }

  return realPushState.apply(history, arguments);
};

// update text when popstate triggers by clicking back button
window.addEventListener("popstate", () => {
  if (window.location.href === "https://www.dollarshaveclub.com/") {
    checkPageLoad();
  }
});

//make sure dom element is loaded
const checkPageLoad = () => {
  let title = document.querySelector("div.hero__container h1");
  if (title) {
    title.textContent = "Personalized for you.";
  } else {
    setTimeout(() => checkPageLoad(), 50);
  }
};

checkPageLoad();
