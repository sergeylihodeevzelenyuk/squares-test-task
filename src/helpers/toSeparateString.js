const toSeparateStringByCapitaleCase = (string) => {
  const arrayOfLatters = [...string].map((i) => {
    if (i.toUpperCase() == i) {
      return " " + i.toLowerCase();
    } else {
      return i;
    }
  });

  arrayOfLatters[0] = arrayOfLatters[0].toUpperCase();

  return arrayOfLatters.join("");
};

export default toSeparateStringByCapitaleCase;
