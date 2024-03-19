function leastInterval(tasks, n) {
  let frequency = {};
  let map = Array(26);
  let pq = [];
  let time = 0;
  for (let i = 0; i < tasks.length; i++) {
    const char = tasks[i];
    map[char] = ++map[char] || 1;
    frequency[char] = ++frequency[char] || 1;
  }

  for (let i = 0; i < 26; i++) {
    if (map[i] > 0) {
      pq.push(map[i]);
    }
  }

  while (pq.length !== 0) {
    let temp = [];
    for (let i = 1; i <= n + 1; i++) {
      if (pq.length !== 0) {
        let freq = pq.pop();
        freq--;
        temp.push(freq);
      }
    }

    for (let i = 0; i < temp.length; i++) {
      if (temp[i] > 0) {
        pq.push(temp[i]);
      }
    }

    if (pq.length === 0) {
      time += temp.length;
    } else {
      time += n + 1;
    }
  }
  return time;
}

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 1));
