// клас для черги з пріоритетом
class BiPriorityQueue {
    constructor() {
      this.data = [];
    }
  
    enqueue(item, priority) {
      this.data.push({ item, priority, timestamp: Date.now() });
    }
  
    // видаляє та повертає елемент з найвищим або найнижчим пріоритетом
    dequeue(type) {
      if (this.data.length === 0) return null;
      if (type === "highest") {
        return this.data.splice(this.data.reduce((iMax, x, i, arr) =>
          x.priority > arr[iMax].priority ? i : iMax, 0), 1)[0].item;
      }
      if (type === "lowest") {
        return this.data.splice(this.data.reduce((iMin, x, i, arr) =>
          x.priority < arr[iMin].priority ? i : iMin, 0), 1)[0].item;
      }
      return null;
    }
  }
  
  export const queue = new BiPriorityQueue();
  