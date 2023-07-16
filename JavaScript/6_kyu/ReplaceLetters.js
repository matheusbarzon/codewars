function replaceLetters(word) {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const vowels = ['a','e','i','o','u'];

  return (() => {
      let result = '';
      for (var letter of word) {
        var index = alphabet.indexOf(letter);

        if (vowels.includes(letter)) {
          result += alphabet[index-1] ?? 'z';
        } else {
          while (!vowels.includes(alphabet[index])) {
            index++;
            if (index > 25) {
              index = 0;
            }
          }
          result += alphabet[index];
        }
      }
      return result;
  })();
}