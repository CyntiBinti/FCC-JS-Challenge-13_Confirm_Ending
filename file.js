function confirmEnding(str, target) {
  let regex = /target$/gi;
  let result = regex.test(str);
  return result;
}

confirmEnding("Bastian", "n");
