let unfoldAbout = document.getElementById("about-me-button");
let unfoldEducation = document.getElementById("education-button");
let unfoldCareer = document.getElementById("career-button");


unfoldAbout.addEventListener("click", function () {
  event.preventDefault();
  if (document.getElementById("about-me-unfold").style.display === 'none') {
    unfoldAboutClick();
  } else {
    cancalAboutClick();
  }
});

unfoldEducation.addEventListener("click", function () {
  event.preventDefault();
  if (document.getElementById("education-unfold").style.display === 'none') {
    unfoldEducationClick();
  } else {
    cancelEducationClick();
  }
});

unfoldCareer.addEventListener("click", function () {
  event.preventDefault();
  if (document.getElementById("career-unfold").style.display === 'none') {
    unfoldCareerClick();
  } else {
    cancelCareerClick();
  }
});

function unfoldAboutClick() {
  document.getElementById("about-me-unfold").style.display = "block";
}

function cancalAboutClick() {
  document.getElementById("about-me-unfold").style.display = "none";
};

function unfoldEducationClick() {
  document.getElementById("education-unfold").style.display = "block";
};

function cancelEducationClick() {
  document.getElementById("education-unfold").style.display = "none";
};

function unfoldCareerClick() {
  document.getElementById("career-unfold").style.display = "block";
};

function cancelCareerClick() {
  document.getElementById("career-unfold").style.display = "none";
};
