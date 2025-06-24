class Emitter {
    constructor() {
      this.listeners = {};
    }
  
    subscribe(event, cb) {
      if (!this.listeners[event]) this.listeners[event] = [];
      this.listeners[event].push(cb);
    }
  
    unsubscribe(event) {
      delete this.listeners[event];
    }
  
    emit(event, data) {
      (this.listeners[event] || []).forEach(cb => cb(data));
    }
  }
  
  export const emitter = new Emitter();