const candidates = {
  "Adams": 0, "Blake": 0, "Cuomo": 0, "Lander": 0, "Myrie": 0,
  "Sliwa": 0, "Stringer": 0, "Tilson": 0, "Mamdani": 0, "Ramos": 0
};

const questionStats = {
  "answered": 0,
  "skipped": 0
};

const quiz = [
    {
      question: "How can NYC government become more transparent?",
      options: [
        { text: "Partner with nonprofits to track outcomes and tie funding to results (A.Adams)", candidates: ["Adams"] },
        { text: "Withhold NYC taxes dollar-for-dollar if federal funding is cut (Blake)", candidates: ["Blake"] },
        { text: "Publish monthly subway safety report cards with community oversight (Cuomo)", candidates: ["Cuomo"] },
        { text: "Launch transparency dashboards for homelessness and staffing + Reform public construction project management (Brad Lander)", candidates: ["Lander"] },
        { text: "Challenge federal overreach + Quarterly reports on flood mitigation (Myrie)", candidates: ["Myrie"] },
        { text: "Audit all agencies and end corporate tax breaks + Investigate migrant spending + prioritize NYC residents (Sliwa)", candidates: ["Sliwa"] },
        { text: "Ban pay-to-play lobbying + Require detailed budget transparency (Stringer)", candidates: ["Stringer"] },
        { text: "Eradicate systemic corruption in shelter operations (Tilson)", candidates: ["Tilson"] },
        { text: "Skip this Question ****(No impact on scores)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC improve public safety?",
      options: [
        { text: "Focused on stopping drug trafficking and helping people recover rather than traditional policing (Blake)", candidates: ["Blake"] },
        { text: "Hire 5,000+ NYPD Officers + Pinpoint high-crime locations and repeat offenders (Cuomo, Tilson)", candidates: ["Cuomo", "Tilson"] },
        { text: "Reform NYPD to focus on gun violence/hate crimes (Lander)", candidates: ["Lander"] },
        { text: "Hire and deploy 7,000 NYPD officers to subways + Install emergency call boxes in all 472 stations + Harsher penalties for repeat offenders (Sliwa)", candidates: ["Sliwa"] },
        { text: "Hire 3,000 officers + Deploy one on every subway train (Stringer)", candidates: ["Stringer"] },
        { text: "Skip this Question (No impact on scores)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC tackle its affordable housing crisis?",
      options: [
        { text: "Ban credit checks + Build 600,000 affordable homes for middle-income families + Reserve units for veterans/graduates/displaced natives (Blake)", candidates: ["Blake"] },
        { text: "Leverage public land for mixed-income housing + Improve NYC Housing Authority(Cuomo)", candidates: ["Cuomo"] },
        { text: "Preserve 35K units + Assist homeowners to rent out extra rooms long-term + Protect tenants from harassment (Lander)", candidates: ["Lander"] },
        { text: "Build 200,000 rent-stabilized units + Freeze rents + Take over bad landlords + Triple fines for violations + Fast-track 100% affordable developments + Double funds for NYC Housing Authority (Mamdani)", candidates: ["Mamdani"] },
        { text: "Legalize basement apartments + Convert empty offices to housing + $50M down payment help for first-time buyers + Protect public housing (Ramos)", candidates: ["Ramos"] },
        { text: "Rehab 26K vacant units + Return zoning control to local communities + more benefits to small property owners (Sliwa)", candidates: ["Sliwa"] },
        { text: "$500M loan fund for minority developers + Secure $40B for NYC Housing Authority + Unlock public land (Stringer)", candidates: ["Stringer"] },
        { text: "Support private investment + Reform regulations to unlock large-scale housing development + Streamline zoning and permitting. (Tilson)", candidates: ["Tilson"] },
        { text: "Skip this Question (No impact on scores)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "What's the best way to address homelessness?",
      options: [
        { text: "Provide Guaranteed Basic Income to end homelessness (Adams)", candidates: ["Adams"] },
        { text: "Require treatment for people who can't care for themselves + Add psychiatric beds  (Cuomo)", candidates: ["Cuomo"] },
        { text: "\"Housing First\" for 2,000 mentally ill homeless + Require treatment for people who can't care for themselves + Add secure therapeutic beds (Lander)", candidates: ["Lander"] },
        { text: "Clear homeless from subways to shelters + Separate violent offenders + Reopen 30,000 psychiatric beds (Sliwa)", candidates: ["Sliwa"] },
        { text: "Integrate mental health professionals into subways (Stringer)", candidates: ["Stringer"] },
        { text: "Repeal \"right to sleep outside\" + Expand shelters and drop-in centers + Reopen long-term care facilities (Tilson)", candidates: ["Tilson"] },
        { text: "Skip this Question (No impact on scores)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC improve healthcare access and outcomes?",
      options: [
        { text: "Prenatal support for homeless mothers (Adams)", candidates: ["Adams"] },
        { text: "Combat opioids with harm reduction + Audit $150M funding + Track overdose response(Blake)", candidates: ["Blake"] },
        { text: "Expand public hospital services + Strengthen safety-net hospitals (Cuomo)", candidates: ["Cuomo"] },
        { text: "Protect reproductive rights + Reduce medical debt + Protect retiree healthcare benefits (Lander)", candidates: ["Lander"] },
        { text: "\"Baby baskets\" for newborns($20M/year)  + Postpartum resources (Mamdani)", candidates: ["Mamdani"] },
        { text: "Fund doula coverage + Open Black Maternal Health Centers + Protect providers under Reproductive Health Act. (Myrie)", candidates: ["Myrie"] },
        { text: "Skip this Question (No impact on scores)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC grow its economy?",
      options: [
        { text: "Inject cash directly to low-income households (Adams)", candidates: ["Adams"] },
        { text: "Implement guaranteed income pilot + Create municipal hiring surge in underserved neighborhoods + $3.3B Support fund for minority and women-owned businesses (Blake)", candidates: ["Blake"] },
        { text: "Convert offices to housing + expand Metro-North in Bronx, Grow AI/tech + Strengthen minority and women-owned businesses(Cuomo)", candidates: ["Cuomo"] },
        { text: "$30/hour minimum wage by 2030 + Create city-run grocery stores to provide wholesale prices (Mamdani)", candidates: ["Mamdani"] },
        { text: "No-interest loans for Black businesses + Expand green job opportunities (Myrie)", candidates: ["Myrie"] },
        { text: "Focus outer-borough growth through child care infrastructure + Support local small businesses (Ramos)", candidates: ["Ramos"] },
        { text: "Redirect incentives to outer borough small businesses + Revitalize local commercial districts + Boost non-Manhattan tourism (Sliwa)", candidates: ["Sliwa"] },
        { text: "Support small business through streamlined permits + Expand minority and women-owned businesses to 50% + Create green jobs through renewable energy investments (Stringer)", candidates: ["Stringer"] },
        { text: "Revitalize the economy by supporting small businesses + Streamline permit process + Create jobs with higher wages. (Tilson)", candidates: ["Tilson"] },
        { text: "Support small businesses + Guarantee predictable work hours + Fair pay for gig workers + Expand freelancer protections (Lander)", candidates: ["Lander"] },
        { text: "Skip this Question (No impact on scores)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should New York City improve its transit system?",
      options: [
        { text: "Hire 500 MTA police + Install high-security turnstiles + Implement proof-of-payment turnstiles (Andrew Cuomo)", candidates: ["Cuomo"] },
        { text: "Make all city buses permanently fare-free + Expand bus priority lanes and loading zones (Zohran Mamdani)", candidates: ["Mamdani"] },
        { text: "Implement congestion pricing + Improve subway/bus accessibility + Expand bike lanes (Lander)", candidates: ["Lander"] },
        { text: "24/7 staffed help booths in all stations + 500 additional transit officers + Expedited emergency response systems (Curtis Sliwa)", candidates: ["Sliwa"] },
        { text: "Express bus lanes + Audit MTA construction costs (Zellnor Myrie)", candidates: ["Myrie"] },
        { text: "Prioritize accessibility improvements and service reliability (Jessica Ramos)", candidates: ["Ramos"] },
        { text: "Increase subway safety with dedicated officers + Improve bus reliability + Expand bike lane network (Scott Stringer)", candidates: ["Stringer"] },
        { text: "Increase police presence and enforcement in subways to confront crime and felony assaults (Whitney Tilson)", candidates: ["Tilson"] },
        { text: "Skip this Question (No impact on scores)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC improve its public schools?",
      options: [
        { text: "Use private funding to expand proven programs (Adams)", candidates: ["Adams"] },
        { text: "Auto-admit top 5% to elite schools + expand CUNY aid (Blake)", candidates: ["Blake"] },
        { text: "Reduce class sizes + Strengthen career/technical education (Cuomo)", candidates: ["Cuomo"] },
        { text: "Restore school budgets + Expand career/technical education + Improve special education services (Lander)", candidates: ["Lander"] },
        { text: "Free afterschool programs until 6 PM (Myrie)", candidates: ["Myrie"] },
        { text: "Audit Department of Education's $40B budget to redirect funds to classrooms + Expand vocational programs (EMT/trades) + Protect SHSAT testing + Increase teacher pay (Sliwa)", candidates: ["Sliwa"] },
        { text: "Extend school days to 4:30 PM(Stringer)", candidates: ["Stringer"] },
        { text: "Focus on basic literacy/math (Tilson)", candidates: ["Tilson"] },
        { text: "Skip this Question (No impact on scores)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC address child care affordability?",
      options: [
        { text: "Universal childcare regardless of income + Universal Pre-K +$4.8M employer partnership pilot (Blake)", candidates: ["Blake"] },
        { text: "Expand 3-K/after-school programs (Cuomo)", candidates: ["Cuomo"] },
        { text: "Restore $170M Pre-K/3K funding + Simplify enrollment + Create universal child care system by streamlining applications + Expanding subsidies to 300% poverty level (Ramos)", candidates: ["Ramos"] },
        { text: "Free childcare for ages 6 weeks to 5 years + Equal pay for workers (Mamdani)", candidates: ["Mamdani"] },
        { text: "Reverse cuts in universal 3-K/pre-K + $400M to repay delayed provider payments (Myrie)", candidates: ["Myrie"] },
        { text: "Expand Pre-K/3-K + Enforce paid family leave (Lander)", candidates: ["Lander"] },
        { text: "Share childcare costs between the city, employers, and families + Expand pre-K access (Stringer)", candidates: ["Stringer"] },
        { text: "Skip this Question (No impact on scores)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC handle immigration and global affairs?",
      options: [
        { text: "Ban ICE from schools/hospitals + Provide childcare to undocumented families (Michael Blake)", candidates: ["Blake"] },
        { text: "Issue local work permits for asylum seekers + Ban ICE from schools/hospitals (Zellnor Myrie)", candidates: ["Myrie"] },
        { text: "Provides childcare to undocumented families + Reform asylum-seeker contracts + Expand legal/work services (Lander)", candidates: ["Lander"] },
        { text: "Protect undocumented families + Improve multilingual city services (Ramos)", candidates: ["Ramos"] },
        { text: "Support foreign aid and humanitarian work, including fieldwork in Ukraine. (Tilson)", candidates: ["Tilson"] },
        { text: "Skip this Question (No impact on scores)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should New York City address climate change and sustainability?",
      options: [
        { text: "Reform scaffolding laws + Boost composting + Streamline outdoor dining permits (Andrew Cuomo)", candidates: ["Cuomo"] },
        { text: "Accelerate renewable energy (solar, wind, EVs) + Cut 80% building emissions by 2050 + Launch citywide solar program (Brad Lander)", candidates: ["Lander"] },
        { text: "Sue oil/gas companies + Plant 1M trees + Build flood-resistant streets (Zellnor Myrie)", candidates: ["Myrie"] },
        { text: "Divest 4B from fossil fuels + Invest 6B in renewables + Publish NYPD spending via Checkbook NYC + Enforce color-coded recycling/composting (Scott Stringer)", candidates: ["Stringer"] },
        { text: "Skip this Question (No impact on scores)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should New York City protect workers and improve job quality?",
      options: [
        { text: "Provide basic income to reduce wage exploitation (Adams)", candidates: ["Adams"] },
        { text: "Mandate 3-day payment for nonprofits/freelancers + Create educator housing/retirement communities (Blake)", candidates: ["Blake"] },
        { text: "Expand apprenticeships in healthcare/tech + Improve teacher working conditions + wage supplements for at-risk workers(Cuomo)", candidates: ["Cuomo"] },
        { text: "Enforce wage laws + Support unionization efforts + Protect worker benefits (Lander)", candidates: ["Lander"] },
        { text: "Require union labor on city-subsidized projects (Mamdani)", candidates: ["Mamdani"] },
        { text: "Seal criminal records for job seekers + Support high-growth sector unions(construction, greenenergy) (Myrie)", candidates: ["Myrie"] },
        { text: "Continue advocacy for worker protections (passed $2.1B excluded workers fund) + Push for child care worker wage parity + Expand gig worker access to benefits (Ramos)", candidates: ["Ramos"] },
        { text: "Skip this Question (No impact on scores)", candidates: [], isSkip: true }
      ]
    },
    {
      question: "How should NYC address racial inequality?",
      options: [
        { text: "Prioritize Black/Latinx communities + Address systemic barriers for foster youth and families in shelters. (Adams)", candidates: ["Adams"] },
        { text: "Proportional city contracts by borough demographics + Require schools to partner with mentoring programs for young men of color + Expand Black history curriculum. (Blake)", candidates: ["Blake"] },
        { text: "Address school segregation + Reduce discriminatory policing + Close racial wealth gap (Lander)", candidates: ["Lander"] },
        { text: "Skip this Question (No impact on scores)", candidates: [], isSkip: true }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  const quizContainer = document.getElementById('quiz-container');
  const resultsContainer = document.getElementById('results');
  let userAnswers = Array(quiz.length).fill(null);
  
  function showQuestion(index) {
    const q = quiz[index];
    quizContainer.innerHTML = `<div class="question"><h3>Q${index + 1}. ${q.question}</h3></div>`;
  
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.innerText = opt.text;
      btn.onclick = () => handleAnswer(opt);
      if (userAnswers[index]?.text === opt.text) btn.style.backgroundColor = '#cceeff';
      quizContainer.appendChild(btn);
    });
  
    if (index > 0) {
      const backBtn = document.createElement('button');
      backBtn.innerText = '← Back';
      backBtn.style.marginTop = '1rem';
      backBtn.onclick = goBack;
      quizContainer.appendChild(backBtn);
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
  
  function showResults() {
    quizContainer.innerHTML = '';
  
    // Filter out candidates with zero points
    const nonZeroResults = Object.entries(candidates)
      .filter(([_, score]) => score > 0)
      .sort((a, b) => b[1] - a[1]);
  
    let resultHTML = '<h2>Your Top Candidates</h2>';
    
    if (nonZeroResults.length === 0) {
      resultHTML += '<p>No candidates matched your preferences. Try answering more questions.</p>';
    } else {
      // Show up to top 5 candidates with non-zero scores
      const topCandidates = nonZeroResults.slice(0, 5);
      resultHTML += topCandidates.map(([name, score], i) => 
        `<p>${i + 1}. ${name} – ${score} point(s)</p>`
      ).join('');
    }
    
    resultHTML += `<p>Questions skipped: ${questionStats.skipped}</p>`;
  
    resultsContainer.innerHTML = resultHTML;
  }
  
  showQuestion(currentQuestionIndex);