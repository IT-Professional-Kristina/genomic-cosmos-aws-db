 const atomicItems = [
  {
    PK: "ATOMIC",
    SK: "molecule#water",
    moleculeName: "Water",
    formula: "H2O",
    role: "Universal biological solvent",
    constituentElements: ["hydrogen", "oxygen"],
  },
  {
    PK: "ATOMIC",
    SK: "molecule#phosphate",
    moleculeName: "Phosphate group",
    formula: "PO4",
    role: "Forms the backbone of DNA strands",
    constituentElements: ["phosphorus", "oxygen"],
  },
  {
    PK: "ATOMIC",
    SK: "molecule#deoxyribose",
    moleculeName: "Deoxyribose",
    formula: "C5H10O4",
    role: "The sugar that forms the DNA backbone",
    constituentElements: ["carbon", "hydrogen", "oxygen"],
  },
  {
    PK: "ATOMIC",
    SK: "molecule#ammonia",
    moleculeName: "Ammonia",
    formula: "NH3",
    role: "Precursor to nitrogen-containing bases",
    constituentElements: ["nitrogen", "hydrogen"],
  },
];

module.exports = { atomicItems };
