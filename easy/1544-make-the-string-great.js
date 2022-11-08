/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  const dictionary = {
    A: 'a',
    B: 'b',
    C: 'c',
    D: 'd',
    E: 'e',
    F: 'f',
    G: 'g',
    H: 'h',
    I: 'i',
    J: 'j',
    K: 'k',
    L: 'l',
    M: 'm',
    N: 'n',
    O: 'o',
    P: 'p',
    Q: 'q',
    R: 'r',
    S: 's',
    T: 't',
    U: 'u',
    V: 'v',
    W: 'w',
    X: 'x',
    Y: 'y',
    Z: 'z',
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: 'E',
    f: 'F',
    g: 'G',
    h: 'H',
    i: 'I',
    j: 'J',
    k: 'K',
    l: 'L',
    m: 'M',
    n: 'N',
    o: 'O',
    p: 'P',
    q: 'Q',
    r: 'R',
    s: 'S',
    t: 'T',
    u: 'U',
    v: 'V',
    w: 'W',
    x: 'X',
    y: 'Y',
    z: 'Z',
  }

  let result = ''
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const next = s[i + 1];
    const previous = result[result.length - 1];

    if (dictionary[next] && dictionary[next] === current) {
      i++
      continue
    } else if (dictionary[current] && dictionary[current] === previous) {
      result = result.slice(0, result.length - 1)
      continue
    } else {
      result += current
    }
  }
  return result
};

console.log(makeGood("leEeetcode")); // "leetcode"
console.log(makeGood("abBAcC")); // ""
console.log(makeGood("s")); // "s"
console.log(makeGood("Pp")); // ""