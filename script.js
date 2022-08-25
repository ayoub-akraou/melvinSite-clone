"use strict";

/*********** header ***********/

const header = document.querySelector("header");

// onscroll move up the header planets
const planets = document.querySelectorAll(".move.planet");
const planetsTop = () =>
  [...planets].map((e) => parseFloat(getComputedStyle(e).top));
const windowHeight = window.innerHeight;

const bodyY = () => document.documentElement.getBoundingClientRect().y;
let relativePoint;

window.addEventListener("scroll", function (e) {
  planets.forEach((e, i) => {
    const parentBottom = e.parentElement.getBoundingClientRect().bottom;
    if (parentBottom < 1.2 * windowHeight) {
      let top = planetsTop()[i];
      e.style.setProperty("top", `${top - 10}px`, "important");
    }
  });
});

// navigation menu functionality
const navIcon = document.querySelector(".navigation__icon");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__link");
const navLinks = document.querySelectorAll(".navigation__link");

navIcon.addEventListener("click", function () {
  if (menu.classList.contains("invisible")) {
    menu.classList.remove("invisible", "opacity-0");
  } else {
    menu.classList.add("invisible", "opacity-0");
  }
  menuLinks.forEach((e) => e.classList.toggle("menu__link--active"));
  navIcon.classList.toggle("close");
  if (navIcon.classList.contains("close")) {
    navLinks.forEach((e) => (e.classList.add("invisible", "opacity-0")));
  } else {
    navLinks.forEach((e) => (e.classList.remove("invisible", "opacity-0")));
  }
});

// onclick play the ytb video
const playIcon = document.querySelector(".play__icon");
const videoCover = document.querySelector(".video__cover");
const ytbVideo = document.querySelector(".ytb-video");

playIcon.addEventListener("click", function () {
  playIcon.classList.add("opacity-0", "invisible");
  videoCover.classList.add("opacity-0", "invisible");
  ytbVideo.classList.add("opacity-[1_!important]");
  ytbVideo.src += "?autoplay=1";
});

// show and hide the navigation links
let lastScroll = 0;
window.addEventListener("scroll", function () {
  const headerBotom = header.getBoundingClientRect().bottom;
  if (headerBotom <= 0 && bodyY() > lastScroll) {
    navLinks.forEach((e) => e.classList.remove("opacity-0", "invisible"));
  } else {
    navLinks.forEach((e) => e.classList.add("opacity-0", "invisible"));
  }
  lastScroll = bodyY();
});

/*********** artworks section ***********/

const artworksSectionDimentions = document
  .querySelector(".artworks")
  .getBoundingClientRect();
const artworksGallery = document.querySelector(".artworks__gallery");
const galleryFigure = document.querySelectorAll(".gallery__figure");
const galleryData = document.querySelectorAll(".gallery__data .box");

window.addEventListener("scroll", function () {
  const galleryBottom = artworksGallery.getBoundingClientRect().bottom;
  if (
    galleryFigure[0].classList.contains("lg:opacity-0") &&
    galleryBottom < 1.5 * windowHeight
  ) {
    if (
      artworksGallery.getBoundingClientRect().width <=
      artworksSectionDimentions.width
    ) {
      galleryFigure.forEach((e) => {
        e.classList.add("[transform:initial_!important]");
        e.classList.remove("lg:opacity-0");
      });
    }
  }
  if (
    galleryData[0].classList.contains("opacity-0") &&
    galleryBottom < windowHeight
  ) {
    galleryData.forEach((e) => e.classList.remove("opacity-0"));
  }
});

// artworks slider

const leftArrow = document.querySelector(".artworks .left-arrow-icon");
const rightArrow = document.querySelector(".artworks .right-arrow-icon");
let counter = 0;

leftArrow.addEventListener("click", function () {
  if (counter < 0) {
    counter++;
    if (counter > -1) {
      leftArrow.classList.add("grayscale", "blur-[1px]");
    } else {
      rightArrow.classList.remove("grayscale", "blur-[1px]");
    }
  }
  galleryFigure.forEach(
    (e) => (e.style = `transform: translateX( ${counter * 100}%) !important`)
  );
});
rightArrow.addEventListener("click", function () {
  if (counter > -galleryFigure.length + 2) {
    counter--;
    if (counter < -galleryFigure.length + 3) {
      rightArrow.classList.add("grayscale", "blur-[1px]");
    } else {
      leftArrow.classList.remove("grayscale", "blur-[1px]");
    }
  }
  galleryFigure.forEach(
    (e) => (e.style = `transform: translateX(${counter * 100}%) !important`)
  );
});

/*********** goal section ***********/

const goalImageBox = document.querySelector(".goal__image");
const goalImage = document.querySelector(".goal__image img");
const goalDescription = document.querySelector(".goal__info .description");
const goalButtons = document.querySelector(".goal__buttons");
const goalLogos = document.querySelector(".goal__image .logos");

window.addEventListener("scroll", function () {
  const goalSectionBottom = document
    .querySelector(".goal")
    .getBoundingClientRect().bottom;
  if (
    goalImage.classList.contains("opacity-0") &&
    goalSectionBottom < 1.5 * windowHeight
  ) {
    goalImageBox.classList.remove("before:opacity-0", "before:translate-x-20");
    goalImage.classList.remove("opacity-0", "-translate-x-20");
    goalDescription.classList.remove("opacity-0");
    goalButtons.classList.remove("opacity-0");
    goalLogos.classList.remove("opacity-0");
  }
});

/*********** team section ***********/

const teamImageBox = document.querySelector(".team__image");
const teamImage = document.querySelector(".team__image img");
const teamAuthor = document.querySelector(".team__author");
const teamWaterMark = document.querySelector(".team__water-mark");
const teamDescription = document.querySelector(".team__info .description");
const teamButtons = document.querySelector(".team__button");

teamWaterMark.style.right =
  parseInt(getComputedStyle(teamWaterMark).right) + "px";

window.addEventListener("scroll", function () {
  const teamSectionBottom = this.document
    .querySelector(".team")
    .getBoundingClientRect().bottom;
  if (
    teamImage.classList.contains("opacity-0") &&
    teamSectionBottom < 1.5 * windowHeight
  ) {
    teamImageBox.classList.remove("before:opacity-0", "before:-translate-x-20");
    teamImage.classList.remove("opacity-0", "translate-x-20");
    teamAuthor.classList.remove("opacity-0");
    teamWaterMark.classList.remove("opacity-0");
    teamDescription.classList.remove("opacity-0");
    teamButtons.classList.remove("opacity-0");
  }
  // does't work instantly
  // if (teamSectionBottom < 2 * windowHeight) {
  //   teamWaterMark.style.setProperty(
  //     "right",
  //     `${parseInt(teamWaterMark.style.right) + 5}px`,
  //     "important"
  //   );
  //   console.log(parseInt(teamWaterMark.style.right));
  // }
});

/*********** feedback section ***********/

// feedback slider

const feedbackSlider = document.querySelector(".feedback__slider");
const feedbackSliderHtml = feedbackSlider.innerHTML;
const feedbackItems = () => document.querySelectorAll(".feedback__item");
const feedbackLeftArrow = document.querySelector(".feedback .left-arrow-icon");
const feedbackRightArrow = document.querySelector(
  ".feedback .right-arrow-icon"
);
let feedbackCounter = 0;

// infinite translation

const sliderMover = setInterval(function () {
  if (feedbackCounter >= 0) {
    if (document.body.getBoundingClientRect().width >= 1024) {
      feedbackCounter = -feedbackItems().length + 2;
    } else {
      feedbackCounter = -feedbackItems().length;
    }
    feedbackSlider.innerHTML = feedbackSliderHtml;
  }
  feedbackCounter++;
  feedbackItems().forEach(
    (e) =>
      (e.style = `transform: translateX( ${feedbackCounter * 100}%) !important`)
  );
}, 4000);

// translation on left click

feedbackLeftArrow.addEventListener("click", function () {
  clearInterval(sliderMover);
  if (feedbackCounter >= 0) {
    if (document.body.getBoundingClientRect().width >= 1024) {
      feedbackCounter = -feedbackItems().length + 2;
    } else {
      feedbackCounter = -feedbackItems().length;
    }
    feedbackSlider.innerHTML = feedbackSliderHtml;
  }
  feedbackCounter++;
  feedbackItems().forEach(
    (e) =>
      (e.style = `transform: translateX( ${feedbackCounter * 100}%) !important`)
  );
});

// translation on right click

feedbackRightArrow.addEventListener("click", function () {
  clearInterval(sliderMover);
  const lastFeedbackItem = feedbackItems()[feedbackItems().length - 1];
  if (
    Math.trunc(lastFeedbackItem.getBoundingClientRect().right) <=
    Math.trunc(lastFeedbackItem.parentElement.getBoundingClientRect().right)
  ) {
    feedbackCounter = 1;
    feedbackSlider.innerHTML = feedbackSliderHtml;
  }
  feedbackCounter--;
  feedbackItems().forEach(
    (e) =>
      (e.style = `transform: translateX(${feedbackCounter * 100}%) !important`)
  );
});

// animation on scroll

const feedbackTiltle = document.querySelector(".feedback__title");

window.addEventListener("scroll", function () {
  const feedbackSectionBottom = this.document
    .querySelector(".feedback")
    .getBoundingClientRect().bottom;
  if (
    feedbackTiltle.classList.contains("opacity-0") &&
    feedbackSectionBottom < 1.5 * windowHeight
  ) {
    [feedbackSlider, feedbackTiltle].forEach((e) =>
      e.classList.remove("opacity-0", "-translate-y-20", "-translate-x-20")
    );
  }
});

/*********** articles section ***********/

// articles slider

const articlesSlider = document.querySelector(".articles__slider");
const articlesSliderHtml = articlesSlider.innerHTML;
const articlesItems = () => document.querySelectorAll(".articles__item");
const articlesLeftArrow = document.querySelector(".articles .left-arrow-icon");
const articlesRightArrow = document.querySelector(
  ".articles .right-arrow-icon"
);
let articlesCounter = 0;

// translation on left click

articlesLeftArrow.addEventListener("click", function () {
  clearInterval(sliderMover);
  if (articlesCounter >= 0) {
    if (document.body.getBoundingClientRect().width >= 768) {
      articlesCounter = -articlesItems().length + 2;
    } else {
      articlesCounter = -articlesItems().length;
    }
    articlesSlider.innerHTML = articlesSliderHtml;
  }
  articlesCounter++;
  articlesItems().forEach(
    (e) =>
      (e.style = `transform: translateX( ${articlesCounter * 100}%) !important`)
  );
});

// translation on right click

articlesRightArrow.addEventListener("click", function () {
  clearInterval(sliderMover);
  const lastarticlesItem = articlesItems()[articlesItems().length - 1];
  if (
    Math.trunc(lastarticlesItem.getBoundingClientRect().right) <=
    Math.trunc(lastarticlesItem.parentElement.getBoundingClientRect().right)
  ) {
    articlesCounter = 1;
    articlesSlider.innerHTML = articlesSliderHtml;
  }
  articlesCounter--;
  articlesItems().forEach(
    (e) =>
      (e.style = `transform: translateX(${articlesCounter * 100}%) !important`)
  );
});

// animation on scroll

const articlesHeader = document.querySelector(".articles__header");

window.addEventListener("scroll", function () {
  const articlesSectionBottom = this.document
    .querySelector(".articles")
    .getBoundingClientRect().bottom;
  if (
    articlesHeader.classList.contains("opacity-0") &&
    articlesSectionBottom < 1.5 * windowHeight
  ) {
    [articlesSlider, articlesHeader].forEach((e) =>
      e.classList.remove("opacity-0", "-translate-y-20", "-translate-x-20")
    );
  }
});

/*********** contact section ***********/

const contactImage = document.querySelector(".contact__image");
const contactInfos = document.querySelector(".contact__infos");
const contactTitle = document.querySelector(".contact__title");
const contactDescription = document.querySelector(".contact__description");
const contactLinks = document.querySelector(".contact .social-media-links");
const contactButtons = document.querySelector(".contact__buttons");
const contactElements = [
  contactImage,
  contactInfos,
  contactTitle,
  contactDescription,
  contactLinks,
  contactButtons,
];

window.addEventListener("scroll", function () {
  const contactSectionBottom = this.document
    .querySelector(".contact")
    .getBoundingClientRect().bottom;
  if (
    contactImage.classList.contains("opacity-0") &&
    contactSectionBottom < 1.5 * windowHeight
  ) {
    contactElements.forEach((e) =>
      e.classList.remove(
        "opacity-0",
        "-translate-y-12",
        "translate-x-32",
        "before:-translate-x-32",
        "before:opacity-0"
      )
    );
  }
});

/*********** subscribe section ***********/

const subscribTitle = document.querySelector(".subscribe__title");
const subscribForm = document.querySelector(".subscribe__form");

window.addEventListener("scroll", function () {
  const subscribeSectionBottom = this.document
    .querySelector(".subscribe")
    .getBoundingClientRect().bottom;
  if (
    subscribTitle.classList.contains("opacity-0") &&
    subscribeSectionBottom < 1.5 * windowHeight
  ) {
    [subscribTitle, subscribForm].forEach((e) =>
      e.classList.remove("opacity-0", "-translate-y-20")
    );
  }
});

/*********** footer ***********/

const today = new Date();
const footerInfo = document.querySelector(".footer__info");

footerInfo.innerHTML = `&copy ${today.getFullYear()} Melvin Thambi. All Rights Reserved`;
