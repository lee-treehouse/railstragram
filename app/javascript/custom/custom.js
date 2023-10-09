import * as FilePond from "filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

// Register the plugin
FilePond.registerPlugin(FilePondPluginImagePreview);
FilePond.registerPlugin(FilePondPluginFileValidateType);

// Get a reference to the file input element
const inputElement = document.querySelector("#post-images");

// Create a FilePond instance
const pond = FilePond.create(inputElement, {
  storeAsFile: true,
  credits: {},
  allowMultiple: true,
  allowReorder: true,
  acceptedFileTypes: ["image/*"],
});
