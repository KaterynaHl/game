export function* colorCycleGenerator() {
    const colors = ["red", "green", "blue", "yellow"];
    let i = 0;
    while (true) {
      yield colors[i % colors.length];
      i++;
    }
  }
  