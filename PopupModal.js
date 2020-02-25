const addStyleString = styleString => {
  let styleNode = document.createElement("style");
  styleNode.innerHTML = styleString;
  document.head.appendChild(styleNode);
};

const addStyle = () => {
  //add style to overlay
  addStyleString(
    "#overlay { \
        display: none; \
        position: absolute; \
        left: 0px; \
        top: 0px; \
        width:100%; \
        height:100%; \
        text-align:center; \
        z-index: 1000; \
        background-color: rgba(0,0,0,0.6);\
    }"
  );

  //add style to content
  addStyleString(
    "#overlay div { \
        width:600px; \
        height: 400px; \
        margin: 200px auto; \
        background-color:#fff !important; \
        padding: 100px; \
        text-align:center; \
        font-size: 30px; \
        position: relative; \
    }"
  );

  //add style to close button
  addStyleString(
    "#overlay button { \
        font-size: 20px; \
        position: absolute; \
        top: 10px; \
        right: 10px; \
        width: 40px; \
        height: 40px; \
        text-align: center; \
        color: #eee; \
        border-width: 0; \
        border-radius: 100%; \
        background-color: black; \
    }"
  );
};

const createModal = () => {
  //create overlay
  let overlay = document.createElement("div");
  overlay.id = "overlay";

  //create modal content
  let modal = document.createElement("div");
  modal.textContent = "Popup Modal with Overlay";

  // add close button
  closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.addEventListener("click", modalOnOff);

  modal.appendChild(closeBtn);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  addStyle();
};

const modalOnOff = () => {
  let modal = document.getElementById("overlay");
  modal.style.display = modal.style.display == "block" ? "none" : "block";
};

createModal();
const oldLoginBtn = document.querySelector(
  "div.wf-modal-container div.wf-account-state-cta a"
);
const newLoginBtn = oldLoginBtn.cloneNode(true);
oldLoginBtn.parentNode.replaceChild(newLoginBtn, oldLoginBtn);
newLoginBtn.addEventListener("click", modalOnOff);
