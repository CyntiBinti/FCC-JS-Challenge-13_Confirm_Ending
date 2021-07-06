function confirmEnding(str, target) {
  let regex = new RegExp (target + '$', 'i');
  let result = regex.test(str);
  return result;
}

confirmEnding("Bastian", "n");
