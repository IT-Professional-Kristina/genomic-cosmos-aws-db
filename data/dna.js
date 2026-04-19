const dnaItems = [
  {
    PK: "DNA",
    SK: "base#adenine",
    baseName: "Adenine",
    abbreviation: "A",
    baseType: "purine",
    pairsWith: "thymine",
    formula: "C5H5N5",
    role: "One of the four letters of the genetic code",
  },
  {
    PK: "DNA",
    SK: "base#thymine",
    baseName: "Thymine",
    abbreviation: "T",
    baseType: "pyrimidine",
    pairsWith: "adenine",
    formula: "C5H6N2O2",
    role: "Pairs with Adenine to form the A-T base pair",
  },
  {
    PK: "DNA",
    SK: "base#guanine",
    baseName: "Guanine",
    abbreviation: "G",
    baseType: "purine",
    pairsWith: "cytosine",
    formula: "C5H5N5O",
    role: "Pairs with Cytosine to form the G-C base pair",
  },
  {
    PK: "DNA",
    SK: "base#cytosine",
    baseName: "Cytosine",
    abbreviation: "C",
    baseType: "pyrimidine",
    pairsWith: "guanine",
    formula: "C4H5N3O",
    role: "Pairs with Guanine to form the G-C base pair",
  },
];

module.exports = { dnaItems };