const questions = [
    "Read Sex +",
    "Hooked up with someone on rugby or frisbee",
    "Been in or with someone in an open relationship",
    "Hooked up with a block crush",
    "Skipped class",
    "Gone to a farty",
    "Hooked up someone 2+ grades above or below",
    "Streaked at crooz",
    "Crashed at crooz",
    "Do you like feet (sexual)",
    "Been barefoot in a building other than a dorm",
    "Fucked in the gendy nooch",
 "Fucked in the common room of dorm hall",
 "Climbed a tree on Tava Quad",
 "Stolen from rastalls",
 "Held hands romantically",
 "Sexiled roommate",
 "Been sexiled by a roommate",
 "Experimented with a non MPS",
 "Gone to Shabbat",
 "Gone to cowboys",
 "Fucked a cowboy",
 "Gotten a fake confiscated",
 "Been to Minnesota",
 "Gone to Moab for block break",
 "Gotten food poisoning on campus",
 "Smoked on a sports field",
 "Had a situationship",
 "Been in a block with multiple people you’ve hooked up with",
 "Gotten a mullet or shaved head",
 "Gone to HMI or Nols",
 "Had sex in a tent or hammock",
 "Done shrooms",
 "Smoked weed on the quad",
 "Went to midnight rasty",
 "Posted something on yikyak",
 "Dmed someone on yikyak",
 "Gone to a hockey game",
 "Stolen from C store",
 "Got caught stealing anywhere on campus",
 "Gotten a conduct case",
 "Gone to fun run",
 "Done 3+ IM sports",
 "One night stand",
 "Sex with roommate in the room",
 "Had to get a safe ride cause you were too drunk",
 "Set off the fire alarm",
 "Been to class intoxicated or pregamed class",
 "Had an orgy",
 "Fucked your priddy leader/trippee",
 "Questioned your sexuality",
 "Crush on professor or paraprof",
 "Been to rastys intoxicated",
 "Gotten CCEMS called on you",
 "Rushed Greek life",
 "Fucked in all of the big 3",
 "Smoked your first cig at CC",
 "Hike a 14er",
 "Hiked the manitou incline",
 "Hiked pikes peak",
 "Ate ass",
 "Given head to one night stand",
 "Own a melanzana or blundstones",
 "Gotten drunk/high snacks at 7/11",
 "7/11 or webers workers know your name",
 "Sled down Preserve hill",
 "Skipped class to go skiing",
 "Been in the library until closing",
 "?",
 "Greened out",
 "Kicked out of frat",
 "Been refused entry to party",
 "Had sex on a class field trip or outdoor ed trip",
 "Taken a geo course",
 "Fucked a hockey player",
 "Played the guitar at someone",
 "Gotten dapped up by Liam",
 "Gone climbing at red rocks",
 "Done a climbing comp",
 "Hosted a pregame in your room",
 "Snuck into a party for a club you’re not part of",
 "Gone streaking (not at crooz)",
 "Gotten your pike bike membership taken away",
 "Been shirtless on the quad",
 "Had a first date in an on-campus dining hall",
 "Skinny dipped on block break",
 "Had sex in an academic building",
 "Had a threesome",
 "Kept your psych rat",
 "Fucked in Flair",
 "Went back to a situationship",
 "Been in the tunnels under campus",
 "Fucked a winter start during block 5",
 "Successfully slacklined",
 "Hit someone with a frisbee on the quad",
 "Sunbathed on Tava Quad or Tutt Circle",
 "Been on the roof at a party",
 "Had sex in a bed that's not either of yours",
 "Committed an act teamcest",
"Pet a squirrel on campus",
];

const questionsForm = document.getElementById('questions-form');
const submitButton = document.getElementById('submit');
const resultsSection = document.getElementById('results');

// Function to generate test questions dynamically
function generateQuestions() {
    questions.forEach((question, index) => {
        const label = document.createElement('label');
        label.textContent = `${index + 1}. ${question}`;
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = `q${index}`;
        label.appendChild(input);
        questionsForm.appendChild(label);
        questionsForm.appendChild(document.createElement('br'));
    });
 }
 


// Function to calculate test score (higher score for fewer checkboxes checked)
function calculateScore() {
    let score = questions.length; // Start with the maximum score
    questions.forEach((question, index) => {
        const checkbox = document.querySelector(`input[name="q${index}"]:checked`);
        if (checkbox) {
            score--; // Decrement the score for each checked checkbox
        }
    });
    return score;
}


// Function to display test results
function displayResults(score) {
    resultsSection.textContent = `Your Rice Purity Test score is: ${score}`;
    resultsSection.style.display = 'block';
}

// Event listener for submit button
submitButton.addEventListener('click', () => {
    const score = calculateScore();
    displayResults(score);
});

// Generate questions when the page loads
window.addEventListener('load', generateQuestions);




