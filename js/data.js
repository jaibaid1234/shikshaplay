const mockQuizzes = {
  math: {
    class6: {
      id: "math-class6",
      subject: "Mathematics",
      level: "beginner",
      pointsPerQuestion: 10,
      questions: [
        { id: "math6_q1", text: "Simplify: 48 ÷ 6 × 2", options: ["16", "12", "8"], correctAnswer: 0, explanation: "First divide: 48 ÷ 6 = 8. Then multiply: 8 × 2 = 16." },
        { id: "math6_q2", text: "What is 7/10 + 3/10?", options: ["1", "10/10", "Both are correct"], correctAnswer: 2, explanation: "Adding fractions with the same denominator: (7 + 3)/10 = 10/10 = 1, so both are correct." },
        { id: "math6_q3", text: "Convert 2.5 kilometers into meters.", options: ["2500 m", "2050 m", "1500 m"], correctAnswer: 0, explanation: "1 km = 1000 meters, so 2.5 × 1000 = 2500 meters." },
        { id: "math6_q4", text: "Find the perimeter of a square with side 15 cm.", options: ["45 cm", "60 cm", "75 cm"], correctAnswer: 1, explanation: "Perimeter = 4 × side = 4 × 15 = 60 cm." },
        { id: "math6_q5", text: "What is the LCM of 6 and 8?", options: ["24", "12", "18"], correctAnswer: 0, explanation: "Multiples of 6: 6, 12, 18, 24... Multiples of 8: 8, 16, 24... Common multiple = 24." },
        { id: "math6_q6", text: "Simplify: 3/4 of 32", options: ["21", "22", "24"], correctAnswer: 2, explanation: "3/4 × 32 = (3 × 32) ÷ 4 = 96 ÷ 4 = 24." },
        { id: "math6_q7", text: "If the cost of 5 notebooks is ₹125, what is the cost of 1 notebook?", options: ["₹20", "₹25", "₹30"], correctAnswer: 1, explanation: "125 ÷ 5 = 25. So cost of 1 notebook = ₹25." },
        { id: "math6_q8", text: "Find the area of a rectangle with length 12 cm and breadth 8 cm.", options: ["96 cm²", "88 cm²", "100 cm²"], correctAnswer: 0, explanation: "Area = length × breadth = 12 × 8 = 96 cm²." },
        { id: "math6_q9", text: "A box has 120 chocolates. If they are packed equally in 12 packets, how many chocolates in each packet?", options: ["12", "15", "10"], correctAnswer: 2, explanation: "120 ÷ 12 = 10 chocolates per packet." }, // Corrected answer index from 1 to 2
        { id: "math6_q10", text: "Write the Roman numeral for 49.", options: ["IL", "XLIX", "ILX"], correctAnswer: 1, explanation: "49 = 40 + 9 = XLIX in Roman numerals." },
        { id: "math6_q11", text: "The average of 10 and 20 is:", options: ["15", "12", "18"], correctAnswer: 0, explanation: "Average = (10 + 20) ÷ 2 = 30 ÷ 2 = 15." },
        { id: "math6_q12", text: "What is the largest 4-digit number?", options: ["1000", "9999", "9000"], correctAnswer: 1, explanation: "The largest 4-digit number is 9999." },
        { id: "math6_q13", text: "If 1 kg of sugar costs ₹42, what is the cost of 3.5 kg?", options: ["₹147", "₹148", "₹150"], correctAnswer: 0, explanation: "42 × 3.5 = 147." },
        { id: "math6_q14", text: "Find the simple interest for ₹1000 at 5% per year for 2 years.", options: ["₹50", "₹100", "₹200"], correctAnswer: 1, explanation: "SI = (P × R × T)/100 = (1000 × 5 × 2)/100 = 100." },
        { id: "math6_q15", text: "A right angle has how many degrees?", options: ["45°", "90°", "180°"], correctAnswer: 1, explanation: "By definition, a right angle is 90°." },
        { id: "math6_q16", text: "Estimate the sum: 493 + 278 (rounding off to nearest hundreds).", options: ["700", "800", "900"], correctAnswer: 1, explanation: "493 ≈ 500, 278 ≈ 300; 500 + 300 = 800." },
        { id: "math6_q17", text: "How many prime numbers are there between 10 and 20?", options: ["2", "4", "5"], correctAnswer: 1, explanation: "Primes are 11, 13, 17, 19 = 4." },
        { id: "math6_q18", text: "Find the HCF of 24 and 36.", options: ["6", "12", "18"], correctAnswer: 1, explanation: "HCF is 12." },
        { id: "math6_q19", text: "Write the place value of 6 in 6,452.", options: ["6000", "60", "600"], correctAnswer: 0, explanation: "6 is in the thousands place: 6000." },
        { id: "math6_q20", text: "The sum of three angles of a triangle is:", options: ["90°", "180°", "360°"], correctAnswer: 1, explanation: "Sum of angles in triangle is 180°." }
      ]
    },
    class7: {
      id: "math-class7",
      subject: "Mathematics",
      level: "elementary",
      pointsPerQuestion: 12,
      questions: [
        { id: "math7_q1", text: "Find the cube root of 27.", options: ["3", "9", "2"], correctAnswer: 0, explanation: "Cube root of 27 is 3 since 3×3×3=27." },
        { id: "math7_q2", text: "Simplify: (3 × 5) + (10 ÷ 2).", options: ["20", "25", "18"], correctAnswer: 0, explanation: "3×5=15 and 10÷2=5, sum = 20." },
        { id: "math7_q3", text: "Solve for x: 2x + 6 = 14.", options: ["3", "4", "5"], correctAnswer: 1, explanation: "2x = 8 so x = 4." },
        { id: "math7_q4", text: "Calculate the area of a triangle with base 8 cm and height 5 cm.", options: ["20 cm²", "40 cm²", "15 cm²"], correctAnswer: 0, explanation: "Area = 1/2 × base × height = 20 cm²." },
        { id: "math7_q5", text: "LCM of 9 and 12?", options: ["36", "72", "48"], correctAnswer: 0, explanation: "The smallest common multiple of 9 and 12 is 36." },
        { id: "math7_q6", text: "Find the value: 4³", options: ["12", "64", "81"], correctAnswer: 1, explanation: "4³ = 4 × 4 × 4 = 64." },
        { id: "math7_q7", text: "Convert 1.25 kilograms to grams.", options: ["125 grams", "1250 grams", "12.5 grams"], correctAnswer: 1, explanation: "1 kg = 1000 grams; so 1.25 kg = 1250 grams." },
        { id: "math7_q8", text: "What is the perimeter of a rectangle with length 7 cm and breadth 3 cm?", options: ["20 cm", "21 cm", "25 cm"], correctAnswer: 0, explanation: "Perimeter = 2 × (7 + 3) = 20 cm." },
        { id: "math7_q9", text: "What is 20% of 150?", options: ["25", "30", "35"], correctAnswer: 1, explanation: "20% of 150 = (20/100) × 150 = 30." },
        { id: "math7_q10", text: "Write 0.6 as a fraction.", options: ["3/5", "6/10", "5/3"], correctAnswer: 0, explanation: "0.6 = 6/10 = 3/5 in simplest form." },
        { id: "math7_q11", text: "Round 367 to the nearest ten.", options: ["360", "370", "400"], correctAnswer: 1, explanation: "367 rounded to nearest 10 = 370." },
        { id: "math7_q12", text: "Express 7/8 as a decimal.", options: ["0.875", "0.78", "0.87"], correctAnswer: 0, explanation: "7 ÷ 8 = 0.875." },
        { id: "math7_q13", text: "What is the mean of the numbers: 6, 8, 10, 12?", options: ["8", "9", "10"], correctAnswer: 1, explanation: "Mean = (6+8+10+12)/4 = 9." },
        { id: "math7_q14", text: "If a = 3 and b = 4, find a² + b².", options: ["7", "12", "25"], correctAnswer: 2, explanation: "3² + 4² = 9 + 16 = 25." },
        { id: "math7_q15", text: "What is 1/3 of 60?", options: ["15", "20", "25"], correctAnswer: 1, explanation: "1/3 × 60 = 20." },
        { id: "math7_q16", text: "What is the measure of a supplementary angle of 110°?", options: ["70°", "80°", "100°"], correctAnswer: 0, explanation: "Supplements sum to 180°. 180 - 110 = 70°." },
        { id: "math7_q17", text: "Simplify: 5 × (2 + 3) - 4.", options: ["21", "25", "15"], correctAnswer: 0, explanation: "5 × 5 - 4 = 25 - 4 = 21." },
        { id: "math7_q18", text: "What is the factor of 28?", options: ["5", "7", "9"], correctAnswer: 1, explanation: "7 is a factor: 7 × 4 = 28." },
        { id: "math7_q19", text: "Find the square root of 64.", options: ["6", "7", "8"], correctAnswer: 2, explanation: "√64 = 8." },
        { id: "math7_q20", text: "Sum of interior angles of a pentagon?", options: ["540°", "360°", "450°"], correctAnswer: 0, explanation: "Sum = (5-2) × 180 = 540°." }
      ]
    },
    class8: {
      id: "math-class8",
      subject: "Mathematics",
      level: "intermediate",
      pointsPerQuestion: 13,
      questions: [
        { id: "math8_q1", text: "Factorize: x² - 16.", options: ["(x - 4)(x + 4)", "(x + 4)²", "(x - 8)(x + 2)"], correctAnswer: 0, explanation: "Difference of squares: x² - 16 = (x - 4)(x + 4)." },
        { id: "math8_q2", text: "Simplify: (5 + 3)².", options: ["64", "32", "40"], correctAnswer: 0, explanation: "(5+3)² = 8² = 64." },
        { id: "math8_q3", text: "Solve for x: 5x - 10 = 15.", options: ["3", "4", "5"], correctAnswer: 2, explanation: "5x = 25, so x = 5." },
        { id: "math8_q4", text: "Calculate the volume of a cube with side length 4 cm.", options: ["64 cm³", "48 cm³", "16 cm³"], correctAnswer: 0, explanation: "Volume = side³ = 4³ = 64 cm³." },
        { id: "math8_q5", text: "Find the LCM of 12 and 15.", options: ["60", "180", "45"], correctAnswer: 0, explanation: "LCM of 12 and 15 is 60." },
        { id: "math8_q6", text: "What is 25% of 240?", options: ["40", "60", "30"], correctAnswer: 1, explanation: "25% of 240 = (25/100) × 240 = 60." },
        { id: "math8_q7", text: "Convert 3.75 into an improper fraction.", options: ["15/4", "8/15", "7/5"], correctAnswer: 0, explanation: "3.75 = 3 + 3/4 = 15/4." }, // Corrected option
        { id: "math8_q8", text: "Calculate the perimeter of a rectangle with length 10 m and breadth 6 m.", options: ["32 m", "60 m", "16 m"], correctAnswer: 0, explanation: "Perimeter = 2 × (10 + 6) = 32 m." },
        { id: "math8_q9", text: "What decimal number is equivalent to 7/20?", options: ["0.35", "0.25", "0.4"], correctAnswer: 0, explanation: "7 ÷ 20 = 0.35." },
        { id: "math8_q10", text: "Round 2748 to the nearest hundred.", options: ["2700", "2800", "2750"], correctAnswer: 1, explanation: "Rounded to nearest hundred: 2800." }, // Corrected answer index
        { id: "math8_q11", text: "Find the mode of: 4, 6, 4, 8, 9.", options: ["4", "6", "9"], correctAnswer: 0, explanation: "4 appears twice, others once. Mode is 4." },
        { id: "math8_q12", text: "If x = 2, find 3x² + 4x - 5.", options: ["15", "17", "13"], correctAnswer: 0, explanation: "3(2)² + 4(2) - 5 = 12 + 8 - 5 = 15." }, // Corrected options
        { id: "math8_q13", text: "Which one is a prime number?", options: ["51", "53", "55"], correctAnswer: 1, explanation: "53 is prime." },
        { id: "math8_q14", text: "Simplify: (12 ÷ 3) × (2 + 5).", options: ["28", "27", "24"], correctAnswer: 0, explanation: "4 × 7 = 28." }, // Corrected answer index
        { id: "math8_q15", text: "Find the probability of getting a '3' when rolling a fair six-sided die.", options: ["1/2", "1/6", "1/3"], correctAnswer: 1, explanation: "Only one '3' out of six faces, so 1/6." },
        { id: "math8_q16", text: "Find the square root of 144.", options: ["10", "12", "14"], correctAnswer: 1, explanation: "√144 = 12." },
        { id: "math8_q17", text: "Simplify: 2³ × 2².", options: ["2⁵", "2⁶", "2⁴"], correctAnswer: 0, explanation: "Add exponents: 3 + 2 = 5." },
        { id: "math8_q18", text: "Calculate the area of a circle with radius 7 cm. (Use π=22/7)", options: ["154 cm²", "44 cm²", "98 cm²"], correctAnswer: 0, explanation: "Area = πr² = (22/7) × 7 × 7 = 154 cm²." },
        { id: "math8_q19", text: "Convert 0.125 to a fraction.", options: ["1/8", "1/4", "1/2"], correctAnswer: 0, explanation: "0.125 = 1/8." },
        { id: "math8_q20", text: "What is 15 as a percentage of 75?", options: ["15%", "20%", "25%"], correctAnswer: 1, explanation: "Percentage = (15/75) × 100 = 20%." } // Corrected answer index
      ]
    },
    class9: {
      id: "math-class9",
      subject: "Mathematics",
      level: "highschool",
      pointsPerQuestion: 15,
      questions: [
        { id: "math9_q1", text: "Solve for x: 3x - 5 = 16.", options: ["7", "8", "9"], correctAnswer: 0, explanation: "3x = 21, so x = 7." },
        { id: "math9_q2", text: "Factorize: x² + 5x + 6.", options: ["(x + 2)(x + 3)", "(x - 2)(x - 3)", "(x + 1)(x + 6)"], correctAnswer: 0, explanation: "Factors of 6 that add to 5 are 2 and 3." },
        { id: "math9_q3", text: "Find the value of y if y² = 49.", options: ["6", "7", "8"], correctAnswer: 1, explanation: "Square root of 49 is 7." },
        { id: "math9_q4", text: "If the Perimeter of the square is 24 cm, find its area.", options: ["36 cm²", "30 cm²", "40 cm²"], correctAnswer: 0, explanation: "Side = 24/4=6 cm; Area = 6² = 36 cm²." },
        { id: "math9_q5", text: "Convert 45% to fraction.", options: ["9/20", "45/100", "4/9"], correctAnswer: 0, explanation: "45% = 45/100 = 9/20." },
        { id: "math9_q6", text: "What is the HCF of 24 and 54?", options: ["6", "12", "18"], correctAnswer: 0, explanation: "6 is the highest common factor." },
        { id: "math9_q7", text: "Find the simple interest on ₹2000 for 3 years at 5% p.a.", options: ["300", "200", "400"], correctAnswer: 0, explanation: "SI = (2000 × 5 × 3)/100 = 300." }, // Corrected options
        { id: "math9_q8", text: "Find the median of: 12, 15, 14, 10, 18.", options: ["12", "14", "15"], correctAnswer: 1, explanation: "Sorted data is 10,12,14,15,18; median is 14." },
        { id: "math9_q9", text: "What is the quadrilateral with all sides equal and all angles 90°?", options: ["Square", "Rectangle", "Rhombus"], correctAnswer: 0, explanation: "Square fits all sides equal and angles 90°." },
        { id: "math9_q10", text: "Solve: 2x + 3 = 7x - 2.", options: ["x = 1", "x = 2", "x = 3"], correctAnswer: 0, explanation: "Solving gives 5x=5, so x = 1." }, // Corrected answer index and explanation
        { id: "math9_q11", text: "Calculate the surface area of a sphere with radius 7 cm.", options: ["616 cm²", "154 cm²", "308 cm²"], correctAnswer: 0, explanation: "Surface area = 4πr² = 4 × (22/7) × 7² = 616 cm²." },
        { id: "math9_q12", text: "Find the volume of a cylinder with radius 3 cm and height 7 cm.", options: ["198 cm³", "132 cm³", "44 cm³"], correctAnswer: 0, explanation: "Volume = πr²h = (22/7) × 3² × 7 = 198 cm³." },
        { id: "math9_q13", text: "The value of sin 30° is?", options: ["1", "1/2", "√3/2"], correctAnswer: 1, explanation: "sin 30° = 1/2." },
        { id: "math9_q14", text: "What is the sum of the interior angles of a hexagon?", options: ["720°", "540°", "900°"], correctAnswer: 0, explanation: "Sum = (6 - 2) × 180 = 720°." },
        { id: "math9_q15", text: "Express 0.375 as a fraction.", options: ["3/8", "1/4", "7/8"], correctAnswer: 0, explanation: "0.375 = 3/8." },
        { id: "math9_q16", text: "What is the slope of a horizontal line?", options: ["0", "1", "Undefined"], correctAnswer: 0, explanation: "Slope of horizontal line is 0." },
        { id: "math9_q17", text: "Expand: (x + 3)(x - 2).", options: ["x² + x - 6", "x² + x + 6", "x² - x - 6"], correctAnswer: 0, explanation: "Using FOIL: x² + x - 6." },
        { id: "math9_q18", text: "If the radius is doubled, the area of circle becomes?", options: ["Double", "Triple", "Four times"], correctAnswer: 2, explanation: "Area ∝ r², so quadrupled." },
        { id: "math9_q19", text: "Convert 150° to radians.", options: ["(5π)/6", "(3π)/2", "(2π)/3"], correctAnswer: 0, explanation: "150° = (5π)/6 radians." },
        { id: "math9_q20", text: "What is the coefficient of x² in 3x² + 5x - 7?", options: ["3", "5", "-7"], correctAnswer: 0, explanation: "Coefficient of x² is 3." }
      ]
    },
    class10: {
      id: "math-class10",
      subject: "Mathematics",
      level: "highschool",
      pointsPerQuestion: 16,
      questions: [
        { id: "math10_q1", text: "Solve for x: 2x - 5 = 15.", options: ["10", "5", "7.5"], correctAnswer: 0, explanation: "2x = 20 so x = 10." },
        { id: "math10_q2", text: "Factorize: x² - 16.", options: ["(x - 4)(x + 4)", "(x - 8)(x + 2)", "(x + 4)²"], correctAnswer: 0, explanation: "Difference of squares formula." },
        { id: "math10_q3", text: "Calculate the surface area of a cube with side 6 cm.", options: ["216 cm²", "144 cm²", "36 cm²"], correctAnswer: 0, explanation: "Surface Area = 6 × side² = 6 × 36 = 216 cm²." },
        { id: "math10_q4", text: "What is the slope of the line passing through points (2,3) and (4,7)?", options: ["2", "1", "3"], correctAnswer: 0, explanation: "(7 - 3)/(4 - 2) = 4/2 = 2." },
        { id: "math10_q5", text: "Find the roots of the equation: x² - 5x + 6 = 0.", options: ["2 and 3", "1 and 6", "3 and 6"], correctAnswer: 0, explanation: "Factors of 6 that add to -5 are -2 and -3." },
        { id: "math10_q6", text: "Convert 240° to radians.", options: ["4π/3", "2π/3", "3π/2"], correctAnswer: 0, explanation: "240° = (240 × π)/180 = 4π/3 radians." },
        { id: "math10_q7", text: "What is the distance between points (1,2) and (4,6)?", options: ["5", "6", "7"], correctAnswer: 0, explanation: "√[(4-1)² + (6-2)²] = √(9+16)=√25=5." },
        { id: "math10_q8", text: "If sin 30° = 0.5, what is sin 60°?", options: ["0.87", "0.5", "0.71"], correctAnswer: 0, explanation: "sin 60° = √3/2 ≈ 0.87." },
        { id: "math10_q9", text: "Evaluate: (3/4) ÷ (2/5).", options: ["15/8", "5/8", "6/10"], correctAnswer: 0, explanation: "Divide by multiplying with reciprocal: (3/4) × (5/2) = 15/8." },
        { id: "math10_q10", text: "Find the area of a sector with radius 7 cm and angle 60°.", options: ["25.7 cm²", "42 cm²", "38.5 cm²"], correctAnswer: 2, explanation: "Area = (θ/360) × πr² = (60/360) × (22/7) × 49 ≈ 25.7 cm²." }, // Corrected options and answer index
        { id: "math10_q11", text: "Simplify: (2x + 3)(x - 5).", options: ["2x² - 7x - 15", "2x² - 10x + 3x - 15", "2x² - 10x - 3x + 15"], correctAnswer: 0, explanation: "Use distributive property: 2x² - 10x + 3x - 15 = 2x² - 7x - 15." }, // Corrected answer
        { id: "math10_q12", text: "Find the HCF of 36 and 54.", options: ["12", "18", "24"], correctAnswer: 1, explanation: "HCF is 18." },
        { id: "math10_q13", text: "A triangle has sides 3 cm, 4 cm, and 5 cm. Is it right angled?", options: ["Yes", "No", "Cannot say"], correctAnswer: 0, explanation: "3² + 4² = 5²; triangle is right angled." },
        { id: "math10_q14", text: "Simplify: 4³ - 3².", options: ["55", "46", "37"], correctAnswer: 0, explanation: "64 - 9 = 55." },
        { id: "math10_q15", text: "Find the median of: 3, 7, 5, 9, 1.", options: ["3", "5", "7"], correctAnswer: 1, explanation: "Sorted data: 1, 3, 5, 7, 9; median is 5." },
        { id: "math10_q16", text: "Convert 0.625 to a fraction.", options: ["5/8", "3/5", "1/2"], correctAnswer: 0, explanation: "0.625 = 5/8." },
        { id: "math10_q17", text: "What is the probability of getting a 4 on a six-sided die?", options: ["1/6", "1/4", "1/2"], correctAnswer: 0, explanation: "One face has 4 out of six faces: 1/6." },
        { id: "math10_q18", text: "Find the circumference of a circle radius 14 cm. (Use π = 22/7)", options: ["88 cm", "44 cm", "132 cm"], correctAnswer: 0, explanation: "Circumference = 2πr = 2 × (22/7) × 14 = 88 cm." },
        { id: "math10_q19", text: "If 2x + 3y = 12 and x = 3, find y.", options: ["1", "2", "3"], correctAnswer: 1, explanation: "2(3) + 3y = 12 → 6 + 3y = 12 → 3y=6 → y=2." },
        { id: "math10_q20", text: "Find the angle of a triangle if other two angles are 40° and 75°.", options: ["65°", "55°", "60°"], correctAnswer: 0, explanation: "Sum of angles = 180°, missing angle = 180 - 115 = 65°." }
      ]
    },
    class11: {
      id: "math-class11",
      subject: "Mathematics",
      level: "seniorhigh",
      pointsPerQuestion: 18,
      questions: [
        { id: "math11_q1", text: "Differentiate: y = x² + 3x + 5.", options: ["2x + 3", "x² + 3", "2x + 5"], correctAnswer: 0, explanation: "Derivative of x² is 2x, derivative of 3x is 3." },
        { id: "math11_q2", text: "Find the limit: lim(x→2) (x² - 4)/(x - 2).", options: ["4", "2", "Undefined"], correctAnswer: 0, explanation: "Factor numerator as (x-2)(x+2); limit = 2+2=4." },
        { id: "math11_q3", text: "Evaluate the integral: ∫ 2x dx.", options: ["x² + C", "2x + C", "x + C"], correctAnswer: 0, explanation: "Integral of 2x is x² + constant." },
        { id: "math11_q4", text: "What is the domain of function f(x) = 1/(x - 3)?", options: ["x ≠ 3", "x ≥ 3", "x ≤ 3"], correctAnswer: 0, explanation: "Denominator can’t be zero, so x ≠ 3." },
        { id: "math11_q5", text: "Convert binary number 1011 to decimal.", options: ["11", "13", "15"], correctAnswer: 0, explanation: "1×8 + 0×4 + 1×2 + 1×1 = 11." },
        { id: "math11_q6", text: "Solve the system: 2x + 3y = 7 and x - y = 1.", options: ["x=2, y=1", "x=3, y=1", "x=1, y=2"], correctAnswer: 0, explanation: "Solving gives x=2, y=1." },
        { id: "math11_q7", text: "Find the probability of getting an even number when rolling a die.", options: ["1/2", "1/3", "1/6"], correctAnswer: 0, explanation: "There are 3 even numbers (2,4,6) out of 6 faces." },
        { id: "math11_q8", text: "Find the sum of the first 15 natural numbers.", options: ["120", "105", "110"], correctAnswer: 0, explanation: "Sum = n(n+1)/2 = 15×16/2=120." },
        { id: "math11_q9", text: "Expand: (x + 2y)³.", options: ["x³ + 6x²y + 12xy² + 8y³", "x³ + 3x²y + 3xy² + 2y³", "x³ + 2x²y + 4xy² + 8y³"], correctAnswer: 0, explanation: "Using binomial theorem." },
        { id: "math11_q10", text: "The sum of interior angles of polygon with 12 sides is?", options: ["1800°", "1600°", "2000°"], correctAnswer: 0, explanation: "(n - 2) × 180 = 10 × 180 = 1800°." },
        { id: "math11_q11", text: "Find the derivative of sin x.", options: ["cos x", "-cos x", "-sin x"], correctAnswer: 0, explanation: "d/dx(sin x) = cos x." },
        { id: "math11_q12", text: "Find the Taylor series expansion of eˣ at x=0 up to x² terms.", options: ["1 + x + x²/2", "1 + x - x²/2", "1 + x²"], correctAnswer: 0, explanation: "eˣ = 1 + x + x²/2! + ..." },
        { id: "math11_q13", text: "Evaluate ∫ from 0 to 1 of x dx.", options: ["0.5", "1", "0"], correctAnswer: 0, explanation: "Integral = [x²/2]_0^1 = 1/2 - 0 = 0.5." },
        { id: "math11_q14", text: "What is the inverse of the matrix [[1,2],[3,4]]?", options: ["[[ -2, 1 ], [ 1.5, -0.5 ]]", "[[2,-1],[-1.5,0.5]]", "[[4,3],[2,1]]"], correctAnswer: 0, explanation: "Calculated by standard formula for 2x2 matrices." },
        { id: "math11_q15", text: "Find the roots of the quadratic equation x² - 4x + 3 = 0.", options: ["1 and 3", "2 and 2", "3 and 4"], correctAnswer: 0, explanation: "Factors are (x-1)(x-3)." },
        { id: "math11_q16", text: "Find the binomial coefficient (5 choose 2).", options: ["10", "5", "20"], correctAnswer: 0, explanation: "5C2 = 5×4/2 = 10." },
        { id: "math11_q17", text: "What is the sum of the first 20 even numbers?", options: ["420", "400", "440"], correctAnswer: 0, explanation: "Sum = n(n+1) = 20×21 = 420." },
        { id: "math11_q18", text: "If y = log₁₀x, find dy/dx.", options: ["1/(x ln 10)", "ln x", "x ln 10"], correctAnswer: 0, explanation: "Derivative of log base 10 is 1/(x ln 10)." },
        { id: "math11_q19", text: "Solve for x: eˣ = 5.", options: ["ln 5", "5", "log 5"], correctAnswer: 0, explanation: "Taking ln both sides, x = ln 5." },
        { id: "math11_q20", text: "Find the value of sin 45° × cos 45°.", options: ["1/2", "√2", "1"], correctAnswer: 0, explanation: "sin 45° = cos 45° = √2/2, product = 1/2." }
      ]
    },
    class12: {
      id: "math-class12",
      subject: "Mathematics",
      level: "seniorhigh",
      pointsPerQuestion: 20,
      questions: [
        { id: "math12_q1", text: "Differentiate y = x³ - 4x + 7.", options: ["3x² - 4", "3x² + 4", "x² - 4"], correctAnswer: 0, explanation: "Derivative of x³ is 3x², derivative of -4x is -4." },
        { id: "math12_q2", text: "Evaluate ∫ (2x² + 3x) dx.", options: ["(2/3)x³ + (3/2)x² + C", "(2/3)x³ - (3/2)x² + C", "2x³ + 3x² + C"], correctAnswer: 0, explanation: "Integrate termwise." },
        { id: "math12_q3", text: "Find the limit: lim(x→0) (sin x)/x.", options: ["1", "0", "Undefined"], correctAnswer: 0, explanation: "Standard limit equals 1." },
        { id: "math12_q4", text: "If f(x) = x² + 1, find f⁻¹(5).", options: ["±2", "-2", "4"], correctAnswer: 0, explanation: "Solve x² + 1 = 5 ⇒ x² = 4 ⇒ x= ±2." },
        { id: "math12_q5", text: "Find the derivative of ln x.", options: ["1/x", "x", "-1/x"], correctAnswer: 0, explanation: "Derivative of ln x is 1/x." },
        { id: "math12_q6", text: "Solve the differential equation dy/dx = y.", options: ["y = Ceˣ", "y = Cx", "y = C"], correctAnswer: 0, explanation: "Solution is y = Ceˣ." },
        { id: "math12_q7", text: "Find the volume of a sphere with radius 5 cm.", options: ["(500/3)π cm³", "(400/3)π cm³", "(600/3)π cm³"], correctAnswer: 0, explanation: "Volume = (4/3)πr³ = (4/3)π × 125." },
        { id: "math12_q8", text: "Express 45° in radians.", options: ["π/4", "π/6", "π/3"], correctAnswer: 0, explanation: "45° = π/4 radians." },
        { id: "math12_q9", text: "If tan θ = 1, find θ in degrees.", options: ["45°", "30°", "60°"], correctAnswer: 0, explanation: "tan 45° = 1." },
        { id: "math12_q10", text: "Find the roots of x² - 6x + 9 = 0.", options: ["3", "6 and 3", "1 and 9"], correctAnswer: 0, explanation: "It is (x-3)², so roots are equal: 3." },
        { id: "math12_q11", text: "Evaluate ∫ from 1 to 2 of x dx.", options: ["1.5", "1", "2"], correctAnswer: 0, explanation: "Integral is (x²/2) from 1 to 2 = (4/2) - (1/2) = 1.5." },
        { id: "math12_q12", text: "Find the Equation of Tangent to y = x² at x = 1.", options: ["y = 2x - 1", "y = x - 1", "y = 2x + 1"], correctAnswer: 0, explanation: "Slope is dy/dx=2x=2 at x=1. Point is (1,1). y-1 = 2(x-1)." },
        { id: "math12_q13", text: "Solve for x: e²ˣ = 7.", options: ["(ln 7) / 2", "ln 7", "2 ln 7"], correctAnswer: 0, explanation: "Taking ln: 2x = ln7, x=(ln7)/2." },
        { id: "math12_q14", text: "Evaluate determinant of [[2,3],[4,5]].", options: ["-2", "2", "7"], correctAnswer: 0, explanation: "Determinant = (2×5) - (3×4) = 10 -12 = -2." },
        { id: "math12_q15", text: "What is the sum of the first 50 natural numbers?", options: ["1275", "1225", "1250"], correctAnswer: 0, explanation: "Sum = n(n+1)/2 = 50×51/2 = 1275." },
        { id: "math12_q16", text: "Find the inverse of matrix [[1, 2], [3, 4]].", options: [["-2, 1"], ["1.5, -0.5"]], correctAnswer: 0, explanation: "Inverse is 1/det × adjoint matrix." },
        { id: "math12_q17", text: "Solve: log₁₀ 1000 = ?", options: ["3", "2", "4"], correctAnswer: 0, explanation: "log₁₀ 1000 = 3." },
        { id: "math12_q18", text: "What is the cosine of 60°?", options: ["1/2", "√3/2", "1"], correctAnswer: 0, explanation: "cos 60° = 1/2." },
        { id: "math12_q19", text: "Evaluate 2⁻³.", options: ["1/8", "8", "-8"], correctAnswer: 0, explanation: "2⁻³ = 1/2³ = 1/8." },
        { id: "math12_q20", text: "Find the area under y = x from 0 to 3.", options: ["4.5", "6", "9"], correctAnswer: 0, explanation: "Area = ∫0^3 x dx = [x²/2]_0^3 = 9/2 = 4.5." }
      ]
    }
  },
  science: {
    class6: {
      id: "science-class6",
      subject: "Science",
      level: "beginner",
      pointsPerQuestion: 10,
      questions: [
        { id: "science6_q1", text: "Plants absorb which gas during photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen"], correctAnswer: 1, explanation: "Plants absorb carbon dioxide for photosynthesis." },
        { id: "science6_q2", text: "Which organ pumps blood in the human body?", options: ["Lungs", "Heart", "Kidneys"], correctAnswer: 1, explanation: "The heart pumps blood throughout the body." },
        { id: "science6_q3", text: "The process of a liquid turning into vapor is called?", options: ["Evaporation", "Condensation", "Freezing"], correctAnswer: 0, explanation: "Evaporation is when liquid turns to vapor." },
        { id: "science6_q4", text: "Which simple machine is a seesaw an example of?", options: ["Lever", "Pulley", "Inclined plane"], correctAnswer: 0, explanation: "A seesaw works as a lever." },
        { id: "science6_q5", text: "What type of organism is a frog?", options: ["Mammal", "Amphibian", "Reptile"], correctAnswer: 1, explanation: "Frogs are amphibians." },
        { id: "science6_q6", text: "Water freezes at what temperature on the Celsius scale?", options: ["0°C", "100°C", "-10°C"], correctAnswer: 0, explanation: "Water freezes at 0 degrees Celsius." },
        { id: "science6_q7", text: "Which organ in plants conducts photosynthesis?", options: ["Stem", "Leaves", "Roots"], correctAnswer: 1, explanation: "Leaves contain chlorophyll and perform photosynthesis." },
        { id: "science6_q8", text: "What is the basic unit of life?", options: ["Atom", "Cell", "Molecule"], correctAnswer: 1, explanation: "Cell is the basic structural unit of life." },
        { id: "science6_q9", text: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter"], correctAnswer: 1, explanation: "Mars is called the Red Planet." },
        { id: "science6_q10", text: "Magnet attracts which of these materials?", options: ["Wood", "Iron", "Plastic"], correctAnswer: 1, explanation: "Iron is magnetic and attracted by magnets." },
        { id: "science6_q11", text: "Which gas do humans exhale?", options: ["Oxygen", "Carbon dioxide", "Nitrogen"], correctAnswer: 1, explanation: "Humans exhale carbon dioxide." },
        { id: "science6_q12", text: "What is the natural source of light for Earth?", options: ["Moon", "Sun", "Stars"], correctAnswer: 1, explanation: "The Sun is Earth's natural light source." },
        { id: "science6_q13", text: "Which part of human body controls balance?", options: ["Heart", "Brain", "Stomach"], correctAnswer: 1, explanation: "The brain controls balance and coordination." },
        { id: "science6_q14", text: "What do we call animals that eat plants only?", options: ["Carnivores", "Herbivores", "Omnivores"], correctAnswer: 1, explanation: "Herbivores eat plants." },
        { id: "science6_q15", text: "Which organ helps in breathing?", options: ["Lungs", "Liver", "Kidneys"], correctAnswer: 0, explanation: "Lungs facilitate breathing." },
        { id: "science6_q16", text: "Which of these is a renewable resource?", options: ["Coal", "Water", "Oil"], correctAnswer: 1, explanation: "Water is renewable." },
        { id: "science6_q17", text: "What causes day and night on Earth?", options: ["Earth’s revolution", "Earth’s rotation", "Moon’s rotation"], correctAnswer: 1, explanation: "Earth’s rotation causes day and night." },
        { id: "science6_q18", text: "What is the melting point of ice?", options: ["0°C", "100°C", "50°C"], correctAnswer: 0, explanation: "Ice melts at 0 degrees Celsius." },
        { id: "science6_q19", text: "Electric current flows through?", options: ["Insulators", "Conductors", "Non-conductors"], correctAnswer: 1, explanation: "Conductors allow electric current to flow." },
        { id: "science6_q20", text: "What is the function of roots in plants?", options: ["Absorb nutrients", "Produce flowers", "Make food"], correctAnswer: 0, explanation: "Roots absorb water and nutrients from soil." }
      ]
    },
    class7: {
      id: "science-class7",
      subject: "Science",
      level: "elementary",
      pointsPerQuestion: 12,
      questions: [
        { id: "sci7_q1", text: "What is the primary function of leaves in plants?", options: ["Photosynthesis", "Respiration", "Transpiration"], correctAnswer: 0, explanation: "Leaves help in photosynthesis, converting light into energy." },
        { id: "sci7_q2", text: "Which part of the human digestive system absorbs nutrients?", options: ["Stomach", "Small Intestine", "Liver"], correctAnswer: 1, explanation: "Small intestine absorbs nutrients from digested food." },
        { id: "sci7_q3", text: "What causes rusting of iron?", options: ["Water and oxygen", "Water only", "Oxygen only"], correctAnswer: 0, explanation: "Rust forms due to reaction of iron with water and oxygen." },
        { id: "sci7_q4", text: "Which gas is produced during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], correctAnswer: 0, explanation: "Plants release oxygen as a byproduct during photosynthesis." },
        { id: "sci7_q5", text: "What is the unit of electric current?", options: ["Volt", "Ampere", "Ohm"], correctAnswer: 1, explanation: "Electric current is measured in amperes." },
        { id: "sci7_q6", text: "Physical change is reversible, which of these is a physical change?", options: ["Melting ice", "Burning wood", "Rusting iron"], correctAnswer: 0, explanation: "Melting ice is reversible physical change." },
        { id: "sci7_q7", text: "Which blood cells help in clotting?", options: ["Red blood cells", "White blood cells", "Platelets"], correctAnswer: 2, explanation: "Platelets help stop bleeding by clotting blood." },
        { id: "sci7_q8", text: "Which organ pumps blood and circulates it in the body?", options: ["Heart", "Lungs", "Brain"], correctAnswer: 0, explanation: "Heart functions as a blood pump." },
        { id: "sci7_q9", text: "What type of lens is used in a magnifying glass?", options: ["Concave lens", "Convex lens", "Plane lens"], correctAnswer: 1, explanation: "Magnifying glasses use convex lenses to enlarge images." },
        { id: "sci7_q10", text: "Which phenomenon causes rain?", options: ["Evaporation", "Condensation", "Sublimation"], correctAnswer: 1, explanation: "Water vapor condenses to form rain droplets." },
        { id: "sci7_q11", text: "What is the main source of energy on Earth?", options: ["Sun", "Moon", "Electricity"], correctAnswer: 0, explanation: "Sun is the primary energy source." },
        { id: "sci7_q12", text: "What is the measure of electric resistance?", options: ["Ampere", "Ohm", "Volt"], correctAnswer: 1, explanation: "Resistance is measured in ohms." },
        { id: "sci7_q13", text: "Which is the first step in food digestion?", options: ["Chewing", "Swallowing", "Absorption"], correctAnswer: 0, explanation: "Chewing breaks down food mechanically." },
        { id: "sci7_q14", text: "Which gas do humans inhale?", options: ["Carbon dioxide", "Nitrogen", "Oxygen"], correctAnswer: 2, explanation: "Humans need oxygen to breathe." },
        { id: "sci7_q15", text: "Which material is a good conductor of electricity?", options: ["Plastic", "Copper", "Wood"], correctAnswer: 1, explanation: "Copper is an excellent electrical conductor." },
        { id: "sci7_q16", text: "What does the term 'acids' refer to in science?", options: ["Substances that taste bitter", "Substances with pH less than 7", "Substances that conduct electricity"], correctAnswer: 1, explanation: "Acids have a pH less than 7." },
        { id: "sci7_q17", text: "Which of the following is a physical change?", options: ["Boiling water", "Burning paper", "Rusting iron"], correctAnswer: 0, explanation: "Boiling water is a physical change." },
        { id: "sci7_q18", text: "What device is used to detect electric current?", options: ["Voltmeter", "Ammeter", "Galvanometer"], correctAnswer: 2, explanation: "Galvanometer detects small electric currents." },
        { id: "sci7_q19", text: "Which process helps plants absorb water?", options: ["Transpiration", "Absorption", "Photosynthesis"], correctAnswer: 1, explanation: "Roots absorb water through absorption." },
        { id: "sci7_q20", text: "Which is the hottest layer of the atmosphere?", options: ["Troposphere", "Stratosphere", "Thermosphere"], correctAnswer: 2, explanation: "Thermosphere is the hottest layer." }
      ]
    },
    class8: {
      id: "science-class8",
      subject: "Science",
      level: "intermediate",
      pointsPerQuestion: 13,
      questions: [
        { id: "sci8_q1", text: "What process do plants use to make their food?", options: ["Photosynthesis", "Respiration", "Transpiration"], correctAnswer: 0, explanation: "Photosynthesis is how plants produce food using sunlight." },
        { id: "sci8_q2", text: "Which microorganisms fix nitrogen in the soil?", options: ["Bacteria", "Viruses", "Fungi"], correctAnswer: 0, explanation: "Certain bacteria convert nitrogen gas into usable forms for plants." },
        { id: "sci8_q3", text: "Which of the following is a fossil fuel?", options: ["Coal", "Solar energy", "Wind energy"], correctAnswer: 0, explanation: "Coal is a fossil fuel formed from prehistoric organic matter." },
        { id: "sci8_q4", text: "What is combustion?", options: ["A rapid chemical reaction producing heat and light", "Melting of solids", "Freezing of liquids"], correctAnswer: 0, explanation: "Combustion is a fire reaction producing heat and light." },
        { id: "sci8_q5", text: "Which gas is released during combustion?", options: ["Oxygen", "Carbon dioxide", "Nitrogen"], correctAnswer: 1, explanation: "Carbon dioxide is a product of combustion." },
        { id: "sci8_q6", text: "What is biodiversity?", options: ["Variety of living organisms in an area", "Study of fossils", "Process of photosynthesis"], correctAnswer: 0, explanation: "Biodiversity is the variety of life in a particular habitat." },
        { id: "sci8_q7", text: "What is deforestation?", options: ["Cutting down trees", "Planting more trees", "Soil conservation"], correctAnswer: 0, explanation: "Deforestation means clearing forests by cutting trees." },
        { id: "sci8_q8", text: "The basic unit of life is?", options: ["Atom", "Cell", "Molecule"], correctAnswer: 1, explanation: "Cells make up all living organisms." },
        { id: "sci8_q9", text: "What are synthetic fibres made from?", options: ["Natural resources", "Petroleum products", "Plants"], correctAnswer: 1, explanation: "Synthetic fibres are made from petroleum derivatives." },
        { id: "sci8_q10", text: "Which metal is liquid at room temperature?", options: ["Mercury", "Iron", "Aluminium"], correctAnswer: 0, explanation: "Mercury is liquid at room temperature." },
        { id: "sci8_q11", text: "What is the main source of petroleum?", options: ["Fossilized plants and animals", "Wind", "Water"], correctAnswer: 0, explanation: "Petroleum forms from ancient organic matter." },
        { id: "sci8_q12", text: "What type of cell division produces gametes?", options: ["Mitosis", "Meiosis", "Binary fission"], correctAnswer: 1, explanation: "Meiosis produces sex cells with half chromosomes." },
        { id: "sci8_q13", text: "Which hormone controls puberty in humans?", options: ["Estrogen and Testosterone", "Insulin", "Adrenaline"], correctAnswer: 0, explanation: "Estrogen and Testosterone regulate puberty." }, // Corrected options
        { id: "sci8_q14", text: "Force is measured in?", options: ["Newton", "Joule", "Watt"], correctAnswer: 0, explanation: "Force unit in SI is Newton." },
        { id: "sci8_q15", text: "What is friction?", options: ["Force resisting motion between surfaces", "Force causing motion", "Energy form"], correctAnswer: 0, explanation: "Friction opposes motion between surfaces." },
        { id: "sci8_q16", text: "What is sound?", options: ["Vibrations travelling through a medium", "Light reflection", "Electric charge"], correctAnswer: 0, explanation: "Sound is a vibration transmitted through a medium." }, // Corrected option
        { id: "sci8_q17", text: "Electric current is measured in?", options: ["Volt", "Ampere", "Ohm"], correctAnswer: 1, explanation: "Current is measured in amperes." },
        { id: "sci8_q18", text: "Lightning is caused due to?", options: ["Electric discharge in clouds", "Wind speed", "Humidity"], correctAnswer: 0, explanation: "Lighting is a sudden electric discharge." },
        { id: "sci8_q19", text: "Reflection of light occurs when light:", options: ["Bounces back from a surface", "Passes through a surface", "Is absorbed by a surface"], correctAnswer: 0, explanation: "Light reflection is bouncing back." }, // Corrected option
        { id: "sci8_q20", text: "Air pollution is mainly caused by?", options: ["Forest fires", "Vehicle emissions", "Rainfall"], correctAnswer: 1, explanation: "Vehicle emissions contribute significantly to air pollution." }
      ]
    },
    class9: {
      id: "science-class9",
      subject: "Science",
      level: "highschool",
      pointsPerQuestion: 15,
      questions: [
        { id: "sci9_q1", text: "What are the three states of matter?", options: ["Solid, Liquid, Gas", "Solid, Plasma, Gas", "Liquid, Plasma, Solid"], correctAnswer: 0, explanation: "The three states are solid, liquid, and gas." },
        { id: "sci9_q2", text: "Which law states that energy cannot be created or destroyed?", options: ["Law of Conservation of Energy", "Newton’s First Law", "Law of Reflection"], correctAnswer: 0, explanation: "Energy can neither be created nor destroyed." },
        { id: "sci9_q3", text: "What is the basic unit of life?", options: ["Atom", "Cell", "Organ"], correctAnswer: 1, explanation: "The cell is the basic unit of life." },
        { id: "sci9_q4", text: "What is the SI unit of force?", options: ["Newton", "Joule", "Watt"], correctAnswer: 0, explanation: "Newton is the SI unit of force." },
        { id: "sci9_q5", text: "Which planet is known as the Red Planet?", options: ["Mars", "Jupiter", "Saturn"], correctAnswer: 0, explanation: "Mars is called the Red Planet." },
        { id: "sci9_q6", text: "What kind of change is rusting of iron?", options: ["Physical", "Chemical", "Mechanical"], correctAnswer: 1, explanation: "Rusting is a chemical change." },
        { id: "sci9_q7", text: "Which organelle is known as the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome"], correctAnswer: 1, explanation: "Mitochondria produce energy for the cell." },
        { id: "sci9_q8", text: "What is the acceleration due to gravity on Earth?", options: ["9.8 m/s²", "10 m/s²", "9.5 m/s²"], correctAnswer: 0, explanation: "Standard gravity is 9.8 meters per second squared." },
        { id: "sci9_q9", text: "Which gas is released during photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen"], correctAnswer: 0, explanation: "Plants release oxygen during photosynthesis." },
        { id: "sci9_q10", text: "Energy stored due to position is called?", options: ["Kinetic Energy", "Potential Energy", "Thermal Energy"], correctAnswer: 1, explanation: "Potential energy is due to position." },
        { id: "sci9_q11", text: "What is the pH value of pure water?", options: ["7", "6", "8"], correctAnswer: 0, explanation: "Pure water has neutral pH of 7." },
        { id: "sci9_q12", text: "Sound requires which of the following to travel?", options: ["Vacuum", "Medium", "Empty space"], correctAnswer: 1, explanation: "Sound travels through a medium like air or water." },
        { id: "sci9_q13", text: "The force that opposes motion is called?", options: ["Gravity", "Friction", "Magnetism"], correctAnswer: 1, explanation: "Friction opposes motion between surfaces." },
        { id: "sci9_q14", text: "Who proposed the Universal Law of Gravitation?", options: ["Newton", "Einstein", "Galileo"], correctAnswer: 0, explanation: "Newton proposed the Universal Law of Gravitation." },
        { id: "sci9_q15", text: "Which blood cells fight infections?", options: ["Red Blood Cells", "White Blood Cells", "Platelets"], correctAnswer: 1, explanation: "White blood cells combat infections." },
        { id: "sci9_q16", text: "What type of energy is stored in food?", options: ["Chemical Energy", "Kinetic Energy", "Mechanical Energy"], correctAnswer: 0, explanation: "Food stores chemical energy." },
        { id: "sci9_q17", text: "Which is a renewable source of energy?", options: ["Coal", "Wind", "Petrol"], correctAnswer: 1, explanation: "Wind energy is renewable." },
        { id: "sci9_q18", text: "What is the unit of work done?", options: ["Joule", "Newton", "Watt"], correctAnswer: 0, explanation: "Work is measured in Joules." },
        { id: "sci9_q19", text: "Sound wave is a type of?", options: ["Electromagnetic wave", "Mechanical wave", "Light wave"], correctAnswer: 1, explanation: "Sound is a mechanical wave requiring a medium." },
        { id: "sci9_q20", text: "Which process increases soil fertility?", options: ["Deforestation", "Use of Fertilizers", "Overgrazing"], correctAnswer: 1, explanation: "Fertilizers add nutrients to the soil." }
      ]
    },
    class10: {
      id: "science-class10",
      subject: "Science",
      level: "highschool",
      pointsPerQuestion: 16,
      questions: [
        { id: "sci10_q1", text: "What is a balanced chemical equation?", options: ["Equal number of atoms on both sides", "More atoms on reactant side", "More atoms on product side"], correctAnswer: 0, explanation: "Balanced equation has equal atoms of each element on both sides." },
        { id: "sci10_q2", text: "What is the pH range of acids?", options: ["Less than 7", "More than 7", "Equal to 7"], correctAnswer: 0, explanation: "Acids have pH less than 7." },
        { id: "sci10_q3", text: "Which metal is the best conductor of electricity?", options: ["Silver", "Copper", "Aluminum"], correctAnswer: 0, explanation: "Silver is the best conductor, followed by copper." },
        { id: "sci10_q4", text: "What is the main function of the human respiratory system?", options: ["Digest food", "Exchange gases", "Pump blood"], correctAnswer: 1, explanation: "Respiratory system exchanges oxygen and carbon dioxide." },
        { id: "sci10_q5", text: "What type of image is formed by a concave mirror when the object is at infinity?", options: ["Real and inverted", "Virtual and erect", "Real and erect"], correctAnswer: 0, explanation: "A concave mirror forms a real, inverted, and point-sized image at the focus." },
        { id: "sci10_q6", text: "What is the unit of electric current?", options: ["Ampere", "Volt", "Ohm"], correctAnswer: 0, explanation: "Electric current is measured in amperes." },
        { id: "sci10_q7", text: "Which of these is a chemical change?", options: ["Burning paper", "Melting ice", "Boiling water"], correctAnswer: 0, explanation: "Burning is a chemical change, others are physical." },
        { id: "sci10_q8", text: "What is the process of reproduction in plants called?", options: ["Photosynthesis", "Pollination", "Respiration"], correctAnswer: 1, explanation: "Pollination is key in plant reproduction." },
        { id: "sci10_q9", text: "What kind of wave is sound?", options: ["Electromagnetic wave", "Mechanical wave", "Light wave"], correctAnswer: 1, explanation: "Sound is a mechanical wave, needs medium." },
        { id: "sci10_q10", text: "Which gas is responsible for global warming?", options: ["Nitrogen", "Carbon dioxide", "Oxygen"], correctAnswer: 1, explanation: "Carbon dioxide traps heat leading to global warming." },
        { id: "sci10_q11", text: "Which acid is found in lemon?", options: ["Citric acid", "Sulfuric acid", "Hydrochloric acid"], correctAnswer: 0, explanation: "Lemon contains citric acid." },
        { id: "sci10_q12", text: "What is the formula of water?", options: ["H₂O", "CO₂", "NaCl"], correctAnswer: 0, explanation: "Water's chemical formula is H₂O." },
        { id: "sci10_q13", text: "The human heart has how many chambers?", options: ["2", "3", "4"], correctAnswer: 2, explanation: "The heart has 4 chambers." },
        { id: "sci10_q14", text: "What is the SI unit of energy?", options: ["Joule", "Watt", "Newton"], correctAnswer: 0, explanation: "Energy is measured in Joules." },
        { id: "sci10_q15", text: "Which process releases oxygen in plants?", options: ["Respiration", "Photosynthesis", "Fermentation"], correctAnswer: 1, explanation: "Photosynthesis releases oxygen." },
        { id: "sci10_q16", text: "What is the property of metals to be hammered into sheets called?", options: ["Ductility", "Malleability", "Conductivity"], correctAnswer: 1, explanation: "Malleability is the ability to be shaped into sheets." },
        { id: "sci10_q17", text: "Which is used to measure electric current?", options: ["Voltmeter", "Ammeter", "Thermometer"], correctAnswer: 1, explanation: "Ammeter measures electric current." },
        { id: "sci10_q18", text: "Which ecosystem is found in polar regions?", options: ["Tundra", "Rainforest", "Desert"], correctAnswer: 0, explanation: "Tundra is the polar ecosystem." },
        { id: "sci10_q19", text: "Which gas is essential for combustion?", options: ["Oxygen", "Carbon monoxide", "Nitrogen"], correctAnswer: 0, explanation: "Oxygen supports combustion." },
        { id: "sci10_q20", text: "What phenomenon causes a rainbow?", options: ["Reflection", "Refraction and dispersion", "Diffraction"], correctAnswer: 1, explanation: "Rainbow is caused by refraction and dispersion of light." }
      ]
    },
    class11: {
      id: "science-class11",
      subject: "Science",
      level: "seniorhigh",
      pointsPerQuestion: 18,
      questions: [
        { id: "sci11_q1", text: "What is Mendel's principle of segregation?", options: ["Genes separate during gamete formation", "Genes combine randomly", "Genes move independently"], correctAnswer: 0, explanation: "Genes separate during gamete formation." },
        { id: "sci11_q2", text: "What is the SI unit of electric resistance?", options: ["Ohm", "Volt", "Ampere"], correctAnswer: 0, explanation: "Resistance is measured in Ohms." },
        { id: "sci11_q3", text: "What is the function of ribosomes?", options: ["Protein synthesis", "Energy production", "Genetic material storage"], correctAnswer: 0, explanation: "Ribosomes are sites of protein synthesis." },
        { id: "sci11_q4", text: "What is the law of conservation of mass?", options: ["Mass is constant in a chemical reaction", "Mass increases", "Mass decreases"], correctAnswer: 0, explanation: "Mass remains constant during chemical reactions." },
        { id: "sci11_q5", text: "An object moving in a circle experiences what force?", options: ["Centripetal force", "Centrifugal force", "Gravitational force"], correctAnswer: 0, explanation: "Centripetal force acts towards the center." },
        { id: "sci11_q6", text: "Which organelle controls cell activities?", options: ["Nucleus", "Mitochondria", "Lysosome"], correctAnswer: 0, explanation: "Nucleus regulates cellular functions." },
        { id: "sci11_q7", text: "Which gas is released during anaerobic respiration?", options: ["Carbon dioxide", "Oxygen", "Methane"], correctAnswer: 0, explanation: "Carbon dioxide is a common product of anaerobic respiration (like in yeast)." },
        { id: "sci11_q8", text: "What type of chemical bond involves sharing electron pairs?", options: ["Ionic", "Covalent", "Metallic"], correctAnswer: 1, explanation: "Covalent bond shares electron pairs." },
        { id: "sci11_q9", text: "Who discovered the electron?", options: ["J.J. Thomson", "Rutherford", "Dalton"], correctAnswer: 0, explanation: "J.J. Thomson discovered the electron." },
        { id: "sci11_q10", text: "What does Ohm’s law state?", options: ["V = IR", "V = I/R", "I = VR"], correctAnswer: 0, explanation: "Current is proportional to voltage; V = IR." },
        { id: "sci11_q11", text: "What is the function of the kidneys?", options: ["Filter blood", "Digest food", "Produce hormones"], correctAnswer: 0, explanation: "Kidneys filter waste from blood." },
        { id: "sci11_q12", text: "ATP is the energy currency of which biological process?", options: ["Photosynthesis", "Cellular Respiration", "Both"], correctAnswer: 1, explanation: "ATP is the main energy currency produced by cellular respiration." },
        { id: "sci11_q13", text: "What causes the phases of the Moon?", options: ["Earth's rotation", "Moon's revolution around Earth", "Sun’s rotation"], correctAnswer: 1, explanation: "Moon's revolution causes phases." },
        { id: "sci11_q14", text: "Which device is used to measure electric current?", options: ["Voltmeter", "Ammeter", "Wattmeter"], correctAnswer: 1, explanation: "Ammeter measures electric current." },
        { id: "sci11_q15", text: "The noble gases are located in which group of the periodic table?", options: ["1", "17", "18"], correctAnswer: 2, explanation: "Noble gases are Group 18 elements." },
        { id: "sci11_q16", text: "What is the process of cell division in somatic cells?", options: ["Mitosis", "Meiosis", "Binary fission"], correctAnswer: 0, explanation: "Mitosis produces identical cells." },
        { id: "sci11_q17", text: "Which vitamin is synthesized when skin is exposed to sunlight?", options: ["Vitamin D", "Vitamin C", "Vitamin A"], correctAnswer: 0, explanation: "Sunlight helps produce vitamin D." },
        { id: "sci11_q18", text: "What is the chemical formula of methane?", options: ["CH₄", "C₂H₆", "CO₂"], correctAnswer: 0, explanation: "Methane has chemical formula CH₄." },
        { id: "sci11_q19", text: "What causes the bending of light when it passes from air to water?", options: ["Reflection", "Refraction", "Diffraction"], correctAnswer: 1, explanation: "Light bends by refraction." },
        { id: "sci11_q20", text: "The SI unit of power is?", options: ["Watt", "Joule", "Newton"], correctAnswer: 0, explanation: "Power is measured in watts." }
      ]
    },
    class12: {
      id: "science-class12",
      subject: "Science",
      level: "seniorhigh",
      pointsPerQuestion: 20,
      questions: [
        { id: "sci12_q1", text: "What is the central dogma of molecular biology?", options: ["DNA → RNA → Protein", "Protein → DNA → RNA", "RNA → DNA → Protein"], correctAnswer: 0, explanation: "Genetic information flows from DNA to RNA to protein." },
        { id: "sci12_q2", text: "What is the chemical formula of benzene?", options: ["C₆H₆", "C₅H₅", "C₆H₁₂"], correctAnswer: 0, explanation: "Benzene has formula C₆H₆." },
        { id: "sci12_q3", text: "Define activation energy in a chemical reaction.", options: ["Energy required to start a reaction", "Energy released by reaction", "Energy absorbed after reaction"], correctAnswer: 0, explanation: "Activation energy is needed to initiate reactions." },
        { id: "sci12_q4", text: "What is the shape of an sp3 hybrid orbital?", options: ["Linear", "Trigonal planar", "Tetrahedral"], correctAnswer: 2, explanation: "sp3 hybridization forms tetrahedral orbitals." },
        { id: "sci12_q5", text: "Who discovered the structure of DNA?", options: ["Watson and Crick", "Mendel", "Darwin"], correctAnswer: 0, explanation: "Watson and Crick proposed DNA double helix." },
        { id: "sci12_q6", text: "What is the principle behind a galvanometer?", options: ["Electromagnetic deflection", "Optical rotation", "Thermoelectric effect"], correctAnswer: 0, explanation: "Galvanometer deflects due to electromagnetic force." },
        { id: "sci12_q7", text: "Calculate the energy of photon with frequency 6 × 10¹⁴ Hz (h = 6.63 × 10⁻³⁴ Js).", options: ["3.978 × 10⁻¹⁹ J", "1.1 × 10⁻¹⁹ J", "6.63 × 10⁻¹⁹ J"], correctAnswer: 0, explanation: "E = hν = 6.63×10⁻³⁴ × 6×10¹⁴." },
        { id: "sci12_q8", text: "Identify the process of crossing over in genetics.", options: ["Exchange of chromosome parts between homologous chromosomes", "Fusion of gametes", "Mutation"], correctAnswer: 0, explanation: "Crossing over exchanges genetic material." },
        { id: "sci12_q9", text: "What is the oxidation state of sulfur in H₂SO₄?", options: ["+6", "+4", "+2"], correctAnswer: 0, explanation: "Sulfur has +6 oxidation state in sulfuric acid." },
        { id: "sci12_q10", text: "Which law states the relation between current, voltage, and resistance?", options: ["Ohm's Law", "Faraday's Law", "Kirchhoff's Law"], correctAnswer: 0, explanation: "V = IR is Ohm's Law." },
        { id: "sci12_q11", text: "Find the cell organelle responsible for ATP production.", options: ["Mitochondria", "Golgi apparatus", "Ribosome"], correctAnswer: 0, explanation: "Mitochondria produce ATP." },
        { id: "sci12_q12", text: "What is the function of enzymes in the body?", options: ["Catalysts for biochemical reactions", "Provide energy", "Store genes"], correctAnswer: 0, explanation: "Enzymes catalyze reactions." },
        { id: "sci12_q13", text: "What is the electromagnetic spectrum order from lowest to highest energy?", options: ["Radio, Microwave, Infrared, Visible, UV, X-ray, Gamma", "Gamma, X-ray, UV, Visible, Infrared, Microwave, Radio", "Visible, Radio, Infrared, UV, Gamma"], correctAnswer: 0, explanation: "Energy increases from Radio to Gamma rays." },
        { id: "sci12_q14", text: "Which process converts glucose to pyruvate?", options: ["Glycolysis", "Fermentation", "Photosynthesis"], correctAnswer: 0, explanation: "Glycolysis breaks glucose in cells." },
        { id: "sci12_q15", text: "What is the role of chlorophyll in photosynthesis?", options: ["Absorbs light energy", "Stores energy", "Produces glucose"], correctAnswer: 0, explanation: "Chlorophyll absorbs light to start photosynthesis." },
        { id: "sci12_q16", text: "Which acid is found in vinegar?", options: ["Acetic acid", "Citric acid", "Tartaric acid"], correctAnswer: 0, explanation: "Vinegar contains acetic acid." },
        { id: "sci12_q17", text: "Which branch of physics studies motion without considering forces?", options: ["Kinematics", "Dynamics", "Statics"], correctAnswer: 0, explanation: "Kinematics deals with motion only." },
        { id: "sci12_q18", text: "What is the speed of light in vacuum?", options: ["3 × 10⁸ m/s", "1.5 × 10⁸ m/s", "3 × 10⁶ m/s"], correctAnswer: 0, explanation: "Speed of light c is 3×10⁸ m/s." },
        { id: "sci12_q19", text: "Which mineral is essential for thyroid hormone synthesis?", options: ["Iodine", "Iron", "Calcium"], correctAnswer: 1, explanation: "Iodine is necessary for thyroid hormones." }, // Corrected answer index
        { id: "sci12_q20", text: "In which organ does fertilization occur in humans?", options: ["Uterus", "Fallopian tube", "Ovary"], correctAnswer: 1, explanation: "Fertilization usually happens in fallopian tubes." }
      ]
    }
  },
  english: {
    class6: {
      id: "english-class6",
      subject: "English",
      level: "beginner",
      pointsPerQuestion: 10,
      questions: [
        { id: "eng6_q1", text: "Identify the noun in the sentence: 'The dog barked loudly.'", options: ["Dog", "Barked", "Loudly"], correctAnswer: 0, explanation: "'Dog' is a noun, naming a person, place or thing." },
        { id: "eng6_q2", text: "Choose the correct synonym for 'Happy'.", options: ["Sad", "Joyful", "Angry"], correctAnswer: 1, explanation: "'Joyful' means happy." },
        { id: "eng6_q3", text: "Select the correct past tense of 'go'.", options: ["Goed", "Went", "Gone"], correctAnswer: 1, explanation: "'Went' is the correct past tense of 'go'." },
        { id: "eng6_q4", text: "What type of word is 'quickly'?", options: ["Noun", "Adjective", "Adverb"], correctAnswer: 2, explanation: "'Quickly' describes how something is done, so it's an adverb." },
        { id: "eng6_q5", text: "Which is a compound sentence?", options: ["She runs fast, but he runs faster.", "He is tired.", "I like apples."], correctAnswer: 0, explanation: "Compound sentences have two independent clauses joined by a conjunction." }, // Corrected option
        { id: "eng6_q6", text: "Choose the correct form: 'She _____ a book every week.'", options: ["Read", "Reads", "Reading"], correctAnswer: 1, explanation: "'Reads' is correct in present simple tense." },
        { id: "eng6_q7", text: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes"], correctAnswer: 1, explanation: "'Children' is the correct plural form." },
        { id: "eng6_q8", text: "Identify the adjective in the sentence: 'The blue sky is beautiful.'", options: ["Blue", "Sky", "Beautiful"], correctAnswer: 0, explanation: "'Blue' describes the noun 'sky', so it's an adjective." },
        { id: "eng6_q9", text: "Pick the correct punctuation to end this sentence: 'What time is it'", options: ["?", ".", "!"], correctAnswer: 0, explanation: "A question ends with a question mark." },
        { id: "eng6_q10", text: "Which word is a preposition?", options: ["Under", "Run", "Happy"], correctAnswer: 0, explanation: "'Under' shows relation between nouns, so preposition." },
        { id: "eng6_q11", text: "Identify the verb in the sentence: 'She sings beautifully.'", options: ["Sings", "She", "Beautifully"], correctAnswer: 0, explanation: "'Sings' is the action word (verb)." },
        { id: "eng6_q12", text: "What is the opposite of 'dark'?", options: ["Dim", "Light", "Dull"], correctAnswer: 1, explanation: "'Light' is the opposite of 'dark'." },
        { id: "eng6_q13", text: "Choose the correct article: '___ apple a day keeps the doctor away.'", options: ["A", "An", "The"], correctAnswer: 1, explanation: "'An' precedes words starting with vowel sounds." },
        { id: "eng6_q14", text: "Which of the following is a proper noun?", options: ["City", "Delhi", "Car"], correctAnswer: 1, explanation: "'Delhi' is a proper noun (specific place)." },
        { id: "eng6_q15", text: "Select the correct plural form: 'Box'", options: ["Boxs", "Boxes", "Boxies"], correctAnswer: 1, explanation: "'Boxes' is the correct plural form." },
        { id: "eng6_q16", text: "Which sentence is in future tense?", options: ["She will go to school.", "She goes to school.", "She went to school."], correctAnswer: 0, explanation: "'Will go' indicates future tense." },
        { id: "eng6_q17", text: "Find the adverb in the sentence: 'He ran quickly.'", options: ["He", "Ran", "Quickly"], correctAnswer: 2, explanation: "'Quickly' tells how he ran, so adverb." },
        { id: "eng6_q18", text: "What is the possessive form of 'boy'?", options: ["Boys", "Boy's", "Boys'"], correctAnswer: 1, explanation: "'Boy's' shows ownership by one boy." },
        { id: "eng6_q19", text: "Which word shows a feeling of happiness?", options: ["Gloomy", "Joyful", "Angry"], correctAnswer: 1, explanation: "'Joyful' expresses happiness." },
        { id: "eng6_q20", text: "Identify the correct sentence:", options: ["She don't like apples.", "She doesn't like apples.", "She not like apples."], correctAnswer: 1, explanation: "'She doesn't like apples.' is grammatically correct." }
      ]
    },
    class7: {
      id: "english-class7",
      subject: "English",
      level: "elementary",
      pointsPerQuestion: 12,
      questions: [
        { id: "eng7_q1", text: "Identify the noun in the sentence: 'The child is playing in the park.'", options: ["Child", "Playing", "Park"], correctAnswer: 0, explanation: "'Child' and 'Park' are nouns. Child is the subject." },
        { id: "eng7_q2", text: "Choose the correct plural form of 'city'.", options: ["Citys", "Cities", "Cityes"], correctAnswer: 1, explanation: "'Cities' is the correct plural with 'y' changed to 'ies'." },
        { id: "eng7_q3", text: "Select the correct tense: 'She _____ to school every day.'", options: ["Go", "Goes", "Going"], correctAnswer: 1, explanation: "'Goes' agrees with singular subject 'She'." },
        { id: "eng7_q4", text: "Which of the following is an adjective?", options: ["Slowly", "Beautiful", "Run"], correctAnswer: 1, explanation: "'Beautiful' describes a noun, so it is an adjective." },
        { id: "eng7_q5", text: "Identify the pronoun in: 'He gave his book to me.'", options: ["He, his, me", "Book", "Gave"], correctAnswer: 0, explanation: "'He', 'his', and 'me' are pronouns." },
        { id: "eng7_q6", text: "Choose the correct sentence:", options: ["Is she singing?", "She is singing.", "She singing is."], correctAnswer: 1, explanation: "Correct sentence: 'She is singing.'" },
        { id: "eng7_q7", text: "Find the correct past tense of 'run'.", options: ["Runned", "Ran", "Running"], correctAnswer: 1, explanation: "'Ran' is the past tense of 'run'." },
        { id: "eng7_q8", text: "What is the antonym of 'Happy'?", options: ["Sad", "Glad", "Joyful"], correctAnswer: 0, explanation: "'Sad' is the opposite of happy." },
        { id: "eng7_q9", text: "Identify the adverb in: 'He quickly ran to the store.'", options: ["Quickly", "Ran", "Store"], correctAnswer: 0, explanation: "'Quickly' describes how he ran." },
        { id: "eng7_q10", text: "Choose correct subject-verb agreement: 'The team ____ playing well.'", options: ["Are", "Is", "Were"], correctAnswer: 1, explanation: "'Team' is a collective noun treated as singular, so 'is' is correct." },
        { id: "eng7_q11", text: "Transform to passive voice: 'The chef cooked the meal.'", options: ["The meal is cooked by the chef.", "The meal was cooked by the chef.", "The meal cooked the chef."], correctAnswer: 1, explanation: "Correct passive: 'The meal was cooked by the chef'." },
        { id: "eng7_q12", text: "Identify the correct preposition: 'She is sitting ___ the chair.'", options: ["on", "in", "at"], correctAnswer: 0, explanation: "'On' is used when someone is sitting on a chair." },
        { id: "eng7_q13", text: "What is the form of the verb in: 'He has eaten breakfast.'", options: ["Present tense", "Past participle", "Future tense"], correctAnswer: 1, explanation: "'Eaten' is the past participle form." },
        { id: "eng7_q14", text: "Choose the correct article: '___ hour has passed.'", options: ["A", "An", "The"], correctAnswer: 1, explanation: "'An' before a vowel sound 'hour'." },
        { id: "eng7_q15", text: "Which sentence is in reported speech?", options: ["He said he was tired.", "He is tired.", "He said: 'I am tired.'"], correctAnswer: 0, explanation: "Reported speech recounts what someone said." },
        { id: "eng7_q16", text: "Select correct question tag: 'You are coming, ___?'", options: ["aren't you", "don't you", "isn't he"], correctAnswer: 0, explanation: "'Aren't you' is correct question tag." },
        { id: "eng7_q17", text: "Choose the correct conjunction: 'I wanted to go, ___ it was raining.'", options: ["but", "and", "or"], correctAnswer: 0, explanation: "'But' shows contrast." },
        { id: "eng7_q18", text: "Identify the direct speech: 'He said that he was ill.'", options: ["He said, 'I am ill.'", "He says he was ill.", "He said he was ill."], correctAnswer: 0, explanation: "Direct speech quotes exact words." },
        { id: "eng7_q19", text: "Find the correct spelling:", options: ["Accomodate", "Accommodate", "Acommodate"], correctAnswer: 1, explanation: "'Accommodate' is the correct spelling." },
        { id: "eng7_q20", text: "What is the plural of 'mouse'?", options: ["Mouses", "Mices", "Mice"], correctAnswer: 2, explanation: "'Mice' is the plural form." }
      ]
    },
    class8: {
      id: "english-class8",
      subject: "English",
      level: "intermediate",
      pointsPerQuestion: 13,
      questions: [
        { id: "eng8_q1", text: "Choose the correct synonym for 'Intelligent'.", options: ["Smart", "Lazy", "Happy"], correctAnswer: 0, explanation: "'Smart' is a synonym of 'Intelligent'." },
        { id: "eng8_q2", text: "Identify the adjective in the sentence: 'The bright stars shone in the sky.'", options: ["Bright", "Stars", "Shone"], correctAnswer: 0, explanation: "'Bright' describes the noun 'stars'." },
        { id: "eng8_q3", text: "Select the correct verb form: 'She ___ her homework every day.'", options: ["Do", "Does", "Did"], correctAnswer: 1, explanation: "'Does' is the correct verb for third person singular." },
        { id: "eng8_q4", text: "Which is a proper noun?", options: ["City", "Delhi", "Dog"], correctAnswer: 1, explanation: "'Delhi' is a proper noun (specific name)." },
        { id: "eng8_q5", text: "Choose the correct preposition: 'The cat is sitting ___ the table.'", options: ["Under", "On", "In"], correctAnswer: 0, explanation: "'Under' indicates position below something." },
        { id: "eng8_q6", text: "What is the antonym of 'Brave'?", options: ["Cowardly", "Bold", "Strong"], correctAnswer: 0, explanation: "'Cowardly' is opposite of 'Brave'." },
        { id: "eng8_q7", text: "Identify the correct sentence:", options: ["He don't like ice cream.", "He doesn't like ice cream.", "He isn't like ice cream."], correctAnswer: 1, explanation: "Correct usage: 'He doesn't like ice cream.'" },
        { id: "eng8_q8", text: "Select the adverb in: 'She speaks softly.'", options: ["Speaks", "She", "Softly"], correctAnswer: 2, explanation: "'Softly' describes how she speaks." },
        { id: "eng8_q9", text: "Choose the correct conjunction: 'I wanted to go, ___ it was raining.'", options: ["but", "and", "so"], correctAnswer: 0, explanation: "'But' shows contrast." },
        { id: "eng8_q10", text: "Find the plural of 'Child'.", options: ["Childs", "Children", "Childes"], correctAnswer: 1, explanation: "'Children' is the plural of 'Child'." },
        { id: "eng8_q11", text: "What is the possessive form of 'Girl'?", options: ["Girls", "Girl's", "Girls'"], correctAnswer: 1, explanation: "'Girl's' denotes possession by one girl." },
        { id: "eng8_q12", text: "Identify the pronoun in: 'They went to the market.'", options: ["They", "Went", "Market"], correctAnswer: 0, explanation: "'They' is a pronoun replacing a noun." },
        { id: "eng8_q13", text: "Choose the correct article: '___ umbrella is on the table.'", options: ["A", "An", "The"], correctAnswer: 1, explanation: "'An' is used before vowel sounds." },
        { id: "eng8_q14", text: "Which sentence is in the future tense?", options: ["She will dance.", "She is dancing.", "She danced."], correctAnswer: 0, explanation: "'Will dance' is future tense." },
        { id: "eng8_q15", text: "Identify the compound sentence:", options: ["I like tea and coffee.", "She is tall but he is short.", "The sun rises."], correctAnswer: 1, explanation: "Compound sentence connects two independent clauses." },
        { id: "eng8_q16", text: "Select the correct question tag: 'You are coming, ___?'", options: ["aren't you", "don't you", "isn't he"], correctAnswer: 0, explanation: "'Aren't you' is correct question tag." },
        { id: "eng8_q17", text: "Find the correct spelling:", options: ["Recieve", "Receive", "Recive"], correctAnswer: 1, explanation: "'Receive' is the correct spelling." },
        { id: "eng8_q18", text: "Which word is an interjection?", options: ["Wow!", "Quiet", "Run"], correctAnswer: 0, explanation: "'Wow!' expresses strong emotion." },
        { id: "eng8_q19", text: "Rewrite to passive voice: 'They are painting the house.'", options: ["The house is being painted by them.", "The house painted by them.", "They are painted by the house."], correctAnswer: 0, explanation: "Correct passive form is 'The house is being painted by them'." },
        { id: "eng8_q20", text: "Choose the correct sentence:", options: ["Its a beautiful day.", "It’s a beautiful day.", "It is a beautifull day."], correctAnswer: 1, explanation: "'It’s' is contraction of 'It is'." }
      ]
    },
    class9: {
      id: "english-class9",
      subject: "English",
      level: "highschool",
      pointsPerQuestion: 15,
      questions: [
        { id: "eng9_q1", text: "Choose the correct synonym of 'Generous'.", options: ["Stingy", "Kind", "Greedy"], correctAnswer: 1, explanation: "'Kind' means generous and helpful." },
        { id: "eng9_q2", text: "Identify the adjective in the sentence: 'The tall man entered the room.'", options: ["Tall", "Man", "Entered"], correctAnswer: 0, explanation: "'Tall' describes the noun." },
        { id: "eng9_q3", text: "Choose the correct past participle of 'break'.", options: ["Broke", "Broken", "Breaked"], correctAnswer: 1, explanation: "'Broken' is past participle of 'break'." },
        { id: "eng9_q4", text: "Select the correct sentence:", options: ["She don’t like apples.", "She doesn’t like apples.", "She no like apples."], correctAnswer: 1, explanation: "'She doesn’t like apples.' is correct." },
        { id: "eng9_q5", text: "Find the antonym of 'Accept'.", options: ["Refuse", "Allow", "Agree"], correctAnswer: 0, explanation: "'Refuse' means not accept." },
        { id: "eng9_q6", text: "Identify the adverb in: 'He speaks loudly.'", options: ["He", "Speaks", "Loudly"], correctAnswer: 2, explanation: "'Loudly' describes the verb 'speaks'." },
        { id: "eng9_q7", text: "Pick the correct article: '___ honest man helped me.'", options: ["A", "An", "The"], correctAnswer: 1, explanation: "'An' before vowel sound 'honest'." },
        { id: "eng9_q8", text: "Which is a complex sentence?", options: ["I went home because I was tired.", "I cooked and ate.", "He runs fast."], correctAnswer: 0, explanation: "Complex sentence has dependent clause 'because I was tired'." },
        { id: "eng9_q9", text: "Choose the correct preposition: 'She is sitting ___ the bench.'", options: ["On", "In", "Under"], correctAnswer: 0, explanation: "'On' is correct for sitting on a surface." },
        { id: "eng9_q10", text: "Change to passive voice: 'The teacher praised the student.'", options: ["The student was praised by the teacher.", "The student praised the teacher.", "The teacher was praised by the student."], correctAnswer: 0, explanation: "Passive voice swaps object and subject." },
        { id: "eng9_q11", text: "Which is the correct plural form of 'mouse'?", options: ["Mouses", "Mice", "Mousees"], correctAnswer: 1, explanation: "'Mice' is the plural form of mouse." },
        { id: "eng9_q12", text: "Identify the correct sentence:", options: ["Neither of the boys are ready.", "Neither of the boys is ready.", "Neither of the boys were ready."], correctAnswer: 1, explanation: "'Neither' is singular, so 'is' is correct." },
        { id: "eng9_q13", text: "Select the interrogative sentence.", options: ["He is coming.", "Is he coming?", "He is not coming."], correctAnswer: 1, explanation: "Interrogative sentences ask questions." },
        { id: "eng9_q14", text: "Fill in the blank with correct modal: 'You ___ finish your homework.'", options: ["Can", "Must", "May"], correctAnswer: 1, explanation: "'Must' shows obligation." },
        { id: "eng9_q15", text: "Identify the conjunction: 'I wanted to go, but it was raining.'", options: ["And", "But", "Or"], correctAnswer: 1, explanation: "'But' connects contrasting clauses." },
        { id: "eng9_q16", text: "Find the main verb in: 'She has been reading a book.'", options: ["Has", "Been", "Reading"], correctAnswer: 2, explanation: "'Reading' is the main action." },
        { id: "eng9_q17", text: "Choose the correct indirect speech for: 'He said, \"I am tired.\"'", options: ["He said he was tired.", "He says he is tired.", "He said he be tired."], correctAnswer: 0, explanation: "Reported speech changes pronouns and tense." },
        { id: "eng9_q18", text: "Choose correct suffix to form noun: 'Act' + ____", options: ["-ion", "-ment", "-ness"], correctAnswer: 0, explanation: "'Action' is a noun formed from 'Act'." },
        { id: "eng9_q19", text: "Find the synonym of 'Beautiful'.", options: ["Ugly", "Pretty", "Bad"], correctAnswer: 1, explanation: "'Pretty' means beautiful." },
        { id: "eng9_q20", text: "Identify the sentence with an error:", options: ["She don’t like ice cream.", "She doesn’t like ice cream.", "She likes ice cream."], correctAnswer: 0, explanation: "'She don’t' is incorrect; should be 'She doesn’t'." }
      ]
    },
    class10: {
      id: "english-class10",
      subject: "English",
      level: "highschool",
      pointsPerQuestion: 16,
      questions: [
        { id: "eng10_q1", text: "Choose the correct synonym of 'Abundant'.", options: ["Plentiful", "Rare", "Scarce"], correctAnswer: 0, explanation: "'Plentiful' means abundant." },
        { id: "eng10_q2", text: "Identify the adjective in: 'The magnificent palace was built centuries ago.'", options: ["Magnificent", "Palace", "Centuries"], correctAnswer: 0, explanation: "'Magnificent' describes the palace." },
        { id: "eng10_q3", text: "Choose the correct sentence:", options: ["Neither of them has come.", "Neither of them have come.", "Neither of them were come."], correctAnswer: 0, explanation: "'Neither' is singular and takes 'has'." },
        { id: "eng10_q4", text: "Choose the correct article: 'He is ___ honest man.'", options: ["A", "An", "The"], correctAnswer: 1, explanation: "'An' is used before vowel sounds like ‘honest’." },
        { id: "eng10_q5", text: "Fill in the blank with correct preposition: 'She is good ___ playing chess.'", options: ["In", "At", "For"], correctAnswer: 1, explanation: "'Good at' is the correct collocation." },
        { id: "eng10_q6", text: "Rewrite in passive voice: 'The gardener waters the plants every day.'", options: ["The plants are watered by the gardener every day.", "The plants watered by the gardener.", "The gardener is watered by the plants."], correctAnswer: 0, explanation: "Passive voice emphasizes the plants being watered." },
        { id: "eng10_q7", text: "Select the correct future tense: 'They ____ the exam tomorrow.'", options: ["Will pass", "Passed", "Are passing"], correctAnswer: 0, explanation: "'Will pass' expresses future action." },
        { id: "eng10_q8", text: "Find the word with correct spelling:", options: ["Necessery", "Necessary", "Necessar"], correctAnswer: 1, explanation: "'Necessary' is the correct spelling." },
        { id: "eng10_q9", text: "Identify the adverb in: 'He answered the questions confidently.'", options: ["Answered", "Confidently", "Questions"], correctAnswer: 1, explanation: "'Confidently' describes how he answered." },
        { id: "eng10_q10", text: "Choose the correct sentence:", options: ["She didn't went to school.", "She didn't go to school.", "She don't go to school."], correctAnswer: 1, explanation: "'Didn’t' is followed by base verb 'go'." },
        { id: "eng10_q11", text: "Identify the conjunction: 'He was tired, so he went home.'", options: ["Because", "So", "But"], correctAnswer: 1, explanation: "'So' shows cause and effect." },
        { id: "eng10_q12", text: "Choose the indirect speech for: 'He said, \"I am happy.\"'", options: ["He said he was happy.", "He says he is happy.", "He said he will be happy."], correctAnswer: 0, explanation: "Reported speech changes pronouns and tense." },
        { id: "eng10_q13", text: "Pick the correct question tag: 'You have finished the work, ___?'", options: ["haven't you", "didn't you", "don't you"], correctAnswer: 0, explanation: "The tag mirrors the auxiliary verb." },
        { id: "eng10_q14", text: "Select the correct plural form of 'Analysis'.", options: ["Analysises", "Analyses", "Analysis"], correctAnswer: 1, explanation: "'Analyses' is the plural form." },
        { id: "eng10_q15", text: "Fill in the blanks with the correct modal: 'You ___ submit the report by Monday.'", options: ["can", "must", "should"], correctAnswer: 1, explanation: "'Must' expresses obligation." },
        { id: "eng10_q16", text: "Identify the noun: 'Freedom is essential for happiness.'", options: ["Freedom", "Essential", "Happiness"], correctAnswer: 0, explanation: "'Freedom' and 'Happiness' are abstract nouns." },
        { id: "eng10_q17", text: "Find the synonym for 'Difficult'.", options: ["Easy", "Hard", "Simple"], correctAnswer: 1, explanation: "'Hard' is a synonym of 'Difficult'." },
        { id: "eng10_q18", text: "Correct the sentence: 'She can sings very well.'", options: ["She can sing very well.", "She can sang very well.", "She can singing very well."], correctAnswer: 0, explanation: "'Can' is followed by base verb without 's'." },
        { id: "eng10_q19", text: "Identify the correct tense: 'They have been working since morning.'", options: ["Present Perfect Continuous", "Past Perfect", "Future Continuous"], correctAnswer: 0, explanation: "This is present perfect continuous tense." },
        { id: "eng10_q20", text: "Rewrite in plural: 'The child is playing in the garden.'", options: ["The children are playing in the garden.", "The childs is playing in the garden.", "The children is playing in the garden."], correctAnswer: 0, explanation: "Correct plural subject-verb agreement." }
      ]
    },
    class11: {
      id: "english-class11",
      subject: "English",
      level: "seniorhigh",
      pointsPerQuestion: 18,
      questions: [
        { id: "eng11_q1", text: "Identify the correct synonym of 'Benevolent'.", options: ["Kind", "Cruel", "Indifferent"], correctAnswer: 0, explanation: "'Benevolent' means kind and generous." },
        { id: "eng11_q2", text: "Choose the correct sentence:", options: ["He has gone to school.", "He have gone to school.", "He is gone to school."], correctAnswer: 0, explanation: "'Has' agrees with singular subject 'He'." },
        { id: "eng11_q3", text: "What is the correct past perfect form: 'She _____ finished her homework.'", options: ["had", "has", "have"], correctAnswer: 0, explanation: "Past perfect uses 'had' + past participle." },
        { id: "eng11_q4", text: "Convert to indirect speech: He said, 'I am coming tomorrow.'", options: ["He said he was coming the next day.", "He said he is coming tomorrow.", "He says he will come tomorrow."], correctAnswer: 0, explanation: "Changes in tense and time expressions occur in indirect speech." },
        { id: "eng11_q5", text: "Identify the part of speech: 'The quick brown fox jumps over the lazy dog.' (Word: 'quick')", options: ["Noun", "Adjective", "Adverb"], correctAnswer: 1, explanation: "'Quick' describes the noun 'fox'." },
        { id: "eng11_q6", text: "Select the correct conjunction to join: 'I am tired, ___ I will not stop.'", options: ["but", "and", "if"], correctAnswer: 0, explanation: "'But' indicates contrast." },
        { id: "eng11_q7", text: "What is the antonym of 'Optimistic'?", options: ["Pessimistic", "Hopeful", "Cheerful"], correctAnswer: 0, explanation: "'Pessimistic' is the opposite of 'Optimistic'." },
        { id: "eng11_q8", text: "Choose the correct form: 'Neither of them _____ been home.'", options: ["have", "has", "is"], correctAnswer: 1, explanation: "'Neither' is singular, so use 'has'." },
        { id: "eng11_q9", text: "Choose the correct sentence in passive voice: 'The gardener is planting trees.'", options: ["Trees are being planted by the gardener.", "Trees is planted by the gardener.", "Trees is being planted by the gardener."], correctAnswer: 0, explanation: "The correct passive form uses plural 'are'." },
        { id: "eng11_q10", text: "Identify the mood in: 'If I were you, I would study more.'", options: ["Indicative", "Imperative", "Subjunctive"], correctAnswer: 2, explanation: "This is subjunctive mood expressing hypothetical." },
        { id: "eng11_q11", text: "Fill in the blank: 'She has been working here ___ 2015.'", options: ["since", "for", "from"], correctAnswer: 0, explanation: "'Since' is used with specific starting time." },
        { id: "eng11_q12", text: "Choose correct phrase: 'He is afraid ___ spiders.'", options: ["of", "from", "for"], correctAnswer: 0, explanation: "'Afraid of' is correct expression." },
        { id: "eng11_q13", text: "What is the prefix meaning 'not'? ", options: ["Un-", "Re-", "Dis-"], correctAnswer: 0, explanation: "'Un-' denotes negation." },
        { id: "eng11_q14", text: "Identify the literary device: 'The wind whispered through the trees.'", options: ["Simile", "Personification", "Metaphor"], correctAnswer: 1, explanation: "Personification gives human traits to non-human things." },
        { id: "eng11_q15", text: "Choose the correct form: 'It is important that he ___ on time.'", options: ["arrives", "arrive", "arriving"], correctAnswer: 1, explanation: "After 'important that' use base form (subjunctive)." },
        { id: "eng11_q16", text: "Convert active to passive: 'People speak English worldwide.'", options: ["English is spoken worldwide.", "English spoken worldwide.", "English is speaking worldwide."], correctAnswer: 0, explanation: "Passive uses 'is spoken'." },
        { id: "eng11_q17", text: "Select the error: 'Everybody have finished their homework.'", options: ["Everybody", "have", "finished"], correctAnswer: 1, explanation: "'Everybody' is singular, so 'has' is correct." },
        { id: "eng11_q18", text: "What is the correct question tag: 'She can swim, ___?'", options: ["can’t she", "can she", "does she"], correctAnswer: 0, explanation: "Positive statement takes negative tag." },
        { id: "eng11_q19", text: "Find the synonym for 'Adversity'.", options: ["Misfortune", "Prosperity", "Success"], correctAnswer: 0, explanation: "'Adversity' means misfortune or difficulty." },
        { id: "eng11_q20", text: "Choose the correct idiom: 'He let the cat ___ of the bag.'", options: ["out", "in", "off"], correctAnswer: 0, explanation: "The idiom means to reveal a secret." }
      ]
    },
    class12: {
      id: "english-class12",
      subject: "English",
      level: "seniorhigh",
      pointsPerQuestion: 20,
      questions: [
        { id: "eng12_q1", text: "Choose the correct synonym of 'Eloquent'.", options: ["Fluent", "Silent", "Shy"], correctAnswer: 0, explanation: "'Eloquent' means fluent or persuasive in speaking." },
        { id: "eng12_q2", text: "Identify the figure of speech: 'Time is a thief.'", options: ["Metaphor", "Simile", "Personification"], correctAnswer: 0, explanation: "Time is compared to a thief without 'like' or 'as'." },
        { id: "eng12_q3", text: "Choose the correct sentence:", options: ["If I were you, I would go.", "If I was you, I would go.", "If I am you, I will go."], correctAnswer: 0, explanation: "'If I were' expresses hypothetical situation using subjunctive mood." },
        { id: "eng12_q4", text: "Convert to indirect speech: 'He said, \"I have finished the work.\"'", options: ["He said he had finished the work.", "He says he has finished the work.", "He said he finished work."], correctAnswer: 0, explanation: "Reported speech changes tense in past narration." },
        { id: "eng12_q5", text: "Choose the correct phrasal verb meaning 'to cancel'.", options: ["Call off", "Break up", "Put off"], correctAnswer: 0, explanation: "'Call off' means to cancel." },
        { id: "eng12_q6", text: "Find the correct preposition: 'She is keen ___ learning.'", options: ["To", "On", "In"], correctAnswer: 1, explanation: "'Keen on' means interested in." },
        { id: "eng12_q7", text: "Select the correct passive form: 'They will complete the project next week.'", options: ["The project will be completed next week.", "The project will complete next week.", "The project be completed next week."], correctAnswer: 0, explanation: "Passive future continuous uses 'will be' + past participle." },
        { id: "eng12_q8", text: "Identify the error: 'Neither of the options are correct.'", options: ["Neither", "Are", "Correct"], correctAnswer: 1, explanation: "'Neither' is singular; should use 'is'." },
        { id: "eng12_q9", text: "Change to active voice: 'The book was written by him.'", options: ["He wrote the book.", "He was writing the book.", "The book wrote him."], correctAnswer: 0, explanation: "Active voice subjects perform the action." },
        { id: "eng12_q10", text: "Pick the correct modal to complete: 'You ___ submit the assignment on time.'", options: ["Should", "Mustn't", "Couldn't"], correctAnswer: 0, explanation: "'Should' expresses advice or obligation." },
        { id: "eng12_q11", text: "Identify the tense: 'She has been working for three hours.'", options: ["Present perfect continuous", "Past perfect", "Future perfect"], correctAnswer: 0, explanation: "Present perfect continuous shows duration up to now." },
        { id: "eng12_q12", text: "Find the idiom meaning 'to reveal a secret'.", options: ["Hit the sack", "Let the cat out of the bag", "Break the ice"], correctAnswer: 1, explanation: "'Let the cat out of the bag' means to reveal secrets." },
        { id: "eng12_q13", text: "Fill in the blank: 'If you ___ earlier, you would have caught the bus.'", options: ["Had left", "Have left", "Would leave"], correctAnswer: 0, explanation: "Third conditional statement uses past perfect." },
        { id: "eng12_q14", text: "Choose correct sentence for reported request: 'He said, \"Please help me.\"'", options: ["He requested me to help him.", "He requested to help him.", "He requested that I help him."], correctAnswer: 0, explanation: "Reported requests use 'requested [someone] to [do something]'." }, // Corrected answer
        { id: "eng12_q15", text: "What is the plural of 'Crisis'?", options: ["Crisises", "Crises", "Crisis"], correctAnswer: 1, explanation: "'Crises' is the correct plural." },
        { id: "eng12_q16", text: "Identify the literary device: 'The stars danced playfully in the night sky.'", options: ["Simile", "Personification", "Alliteration"], correctAnswer: 1, explanation: "Stars are given human action, personification." },
        { id: "eng12_q17", text: "Find the correct meaning of the proverb: 'Actions speak louder than words.'", options: ["What you do is more important than what you say.", "People speak loudly.", "Actions are always better."], correctAnswer: 0, explanation: "The proverb implies deeds have more impact than words." },
        { id: "eng12_q18", text: "Choose the correct spelling:", options: ["Necessary", "Neccesary", "Necassary"], correctAnswer: 0, explanation: "'Necessary' is correct spelling." },
        { id: "eng12_q19", text: "Rewrite the sentence into conditional: 'I will call you if I arrive early.'", options: ["If I will arrive early, I will call you.", "I would call you if I arrived early.", "If I arrive early, I will call you."], correctAnswer: 2, explanation: "First conditional uses 'if' + present, 'will' + base verb." },
        { id: "eng12_q20", text: "What is the correct expanded form of 'Ph.D.'?", options: ["Doctor of Philosophy", "Physician Doctor", "Philosophy Doctor"], correctAnswer: 0, explanation: "'Ph.D.' stands for Doctor of Philosophy." }
      ]
    }
  },
  gk: {
    class6: {
      id: "gk-class6",
      subject: "General Knowledge",
      level: "beginner",
      pointsPerQuestion: 10,
      questions: [
        { id: "gk6_q1", text: "Who was the first President of India?", options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Dr. Zakir Hussain"], correctAnswer: 0, explanation: "Dr. Rajendra Prasad was the first President of India." },
        { id: "gk6_q2", text: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter"], correctAnswer: 0, explanation: "Mars is called the Red Planet." },
        { id: "gk6_q3", text: "What is the capital of France?", options: ["Paris", "London", "Rome"], correctAnswer: 0, explanation: "Paris is the capital city of France." },
        { id: "gk6_q4", text: "Which is the largest continent on Earth?", options: ["Asia", "Africa", "Europe"], correctAnswer: 0, explanation: "Asia is the largest continent by area." },
        { id: "gk6_q5", text: "Who invented the light bulb?", options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla"], correctAnswer: 0, explanation: "Thomas Edison is credited with inventing the electric light bulb." },
        { id: "gk6_q6", text: "What is the national animal of India?", options: ["Tiger", "Lion", "Elephant"], correctAnswer: 0, explanation: "The Bengal tiger is the national animal of India." },
        { id: "gk6_q7", text: "Which river is known as the longest river in the world?", options: ["Nile", "Amazon", "Ganges"], correctAnswer: 0, explanation: "The Nile River is the longest river in the world." },
        { id: "gk6_q8", text: "Who wrote the Indian national anthem?", options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Kavi Pradeep"], correctAnswer: 0, explanation: "Rabindranath Tagore wrote 'Jana Gana Mana'." },
        { id: "gk6_q9", text: "Which animal is known as the King of the Jungle?", options: ["Lion", "Elephant", "Leopard"], correctAnswer: 0, explanation: "The lion is called the King of the Jungle." },
        { id: "gk6_q10", text: "What gas do plants absorb from the atmosphere?", options: ["Carbon dioxide", "Oxygen", "Nitrogen"], correctAnswer: 0, explanation: "Plants absorb carbon dioxide for photosynthesis." },
        { id: "gk6_q11", text: "Which is the smallest unit of living organisms?", options: ["Cell", "Atom", "Molecule"], correctAnswer: 0, explanation: "The cell is the smallest unit of life." },
        { id: "gk6_q12", text: "Which country is known as the 'Land of the Rising Sun'?", options: ["Japan", "China", "Thailand"], correctAnswer: 0, explanation: "Japan is called the Land of the Rising Sun." },
        { id: "gk6_q13", text: "Which is the largest ocean in the world?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"], correctAnswer: 0, explanation: "The Pacific Ocean is the largest ocean." },
        { id: "gk6_q14", text: "What is the currency of India?", options: ["Rupee", "Dollar", "Euro"], correctAnswer: 0, explanation: "The Indian currency is the Rupee." },
        { id: "gk6_q15", text: "Who is known as the Father of the Nation in India?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Bhagat Singh"], correctAnswer: 0, explanation: "Mahatma Gandhi is called the Father of the Nation." },
        { id: "gk6_q16", text: "Which is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kangchenjunga"], correctAnswer: 0, explanation: "Mount Everest is the highest mountain." },
        { id: "gk6_q17", text: "Who discovered gravity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"], correctAnswer: 0, explanation: "Isaac Newton formulated the law of gravity." },
        { id: "gk6_q18", text: "Which instrument is used to measure temperature?", options: ["Thermometer", "Barometer", "Hygrometer"], correctAnswer: 0, explanation: "Thermometer measures temperature." },
        { id: "gk6_q19", text: "Which is the national bird of India?", options: ["Peacock", "Eagle", "Kingfisher"], correctAnswer: 0, explanation: "Peacock is the national bird of India." },
        { id: "gk6_q20", text: "Which planet is called the Earth's twin?", options: ["Venus", "Mars", "Mercury"], correctAnswer: 0, explanation: "Venus is called Earth's twin because of similar size and structure." }
      ]
    },
    class7: {
      id: "gk-class7",
      subject: "General Knowledge",
      level: "elementary",
      pointsPerQuestion: 12,
      questions: [
        { id: "gk7_q1", text: "Who is known as the 'Father of the Indian Constitution'?", options: ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru"], correctAnswer: 0, explanation: "Dr. B.R. Ambedkar is called the Father of the Indian Constitution." },
        { id: "gk7_q2", text: "Which is the longest river in India?", options: ["Ganges", "Yamuna", "Brahmaputra"], correctAnswer: 0, explanation: "The Ganges is the longest river in India." },
        { id: "gk7_q3", text: "What is the capital of Australia?", options: ["Canberra", "Sydney", "Melbourne"], correctAnswer: 2, explanation: "Canberra is the capital city of Australia." },
        { id: "gk7_q4", text: "Which gas is responsible for the greenhouse effect?", options: ["Oxygen", "Carbon dioxide", "Nitrogen"], correctAnswer: 1, explanation: "Carbon dioxide traps heat causing greenhouse effect." },
        { id: "gk7_q5", text: "In which year did India gain independence?", options: ["1947", "1950", "1945"], correctAnswer: 0, explanation: "India got independence in 1947." },
        { id: "gk7_q6", text: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla"], correctAnswer: 0, explanation: "Alexander Graham Bell invented the telephone." },
        { id: "gk7_q7", text: "Which planet is known for its rings?", options: ["Saturn", "Jupiter", "Mars"], correctAnswer: 0, explanation: "Saturn is famous for its rings." },
        { id: "gk7_q8", text: "What is the national flower of India?", options: ["Lotus", "Rose", "Sunflower"], correctAnswer: 0, explanation: "Lotus is the national flower of India." },
        { id: "gk7_q9", text: "Who wrote the book 'India Wins Freedom'?", options: ["Maulana Abul Kalam Azad", "Jawaharlal Nehru", "Subhash Chandra Bose"], correctAnswer: 0, explanation: "Azad authored 'India Wins Freedom'." },
        { id: "gk7_q10", text: "Which is the largest desert in the world?", options: ["Sahara", "Thar", "Kalahari"], correctAnswer: 0, explanation: "Sahara is the world's largest hot desert." },
        { id: "gk7_q11", text: "What instrument is used to measure atmospheric pressure?", options: ["Barometer", "Thermometer", "Hygrometer"], correctAnswer: 0, explanation: "Barometer measures atmospheric pressure." },
        { id: "gk7_q12", text: "Who was the first Prime Minister of India?", options: ["Jawaharlal Nehru", "Indira Gandhi", "Mahatma Gandhi"], correctAnswer: 0, explanation: "Jawaharlal Nehru was India’s first Prime Minister." },
        { id: "gk7_q13", text: "Which language is the official language of the United Nations?", options: ["English", "French", "Both English and French"], correctAnswer: 2, explanation: "Both English and French are among the six official UN languages." },
        { id: "gk7_q14", text: "What is the chemical symbol for water?", options: ["H₂O", "CO₂", "NaCl"], correctAnswer: 0, explanation: "Water's chemical formula is H₂O." },
        { id: "gk7_q15", text: "Which animal is the fastest land animal?", options: ["Cheetah", "Lion", "Leopard"], correctAnswer: 0, explanation: "Cheetah is the fastest land animal." },
        { id: "gk7_q16", text: "Which continent is called the 'Dark Continent'?", options: ["Africa", "Asia", "Europe"], correctAnswer: 0, explanation: "Africa was called the 'Dark Continent'." },
        { id: "gk7_q17", text: "What is the boiling point of water?", options: ["100°C", "90°C", "80°C"], correctAnswer: 0, explanation: "Water boils at 100 degrees Celsius at sea level." },
        { id: "gk7_q18", text: "Who was the founder of Buddhism?", options: ["Gautama Buddha", "Mahavira", "Jesus Christ"], correctAnswer: 0, explanation: "Buddhism was founded by Gautama Buddha." },
        { id: "gk7_q19", text: "Which is the currency of the United States?", options: ["Dollar", "Euro", "Pound"], correctAnswer: 0, explanation: "The US currency is the Dollar." },
        { id: "gk7_q20", text: "Which is the largest organ in the human body?", options: ["Skin", "Heart", "Liver"], correctAnswer: 0, explanation: "Skin is the largest organ of the body." }
      ]
    },
    class8: {
      id: "gk-class8",
      subject: "General Knowledge",
      level: "intermediate",
      pointsPerQuestion: 13,
      questions: [
        { id: "gk8_q1", text: "Who is the current Secretary-General of the United Nations?", options: ["Antonio Guterres", "Ban Ki-moon", "Kofi Annan"], correctAnswer: 0, explanation: "Antonio Guterres is the current Secretary-General of the UN." },
        { id: "gk8_q2", text: "Which is the largest democracy in the world?", options: ["India", "USA", "UK"], correctAnswer: 0, explanation: "India is the largest democracy by population." },
        { id: "gk8_q3", text: "What is the currency of Japan?", options: ["Yen", "Dollar", "Euro"], correctAnswer: 0, explanation: "The currency of Japan is Yen." },
        { id: "gk8_q4", text: "Which planet is known as the Morning Star?", options: ["Venus", "Mars", "Jupiter"], correctAnswer: 0, explanation: "Venus is called the Morning Star." },
        { id: "gk8_q5", text: "Who invented the World Wide Web?", options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs"], correctAnswer: 0, explanation: "Tim Berners-Lee invented the World Wide Web." },
        { id: "gk8_q6", text: "Which gas is most abundant in the Earth’s atmosphere?", options: ["Nitrogen", "Oxygen", "Carbon dioxide"], correctAnswer: 0, explanation: "Nitrogen makes up about 78% of the atmosphere." },
        { id: "gk8_q7", text: "What is the national flower of India?", options: ["Lotus", "Rose", "Sunflower"], correctAnswer: 0, explanation: "Lotus is the national flower." },
        { id: "gk8_q8", text: "Which is the smallest country in the world?", options: ["Vatican City", "Monaco", "Nauru"], correctAnswer: 0, explanation: "Vatican City is the smallest country." },
        { id: "gk8_q9", text: "Which is the longest river in India?", options: ["Ganges", "Yamuna", "Brahmaputra"], correctAnswer: 0, explanation: "Ganges is the longest river in India." },
        { id: "gk8_q10", text: "Which organ in the human body is responsible for pumping blood?", options: ["Heart", "Lungs", "Kidneys"], correctAnswer: 0, explanation: "Heart pumps blood throughout the body." },
        { id: "gk8_q11", text: "Which ocean is the largest in the world?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"], correctAnswer: 0, explanation: "Pacific Ocean is the largest ocean." },
        { id: "gk8_q12", text: "Who was the first woman Prime Minister of India?", options: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil"], correctAnswer: 0, explanation: "Indira Gandhi was the first woman Prime Minister." },
        { id: "gk8_q13", text: "What is the SI unit of force?", options: ["Newton", "Joule", "Watt"], correctAnswer: 0, explanation: "Force is measured in Newtons." },
        { id: "gk8_q14", text: "Which instrument measures atmospheric pressure?", options: ["Barometer", "Thermometer", "Hygrometer"], correctAnswer: 0, explanation: "Barometer measures atmospheric pressure." },
        { id: "gk8_q15", text: "Where is the ‘Statue of Liberty’ located?", options: ["New York", "Washington, D.C.", "Los Angeles"], correctAnswer: 0, explanation: "The Statue of Liberty is in New York." },
        { id: "gk8_q16", text: "Which country hosted the 2020 Summer Olympics?", options: ["Japan", "China", "USA"], correctAnswer: 0, explanation: "Tokyo, Japan hosted the 2020 Olympics (held in 2021)." },
        { id: "gk8_q17", text: "What is the fastest land animal?", options: ["Cheetah", "Lion", "Tiger"], correctAnswer: 0, explanation: "Cheetah is the fastest land animal." },
        { id: "gk8_q18", text: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth"], correctAnswer: 0, explanation: "Mercury is nearest to the Sun." },
        { id: "gk8_q19", text: "How many players are on a soccer team on the field?", options: ["11", "9", "7"], correctAnswer: 0, explanation: "Soccer teams have 11 players on the field." },
        { id: "gk8_q20", text: "Who wrote the book 'Harry Potter' series?", options: ["J.K. Rowling", "Roald Dahl", "C.S. Lewis"], correctAnswer: 0, explanation: "J.K. Rowling authored the 'Harry Potter' series." }
      ]
    },
    class9: {
      id: "gk-class9",
      subject: "General Knowledge",
      level: "highschool",
      pointsPerQuestion: 15,
      questions: [
        { id: "gk9_q1", text: "Who is known as the Missile Man of India?", options: ["Dr. A.P.J. Abdul Kalam", "Isaac Newton", "Albert Einstein"], correctAnswer: 0, explanation: "Dr. A.P.J. Abdul Kalam is called the Missile Man of India." },
        { id: "gk9_q2", text: "What is the national bird of India?", options: ["Peacock", "Sparrow", "Eagle"], correctAnswer: 0, explanation: "The Peacock is the national bird of India." },
        { id: "gk9_q3", text: "Who wrote the national anthem of India?", options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Mahatma Gandhi"], correctAnswer: 0, explanation: "Rabindranath Tagore wrote 'Jana Gana Mana'." },
        { id: "gk9_q4", text: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter"], correctAnswer: 0, explanation: "Mars is known as the Red Planet." },
        { id: "gk9_q5", text: "What is the capital of India?", options: ["New Delhi", "Mumbai", "Chennai"], correctAnswer: 0, explanation: "New Delhi is the capital of India." },
        { id: "gk9_q6", text: "Name the first satellite launched by India.", options: ["Aryabhata", "INSAT", "Chandrayaan"], correctAnswer: 0, explanation: "Aryabhata was the first Indian satellite." },
        { id: "gk9_q7", text: "What is the national animal of India?", options: ["Bengal Tiger", "Elephant", "Lion"], correctAnswer: 0, explanation: "The Bengal Tiger is the national animal." },
        { id: "gk9_q8", text: "What is the motto of the Indian Navy?", options: ["Service Before Self", "Sam No Varunah", "Victory and Honour"], correctAnswer: 1, explanation: "'Sam No Varunah' means 'May the Lord of Water be auspicious unto us'." },
        { id: "gk9_q9", text: "Who is the founder of the Indian Space Research Organisation (ISRO)?", options: ["Dr. Vikram Sarabhai", "Dr. A.P.J. Abdul Kalam", "Satish Dhawan"], correctAnswer: 0, explanation: "Dr. Vikram Sarabhai is the founder of ISRO." },
        { id: "gk9_q10", text: "Name the highest civilian award in India.", options: ["Bharat Ratna", "Padma Shri", "Dadasaheb Phalke Award"], correctAnswer: 0, explanation: "Bharat Ratna is the highest civilian award." },
        { id: "gk9_q11", text: "Who was the first Prime Minister of India?", options: ["Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi"], correctAnswer: 0, explanation: "Jawaharlal Nehru was the first Prime Minister." },
        { id: "gk9_q12", text: "When did India gain independence?", options: ["15 August 1947", "26 January 1950", "2 October 1947"], correctAnswer: 0, explanation: "India gained independence on 15th August 1947." },
        { id: "gk9_q13", text: "Who led the Dandi March?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose"], correctAnswer: 0, explanation: "Mahatma Gandhi led the Dandi March in 1930." },
        { id: "gk9_q14", text: "What is the ancient name of Patna?", options: ["Pataliputra", "Mathura", "Mohenjo-daro"], correctAnswer: 0, explanation: "Patna was ancient Pataliputra." },
        { id: "gk9_q15", text: "Who was the founder of the Maurya Empire?", options: ["Chandragupta Maurya", "Ashoka", "Alexander"], correctAnswer: 0, explanation: "Chandragupta established the Maurya Empire." },
        { id: "gk9_q16", text: "Name the battle that started Mughal rule in India.", options: ["First Battle of Panipat", "Battle of Plassey", "Battle of Haldighati"], correctAnswer: 0, explanation: "First Battle of Panipat in 1526 started Mughal rule." },
        { id: "gk9_q17", text: "Who was the first President of India?", options: ["Dr. Rajendra Prasad", "Dr. Zakir Hussain", "Dr. S. Radhakrishnan"], correctAnswer: 0, explanation: "Dr. Rajendra Prasad was the first President." },
        { id: "gk9_q18", text: "Which movement was launched in 1942 by Gandhi?", options: ["Quit India Movement", "Non-Cooperation Movement", "Swadeshi Movement"], correctAnswer: 0, explanation: "The Quit India Movement started in 1942." },
        { id: "gk9_q19", text: "Who was called the 'Iron Man of India'?", options: ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Bal Gangadhar Tilak"], correctAnswer: 0, explanation: "Sardar Patel was called the Iron Man of India." },
        { id: "gk9_q20", text: "Name the famous treaty that ended the First Anglo-Mysore War.", options: ["Treaty of Madras", "Treaty of Paris", "Treaty of Versailles"], correctAnswer: 0, explanation: "The Treaty of Madras ended the First Anglo-Mysore War." }
      ]
    },
    class10: {
      id: "gk-class10",
      subject: "General Knowledge",
      level: "highschool",
      pointsPerQuestion: 16,
      questions: [
        { id: "gk10_q1", text: "Who is the first female Prime Minister of the UK?", options: ["Margaret Thatcher", "Indira Gandhi", "Angela Merkel"], correctAnswer: 0, explanation: "Margaret Thatcher was the first female UK Prime Minister." },
        { id: "gk10_q2", text: "What is the currency of Japan?", options: ["Yen", "Dollar", "Euro"], correctAnswer: 0, explanation: "The currency of Japan is Yen." },
        { id: "gk10_q3", text: "What element does 'O' represent in the periodic table?", options: ["Oxygen", "Gold", "Osmium"], correctAnswer: 0, explanation: "'O' is the chemical symbol for Oxygen." },
        { id: "gk10_q4", text: "Who wrote the Indian National Anthem?", options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Subhash Chandra Bose"], correctAnswer: 0, explanation: "Rabindranath Tagore wrote 'Jana Gana Mana'." },
        { id: "gk10_q5", text: "In which year did World War II end?", options: ["1945", "1939", "1918"], correctAnswer: 0, explanation: "World War II ended in 1945." },
        { id: "gk10_q6", text: "Which is the largest organ in the human body?", options: ["Skin", "Liver", "Heart"], correctAnswer: 0, explanation: "Skin is the largest organ." },
        { id: "gk10_q7", text: "What is the boiling point of water?", options: ["100°C", "0°C", "50°C"], correctAnswer: 0, explanation: "Water boils at 100 degrees Celsius." },
        { id: "gk10_q8", text: "Who discovered penicillin?", options: ["Alexander Fleming", "Marie Curie", "Isaac Newton"], correctAnswer: 0, explanation: "Alexander Fleming discovered penicillin." },
        { id: "gk10_q9", text: "Which is the smallest continent?", options: ["Australia", "Europe", "Antarctica"], correctAnswer: 0, explanation: "Australia is the smallest continent." },
        { id: "gk10_q10", text: "Where is the Taj Mahal located?", options: ["Agra", "Delhi", "Mumbai"], correctAnswer: 0, explanation: "Taj Mahal is in Agra." },
        { id: "gk10_q11", text: "Which planet is the hottest in the solar system?", options: ["Venus", "Mercury", "Mars"], correctAnswer: 0, explanation: "Venus has the highest surface temperature." },
        { id: "gk10_q12", text: "Who is the author of the Harry Potter series?", options: ["J.K. Rowling", "J.R.R. Tolkien", "Stephen King"], correctAnswer: 0, explanation: "J.K. Rowling wrote Harry Potter." },
        { id: "gk10_q13", text: "Who was the first President of India?", options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Dr. Zakir Hussain"], correctAnswer: 0, explanation: "Dr. Rajendra Prasad was the first President." },
        { id: "gk10_q14", text: "Which ocean is the deepest?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"], correctAnswer: 0, explanation: "Pacific Ocean is the deepest ocean." },
        { id: "gk10_q15", text: "What is the capital of Australia?", options: ["Canberra", "Sydney", "Melbourne"], correctAnswer: 0, explanation: "Canberra is the capital city of Australia." },
        { id: "gk10_q16", text: "Which gas is essential for breathing?", options: ["Oxygen", "Nitrogen", "Carbon dioxide"], correctAnswer: 0, explanation: "Oxygen is essential for respiration." },
        { id: "gk10_q17", text: "Which country is known as the 'Land of the Rising Sun'?", options: ["Japan", "China", "South Korea"], correctAnswer: 0, explanation: "Japan is called the Land of the Rising Sun." },
        { id: "gk10_q18", text: "Who was known as the 'Father of the Nation' in India?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose"], correctAnswer: 0, explanation: "Mahatma Gandhi is the Father of the Nation." },
        { id: "gk10_q19", text: "What is the process by which plants make their food?", options: ["Photosynthesis", "Respiration", "Transpiration"], correctAnswer: 0, explanation: "Photosynthesis is how plants prepare food." },
        { id: "gk10_q20", text: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla"], correctAnswer: 0, explanation: "Bell invented the telephone." }
      ]
    },
    class11: {
      id: "gk-class11",
      subject: "General Knowledge",
      level: "seniorhigh",
      pointsPerQuestion: 18,
      questions: [
        { id: "gk11_q1", text: "Who was the first woman Supreme Court judge of India?", options: ["Justice Fathima Beevi", "Justice Indira Banerjee", "Justice Ruma Pal"], correctAnswer: 0, explanation: "Justice Fathima Beevi was the first woman Supreme Court judge of India." },
        { id: "gk11_q2", text: "Which country gifted the Statue of Liberty to the USA?", options: ["France", "England", "Spain"], correctAnswer: 0, explanation: "France gifted the Statue of Liberty to the United States." },
        { id: "gk11_q3", text: "What is the name of the largest desert in the world?", options: ["Antarctic Desert", "Sahara Desert", "Gobi Desert"], correctAnswer: 0, explanation: "The Antarctic desert is the largest desert by area." },
        { id: "gk11_q4", text: "Who is the author of the book 'Wings of Fire'?", options: ["Dr. A.P.J. Abdul Kalam", "Kiran Bedi", "APJ Abdul Kalam"], correctAnswer: 0, explanation: "'Wings of Fire' is the autobiography of Dr. A.P.J. Abdul Kalam." },
        { id: "gk11_q5", text: "Which element has the chemical symbol 'Fe'?", options: ["Iron", "Lead", "Fluorine"], correctAnswer: 0, explanation: "'Fe' is the symbol for Iron." },
        { id: "gk11_q6", text: "Which is the longest river in India?", options: ["Ganges", "Yamuna", "Godavari"], correctAnswer: 0, explanation: "The Ganges is the longest river in India." },
        { id: "gk11_q7", text: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla"], correctAnswer: 0, explanation: "Alexander Graham Bell invented the telephone." },
        { id: "gk11_q8", text: "Which is the brightest planet in the night sky?", options: ["Venus", "Jupiter", "Mars"], correctAnswer: 0, explanation: "Venus is the brightest planet seen from Earth." },
        { id: "gk11_q9", text: "What is the capital city of Australia?", options: ["Canberra", "Sydney", "Melbourne"], correctAnswer: 0, explanation: "Canberra is the capital of Australia." },
        { id: "gk11_q10", text: "Who is the current Secretary-General of the United Nations?", options: ["Antonio Guterres", "Ban Ki-moon", "Kofi Annan"], correctAnswer: 0, explanation: "Antonio Guterres is the present Secretary-General." },
        { id: "gk11_q11", text: "Which is the largest ocean in the world?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"], correctAnswer: 0, explanation: "The Pacific Ocean is the biggest ocean." },
        { id: "gk11_q12", text: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Mother Teresa", "Rosalind Franklin"], correctAnswer: 0, explanation: "Marie Curie was the first woman Nobel laureate." },
        { id: "gk11_q13", text: "Which country is known as the Land of the Rising Sun?", options: ["Japan", "China", "Thailand"], correctAnswer: 0, explanation: "Japan is called the Land of the Rising Sun." },
        { id: "gk11_q14", text: "What is the boiling point of water at sea level?", options: ["100°C", "90°C", "80°C"], correctAnswer: 0, explanation: "Water boils at 100°C at sea level." },
        { id: "gk11_q15", text: "Who discovered the Theory of Relativity?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei"], correctAnswer: 0, explanation: "Albert Einstein proposed the Theory of Relativity." },
        { id: "gk11_q16", text: "Which organ in the human body produces insulin?", options: ["Pancreas", "Liver", "Kidney"], correctAnswer: 0, explanation: "The pancreas produces insulin." },
        { id: "gk11_q17", text: "Which is the smallest planet in our solar system?", options: ["Mercury", "Mars", "Venus"], correctAnswer: 0, explanation: "Mercury is the smallest planet." },
        { id: "gk11_q18", text: "Who wrote the play 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen"], correctAnswer: 0, explanation: "Shakespeare wrote 'Romeo and Juliet'." },
        { id: "gk11_q19", text: "Which gas makes up the majority of Earth's atmosphere?", options: ["Nitrogen", "Oxygen", "Carbon dioxide"], correctAnswer: 0, explanation: "Nitrogen makes up about 78% of Earth's atmosphere." },
        { id: "gk11_q20", text: "What is the SI unit of electric current?", options: ["Ampere", "Volt", "Ohm"], correctAnswer: 0, explanation: "Electric current is measured in amperes." }
      ]
    },
    class12: {
      id: "gk-class12",
      subject: "General Knowledge",
      level: "seniorhigh",
      pointsPerQuestion: 20,
      questions: [
        { id: "gk12_q1", text: "Who is the current Secretary-General of the United Nations?", options: ["Antonio Guterres", "Ban Ki-moon", "Kofi Annan"], correctAnswer: 0, explanation: "Antonio Guterres has been the UN Secretary-General since 2017." },
        { id: "gk12_q2", text: "Which country was the first to grant women the right to vote?", options: ["New Zealand", "USA", "UK"], correctAnswer: 0, explanation: "New Zealand was the first country to grant women suffrage." },
        { id: "gk12_q3", text: "What is the capital of Canada?", options: ["Ottawa", "Toronto", "Vancouver"], correctAnswer: 0, explanation: "Ottawa is the capital city of Canada." },
        { id: "gk12_q4", text: "Which element has the chemical symbol 'Ag'?", options: ["Silver", "Gold", "Argon"], correctAnswer: 0, explanation: "Ag is the chemical symbol for Silver." },
        { id: "gk12_q5", text: "Who wrote the ‘Play The Merchant of Venice’?", options: ["William Shakespeare", "Charles Dickens", "Oscar Wilde"], correctAnswer: 0, explanation: "Shakespeare wrote ‘The Merchant of Venice’." },
        { id: "gk12_q6", text: "What is the largest desert in the world?", options: ["Antarctic Desert", "Sahara Desert", "Gobi Desert"], correctAnswer: 0, explanation: "The Antarctic Desert is the largest desert by area." },
        { id: "gk12_q7", text: "Who was the first woman Prime Minister of Pakistan?", options: ["Benazir Bhutto", "Indira Gandhi", "Sheikh Hasina"], correctAnswer: 0, explanation: "Benazir Bhutto was the first female PM of Pakistan." },
        { id: "gk12_q8", text: "Which is the longest river in the world?", options: ["Nile", "Amazon", "Yangtze"], correctAnswer: 0, explanation: "The Nile is considered the longest river." },
        { id: "gk12_q9", text: "What is the speed of light?", options: ["3 × 10⁸ m/s", "1.5 × 10⁸ m/s", "3 × 10⁶ m/s"], correctAnswer: 0, explanation: "Speed of light in vacuum is approximately 3 × 10⁸ meters per second." },
        { id: "gk12_q10", text: "Who discovered the theory of relativity?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei"], correctAnswer: 0, explanation: "Einstein proposed the theory of relativity." },
        { id: "gk12_q11", text: "What is the formula for water?", options: ["H₂O", "CO₂", "NaCl"], correctAnswer: 0, explanation: "Water's chemical formula is H₂O." },
        { id: "gk12_q12", text: "Which country hosted the 2020 Summer Olympics?", options: ["Japan", "China", "Brazil"], correctAnswer: 0, explanation: "Tokyo, Japan hosted the 2020 Olympics (in 2021 due to pandemic)." },
        { id: "gk12_q13", text: "Which material is used in making pencil leads?", options: ["Graphite", "Charcoal", "Coal"], correctAnswer: 0, explanation: "Pencil leads are made of graphite." },
        { id: "gk12_q14", text: "Which organ of the human body produces insulin?", options: ["Pancreas", "Liver", "Kidneys"], correctAnswer: 0, explanation: "Pancreas secretes insulin to regulate blood sugar." },
        { id: "gk12_q15", text: "Who is called the father of modern physics?", options: ["Albert Einstein", "Isaac Newton", "Niels Bohr"], correctAnswer: 0, explanation: "Einstein is often called the father of modern physics." },
        { id: "gk12_q16", text: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dinucleic Acid", "Deoxynucleic Acid"], correctAnswer: 0, explanation: "DNA stands for Deoxyribonucleic Acid." },
        { id: "gk12_q17", text: "What is the national emblem of India?", options: ["Lion Capital of Ashoka", "Peacock", "Tiger"], correctAnswer: 0, explanation: "The Lion Capital of Ashoka is the national emblem." },
        { id: "gk12_q18", text: "Which is the largest gland in the human body?", options: ["Liver", "Pancreas", "Thyroid"], correctAnswer: 0, explanation: "Liver is the largest gland in the body." },
        { id: "gk12_q19", text: "Who invented the radio?", options: ["Guglielmo Marconi", "Alexander Graham Bell", "Nikola Tesla"], correctAnswer: 0, explanation: "Marconi is credited with inventing the radio." },
        { id: "gk12_q20", text: "What is the study of the Earth's atmosphere called?", options: ["Meteorology", "Geology", "Oceanography"], correctAnswer: 0, explanation: "Meteorology studies the atmosphere." }
      ]
    }
  }
};

/**
 * Gets the quiz data for a given subject and level.
 * @param {string} subject - The subject of the quiz (e.g., 'math').
 * @param {string} level - The difficulty level (e.g., 'beginner').
 * @returns {object|null} The quiz object or null if not found.
 */
function getQuizForSubject(subject, level) {
  // This function maps the 'level' from your HTML to a specific 'class' in the data.
  // You can expand this to handle different levels like 'intermediate' -> 'class8', etc.
  let chosenClass;
  if (level === 'beginner') {
    chosenClass = 'class6';
  } else if (level === 'elementary') {
    chosenClass = 'class7';
  } else if (level === 'intermediate') {
    chosenClass = 'class8';
  } else if (level === 'highschool') {
    chosenClass = 'class9'; // or class10
  } else if (level === 'seniorhigh') {
    chosenClass = 'class11'; // or class12
  } else {
    // Default to class6 if level is something else or not defined
    chosenClass = 'class6';
  }

  if (mockQuizzes[subject] && mockQuizzes[subject][chosenClass]) {
    // Return a deep copy to prevent the original data from being changed during the quiz
    return JSON.parse(JSON.stringify(mockQuizzes[subject][chosenClass]));
  }

  // Return null if no matching quiz is found
  return null;
}