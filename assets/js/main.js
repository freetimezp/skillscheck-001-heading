/* =========================================
   LESSON 001 — HTML HEADINGS QUIZ
   Vanilla JavaScript only
========================================= */

// Every question contains:
// type: "single" = radio buttons
// type: "multiple" = checkboxes
// code: the HTML example shown to the learner
// answers: the correct answer indexes
// explanation: why the answer is correct

let resultSaved = false;

const questions = [
    {
        type: "single",
        question: "Which HTML element represents the highest-level heading?",
        hint: "Think about the beginning of a document's heading hierarchy.",
        code: "<h1>Welcome to my website</h1>",
        options: ["<heading>", "<h1>", "<h6>", "<head>"],
        answers: [1],
        explanation:
            "<h1> represents the highest-level heading. The <head> element is different: it contains document metadata.",
    },
    {
        type: "single",
        question: "How many heading levels does HTML provide?",
        hint: "Count from the highest level to the lowest.",
        code: "<h1>Title</h1>\n<h2>Section</h2>\n...\n<h6>Smallest level</h6>",
        options: ["4", "5", "6", "8"],
        answers: [2],
        explanation:
            "HTML provides six heading elements: <h1>, <h2>, <h3>, <h4>, <h5>, and <h6>.",
    },
    {
        type: "single",
        question: "Which element is the lowest-level HTML heading?",
        hint: "It has the highest number in the heading family.",
        code: "<h5>Subsection</h5>\n<h6>Detail</h6>",
        options: ["<h1>", "<h4>", "<h6>", "<h7>"],
        answers: [2],
        explanation:
            "<h6> is the lowest of the six heading levels. There is no standard HTML <h7> heading element.",
    },
    {
        type: "single",
        question: "What is the primary purpose of HTML headings?",
        hint: "Think about meaning and document organization, not just appearance.",
        code: "<h1>Travel Guide</h1>\n<h2>Europe</h2>\n<h3>Italy</h3>",
        options: [
            "To organize content into a meaningful hierarchy",
            "To make every paragraph bold",
            "To add images to a page",
            "To change the website's background",
        ],
        answers: [0],
        explanation:
            "Headings describe the structure of content and help people and assistive technologies understand how sections relate.",
    },
    {
        type: "single",
        question:
            "Which heading is typically rendered largest by default in browsers?",
        hint: "Assume the browser's default styles have not been changed.",
        code: "<h1>Main title</h1>\n<h3>Section title</h3>\n<h6>Small title</h6>",
        options: ["<h6>", "<h3>", "<h1>", "All are equal"],
        answers: [2],
        explanation:
            "Browsers typically render <h1> largest and <h6> smallest by default. CSS can change their visual sizes.",
    },
    {
        type: "multiple",
        question: "Which of these are valid HTML heading elements?",
        hint: "Select every valid element.",
        code: "<h1>One</h1>\n<h3>Three</h3>\n<h6>Six</h6>",
        options: ["<h1>", "<h3>", "<h6>", "<h9>", "<header>"],
        answers: [0, 1, 2],
        explanation:
            "The six heading elements are <h1> through <h6>. <header> is a separate semantic element, not a heading level.",
    },
    {
        type: "single",
        question:
            "Which heading should usually introduce the main topic of a page?",
        hint: "Choose the highest heading level.",
        code: "<!-- The main page topic -->\n<h1>Learn HTML</h1>",
        options: ["<h4>", "<h6>", "<h2>", "<h1>"],
        answers: [3],
        explanation:
            "An <h1> is generally the most appropriate heading for the page's main topic.",
    },
    {
        type: "single",
        question: "What does the browser normally do with this code?",
        hint: "Consider the default browser stylesheet.",
        code: "<h1>Big Title</h1>\n<h2>Smaller Title</h2>",
        options: [
            "Renders both at exactly the same size",
            "Usually renders h1 larger than h2",
            "Hides the h2 element",
            "Converts both elements into paragraphs",
        ],
        answers: [1],
        explanation:
            "Default browser styles usually make <h1> larger than <h2>. Custom CSS can override those styles.",
    },
    {
        type: "single",
        question:
            "Which HTML element is the correct choice for a subsection of an h2 section?",
        hint: "A child section is usually one level below its parent.",
        code: "<h1>Web Development</h1>\n<h2>HTML</h2>\n<!-- Add a subsection here -->",
        options: ["<h1>", "<h2>", "<h3>", "<h6>"],
        answers: [2],
        explanation:
            "<h3> is the natural next level below <h2> when the content represents a subsection.",
    },
    {
        type: "multiple",
        question: "Which statements about HTML headings are true?",
        hint: "Select all the correct statements.",
        code: "<h1>Portfolio</h1>\n<h2>Projects</h2>",
        options: [
            "Headings help organize document content.",
            "There are six standard heading levels.",
            "Heading tags are only for changing font size.",
            "Heading levels communicate structural importance.",
        ],
        answers: [0, 1, 3],
        explanation:
            "Headings communicate document structure. Their default appearance is secondary to their semantic meaning.",
    },
    {
        type: "single",
        question:
            "What is the best way to make an h2 look visually larger than an h1?",
        hint: "Separate visual styling from semantic meaning.",
        code: '<h1 class="page-title">Welcome</h1>\n<h2 class="section-title">Projects</h2>',
        options: [
            "Rename h2 to h9",
            "Use CSS font-size to style the headings",
            "Replace h2 with a div in every case",
            "Add more spaces inside the tag",
        ],
        answers: [1],
        explanation:
            "Use CSS to control visual size. Keep heading levels appropriate to the content hierarchy.",
    },
    {
        type: "single",
        question: "Which CSS property controls the size of text?",
        hint: "It can use px, rem, em, and other valid units.",
        code: "h1 {\n    font-size: 48px;\n}",
        options: ["font-weight", "text-style", "font-size", "text-height"],
        answers: [2],
        explanation:
            "The font-size property controls text size. Here, the h1 is styled to use a size of 48 pixels.",
    },
    {
        type: "single",
        question: "What is the purpose of font-weight in a heading style?",
        hint: "It controls how light or bold the text appears.",
        code: "h1 {\n    font-weight: 700;\n}",
        options: [
            "Changes the text's color",
            "Controls the thickness or boldness of the text",
            "Adds a new heading level",
            "Changes the HTML hierarchy",
        ],
        answers: [1],
        explanation:
            "font-weight controls the weight of the text. A value of 700 is commonly associated with bold text.",
    },
    {
        type: "single",
        question: "Which structure best represents a heading hierarchy?",
        hint: "A section title should come before its subsections.",
        code: "A: h1 → h2 → h3\nB: h1 → h4 → h2",
        options: [
            "Only structure A",
            "Only structure B",
            "Both are always equally appropriate",
            "Neither uses heading elements",
        ],
        answers: [0],
        explanation:
            "A follows a clear descending hierarchy. B jumps from h1 to h4 and then back to h2, which is generally confusing.",
    },
    {
        type: "multiple",
        question: "Which practices help create accessible heading structures?",
        hint: "Choose every good practice.",
        code: "<h1>Recipes</h1>\n<h2>Desserts</h2>\n<h3>Cakes</h3>",
        options: [
            "Use headings to label meaningful sections.",
            "Choose levels based on the content hierarchy.",
            "Use headings only to make text look big.",
            "Keep the structure logical and understandable.",
        ],
        answers: [0, 1, 3],
        explanation:
            "Meaningful, logically structured headings help people navigate content, including users of screen readers.",
    },
    {
        type: "single",
        question:
            "Which element is used for the main page heading in this example?",
        hint: "Find the element describing the whole page topic.",
        code: "<h1>My Portfolio</h1>\n<h2>About Me</h2>\n<h2>Contact</h2>",
        options: [
            "About Me",
            "Contact",
            "My Portfolio",
            "All three are the same level",
        ],
        answers: [2],
        explanation:
            "My Portfolio is inside the h1 element, which identifies the page's main topic.",
    },
    {
        type: "single",
        question: "What does the h in h1, h2, and h3 stand for?",
        hint: "These elements name a category of content structure.",
        code: "<h1>Heading One</h1>\n<h2>Heading Two</h2>",
        options: ["Hyperlink", "Heading", "Hypertext", "Height"],
        answers: [1],
        explanation:
            "The h stands for heading. The number identifies its level in the heading hierarchy.",
    },
    {
        type: "multiple",
        question:
            "Which CSS declarations can affect a heading's visual appearance?",
        hint: "Select the properties shown that can style text.",
        code: "h1 {\n    font-size: 40px;\n    color: gold;\n    font-weight: 700;\n}",
        options: ["font-size", "color", "font-weight", "heading-level"],
        answers: [0, 1, 2],
        explanation:
            "font-size, color, and font-weight are valid CSS properties. Heading level is expressed by the HTML element, not a CSS property.",
    },
    {
        type: "single",
        question:
            "Is it good practice to choose h6 just because you want tiny text?",
        hint: "Ask whether the heading level matches the content.",
        code: "<h6>This is a very large page title</h6>",
        options: [
            "Yes, heading levels only affect appearance",
            "Yes, h6 is the recommended title for every page",
            "No, choose the semantic level and style it with CSS",
            "No, because h6 is invalid HTML",
        ],
        answers: [2],
        explanation:
            "Choose a heading level based on document structure. Use CSS to achieve the desired visual appearance.",
    },
    {
        type: "single",
        question:
            "What should you normally do after an h2 section heading when introducing its subsection?",
        hint: "Follow the logical heading sequence.",
        code: "<h2>Our Services</h2>\n<!-- Subsection heading -->",
        options: [
            "Use h3",
            "Use h1 every time",
            "Use h6 every time",
            "Use a paragraph as a heading level",
        ],
        answers: [0],
        explanation:
            "An h3 is usually appropriate for a subsection of an h2. The correct choice ultimately depends on the content structure.",
    },
    {
        type: "multiple",
        question: "Which statements about h1 and CSS are correct?",
        hint: "Think about what HTML defines and what CSS changes.",
        code: '<h1 style="font-size: 20px;">Main Title</h1>',
        options: [
            "An h1 remains an h1 even when its font size changes.",
            "CSS can change the visual size of an h1.",
            "Changing font-size automatically turns h1 into h3.",
            "HTML semantics and visual styling are different concerns.",
        ],
        answers: [0, 1, 3],
        explanation:
            "CSS changes appearance, not the element's semantic identity. This example is still an h1 even though its text is set to 20px.",
    },
];

/* =========================================
   DOM ELEMENTS
   Get references to elements in the HTML.
========================================= */

const questionArea = document.getElementById("questionArea");
const currentNumber = document.getElementById("currentNumber");
const scoreElement = document.getElementById("score");
const progressFill = document.getElementById("progressFill");

const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const feedback = document.getElementById("feedback");
const nextRow = document.getElementById("nextRow");
const answerStatus = document.getElementById("answerStatus");

const quizCard = document.getElementById("quizCard");
const resultCard = document.getElementById("resultCard");

/* =========================================
   QUIZ STATE
   These variables track the learner's progress.
========================================= */

let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let correctAnswersCount = 0;
let hasAnswered = false;

/* =========================================
   RANDOMIZE ARRAY
   Fisher-Yates shuffle randomly rearranges items.
   We copy the array first so the original stays intact.
========================================= */

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        // Choose a random position from 0 to i.
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // Swap the current item with the random item.
        [shuffled[i], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[i],
        ];
    }

    return shuffled;
}

/* =========================================
   START OR RESTART THE QUIZ
========================================= */

function startQuiz() {
    // Randomize question order.
    quizQuestions = shuffleArray(questions);

    // Also randomize the answers inside every question.
    // Keep track of the original answer indexes so grading
    // still works after the options have moved.
    quizQuestions = quizQuestions.map((question) => {
        const randomizedOptions = shuffleArray(
            question.options.map((option, originalIndex) => ({
                text: option,
                originalIndex,
            })),
        );

        // Find the new positions of the correct answers.
        const randomizedAnswers = randomizedOptions
            .map((option, newIndex) => {
                return question.answers.includes(option.originalIndex)
                    ? newIndex
                    : -1;
            })
            .filter((index) => index !== -1);

        return {
            ...question,
            options: randomizedOptions.map((option) => option.text),
            answers: randomizedAnswers,
        };
    });

    // Reset all progress.
    resultSaved = false;
    currentIndex = 0;
    score = 0;
    correctAnswersCount = 0;
    hasAnswered = false;

    // Show the quiz and hide the results.
    quizCard.hidden = false;
    resultCard.hidden = true;

    // Update the score display.
    scoreElement.textContent = score;

    // Display the first randomized question.
    renderQuestion();
}

/* =========================================
   DISPLAY THE CURRENT QUESTION
========================================= */

function renderQuestion() {
    const question = quizQuestions[currentIndex];

    // Update question number and progress bar.
    currentNumber.textContent = currentIndex + 1;
    progressFill.style.width = `${((currentIndex + 1) / quizQuestions.length) * 100}%`;

    // Decide whether the question needs radio buttons
    // or checkboxes.
    const inputType = question.type === "multiple" ? "checkbox" : "radio";

    const typeLabel =
        question.type === "multiple" ? "MULTIPLE ANSWERS" : "SINGLE ANSWER";

    // Create the question, code example, and answer options.
    questionArea.innerHTML = `
        <div class="question-enter">
            <div class="question-type">${typeLabel}</div>

            <h2 class="question-title">
                ${escapeHTML(question.question)}
            </h2>

            <p class="question-hint">
                ${escapeHTML(question.hint)}
            </p>

            <div class="code-box">
                <div class="code-label">HTML EXAMPLE / PREVIEW</div>
                <pre><code>${escapeHTML(question.code)}</code></pre>
            </div>

            <div class="options">
                ${question.options
                    .map(
                        (option, index) => `
                    <label class="option" data-index="${index}">
                        <input
                            type="${inputType}"
                            name="answer"
                            value="${index}"
                            aria-label="${escapeHTML(option)}"
                        >
                        <span class="option-control" aria-hidden="true">✓</span>
                        <span class="option-text">${escapeHTML(option)}</span>
                    </label>
                `,
                    )
                    .join("")}
            </div>
        </div>
    `;

    // Reset the feedback from the previous question.
    feedback.hidden = true;
    feedback.innerHTML = "";
    nextRow.hidden = true;
    checkBtn.hidden = false;
    checkBtn.disabled = false;
    hasAnswered = false;

    // Give a different label to the last question.
    checkBtn.innerHTML = "Check answer <span>↗</span>";
}

/* =========================================
   SAFELY DISPLAY TEXT
   Escape HTML characters before inserting user-facing
   question text and snippets into the page.
========================================= */

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
        };

        return entities[character];
    });
}

/* =========================================
   CHECK THE LEARNER'S ANSWER
========================================= */

function checkAnswer() {
    // Prevent the same question from being graded twice.
    if (hasAnswered) return;

    const question = quizQuestions[currentIndex];

    // Get all selected answers.
    const selectedInputs = [
        ...questionArea.querySelectorAll('input[name="answer"]:checked'),
    ];

    const selectedAnswers = selectedInputs
        .map((input) => Number(input.value))
        .sort((a, b) => a - b);

    // Require at least one answer.
    if (selectedAnswers.length === 0) {
        feedback.hidden = false;
        feedback.innerHTML = `
            <div class="feedback-title">Choose an answer first.</div>
            <p>Select an option before checking your answer.</p>
        `;
        return;
    }

    hasAnswered = true;

    // Sort the correct answers for reliable comparison.
    const correctAnswers = [...question.answers].sort((a, b) => a - b);

    // An answer is correct only if all selected indexes match
    // the complete set of correct indexes.
    const isCorrect =
        selectedAnswers.length === correctAnswers.length &&
        selectedAnswers.every(
            (answer, index) => answer === correctAnswers[index],
        );

    // Award one point for a completely correct question.
    if (isCorrect) {
        score++;
        correctAnswersCount++;
    }

    // Update the score.
    scoreElement.textContent = score;

    // Highlight the correct and incorrect choices.
    const optionLabels = questionArea.querySelectorAll(".option");

    optionLabels.forEach((label, index) => {
        const input = label.querySelector("input");

        input.disabled = true;

        // Mark every correct option in green.
        if (correctAnswers.includes(index)) {
            label.classList.add("correct");
        }

        // Mark selected incorrect options in red.
        if (input.checked && !correctAnswers.includes(index)) {
            label.classList.add("wrong");
        }
    });

    // Display feedback and an explanation.
    feedback.hidden = false;
    feedback.innerHTML = `
        <div class="feedback-title ${isCorrect ? "good" : "bad"}">
            ${isCorrect ? "✓ Correct answer!" : "✕ Not quite!"}
        </div>
        <p>${escapeHTML(question.explanation)}</p>
    `;

    // Show the next question button.
    nextRow.hidden = false;
    answerStatus.textContent = isCorrect ? "+1 POINT" : "0 POINTS";

    // Change the button label on the final question.
    if (currentIndex === quizQuestions.length - 1) {
        nextBtn.innerHTML = "View results <span>↗</span>";
    } else {
        nextBtn.innerHTML = "Next question <span>→</span>";
    }
}

/* =========================================
   MOVE TO THE NEXT QUESTION
========================================= */

function nextQuestion() {
    // Don't move forward until the answer has been checked.
    if (!hasAnswered) return;

    currentIndex++;

    // If there are no more questions, show the results.
    if (currentIndex >= quizQuestions.length) {
        showResults();
        return;
    }

    renderQuestion();
}

/* =========================================
   SHOW THE FINAL RESULTS
========================================= */

function showResults() {
    quizCard.hidden = true;
    resultCard.hidden = false;

    const total = quizQuestions.length;
    const percentage = Math.round((score / total) * 100);

    document.getElementById("finalScore").textContent = `${score} / ${total}`;

    document.getElementById("accuracy").textContent = `${percentage}%`;

    document.getElementById("correctCount").textContent =
        `${correctAnswersCount} / ${total}`;

    // Display a message based on the final score.
    let title;
    let description;
    let icon;

    if (percentage >= 90) {
        title = "OUTSTANDING!";
        description =
            "You understand HTML heading hierarchy really well. You're ready to move on to the next lesson.";
        icon = "✳";
    } else if (percentage >= 70) {
        title = "GREAT WORK!";
        description =
            "You have a solid foundation. Review a few explanations and keep practicing.";
        icon = "↗";
    } else if (percentage >= 50) {
        title = "KEEP BUILDING.";
        description =
            "You're making progress. Revisit h1–h6, semantic hierarchy, and CSS font sizing before trying again.";
        icon = "↻";
    } else {
        title = "EVERY EXPERT STARTS HERE.";
        description =
            "Take another look at the first lesson. Practice the six heading levels, then give the quiz another try.";
        icon = "✎";
    }

    if (!resultSaved) {
        saveSkillCheckResult(score, total, percentage);
        resultSaved = true;
    }

    document.getElementById("resultTitle").textContent = title;
    document.getElementById("resultDescription").textContent = description;
    document.getElementById("resultIcon").textContent = icon;
}

/* =========================================
   BUTTON EVENTS
========================================= */

// Check the current answer.
checkBtn.addEventListener("click", checkAnswer);

// Move to the next question.
nextBtn.addEventListener("click", nextQuestion);

// Start a new randomized quiz.
restartBtn.addEventListener("click", startQuiz);

/* =========================================
   START THE QUIZ WHEN THE PAGE LOADS
========================================= */

startQuiz();

/* =========================================
   SHARED ROADMAP RESULTS
   This format is also used by the other skill checks.
========================================= */

const SKILL_RESULTS_KEY = "freetimezp:roadmap:skill-check-results:v1";

const SKILL_TEST_ID = "001";
const SKILL_TEST_TITLE = "HTML Headings";

function saveSkillCheckResult(score, total, percentage) {
    try {
        const stored = localStorage.getItem(SKILL_RESULTS_KEY);
        const data = stored ? JSON.parse(stored) : {};

        const tests =
            data.tests && typeof data.tests === "object" ? data.tests : {};

        const previous = tests[SKILL_TEST_ID] || {};
        const completedAt = new Date().toISOString();

        const attempt = {
            score,
            total,
            percentage,
            completedAt,
        };

        const previousBest = previous.best;

        const best =
            !previousBest || percentage >= previousBest.percentage
                ? attempt
                : previousBest;

        const history = Array.isArray(previous.history) ? previous.history : [];

        tests[SKILL_TEST_ID] = {
            testId: SKILL_TEST_ID,
            title: SKILL_TEST_TITLE,
            attempts: (Number(previous.attempts) || 0) + 1,
            latest: attempt,
            best,
            history: [...history, attempt].slice(-10),
        };

        localStorage.setItem(
            SKILL_RESULTS_KEY,
            JSON.stringify({
                schemaVersion: 1,
                updatedAt: completedAt,
                tests,
            }),
        );
    } catch (error) {
        // The quiz still works if browser storage is unavailable.
        console.warn("Could not save skill-check results:", error);
    }
}
