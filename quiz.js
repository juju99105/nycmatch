const candidates = {
  "Adams": 0, "Blake": 0, "Cuomo": 0, "Lander": 0, "Myrie": 0,
  "Stringer": 0, "Tilson": 0, "Mamdani": 0, "Ramos": 0
};

const questionStats = {
  "answered": 0,
  "skipped": 0
};

const candidateFullNames = {
  "Adams": "Adrienne Adams",
  "Blake": "Michael Blake",
  "Cuomo": "Andrew Cuomo",
  "Lander": "Brad Lander",
  "Myrie": "Zellnor Myrie",
  "Stringer": "Scott Stringer",
  "Tilson": "Whitney Tilson",
  "Mamdani": "Zohran Mamdani",
  "Ramos": "Jessica Ramos"
};

const candidateWebsite = {
  "Adams": "https://adrienneforthepeople.com/",
  "Blake": "https://blakefornyc.com/",
  "Cuomo": "https://www.andrewcuomo.com/",
  "Lander": "https://www.landerfornyc.com/",
  "Myrie": "https://www.zellnor.nyc/",
  "Stringer": "https://scottstringernyc.com/",
  "Tilson": "https://www.whitneyformayor.com/",
  "Mamdani": "https://www.zohranfornyc.com/",
  "Ramos": "https://www.ramosfornyc.com/"
};

const quiz = [
    {
      question: "How can NYC government become more transparent?",
      stance: "(2 candidates have not declared a stance on this issue.)",
      options: [
        { text: "1. Partner with nonprofits to track outcomes and tie funding to results", candidates: ["Adams"] },
        { text: "2. Withhold NYC taxes dollar-for-dollar if federal funding is cut", candidates: ["Blake"] },
        { text: "3. Publish monthly subway safety report cards with community oversight", candidates: ["Cuomo"] },
        { text: "4. Launch transparency dashboards for homelessness and staffing + Reform public construction project management", candidates: ["Lander"] },
        { text: "5. Challenge federal overreach + Quarterly reports on flood mitigation", candidates: ["Myrie"] },
        { text: "6. Ban pay-to-play lobbying + Require detailed budget transparency ", candidates: ["Stringer"] },
        { text: "7. Eradicate systemic corruption in shelter operations", candidates: ["Tilson"] },
        { text: "Skip this Question (No Impact on score)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC improve public safety?",
      stance: "(4 candidates have not declared a stance on this issue.)",
      options: [
        { text: "1. Focused on stopping drug trafficking and helping people recover rather than traditional policing", candidates: ["Blake"] },
        { text: "2. Hire 5,000+ NYPD Officers + Pinpoint high-crime locations and repeat offenders", candidates: ["Cuomo", "Tilson"] },
        { text: "3. Reform NYPD to focus on gun violence/hate crimes", candidates: ["Lander"] },
        { text: "4. Hire 3,000 officers + Deploy one on every subway train", candidates: ["Stringer"] },
        { text: "Skip this Question (No Impact on score)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC tackle its affordable housing crisis?",
      stance: "(2 candidates have not declared a stance on this issue.)",
      options: [
        { text: "1. Ban credit checks + Build 600,000 affordable homes for middle-income families + Reserve units for veterans/graduates/displaced natives", candidates: ["Blake"] },
        { text: "2. Leverage public land for mixed-income housing + Improve NYC Housing Authority", candidates: ["Cuomo"] },
        { text: "3. Preserve 35K units + Assist homeowners to rent out extra rooms long-term + Protect tenants from harassment", candidates: ["Lander"] },
        { text: "4. Build 200,000 rent-stabilized units + Freeze rents + Take over bad landlords + Triple fines for violations + Fast-track 100% affordable developments + Double funds for NYC Housing Authority", candidates: ["Mamdani"] },
        { text: "5. Legalize basement apartments + Convert empty offices to housing + $50M down payment help for first-time buyers + Protect public housing", candidates: ["Ramos"] },
        { text: "6. $500M loan fund for minority developers + Secure $40B for NYC Housing Authority + Unlock public land", candidates: ["Stringer"] },
        { text: "7. Support private investment + Reform regulations to unlock large-scale housing development + Streamline zoning and permitting.", candidates: ["Tilson"] },
        { text: "Skip this Question (No Impact on score)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "What's the best way to address homelessness?",
      stance: "(4 candidates have not declared a stance on this issue.)",
      options: [
        { text: "1. Provide Guaranteed Basic Income to end homelessness", candidates: ["Adams"] },
        { text: "2. Require treatment for people who can't care for themselves + Add psychiatric beds", candidates: ["Cuomo"] },
        { text: "3. \"Housing First\" for 2,000 mentally ill homeless + Require treatment for people who can't care for themselves + Add secure therapeutic beds", candidates: ["Lander"] },
        { text: "4. Integrate mental health professionals into subways", candidates: ["Stringer"] },
        { text: "5. Repeal \"right to sleep outside\" + Expand shelters and drop-in centers + Reopen long-term care facilities", candidates: ["Tilson"] },
        { text: "Skip this Question (No Impact on score)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC improve healthcare access and outcomes?",
      stance: "(3 candidates have not declared a stance on this issue.)",
      options: [
        { text: "1. Prenatal support for homeless mothers", candidates: ["Adams"] },
        { text: "2. Combat opioids with harm reduction + Audit $150M funding + Track overdose response", candidates: ["Blake"] },
        { text: "3. Expand public hospital services + Strengthen safety-net hospitals", candidates: ["Cuomo"] },
        { text: "4. Protect reproductive rights + Reduce medical debt + Protect retiree healthcare benefits", candidates: ["Lander"] },
        { text: "5. \"Baby baskets\" for newborns($20M/year)  + Postpartum resources", candidates: ["Mamdani"] },
        { text: "6. Fund doula coverage + Open Black Maternal Health Centers + Protect providers under Reproductive Health Act", candidates: ["Myrie"] },
        { text: "Skip this Question (No Impact on score)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC grow its economy?",
      stance: " ",
      options: [
        { text: "1. Inject cash directly to low-income households", candidates: ["Adams"] },
        { text: "2. Implement guaranteed income pilot + Create municipal hiring surge in underserved neighborhoods + $3.3B Support fund for minority and women-owned businesses", candidates: ["Blake"] },
        { text: "3. Convert offices to housing + expand Metro-North in Bronx, Grow AI/tech + Strengthen minority and women-owned businesses", candidates: ["Cuomo"] },
        { text: "4. $30/hour minimum wage by 2030 + Create city-run grocery stores to provide wholesale prices", candidates: ["Mamdani"] },
        { text: "5. No-interest loans for Black businesses + Expand green job opportunities", candidates: ["Myrie"] },
        { text: "6. Focus outer-borough growth through child care infrastructure + Support local small businesses", candidates: ["Ramos"] },
        { text: "7. Support small business through streamlined permits + Expand minority and women-owned businesses to 50% + Create green jobs through renewable energy investments", candidates: ["Stringer"] },
        { text: "8. Revitalize the economy by supporting small businesses + Streamline permit process + Create jobs with higher wages", candidates: ["Tilson"] },
        { text: "9. Support small businesses + Guarantee predictable work hours + Fair pay for gig workers + Expand freelancer protections", candidates: ["Lander"] },
        { text: "Skip this Question (No Impact on score)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should New York City improve its transit system?",
      stance: "(2 candidates have not declared a stance on this issue.)",
      options: [
        { text: "1. Hire 500 MTA police + Install high-security turnstiles + Implement proof-of-payment turnstiles", candidates: ["Cuomo"] },
        { text: "2. Make all city buses permanently fare-free + Expand bus priority lanes and loading zones", candidates: ["Mamdani"] },
        { text: "3. Implement congestion pricing + Improve subway/bus accessibility + Expand bike lanes", candidates: ["Lander"] },
        { text: "4. Express bus lanes + Audit MTA construction costs", candidates: ["Myrie"] },
        { text: "5. Prioritize accessibility improvements and service reliability", candidates: ["Ramos"] },
        { text: "6. Increase subway safety with dedicated officers + Improve bus reliability + Expand bike lane network ", candidates: ["Stringer"] },
        { text: "7. Increase police presence and enforcement in subways to confront crime and felony assaults ", candidates: ["Tilson"] },
        { text: "Skip this Question  (No Impact on score)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC improve its public schools?",
      stance: "(2 candidates have not declared a stance on this issue.)",
      options: [
        { text: "1. Use private funding to expand proven programs ", candidates: ["Adams"] },
        { text: "2. Auto-admit top 5% to elite schools + expand CUNY aid ", candidates: ["Blake"] },
        { text: "3. Reduce class sizes + Strengthen career/technical education ", candidates: ["Cuomo"] },
        { text: "4. Restore school budgets + Expand career/technical education + Improve special education services  ", candidates: ["Lander"] },
        { text: "5. Free afterschool programs until 6 PM ", candidates: ["Myrie"] },
        { text: "6. Extend school days to 4:30 PM", candidates: ["Stringer"] },
        { text: "7. Focus on basic literacy/math ", candidates: ["Tilson"] },
        { text: "Skip this Question  (No Impact on score)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC address child care affordability?",
      stance: "(2 candidates have not declared a stance on this issue.)",
      options: [
        { text: "1. Universal childcare regardless of income + Universal Pre-K +$4.8M employer partnership pilot ", candidates: ["Blake"] },
        { text: "2. Expand 3-K/after-school programs ", candidates: ["Cuomo"] },
        { text: "3. Restore $170M Pre-K/3K funding + Simplify enrollment + Create universal child care system by streamlining applications + Expanding subsidies to 300% poverty level ", candidates: ["Ramos"] },
        { text: "4. Free childcare for ages 6 weeks to 5 years + Equal pay for workers ", candidates: ["Mamdani"] },
        { text: "5. Reverse cuts in universal 3-K/pre-K + $400M to repay delayed provider payments ", candidates: ["Myrie"] },
        { text: "6. Expand Pre-K/3-K + Enforce paid family leave  ", candidates: ["Lander"] },
        { text: "7. Share childcare costs between the city, employers, and families + Expand pre-K access ", candidates: ["Stringer"] },
        { text: "Skip this Question  (No Impact on score)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC handle immigration and global affairs?",
      stance: "(4 candidates have not declared a stance on this issue.)",
      options: [
        { text: "1. Ban ICE from schools/hospitals + Provide childcare to undocumented families", candidates: ["Blake"] },
        { text: "2. Issue local work permits for asylum seekers + Ban ICE from schools/hospitals", candidates: ["Myrie"] },
        { text: "3. Provides childcare to undocumented families + Reform asylum-seeker contracts + Expand legal/work services  ", candidates: ["Lander"] },
        { text: "4. Protect undocumented families + Improve multilingual city services", candidates: ["Ramos"] },
        { text: "5. Support foreign aid and humanitarian work, including fieldwork in Ukraine. ", candidates: ["Tilson"] },
        { text: "Skip this Question  (No Impact on score)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should New York City address climate change and sustainability?",
      stance: "(5 candidates have not declared a stance on this issue.)",
      options: [
        { text: "1. Reform scaffolding laws + Boost composting + Streamline outdoor dining permits", candidates: ["Cuomo"] },
        { text: "2. Accelerate renewable energy (solar, wind, EVs) + Cut 80% building emissions by 2050 + Launch citywide solar program", candidates: ["Lander"] },
        { text: "3. Sue oil/gas companies + Plant 1M trees + Build flood-resistant streets", candidates: ["Myrie"] },
        { text: "4. Divest 4B from fossil fuels + Invest 6B in renewables + Publish NYPD spending via Checkbook NYC + Enforce color-coded recycling/composting ", candidates: ["Stringer"] },
        { text: "Skip this Question  (No Impact on score)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should New York City protect workers and improve job quality?",
      stance: "(2 candidates have not declared a stance on this issue.)",
      options: [
        { text: "1. Provide basic income to reduce wage exploitation", candidates: ["Adams"] },
        { text: "2. Mandate 3-day payment for nonprofits/freelancers + Create educator housing/retirement communities", candidates: ["Blake"] },
        { text: "3. Expand apprenticeships in healthcare/tech + Improve teacher working conditions + wage supplements for at-risk workers", candidates: ["Cuomo"] },
        { text: "4. Enforce wage laws + Support unionization efforts + Protect worker benefits", candidates: ["Lander"] },
        { text: "5. Require union labor on city-subsidized projects ", candidates: ["Mamdani"] },
        { text: "6. Seal criminal records for job seekers + Support high-growth sector unions(construction, greenenergy) ", candidates: ["Myrie"] },
        { text: "7. Continue advocacy for worker protections (passed $2.1B excluded workers fund) + Push for child care worker wage parity + Expand gig worker access to benefits ", candidates: ["Ramos"] },
        { text: "Skip this Question (No Impact on score)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC address racial inequality?",
      stance: "(6 candidates have not declared a stance on this issue.)",
      options: [
        { text: "1. Prioritize Black/Latinx communities + Address systemic barriers for foster youth and families in shelters. ", candidates: ["Adams"] },
        { text: "2. Proportional city contracts by borough demographics + Require schools to partner with mentoring programs for young men of color + Expand Black history curriculum. ", candidates: ["Blake"] },
        { text: "3. Address school segregation + Reduce discriminatory policing + Close racial wealth gap  ", candidates: ["Lander"] },
        { text: "Skip this Question (No Impact on score)", candidates: [], isSkip: true }
      ]
    }
];

// Initialize variables
let currentQuestionIndex = 0;
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results');
const startQuizButton = document.getElementById('start-quiz');
const quizPageContainer = document.querySelector('.container-quiz-page');
let userAnswers = Array(quiz.length).fill(null);

// Add event listener to start quiz button
startQuizButton.addEventListener('click', function() {
  // Hide the quiz intro container
  quizPageContainer.style.display = 'none';
  
  // Show the quiz container
  quizContainer.style.display = 'block';
  
  // Show the first question
  showQuestion(currentQuestionIndex);
});

function showQuestion(index) {
  const q = quiz[index];
  
  // // Create question container
  // let questionHTML = `
  //   <div class="question">
  //     <h3>Question ${index + 1}/${quiz.length}: ${q.question}</h3>
  //   </div>
  // `;

  // Create question container but number of question seperate of question div
  let questionHTML = `
  <div class="question-number">
    <h4>Question ${index + 1}/${quiz.length}</h4>
  </div>
  <div class="question">
    <h3>${q.question}</h3>
  </div>
  <div class="stance">
    <h4>${q.stance}</h4>
  </div>
`;
  
  // Create options
  q.options.forEach((opt, i) => {
    const selectedClass = userAnswers[index]?.text === opt.text ? 'selected' : '';
    questionHTML += `<button class="${selectedClass}" data-index="${i}">${opt.text}</button>`;
  });
  
  // Add navigation buttons
  questionHTML += `<div class="navigation-buttons">`;
  
  if (index > 0) {
    questionHTML += `<button class="back">Back</button>`;
  } else {
    questionHTML += `<button class="back" style="visibility: hidden">Back</button>`;
  }
  
  questionHTML += `<button class="next" style="visibility: hidden">Next</button>`;
  questionHTML += `</div>`;
  
  // Set the HTML
  quizContainer.innerHTML = questionHTML;
  
  // Add event listeners to option buttons
  const optionButtons = quizContainer.querySelectorAll('button:not(.back):not(.next)');
  optionButtons.forEach((button, i) => {
    button.addEventListener('click', function() {
      // Remove selected class from all buttons
      optionButtons.forEach(btn => btn.classList.remove('selected'));
      
      // Add selected class to clicked button
      button.classList.add('selected');
      
      // Show next button
      const nextButton = quizContainer.querySelector('.next');
      nextButton.style.visibility = 'visible';
      
      // Store the selected option temporarily
      const selectedOptionIndex = parseInt(button.dataset.index);
      const selectedOption = q.options[selectedOptionIndex];
      
      // Handle answer when next is clicked instead of immediately
      nextButton.addEventListener('click', function() {
        handleAnswer(selectedOption);
      });
    });
  });
  
  // Add event listener to back button
  const backButton = quizContainer.querySelector('.back');
  if (backButton && index > 0) {
    backButton.addEventListener('click', function() {
      goBack();
    });
  }
}

function handleAnswer(selectedOption) {
  const previousAnswer = userAnswers[currentQuestionIndex];
  
  // Remove previous answer's impact
  if (previousAnswer) {
    // If it was a skip, decrement skipped count
    if (previousAnswer.isSkip) {
      questionStats.skipped--;
    } else {
      questionStats.answered--;
      // Remove previous candidate points
      previousAnswer.candidates.forEach(name => {
        if (candidates[name] !== undefined) candidates[name]--;
      });
    }
  }

  // Record this answer
  userAnswers[currentQuestionIndex] = selectedOption;
  
  // Update stats based on new answer
  if (selectedOption.isSkip) {
    questionStats.skipped++;
  } else {
    questionStats.answered++;
    // Add new candidate points
    selectedOption.candidates.forEach(name => {
      if (candidates[name] !== undefined) candidates[name]++;
    });
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quiz.length) {
    showQuestion(currentQuestionIndex);
  } else {
    showResults();
  }
}

function goBack() {
  currentQuestionIndex--;
  showQuestion(currentQuestionIndex);
}

// function showResults() {
//   // Hide quiz container
//   quizContainer.style.display = 'none';
  
//   // Show results container
//   resultsContainer.style.display = 'block';

//   // Filter out candidates with zero points
//   const nonZeroResults = Object.entries(candidates)
//     .filter(([_, score]) => score > 0)
//     .sort((a, b) => b[1] - a[1]);

//   let resultHTML = '<div class="results-title"><h2>Matching Results</h2></div><div><h4>In primary and special elections for city offices, you can now rank up to five candidates in order of preference instead of choosing just one.</h4></div><div class="nyc-votes"><h3>Visit NYC Votes</h3></div>';
  
//   if (nonZeroResults.length === 0) {
//     resultHTML += '<p>No candidates matched your preferences. Try answering more questions.</p>';
//   } else {
//     // Show top 5 candidates with non-zero scores
//     const topCandidates = nonZeroResults.slice(0, 5);
    
//     // Create the list of top candidates
//     topCandidates.forEach(([name, score], i) => {
//       resultHTML += `
//         <div class="candidate-result">
//           <span class="candidate-rank">${i + 1}.</span>
//           <span class="candidate-name">${name}</span>
//           <span class="candidate-score">- ${score} Point${score > 1 ? 's' : ''}</span>
//         </div>
//       `;
//     });
    
//     //display questions skipped
//   resultHTML += `<p>Questions skipped: ${questionStats.skipped}</p>`;

//   function showResults() {
//   // Hide quiz container
//   quizContainer.style.display = 'none';
  
//   // Show results container
//   resultsContainer.style.display = 'block';

//   // Filter out candidates with zero points
//   const nonZeroResults = Object.entries(candidates)
//     .filter(([_, score]) => score > 0)
//     .sort((a, b) => b[1] - a[1]);

//   let resultHTML = '<h2>Your Top Candidates</h2>';
  
//   if (nonZeroResults.length === 0) {
//     resultHTML += '<p>No candidates matched your preferences. Try answering more questions.</p>';
//   } else {
//     // Show top 5 candidates with non-zero scores
//     const topCandidates = nonZeroResults.slice(0, 5);
    
//     // Create the list of top candidates
//     topCandidates.forEach(([name, score], i) => {
//       resultHTML += `
//         <div class="candidate-result">
//           <span class="candidate-rank">${i + 1}.</span>
//           <span class="candidate-name">${name}</span>
//           <span class="candidate-score">- ${score} Point${score > 1 ? 's' : ''}</span>
//         </div>
//       `;
//     });
    
//     //display questions skipped
//     resultHTML += `<p>Questions skipped: ${questionStats.skipped}</p>`;

//     // Display ALL top candidate profiles
//     topCandidates.forEach(([name, score], i) => {
//       resultHTML += `
//         <div class="candidate-profile">
//           <img src="${name.toLowerCase()}.png" alt="${name}" onerror="this.src='placeholder.png'">
//           <h3>${name}</h3>
//           <a href="#" class="candidate-website">Visit Website</a>
          
//           <div class="stats-container">
//             <div class="rank-box">#${i + 1}</div>
//             <div class="questions-aligned">
//               ${score}/${quiz.length} Aligned
//             </div>
//           </div>
//         </div>
//       `;
//     });
//   }

//   resultsContainer.innerHTML = resultHTML;
// }


  
//     // // Display the top candidate profile
//     // const topCandidate = topCandidates[0];
//     // if (topCandidate) {
//     //   const [name, score] = topCandidate;
//     //   resultHTML += `
//     //     <div class="candidate-profile">
//     //       <img src="${name.toLowerCase()}.png" alt="${name}" onerror="this.src='placeholder.png'">
//     //       <h3>${name}</h3>
//     //       <a href="#" class="candidate-website">Visit Website</a>
          
//     //       <div class="stats-container">
//     //         <div class="rank-box">#1</div>
//     //         <div class="questions-aligned">
//     //           ${score}/${quiz.length} Aligned
//     //         </div>
//     //       </div>
//     //     </div>
//     //   `;
//     // }
//   // }

//       // // Display the top candidate profile
//   topCandidates.forEach(([name, score], i) => {
//     resultHTML += `
//       <div class="candidate-profile">
//         <img src="${name.toLowerCase()}.png" alt="${name}" onerror="this.src='placeholder.png'">
//         <h3>${name}</h3>
//         <a href="#" class="candidate-website">Visit Website</a>
        
//         <div class="stats-container">
//           <div class="rank-box">#${i + 1}</div>
//           <div class="questions-aligned">
//             ${score}/${quiz.length} Aligned
//           </div>
//         </div>
//       </div>
//     `;
//   });
// }

  

//   resultsContainer.innerHTML = resultHTML;
// }


// Replace your entire showResults function with this one
function showResults() {
  // Hide quiz container
  quizContainer.style.display = 'none';
  
  // Show results container
  resultsContainer.style.display = 'block';

  // Filter out candidates with zero points
  const nonZeroResults = Object.entries(candidates)
    .filter(([_, score]) => score > 0)
    .sort((a, b) => b[1] - a[1]);

  let resultHTML = '<div class="results-title"><h2>Matching Results</h2></div><div class="nyc-votes"><h4>In primary and special elections for city offices, you can now rank up to five candidates in order of preference instead of choosing just one.</h4><h3><a href="https://www.nycvotes.org/how-to-vote/ranked-choice-voting/">Visit NYC Votes</a></h3></div>';

  if (nonZeroResults.length === 0) {
    resultHTML += '<p>No candidates matched your preferences. Try answering more questions.</p>';
  } else {
    // Show top 5 candidates with non-zero scores
    const topCandidates = nonZeroResults.slice(0, 5);
    
    // Create the list of top candidates with full names
    topCandidates.forEach(([name, score], i) => {
      const fullName = candidateFullNames[name] || name; // Fallback to short name if mapping doesn't exist
      resultHTML += `
        <div class="candidate-result">
          <span class="candidate-rank">${i + 1}.</span>
          <span class="candidate-name">${fullName}</span>
          <span class="candidate-score">- ${score} Point${score > 1 ? 's' : ''}</span>
        </div>
      `;
    });
    
    // Display questions skipped
    resultHTML += `<p>Questions skipped: ${questionStats.skipped}</p>`;

    // Display ALL top candidate profiles with full names
    topCandidates.forEach(([name, score], i) => {
      const fullName = candidateFullNames[name] || name; // Fallback to short name if mapping doesn't exist
      const website = candidateWebsite[name] || "#";
      resultHTML += `
        <div class="candidate-profile">
          <img src="img/background/${name.toLowerCase()}.jpg" alt="${fullName}" onerror="this.src='placeholder.jpg'">
          <div class="stats-containers">
            <div class="stats-container-2">
              <div class="rank-box">#${i + 1}</div>
            </div>
            <div class="stats-container-1">
              <h3>${fullName}</h3>
              <a href="${website}" class="candidate-website" target="_blank">Visit Website</a>
            </div>
          </div>
        </div>
      `;
    });
  }

  resultsContainer.innerHTML = resultHTML;
}