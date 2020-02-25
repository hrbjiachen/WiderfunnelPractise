const title = "Plans and pricing";
const subTitle =
  "Tell us what features matter most to you, and we'll recommend the right plan.";

const filters = [
  {
    name: "Badge printing",
    icon: "fa fa-list-alt",
    id: "filter1"
  },
  {
    name: "Legal document signing",
    icon: "far fa-file-alt",
    id: "filter2"
  },
  {
    name: "Visitor photos",
    icon: "fas fa-portrait",
    id: "filter3"
  },
  {
    name: "Multiple sign-in flows",
    icon: "fas fa-users",
    id: "filter4"
  },
  {
    name: "Visitor screening",
    icon: "fas fa-user-shield",
    id: "filter5"
  },
  {
    name: "Delivery notifications",
    icon: "fas fa-truck",
    id: "filter6"
  }
];

//inject font awesome library
const injectFontAwesomeLib = () => {
  let fa = document.createElement("script");
  fa.src = "https://use.fontawesome.com/releases/v5.12.1/js/all.js";
  document.head.appendChild(fa);
};

//inject css
const addStyleString = styleString => {
  let styleNode = document.createElement("style");
  styleNode.innerHTML = styleString;
  document.head.appendChild(styleNode);
};

//css
const addStyle = () => {
  addStyleString("div#injectContainer { \
        padding: 20px;\
    }");

  addStyleString(
    "div.injectBtn { \
        padding: 10px;\
        text-align: center; \
        background-color: white; \
        margin: 8px; \
        height: 150px; \
    }"
  );

  addStyleString(
    "div.injectBtn:hover { \
        border: 1px solid #EF3934; \
    }"
  );

  addStyleString(
    "div.injectBtn svg{ \
        font-size: 30px; \
        margin: 20px; \
    }"
  );

  addStyleString(".checked{ \
        color: #EF3934; \
  }");

  addStyleString(".relative{ \
    position: relative; \
}");

  addStyleString(
    " div.bannerDiv { \
    display: inline-block; \
    background-color: #EF3934; \
    color: white; \
    text-align: center; \
    position: absolute; \
    top: -25px; \
    width: 88%; \
    height: 25px; \
  }"
  );
};

//modify the target section
const modifyTargetSection = () => {
  let targetSection = document.querySelector(
    "div#top-pricing-section section div"
  );
  // change title
  let titleSection = targetSection.querySelector("h1");
  titleSection.textContent = title;

  // change subtitle
  let subTitleSection = targetSection.querySelector("h3");
  subTitleSection.textContent = subTitle;

  return targetSection;
};

/**
 * add filters to target section
 * add onclick event for filters
 */
const injectFilters = targetSection => {
  let container = document.createElement("div");
  container.id = "injectContainer";
  container.className =
    "clearfix mxn2 mb5 lg-flex justify-center mbn5 xs-hide sm-hide md-hide";

  filters.forEach(filter => {
    //create btn
    let btn = document.createElement("div");
    btn.id = filter.id;
    btn.className = "col col-12 lg-col-2 px2 injectBtn";
    btn.addEventListener("click", clickFilter);

    //create icon
    let icon = document.createElement("i");
    icon.className = filter.icon;

    //create text node
    let btnText = document.createElement("div");
    btnText.textContent = filter.name;

    //append child
    btn.appendChild(icon);
    btn.appendChild(btnText);
    container.append(btn);
  });

  targetSection.appendChild(container);
};

/**
 * filter click event
 * toggle text color
 * update we recommend
 */
const clickFilter = e => {
  let element = e.target;
  if (!element.classList.contains("injectBtn")) {
    element = element.closest(".injectBtn");
  }

  if (element.classList.contains("checked")) {
    element.classList.remove("checked");
  } else {
    element.classList.add("checked");
  }

  updateWeRecommend();
};

/**
 * display banner on recommended plan
 * -1 - none
 * 0 - basic
 * 1 - standard
 * 2 - premium
 * 3 - enterprise
 */
const updateWeRecommend = () => {
  let selected = document.querySelectorAll("div.injectBtn.checked");

  if (selected.length == 1 && selected[0].id === "filter1") {
    recommendOnOff(1);
  } else if (
    selected.length == 2 &&
    selected[0].id === "filter5" &&
    selected[1].id === "filter6"
  ) {
    recommendOnOff(2);
  } else if (selected.length == filters.length) {
    recommendOnOff(3);
  } else {
    recommendOnOff(-1);
  }
};

const recommendOnOff = plan => {
  if (plan == -1) {
    //remove banner if banner exist
    let targetDiv = document.querySelector(
      "section#visitors-section div.pb6 div.col.relative"
    );

    if (targetDiv) {
      targetDiv.classList.remove("relative");
      let banner = targetDiv.querySelector("div.bannerDiv");
      if (banner) {
        banner.remove();
      }
    }
  } else {
    //add banner to target plan
    let targetDiv = document.querySelectorAll(
      "section#visitors-section div.pb6 div.col"
    )[plan];
    targetDiv.classList.add("relative");

    let banner = document.createElement("div");
    banner.className = "bannerDiv";
    banner.textContent = "We recommend";
    targetDiv.appendChild(banner);
  }
};

addStyle();
injectFontAwesomeLib();
injectFilters(modifyTargetSection());
