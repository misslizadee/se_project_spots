const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newCardImageInput = newPostModal.querySelector("#card-image-input");
const newCaptionDescriptionInput = newPostModal.querySelector(
  "#caption-description-input"
);

const cardimageEl = document.querySelector(".card__image");
const captionDescriptionEl = document.querySelector(".card__title");

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

newPostButton.addEventListener("click", function () {
  newCardImageInput.value = cardimageEl.src;
  newCaptionDescriptionInput.value = captionDescriptionEl.textContent;
  newPostModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

function handleNewPostFormSubmit(evt) {
  evt.preventDefault();
  cardimageEl.src = newCardImageInput.value;
  captionDescriptionEl.textContent = newCaptionDescriptionInput.value;
  newPostModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);

newPostForm.addEventListener("submit", handleNewPostFormSubmit);
