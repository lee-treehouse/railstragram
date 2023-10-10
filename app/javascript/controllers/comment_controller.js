import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  clear() {
    console.log("clear was called")
    this.element.reset();
  }
}
