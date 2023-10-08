import * as FilePond from "filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Get a reference to the file input element
const inputElement = document.querySelector("#post-images");

// Create a FilePond instance
const pond = FilePond.create(inputElement, {
  storeAsFile: true,
  credits: {},
  allowMultiple: true,
  allowReorder: true,
});
