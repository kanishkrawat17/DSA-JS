function printPermutations(result, str) {
  if (str.length === 0) {
    console.log(result);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    printPermutations(
      result + str.charAt(i),
      str.slice(0, i) + str.slice(i + 1)
    );
  }
}

printPermutations("", "ABC");
