const addStyleString = styleString => {
  let styleNode = document.createElement("style");
  styleNode.innerHTML = styleString;
  document.head.appendChild(styleNode);
};

const addStyle = () => {
  addStyleString(
    "div#stick_banner { \
        position: fixed; \
        bottom: 0px; \
        width: 100%; \
        padding: 40px; \
        font-size: 17px; \
        text-align: center; \
        font-weight: bold; \
        z-index: 1000; \
        display: none; \
        background-color: white; \
      }"
  );

  addStyleString(
    "#stick_banner button#closeBtn { \
        font-size: 15px; \
        position: absolute; \
        top: 10px; \
        right: 10px; \
        width: 30px; \
        height: 30px; \
        text-align: center; \
        border-width: 0; \
        border-radius: 100%; \
        border: 2px solid grey; \
        background-color: white; \
    }"
  );

  addStyleString("#stick_banner span { \
        font-weight: 800; \
    }");

  addStyleString(
    "#stick_banner button#closeBtn { \
        font-size: 15px; \
        position: absolute; \
        top: 10px; \
        right: 10px; \
        width: 30px; \
        height: 30px; \
        text-align: center; \
        border-width: 0; \
        border-radius: 100%; \
        border: 2px solid grey; \
        background-color: white; \
    }"
  );

  addStyleString(
    "#stick_banner button#flBtn { \
        font-size: 15px; \
        color: #1e88e5; \
        width: 150px; \
        height: 40px; \
        text-align: center; \
        border-width: 0; \
        border-radius: 5px; \
        border: 1px solid #1e88e5; \
        background-color: white; \
        margin: 20px auto; \
    }"
  );
};

const createBanner = () => {
  //create banner div
  let banner = document.createElement("div");
  banner.id = "stick_banner";
  banner.innerHTML = `Get $10 credit towards your plan and try \
    HP instant Ink for <span>FREE</span> today. \
    No commitments or fees - change or cancel your plan anytime.`;

  // create close button
  let closeBtn = document.createElement("button");
  closeBtn.id = "closeBtn";
  closeBtn.textContent = "X";
  closeBtn.addEventListener("click", () => {
    if (banner) {
      banner.remove();
      window.removeEventListener("scroll", BannerOnOff);
    }
  });

  // create free link btn
  let btnContainer = document.createElement("div");
  let flBtn = document.createElement("button");
  flBtn.id = "flBtn";
  flBtn.textContent = "Get my free ink";

  //append child
  btnContainer.appendChild(flBtn);
  banner.appendChild(btnContainer);
  banner.appendChild(closeBtn);
  document.body.appendChild(banner);

  addStyle();

  return banner;
};

const BannerOnOff = () => {
  let y = document.documentElement.scrollTop;
  let yIndex = planSection.offsetTop + planSection.offsetHeight;

  //show banner when scroll pass plans section
  if (y > yIndex && banner.style.display != "block") {
    banner.style.display = "block";
  }

  //hide banner when scroll to top
  if (y == 0 && banner.style.display == "block") {
    banner.style.display = "none";
  }
};

let banner = createBanner();
let planSection = document.getElementById("plans-section");
window.addEventListener("scroll", BannerOnOff);
