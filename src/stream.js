// генератор, що поступово видає "потоки" даних з затримкою
export async function* streamGenerator() {
    for (let i = 0; i < 20; i++) {
      yield `Chunk ${i + 1}`; 
      await new Promise((res) => setTimeout(res, 100)); 
    }
  }
  
  export async function runStreamDemo(elementId) {
    const el = document.getElementById(elementId);
    el.innerHTML = "";
    for await (const chunk of streamGenerator()) {
      const div = document.createElement("div");
      div.textContent = chunk;
      el.appendChild(div);
    }
  }