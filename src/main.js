
import { getImgByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = form.elements["search-text"].value.trim();

  if (!query) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search query",
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImgByQuery(query);

    if (data.hits.length === 0) {
      iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
      });
    } else {
      createGallery(data.hits);
    }
  } catch (err) {
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Please try again later.",
    });
    console.error(err);
  } finally {
    hideLoader();
  }
});
