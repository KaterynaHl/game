export function asyncFind(arr, cb, signal) {
    return new Promise((resolve, reject) => {
      let i = 0;
      function next() {
        if (signal.aborted) return reject("Aborted");
        if (i >= arr.length) return reject("Not found");
        cb(arr[i], i).then(result => {
          if (result) resolve(arr[i]);
          else {
            i++;
            setTimeout(next, 0);
          }
        });
      }
      next();
    });
  }
  
  export function runAsyncFindDemo(signal, onSuccess, onError) {
    const items = Array.from({ length: 100 }, (_, i) => i + 1);
    asyncFind(items, async (num) => {
      await new Promise((res) => setTimeout(res, 30));
      return num % 17 === 0;
    }, signal)
      .then(onSuccess)
      .catch(onError);
  }