const previousYearMathsQuestions = [
  {
    question: "Solve for x: 2x + 5 = 15.",
    options: ["5", "6", "4", "10"],
    answer: "5",
  },
  {
    question: "Factorize: x² - 4.",
    options: ["(x - 2)(x + 2)", "(x - 1)(x + 1)", "(x + 4)", "(x - 3)(x + 3)"],
    answer: "(x - 2)(x + 2)",
  },
  {
    question:
      "Find the value of k in the equation 3x - 2y = k if it passes through the point (1, 3).",
    options: ["1", "3", "7", "5"],
    answer: "7",
  },
  {
    question: "Solve for x: 5x - 7 = 18.",
    options: ["5", "6", "4", "7"],
    answer: "5",
  },
  {
    question: "If 3x - 4 = 11, what is the value of x?",
    options: ["5", "4", "3", "6"],
    answer: "5",
  },
  {
    question:
      "Calculate the area of a triangle with a base of 12 cm and a height of 8 cm.",
    options: ["48 cm²", "60 cm²", "70 cm²", "96 cm²"],
    answer: "48 cm²",
  },
  {
    question:
      "Find the circumference of a circle with a radius of 5 cm (use π = 3.14).",
    options: ["31.4 cm", "25 cm", "15.7 cm", "20 cm"],
    answer: "31.4 cm",
  },
  {
    question:
      "What is the area of a rectangle with a length of 10 cm and a width of 4 cm?",
    options: ["40 cm²", "50 cm²", "20 cm²", "30 cm²"],
    answer: "40 cm²",
  },
  {
    question: "What is the volume of a cube with a side length of 3 cm?",
    options: ["9 cm³", "27 cm³", "12 cm³", "15 cm³"],
    answer: "27 cm³",
  },
  {
    question:
      "Calculate the area of a trapezium with bases of 5 cm and 7 cm and a height of 4 cm.",
    options: ["24 cm²", "32 cm²", "28 cm²", "20 cm²"],
    answer: "24 cm²",
  },
  {
    question: "If sin θ = 0.5, what is θ in degrees?",
    options: ["30°", "45°", "60°", "90°"],
    answer: "30°",
  },
  {
    question: "Find the value of cos 30°.",
    options: ["√3/2", "1/2", "√2/2", "1"],
    answer: "√3/2",
  },
  {
    question: "If tan θ = 1, find θ.",
    options: ["30°", "45°", "60°", "90°"],
    answer: "45°",
  },
  {
    question: "What is the value of sin 60°?",
    options: ["√3/2", "1/2", "1", "0"],
    answer: "√3/2",
  },
  {
    question:
      "Calculate the length of the hypotenuse in a right triangle where the other sides are 3 cm and 4 cm.",
    options: ["5 cm", "6 cm", "7 cm", "8 cm"],
    answer: "5 cm",
  },
  {
    question: "Find the mean of the following numbers: 5, 10, 15, 20.",
    options: ["12.5", "10", "15", "20"],
    answer: "12.5",
  },
  {
    question:
      "The ages of four friends are 20, 22, 24, and 26. What is their median age?",
    options: ["22", "23", "24", "25"],
    answer: "23",
  },
  {
    question: "Calculate the mode of the set: 4, 5, 5, 6, 7, 7, 7.",
    options: ["5", "6", "7", "4"],
    answer: "7",
  },
  {
    question: "What is the range of the numbers: 10, 15, 20, 25?",
    options: ["15", "20", "25", "10"],
    answer: "15",
  },
  {
    question: "What is the variance of the numbers: 2, 4, 6, 8?",
    options: ["5", "6", "4", "8"],
    answer: "5",
  },
  {
    question:
      "A bag contains 4 red and 6 blue balls. What is the probability of drawing a red ball?",
    options: ["2/5", "4/10", "3/5", "4/5"],
    answer: "2/5",
  },
  {
    question: "What is the probability of rolling a 3 on a fair six-sided die?",
    options: ["1/6", "1/2", "1/3", "1/4"],
    answer: "1/6",
  },
  {
    question:
      "If a card is drawn from a standard deck of cards, what is the probability of drawing a king?",
    options: ["1/13", "1/52", "1/4", "1/2"],
    answer: "1/13",
  },
  {
    question:
      "What is the probability of getting an even number when rolling a die?",
    options: ["1/2", "1/6", "1/3", "2/3"],
    answer: "1/3",
  },
  {
    question:
      "In a class of 20 students, what is the probability of selecting a girl if there are 12 girls?",
    options: ["3/5", "2/5", "1/2", "4/5"],
    answer: "3/5",
  },
  {
    question:
      "Calculate the volume of a cylinder with a radius of 4 cm and a height of 10 cm.",
    options: ["50.24 cm³", "160 cm³", "160.8 cm³", "30.16 cm³"],
    answer: "160 cm³",
  },
  {
    question: "Find the surface area of a cube with a side length of 6 cm.",
    options: ["144 cm²", "216 cm²", "96 cm²", "72 cm²"],
    answer: "216 cm²",
  },
  {
    question:
      "What is the area of a circle with a radius of 3 cm (use π = 3.14)?",
    options: ["28.26 cm²", "31.42 cm²", "25.12 cm²", "18.84 cm²"],
    answer: "28.26 cm²",
  },
  {
    question:
      "Find the area of a triangle with a base of 10 cm and a height of 5 cm.",
    options: ["25 cm²", "30 cm²", "40 cm²", "20 cm²"],
    answer: "25 cm²",
  },
  {
    question:
      "Calculate the area of a sphere with a radius of 7 cm (use π = 3.14).",
    options: ["615.44 cm²", "150 cm²", "100 cm²", "340 cm²"],
    answer: "615.44 cm²",
  },
  {
    question: "Solve the equations: 2x + 3y = 12 and x - y = 1.",
    options: ["x = 3, y = 2", "x = 2, y = 3", "x = 1, y = 4", "x = 4, y = 2"],
    answer: "x = 3, y = 2",
  },
  {
    question: "Find the value of x in the equation: 4x - 8 = 16.",
    options: ["5", "6", "4", "7"],
    answer: "6",
  },
  {
    question: "What is the solution of 2x + 5 = 17?",
    options: ["6", "5", "4", "7"],
    answer: "6",
  },
  {
    question: "Solve for x: 3x + 2 = 11.",
    options: ["2", "3", "4", "5"],
    answer: "3",
  },
  {
    question: "If 2(x - 3) = 10, what is the value of x?",
    options: ["5", "10", "8", "7"],
    answer: "8",
  },
  {
    question:
      "Find the 25th term of the arithmetic sequence where the first term is 7 and the common difference is 3.",
    options: ["85", "82", "83", "84"],
    answer: "82",
  },
  {
    question: "What is the sum of the first 10 natural numbers?",
    options: ["45", "55", "50", "60"],
    answer: "55",
  },
  {
    question: "Find the greatest common divisor (GCD) of 24 and 36.",
    options: ["6", "8", "12", "4"],
    answer: "12",
  },
  {
    question: "What is the least common multiple (LCM) of 4 and 6?",
    options: ["12", "24", "30", "18"],
    answer: "12",
  },
];

const previousYearPhysicsQuestions = [
  {
    question: "What is the SI unit of force?",
    options: ["Newton", "Joule", "Pascal", "Watt"],
    answer: "Newton",
  },
  {
    question: "What is the principle of conservation of energy?",
    options: [
      "Energy can be created",
      "Energy can be destroyed",
      "Energy can be transformed",
      "Energy cannot be transformed",
    ],
    answer: "Energy can be transformed",
  },
  {
    question:
      "An object is in free fall. What is the acceleration of the object?",
    options: ["0 m/s²", "9.8 m/s²", "5 m/s²", "10 m/s²"],
    answer: "9.8 m/s²",
  },
  {
    question: "What type of lens is used to correct nearsightedness?",
    options: [
      "Convex lens",
      "Concave lens",
      "Bifocal lens",
      "Cylindrical lens",
    ],
    answer: "Concave lens",
  },
  {
    question:
      "The resistance of a conductor is directly proportional to its length. This is known as:",
    options: ["Ohm's Law", "Kirchhoff's Law", "Joule's Law", "Lenz's Law"],
    answer: "Ohm's Law",
  },
  {
    question: "What is the formula for calculating work done?",
    options: ["W = F × d", "W = F / d", "W = F + d", "W = F - d"],
    answer: "W = F × d",
  },
  {
    question: "Which of the following is a scalar quantity?",
    options: ["Force", "Velocity", "Acceleration", "Mass"],
    answer: "Mass",
  },
  {
    question:
      "In a vacuum, all objects fall with the same acceleration due to gravity regardless of their mass. This is known as:",
    options: [
      "Galileo's Law",
      "Newton's First Law",
      "Newton's Second Law",
      "Archimedes' Principle",
    ],
    answer: "Galileo's Law",
  },
  {
    question: "The change in momentum of an object is equal to the:",
    options: ["Force applied", "Velocity", "Mass", "Acceleration"],
    answer: "Force applied",
  },
  {
    question:
      "What is the frequency of a wave that has a period of 0.02 seconds?",
    options: ["50 Hz", "100 Hz", "200 Hz", "300 Hz"],
    answer: "50 Hz",
  },
  {
    question: "Which phenomenon is responsible for the formation of rainbows?",
    options: ["Reflection", "Refraction", "Diffraction", "Interference"],
    answer: "Refraction",
  },
  {
    question: "What is the formula for calculating kinetic energy?",
    options: ["KE = mv²", "KE = 1/2 mv²", "KE = mgh", "KE = 2mv"],
    answer: "KE = 1/2 mv²",
  },
  {
    question: "Which of the following is a vector quantity?",
    options: ["Speed", "Distance", "Acceleration", "Time"],
    answer: "Acceleration",
  },
  {
    question: "The unit of power is:",
    options: ["Joule", "Watt", "Newton", "Pascal"],
    answer: "Watt",
  },
  {
    question: "What does the slope of a distance-time graph represent?",
    options: ["Distance", "Speed", "Acceleration", "Time"],
    answer: "Speed",
  },
  {
    question:
      "In an electrical circuit, which component is used to limit the current?",
    options: ["Resistor", "Capacitor", "Inductor", "Diode"],
    answer: "Resistor",
  },
  {
    question: "What type of wave is a sound wave?",
    options: [
      "Transverse wave",
      "Longitudinal wave",
      "Surface wave",
      "Standing wave",
    ],
    answer: "Longitudinal wave",
  },
  {
    question:
      "The bending of light as it passes from one medium to another is called:",
    options: ["Reflection", "Refraction", "Diffraction", "Interference"],
    answer: "Refraction",
  },
  {
    question:
      "Which law states that the current through a conductor is directly proportional to the voltage across it?",
    options: ["Ohm's Law", "Faraday's Law", "Coulomb's Law", "Ampere's Law"],
    answer: "Ohm's Law",
  },
  {
    question:
      "What is the effect of increasing the temperature on the resistance of a conductor?",
    options: [
      "Increases",
      "Decreases",
      "Remains the same",
      "Depends on the material",
    ],
    answer: "Increases",
  },
  {
    question: "What is the main function of a transformer?",
    options: [
      "Change AC voltage",
      "Change DC voltage",
      "Store electrical energy",
      "Convert mechanical energy",
    ],
    answer: "Change AC voltage",
  },
  {
    question: "Which of the following is not a form of energy?",
    options: [
      "Mechanical energy",
      "Electrical energy",
      "Chemical energy",
      "Mass",
    ],
    answer: "Mass",
  },
  {
    question: "What is the principle of operation of a lever?",
    options: [
      "Mechanical advantage",
      "Equilibrium",
      "Work done",
      "Force applied",
    ],
    answer: "Mechanical advantage",
  },
  {
    question:
      "What is the wavelength of a wave that travels at a speed of 340 m/s with a frequency of 1700 Hz?",
    options: ["0.2 m", "0.5 m", "1 m", "2 m"],
    answer: "0.2 m",
  },
  {
    question: "Which type of mirror is used in a makeup mirror?",
    options: [
      "Plane mirror",
      "Concave mirror",
      "Convex mirror",
      "Fresnel mirror",
    ],
    answer: "Concave mirror",
  },
  {
    question: "Which physical quantity is measured in volts?",
    options: ["Current", "Resistance", "Power", "Voltage"],
    answer: "Voltage",
  },
  {
    question: "In what type of collision is momentum conserved?",
    options: [
      "Elastic collision",
      "Inelastic collision",
      "Both A and B",
      "Neither A nor B",
    ],
    answer: "Both A and B",
  },
  {
    question: "What is the unit of frequency?",
    options: ["Hertz", "Joule", "Watt", "Newton"],
    answer: "Hertz",
  },
  {
    question:
      "What happens to the speed of sound when it travels from air to water?",
    options: [
      "Decreases",
      "Increases",
      "Remains the same",
      "Varies with temperature",
    ],
    answer: "Increases",
  },
  {
    question: "Which instrument is used to measure electric current?",
    options: ["Voltmeter", "Ammeter", "Ohmmeter", "Wattmeter"],
    answer: "Ammeter",
  },
  {
    question:
      "What is the total resistance in a series circuit with three resistors of 2Ω, 3Ω, and 5Ω?",
    options: ["10Ω", "5Ω", "4Ω", "3Ω"],
    answer: "10Ω",
  },
  {
    question: "What is the main cause of the seasons on Earth?",
    options: [
      "Tilt of Earth's axis",
      "Distance from the Sun",
      "Revolution around the Sun",
      "Rotation of the Earth",
    ],
    answer: "Tilt of Earth's axis",
  },
  {
    question:
      "What is the gravitational force between two objects directly proportional to?",
    options: [
      "Mass of the objects",
      "Distance between the objects",
      "Volume of the objects",
      "Speed of the objects",
    ],
    answer: "Mass of the objects",
  },
  {
    question:
      "What is the phenomenon called when light waves spread out after passing through a narrow opening?",
    options: ["Refraction", "Diffraction", "Reflection", "Interference"],
    answer: "Diffraction",
  },
  {
    question:
      "What is the primary reason for using a fuse in an electrical circuit?",
    options: [
      "To limit current",
      "To increase voltage",
      "To measure power",
      "To store energy",
    ],
    answer: "To limit current",
  },
  {
    question: "Which device converts electrical energy into mechanical energy?",
    options: ["Generator", "Motor", "Transformer", "Capacitor"],
    answer: "Motor",
  },
  {
    question:
      "What happens to the pressure of a gas if its volume is decreased while temperature is kept constant?",
    options: [
      "Pressure increases",
      "Pressure decreases",
      "Pressure remains the same",
      "Depends on the gas",
    ],
    answer: "Pressure increases",
  },
  {
    question: "What is the speed of light in a vacuum?",
    options: ["3 × 10^8 m/s", "3 × 10^6 m/s", "3 × 10^5 m/s", "3 × 10^4 m/s"],
    answer: "3 × 10^8 m/s",
  },
];
const previousYearChemistryQuestions = [
  {
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "NaCl", "H2SO4"],
    answer: "H2O",
  },
  {
    question: "Which of the following is a noble gas?",
    options: ["Oxygen", "Hydrogen", "Argon", "Nitrogen"],
    answer: "Argon",
  },
  {
    question: "What is the pH of a neutral solution at 25°C?",
    options: ["0", "7", "14", "3"],
    answer: "7",
  },
  {
    question:
      "Which process is used for the separation of components of a liquid mixture?",
    options: ["Filtration", "Distillation", "Evaporation", "Sublimation"],
    answer: "Distillation",
  },
  {
    question:
      "What type of reaction is represented by the equation: A + B → AB?",
    options: [
      "Combination reaction",
      "Decomposition reaction",
      "Displacement reaction",
      "Redox reaction",
    ],
    answer: "Combination reaction",
  },
  {
    question: "Which element is commonly used in batteries?",
    options: ["Carbon", "Lithium", "Iron", "Gold"],
    answer: "Lithium",
  },
  {
    question: "What is the molar mass of sodium chloride (NaCl)?",
    options: ["58.44 g/mol", "22.99 g/mol", "35.45 g/mol", "74.55 g/mol"],
    answer: "58.44 g/mol",
  },
  {
    question: "Which of the following is an exothermic reaction?",
    options: [
      "Photosynthesis",
      "Respiration",
      "Melting of ice",
      "Evaporation of water",
    ],
    answer: "Respiration",
  },
  {
    question: "What is the main component of natural gas?",
    options: ["Ethane", "Methane", "Propane", "Butane"],
    answer: "Methane",
  },
  {
    question:
      "What is the term for a substance that speeds up a chemical reaction without being consumed?",
    options: ["Catalyst", "Reagent", "Solvent", "Reactant"],
    answer: "Catalyst",
  },
  {
    question: "Which gas is produced when an acid reacts with a metal?",
    options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Nitrogen"],
    answer: "Hydrogen",
  },
  {
    question: "What is the main use of sulfuric acid (H2SO4)?",
    options: [
      "Fertilizer",
      "Battery acid",
      "Cleaning agent",
      "Food preservative",
    ],
    answer: "Battery acid",
  },
  {
    question: "Which of the following is a strong acid?",
    options: [
      "Acetic acid",
      "Hydrochloric acid",
      "Citric acid",
      "Carbonic acid",
    ],
    answer: "Hydrochloric acid",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    answer: "Au",
  },
  {
    question:
      "What type of bond is formed when electrons are shared between atoms?",
    options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
    answer: "Covalent bond",
  },
  {
    question: "Which element is necessary for the process of photosynthesis?",
    options: ["Carbon", "Nitrogen", "Oxygen", "Hydrogen"],
    answer: "Carbon",
  },
  {
    question: "What is the main component of air?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    answer: "Nitrogen",
  },
  {
    question: "What is the process of converting a liquid into vapor called?",
    options: ["Condensation", "Sublimation", "Evaporation", "Deposition"],
    answer: "Evaporation",
  },
  {
    question: "What is the formula for calculating concentration in mol/L?",
    options: ["C = n/V", "C = m/V", "C = V/n", "C = n × V"],
    answer: "C = n/V",
  },
  {
    question:
      "How many moles are present in 18 grams of water (H2O)? (Molar mass = 18 g/mol)",
    options: ["0.5 moles", "1 mole", "2 moles", "3 moles"],
    answer: "1 mole",
  },
  {
    question: "What is the atomic number of carbon?",
    options: ["6", "12", "14", "8"],
    answer: "6",
  },
  {
    question:
      "Which type of reaction is represented by the equation: AB → A + B?",
    options: [
      "Combination reaction",
      "Decomposition reaction",
      "Displacement reaction",
      "Redox reaction",
    ],
    answer: "Decomposition reaction",
  },
  {
    question: "What is the empirical formula for glucose (C6H12O6)?",
    options: ["CH2O", "C2H4O2", "C6H12O6", "C3H6O3"],
    answer: "CH2O",
  },
  {
    question: "What is the main property of bases?",
    options: ["Bitter taste", "Sour taste", "Salty taste", "Sweet taste"],
    answer: "Bitter taste",
  },
  {
    question: "Which of the following compounds is an alkane?",
    options: ["C2H4", "C3H6", "C5H12", "C2H2"],
    answer: "C5H12",
  },
  {
    question: "What is the common name for sodium bicarbonate?",
    options: ["Baking soda", "Washing soda", "Lye", "Table salt"],
    answer: "Baking soda",
  },
  {
    question: "What is the primary component of limestone?",
    options: [
      "Calcium carbonate",
      "Calcium sulfate",
      "Calcium oxide",
      "Calcium phosphate",
    ],
    answer: "Calcium carbonate",
  },
  {
    question:
      "What is the formula for the reaction between sodium and chlorine?",
    options: [
      "Na + Cl → NaCl",
      "Na + Cl2 → NaCl",
      "2Na + Cl2 → 2NaCl",
      "2Na + Cl → 2NaCl",
    ],
    answer: "2Na + Cl2 → 2NaCl",
  },
  {
    question:
      "What is the name of the reaction in which an acid reacts with a base to produce salt and water?",
    options: ["Neutralization", "Combustion", "Decomposition", "Displacement"],
    answer: "Neutralization",
  },
  {
    question:
      "What is the process by which a solid changes directly into a gas?",
    options: ["Melting", "Sublimation", "Evaporation", "Condensation"],
    answer: "Sublimation",
  },
  {
    question: "What is the oxidation state of sulfur in H2SO4?",
    options: ["-2", "0", "+4", "+6"],
    answer: "+6",
  },
  {
    question: "Which of the following statements about isotopes is true?",
    options: [
      "They have the same atomic number",
      "They have different chemical properties",
      "They have different atomic masses",
      "Both A and C",
    ],
    answer: "Both A and C",
  },
  {
    question: "Which gas is commonly used in the production of ammonia?",
    options: ["Nitrogen", "Hydrogen", "Oxygen", "Carbon dioxide"],
    answer: "Hydrogen",
  },
  {
    question: "What is the unit of concentration in chemistry?",
    options: ["mol/L", "g/mL", "g/L", "mmol/L"],
    answer: "mol/L",
  },
  {
    question: "What is the main function of catalysts in chemical reactions?",
    options: [
      "Increase temperature",
      "Increase pressure",
      "Speed up reactions",
      "Decrease volume",
    ],
    answer: "Speed up reactions",
  },
  {
    question:
      "Which of the following compounds is an example of an organic compound?",
    options: ["H2O", "NaCl", "C2H5OH", "FeO"],
    answer: "C2H5OH",
  },
  {
    question: "What is the molecular formula for ethene?",
    options: ["C2H4", "C2H6", "C3H6", "C2H2"],
    answer: "C2H4",
  },
  {
    question:
      "How many grams of CO2 are present in 2 moles of CO2? (Molar mass = 44 g/mol)",
    options: ["22 g", "44 g", "88 g", "66 g"],
    answer: "88 g",
  },
  {
    question: "What is the main property of acids?",
    options: ["Bitter taste", "Sour taste", "Salty taste", "Sweet taste"],
    answer: "Sour taste",
  },
  {
    question:
      "Which of the following elements has the highest electronegativity?",
    options: ["Fluorine", "Oxygen", "Nitrogen", "Chlorine"],
    answer: "Fluorine",
  },
  {
    question: "What is the main product of the combustion of hydrocarbons?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Water"],
    answer: "Carbon dioxide",
  },
];
const previousYearBiologyQuestions = [
  {
    question: "What is the basic structural and functional unit of life?",
    options: ["Tissue", "Cell", "Organ", "Organism"],
    answer: "Cell",
  },
  {
    question: "Which part of the plant is responsible for photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    answer: "Leaf",
  },
  {
    question:
      "What is the process by which green plants prepare their food called?",
    options: ["Respiration", "Digestion", "Photosynthesis", "Fermentation"],
    answer: "Photosynthesis",
  },
  {
    question: "Which organ is responsible for pumping blood in the human body?",
    options: ["Lungs", "Brain", "Heart", "Liver"],
    answer: "Heart",
  },
  {
    question: "What is the function of the stomata in plants?",
    options: [
      "Absorb water",
      "Exchange gases",
      "Store food",
      "Transport nutrients",
    ],
    answer: "Exchange gases",
  },
  {
    question:
      "Which process is responsible for the movement of water and minerals in plants?",
    options: ["Photosynthesis", "Transpiration", "Respiration", "Digestion"],
    answer: "Transpiration",
  },
  {
    question:
      "What type of tissue is responsible for the transportation of food and nutrients in plants?",
    options: ["Parenchyma", "Sclerenchyma", "Xylem", "Phloem"],
    answer: "Phloem",
  },
  {
    question: "What is the primary function of the liver in the human body?",
    options: ["Digestion", "Respiration", "Detoxification", "Circulation"],
    answer: "Detoxification",
  },
  {
    question:
      "Which of the following is not a function of the roots in plants?",
    options: [
      "Absorption of water",
      "Anchorage",
      "Photosynthesis",
      "Storage of food",
    ],
    answer: "Photosynthesis",
  },
  {
    question: "What is the main function of red blood cells?",
    options: [
      "Transport carbon dioxide",
      "Transport oxygen",
      "Fight infections",
      "Clot blood",
    ],
    answer: "Transport oxygen",
  },
  {
    question: "Which part of the brain controls balance and coordination?",
    options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
    answer: "Cerebellum",
  },
  {
    question:
      "Which type of reproduction involves the fusion of male and female gametes?",
    options: ["Asexual", "Sexual", "Vegetative", "Binary fission"],
    answer: "Sexual",
  },
  {
    question: "What is the basic unit of heredity?",
    options: ["Chromosome", "Gene", "DNA", "RNA"],
    answer: "Gene",
  },
  {
    question:
      "What is the term for the process of cell division in prokaryotes?",
    options: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
    answer: "Binary fission",
  },
  {
    question: "Which of the following is a component of the plant cell wall?",
    options: ["Cellulose", "Glycogen", "Chitin", "Starch"],
    answer: "Cellulose",
  },
  {
    question: "What type of organism can produce its own food using sunlight?",
    options: ["Heterotroph", "Autotroph", "Parasite", "Decomposer"],
    answer: "Autotroph",
  },
  {
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    answer: "Vitamin D",
  },
  {
    question: "What type of symmetry does a jellyfish exhibit?",
    options: [
      "Bilateral symmetry",
      "Radial symmetry",
      "Asymmetry",
      "Pentaradial symmetry",
    ],
    answer: "Radial symmetry",
  },
  {
    question: "Which of the following is a non-communicable disease?",
    options: ["Influenza", "Diabetes", "Tuberculosis", "Chickenpox"],
    answer: "Diabetes",
  },
  {
    question:
      "What is the process by which bacteria convert nitrogen gas into a usable form for plants?",
    options: [
      "Nitrogen fixation",
      "Nitrification",
      "Denitrification",
      "Ammonification",
    ],
    answer: "Nitrogen fixation",
  },
  {
    question: "Which part of the eye is responsible for detecting light?",
    options: ["Cornea", "Retina", "Lens", "Iris"],
    answer: "Retina",
  },
  {
    question:
      "What is the term for the variety of living organisms in a given area?",
    options: ["Population", "Community", "Biodiversity", "Ecosystem"],
    answer: "Biodiversity",
  },
  {
    question:
      "Which type of cell division results in two identical daughter cells?",
    options: ["Mitosis", "Meiosis", "Budding", "Fragmentation"],
    answer: "Mitosis",
  },
  {
    question:
      "What structure regulates the movement of substances in and out of the cell?",
    options: ["Cell wall", "Cytoplasm", "Cell membrane", "Nucleus"],
    answer: "Cell membrane",
  },
  {
    question: "What is the primary role of the skeletal system?",
    options: [
      "Protect organs",
      "Produce blood cells",
      "Provide structure",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question:
      "Which organ system is responsible for transporting nutrients and oxygen throughout the body?",
    options: [
      "Digestive system",
      "Circulatory system",
      "Nervous system",
      "Endocrine system",
    ],
    answer: "Circulatory system",
  },
  {
    question: "What is the process by which cells obtain energy from glucose?",
    options: [
      "Photosynthesis",
      "Fermentation",
      "Cellular respiration",
      "Glycolysis",
    ],
    answer: "Cellular respiration",
  },
  {
    question: "Which of the following is a function of the endocrine system?",
    options: [
      "Producing hormones",
      "Regulating metabolism",
      "Controlling growth",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "Which organ is primarily involved in the digestion of proteins?",
    options: ["Stomach", "Small intestine", "Pancreas", "Liver"],
    answer: "Stomach",
  },
  {
    question: "What is the main function of the respiratory system?",
    options: [
      "Circulate blood",
      "Exchange gases",
      "Digest food",
      "Produce hormones",
    ],
    answer: "Exchange gases",
  },
  {
    question:
      "What type of feedback mechanism helps maintain homeostasis in the body?",
    options: [
      "Positive feedback",
      "Negative feedback",
      "Linear feedback",
      "Circular feedback",
    ],
    answer: "Negative feedback",
  },
  {
    question: "Which of the following is a characteristic of living organisms?",
    options: [
      "Growth",
      "Reproduction",
      "Response to stimuli",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "Which molecule carries genetic information?",
    options: ["Protein", "Lipid", "DNA", "Carbohydrate"],
    answer: "DNA",
  },
  {
    question: "What is the primary role of the large intestine?",
    options: [
      "Absorb nutrients",
      "Reabsorb water",
      "Digest proteins",
      "Produce bile",
    ],
    answer: "Reabsorb water",
  },
  {
    question:
      "Which structure in the human respiratory system is also known as the windpipe?",
    options: ["Larynx", "Bronchi", "Trachea", "Pharynx"],
    answer: "Trachea",
  },
  {
    question: "Which hormone regulates blood sugar levels?",
    options: ["Adrenaline", "Insulin", "Glucagon", "Thyroxine"],
    answer: "Insulin",
  },
  {
    question:
      "Which process involves the movement of molecules from an area of high concentration to an area of low concentration?",
    options: ["Osmosis", "Diffusion", "Active transport", "Filtration"],
    answer: "Diffusion",
  },
  {
    question:
      "What is the name of the protein that carries oxygen in red blood cells?",
    options: ["Hemoglobin", "Myoglobin", "Fibrinogen", "Collagen"],
    answer: "Hemoglobin",
  },
  {
    question:
      "Which organ system is responsible for filtering blood and forming urine?",
    options: [
      "Nervous system",
      "Endocrine system",
      "Excretory system",
      "Circulatory system",
    ],
    answer: "Excretory system",
  },
];
