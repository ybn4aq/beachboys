export class ToDo {
  constructor(items) {
    this.items = [];
  }
  addItem(name) {
    this.items.append(name);
  }
  delItem(idx) {
    if (idx >= 0 && idx < this.items.length) {
      this.items.pop(idx);
    } else {
      console.log("Error deleting item");
    }
  }
}
