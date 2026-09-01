// ==========================================================
// EYE HEALTH ASSESSMENT — FULL PROTOTYPE
// ==========================================================
//
// IMPORTANT:
// This is an educational screening prototype.
// It does NOT diagnose eye disease and its match scores are
// heuristic pattern matches, not probabilities.
//
// Current features:
// - Three assessment entry points
// - Full adaptive Symptom Analysis question bank
// - Single-select + multi-select
// - Right / left / both-eye tracking
// - Branching and cleanup of irrelevant answers
// - Previous / Next navigation
// - Progress tracking
// - Pattern-match result engine
// - Separate urgency engine
// - Information-quality / confidence indicator
// - Patient-friendly result cards
//
// This file is designed to work with the index.html/style.css
// structure already created in this project.
// ==========================================================


// ==========================================================
// HELPERS FOR QUESTION DEFINITIONS
// ==========================================================

const YES_SOMETIMES = ["Yes", "Sometimes"];



// ==========================================================
// FINAL SYMPTOM ANALYSIS BUILD — EDUCATIONAL PROTOTYPE
// ==========================================================
//
// IMPORTANT:
// - Pattern matches are NOT diagnoses or probabilities.
// - Urgency rules are evaluated separately from match strength.
// - Some important eye diseases can have few or no early symptoms.
// - Rare/exam-dependent diseases may be retained in the reference
//   library without being surfaced as named matches from weak data.
// - Public deployment should include review by licensed eye-care
//   professionals and formal validation testing.
//
// Patient-facing result levels:
//   Strong Pattern Match
//   Moderate Pattern Match
//   Possible Pattern Match
//
// Care levels:
//   Routine
//   Schedule Soon
//   Prompt Evaluation
//   Urgent Evaluation
//
// ==========================================================

const MATCH_WEIGHTS = {
    CORE: 10,
    STRONG: 7,
    MODERATE: 4,
    WEAK: 2,
    RISK_LOW: 1,
    RISK_MEDIUM: 2,
    RISK_HIGH: 4,
    CONTRADICTION_MILD: -3,
    CONTRADICTION_MODERATE: -6,
    CONTRADICTION_MAJOR: -12,
    COMBO_USEFUL: 5,
    COMBO_STRONG: 10,
    COMBO_DISTINCTIVE: 15
};

const CARE_LEVELS = {
    ROUTINE: 0,
    SOON: 1,
    PROMPT: 2,
    URGENT: 3
};

// ==========================================================
// TEST DATABASE
// ==========================================================

const tests = {

    // ======================================================
    // SYMPTOM ANALYSIS
    // ======================================================

    symptom: {
        name: "Symptom Analysis",

        questions: [

            // ==================================================
            // 1. REASON FOR VISIT
            // ==================================================

            {
                id: "mainConcerns",
                type: "multiple",
                category: "Getting Started",
                question: "What brought you here today?",
                explanation: "Select everything you have noticed.",
                answers: [
                    "Blurry or unclear vision",
                    "A change in my vision",
                    "A missing, dark, or blocked area of vision",
                    "Double vision",
                    "Flashes or floaters",
                    "Eye discomfort or pain",
                    "Dry, burning, gritty, or itchy eyes",
                    "Redness or a change in how my eye looks",
                    "Eyelid or eyelash problem",
                    "Watering or discharge",
                    "Reading or focusing problems",
                    "Light sensitivity, glare, halos, or night-vision problems",
                    "Recent eye injury or exposure",
                    "Another eye concern",
                    "I'm not sure — I'd like a full screening"
                ]
            },

            {
                id: "overallEye",
                category: "Getting Started",
                question: "Is one eye bothering you more than the other overall?",
                explanation: "",
                answers: [
                    "Right eye",
                    "Left eye",
                    "Both about the same",
                    "Different problems are happening in each eye",
                    "I can't tell",
                    "I don't currently have an eye-specific symptom"
                ]
            },


            // ==================================================
            // 2. BLURRY VISION
            // ==================================================

            {
                id: "blurredVision",
                category: "Blurry Vision",
                question: "Have you noticed blurry, hazy, or less-clear vision?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["Blurry or unclear vision", "A change in my vision", "Reading or focusing problems", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "blurEye",
                category: "Blurry Vision",
                question: "Which eye has blurry or unclear vision?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "I'm not sure"],
                showIf: { questionId: "blurredVision", answers: YES_SOMETIMES }
            },

            {
                id: "blurWorseEye",
                category: "Blurry Vision",
                question: "Is the blur worse in one eye?",
                explanation: "",
                answers: ["Worse in the right eye", "Worse in the left eye", "About the same", "It varies", "I'm not sure"],
                showIf: { questionId: "blurEye", answers: ["Both eyes"] }
            },

            {
                id: "blurDistance",
                type: "multiple",
                category: "Blurry Vision",
                question: "At what distances do you notice the blur?",
                explanation: "Select everything that applies.",
                answers: [
                    "Very close up",
                    "Reading or phone distance",
                    "Computer or intermediate distance",
                    "Far away",
                    "At all distances",
                    "It varies",
                    "I'm not sure"
                ],
                showIf: { questionId: "blurredVision", answers: YES_SOMETIMES }
            },

            {
                id: "blurOnset",
                category: "Blurry Vision",
                question: "How did the blur begin?",
                explanation: "",
                answers: ["Suddenly", "Gradually", "I've had it for a long time", "I'm not sure"],
                showIf: { questionId: "blurredVision", answers: YES_SOMETIMES }
            },

            {
                id: "blurSpeed",
                category: "Blurry Vision",
                question: "About how quickly did the change happen?",
                explanation: "",
                answers: ["Almost immediately", "Over minutes", "Over several hours", "Over a day or two", "I'm not sure"],
                showIf: { questionId: "blurOnset", answers: ["Suddenly"] }
            },

            {
                id: "blurDuration",
                category: "Blurry Vision",
                question: "When did you first notice the blur?",
                explanation: "",
                answers: [
                    "Today",
                    "Within the past few days",
                    "Within the past few weeks",
                    "Within the past few months",
                    "More than a few months ago",
                    "I've had it for years",
                    "I'm not sure"
                ],
                showIf: { questionId: "blurredVision", answers: YES_SOMETIMES }
            },

            {
                id: "blurFrequency",
                category: "Blurry Vision",
                question: "Is the blur constant or does it come and go?",
                explanation: "",
                answers: ["Constant", "Comes and goes", "Mostly during certain activities", "I'm not sure"],
                showIf: { questionId: "blurredVision", answers: YES_SOMETIMES }
            },

            {
                id: "blurProgression",
                category: "Blurry Vision",
                question: "Has the blur changed since you first noticed it?",
                explanation: "",
                answers: ["Getting worse", "Getting better", "About the same", "It varies", "I'm not sure"],
                showIf: { questionId: "blurredVision", answers: YES_SOMETIMES }
            },

            {
                id: "blurTriggers",
                type: "multiple",
                category: "Blurry Vision",
                question: "When is the blur most noticeable?",
                explanation: "Select everything that applies.",
                answers: [
                    "When I first wake up",
                    "Later in the day",
                    "When I'm tired",
                    "While reading",
                    "During computer or phone use",
                    "While driving",
                    "At night",
                    "In bright light",
                    "While wearing contact lenses",
                    "After removing contact lenses",
                    "No clear pattern",
                    "I'm not sure"
                ],
                showIf: { questionId: "blurredVision", answers: YES_SOMETIMES }
            },

            {
                id: "blurRelief",
                type: "multiple",
                category: "Blurry Vision",
                question: "What makes the blur clearer?",
                explanation: "Select everything that applies.",
                answers: [
                    "Blinking",
                    "Squinting",
                    "Resting my eyes",
                    "Closing one eye",
                    "Wearing my glasses",
                    "Removing my contact lenses",
                    "Using lubricating or artificial tears",
                    "Changing viewing distance",
                    "Nothing I've noticed",
                    "I'm not sure"
                ],
                showIf: { questionId: "blurredVision", answers: YES_SOMETIMES }
            },


            // ==================================================
            // 3. DISTORTED / CHANGED VISION
            // ==================================================

            {
                id: "distortedVision",
                category: "Changed Vision",
                question: "Do straight lines or objects ever look bent, wavy, warped, or distorted?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["A change in my vision", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "distortionEye",
                category: "Changed Vision",
                question: "Which eye has the distortion?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "I'm not sure"],
                showIf: { questionId: "distortedVision", answers: YES_SOMETIMES }
            },

            {
                id: "distortionWorseEye",
                category: "Changed Vision",
                question: "Is the distortion worse in one eye?",
                explanation: "",
                answers: ["Worse in the right eye", "Worse in the left eye", "About the same", "I'm not sure"],
                showIf: { questionId: "distortionEye", answers: ["Both eyes"] }
            },

            {
                id: "distortionArea",
                category: "Changed Vision",
                question: "Where in your vision do you notice it?",
                explanation: "",
                answers: [
                    "Center",
                    "Near the center",
                    "Side or peripheral area",
                    "One specific spot",
                    "Across a larger area",
                    "It moves or varies",
                    "I'm not sure"
                ],
                showIf: { questionId: "distortedVision", answers: YES_SOMETIMES }
            },

            {
                id: "distortionOnset",
                category: "Changed Vision",
                question: "How did the distortion begin?",
                explanation: "",
                answers: ["Suddenly", "Gradually", "I've had it for a long time", "I'm not sure"],
                showIf: { questionId: "distortedVision", answers: YES_SOMETIMES }
            },

            {
                id: "distortionFrequency",
                category: "Changed Vision",
                question: "Is the distortion constant or does it come and go?",
                explanation: "",
                answers: ["Constant", "Comes and goes", "Only during certain activities", "I'm not sure"],
                showIf: { questionId: "distortedVision", answers: YES_SOMETIMES }
            },

            {
                id: "sizeShapeChange",
                category: "Changed Vision",
                question: "Does anything look unusually larger, smaller, stretched, or differently shaped through one eye?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["A change in my vision", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "sizeShapeEye",
                category: "Changed Vision",
                question: "Which eye seems different?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "I'm not sure"],
                showIf: { questionId: "sizeShapeChange", answers: YES_SOMETIMES }
            },

            {
                id: "colorChange",
                category: "Color & Contrast",
                question: "Have colors started looking faded, dull, washed out, or different than usual?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["A change in my vision", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "colorEye",
                category: "Color & Contrast",
                question: "Which eye seems affected by the color change?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "I'm not sure"],
                showIf: { questionId: "colorChange", answers: YES_SOMETIMES }
            },

            {
                id: "dimVision",
                category: "Color & Contrast",
                question: "Does the vision in either eye seem dimmer than the other?",
                explanation: "",
                answers: ["Right eye seems dimmer", "Left eye seems dimmer", "Both seem dimmer than before", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["A change in my vision", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "contrastDifficulty",
                category: "Color & Contrast",
                question: "Is it harder to see objects when they do not stand out strongly from the background?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["A change in my vision", "I'm not sure — I'd like a full screening"] }
                ]
            },


            // ==================================================
            // 4. DOUBLE VISION
            // ==================================================

            {
                id: "doubleVision",
                category: "Double Vision",
                question: "Do you ever see two images when there is only one object?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["Double vision", "A change in my vision", "Reading or focusing problems", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "doubleCoverRight",
                category: "Double Vision",
                question: "What happens when you cover your right eye?",
                explanation: "",
                answers: [
                    "The doubling disappears",
                    "I still see double through my left eye",
                    "It changes but does not completely disappear",
                    "I haven't tried",
                    "I'm not sure"
                ],
                showIf: { questionId: "doubleVision", answers: YES_SOMETIMES }
            },

            {
                id: "doubleCoverLeft",
                category: "Double Vision",
                question: "What happens when you cover your left eye?",
                explanation: "",
                answers: [
                    "The doubling disappears",
                    "I still see double through my right eye",
                    "It changes but does not completely disappear",
                    "I haven't tried",
                    "I'm not sure"
                ],
                showIf: { questionId: "doubleVision", answers: YES_SOMETIMES }
            },

            {
                id: "doubleImageDirection",
                category: "Double Vision",
                question: "How do the two images usually appear?",
                explanation: "",
                answers: [
                    "Side by side",
                    "One above the other",
                    "Diagonal",
                    "Partially overlapping",
                    "One looks like a faint copy or shadow",
                    "It varies",
                    "I'm not sure"
                ],
                showIf: { questionId: "doubleVision", answers: YES_SOMETIMES }
            },

            {
                id: "doubleDistance",
                type: "multiple",
                category: "Double Vision",
                question: "At what distances do you notice it?",
                explanation: "Select everything that applies.",
                answers: [
                    "Reading or close up",
                    "Computer or intermediate distance",
                    "Far away",
                    "All distances",
                    "It varies",
                    "I'm not sure"
                ],
                showIf: { questionId: "doubleVision", answers: YES_SOMETIMES }
            },

            {
                id: "doubleDirectionTrigger",
                type: "multiple",
                category: "Double Vision",
                question: "Does looking in a certain direction make it worse?",
                explanation: "Select any directions that apply.",
                answers: ["Looking right", "Looking left", "Looking up", "Looking down", "No clear direction", "I'm not sure"],
                showIf: { questionId: "doubleVision", answers: YES_SOMETIMES }
            },

            {
                id: "doubleOnset",
                category: "Double Vision",
                question: "How did the double vision begin?",
                explanation: "",
                answers: ["Suddenly", "Gradually", "I've had it for a long time", "I'm not sure"],
                showIf: { questionId: "doubleVision", answers: YES_SOMETIMES }
            },

            {
                id: "doubleFrequency",
                category: "Double Vision",
                question: "How often does it happen?",
                explanation: "",
                answers: ["Constantly", "Frequently", "Occasionally", "Rarely", "Only under certain circumstances", "I'm not sure"],
                showIf: { questionId: "doubleVision", answers: YES_SOMETIMES }
            },

            {
                id: "doubleAssociated",
                type: "multiple",
                category: "Double Vision",
                question: "What happens around the same time as the double vision?",
                explanation: "Select everything that applies.",
                answers: [
                    "Drooping eyelid",
                    "Eye pain",
                    "Headache",
                    "Dizziness",
                    "Nausea",
                    "Difficulty focusing",
                    "Blurry vision",
                    "Eye strain or tired eyes",
                    "One eye seems to turn or drift",
                    "None of these",
                    "I'm not sure"
                ],
                showIf: { questionId: "doubleVision", answers: YES_SOMETIMES }
            },


            // ==================================================
            // 5. VISUAL FIELD CHANGES
            // ==================================================

            {
                id: "missingVision",
                category: "Field of Vision",
                question: "Does any part of your vision seem missing, dark, shadowed, blocked, or unusually difficult to see through?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["A missing, dark, or blocked area of vision", "A change in my vision", "Flashes or floaters", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "missingEye",
                category: "Field of Vision",
                question: "Which eye has the missing or shadowed area?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "I'm not sure"],
                showIf: { questionId: "missingVision", answers: YES_SOMETIMES }
            },

            {
                id: "missingArea",
                type: "multiple",
                category: "Field of Vision",
                question: "Where is the affected area?",
                explanation: "Select everything that applies.",
                answers: [
                    "Center",
                    "Side or peripheral vision",
                    "Upper area",
                    "Lower area",
                    "A specific spot",
                    "A larger shadowed area",
                    "A curtain-like area",
                    "I'm not sure"
                ],
                showIf: { questionId: "missingVision", answers: YES_SOMETIMES }
            },

            {
                id: "missingOnset",
                category: "Field of Vision",
                question: "How did this change begin?",
                explanation: "",
                answers: ["Suddenly", "Gradually", "I've had it for a long time", "I'm not sure"],
                showIf: { questionId: "missingVision", answers: YES_SOMETIMES }
            },

            {
                id: "missingProgression",
                category: "Field of Vision",
                question: "Has the affected area changed?",
                explanation: "",
                answers: ["Getting larger or worse", "Getting smaller or better", "About the same", "It comes and goes", "I'm not sure"],
                showIf: { questionId: "missingVision", answers: YES_SOMETIMES }
            },


            // ==================================================
            // 6. FLASHES & FLOATERS
            // ==================================================

            {
                id: "floaters",
                category: "Floaters",
                question: "Do you see spots, threads, squiggly lines, or cobweb-like shapes that seem to float through your vision?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["Flashes or floaters", "A change in my vision", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "floatersEye",
                category: "Floaters",
                question: "Which eye has the floaters?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "I'm not sure"],
                showIf: { questionId: "floaters", answers: YES_SOMETIMES }
            },

            {
                id: "floatersNew",
                category: "Floaters",
                question: "Are the floaters new?",
                explanation: "",
                answers: ["Yes, they are new", "No, I've had them for a long time", "I have old floaters but noticed new ones", "I'm not sure"],
                showIf: { questionId: "floaters", answers: YES_SOMETIMES }
            },

            {
                id: "floatersIncrease",
                category: "Floaters",
                question: "Have you suddenly noticed many more floaters than usual?",
                explanation: "",
                answers: ["Yes", "No", "I'm not sure"],
                showIf: { questionId: "floaters", answers: YES_SOMETIMES }
            },

            {
                id: "flashes",
                category: "Flashes",
                question: "Do you see flashes, flickers, streaks, or bursts of light that are not coming from an outside light source?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["Flashes or floaters", "A change in my vision", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "flashesEye",
                category: "Flashes",
                question: "Which eye has the flashes?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "I'm not sure"],
                showIf: { questionId: "flashes", answers: YES_SOMETIMES }
            },

            {
                id: "flashesNew",
                category: "Flashes",
                question: "Are the flashes new or changing?",
                explanation: "",
                answers: ["Yes, they are new", "They are not new but have changed", "No, I've had them for a long time", "I'm not sure"],
                showIf: { questionId: "flashes", answers: YES_SOMETIMES }
            },

            {
                id: "flashesArea",
                category: "Flashes",
                question: "Where do you usually notice the flashes?",
                explanation: "",
                answers: ["Toward the side of my vision", "Near the center", "Across a larger area", "It varies", "I'm not sure"],
                showIf: { questionId: "flashes", answers: YES_SOMETIMES }
            },


            // ==================================================
            // 7. LIGHT / NIGHT VISION
            // ==================================================

            {
                id: "lightProblems",
                category: "Light & Night Vision",
                question: "Have you noticed problems with light, glare, halos, or seeing at night?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["Light sensitivity, glare, halos, or night-vision problems", "A change in my vision", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "lightProblemTypes",
                type: "multiple",
                category: "Light & Night Vision",
                question: "What have you noticed?",
                explanation: "Select everything that applies.",
                answers: [
                    "Bright light feels uncomfortable",
                    "Too much glare",
                    "Halos around lights",
                    "Starbursts around lights",
                    "Difficulty seeing at night",
                    "Slow adjustment from bright to dark",
                    "Slow adjustment from dark to bright",
                    "I'm not sure"
                ],
                showIf: { questionId: "lightProblems", answers: YES_SOMETIMES }
            },

            {
                id: "lightEye",
                category: "Light & Night Vision",
                question: "Is the light or night-vision problem worse in one eye?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both about the same", "I can't tell", "It depends on the symptom"],
                showIf: { questionId: "lightProblems", answers: YES_SOMETIMES }
            },

            {
                id: "lightOnset",
                category: "Light & Night Vision",
                question: "Is this a change from how you used to see?",
                explanation: "",
                answers: ["Yes", "No, it has always been this way", "It has gradually changed", "I'm not sure"],
                showIf: { questionId: "lightProblems", answers: YES_SOMETIMES }
            },


            // ==================================================
            // 8. READING / FOCUSING
            // ==================================================

            {
                id: "nearWorkProblems",
                category: "Reading & Focusing",
                question: "Do reading or screens cause vision problems?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["Reading or focusing problems", "Blurry or unclear vision", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "nearWorkTypes",
                type: "multiple",
                category: "Reading & Focusing",
                question: "What do you notice during close-up work?",
                explanation: "Select everything that applies.",
                answers: [
                    "Blurry vision",
                    "Trouble keeping things in focus",
                    "Double vision",
                    "Words seem to move or shift",
                    "I lose my place while reading",
                    "My eyes feel strained or tired",
                    "I need frequent breaks",
                    "I close or cover one eye",
                    "I move reading material farther away",
                    "I move reading material closer",
                    "I'm not sure"
                ],
                showIf: { questionId: "nearWorkProblems", answers: YES_SOMETIMES }
            },

            {
                id: "nearWorkEye",
                category: "Reading & Focusing",
                question: "Does one eye seem to cause more trouble during close-up work?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both about the same", "I can't tell"],
                showIf: { questionId: "nearWorkProblems", answers: YES_SOMETIMES }
            },

            {
                id: "refocusProblem",
                category: "Reading & Focusing",
                question: "Does your vision take time to refocus when you look from near to far or far to near?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIf: { questionId: "nearWorkProblems", answers: YES_SOMETIMES }
            },


            // ==================================================
            // 9. EYE DISCOMFORT / SURFACE SENSATIONS
            // ==================================================

            {
                id: "eyeDiscomfort",
                category: "Eye Comfort",
                question: "Have you noticed discomfort in or around your eyes?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["Eye discomfort or pain", "Dry, burning, gritty, or itchy eyes", "Another eye concern", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "discomfortTypes",
                type: "multiple",
                category: "Eye Comfort",
                question: "What does the discomfort feel like?",
                explanation: "Select everything that applies.",
                answers: [
                    "Burning or stinging",
                    "Dry or gritty",
                    "Itching",
                    "Feels like something is in my eye",
                    "Sore or tender",
                    "Aching",
                    "Pressure or fullness",
                    "Sharp pain",
                    "Throbbing",
                    "Tired or strained",
                    "I'm not sure"
                ],
                showIf: { questionId: "eyeDiscomfort", answers: YES_SOMETIMES }
            },

            // laterality by selected sensation
            ...[
                ["Burning or stinging", "burningEye", "Where do you notice the burning or stinging?"],
                ["Dry or gritty", "grittyEye", "Where do you notice the dry or gritty feeling?"],
                ["Itching", "itchEye", "Where do you notice the itching?"],
                ["Feels like something is in my eye", "foreignBodyEye", "Which eye feels like something is in it?"],
                ["Aching", "acheEye", "Which eye has the aching feeling?"],
                ["Pressure or fullness", "pressureEye", "Which eye has the pressure or fullness?"],
                ["Sharp pain", "sharpPainEye", "Which eye has the sharp pain?"],
                ["Tired or strained", "strainEye", "Which eye feels tired or strained?"]
            ].map(([selectedAnswer, id, question]) => ({
                id,
                category: "Eye Comfort",
                question,
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "I'm not sure"],
                showIfSelected: { questionId: "discomfortTypes", answers: [selectedAnswer] }
            })),

            {
                id: "discomfortFrequency",
                category: "Eye Comfort",
                question: "How often do you notice the discomfort?",
                explanation: "",
                answers: ["Most or all of the time", "Frequently", "Comes and goes", "Only during certain activities", "Rarely", "I'm not sure"],
                showIf: { questionId: "eyeDiscomfort", answers: YES_SOMETIMES }
            },

            {
                id: "drynessTriggers",
                type: "multiple",
                category: "Dryness & Irritation",
                question: "When is the burning, dryness, or gritty feeling most noticeable?",
                explanation: "Select everything that applies.",
                answers: [
                    "After reading or screen use",
                    "While wearing contact lenses",
                    "In air conditioning or around fans",
                    "Outdoors or in wind",
                    "When I first wake up",
                    "Later in the day",
                    "When I'm tired",
                    "No clear pattern",
                    "I'm not sure"
                ],
                showIfSelected: { questionId: "discomfortTypes", answers: ["Burning or stinging", "Dry or gritty"] }
            },

            {
                id: "drynessWatering",
                category: "Dryness & Irritation",
                question: "Do your eyes also water or tear more than usual?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfSelected: { questionId: "discomfortTypes", answers: ["Burning or stinging", "Dry or gritty"] }
            },

            {
                id: "itchTriggers",
                type: "multiple",
                category: "Itching",
                question: "When is the itching most noticeable?",
                explanation: "Select everything that applies.",
                answers: ["Outdoors", "Around pets", "Around dust", "During certain seasons", "While wearing contact lenses", "When I wake up", "No clear pattern", "I'm not sure"],
                showIfSelected: { questionId: "discomfortTypes", answers: ["Itching"] }
            },

            {
                id: "foreignBodyEvent",
                category: "Eye Irritation",
                question: "Did anything happen shortly before the foreign-body feeling started?",
                explanation: "",
                answers: [
                    "Something may have entered my eye",
                    "I rubbed or scratched my eye",
                    "It started while wearing contact lenses",
                    "I woke up with it",
                    "Nothing I can think of",
                    "I'm not sure"
                ],
                showIfSelected: { questionId: "discomfortTypes", answers: ["Feels like something is in my eye"] }
            },


            // ==================================================
            // 10. PAIN / PRESSURE
            // ==================================================

            {
                id: "painSeverity",
                category: "Eye Pain",
                question: "How strong is the pain or pressure?",
                explanation: "",
                answers: ["Mild", "Moderate", "Severe", "It varies", "I'm not sure"],
                showIfSelected: { questionId: "discomfortTypes", answers: ["Aching", "Pressure or fullness", "Sharp pain", "Throbbing", "Sore or tender"] }
            },

            {
                id: "painLocation",
                category: "Eye Pain",
                question: "Where does the pain or pressure feel located?",
                explanation: "",
                answers: ["On the surface of the eye", "Inside or behind the eye", "Around the eye", "In the eyelid", "Hard to tell", "I'm not sure"],
                showIfSelected: { questionId: "discomfortTypes", answers: ["Aching", "Pressure or fullness", "Sharp pain", "Throbbing", "Sore or tender"] }
            },

            {
                id: "painOnset",
                category: "Eye Pain",
                question: "How did the pain or pressure begin?",
                explanation: "",
                answers: ["Suddenly", "Gradually", "I've had it for a long time", "I'm not sure"],
                showIfSelected: { questionId: "discomfortTypes", answers: ["Aching", "Pressure or fullness", "Sharp pain", "Throbbing", "Sore or tender"] }
            },

            {
                id: "painMovement",
                category: "Eye Pain",
                question: "Does moving your eyes make the pain worse?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfSelected: { questionId: "discomfortTypes", answers: ["Aching", "Pressure or fullness", "Sharp pain", "Throbbing"] }
            },

            {
                id: "painAssociated",
                type: "multiple",
                category: "Eye Pain",
                question: "What happens around the same time as the pain?",
                explanation: "Select everything that applies.",
                answers: [
                    "Vision change",
                    "Redness",
                    "Watering",
                    "Light sensitivity",
                    "Headache",
                    "Nausea or vomiting",
                    "Halos around lights",
                    "None of these",
                    "I'm not sure"
                ],
                showIfSelected: { questionId: "discomfortTypes", answers: ["Aching", "Pressure or fullness", "Sharp pain", "Throbbing"] }
            },


            // ==================================================
            // 11. REDNESS / APPEARANCE
            // ==================================================

            {
                id: "appearanceChange",
                category: "Eye Appearance",
                question: "Have you noticed redness or another visible change in either eye?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["Redness or a change in how my eye looks", "Another eye concern", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "appearanceTypes",
                type: "multiple",
                category: "Eye Appearance",
                question: "What have you noticed?",
                explanation: "Select everything that applies.",
                answers: [
                    "Redness",
                    "Cloudy or hazy appearance",
                    "Visible spot, mark, or growth",
                    "Pupils look different from each other",
                    "One eye looks more prominent",
                    "Eye looks unusually sunken",
                    "Other visible change",
                    "I'm not sure"
                ],
                showIf: { questionId: "appearanceChange", answers: YES_SOMETIMES }
            },

            {
                id: "rednessEye",
                category: "Eye Redness",
                question: "Which eye is red?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "I'm not sure"],
                showIfSelected: { questionId: "appearanceTypes", answers: ["Redness"] }
            },

            {
                id: "rednessArea",
                category: "Eye Redness",
                question: "Where is the redness most noticeable?",
                explanation: "",
                answers: [
                    "Most of the white of the eye",
                    "One specific patch",
                    "Mainly around the colored part of the eye",
                    "Mostly along the eyelids or lashes",
                    "I'm not sure"
                ],
                showIfSelected: { questionId: "appearanceTypes", answers: ["Redness"] }
            },

            {
                id: "rednessOnset",
                category: "Eye Redness",
                question: "How did the redness begin?",
                explanation: "",
                answers: ["Suddenly", "Gradually", "It keeps returning", "I've had it for a long time", "I'm not sure"],
                showIfSelected: { questionId: "appearanceTypes", answers: ["Redness"] }
            },


            // ==================================================
            // 12. EYELIDS / EYELASHES
            // ==================================================

            {
                id: "lidProblems",
                category: "Eyelids & Lashes",
                question: "Have you noticed a change involving your eyelids or eyelashes?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["Eyelid or eyelash problem", "Redness or a change in how my eye looks", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "lidProblemTypes",
                type: "multiple",
                category: "Eyelids & Lashes",
                question: "What have you noticed?",
                explanation: "Select everything that applies.",
                answers: [
                    "Eyelid bump",
                    "Eyelid swelling",
                    "Crusting along the lashes",
                    "Flaking around the lashes",
                    "Eyelids stuck together after waking",
                    "Drooping eyelid",
                    "Eyelid turning inward or outward",
                    "Eyelashes rubbing the eye",
                    "Eyelash loss",
                    "Frequent twitching",
                    "Eyelid redness",
                    "Difficulty fully opening or closing the eye",
                    "I'm not sure"
                ],
                showIf: { questionId: "lidProblems", answers: YES_SOMETIMES }
            },

            {
                id: "lidSide",
                type: "multiple",
                category: "Eyelids & Lashes",
                question: "Which eyelid or eyelids are affected?",
                explanation: "Select everything that applies.",
                answers: ["Right upper lid", "Right lower lid", "Left upper lid", "Left lower lid", "Several eyelids", "I'm not sure"],
                showIf: { questionId: "lidProblems", answers: YES_SOMETIMES }
            },

            {
                id: "lidBumpTender",
                category: "Eyelid Bump",
                question: "Is the eyelid bump painful or tender?",
                explanation: "",
                answers: ["Yes", "A little", "No", "I'm not sure"],
                showIfSelected: { questionId: "lidProblemTypes", answers: ["Eyelid bump"] }
            },

            {
                id: "lidDroopTiming",
                category: "Drooping Eyelid",
                question: "Is the drooping eyelid new or changing?",
                explanation: "",
                answers: ["Yes, new", "It has changed", "No, longstanding", "I'm not sure"],
                showIfSelected: { questionId: "lidProblemTypes", answers: ["Drooping eyelid"] }
            },


            // ==================================================
            // 13. TEARS / DISCHARGE
            // ==================================================

            {
                id: "tearDischarge",
                category: "Tears & Discharge",
                question: "Have you noticed unusual watering, discharge, stickiness, or crusting?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["Watering or discharge", "Dry, burning, gritty, or itchy eyes", "Redness or a change in how my eye looks", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "tearDischargeTypes",
                type: "multiple",
                category: "Tears & Discharge",
                question: "What have you noticed?",
                explanation: "Select everything that applies.",
                answers: [
                    "Excessive watering",
                    "Clear watery discharge",
                    "Thick or mucus-like discharge",
                    "Yellow or greenish discharge",
                    "Sticky eyes",
                    "Crusting after sleep",
                    "I'm not sure"
                ],
                showIf: { questionId: "tearDischarge", answers: YES_SOMETIMES }
            },

            {
                id: "tearDischargeEye",
                category: "Tears & Discharge",
                question: "Which eye is affected?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "It started in one and moved to the other", "I'm not sure"],
                showIf: { questionId: "tearDischarge", answers: YES_SOMETIMES }
            },


            // ==================================================
            // 14. HEADACHE / RELATED SYMPTOMS
            // ==================================================

            {
                id: "headacheWithEyes",
                category: "Headache & Related Symptoms",
                question: "Do headaches occur with or around the time of your eye or vision symptoms?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I don't get headaches", "I'm not sure"]
            },

            {
                id: "headacheFeatures",
                type: "multiple",
                category: "Headache & Related Symptoms",
                question: "What do you notice with these headaches?",
                explanation: "Select everything that applies.",
                answers: [
                    "Nausea",
                    "Sensitivity to light",
                    "Sensitivity to sound",
                    "Flashing or shimmering lights",
                    "Zig-zag or moving visual patterns",
                    "Temporary blind or blurry spots",
                    "Pain around one eye",
                    "None of these",
                    "I'm not sure"
                ],
                showIf: { questionId: "headacheWithEyes", answers: YES_SOMETIMES }
            },


            // ==================================================
            // 15. OVERALL TIMING
            // ==================================================

            {
                id: "overallTiming",
                category: "About Your Symptoms",
                question: "When did the main problem that brought you here begin?",
                explanation: "",
                answers: ["Today", "Past few days", "Past few weeks", "Past few months", "Longer than a few months", "I'm not sure"]
            },

            {
                id: "overallProgression",
                category: "About Your Symptoms",
                question: "Overall, how have your symptoms changed?",
                explanation: "",
                answers: ["Getting better", "About the same", "Getting worse", "They come and go", "Different symptoms behave differently", "I'm not sure"]
            },


            // ==================================================
            // 16. GENERAL TRIGGERS / RELIEF
            // ==================================================

            {
                id: "generalTriggers",
                type: "multiple",
                category: "Triggers",
                question: "What seems to make your eye or vision symptoms worse?",
                explanation: "Select everything that applies.",
                answers: [
                    "Reading",
                    "Computer or phone use",
                    "Driving",
                    "Nighttime",
                    "Bright light",
                    "Dim light",
                    "Contact lenses",
                    "Outdoors",
                    "Wind, fans, or air conditioning",
                    "Dust, pollen, or allergens",
                    "Being tired or not sleeping enough",
                    "Physical activity",
                    "No obvious trigger",
                    "I'm not sure"
                ]
            },

            {
                id: "generalRelief",
                type: "multiple",
                category: "Triggers",
                question: "What seems to help?",
                explanation: "Select everything that applies.",
                answers: [
                    "Blinking",
                    "Resting my eyes",
                    "Closing my eyes",
                    "Removing contact lenses",
                    "Wearing glasses",
                    "Artificial tears or lubricating drops",
                    "Changing the lighting",
                    "Nothing obvious",
                    "I'm not sure"
                ]
            },


            // ==================================================
            // 17. GLASSES / CORRECTION
            // ==================================================

            {
                id: "correctionUse",
                type: "multiple",
                category: "Vision Correction",
                question: "What vision correction do you currently use?",
                explanation: "Select everything that applies.",
                answers: ["Glasses", "Contact lenses", "Reading glasses", "No vision correction", "I'm not sure"]
            },

            {
                id: "glassesAge",
                category: "Vision Correction",
                question: "About how old is your current glasses prescription?",
                explanation: "",
                answers: ["Less than 1 year", "1–2 years", "More than 2 years", "I don't know", "Not applicable"],
                showIfSelected: { questionId: "correctionUse", answers: ["Glasses", "Reading glasses"] }
            },

            {
                id: "correctionHelps",
                category: "Vision Correction",
                question: "Does your usual vision correction improve the problem?",
                explanation: "",
                answers: ["Yes, mostly or completely", "It helps somewhat", "No", "It varies", "I'm not sure"],
                showIfSelected: { questionId: "correctionUse", answers: ["Glasses", "Contact lenses", "Reading glasses"] }
            },


            // ==================================================
            // 18. CONTACT LENSES
            // ==================================================

            {
                id: "contactLensWear",
                category: "Contact Lenses",
                question: "Do you currently wear contact lenses?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No"],
                showIfSelected: { questionId: "correctionUse", answers: ["Contact lenses"] }
            },

            {
                id: "contactLensType",
                category: "Contact Lenses",
                question: "What type of contact lenses do you wear?",
                explanation: "",
                answers: ["Daily disposable soft lenses", "Reusable soft lenses", "Rigid or gas-permeable lenses", "Specialty lenses", "I'm not sure"],
                showIf: { questionId: "contactLensWear", answers: YES_SOMETIMES }
            },

            {
                id: "contactLensHabits",
                type: "multiple",
                category: "Contact Lenses",
                question: "Which of these describe your contact-lens use?",
                explanation: "Select everything that applies.",
                answers: [
                    "I sometimes nap in them",
                    "I sometimes sleep overnight in them",
                    "I sometimes shower or swim in them",
                    "I sometimes wear them longer than planned",
                    "I replace them on schedule",
                    "None of these",
                    "I'm not sure"
                ],
                showIf: { questionId: "contactLensWear", answers: YES_SOMETIMES }
            },

            {
                id: "contactLensSymptoms",
                category: "Contact Lenses",
                question: "Do your symptoms get worse while contact lenses are in?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIf: { questionId: "contactLensWear", answers: YES_SOMETIMES }
            },

            {
                id: "contactLensRemoval",
                category: "Contact Lenses",
                question: "Do symptoms improve after removing the lenses?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIf: { questionId: "contactLensWear", answers: YES_SOMETIMES }
            },


            // ==================================================
            // 19. PREVIOUS EYE CONDITIONS / EXAM FINDINGS
            // ==================================================

            {
                id: "previousEyeHistory",
                type: "multiple",
                category: "Eye History",
                question: "Has an eye doctor ever diagnosed or monitored you for any of these?",
                explanation: "Select everything that applies.",
                answers: [
                    "Nearsightedness, farsightedness, or astigmatism",
                    "Dry eye",
                    "Eye allergies",
                    "Blepharitis or eyelid inflammation",
                    "High eye pressure or glaucoma concern",
                    "Cataract or lens change",
                    "Retinal or macular finding",
                    "Corneal condition",
                    "Eye alignment or focusing problem",
                    "Diabetic eye disease",
                    "Another eye condition",
                    "Nothing that I know of",
                    "I don't remember"
                ]
            },


            // ==================================================
            // 20. SURGERY / PROCEDURES
            // ==================================================

            {
                id: "eyeProcedure",
                category: "Eye Procedures",
                question: "Have you ever had eye surgery or an eye procedure?",
                explanation: "",
                answers: ["Yes", "No", "I'm not sure"]
            },

            {
                id: "procedureEye",
                category: "Eye Procedures",
                question: "Which eye had the procedure?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "More than one procedure", "I'm not sure"],
                showIf: { questionId: "eyeProcedure", answers: ["Yes"] }
            },

            {
                id: "procedureTiming",
                category: "Eye Procedures",
                question: "Did your current symptoms begin after an eye procedure?",
                explanation: "",
                answers: ["Yes", "No", "Possibly", "I'm not sure"],
                showIf: { questionId: "eyeProcedure", answers: ["Yes"] }
            },


            // ==================================================
            // 21. INJURY / EXPOSURE
            // ==================================================

            {
                id: "recentEyeInjury",
                category: "Eye Injury & Exposure",
                question: "Was there a recent eye injury or exposure?",
                explanation: "",
                answers: ["Yes", "Possibly", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["Recent eye injury or exposure", "Another eye concern", "I'm not sure — I'd like a full screening"] }
                ]
            },

            {
                id: "injuryEye",
                category: "Eye Injury & Exposure",
                question: "Which eye was affected?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "I'm not sure"],
                showIf: { questionId: "recentEyeInjury", answers: ["Yes", "Possibly"] }
            },

            {
                id: "injuryType",
                type: "multiple",
                category: "Eye Injury & Exposure",
                question: "What happened?",
                explanation: "Select everything that applies.",
                answers: [
                    "Something hit the eye or face",
                    "The eye may have been scratched",
                    "Something may be stuck in the eye",
                    "Chemical or cleaning product exposure",
                    "Dust, dirt, or debris entered the eye",
                    "Bright light or UV exposure",
                    "Other",
                    "I'm not sure"
                ],
                showIf: { questionId: "recentEyeInjury", answers: ["Yes", "Possibly"] }
            },


            // ==================================================
            // 22. MEDICAL HISTORY
            // ==================================================

            {
                id: "medicalHistory",
                type: "multiple",
                category: "Health History",
                question: "Have you been diagnosed with any of the following?",
                explanation: "Select everything that applies. You may choose “Prefer not to answer.”",
                answers: [
                    "Diabetes or blood-sugar problems",
                    "High blood pressure",
                    "High cholesterol or cardiovascular disease",
                    "Thyroid condition",
                    "Autoimmune or inflammatory condition",
                    "Inflammatory arthritis",
                    "Migraine",
                    "Neurologic condition",
                    "History of stroke or TIA",
                    "Significant allergies",
                    "Asthma or atopic condition",
                    "Rosacea, eczema, or another inflammatory skin condition",
                    "Sinus problems",
                    "Sleep apnea",
                    "Blood or clotting disorder",
                    "Recent or recurrent significant infections",
                    "None of these",
                    "I'm not sure",
                    "Prefer not to answer"
                ]
            },

            {
                id: "diabetesDuration",
                category: "Health History",
                question: "How long have you had diabetes or blood-sugar problems?",
                explanation: "",
                answers: ["Less than 1 year", "1–5 years", "6–10 years", "More than 10 years", "I'm not sure"],
                showIfSelected: { questionId: "medicalHistory", answers: ["Diabetes or blood-sugar problems"] }
            },

            {
                id: "migraineHistory",
                category: "Health History",
                question: "Have you had visual symptoms with migraines before?",
                explanation: "",
                answers: ["Yes", "No", "I'm not sure"],
                showIfSelected: { questionId: "medicalHistory", answers: ["Migraine"] }
            },


            // ==================================================
            // 23. MEDICATIONS / EYE DROPS
            // ==================================================

            {
                id: "medicationContext",
                type: "multiple",
                category: "Medications",
                question: "Do any of these apply to you?",
                explanation: "Select everything that applies.",
                answers: [
                    "I use prescription eye drops",
                    "I regularly use allergy eye drops",
                    "I regularly use lubricating/artificial tears",
                    "I take steroid medication",
                    "I recently started or changed a prescription medication",
                    "I take other regular prescription medications",
                    "None of these",
                    "I'm not sure",
                    "Prefer not to answer"
                ]
            },


            // ==================================================
            // 24. RECENT ILLNESS
            // ==================================================

            {
                id: "recentIllness",
                category: "Recent Health Changes",
                question: "Have you had a recent illness or significant health change?",
                explanation: "",
                answers: ["Yes", "Possibly", "No", "I'm not sure"]
            },

            {
                id: "illnessRelation",
                category: "Recent Health Changes",
                question: "Did your eye symptoms begin around the same time?",
                explanation: "",
                answers: ["Yes", "Before the illness", "After the illness", "No clear relationship", "I'm not sure"],
                showIf: { questionId: "recentIllness", answers: ["Yes", "Possibly"] }
            },


            // ==================================================
            // 25. FAMILY HISTORY
            // ==================================================

            {
                id: "familyEyeHistory",
                type: "multiple",
                category: "Family Eye History",
                question: "Do close family members have any of these eye conditions?",
                explanation: "Select everything you know applies.",
                answers: [
                    "Glaucoma",
                    "Macular degeneration",
                    "Retinal detachment or retinal disease",
                    "Keratoconus or corneal disease",
                    "Very strong nearsightedness",
                    "Inherited eye disease",
                    "Major vision loss of an unknown cause",
                    "Another eye condition",
                    "None that I know of",
                    "I'm not sure"
                ]
            },


            // ==================================================
            // 26. LIFESTYLE / ENVIRONMENT
            // ==================================================

            {
                id: "dailyHabits",
                type: "multiple",
                category: "Daily Life",
                question: "Which of these are part of your daily life?",
                explanation: "Select everything that applies.",
                answers: [
                    "Several hours of computer or phone use",
                    "Long periods of reading or close work",
                    "A lot of outdoor time",
                    "Work or hobbies around dust or debris",
                    "Work or hobbies around chemicals",
                    "Frequent driving at night",
                    "Frequent lack of sleep or eye fatigue",
                    "None of these",
                    "I'm not sure"
                ]
            },


            // ==================================================
            // 27. AGE / CONTEXT
            // ==================================================

            {
                id: "ageRange",
                category: "About You",
                question: "What is your age range?",
                explanation: "Age can affect which eye changes are more common.",
                answers: ["Under 18", "18–29", "30–39", "40–49", "50–59", "60–69", "70+", "Prefer not to answer"]
            },



            // ==================================================
            // FINAL AUDIT ADDITIONS
            // ==================================================

            {
                id: "blurBlinkSpecific",
                category: "Blurry Vision",
                question: "Does blinking make the blur clearer for a short time?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIf: { questionId: "blurredVision", answers: YES_SOMETIMES }
            },

            {
                id: "colorTiming",
                category: "Color & Contrast",
                question: "Has the color-vision difference always been present, or is it newer?",
                explanation: "",
                answers: [
                    "I've noticed it for as long as I can remember",
                    "It began in childhood",
                    "It developed later",
                    "It is new or recently changing",
                    "I'm not sure"
                ],
                showIf: { questionId: "colorChange", answers: YES_SOMETIMES }
            },

            {
                id: "fieldSameSideBothEyes",
                category: "Field of Vision",
                question: "Does the same side of your vision seem missing in both eyes?",
                explanation: "",
                answers: ["Yes", "No", "I haven't compared", "I'm not sure"],
                showIf: { questionId: "missingVision", answers: YES_SOMETIMES }
            },

            {
                id: "floaterAmount",
                category: "Floaters",
                question: "How would you describe the number of floaters compared with what is normal for you?",
                explanation: "",
                answers: [
                    "One or a few familiar floaters",
                    "A few new floaters",
                    "Many new floaters",
                    "A sudden shower or cloud of spots",
                    "I'm not sure"
                ],
                showIf: { questionId: "floaters", answers: YES_SOMETIMES }
            },

            {
                id: "floaterDrift",
                category: "Floaters",
                question: "Do the floaters move when your eyes move and then seem to drift afterward?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIf: { questionId: "floaters", answers: YES_SOMETIMES }
            },

            {
                id: "vitreousHaze",
                category: "Floaters",
                question: "Does your vision look as though you are seeing through smoke, haze, cobwebs, or many tiny spots?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "floaters", answers: YES_SOMETIMES },
                    { questionId: "mainConcerns", answers: ["A change in my vision"] }
                ]
            },

            {
                id: "vitreousHazeEye",
                category: "Floaters",
                question: "Which eye has the hazy or cobweb-like view?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "I'm not sure"],
                showIf: { questionId: "vitreousHaze", answers: YES_SOMETIMES }
            },

            {
                id: "nightProgression",
                category: "Light & Night Vision",
                question: "Has seeing in dim light always been difficult, or has it become harder over time?",
                explanation: "",
                answers: [
                    "It has always been difficult",
                    "It has gradually become harder",
                    "It became harder fairly recently",
                    "It varies",
                    "I'm not sure"
                ],
                showIfSelected: { questionId: "lightProblemTypes", answers: ["Difficulty seeing at night"] }
            },

            {
                id: "darkAdaptation",
                category: "Light & Night Vision",
                question: "Does it take your eyes unusually long to adjust when you move from bright light into darkness?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIf: { questionId: "lightProblems", answers: YES_SOMETIMES }
            },

            {
                id: "nearBlurAfterReading",
                category: "Reading & Focusing",
                question: "Does your near vision become blurrier after reading for a while?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIf: { questionId: "nearWorkProblems", answers: YES_SOMETIMES }
            },

            {
                id: "nearToFarRefocus",
                category: "Reading & Focusing",
                question: "After looking up from something close, does distance vision take time to clear?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIf: { questionId: "nearWorkProblems", answers: YES_SOMETIMES }
            },

            {
                id: "farToNearRefocus",
                category: "Reading & Focusing",
                question: "After looking far away, does near vision take time to clear?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIf: { questionId: "nearWorkProblems", answers: YES_SOMETIMES }
            },

            {
                id: "morningEyeOpeningPain",
                category: "Eye Comfort",
                question: "Is the discomfort especially noticeable when you first open your eyes after sleeping?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfSelected: { questionId: "discomfortTypes", answers: ["Sharp pain", "Feels like something is in my eye", "Sore or tender"] }
            },

            {
                id: "painTouch",
                category: "Eye Pain",
                question: "Does gentle pressure over the closed eyelid or around the eye make the pain worse?",
                explanation: "Do not press on an injured eye. If there was a recent injury, choose “I did not check.”",
                answers: ["Yes", "Sometimes", "No", "I did not check", "I'm not sure"],
                showIfSelected: { questionId: "discomfortTypes", answers: ["Aching", "Pressure or fullness", "Sharp pain", "Throbbing", "Sore or tender"] }
            },

            {
                id: "rednessSeverity",
                category: "Eye Redness",
                question: "How noticeable is the redness?",
                explanation: "",
                answers: ["Mild", "Moderate", "Very noticeable", "It varies", "I'm not sure"],
                showIfSelected: { questionId: "appearanceTypes", answers: ["Redness"] }
            },

            {
                id: "conjunctivalSwelling",
                category: "Eye Appearance",
                question: "Does the clear tissue over the white of the eye look puffy or swollen?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfSelected: { questionId: "appearanceTypes", answers: ["Redness", "Other visible change"] }
            },

            {
                id: "cornealCloudiness",
                category: "Eye Appearance",
                question: "Does the clear front surface of the eye look cloudy or hazy?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfSelected: { questionId: "appearanceTypes", answers: ["Cloudy or hazy appearance"] }
            },

            {
                id: "cornealCloudinessMorning",
                category: "Eye Appearance",
                question: "Is the cloudiness or haze worse when you first wake up?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIf: { questionId: "cornealCloudiness", answers: YES_SOMETIMES }
            },

            {
                id: "pupilDifferenceTiming",
                category: "Eye Appearance",
                question: "Has the pupil difference always been present, or is it new?",
                explanation: "",
                answers: [
                    "As long as I can remember",
                    "Longstanding but not lifelong",
                    "New or recently changing",
                    "I'm not sure"
                ],
                showIfSelected: { questionId: "appearanceTypes", answers: ["Pupils look different from each other"] }
            },

            {
                id: "lidBumpLocation",
                category: "Eyelid Bump",
                question: "Where is the eyelid bump?",
                explanation: "",
                answers: [
                    "Near the eyelashes",
                    "Deeper within the eyelid",
                    "Near the inner corner by my nose",
                    "Elsewhere on the eyelid",
                    "I'm not sure"
                ],
                showIfSelected: { questionId: "lidProblemTypes", answers: ["Eyelid bump"] }
            },

            {
                id: "lidBumpDuration",
                category: "Eyelid Bump",
                question: "How long has the eyelid bump been there?",
                explanation: "",
                answers: [
                    "Less than a few days",
                    "Several days to a few weeks",
                    "More than a few weeks",
                    "It keeps returning",
                    "I'm not sure"
                ],
                showIfSelected: { questionId: "lidProblemTypes", answers: ["Eyelid bump"] }
            },

            {
                id: "lidClosure",
                category: "Eyelids & Lashes",
                question: "Do you have difficulty fully closing either eye?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "No", "I'm not sure"],
                showIf: { questionId: "lidProblems", answers: YES_SOMETIMES }
            },

            {
                id: "ptosisFatigue",
                category: "Drooping Eyelid",
                question: "Does the drooping become more noticeable later in the day or when you are tired?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfSelected: { questionId: "lidProblemTypes", answers: ["Drooping eyelid"] }
            },

            {
                id: "twitchDistribution",
                category: "Eyelid Twitching",
                question: "When the eyelid moves, does any other part of your face move too?",
                explanation: "",
                answers: [
                    "Only one eyelid moves",
                    "Both eyelids may squeeze or blink",
                    "My eyelid and other muscles on the same side of my face move",
                    "I'm not sure"
                ],
                showIfSelected: { questionId: "lidProblemTypes", answers: ["Frequent twitching"] }
            },

            {
                id: "tearInnerCorner",
                category: "Tears & Discharge",
                question: "Is there pain, tenderness, or swelling near the inner corner of the eye beside the nose?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIf: { questionId: "tearDischarge", answers: YES_SOMETIMES }
            },

            {
                id: "tearingWithoutIrritation",
                category: "Tears & Discharge",
                question: "Does the eye water even when it does not feel dry, itchy, or irritated?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfSelected: { questionId: "tearDischargeTypes", answers: ["Excessive watering", "Clear watery discharge"] }
            },

            {
                id: "transientVisualObscurations",
                category: "Headache & Related Symptoms",
                question: "Do you have brief episodes where vision dims, grays out, or disappears for a few seconds?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIf: { questionId: "headacheWithEyes", answers: YES_SOMETIMES }
            },

            {
                id: "obscurationPosition",
                category: "Headache & Related Symptoms",
                question: "Do those brief vision changes happen with standing, bending, coughing, straining, or another position change?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIf: { questionId: "transientVisualObscurations", answers: YES_SOMETIMES }
            },

            {
                id: "pulsatileWhoosh",
                category: "Headache & Related Symptoms",
                question: "Do you hear a rhythmic whooshing or pulsing sound that seems to match your heartbeat?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIf: { questionId: "headacheWithEyes", answers: YES_SOMETIMES }
            },

            {
                id: "visualSnow",
                category: "Visual Phenomena",
                question: "Do you see a constant fine static or snow-like pattern across your vision?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["A change in my vision", "Another eye concern"] },
                    { questionId: "headacheWithEyes", answers: YES_SOMETIMES }
                ]
            },

            {
                id: "palinopsia",
                category: "Visual Phenomena",
                question: "Do images linger or repeat after the object is no longer there?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfAny: [
                    { questionId: "mainConcerns", answers: ["A change in my vision", "Another eye concern"] },
                    { questionId: "headacheWithEyes", answers: YES_SOMETIMES }
                ]
            },

            {
                id: "highRxDifference",
                category: "Vision Correction",
                question: "Is the prescription in one eye much stronger than the other?",
                explanation: "",
                answers: ["Yes", "No", "I'm not sure", "I do not know my prescription"],
                showIfSelected: { questionId: "correctionUse", answers: ["Glasses", "Contact lenses"] }
            },

            {
                id: "frequentRxChanges",
                category: "Vision Correction",
                question: "Have you needed unusually frequent prescription changes?",
                explanation: "",
                answers: ["Yes", "Sometimes", "No", "I'm not sure"],
                showIfSelected: { questionId: "correctionUse", answers: ["Glasses", "Contact lenses", "Reading glasses"] }
            },

            {
                id: "cataractSurgeryHistory",
                category: "Eye Procedures",
                question: "Have you had cataract surgery?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "No", "I'm not sure"]
            },

            {
                id: "postCataractClouding",
                category: "Eye Procedures",
                question: "After cataract surgery, did vision become clearer and later turn cloudy or blurry again?",
                explanation: "",
                answers: ["Yes", "No", "It varies", "I'm not sure"],
                showIf: { questionId: "cataractSurgeryHistory", answers: ["Right eye", "Left eye", "Both eyes"] }
            },

            {
                id: "previousPressure",
                category: "Eye History",
                question: "Has an eye-care professional ever told you that your eye pressure was higher than normal?",
                explanation: "",
                answers: ["Right eye", "Left eye", "Both eyes", "No", "I'm not sure"]
            },

            {
                id: "glaucomaSuspect",
                category: "Eye History",
                question: "Have you ever been told that you are a glaucoma suspect?",
                explanation: "",
                answers: ["Yes", "No", "I'm not sure"]
            },

            {
                id: "narrowAnglesHistory",
                category: "Eye History",
                question: "Have you ever been told that you have narrow drainage angles?",
                explanation: "",
                answers: ["Yes", "No", "I'm not sure"]
            },

            {
                id: "opticNerveHistory",
                category: "Eye History",
                question: "Has an eye doctor ever mentioned an unusual or swollen-looking optic nerve, optic-nerve drusen, or another optic-nerve finding?",
                explanation: "",
                answers: [
                    "Yes — swollen or elevated optic nerve",
                    "Yes — optic-nerve drusen",
                    "Yes — another optic-nerve finding",
                    "No",
                    "I'm not sure"
                ]
            },

            {
                id: "steroidExposure",
                category: "Medications",
                question: "Do you currently use, or have you used for an extended period, steroid medication?",
                explanation: "This can include prescribed eye drops, pills, inhalers, injections, creams, or other forms.",
                answers: ["Yes", "No", "I'm not sure", "Prefer not to answer"]
            },

            {
                id: "eyeMonitoringMedication",
                type: "multiple",
                category: "Medications",
                question: "Has a doctor told you that any medication you use requires eye monitoring?",
                explanation: "Select everything that applies.",
                answers: [
                    "Retina monitoring",
                    "Optic-nerve monitoring",
                    "Eye-pressure monitoring",
                    "Another type of eye monitoring",
                    "No",
                    "I'm not sure",
                    "Prefer not to answer"
                ]
            },

            {
                id: "immunosuppression",
                category: "Health History",
                question: "Are you immunosuppressed or taking medication that significantly lowers immune function?",
                explanation: "",
                answers: ["Yes", "No", "I'm not sure", "Prefer not to answer"]
            },

            {
                id: "geneticEyeCondition",
                category: "Health History",
                question: "Have you been diagnosed with a genetic or inherited condition that may affect the eyes?",
                explanation: "",
                answers: ["Yes", "No", "I'm not sure", "Prefer not to answer"]
            },

            {
                id: "similarFamilyVisionPattern",
                type: "multiple",
                category: "Family Eye History",
                question: "Does anyone in your biological family have a similar vision problem?",
                explanation: "Select anything you know applies.",
                answers: [
                    "Progressive night-vision difficulty",
                    "Progressive peripheral-vision loss",
                    "Progressive central-vision loss",
                    "Significant color-vision difficulty",
                    "Very high prescription",
                    "Retinal degeneration or dystrophy",
                    "Optic-nerve disorder",
                    "Eye condition present from birth",
                    "Another similar problem",
                    "No",
                    "I'm not sure"
                ]
            },

            {
                id: "symptomAgeOfOnset",
                category: "About You",
                question: "For your longest-standing vision problem, when did it first appear?",
                explanation: "",
                answers: [
                    "Since birth or as long as I can remember",
                    "Childhood",
                    "Teen years",
                    "Young adulthood",
                    "Later adulthood",
                    "Recently",
                    "I'm not sure",
                    "I do not have a longstanding vision problem"
                ]
            },

            {
                id: "transientMonocularLoss",
                category: "Final Check",
                question: "Have you had an episode where vision in one eye suddenly dimmed or disappeared and then returned?",
                explanation: "",
                answers: ["Yes", "No", "I'm not sure"]
            },

            // ==================================================
            // 28. FINAL CROSS-CHECK
            // ==================================================

            {
                id: "finalSafetyCheck",
                type: "multiple",
                category: "Final Check",
                question: "Before we finish, have you noticed any of these recently?",
                explanation: "Select everything that applies.",
                answers: [
                    "A sudden major change in vision",
                    "A new dark or curtain-like area in vision",
                    "A sudden increase in floaters",
                    "New flashes of light",
                    "Severe eye pain",
                    "Very red and watery eye with pain",
                    "Something stuck in the eye",
                    "None of these",
                    "I'm not sure"
                ]
            },

            {
                id: "additionalConcern",
                category: "Final Check",
                question: "Is there another eye concern we did not ask about?",
                explanation: "For this prototype, choose Yes or No. A free-text note can be added later.",
                answers: ["Yes", "No"]
            }

        ]
    },

    // ======================================================
    // FUTURE EYE HEALTH — COMPLETE v1.0
    // ======================================================

    future: {
        name: "Future Eye Health",
        questions: [
            {
                        "id": "futureAge",
                        "category": "Basic Profile",
                        "question": "What is your age range?",
                        "answers": [
                                    "Under 13",
                                    "13–17",
                                    "18–24",
                                    "25–39",
                                    "40–54",
                                    "55–64",
                                    "65–74",
                                    "75+",
                                    "Prefer not to say"
                        ]
            },
            {
                        "id": "futureCloserMonitoring",
                        "category": "Basic Profile",
                        "question": "Has an eye-care professional ever told you that your eyes should be monitored more closely than routine?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure"
                        ]
            },
            {
                        "id": "futureMonitoringReasons",
                        "category": "Basic Profile",
                        "question": "What were they monitoring?",
                        "type": "multiple",
                        "answers": [
                                    "Eye pressure or glaucoma risk",
                                    "Optic nerve appearance",
                                    "Retina or macula",
                                    "Retinal thinning, holes, tears, or lattice degeneration",
                                    "Corneal shape or thickness",
                                    "Cataract or lens changes",
                                    "Dry eye or ocular surface",
                                    "Eye alignment or amblyopia",
                                    "A genetic or inherited eye condition",
                                    "Another eye finding",
                                    "I don't remember"
                        ],
                        "showIf": {
                                    "questionId": "futureCloserMonitoring",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureCorrection",
                        "category": "Vision Correction & Prescription",
                        "question": "Do you currently use glasses or contact lenses?",
                        "answers": [
                                    "Glasses",
                                    "Contact lenses",
                                    "Both",
                                    "I have a prescription but rarely wear correction",
                                    "No",
                                    "I'm not sure",
                                    "Prefer not to say"
                        ]
            },
            {
                        "id": "futureCorrectionStart",
                        "category": "Vision Correction & Prescription",
                        "question": "How old were you when you first needed vision correction?",
                        "answers": [
                                    "Before age 6",
                                    "6–12",
                                    "13–17",
                                    "18–24",
                                    "25–39",
                                    "40+",
                                    "I don't know"
                        ],
                        "showIf": {
                                    "questionId": "futureCorrection",
                                    "answers": [
                                                "Glasses",
                                                "Contact lenses",
                                                "Both",
                                                "I have a prescription but rarely wear correction"
                                    ]
                        }
            },
            {
                        "id": "futureRxKnowledge",
                        "category": "Vision Correction & Prescription",
                        "question": "Do you know your current prescription?",
                        "answers": [
                                    "Yes — enter it",
                                    "I know part of it",
                                    "No",
                                    "Prefer not to say"
                        ],
                        "showIf": {
                                    "questionId": "futureCorrection",
                                    "answers": [
                                                "Glasses",
                                                "Contact lenses",
                                                "Both",
                                                "I have a prescription but rarely wear correction"
                                    ]
                        }
            },
            {
                        "id": "futurePrescription",
                        "type": "prescription",
                        "category": "Vision Correction & Prescription",
                        "question": "Enter the prescription information you know.",
                        "explanation": "Copy the values exactly as they appear on your prescription. Leave any field blank if you do not know it.",
                        "showIf": {
                                    "questionId": "futureRxKnowledge",
                                    "answers": [
                                                "Yes — enter it",
                                                "I know part of it"
                                    ]
                        }
            },
            {
                        "id": "futureRxChange",
                        "category": "Vision Correction & Prescription",
                        "question": "Has your prescription changed substantially over the past few years?",
                        "answers": [
                                    "Yes, it has become much stronger",
                                    "Yes, but only slightly",
                                    "It has been fairly stable",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureCorrection",
                                    "answers": [
                                                "Glasses",
                                                "Contact lenses",
                                                "Both",
                                                "I have a prescription but rarely wear correction"
                                    ]
                        }
            },
            {
                        "id": "futureRxDifference",
                        "category": "Vision Correction & Prescription",
                        "question": "Has one eye consistently had a much stronger prescription than the other?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureCorrection",
                                    "answers": [
                                                "Glasses",
                                                "Contact lenses",
                                                "Both",
                                                "I have a prescription but rarely wear correction"
                                    ]
                        }
            },
            {
                        "id": "futureLastExam",
                        "category": "Eye Exam History",
                        "question": "When was your last comprehensive eye examination?",
                        "answers": [
                                    "Within the past 6 months",
                                    "6–12 months ago",
                                    "1–2 years ago",
                                    "2–5 years ago",
                                    "More than 5 years ago",
                                    "I have never had one",
                                    "I'm not sure"
                        ]
            },
            {
                        "id": "futureExamSchedule",
                        "category": "Eye Exam History",
                        "question": "Do you usually receive comprehensive eye exams on the schedule recommended by your eye-care professional?",
                        "answers": [
                                    "Yes",
                                    "Usually",
                                    "Sometimes",
                                    "No",
                                    "I don't currently have an eye-care professional"
                        ]
            },
            {
                        "id": "futureDilated",
                        "category": "Eye Exam History",
                        "question": "Have you ever had your pupils dilated during an eye exam?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure"
                        ]
            },
            {
                        "id": "futureTests",
                        "category": "Eye Exam History",
                        "question": "Have you ever had any of these tests?",
                        "type": "multiple",
                        "answers": [
                                    "Eye-pressure measurement",
                                    "OCT scan",
                                    "Visual-field test",
                                    "Retinal photographs",
                                    "Corneal topography or tomography",
                                    "Pachymetry/corneal thickness",
                                    "Color-vision testing",
                                    "None that I know of",
                                    "I'm not sure"
                        ]
            },
            {
                        "id": "futureEyeDiagnosis",
                        "category": "Personal Eye History",
                        "question": "Have you ever been diagnosed with an eye condition?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure"
                        ]
            },
            {
                        "id": "futureEyeConditions",
                        "category": "Personal Eye History",
                        "question": "Which conditions have you been diagnosed with?",
                        "type": "multiple",
                        "answers": [
                                    "Myopia/nearsightedness",
                                    "Hyperopia/farsightedness",
                                    "Astigmatism",
                                    "Amblyopia",
                                    "Strabismus",
                                    "Dry eye",
                                    "Blepharitis or meibomian gland dysfunction",
                                    "Keratoconus",
                                    "Corneal dystrophy",
                                    "Cataract",
                                    "Glaucoma",
                                    "Ocular hypertension",
                                    "Retinal tear",
                                    "Retinal detachment",
                                    "Lattice degeneration",
                                    "Macular degeneration",
                                    "Diabetic retinopathy",
                                    "Uveitis",
                                    "Optic neuritis",
                                    "Optic neuropathy",
                                    "Color-vision deficiency",
                                    "Inherited retinal disease",
                                    "Another eye condition",
                                    "I don't remember"
                        ],
                        "showIf": {
                                    "questionId": "futureEyeDiagnosis",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureEyeConditionEye",
                        "category": "Personal Eye History",
                        "question": "Which eye was affected?",
                        "answers": [
                                    "Right",
                                    "Left",
                                    "Both",
                                    "Different conditions in each eye",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureEyeDiagnosis",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureSurgery",
                        "category": "Eye Surgery & Procedures",
                        "question": "Have you ever had eye surgery or an eye procedure?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure"
                        ]
            },
            {
                        "id": "futureProcedures",
                        "category": "Eye Surgery & Procedures",
                        "question": "Which procedures have you had?",
                        "type": "multiple",
                        "answers": [
                                    "LASIK",
                                    "PRK",
                                    "SMILE",
                                    "Cataract surgery",
                                    "YAG laser after cataract surgery",
                                    "Retinal laser",
                                    "Retinal-detachment surgery",
                                    "Vitrectomy",
                                    "Eye injections",
                                    "Glaucoma laser",
                                    "Glaucoma surgery",
                                    "Corneal cross-linking",
                                    "Corneal transplant",
                                    "Strabismus surgery",
                                    "Eyelid surgery",
                                    "Other",
                                    "I don't remember"
                        ],
                        "showIf": {
                                    "questionId": "futureSurgery",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureProcedureEye",
                        "category": "Eye Surgery & Procedures",
                        "question": "Which eye was treated?",
                        "answers": [
                                    "Right",
                                    "Left",
                                    "Both",
                                    "Different procedures in each eye",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureSurgery",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureProcedureFollowup",
                        "category": "Eye Surgery & Procedures",
                        "question": "Were you told you need long-term follow-up because of the procedure?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureSurgery",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureInjury",
                        "category": "Eye Injury History",
                        "question": "Have you ever had a significant eye injury?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure"
                        ]
            },
            {
                        "id": "futureInjuryEye",
                        "category": "Eye Injury History",
                        "question": "Which eye was injured?",
                        "answers": [
                                    "Right",
                                    "Left",
                                    "Both",
                                    "More than one injury",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureInjury",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureInjuryType",
                        "category": "Eye Injury History",
                        "question": "What type of injury occurred?",
                        "type": "multiple",
                        "answers": [
                                    "Blunt impact",
                                    "Scratch or abrasion",
                                    "Foreign object",
                                    "Penetrating injury",
                                    "Chemical exposure",
                                    "Burn or heat injury",
                                    "UV/welding exposure",
                                    "Sports injury",
                                    "Motor-vehicle accident",
                                    "Other",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureInjury",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureInjuryLasting",
                        "category": "Eye Injury History",
                        "question": "Did the injury cause any lasting vision or eye-health problem?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureInjury",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureFamilyHistory",
                        "category": "Family Eye History",
                        "question": "Does anyone in your biological family have a diagnosed eye condition?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure",
                                    "Prefer not to say"
                        ]
            },
            {
                        "id": "futureFamilyConditions",
                        "category": "Family Eye History",
                        "question": "Which eye conditions are known in your family?",
                        "type": "multiple",
                        "answers": [
                                    "Glaucoma",
                                    "Macular degeneration",
                                    "Retinal detachment",
                                    "Keratoconus",
                                    "Very strong myopia",
                                    "Cataracts at a relatively young age",
                                    "Amblyopia",
                                    "Strabismus",
                                    "Color-vision deficiency",
                                    "Retinitis pigmentosa",
                                    "Stargardt disease",
                                    "Another inherited retinal disease",
                                    "Optic nerve disease",
                                    "Corneal dystrophy",
                                    "Congenital glaucoma",
                                    "Congenital cataract",
                                    "Another eye condition",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureFamilyHistory",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureFamilyRelative",
                        "category": "Family Eye History",
                        "question": "Which relative or relatives had the condition(s)?",
                        "answers": [
                                    "Parent",
                                    "Sibling",
                                    "Child",
                                    "Grandparent",
                                    "Aunt/uncle",
                                    "Cousin",
                                    "More than one relative",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureFamilyHistory",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureMedical",
                        "category": "General Health Factors",
                        "question": "Have you ever been diagnosed with any of these medical conditions?",
                        "type": "multiple",
                        "answers": [
                                    "Diabetes",
                                    "Prediabetes",
                                    "High blood pressure",
                                    "High cholesterol",
                                    "Autoimmune disease",
                                    "Thyroid disease",
                                    "Neurologic disease",
                                    "Migraine",
                                    "Kidney disease",
                                    "Sleep apnea",
                                    "Blood-clotting disorder",
                                    "Sickle cell disease",
                                    "Cancer",
                                    "None of these",
                                    "I'm not sure",
                                    "Prefer not to say"
                        ]
            },
            {
                        "id": "futureDiabetesDuration",
                        "category": "General Health Factors",
                        "question": "About how long have you had diabetes or blood-sugar problems?",
                        "answers": [
                                    "Less than 1 year",
                                    "1–5 years",
                                    "6–10 years",
                                    "More than 10 years",
                                    "I'm not sure"
                        ],
                        "showIfAny": [
                                    {
                                                "questionId": "futureMedical",
                                                "answers": [
                                                            "Diabetes",
                                                            "Prediabetes"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "futureDiabetesEyes",
                        "category": "General Health Factors",
                        "question": "Have you ever been told diabetes has affected your eyes?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure"
                        ],
                        "showIfAny": [
                                    {
                                                "questionId": "futureMedical",
                                                "answers": [
                                                            "Diabetes"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "futureAutoimmune",
                        "category": "General Health Factors",
                        "question": "Which type of autoimmune or inflammatory condition do you have?",
                        "answers": [
                                    "Rheumatoid arthritis",
                                    "Lupus",
                                    "Sjögren syndrome",
                                    "Ankylosing spondylitis / HLA-B27-associated disease",
                                    "Inflammatory bowel disease",
                                    "Sarcoidosis",
                                    "Behçet disease",
                                    "Another",
                                    "I'm not sure",
                                    "Prefer not to say"
                        ],
                        "showIfAny": [
                                    {
                                                "questionId": "futureMedical",
                                                "answers": [
                                                            "Autoimmune disease"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "futureMeds",
                        "category": "Medications",
                        "question": "Do you currently take prescription medications regularly?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "Prefer not to say"
                        ]
            },
            {
                        "id": "futureMedsMonitoring",
                        "category": "Medications",
                        "question": "Do you know whether any of your medications require eye monitoring?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureMeds",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureMedicationTypes",
                        "category": "Medications",
                        "question": "Do you currently or previously use any of these?",
                        "type": "multiple",
                        "answers": [
                                    "Long-term steroid medication",
                                    "Hydroxychloroquine",
                                    "Amiodarone",
                                    "Topiramate",
                                    "Isotretinoin",
                                    "Tamoxifen",
                                    "Ethambutol",
                                    "Another medication I was told could affect my eyes",
                                    "None that I know of",
                                    "I'm not sure",
                                    "Prefer not to say"
                        ],
                        "showIf": {
                                    "questionId": "futureMeds",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureMedicationNames",
                        "type": "text",
                        "category": "Medications",
                        "question": "Enter any medication names you want included in your results.",
                        "explanation": "Optional. Do not include anything you prefer not to share.",
                        "showIf": {
                                    "questionId": "futureMeds",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureContactType",
                        "category": "Contact Lens Habits",
                        "question": "What type of contacts do you usually wear?",
                        "answers": [
                                    "Daily disposable",
                                    "Two-week replacement",
                                    "Monthly replacement",
                                    "Rigid gas permeable",
                                    "Scleral",
                                    "Orthokeratology",
                                    "Specialty lenses",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureCorrection",
                                    "answers": [
                                                "Contact lenses",
                                                "Both"
                                    ]
                        }
            },
            {
                        "id": "futureContactReplace",
                        "category": "Contact Lens Habits",
                        "question": "How often do you replace your lenses?",
                        "answers": [
                                    "Exactly as directed",
                                    "Sometimes later than recommended",
                                    "Often later than recommended",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureCorrection",
                                    "answers": [
                                                "Contact lenses",
                                                "Both"
                                    ]
                        }
            },
            {
                        "id": "futureContactSleep",
                        "category": "Contact Lens Habits",
                        "question": "Do you ever sleep or nap in your contacts?",
                        "answers": [
                                    "Never",
                                    "Rarely",
                                    "Sometimes",
                                    "Often",
                                    "They are specifically prescribed for overnight wear"
                        ],
                        "showIf": {
                                    "questionId": "futureCorrection",
                                    "answers": [
                                                "Contact lenses",
                                                "Both"
                                    ]
                        }
            },
            {
                        "id": "futureContactWater",
                        "category": "Contact Lens Habits",
                        "question": "Do you ever shower or swim while wearing contacts?",
                        "answers": [
                                    "Never",
                                    "Rarely",
                                    "Sometimes",
                                    "Often"
                        ],
                        "showIf": {
                                    "questionId": "futureCorrection",
                                    "answers": [
                                                "Contact lenses",
                                                "Both"
                                    ]
                        }
            },
            {
                        "id": "futureContactTap",
                        "category": "Contact Lens Habits",
                        "question": "Do your lenses ever come into contact with tap water?",
                        "answers": [
                                    "Never",
                                    "Rarely",
                                    "Sometimes",
                                    "Often",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureCorrection",
                                    "answers": [
                                                "Contact lenses",
                                                "Both"
                                    ]
                        }
            },
            {
                        "id": "futureContactClean",
                        "category": "Contact Lens Habits",
                        "question": "If your lenses are reusable, how do you clean them?",
                        "answers": [
                                    "Fresh disinfecting solution every time",
                                    "I sometimes reuse old solution",
                                    "Water",
                                    "Another method",
                                    "I use daily disposables",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureCorrection",
                                    "answers": [
                                                "Contact lenses",
                                                "Both"
                                    ]
                        }
            },
            {
                        "id": "futureContactCase",
                        "category": "Contact Lens Habits",
                        "question": "Do you replace your contact-lens case regularly?",
                        "answers": [
                                    "Yes",
                                    "Sometimes",
                                    "No",
                                    "I use daily disposables",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureCorrection",
                                    "answers": [
                                                "Contact lenses",
                                                "Both"
                                    ]
                        }
            },
            {
                        "id": "futureBackupGlasses",
                        "category": "Contact Lens Habits",
                        "question": "Do you have backup glasses available?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureCorrection",
                                    "answers": [
                                                "Contact lenses",
                                                "Both"
                                    ]
                        }
            },
            {
                        "id": "futureContactSymptoms",
                        "category": "Contact Lens Habits",
                        "question": "Have you ever continued wearing contacts despite significant redness, pain, or irritation?",
                        "answers": [
                                    "Never",
                                    "Once",
                                    "More than once",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureCorrection",
                                    "answers": [
                                                "Contact lenses",
                                                "Both"
                                    ]
                        }
            },
            {
                        "id": "futureOutdoorTime",
                        "category": "UV & Environmental Exposure",
                        "question": "How much time do you typically spend outdoors?",
                        "answers": [
                                    "Less than 30 minutes per day",
                                    "30 minutes–2 hours",
                                    "2–4 hours",
                                    "More than 4 hours",
                                    "It varies a lot"
                        ]
            },
            {
                        "id": "futureSunglasses",
                        "category": "UV & Environmental Exposure",
                        "question": "How often do you wear sunglasses outdoors in bright sunlight?",
                        "answers": [
                                    "Almost always",
                                    "Usually",
                                    "Sometimes",
                                    "Rarely",
                                    "Never"
                        ]
            },
            {
                        "id": "futureUVProtection",
                        "category": "UV & Environmental Exposure",
                        "question": "Do your sunglasses provide UV protection?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure",
                                    "I don't usually wear sunglasses"
                        ]
            },
            {
                        "id": "futureEnvironment",
                        "category": "UV & Environmental Exposure",
                        "question": "Are you regularly exposed to any of these?",
                        "type": "multiple",
                        "answers": [
                                    "Dust",
                                    "Wind",
                                    "Smoke",
                                    "Chemicals",
                                    "Welding or intense UV sources",
                                    "Very dry air",
                                    "Industrial debris",
                                    "None of these"
                        ]
            },
            {
                        "id": "futureScreenHours",
                        "category": "Screen & Near-Work Habits",
                        "question": "About how many hours per day do you spend on screens or sustained near work?",
                        "answers": [
                                    "Less than 2 hours",
                                    "2–4 hours",
                                    "4–6 hours",
                                    "6–8 hours",
                                    "More than 8 hours"
                        ]
            },
            {
                        "id": "futureBreaks",
                        "category": "Screen & Near-Work Habits",
                        "question": "During long screen sessions, how often do you take visual breaks?",
                        "answers": [
                                    "Frequently",
                                    "Sometimes",
                                    "Rarely",
                                    "Almost never"
                        ]
            },
            {
                        "id": "futureWorkingDistance",
                        "category": "Screen & Near-Work Habits",
                        "question": "Do you usually work very close to your phone, tablet, or computer?",
                        "answers": [
                                    "Yes",
                                    "Sometimes",
                                    "No",
                                    "I'm not sure"
                        ]
            },
            {
                        "id": "futureScreenSymptoms",
                        "category": "Screen & Near-Work Habits",
                        "question": "Do prolonged screen or near tasks commonly cause any of these?",
                        "type": "multiple",
                        "answers": [
                                    "Dryness",
                                    "Burning",
                                    "Headaches",
                                    "Blur",
                                    "Difficulty refocusing",
                                    "Eye strain",
                                    "Double or overlapping vision",
                                    "None of these"
                        ]
            },
            {
                        "id": "futureDaylight",
                        "category": "Screen & Near-Work Habits",
                        "question": "How much outdoor time do you typically get during daylight?",
                        "answers": [
                                    "Less than 30 minutes",
                                    "30 minutes–1 hour",
                                    "1–2 hours",
                                    "More than 2 hours",
                                    "It varies"
                        ]
            },
            {
                        "id": "futureHazards",
                        "category": "Work, Sports & Injury Risk",
                        "question": "Do your work, hobbies, or sports regularly involve potential eye hazards?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure"
                        ]
            },
            {
                        "id": "futureHazardTypes",
                        "category": "Work, Sports & Injury Risk",
                        "question": "Which hazards?",
                        "type": "multiple",
                        "answers": [
                                    "Balls/projectiles",
                                    "High-impact sports",
                                    "Tools",
                                    "Grinding or drilling",
                                    "Yardwork",
                                    "Chemicals",
                                    "Welding",
                                    "Dust/debris",
                                    "Fireworks",
                                    "Other"
                        ],
                        "showIf": {
                                    "questionId": "futureHazards",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureProtection",
                        "category": "Work, Sports & Injury Risk",
                        "question": "How often do you use appropriate protective eyewear during these activities?",
                        "answers": [
                                    "Always",
                                    "Usually",
                                    "Sometimes",
                                    "Rarely",
                                    "Never",
                                    "Protective eyewear is not available for the activity"
                        ],
                        "showIf": {
                                    "questionId": "futureHazards",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureSmoking",
                        "category": "Lifestyle Factors",
                        "question": "Which best describes your smoking exposure?",
                        "answers": [
                                    "I do not smoke and am rarely around smoke",
                                    "I do not smoke but am regularly exposed to secondhand smoke",
                                    "I currently smoke",
                                    "I previously smoked",
                                    "Prefer not to say"
                        ]
            },
            {
                        "id": "futureSleep",
                        "category": "Lifestyle Factors",
                        "question": "How would you describe your usual sleep?",
                        "answers": [
                                    "Usually adequate",
                                    "Sometimes inadequate",
                                    "Frequently inadequate",
                                    "Highly irregular",
                                    "Prefer not to say"
                        ]
            },
            {
                        "id": "futurePregnancy",
                        "category": "Pregnancy / Hormonal Factors",
                        "question": "Are you currently pregnant or recently postpartum?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "Not applicable",
                                    "Prefer not to say"
                        ]
            },
            {
                        "id": "futurePregnancyVision",
                        "category": "Pregnancy / Hormonal Factors",
                        "question": "Have you noticed major changes in your prescription, dryness, or vision during this period?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futurePregnancy",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureFindings",
                        "category": "Previous Warning Findings",
                        "question": "Has an eye-care professional ever told you that you have any of these findings?",
                        "type": "multiple",
                        "answers": [
                                    "Elevated eye pressure",
                                    "Glaucoma suspect",
                                    "Suspicious optic nerve",
                                    "Thin corneas",
                                    "Keratoconus suspect",
                                    "Irregular corneal shape",
                                    "Lattice degeneration",
                                    "Retinal hole",
                                    "Retinal tear",
                                    "Retinal thinning",
                                    "Macular changes",
                                    "Drusen",
                                    "Diabetic retinal changes",
                                    "Visual-field defect",
                                    "Abnormal OCT",
                                    "Optic-disc drusen",
                                    "Cataract beginning to develop",
                                    "Another finding being monitored",
                                    "None that I know of",
                                    "I'm not sure"
                        ]
            },
            {
                        "id": "futureFindingEye",
                        "category": "Previous Warning Findings",
                        "question": "Which eye was involved?",
                        "answers": [
                                    "Right",
                                    "Left",
                                    "Both",
                                    "Different findings in each eye",
                                    "I'm not sure"
                        ],
                        "showIfAny": [
                                    {
                                                "questionId": "futureFindings",
                                                "answers": [
                                                            "Elevated eye pressure",
                                                            "Glaucoma suspect",
                                                            "Suspicious optic nerve",
                                                            "Thin corneas",
                                                            "Keratoconus suspect",
                                                            "Irregular corneal shape",
                                                            "Lattice degeneration",
                                                            "Retinal hole",
                                                            "Retinal tear",
                                                            "Retinal thinning",
                                                            "Macular changes",
                                                            "Drusen",
                                                            "Diabetic retinal changes",
                                                            "Visual-field defect",
                                                            "Abnormal OCT",
                                                            "Optic-disc drusen",
                                                            "Cataract beginning to develop",
                                                            "Another finding being monitored"
                                                ]
                                    }
                        ]
            },
            {
                        "id": "futureCurrentMonitoring",
                        "category": "Current Monitoring",
                        "question": "Are you currently being followed by an eye-care professional for a known eye condition or risk factor?",
                        "answers": [
                                    "Yes",
                                    "No",
                                    "I'm not sure"
                        ]
            },
            {
                        "id": "futureReturn",
                        "category": "Current Monitoring",
                        "question": "How often are you usually asked to return?",
                        "answers": [
                                    "Every few weeks/months",
                                    "Every 3–6 months",
                                    "Every 6–12 months",
                                    "Yearly",
                                    "Less often than yearly",
                                    "I'm not sure"
                        ],
                        "showIf": {
                                    "questionId": "futureCurrentMonitoring",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futureAttendance",
                        "category": "Current Monitoring",
                        "question": "Do you generally attend those follow-up visits on schedule?",
                        "answers": [
                                    "Yes",
                                    "Usually",
                                    "Sometimes",
                                    "Rarely",
                                    "No"
                        ],
                        "showIf": {
                                    "questionId": "futureCurrentMonitoring",
                                    "answers": [
                                                "Yes"
                                    ]
                        }
            },
            {
                        "id": "futurePriorities",
                        "category": "Personal Priorities",
                        "question": "What are you most interested in protecting or understanding about your future eye health?",
                        "type": "multiple",
                        "answers": [
                                    "Preventing vision loss",
                                    "Glaucoma risk",
                                    "Retina/macula health",
                                    "Family-history risk",
                                    "Worsening prescription",
                                    "Contact-lens safety",
                                    "Dry eye",
                                    "Screen use and eye strain",
                                    "Cataract prevention/monitoring",
                                    "Eye injury prevention",
                                    "Genetic eye disease",
                                    "Keeping good vision as I get older",
                                    "Understanding whether I need eye exams more often",
                                    "I'm not sure"
                        ]
            },
            {
                        "id": "futureOtherConcernChoice",
                        "category": "Personal Priorities",
                        "question": "Is there anything else about your future eye health that concerns you?",
                        "answers": [
                                    "Yes — add a note",
                                    "No"
                        ]
            },
            {
                        "id": "futureOtherConcern",
                        "type": "text",
                        "category": "Personal Priorities",
                        "question": "What else would you like included in your results?",
                        "explanation": "Optional. This note is shown back to you but is not used to diagnose or calculate a medical risk.",
                        "showIf": {
                                    "questionId": "futureOtherConcernChoice",
                                    "answers": [
                                                "Yes — add a note"
                                    ]
                        }
            }
]
    },



    // ======================================================
    // VISION TEST — COMPLETE v1.0
    // ======================================================

    vision: {
        name: "Vision Test",

        questions: [

            // --------------------------------------------------
            // 1. CORRECTION & PRESCRIPTION
            // --------------------------------------------------

            {
                id: "visionCorrectionUse",
                category: "Your Vision Correction",
                question: "Do you currently use glasses, contact lenses, or another vision prescription?",
                explanation: "Choose the option that best describes what you normally use.",
                answers: [
                    "Glasses",
                    "Contact lenses",
                    "Both glasses and contact lenses",
                    "I have a prescription but do not regularly wear correction",
                    "No — I do not use vision correction",
                    "I don't know",
                    "Prefer not to say"
                ]
            },

            {
                id: "visionRxKnowledge",
                category: "Your Prescription",
                question: "Do you know your current vision prescription?",
                explanation: "Prescription entry is optional. You can complete the Vision Test without entering any numbers.",
                answers: [
                    "Yes — enter my prescription",
                    "I know some of it",
                    "No — I don't know my prescription",
                    "Prefer not to say"
                ],
                showIf: {
                    questionId: "visionCorrectionUse",
                    answers: [
                        "Glasses",
                        "Contact lenses",
                        "Both glasses and contact lenses",
                        "I have a prescription but do not regularly wear correction"
                    ]
                }
            },

            {
                id: "visionPrescription",
                type: "prescription",
                category: "Your Prescription",
                question: "Enter the prescription information you know.",
                explanation: "Copy the values exactly as they appear on your prescription. Leave any field blank if you do not know it.",
                showIf: {
                    questionId: "visionRxKnowledge",
                    answers: [
                        "Yes — enter my prescription",
                        "I know some of it"
                    ]
                }
            },

            {
                id: "visionCorrectionQuality",
                category: "Your Current Correction",
                question: "When you wear your usual glasses or contacts, how well do they work for you?",
                explanation: "",
                answers: [
                    "Very clear at both distance and near",
                    "Mostly clear, but not perfect",
                    "Distance is still blurry",
                    "Near vision is still blurry",
                    "Both distance and near are still blurry",
                    "Clear at first but becomes blurry",
                    "One eye seems clearer than the other",
                    "I don't wear them often enough to know",
                    "I'm not sure"
                ],
                showIf: {
                    questionId: "visionCorrectionUse",
                    answers: [
                        "Glasses",
                        "Contact lenses",
                        "Both glasses and contact lenses",
                        "I have a prescription but do not regularly wear correction"
                    ]
                }
            },

            {
                id: "visionCorrectionAge",
                category: "Your Current Correction",
                question: "About how long ago was your current prescription last checked or updated?",
                explanation: "",
                answers: [
                    "Within the past 6 months",
                    "6 to 12 months ago",
                    "1 to 2 years ago",
                    "More than 2 years ago",
                    "I don't know",
                    "Prefer not to say"
                ],
                showIf: {
                    questionId: "visionCorrectionUse",
                    answers: [
                        "Glasses",
                        "Contact lenses",
                        "Both glasses and contact lenses",
                        "I have a prescription but do not regularly wear correction"
                    ]
                }
            },

            {
                id: "visionTestMode",
                category: "Choose How to Test",
                question: "How would you like to test your vision?",
                explanation: "Recommended: Test Both. Comparing your vision with your usual correction and without it gives the most useful picture of how much your glasses or contacts are helping.",
                answers: [
                    "Test both — Recommended",
                    "With my usual correction only",
                    "Without correction only"
                ],
                showIf: {
                    questionId: "visionCorrectionUse",
                    answers: [
                        "Glasses",
                        "Contact lenses",
                        "Both glasses and contact lenses",
                        "I have a prescription but do not regularly wear correction"
                    ]
                }
            },

            {
                id: "visionUnaidedConfirm",
                category: "Choose How to Test",
                question: "You will complete the visual screening without glasses or contact lenses.",
                explanation: "If you normally use correction but selected “without correction only,” remove it before the unaided portion. Do not remove medically necessary protective or therapeutic lenses unless your eye-care professional has told you it is safe to do so.",
                answers: ["Continue"],
                showIf: {
                    questionId: "visionCorrectionUse",
                    answers: [
                        "No — I do not use vision correction",
                        "I don't know",
                        "Prefer not to say"
                    ]
                }
            },


            // --------------------------------------------------
            // 2. SCREEN SETUP
            // --------------------------------------------------

            {
                id: "visionDistanceSetup",
                category: "Set Up the Distance Test",
                question: "How far can you comfortably stand from this screen?",
                explanation: "Ten feet is preferred when your room allows it. Six feet is okay for this educational screen. Keep the same distance for each eye.",
                answers: [
                    "10 feet",
                    "6 feet",
                    "I cannot safely create that much distance"
                ]
            },

            {
                id: "visionScreenCalibration",
                type: "calibration",
                category: "Screen Calibration",
                question: "Calibrate the chart size.",
                explanation: "Hold a standard credit/debit/ID card against the screen and adjust the rectangle until its width matches the long edge of the card. This helps the chart display at a more consistent physical size. You can skip calibration if you do not have a card."
            },

            {
                id: "visionCoverInstructions",
                category: "Before the Eye-by-Eye Test",
                question: "For the next sections, test one eye at a time.",
                explanation: "Cover the eye that is NOT being tested without pressing on it. Keep both eyes open naturally behind the cover if comfortable. Use the same room lighting and testing distance each time.",
                answers: ["I'm ready"]
            },


            // --------------------------------------------------
            // 3. CORRECTED DISTANCE
            // --------------------------------------------------

            {
                id: "correctedReady",
                category: "Corrected Vision",
                question: "Put on the glasses or contact lenses you normally use for distance vision.",
                explanation: "Use your usual correction—not a different or borrowed prescription.",
                answers: ["I'm wearing my usual correction"],
                showIf: {
                    questionId: "visionTestMode",
                    answers: [
                        "Test both — Recommended",
                        "With my usual correction only"
                    ]
                }
            },

            {
                id: "correctedDistanceOD",
                type: "acuity",
                eye: "Right eye (OD)",
                condition: "corrected",
                category: "Corrected Distance Vision",
                question: "Right eye: what is the smallest line you can comfortably identify?",
                explanation: "Cover your LEFT eye. Stand at the distance you selected. This is an approximate home-screening chart, not a clinical Snellen measurement.",
                showIf: {
                    questionId: "visionTestMode",
                    answers: [
                        "Test both — Recommended",
                        "With my usual correction only"
                    ]
                }
            },

            {
                id: "correctedDistanceOS",
                type: "acuity",
                eye: "Left eye (OS)",
                condition: "corrected",
                category: "Corrected Distance Vision",
                question: "Left eye: what is the smallest line you can comfortably identify?",
                explanation: "Cover your RIGHT eye without pressing on it. Keep the same distance and lighting.",
                showIf: {
                    questionId: "visionTestMode",
                    answers: [
                        "Test both — Recommended",
                        "With my usual correction only"
                    ]
                }
            },

            {
                id: "correctedDistanceOU",
                type: "acuity",
                eye: "Both eyes (OU)",
                condition: "corrected",
                category: "Corrected Distance Vision",
                question: "Both eyes together: what is the smallest line you can comfortably identify?",
                explanation: "Keep your usual correction on and view the chart with both eyes open.",
                showIf: {
                    questionId: "visionTestMode",
                    answers: [
                        "Test both — Recommended",
                        "With my usual correction only"
                    ]
                }
            },

            {
                id: "correctedNear",
                category: "Corrected Near Vision",
                question: "With your usual correction, how comfortable is ordinary reading or phone-size text at your normal reading distance?",
                explanation: "",
                answers: [
                    "Clear and comfortable",
                    "Clear but becomes tiring",
                    "A little blurry",
                    "Very blurry",
                    "I need to move it farther away",
                    "I need to move it closer",
                    "Different between my two eyes",
                    "I'm not sure"
                ],
                showIf: {
                    questionId: "visionTestMode",
                    answers: [
                        "Test both — Recommended",
                        "With my usual correction only"
                    ]
                }
            },


            // --------------------------------------------------
            // 4. UNAIDED DISTANCE
            // --------------------------------------------------

            {
                id: "unaidedReady",
                category: "Unaided Vision",
                question: "Now test without glasses or contact lenses.",
                explanation: "If you wear ordinary removable correction, take it off for this portion. This comparison is optional but recommended. Do not remove a therapeutic lens that an eye-care professional has instructed you to keep in place.",
                answers: ["I'm ready to test without correction"],
                showIfAny: [
                    {
                        questionId: "visionTestMode",
                        answers: [
                            "Test both — Recommended",
                            "Without correction only"
                        ]
                    },
                    {
                        questionId: "visionCorrectionUse",
                        answers: [
                            "No — I do not use vision correction",
                            "I don't know",
                            "Prefer not to say"
                        ]
                    }
                ]
            },

            {
                id: "unaidedDistanceOD",
                type: "acuity",
                eye: "Right eye (OD)",
                condition: "unaided",
                category: "Unaided Distance Vision",
                question: "Right eye without correction: what is the smallest line you can comfortably identify?",
                explanation: "Cover your LEFT eye and keep the same test distance.",
                showIfAny: [
                    {
                        questionId: "visionTestMode",
                        answers: [
                            "Test both — Recommended",
                            "Without correction only"
                        ]
                    },
                    {
                        questionId: "visionCorrectionUse",
                        answers: [
                            "No — I do not use vision correction",
                            "I don't know",
                            "Prefer not to say"
                        ]
                    }
                ]
            },

            {
                id: "unaidedDistanceOS",
                type: "acuity",
                eye: "Left eye (OS)",
                condition: "unaided",
                category: "Unaided Distance Vision",
                question: "Left eye without correction: what is the smallest line you can comfortably identify?",
                explanation: "Cover your RIGHT eye and keep the same test distance.",
                showIfAny: [
                    {
                        questionId: "visionTestMode",
                        answers: [
                            "Test both — Recommended",
                            "Without correction only"
                        ]
                    },
                    {
                        questionId: "visionCorrectionUse",
                        answers: [
                            "No — I do not use vision correction",
                            "I don't know",
                            "Prefer not to say"
                        ]
                    }
                ]
            },

            {
                id: "unaidedDistanceOU",
                type: "acuity",
                eye: "Both eyes (OU)",
                condition: "unaided",
                category: "Unaided Distance Vision",
                question: "Both eyes without correction: what is the smallest line you can comfortably identify?",
                explanation: "View the chart with both eyes open.",
                showIfAny: [
                    {
                        questionId: "visionTestMode",
                        answers: [
                            "Test both — Recommended",
                            "Without correction only"
                        ]
                    },
                    {
                        questionId: "visionCorrectionUse",
                        answers: [
                            "No — I do not use vision correction",
                            "I don't know",
                            "Prefer not to say"
                        ]
                    }
                ]
            },

            {
                id: "unaidedNear",
                category: "Unaided Near Vision",
                question: "Without correction, how comfortable is ordinary reading or phone-size text at your normal reading distance?",
                explanation: "",
                answers: [
                    "Clear and comfortable",
                    "Clear but becomes tiring",
                    "A little blurry",
                    "Very blurry",
                    "I need to move it farther away",
                    "I need to move it closer",
                    "Different between my two eyes",
                    "I'm not sure"
                ],
                showIfAny: [
                    {
                        questionId: "visionTestMode",
                        answers: [
                            "Test both — Recommended",
                            "Without correction only"
                        ]
                    },
                    {
                        questionId: "visionCorrectionUse",
                        answers: [
                            "No — I do not use vision correction",
                            "I don't know",
                            "Prefer not to say"
                        ]
                    }
                ]
            },


            // --------------------------------------------------
            // 5. EYE-TO-EYE COMPARISON
            // --------------------------------------------------

            {
                id: "visionComparisonCorrection",
                category: "Eye-to-Eye Comparison",
                question: "For the remaining checks, use the correction you normally wear for near vision, if any.",
                explanation: "These checks compare the two eyes rather than measuring a prescription.",
                answers: ["Continue"]
            },

            {
                id: "visionDistortionOD",
                type: "amsler",
                eye: "Right eye (OD)",
                category: "Central Vision Check",
                question: "Right eye: while looking at the center dot, do all grid lines look straight and complete?",
                explanation: "Cover your LEFT eye. Keep looking directly at the center dot. Do not chase missing or distorted areas with your eyes.",
                answers: [
                    "Yes — straight and complete",
                    "Some lines look wavy, bent, or distorted",
                    "Part of the grid looks missing, dark, or blank",
                    "The grid is too blurry for me to judge",
                    "I'm not sure"
                ]
            },

            {
                id: "visionDistortionOS",
                type: "amsler",
                eye: "Left eye (OS)",
                category: "Central Vision Check",
                question: "Left eye: while looking at the center dot, do all grid lines look straight and complete?",
                explanation: "Cover your RIGHT eye and keep looking at the center dot.",
                answers: [
                    "Yes — straight and complete",
                    "Some lines look wavy, bent, or distorted",
                    "Part of the grid looks missing, dark, or blank",
                    "The grid is too blurry for me to judge",
                    "I'm not sure"
                ]
            },

            {
                id: "visionRedComparison",
                type: "redcompare",
                category: "Color & Brightness Comparison",
                question: "Does the red target look equally bright and vivid through each eye?",
                explanation: "View the same red square with one eye at a time. This is only an eye-to-eye comparison; screen color cannot diagnose a color-vision disorder.",
                answers: [
                    "It looks about the same through both eyes",
                    "It looks dimmer or less vivid through my right eye",
                    "It looks dimmer or less vivid through my left eye",
                    "It looks different, but I can't tell how",
                    "I'm not sure"
                ]
            },

            {
                id: "visionColorPlates",
                type: "colorplates",
                category: "Color Vision Screening",
                question: "What numbers can you see in these color patterns?",
                explanation: "View the plates with BOTH eyes open using your usual correction if needed. These are original browser-based color discrimination patterns, not a clinical Ishihara test. Screen color, brightness, night mode, and display settings can affect the result."
            },

            {
                id: "visionColorHistory",
                category: "Color Vision Screening",
                question: "Have you noticed difficulty distinguishing certain colors outside of this test?",
                explanation: "Longstanding color differences and newly acquired color changes are interpreted differently.",
                answers: [
                    "No — I have not noticed color difficulty",
                    "Yes — I have noticed it for as long as I can remember",
                    "Yes — I noticed it more recently",
                    "Only in certain lighting or situations",
                    "I'm not sure"
                ]
            },

            {
                id: "visionColorFamilyHistory",
                category: "Color Vision Screening",
                question: "Do you know of anyone in your biological family with an inherited color-vision deficiency?",
                explanation: "",
                answers: [
                    "Yes",
                    "No",
                    "I'm not sure",
                    "Prefer not to say"
                ]
            },

            {
                id: "visionBinocularComfort",
                category: "Both Eyes Together",
                question: "With both eyes open, do you notice doubling, overlapping, or difficulty keeping a single image?",
                explanation: "",
                answers: [
                    "No — vision stays single",
                    "Sometimes",
                    "Yes — frequently",
                    "Only when I am tired or doing close work",
                    "I'm not sure"
                ]
            },

            {
                id: "visionClosingEyeHelps",
                category: "Both Eyes Together",
                question: "If you ever notice double or overlapping vision, does covering either eye make it single again?",
                explanation: "",
                answers: [
                    "Yes",
                    "No",
                    "It varies",
                    "I'm not sure",
                    "I do not notice double or overlapping vision"
                ],
                showIf: {
                    questionId: "visionBinocularComfort",
                    answers: [
                        "Sometimes",
                        "Yes — frequently",
                        "Only when I am tired or doing close work",
                        "I'm not sure"
                    ]
                }
            },

            {
                id: "visionFinalChange",
                category: "Final Check",
                question: "Is any vision difference you noticed today new or significantly worse than usual?",
                explanation: "",
                answers: [
                    "No — this seems typical for me",
                    "Yes — it is new",
                    "Yes — it has become noticeably worse",
                    "I'm not sure"
                ]
            }
        ]
    }
};


// ==========================================================
// RESULT LIBRARY
// ==========================================================
//
// Scores below are pattern-match heuristics.
// They are intentionally NOT probabilities.
//
// "Strong Match" means the reported pattern contains several
// features commonly associated with that condition.
// ==========================================================

const conditionLibrary = [

    {
        id: "dry-eye",
        name: "Dry Eye Disease",
        description:
            "Dry eye happens when the eyes do not make enough tears or when the tears do not work well enough to keep the eye surface comfortable and stable. It can cause burning, scratchiness, redness, watering, light sensitivity, and blurry or fluctuating vision. Symptoms often vary with environment, contact-lens wear, or prolonged screen use. Dry eye can often be managed successfully once the cause and severity are understood.",
        signs: [
            "Burning, stinging, or scratchy feeling",
            "Dry or gritty sensation",
            "Fluctuating blurry vision",
            "Redness",
            "Watering",
            "Light sensitivity"
        ],
        management:
            "Management depends on the cause and severity. An eye-care professional may evaluate the tear film, eyelids, medications, contact-lens use, environment, and other factors before recommending treatment. Options may include changes in habits, lubricating drops, eyelid treatment, or prescription therapies.",
        nextSteps:
            "Consider an eye examination if symptoms are persistent, recurring, worsening, or interfering with comfortable vision.",
        rules: [
            ["discomfortTypes", ["Burning or stinging"], 5],
            ["discomfortTypes", ["Dry or gritty"], 7],
            ["drynessWatering", ["Yes", "Sometimes"], 3],
            ["blurRelief", ["Blinking", "Using lubricating or artificial tears"], 6],
            ["drynessTriggers", ["After reading or screen use", "In air conditioning or around fans", "Outdoors or in wind", "Later in the day"], 3],
            ["contactLensSymptoms", ["Yes", "Sometimes"], 3],
            ["appearanceTypes", ["Redness"], 2]
        ]
    },

    {
        id: "refractive-error",
        name: "Refractive Error",
        description:
            "A refractive error happens when the shape or focusing system of the eye does not focus light precisely on the retina. Common types include nearsightedness, farsightedness, astigmatism, and age-related near-focusing changes. These problems commonly cause blur, squinting, eye strain, headaches, or difficulty at certain viewing distances. They are often corrected with glasses or contact lenses.",
        signs: [
            "Blur at distance, near, or both",
            "Squinting improves clarity",
            "Eye strain",
            "Difficulty focusing",
            "Glare or halos"
        ],
        management:
            "An eye examination can measure the refractive error and determine whether glasses, contact lenses, or another correction option is appropriate.",
        nextSteps:
            "Consider a comprehensive eye examination, especially if your current correction no longer provides clear or comfortable vision.",
        rules: [
            ["blurredVision", YES_SOMETIMES, 6],
            ["blurRelief", ["Squinting", "Wearing my glasses"], 7],
            ["nearWorkProblems", YES_SOMETIMES, 3],
            ["nearWorkTypes", ["Blurry vision", "Trouble keeping things in focus", "My eyes feel strained or tired"], 3],
            ["lightProblemTypes", ["Too much glare", "Halos around lights"], 2]
        ]
    },

    {
        id: "digital-eye-strain",
        name: "Digital Eye Strain",
        description:
            "Digital eye strain describes eye and vision discomfort that develops during prolonged screen or close-up work. Symptoms may include tired eyes, dryness, blur, headaches, and difficulty keeping things in focus. The symptoms often improve with rest and may overlap with dry eye, focusing problems, or an outdated prescription. Persistent symptoms are worth discussing during an eye examination.",
        signs: [
            "Tired or strained eyes",
            "Blur during screen use",
            "Difficulty focusing",
            "Headaches",
            "Symptoms improve with rest"
        ],
        management:
            "Management may involve adjusting viewing habits and workspace conditions and addressing any dry-eye, focusing, or prescription problem that contributes to symptoms.",
        nextSteps:
            "If screen-related symptoms are frequent or interfere with school, work, reading, or daily activities, consider an eye examination.",
        rules: [
            ["nearWorkProblems", YES_SOMETIMES, 6],
            ["nearWorkTypes", ["My eyes feel strained or tired", "I need frequent breaks", "Trouble keeping things in focus"], 5],
            ["generalTriggers", ["Computer or phone use", "Reading"], 4],
            ["generalRelief", ["Resting my eyes"], 4],
            ["dailyHabits", ["Several hours of computer or phone use", "Long periods of reading or close work"], 3]
        ]
    },

    {
        id: "convergence-focusing",
        name: "Binocular Focusing or Convergence Difficulty",
        description:
            "Some vision problems occur when the two eyes have difficulty working together during reading or other close-up tasks. People may notice eye strain, blur, double vision, words that seem to move, losing their place, or needing frequent breaks. Symptoms are often more noticeable after prolonged near work or when tired. A comprehensive eye examination can determine whether an eye-teaming or focusing problem is present.",
        signs: [
            "Near-work blur or double vision",
            "Words appear to move",
            "Losing place while reading",
            "Eye fatigue",
            "Symptoms during prolonged close work"
        ],
        management:
            "Treatment depends on the specific binocular or focusing problem found during an examination and may include optical correction, structured vision therapy, or other approaches.",
        nextSteps:
            "Consider an eye examination if reading or close work repeatedly causes visual discomfort or double vision.",
        rules: [
            ["nearWorkProblems", YES_SOMETIMES, 6],
            ["nearWorkTypes", ["Double vision", "Words seem to move or shift", "I lose my place while reading", "Trouble keeping things in focus"], 6],
            ["refocusProblem", YES_SOMETIMES, 4],
            ["doubleDistance", ["Reading or close up", "Computer or intermediate distance"], 4]
        ]
    },

    {
        id: "allergic-eye",
        name: "Allergic Eye Irritation",
        description:
            "Eye allergies occur when the surface of the eye reacts to an allergen such as pollen, dust, or animal dander. Itching is often one of the most noticeable symptoms and may occur with redness, watering, or eyelid swelling. Symptoms can be seasonal or related to particular environments. Other eye-surface conditions can cause similar symptoms, so persistent or unusual irritation should be evaluated.",
        signs: ["Itching", "Watering", "Redness", "Swelling", "Environmental or seasonal triggers"],
        management:
            "Management may include reducing allergen exposure and using appropriate eye treatments recommended by an eye-care professional.",
        nextSteps:
            "Consider an eye examination if symptoms are persistent, severe, mostly one-sided, painful, or associated with a vision change.",
        rules: [
            ["discomfortTypes", ["Itching"], 8],
            ["itchTriggers", ["Outdoors", "Around pets", "Around dust", "During certain seasons"], 5],
            ["tearDischargeTypes", ["Excessive watering", "Clear watery discharge"], 3],
            ["appearanceTypes", ["Redness"], 3],
            ["medicalHistory", ["Significant allergies", "Asthma or atopic condition"], 2]
        ]
    },

    {
        id: "blepharitis",
        name: "Blepharitis / Eyelid-Margin Inflammation",
        description:
            "Blepharitis is inflammation along the edges of the eyelids. It may cause burning, irritation, watery eyes, redness, crusting, or flakes around the eyelashes, and symptoms often come and go. Some people also have dry-eye symptoms because the eyelids and tear film work closely together. It is usually manageable, although recurring cases may need ongoing eyelid care.",
        signs: ["Crusting or flaking around lashes", "Burning", "Red eyelid margins", "Watering", "Recurring irritation"],
        management:
            "Treatment depends on the type and severity and often focuses on eyelid hygiene and management of associated tear-film or skin conditions.",
        nextSteps:
            "Consider an eye examination if eyelid irritation is persistent or recurring, especially when it affects vision or comfort.",
        rules: [
            ["lidProblemTypes", ["Crusting along the lashes", "Flaking around the lashes", "Eyelid redness"], 7],
            ["discomfortTypes", ["Burning or stinging", "Dry or gritty"], 3],
            ["tearDischargeTypes", ["Crusting after sleep"], 3],
            ["medicalHistory", ["Rosacea, eczema, or another inflammatory skin condition"], 2]
        ]
    },

    {
        id: "conjunctivitis-pattern",
        name: "Conjunctivitis-Like Irritation",
        description:
            "Conjunctivitis is inflammation of the thin tissue covering the white part of the eye and inner eyelids. It can have several causes, including infection, allergy, or irritation, so redness alone does not identify the cause. Depending on the cause, people may notice watering, discharge, itching, burning, or sticky eyelids. An eye examination can help distinguish conjunctivitis from other causes of a red eye.",
        signs: ["Redness", "Watering or discharge", "Sticky eyelids", "Itching or burning"],
        management:
            "Treatment depends on the cause. Because bacterial, viral, allergic, and other forms can look similar, treatment should be based on the specific presentation rather than redness alone.",
        nextSteps:
            "Seek professional advice if redness is significant, persistent, painful, associated with light sensitivity or vision change, or occurs while wearing contact lenses.",
        rules: [
            ["appearanceTypes", ["Redness"], 5],
            ["tearDischarge", YES_SOMETIMES, 5],
            ["tearDischargeTypes", ["Clear watery discharge", "Thick or mucus-like discharge", "Yellow or greenish discharge", "Sticky eyes"], 4],
            ["discomfortTypes", ["Itching", "Burning or stinging"], 2]
        ]
    },

    {
        id: "cataract",
        name: "Cataract-Like Lens Changes",
        description:
            "A cataract is a cloudy area that develops in the normally clear lens inside the eye. Cataracts usually develop gradually and can cause blurry or hazy vision, faded colors, glare, halos, and difficulty seeing at night. They become more common with age, although other factors can contribute. Cataracts are treatable, and surgery can replace the cloudy lens when symptoms begin to interfere with daily life.",
        signs: ["Gradual blur or haze", "Faded colors", "Glare", "Halos", "Night-vision difficulty"],
        management:
            "Early symptoms may sometimes be improved with updated vision correction. When a cataract significantly affects everyday activities, an eye surgeon may discuss cataract surgery.",
        nextSteps:
            "Consider a comprehensive eye examination if these changes are persistent or gradually worsening.",
        rules: [
            ["blurredVision", YES_SOMETIMES, 4],
            ["blurOnset", ["Gradually", "I've had it for a long time"], 4],
            ["colorChange", YES_SOMETIMES, 4],
            ["lightProblemTypes", ["Too much glare", "Halos around lights", "Difficulty seeing at night"], 5],
            ["ageRange", ["50–59", "60–69", "70+"], 5],
            ["medicalHistory", ["Diabetes or blood-sugar problems"], 2],
            ["medicationContext", ["I take steroid medication"], 2]
        ]
    },

    {
        id: "macular-pattern",
        name: "Macular / Central-Retina Pattern",
        description:
            "The macula is the central part of the retina used for detailed vision such as reading and recognizing faces. Problems affecting this area can cause central blur, distortion, missing spots, or changes in contrast and color. Several different retinal conditions can produce this pattern, so the symptoms alone cannot determine the cause. A dilated eye examination is important when new central distortion or missing vision is reported.",
        signs: ["Central distortion", "Wavy lines", "Central missing spot", "Reduced contrast", "Central blur"],
        management:
            "Treatment depends entirely on the underlying retinal condition, which can only be determined through an eye examination and often retinal imaging.",
        nextSteps:
            "New or worsening central distortion or missing vision should be evaluated by an eye-care professional.",
        rules: [
            ["distortedVision", YES_SOMETIMES, 6],
            ["distortionArea", ["Center", "Near the center", "One specific spot"], 5],
            ["missingArea", ["Center", "A specific spot"], 5],
            ["contrastDifficulty", YES_SOMETIMES, 3],
            ["ageRange", ["50–59", "60–69", "70+"], 2]
        ]
    },

    {
        id: "glaucoma-risk-pattern",
        name: "Glaucoma Risk / Visual-Field Pattern",
        description:
            "Glaucoma is a group of eye conditions that can damage the optic nerve. The most common form often develops without noticeable early symptoms, which means a symptom questionnaire cannot rule it in or out. As glaucoma progresses, some people develop changes in peripheral vision. Risk factors and regular comprehensive eye examinations are therefore especially important.",
        signs: ["Often no early symptoms", "Possible peripheral-vision changes later", "History of elevated eye pressure", "Family history"],
        management:
            "If glaucoma is diagnosed, treatment is aimed at reducing the risk of further optic-nerve damage, often with eye drops, laser treatment, surgery, or a combination.",
        nextSteps:
            "If you have glaucoma risk factors or have been told your eye pressure or optic nerves need monitoring, regular comprehensive eye examinations are important.",
        rules: [
            ["missingArea", ["Side or peripheral vision"], 4],
            ["previousEyeHistory", ["High eye pressure or glaucoma concern"], 8],
            ["familyEyeHistory", ["Glaucoma"], 5],
            ["ageRange", ["50–59", "60–69", "70+"], 2]
        ]
    },

    {
        id: "diabetic-eye-pattern",
        name: "Diabetic Eye-Disease Risk Pattern",
        description:
            "Diabetes can affect several parts of the eye, including the retina, lens, and eye-pressure system. Diabetic retinopathy may cause no symptoms at first, while later changes can include blur or floating spots. Because early disease may be silent, symptom matching is less useful than regular dilated eye examinations for people with diabetes. Your medical history is therefore an important part of this result.",
        signs: ["May have no early symptoms", "Blur", "Floaters or spots", "Diabetes history"],
        management:
            "Management depends on the specific eye finding and may include monitoring, improving overall diabetes control, injections, laser treatment, or surgery.",
        nextSteps:
            "If you have diabetes, keep up with recommended comprehensive dilated eye examinations even when your vision seems normal.",
        rules: [
            ["medicalHistory", ["Diabetes or blood-sugar problems"], 8],
            ["blurredVision", YES_SOMETIMES, 2],
            ["floaters", YES_SOMETIMES, 2],
            ["previousEyeHistory", ["Diabetic eye disease"], 8],
            ["diabetesDuration", ["6–10 years", "More than 10 years"], 2]
        ]
    },

    {
        id: "uveitis-pattern",
        name: "Inflammatory Eye Pattern (Uveitis-Like)",
        description:
            "Uveitis is inflammation inside the eye and can affect one eye or both. Symptoms may include eye pain, redness, light sensitivity, blurry vision, and floaters, and some forms can begin fairly suddenly. Several inflammatory, immune, and infectious conditions can be associated with uveitis. These symptoms overlap with other eye problems, so an eye examination is needed to identify the cause.",
        signs: ["Eye pain", "Redness", "Light sensitivity", "Blur", "Floaters"],
        management:
            "Treatment depends on the location and cause of the inflammation and often involves medication to control inflammation or treat an underlying cause.",
        nextSteps:
            "A combination of eye pain, redness, light sensitivity, blur, or floaters should be evaluated promptly.",
        rules: [
            ["discomfortTypes", ["Aching", "Sharp pain"], 4],
            ["appearanceTypes", ["Redness"], 4],
            ["lightProblemTypes", ["Bright light feels uncomfortable"], 4],
            ["blurredVision", YES_SOMETIMES, 3],
            ["floaters", YES_SOMETIMES, 3],
            ["medicalHistory", ["Autoimmune or inflammatory condition", "Inflammatory arthritis"], 3]
        ]
    },

    {
        id: "corneal-irritation",
        name: "Corneal Surface Injury or Irritation Pattern",
        description:
            "The cornea is the clear front surface of the eye, and scratches, foreign material, contact-lens problems, or inflammation can make it painful and sensitive. Symptoms can include a foreign-body feeling, watering, redness, light sensitivity, and blurry vision. Some corneal problems need prompt treatment, especially when pain or vision changes are significant. An eye examination can check the corneal surface directly.",
        signs: ["Foreign-body feeling", "Sharp or surface pain", "Watering", "Redness", "Light sensitivity", "Blur"],
        management:
            "Treatment depends on whether the cause is an abrasion, infection, contact-lens complication, foreign material, dryness, or another corneal problem.",
        nextSteps:
            "Prompt evaluation is appropriate when pain is significant, vision changes, the eye is very red/watery, something may be stuck in the eye, or symptoms occur with contact-lens wear.",
        rules: [
            ["discomfortTypes", ["Feels like something is in my eye", "Sharp pain"], 6],
            ["foreignBodyEvent", ["Something may have entered my eye", "I rubbed or scratched my eye", "It started while wearing contact lenses"], 5],
            ["appearanceTypes", ["Redness"], 3],
            ["tearDischargeTypes", ["Excessive watering", "Clear watery discharge"], 2],
            ["lightProblemTypes", ["Bright light feels uncomfortable"], 3],
            ["recentEyeInjury", ["Yes", "Possibly"], 5]
        ]
    },

    {
        id: "contact-lens-irritation",
        name: "Contact-Lens–Related Irritation Pattern",
        description:
            "Contact lenses can sometimes contribute to dryness, surface irritation, or infection. Symptoms that begin or worsen while lenses are in—especially redness, pain, light sensitivity, discharge, or blur—deserve attention. Removing the lens may improve simple irritation, but improvement does not rule out a more significant problem. Contact-lens wearers with painful or worsening red-eye symptoms should be evaluated promptly.",
        signs: ["Symptoms with contact-lens wear", "Redness", "Blur", "Dryness", "Pain or light sensitivity"],
        management:
            "Management depends on the cause and may involve temporarily stopping lens wear, changing lens care or fit, or treating an eye-surface problem.",
        nextSteps:
            "If you have significant pain, redness, light sensitivity, discharge, or vision change while wearing contacts, arrange prompt professional evaluation.",
        rules: [
            ["contactLensWear", YES_SOMETIMES, 4],
            ["contactLensSymptoms", YES_SOMETIMES, 6],
            ["contactLensRemoval", ["Yes", "Sometimes"], 2],
            ["discomfortTypes", ["Dry or gritty", "Burning or stinging", "Sharp pain"], 3],
            ["appearanceTypes", ["Redness"], 2]
        ]
    },

    {
        id: "stye-chalazion",
        name: "Stye or Chalazion-Like Eyelid Bump",
        description:
            "A stye or chalazion is a localized bump in the eyelid caused by inflammation or blockage of an eyelid gland. A stye is often tender or painful, while a chalazion may become less painful over time. Either can cause localized swelling and irritation. Persistent, enlarging, or unusual eyelid bumps should be examined.",
        signs: ["Localized eyelid bump", "Tenderness", "Eyelid swelling", "Redness"],
        management:
            "Many eyelid bumps improve with appropriate eyelid care, but treatment depends on the exact type and whether it persists.",
        nextSteps:
            "Seek an eye examination if the bump is worsening, repeatedly returns, affects vision, or does not improve.",
        rules: [
            ["lidProblemTypes", ["Eyelid bump"], 8],
            ["lidBumpTender", ["Yes", "A little"], 3],
            ["lidProblemTypes", ["Eyelid swelling", "Eyelid redness"], 2]
        ]
    },

    {
        id: "migraine-visual-pattern",
        name: "Migraine-Associated Visual Pattern",
        description:
            "Migraine can sometimes cause temporary visual effects such as shimmering lights, zig-zag patterns, or blind spots, with or without a headache. These visual symptoms usually follow a recognizable episode pattern, but new visual changes should not automatically be assumed to be migraine. Eye and neurologic conditions can produce overlapping symptoms. A professional can help determine whether a new pattern fits migraine or needs further evaluation.",
        signs: ["Shimmering or zig-zag visual effects", "Temporary blind spots", "Headache", "Light sensitivity", "Prior similar migraine episodes"],
        management:
            "Management focuses on confirming the diagnosis, identifying triggers, and using an appropriate migraine treatment plan when needed.",
        nextSteps:
            "New, unusual, prolonged, or one-eye-only visual symptoms should be evaluated rather than assumed to be migraine.",
        rules: [
            ["headacheFeatures", ["Flashing or shimmering lights", "Zig-zag or moving visual patterns", "Temporary blind or blurry spots"], 6],
            ["headacheWithEyes", YES_SOMETIMES, 4],
            ["medicalHistory", ["Migraine"], 4],
            ["migraineHistory", ["Yes"], 4]
        ]
    },

    {
        id: "optic-nerve-pattern",
        name: "Optic-Nerve–Related Visual Pattern",
        description:
            "The optic nerve carries visual information from the eye to the brain. Some optic-nerve problems can cause reduced vision, changes in color or brightness, or discomfort with eye movement, often more noticeably in one eye. These symptoms are not specific enough for an online test to identify the cause. New vision changes with pain on eye movement or a clear color/brightness difference between eyes should be professionally evaluated.",
        signs: ["Color or brightness difference between eyes", "Reduced vision", "Pain with eye movement"],
        management:
            "Treatment depends entirely on the underlying cause and requires an eye and sometimes neurologic evaluation.",
        nextSteps:
            "Arrange professional evaluation for new color/brightness differences, reduced vision, or pain with eye movement.",
        rules: [
            ["colorChange", YES_SOMETIMES, 4],
            ["dimVision", ["Right eye seems dimmer", "Left eye seems dimmer"], 5],
            ["painMovement", ["Yes", "Sometimes"], 5],
            ["blurredVision", YES_SOMETIMES, 2]
        ]
    }
,

    {
        id: "posterior-vitreous-detachment",
        name: "Posterior Vitreous Detachment / Acute Vitreous Change",
        category: "Vitreous & Retina",
        rarity: "common",
        resultType: "symptom",
        description:
            "A posterior vitreous detachment happens when the gel inside the eye separates from the retina. It commonly causes new floaters and flashes, especially toward the side of vision, and becomes more common with age. Most cases do not cause major vision loss, but a retinal tear can occur at the same time and cannot be ruled out by symptoms alone. A dilated retinal examination is used to check the retina.",
        signs: ["New floaters", "Flashes", "Often one eye first", "Peripheral flashes"],
        management:
            "Most uncomplicated vitreous detachments do not require treatment, but the retina needs to be checked when symptoms are new or changing.",
        exam:
            "An eye-care professional may perform a dilated retinal examination and may use retinal imaging when appropriate.",
        nextSteps:
            "New floaters or flashes should be discussed promptly with an eye-care professional, especially when they appear suddenly or increase.",
        rules: [
            ["floatersNew", ["Yes, they are new", "I have old floaters but noticed new ones"], 10],
            ["floatersIncrease", ["Yes"], 7],
            ["floaterAmount", ["A few new floaters", "Many new floaters", "A sudden shower or cloud of spots"], 7],
            ["flashes", YES_SOMETIMES, 7],
            ["flashesNew", ["Yes, they are new", "They are not new but have changed"], 7],
            ["flashesArea", ["Toward the side of my vision"], 4]
        ]
    },

    {
        id: "retinal-tear-pattern",
        name: "Retinal Tear Warning Pattern",
        category: "Retina",
        rarity: "uncommon",
        resultType: "prompt",
        description:
            "A retinal tear is a break in the retina that can sometimes occur when the vitreous pulls on it. New flashes and floaters are common warning symptoms, but those symptoms can also occur without a retinal tear. Because a tear can only be confirmed by examining the retina, this result is a warning pattern rather than a diagnosis. Treating a tear when present can reduce the chance of progression to retinal detachment.",
        signs: ["New flashes", "New or suddenly increased floaters", "Possible new visual shadow"],
        management:
            "If a retinal tear is found, treatment may include laser or freezing treatment around the tear. The correct approach depends on the retinal examination.",
        exam:
            "Evaluation commonly includes a dilated examination of the peripheral retina.",
        nextSteps:
            "Arrange prompt eye evaluation for new flashes or a sudden increase in floaters.",
        rules: [
            ["floatersIncrease", ["Yes"], 10],
            ["flashesNew", ["Yes, they are new", "They are not new but have changed"], 10],
            ["floaterAmount", ["Many new floaters", "A sudden shower or cloud of spots"], 7],
            ["recentEyeInjury", ["Yes", "Possibly"], 4]
        ]
    },

    {
        id: "retinal-detachment-pattern",
        name: "Retinal Detachment Warning Pattern",
        category: "Retina",
        rarity: "uncommon",
        resultType: "urgent",
        description:
            "Retinal detachment occurs when the retina separates from its normal position. A sudden increase in floaters, flashes of light, and a new shadow or curtain-like area are important warning symptoms. These symptoms do not prove that a detachment is present, because other vitreous and retinal changes can look similar. A retinal examination is needed to determine the cause.",
        signs: ["Sudden floaters", "Flashes", "Curtain or shadow", "Missing side vision"],
        management:
            "When a retinal detachment is confirmed, treatment may involve laser procedures, freezing treatment, or surgery depending on the type and extent.",
        exam:
            "Evaluation generally includes an urgent dilated retinal examination and additional retinal imaging when needed.",
        nextSteps:
            "This pattern should be evaluated urgently rather than waiting for a routine appointment.",
        rules: [
            ["missingVision", YES_SOMETIMES, 10],
            ["missingArea", ["A curtain-like area", "A larger shadowed area", "Side or peripheral vision"], 10],
            ["missingOnset", ["Suddenly"], 7],
            ["floatersIncrease", ["Yes"], 7],
            ["flashesNew", ["Yes, they are new", "They are not new but have changed"], 7]
        ]
    },

    {
        id: "subconjunctival-hemorrhage",
        name: "Subconjunctival Hemorrhage Pattern",
        category: "Conjunctiva",
        rarity: "common",
        resultType: "symptom",
        description:
            "A subconjunctival hemorrhage is a small area of bleeding underneath the clear tissue covering the white part of the eye. It often looks dramatic because it forms a sharply defined red patch, but it is commonly painless and does not affect vision. Minor strain, rubbing, coughing, blood-thinning medicines, or no obvious cause at all may be associated. Persistent, recurrent, painful, or injury-related redness should still be evaluated.",
        signs: ["Bright or sharply defined red patch", "Usually little pain", "Usually no vision loss"],
        management:
            "Many uncomplicated cases clear on their own as the blood is reabsorbed. Recurrent cases may prompt review of blood pressure, medications, trauma, or other health factors.",
        exam:
            "An eye-care professional can confirm that the blood is superficial and check for injury or other causes when needed.",
        nextSteps:
            "Consider professional evaluation if the redness follows an injury, is painful, affects vision, or repeatedly returns.",
        rules: [
            ["appearanceTypes", ["Redness"], 7],
            ["rednessArea", ["One specific patch"], 10],
            ["painSeverity", ["Mild"], 2]
        ]
    },

    {
        id: "stye",
        name: "Stye (Hordeolum) Pattern",
        category: "Eyelids",
        rarity: "common",
        resultType: "symptom",
        description:
            "A stye is an inflamed or infected eyelid gland that usually creates a localized tender bump. It commonly develops near the eyelash line, although deeper eyelid glands can also be involved. Redness and localized swelling may occur around the bump. Similar eyelid lumps can have other causes, so a persistent or unusual lesion should be examined.",
        signs: ["Tender eyelid bump", "Localized redness", "Swelling", "Often near lash line"],
        management:
            "Management depends on the exact eyelid finding and may include eyelid care recommended by an eye-care professional.",
        exam:
            "An eye-care professional can examine the eyelid margin and glands and determine whether the bump is a stye, chalazion, or another lesion.",
        nextSteps:
            "Arrange an examination if the bump worsens, affects vision, repeatedly returns, or does not improve.",
        rules: [
            ["lidProblemTypes", ["Eyelid bump"], 10],
            ["lidBumpTender", ["Yes", "A little"], 7],
            ["lidBumpLocation", ["Near the eyelashes"], 7],
            ["lidBumpDuration", ["Less than a few days", "Several days to a few weeks"], 4]
        ]
    },

    {
        id: "chalazion",
        name: "Chalazion Pattern",
        category: "Eyelids",
        rarity: "common",
        resultType: "symptom",
        description:
            "A chalazion is a blocked eyelid oil gland that forms a localized lump. It may begin with some tenderness but often becomes relatively painless as it persists. The bump is usually deeper in the eyelid than a typical stye. Persistent or repeatedly recurring eyelid lumps should be examined because several different eyelid conditions can look similar.",
        signs: ["Deeper eyelid lump", "Often less painful", "Can last for weeks", "May recur"],
        management:
            "Treatment depends on size, duration, and symptoms and may include conservative eyelid care or an office procedure when appropriate.",
        exam:
            "An eye-care professional may inspect and feel the eyelid and evaluate associated meibomian-gland or blepharitis findings.",
        nextSteps:
            "Consider an examination for a persistent, recurrent, enlarging, or vision-affecting eyelid lump.",
        rules: [
            ["lidProblemTypes", ["Eyelid bump"], 10],
            ["lidBumpLocation", ["Deeper within the eyelid"], 7],
            ["lidBumpTender", ["No"], 4],
            ["lidBumpDuration", ["More than a few weeks", "It keeps returning"], 7]
        ]
    },

    {
        id: "tear-duct-pattern",
        name: "Tear-Drainage Problem Pattern",
        category: "Tears & Lacrimal",
        rarity: "common",
        resultType: "symptom",
        description:
            "Excess tears normally drain through small openings in the eyelids into the tear-drainage system. If drainage is narrowed or blocked, tears may overflow even when the eye does not feel especially irritated. Some drainage problems are painless, while inflammation or infection near the tear sac can cause tenderness or swelling near the inner corner of the eye. An examination can distinguish drainage problems from reflex tearing caused by dry eye or irritation.",
        signs: ["Persistent overflow tearing", "Watering without irritation", "Sometimes inner-corner tenderness or swelling"],
        management:
            "Treatment depends on whether the problem is simple narrowing, blockage, inflammation, or infection.",
        exam:
            "An eye-care professional may examine the eyelid drainage openings and tear sac and may test how tears drain.",
        nextSteps:
            "Consider an eye examination if watering is persistent, mostly one-sided, or associated with inner-corner pain or swelling.",
        rules: [
            ["tearDischargeTypes", ["Excessive watering", "Clear watery discharge"], 7],
            ["tearingWithoutIrritation", ["Yes", "Sometimes"], 7],
            ["tearInnerCorner", ["Yes", "Sometimes"], 4]
        ]
    },

    {
        id: "recurrent-corneal-erosion",
        name: "Recurrent Corneal Erosion Pattern",
        category: "Cornea",
        rarity: "uncommon",
        resultType: "symptom",
        description:
            "Recurrent corneal erosion occurs when the outermost corneal cells do not remain firmly attached to the layer underneath. People may experience repeated sharp pain or a strong foreign-body sensation, often when first opening the eyes after sleep. Tearing, light sensitivity, and temporary blur can accompany an episode. A previous corneal scratch can be a contributing history, although not everyone remembers an injury.",
        signs: ["Sharp pain on waking", "Foreign-body sensation", "Tearing", "Light sensitivity", "Recurring episodes"],
        management:
            "Management depends on severity and recurrence and may involve lubricating treatment or office-based procedures prescribed by an eye-care professional.",
        exam:
            "A slit-lamp examination can inspect the corneal surface and look for epithelial irregularity.",
        nextSteps:
            "Recurring sharp pain on waking should be discussed with an eye-care professional.",
        rules: [
            ["morningEyeOpeningPain", YES_SOMETIMES, 10],
            ["discomfortTypes", ["Sharp pain", "Feels like something is in my eye"], 7],
            ["foreignBodyEvent", ["I rubbed or scratched my eye", "I woke up with it"], 4],
            ["lightProblemTypes", ["Bright light feels uncomfortable"], 2]
        ]
    },

    {
        id: "fuchs-corneal-edema",
        name: "Corneal Edema / Fuchs-Like Pattern",
        category: "Cornea",
        rarity: "uncommon",
        resultType: "symptom",
        description:
            "Corneal edema means the clear front surface of the eye has accumulated extra fluid and become less transparent. Some endothelial corneal disorders, including Fuchs dystrophy, can cause morning haze or blur that may improve later in the day, along with glare or halos. Symptoms can become more persistent as the condition progresses. Direct corneal examination is needed to identify the cause.",
        signs: ["Morning haze or blur", "Cloudy corneal appearance", "Glare", "Halos", "Gradual progression"],
        management:
            "Management depends on severity and cause and ranges from observation or symptom management to corneal procedures in advanced cases.",
        exam:
            "An eye-care professional may examine the cornea with a slit lamp and may measure corneal thickness or endothelial cells.",
        nextSteps:
            "Persistent or progressive corneal haze, especially with morning blur or glare, deserves an eye examination.",
        rules: [
            ["cornealCloudiness", YES_SOMETIMES, 10],
            ["cornealCloudinessMorning", YES_SOMETIMES, 7],
            ["blurTriggers", ["When I first wake up"], 4],
            ["lightProblemTypes", ["Too much glare", "Halos around lights"], 4]
        ]
    },

    {
        id: "keratoconus",
        name: "Keratoconus / Irregular Corneal Shape Pattern",
        category: "Cornea",
        rarity: "uncommon",
        resultType: "symptom",
        description:
            "Keratoconus is a condition in which the cornea becomes progressively thinner and more irregular in shape. It can cause increasing astigmatism, blur, ghosting, glare, halos, and frequent prescription changes, often beginning in younger people. The two eyes can be affected differently. Corneal imaging is needed to confirm whether keratoconus is present.",
        signs: ["Progressive irregular blur", "Ghosting", "Glare or halos", "Frequent prescription changes", "Eyes may differ"],
        management:
            "Management depends on severity and progression and may include glasses, specialty contact lenses, corneal cross-linking, or other procedures.",
        exam:
            "Evaluation may include refraction, slit-lamp examination, and corneal topography or tomography.",
        nextSteps:
            "Consider an eye examination if blur or astigmatism is progressively changing, especially if the eyes differ substantially.",
        rules: [
            ["blurredVision", YES_SOMETIMES, 4],
            ["frequentRxChanges", YES_SOMETIMES, 7],
            ["highRxDifference", ["Yes"], 4],
            ["lightProblemTypes", ["Halos around lights", "Starbursts around lights", "Too much glare"], 4],
            ["doubleImageDirection", ["One looks like a faint copy or shadow"], 4],
            ["symptomAgeOfOnset", ["Teen years", "Young adulthood"], 2]
        ]
    },

    {
        id: "allergic-conjunctivitis",
        name: "Allergic Conjunctivitis Pattern",
        category: "Conjunctiva",
        rarity: "common",
        resultType: "symptom",
        description:
            "Allergic conjunctivitis happens when the surface of the eye reacts to an allergen. Itching is often a major feature and may occur with redness, watering, swelling, or stringy discharge. Symptoms often affect both eyes and may follow seasonal or environmental exposure. Other causes of red or irritated eyes can overlap with allergy symptoms, especially when pain or vision changes are present.",
        signs: ["Itching", "Watering", "Redness", "Swelling", "Environmental triggers"],
        management:
            "Management may include allergen avoidance and eye treatments recommended by an eye-care professional.",
        exam:
            "An eye-care professional can examine the conjunctiva, eyelids, and cornea and check whether another cause of redness is present.",
        nextSteps:
            "Persistent or severe symptoms, significant pain, or a vision change should be professionally evaluated.",
        rules: [
            ["discomfortTypes", ["Itching"], 10],
            ["itchTriggers", ["Outdoors", "Around pets", "Around dust", "During certain seasons"], 7],
            ["tearDischargeTypes", ["Excessive watering", "Clear watery discharge"], 4],
            ["appearanceTypes", ["Redness"], 4],
            ["medicalHistory", ["Significant allergies", "Asthma or atopic condition"], 2]
        ]
    },

    {
        id: "viral-conjunctivitis",
        name: "Viral Conjunctivitis-Like Pattern",
        category: "Conjunctiva",
        rarity: "common",
        resultType: "symptom",
        description:
            "Viral conjunctivitis is inflammation of the eye surface caused by a virus. It commonly causes redness, watering, irritation, and sometimes symptoms that begin in one eye before the other becomes involved. A recent respiratory illness or contact with someone who has a red eye can support the pattern. Symptoms overlap with allergic, bacterial, and more serious causes of red eye, so pain, light sensitivity, or vision change deserve extra attention.",
        signs: ["Red watery eye", "Irritation", "May spread between eyes", "Recent illness may occur"],
        management:
            "Management depends on the cause and severity, and antibiotics do not treat viral infection.",
        exam:
            "An eye-care professional can inspect the conjunctiva and cornea and determine whether another red-eye condition is present.",
        nextSteps:
            "Consider evaluation when symptoms are significant, persistent, painful, light-sensitive, or associated with vision change.",
        rules: [
            ["appearanceTypes", ["Redness"], 7],
            ["tearDischargeTypes", ["Clear watery discharge", "Excessive watering"], 7],
            ["tearDischargeEye", ["It started in one and moved to the other"], 7],
            ["recentIllness", ["Yes", "Possibly"], 4]
        ]
    },

    {
        id: "bacterial-conjunctivitis",
        name: "Bacterial Conjunctivitis-Like Pattern",
        category: "Conjunctiva",
        rarity: "common",
        resultType: "symptom",
        description:
            "Bacterial conjunctivitis is an infection of the conjunctiva that can cause redness and discharge. Thicker discharge, sticky eyelids, and crusting after sleep can support a bacterial pattern. However, discharge appearance alone cannot identify the exact cause, and several red-eye conditions can overlap. Significant pain, light sensitivity, or reduced vision is less typical of uncomplicated conjunctivitis and deserves professional evaluation.",
        signs: ["Redness", "Thicker discharge", "Sticky eyelids", "Morning crusting"],
        management:
            "Treatment depends on the cause, severity, age, and clinical findings. An eye-care professional can determine whether antibiotic treatment is appropriate.",
        exam:
            "The eye surface, eyelids, and cornea may be examined to distinguish bacterial conjunctivitis from other causes.",
        nextSteps:
            "Seek professional advice for significant discharge, persistent symptoms, contact-lens-associated redness, pain, or vision changes.",
        rules: [
            ["appearanceTypes", ["Redness"], 7],
            ["tearDischargeTypes", ["Thick or mucus-like discharge", "Yellow or greenish discharge", "Sticky eyes", "Crusting after sleep"], 10]
        ]
    },

    {
        id: "episcleritis",
        name: "Episcleritis-Like Pattern",
        category: "Inflammation",
        rarity: "uncommon",
        resultType: "symptom",
        description:
            "Episcleritis is inflammation of a thin tissue layer over the white part of the eye. It often causes a localized red area with mild irritation or tenderness and usually has little effect on vision. Episodes may recur, and sometimes no cause is found. Deeper or more painful inflammation can represent a different condition and needs direct examination.",
        signs: ["Localized red patch", "Mild tenderness", "Usually little vision change"],
        management:
            "Many cases improve with time, although treatment may be recommended for discomfort or recurrent inflammation.",
        exam:
            "A slit-lamp examination helps distinguish superficial episcleritis from deeper scleritis and other causes of redness.",
        nextSteps:
            "Consider an eye examination for recurring redness or if pain, light sensitivity, or vision change develops.",
        rules: [
            ["appearanceTypes", ["Redness"], 7],
            ["rednessArea", ["One specific patch"], 7],
            ["painSeverity", ["Mild"], 4]
        ]
    },

    {
        id: "scleritis",
        name: "Scleritis-Like Pattern",
        category: "Inflammation",
        rarity: "uncommon",
        resultType: "prompt",
        description:
            "Scleritis is deeper inflammation of the white outer wall of the eye. It can cause significant deep aching pain, tenderness, redness, and sometimes vision changes. Pain may worsen with eye movement or touching the area around the closed eye. Scleritis can sometimes be associated with systemic inflammatory disease, so direct professional evaluation is important.",
        signs: ["Deep eye pain", "Redness", "Tenderness", "Pain with movement", "Possible vision change"],
        management:
            "Treatment depends on the type and cause and may involve prescription anti-inflammatory or other systemic treatment.",
        exam:
            "An eye-care professional may examine the sclera with a slit lamp and consider systemic evaluation when appropriate.",
        nextSteps:
            "A deep painful red-eye pattern should be evaluated promptly.",
        rules: [
            ["appearanceTypes", ["Redness"], 7],
            ["discomfortTypes", ["Aching", "Throbbing", "Sore or tender"], 7],
            ["painSeverity", ["Moderate", "Severe"], 7],
            ["painMovement", ["Yes", "Sometimes"], 4],
            ["painTouch", ["Yes", "Sometimes"], 4],
            ["medicalHistory", ["Autoimmune or inflammatory condition", "Inflammatory arthritis"], 3]
        ]
    },

    {
        id: "anterior-uveitis",
        name: "Anterior Uveitis / Iritis Pattern",
        category: "Inflammation",
        rarity: "uncommon",
        resultType: "prompt",
        description:
            "Anterior uveitis is inflammation inside the front portion of the eye. It can cause eye pain, redness, sensitivity to light, blurry vision, and sometimes floaters, and symptoms may begin fairly quickly. Some cases are associated with inflammatory or autoimmune conditions, while others have no identified systemic cause. An examination is needed because similar symptoms can occur with corneal disease or pressure-related problems.",
        signs: ["Eye pain", "Redness", "Light sensitivity", "Blur", "Sometimes floaters"],
        management:
            "Treatment depends on the cause and typically requires prescription therapy and follow-up to control inflammation and watch for complications.",
        exam:
            "A slit-lamp examination is used to look for inflammation inside the eye, and a dilated examination may also be performed.",
        nextSteps:
            "Pain, redness, strong light sensitivity, or vision changes should be evaluated promptly.",
        rules: [
            ["appearanceTypes", ["Redness"], 7],
            ["rednessArea", ["Mainly around the colored part of the eye"], 7],
            ["discomfortTypes", ["Aching", "Sharp pain"], 7],
            ["lightProblemTypes", ["Bright light feels uncomfortable"], 10],
            ["blurredVision", YES_SOMETIMES, 4],
            ["floaters", YES_SOMETIMES, 2]
        ]
    },

    {
        id: "acute-angle-closure",
        name: "Acute Angle-Closure / Sudden Eye-Pressure Pattern",
        category: "Glaucoma & Pressure",
        rarity: "uncommon",
        resultType: "urgent",
        description:
            "A sudden blockage of the eye's drainage angle can cause pressure inside the eye to rise quickly. A concerning pattern includes sudden intense eye pain, a red eye, blurry vision, and sometimes halos, headache, nausea, or vomiting. Other serious eye conditions can cause a similar painful red-eye pattern, so symptoms alone cannot confirm angle closure. The important point is that this combination should not wait for a routine appointment.",
        signs: ["Sudden severe eye pain", "Redness", "Blur", "Halos", "Nausea or headache"],
        management:
            "When angle closure is confirmed, treatment is aimed at lowering eye pressure quickly and restoring drainage.",
        exam:
            "Evaluation may include eye-pressure measurement, examination of the front of the eye, and assessment of the drainage angle.",
        nextSteps:
            "This pattern requires urgent professional evaluation.",
        rules: [
            ["painSeverity", ["Severe"], 10],
            ["painOnset", ["Suddenly"], 10],
            ["appearanceTypes", ["Redness"], 7],
            ["blurredVision", YES_SOMETIMES, 7],
            ["lightProblemTypes", ["Halos around lights"], 7],
            ["painAssociated", ["Nausea or vomiting", "Headache", "Halos around lights"], 7]
        ]
    },

    {
        id: "optic-neuritis",
        name: "Optic Neuritis / Inflammatory Optic-Nerve Pattern",
        category: "Optic Nerve",
        rarity: "uncommon",
        resultType: "prompt",
        description:
            "Optic neuritis is inflammation affecting the optic nerve. A typical pattern can include reduced vision in one eye, colors or brightness looking different, and pain that becomes worse with eye movement. The exact pattern varies, and other optic-nerve or retinal conditions can cause similar changes. Professional evaluation is needed to determine whether the optic nerve is involved and why.",
        signs: ["One-eye vision change", "Color or brightness difference", "Pain with eye movement"],
        management:
            "Treatment depends on the cause, severity, and associated medical findings, and some cases require additional neurologic evaluation.",
        exam:
            "Assessment may include visual acuity, pupils, color vision, visual fields, optic-nerve examination, OCT, and other testing when appropriate.",
        nextSteps:
            "New vision reduction with pain on eye movement or a color/brightness difference should be evaluated promptly.",
        rules: [
            ["blurredVision", YES_SOMETIMES, 4],
            ["colorChange", YES_SOMETIMES, 7],
            ["dimVision", ["Right eye seems dimmer", "Left eye seems dimmer"], 10],
            ["painMovement", ["Yes", "Sometimes"], 10]
        ]
    },

    {
        id: "raised-intracranial-pressure-pattern",
        name: "Raised-Pressure / Neuro-Ophthalmic Warning Pattern",
        category: "Neuro-Ophthalmic",
        rarity: "uncommon",
        resultType: "prompt",
        description:
            "Certain headache and visual patterns can occur when pressure around the brain and optic nerves is elevated. Brief episodes of dim or gray vision, pulse-synchronous whooshing sounds, and double vision can be relevant clues, but none of these symptoms proves that increased pressure is present. Because optic-nerve swelling cannot be identified through this questionnaire, the result is a warning pattern rather than a diagnosis. Direct medical and eye evaluation is needed when this pattern is new or significant.",
        signs: ["Headache", "Brief visual dimming", "Position-related visual obscurations", "Pulse-like whooshing", "Possible double vision"],
        management:
            "Treatment depends entirely on the underlying cause of the pressure change.",
        exam:
            "Evaluation may include optic-nerve examination, visual fields, OCT, and additional medical testing or imaging when indicated.",
        nextSteps:
            "New or significant symptoms fitting this pattern should be discussed promptly with a medical or eye-care professional.",
        rules: [
            ["transientVisualObscurations", YES_SOMETIMES, 10],
            ["obscurationPosition", YES_SOMETIMES, 7],
            ["pulsatileWhoosh", YES_SOMETIMES, 7],
            ["headacheWithEyes", YES_SOMETIMES, 4],
            ["doubleVision", YES_SOMETIMES, 2]
        ]
    },

    {
        id: "ocular-myasthenia-pattern",
        name: "Variable Eye-Alignment / Ocular Myasthenia-Like Pattern",
        category: "Neurologic / Eye Movement",
        rarity: "rare",
        resultType: "symptom",
        description:
            "Some neuromuscular problems can cause eye alignment or eyelid position to vary during the day. A pattern of double vision or drooping that becomes more noticeable with fatigue can raise the possibility of a fatigable eye-movement problem. Many more common binocular-vision problems can also fluctuate with tiredness, so this result requires stronger evidence than a single symptom. A professional eye and neurologic examination is needed to distinguish the cause.",
        signs: ["Variable double vision", "Drooping eyelid", "Worse with fatigue", "Symptoms fluctuate"],
        management:
            "Treatment depends on whether a neuromuscular condition is confirmed and may involve medical treatment rather than eye-only treatment.",
        exam:
            "Evaluation may include eye alignment and movement testing, eyelid assessment, and additional neurologic testing when appropriate.",
        nextSteps:
            "New or persistent fluctuating double vision or drooping should be professionally evaluated.",
        rules: [
            ["doubleVision", YES_SOMETIMES, 7],
            ["doubleAssociated", ["Drooping eyelid"], 10],
            ["lidProblemTypes", ["Drooping eyelid"], 7],
            ["ptosisFatigue", YES_SOMETIMES, 10],
            ["doubleFrequency", ["Frequently", "Occasionally", "Only under certain circumstances"], 4]
        ]
    },

    {
        id: "migraine-aura",
        name: "Migraine-Associated Visual Aura Pattern",
        category: "Neurologic Visual",
        rarity: "common",
        resultType: "symptom",
        description:
            "Migraine can cause temporary visual effects such as shimmering lights, zig-zag patterns, blind spots, or changing areas of blur. These visual symptoms can occur before or during a headache and sometimes occur without significant head pain. New visual symptoms should not automatically be assumed to be migraine because retinal and neurologic conditions can overlap. A familiar recurring pattern is more supportive than a first-ever episode.",
        signs: ["Shimmering or zig-zag vision", "Temporary blind spots", "Headache", "Light sensitivity", "Prior similar episodes"],
        management:
            "Management focuses on confirming the diagnosis, identifying triggers, and using an appropriate migraine treatment plan when needed.",
        exam:
            "An eye examination can help exclude ocular causes when visual symptoms are new, unusual, or one-eye-only.",
        nextSteps:
            "Seek professional evaluation for a first episode, a substantially changed pattern, persistent symptoms, or symptoms clearly limited to one eye.",
        rules: [
            ["headacheFeatures", ["Flashing or shimmering lights", "Zig-zag or moving visual patterns", "Temporary blind or blurry spots"], 10],
            ["headacheWithEyes", YES_SOMETIMES, 4],
            ["medicalHistory", ["Migraine"], 4],
            ["migraineHistory", ["Yes"], 7]
        ]
    },

    {
        id: "visual-snow-pattern",
        name: "Visual Snow–Like Pattern",
        category: "Neurologic Visual",
        rarity: "rare",
        resultType: "symptom",
        description:
            "Visual snow describes a persistent field of tiny flickering or static-like dots across vision. Some people also report light sensitivity, afterimages, or other visual phenomena. Similar complaints can occur with migraine, medication effects, retinal problems, or neurologic conditions, so this questionnaire cannot determine the cause. A persistent pattern deserves professional evaluation, especially when it is new.",
        signs: ["Continuous static-like vision", "Often both eyes/whole visual field", "May include light sensitivity or afterimages"],
        management:
            "Management depends on confirming the diagnosis and identifying any associated migraine, neurologic, medication, or ocular factors.",
        exam:
            "An eye examination can help exclude retinal and optic-nerve causes before a neurologic visual syndrome is considered.",
        nextSteps:
            "Consider professional evaluation for persistent static-like vision, particularly if the symptom is new or changing.",
        rules: [
            ["visualSnow", YES_SOMETIMES, 10],
            ["palinopsia", YES_SOMETIMES, 4],
            ["lightProblems", YES_SOMETIMES, 2]
        ]
    },

    {
        id: "retinitis-pigmentosa-pattern",
        name: "Inherited Retinal Degeneration / Retinitis Pigmentosa–Like Pattern",
        category: "Inherited Retina",
        rarity: "rare",
        resultType: "symptom",
        description:
            "Inherited retinal degenerations are a group of genetic conditions that gradually affect the retina. Retinitis pigmentosa commonly begins with difficulty seeing in dim light and later progressive loss of peripheral vision, usually involving both eyes. Several inherited retinal disorders can produce overlapping patterns, so symptom answers cannot determine the specific genetic diagnosis. Family history and age of onset can make an inherited pattern more meaningful.",
        signs: ["Progressive night-vision difficulty", "Progressive peripheral-field loss", "Usually both eyes", "Family history may be present"],
        management:
            "Management depends on the exact inherited condition and may include low-vision support, monitoring, treatment of associated complications, and genetic counseling or testing when appropriate.",
        exam:
            "Evaluation may include dilated retinal examination, visual fields, retinal imaging, electrophysiology, and genetic testing when appropriate.",
        nextSteps:
            "Progressive night-vision and peripheral-field changes should be evaluated by an eye-care professional, particularly when they began young or run in the family.",
        rules: [
            ["lightProblemTypes", ["Difficulty seeing at night"], 10],
            ["nightProgression", ["It has gradually become harder"], 10],
            ["missingArea", ["Side or peripheral vision"], 7],
            ["similarFamilyVisionPattern", ["Progressive night-vision difficulty", "Progressive peripheral-vision loss", "Retinal degeneration or dystrophy"], 7],
            ["symptomAgeOfOnset", ["Childhood", "Teen years", "Young adulthood"], 4]
        ]
    },

    {
        id: "stargardt-pattern",
        name: "Inherited Macular / Stargardt-Like Pattern",
        category: "Inherited Retina",
        rarity: "rare",
        resultType: "symptom",
        description:
            "Stargardt disease is an inherited retinal condition that mainly affects central vision and often begins in childhood, the teen years, or young adulthood. People may notice slowly worsening central blur or missing spots, light sensitivity, difficulty adapting to darkness, or color changes. Other inherited and acquired macular disorders can look similar. A retinal examination and specialized testing are needed before a specific inherited diagnosis can be made.",
        signs: ["Younger onset", "Progressive central-vision change", "Central missing spot", "Light sensitivity", "Possible color or dark-adaptation difficulty"],
        management:
            "Management focuses on monitoring, protecting remaining vision, low-vision support when needed, and genetic evaluation or counseling when appropriate.",
        exam:
            "Evaluation may include retinal imaging, visual fields, specialized retinal testing, and genetic testing when indicated.",
        nextSteps:
            "Progressive central vision loss beginning at a younger age deserves a comprehensive retinal evaluation.",
        rules: [
            ["missingArea", ["Center", "A specific spot"], 7],
            ["distortedVision", YES_SOMETIMES, 4],
            ["lightProblemTypes", ["Bright light feels uncomfortable"], 4],
            ["darkAdaptation", YES_SOMETIMES, 4],
            ["colorChange", YES_SOMETIMES, 4],
            ["symptomAgeOfOnset", ["Childhood", "Teen years", "Young adulthood"], 7],
            ["similarFamilyVisionPattern", ["Progressive central-vision loss", "Retinal degeneration or dystrophy"], 4]
        ]
    },

    {
        id: "posterior-capsule-opacification",
        name: "Post-Cataract-Surgery Clouding Pattern",
        category: "Lens",
        rarity: "common",
        resultType: "symptom",
        description:
            "After cataract surgery, the natural lens is replaced with a clear artificial lens. Sometimes the thin capsule that supports the artificial lens becomes cloudy later, causing vision to become hazy again after it had initially improved. This is often called posterior capsule opacification. Other postoperative problems can also cause blur, so an eye examination is needed to confirm the cause.",
        signs: ["Previous cataract surgery", "Vision initially clearer after surgery", "Later return of haze or blur"],
        management:
            "When posterior capsule opacification is confirmed and visually significant, it is commonly treated with a short laser procedure.",
        exam:
            "An eye-care professional can examine the artificial lens and capsule and check for other causes of postoperative blur.",
        nextSteps:
            "Arrange an eye examination if vision becomes cloudy again after cataract surgery.",
        rules: [
            ["cataractSurgeryHistory", ["Right eye", "Left eye", "Both eyes"], 10],
            ["postCataractClouding", ["Yes"], 10],
            ["blurredVision", YES_SOMETIMES, 4]
        ]
    },

    {
        id: "glaucoma-risk",
        name: "Glaucoma Risk / Monitoring Relevance",
        category: "Glaucoma & Pressure",
        rarity: "common",
        resultType: "risk",
        description:
            "Open-angle glaucoma can develop without noticeable early symptoms, so a symptom questionnaire cannot determine whether it is present. Family history, previously elevated eye pressure, a glaucoma-suspect designation, or known narrow angles can make regular professional monitoring more important. Peripheral-vision changes can occur later in glaucoma but are not specific to it. This result reflects risk or known monitoring history, not a diagnosis.",
        signs: ["Often no early symptoms", "Possible later peripheral-field loss", "Elevated-pressure or family-history context"],
        management:
            "When glaucoma is diagnosed, treatment aims to lower eye pressure and reduce the chance of further optic-nerve damage.",
        exam:
            "Monitoring may include eye-pressure measurement, optic-nerve assessment, visual fields, OCT, and drainage-angle evaluation when appropriate.",
        nextSteps:
            "Keep up with comprehensive eye examinations if you have glaucoma risk factors or have previously been told you need monitoring.",
        rules: [
            ["previousPressure", ["Right eye", "Left eye", "Both eyes"], 10],
            ["glaucomaSuspect", ["Yes"], 10],
            ["narrowAnglesHistory", ["Yes"], 7],
            ["familyEyeHistory", ["Glaucoma"], 7],
            ["steroidExposure", ["Yes"], 2],
            ["missingArea", ["Side or peripheral vision"], 2]
        ]
    }

];



// ==========================================================
// EXTENDED REFERENCE / RISK LIBRARY
// ==========================================================
//
// These conditions are intentionally retained in the project so the
// educational library can grow without forcing every rare or
// examination-dependent disorder into the symptom matcher.
//
// A condition can move from reference-only to a named match later if
// the questionnaire captures enough distinctive information and the
// scoring profile is professionally reviewed.
// ==========================================================

const extendedReferenceLibrary = [

    // Refractive / binocular / developmental
    "Myopia", "Hyperopia", "Astigmatism", "Presbyopia",
    "Anisometropia", "Accommodative insufficiency",
    "Accommodative excess or spasm", "Accommodative infacility",
    "Convergence insufficiency", "Convergence excess",
    "Other binocular vision dysfunction", "Strabismus",
    "Esotropia", "Exotropia", "Hypertropia", "Amblyopia",
    "Strabismic amblyopia", "Anisometropic amblyopia",
    "Deprivation amblyopia", "Duane retraction syndrome",
    "Brown syndrome",

    // Ocular surface / cornea
    "Aqueous-deficient dry eye", "Evaporative dry eye",
    "Meibomian gland dysfunction", "Exposure keratopathy",
    "Superficial punctate keratitis", "Corneal abrasion",
    "Corneal foreign body", "Recurrent corneal erosion",
    "Infectious keratitis", "Corneal ulcer", "Herpes simplex keratitis",
    "Herpes zoster ophthalmic disease", "Acanthamoeba keratitis",
    "Fungal keratitis", "UV photokeratitis", "Thermal ocular-surface injury",
    "Keratoconus", "Post-refractive-surgery corneal ectasia",
    "Corneal edema", "Fuchs endothelial corneal dystrophy",
    "Epithelial basement membrane dystrophy",
    "Other corneal dystrophy", "Corneal scar or opacity",
    "Pterygium", "Pinguecula", "Neurotrophic keratitis",
    "Limbal stem-cell deficiency", "Iridocorneal endothelial syndrome",
    "Stevens-Johnson-associated ocular surface disease",

    // Conjunctiva
    "Viral conjunctivitis", "Adenoviral conjunctivitis",
    "Bacterial conjunctivitis", "Chronic bacterial conjunctivitis",
    "Allergic conjunctivitis", "Seasonal allergic conjunctivitis",
    "Perennial allergic conjunctivitis", "Atopic keratoconjunctivitis",
    "Vernal keratoconjunctivitis", "Giant papillary conjunctivitis",
    "Irritant conjunctivitis", "Toxic conjunctivitis",
    "Contact-lens-solution reaction", "Subconjunctival hemorrhage",
    "Chemosis", "Conjunctival cyst", "Conjunctival concretion",
    "Conjunctival nevus", "Conjunctival scarring",
    "Ocular cicatricial pemphigoid",

    // Eyelids / lacrimal
    "External hordeolum", "Internal hordeolum", "Chalazion",
    "Anterior blepharitis", "Posterior blepharitis",
    "Demodex-associated blepharitis", "Eyelid dermatitis",
    "Contact dermatitis of eyelids", "Atopic eyelid disease",
    "Ocular rosacea eyelid disease", "Ptosis", "Dermatochalasis",
    "Entropion", "Ectropion", "Trichiasis", "Distichiasis",
    "Lagophthalmos", "Eyelid retraction", "Eyelid myokymia",
    "Benign essential blepharospasm", "Hemifacial spasm",
    "Preseptal cellulitis", "Orbital cellulitis", "Tear-duct obstruction",
    "Punctal stenosis", "Dacryocystitis", "Canaliculitis",
    "Persistent or changing eyelid lesion",

    // Lens
    "Age-related cataract", "Nuclear cataract", "Cortical cataract",
    "Posterior subcapsular cataract", "Traumatic cataract",
    "Congenital cataract", "Posterior capsule opacification",
    "Lens subluxation", "Lens dislocation", "Ectopia lentis",
    "Aphakia", "Pseudophakia", "IOL decentration or dislocation",

    // Vitreous
    "Common vitreous floaters", "Vitreous syneresis",
    "Posterior vitreous detachment", "Vitreoretinal traction",
    "Vitreous hemorrhage", "Vitritis", "Asteroid hyalosis",
    "Synchysis scintillans", "Persistent fetal vasculature",
    "Post-traumatic vitreous change",

    // Retina / macula
    "Retinal tear", "Rhegmatogenous retinal detachment",
    "Tractional retinal detachment", "Exudative retinal detachment",
    "Lattice degeneration", "Retinal hole", "Retinoschisis",
    "Vitreomacular traction", "Epiretinal membrane", "Macular pseudohole",
    "Macular hole", "Age-related macular degeneration",
    "Dry age-related macular degeneration", "Wet age-related macular degeneration",
    "Geographic atrophy", "Macular drusen",
    "Diabetic retinopathy", "Proliferative diabetic retinopathy",
    "Diabetic macular edema", "Macular edema", "Cystoid macular edema",
    "Central serous chorioretinopathy",
    "Central retinal vein occlusion", "Branch retinal vein occlusion",
    "Central retinal artery occlusion", "Branch retinal artery occlusion",
    "Retinal macroaneurysm", "Hypertensive retinopathy",
    "Sickle-cell retinopathy", "Valsalva retinopathy",
    "Ocular ischemic syndrome", "Macular telangiectasia",
    "Best vitelliform macular dystrophy",
    "Adult-onset vitelliform macular dystrophy",
    "Retinitis pigmentosa", "Rod-cone dystrophy", "Cone dystrophy",
    "Cone-rod dystrophy", "Stargardt disease",
    "Leber congenital amaurosis", "Achromatopsia",
    "Blue-cone monochromacy", "Choroideremia",
    "Bietti crystalline dystrophy", "X-linked juvenile retinoschisis",
    "Familial exudative vitreoretinopathy", "Enhanced S-cone syndrome",
    "Gyrate atrophy", "North Carolina macular dystrophy",
    "Sorsby fundus dystrophy", "Inherited retinal degeneration",
    "Ocular histoplasmosis syndrome", "Toxoplasmosis chorioretinitis",
    "CMV retinitis", "Acute retinal necrosis",
    "White-dot syndrome family", "MEWDS", "APMPPE",
    "Birdshot chorioretinopathy", "Serpiginous choroiditis",
    "Punctate inner choroidopathy", "AZOOR",
    "Choroidal neovascularization", "Choroidal detachment",
    "Choroidal rupture", "Pathologic myopia",
    "Myopic macular degeneration",

    // Glaucoma / pressure
    "Primary open-angle glaucoma", "Normal-tension glaucoma",
    "Ocular hypertension", "Glaucoma suspect",
    "Acute angle-closure glaucoma", "Intermittent angle closure",
    "Chronic angle-closure glaucoma", "Secondary glaucoma",
    "Steroid-associated glaucoma", "Uveitic glaucoma",
    "Traumatic glaucoma", "Pigmentary glaucoma",
    "Pigment dispersion syndrome", "Pseudoexfoliation glaucoma",
    "Pseudoexfoliation syndrome", "Neovascular glaucoma",
    "Lens-induced glaucoma", "Congenital glaucoma",
    "Juvenile open-angle glaucoma", "Narrow drainage angles",

    // Optic nerve
    "Optic neuritis", "Demyelinating optic neuritis",
    "Atypical optic neuritis", "MOG-associated optic neuritis",
    "Neuromyelitis optica-associated optic neuritis",
    "Neuroretinitis", "Non-arteritic anterior ischemic optic neuropathy",
    "Arteritic anterior ischemic optic neuropathy",
    "Posterior ischemic optic neuropathy", "Compressive optic neuropathy",
    "Traumatic optic neuropathy", "Toxic optic neuropathy",
    "Nutritional optic neuropathy", "Leber hereditary optic neuropathy",
    "Dominant optic atrophy", "Optic atrophy", "Optic disc drusen",
    "Papilledema", "Pseudopapilledema",
    "Idiopathic intracranial hypertension",
    "Optic nerve hypoplasia", "Optic nerve sheath meningioma",

    // Inflammation / sclera
    "Anterior uveitis", "Iritis", "Intermediate uveitis",
    "Posterior uveitis", "Panuveitis", "Recurrent uveitis",
    "HLA-B27-associated uveitis", "Behcet-associated uveitis",
    "Sarcoid-associated uveitis", "VKH-related ocular inflammation",
    "Sympathetic ophthalmia", "Fuchs heterochromic iridocyclitis",
    "Endophthalmitis", "Episcleritis", "Scleritis",
    "Posterior scleritis", "Necrotizing scleritis",

    // Neurologic / orbital
    "Migraine with visual aura", "Acephalgic visual aura",
    "Persistent visual aura", "Visual snow syndrome", "Palinopsia",
    "Third cranial nerve palsy", "Fourth cranial nerve palsy",
    "Sixth cranial nerve palsy", "Internuclear ophthalmoplegia",
    "Ocular myasthenia gravis", "Nystagmus", "Acquired nystagmus",
    "Skew deviation", "Thyroid eye disease",
    "Idiopathic orbital inflammation", "Orbital cellulitis",
    "Orbital tumor or compression", "Carotid-cavernous fistula",
    "Cavernous sinus syndrome", "Horner syndrome", "Adie tonic pupil",
    "Anisocoria", "Hemianopia", "Quadrantanopia",
    "Stroke-related visual field loss", "TIA-related visual change",
    "Amaurosis fugax", "Occipital visual pathway disorder",
    "Cortical visual impairment",

    // Trauma / exposure
    "Blunt ocular trauma", "Penetrating eye injury",
    "Corneal laceration", "Conjunctival laceration",
    "Traumatic iritis", "Traumatic hyphema", "Commotio retinae",
    "Orbital fracture", "Orbital hemorrhage",
    "Chemical ocular injury", "Acid ocular injury", "Alkali ocular injury",
    "Irritant exposure", "Solar retinopathy",
    "Laser-related retinal injury", "Radiation-related ocular injury",

    // Congenital / genetic / systemic
    "Aniridia", "Iris coloboma", "Chorioretinal coloboma",
    "Optic nerve coloboma", "Microphthalmia", "Anophthalmia",
    "Axenfeld-Rieger spectrum", "Peters anomaly",
    "Ocular albinism", "Oculocutaneous albinism eye pattern",
    "Congenital stationary night blindness", "Usher syndrome",
    "Marfan-associated ocular disease", "Stickler-associated retinal disease",
    "Ehlers-Danlos-associated ocular disease",
    "Neurofibromatosis-associated ocular disease",
    "Tuberous sclerosis-associated ocular disease",
    "Von Hippel-Lindau-associated retinal disease",
    "Fabry-associated ocular disease", "Wilson-related ocular findings",
    "Retinopathy of prematurity", "Coats disease", "Retinoblastoma",

    // Systemic / medication associated
    "Sjögren-associated dry eye", "Thyroid eye disease",
    "Multiple-sclerosis-associated optic neuritis",
    "Myasthenia-associated diplopia", "Rosacea-associated ocular surface disease",
    "HLA-B27 ocular inflammation", "Sarcoidosis-associated ocular inflammation",
    "Behcet-associated ocular inflammation",
    "Steroid-associated ocular disease",
    "Hydroxychloroquine retinal toxicity",
    "Ethambutol optic toxicity", "Amiodarone ocular effects",
    "Topiramate-associated angle-closure pattern",
    "Isotretinoin-associated dry eye",
    "Tamoxifen-associated retinal toxicity",
    "Nutritional optic neuropathy", "Vitamin-A-deficiency night blindness"
];


// ==========================================================
// TEST STATE
// ==========================================================

let currentTest = null;
let currentQuestionId = null;
let answers = {};
let questionHistory = [];


// ==========================================================
// QUESTION / BRANCH HELPERS
// ==========================================================

function answerMatches(questionId, expectedAnswers) {
    const value = answers[questionId];

    if (value === undefined || value === null) {
        return false;
    }

    if (Array.isArray(value)) {
        return expectedAnswers.some(expected => value.includes(expected));
    }

    return expectedAnswers.includes(value);
}


function shouldShowQuestion(question) {

    if (question.showIf) {
        if (!answerMatches(question.showIf.questionId, question.showIf.answers)) {
            return false;
        }
    }

    if (question.showIfSelected) {
        if (!answerMatches(question.showIfSelected.questionId, question.showIfSelected.answers)) {
            return false;
        }
    }

    if (question.showIfAny) {
        const any = question.showIfAny.some(condition =>
            answerMatches(condition.questionId, condition.answers)
        );

        if (!any) {
            return false;
        }
    }

    return true;
}


function getQuestion(questionId) {
    return tests[currentTest].questions.find(q => q.id === questionId);
}


function getVisibleQuestions() {
    return tests[currentTest].questions.filter(shouldShowQuestion);
}


// ==========================================================
// START / DISPLAY
// ==========================================================

function startTest(testType) {

    currentTest = testType;
    answers = {};
    questionHistory = [];

    const visible = getVisibleQuestions();

    if (!visible.length) {
        console.error("No visible questions found.");
        return;
    }

    currentQuestionId = visible[0].id;

    document.getElementById("selectionScreen").classList.add("hidden");
    document.getElementById("completionScreen").classList.add("hidden");
    document.getElementById("testScreen").classList.remove("hidden");

    showQuestion();
}



// ==========================================================
// VISION TEST CUSTOM UI
// ==========================================================

function visionUsesCorrection() {
    return [
        "Glasses",
        "Contact lenses",
        "Both glasses and contact lenses",
        "I have a prescription but do not regularly wear correction"
    ].includes(answers.visionCorrectionUse);
}


function renderPrescriptionForm(question, container) {

    const saved = answers[question.id] || {};

    const fields = [
        ["sphere", "Sphere (SPH)"],
        ["cylinder", "Cylinder (CYL)"],
        ["axis", "Axis"],
        ["add", "ADD"],
        ["prism", "Prism"]
    ];

    const wrapper = document.createElement("div");
    wrapper.className = "prescription-form";

    wrapper.innerHTML = `
        <div class="rx-heading-row">
            <span></span>
            <strong>Right Eye (OD)</strong>
            <strong>Left Eye (OS)</strong>
        </div>

        ${fields.map(([key, label]) => `
            <div class="rx-row">
                <label>${label}</label>

                <input
                    id="rx-${key}-od"
                    type="text"
                    inputmode="decimal"
                    placeholder="Optional"
                    value="${escapeHtml(saved[`${key}OD`] || "")}"
                >

                <input
                    id="rx-${key}-os"
                    type="text"
                    inputmode="decimal"
                    placeholder="Optional"
                    value="${escapeHtml(saved[`${key}OS`] || "")}"
                >
            </div>
        `).join("")}

        <div class="rx-help">
            <strong>What do these mean?</strong>
            <p>
                SPH is the main lens power. CYL and Axis describe astigmatism.
                ADD is extra near power used in some multifocal prescriptions.
                Prism is used in some prescriptions for eye-alignment needs.
            </p>
            <p>
                You do not need to fill every field. Enter only what you know.
            </p>
        </div>

        <button class="primary-button rx-save-button" type="button">
            Save Prescription Information
        </button>

        <button class="secondary-button rx-skip-button" type="button">
            Continue Without Entering Numbers
        </button>
    `;

    const save = wrapper.querySelector(".rx-save-button");
    const skip = wrapper.querySelector(".rx-skip-button");

    save.addEventListener("click", () => {

        const rx = {};

        fields.forEach(([key]) => {
            rx[`${key}OD`] = wrapper.querySelector(`#rx-${key}-od`).value.trim();
            rx[`${key}OS`] = wrapper.querySelector(`#rx-${key}-os`).value.trim();
        });

        rx.entered = Object.entries(rx)
            .some(([key, value]) => key !== "entered" && Boolean(value));

        rx.status = rx.entered
            ? "Prescription information entered"
            : "No prescription numbers entered";

        answers[question.id] = rx;
        showQuestion();
    });

    skip.addEventListener("click", () => {
        answers[question.id] = {
            status: "Skipped prescription entry",
            entered: false
        };
        showQuestion();
    });

    container.appendChild(wrapper);
}


function renderScreenCalibration(question, container) {

    const saved = answers[question.id] || {};
    const initialWidth = saved.cardWidthPx || 324;

    const wrapper = document.createElement("div");
    wrapper.className = "calibration-tool";

    wrapper.innerHTML = `
        <p class="calibration-instruction">
            Match the rectangle below to the <strong>long edge</strong> of a
            standard credit/debit/ID card (85.60 mm).
        </p>

        <div
            id="calibrationCard"
            class="calibration-card"
            style="width:${initialWidth}px;"
        >
            Standard card width
        </div>

        <input
            id="calibrationSlider"
            class="calibration-slider"
            type="range"
            min="220"
            max="520"
            step="1"
            value="${initialWidth}"
        >

        <div class="calibration-actions">
            <button class="primary-button" id="saveCalibration" type="button">
                The widths match
            </button>

            <button class="secondary-button" id="skipCalibration" type="button">
                I don't have a card — use approximate sizing
            </button>
        </div>

        <p class="calibration-note">
            Browser zoom should be set to 100% if possible. If you change zoom
            or move to another screen, recalibrate.
        </p>
    `;

    const slider = wrapper.querySelector("#calibrationSlider");
    const card = wrapper.querySelector("#calibrationCard");

    slider.addEventListener("input", () => {
        card.style.width = `${slider.value}px`;
    });

    wrapper.querySelector("#saveCalibration").addEventListener("click", () => {

        const width = Number(slider.value);

        answers[question.id] = {
            calibrated: true,
            cardWidthPx: width,
            pxPerMm: width / 85.6
        };

        showQuestion();
    });

    wrapper.querySelector("#skipCalibration").addEventListener("click", () => {

        answers[question.id] = {
            calibrated: false,
            status: "Approximate screen sizing used",
            pxPerMm: null
        };

        showQuestion();
    });

    container.appendChild(wrapper);
}


function getVisionTestDistanceMm() {

    const selected = answers.visionDistanceSetup;

    if (selected === "6 feet") {
        return 1828.8;
    }

    return 3048;
}


function getPixelsPerMm() {

    const calibration = answers.visionScreenCalibration;

    if (calibration && calibration.calibrated && calibration.pxPerMm) {
        return calibration.pxPerMm;
    }

    // Approximate CSS reference value only. Results are labeled accordingly.
    return 96 / 25.4;
}


function snellenOptotypeHeightPx(denominator) {

    const distanceMm = getVisionTestDistanceMm();
    const pxPerMm = getPixelsPerMm();

    // A 20/20 optotype subtends 5 arcminutes.
    // Other Snellen denominators scale linearly from that reference.
    const arcMinutes = 5 * (denominator / 20);
    const radians = arcMinutes * Math.PI / (180 * 60);
    const heightMm = 2 * distanceMm * Math.tan(radians / 2);

    return Math.max(8, heightMm * pxPerMm);
}


function renderAcuityQuestion(question, container) {

    const selected = answers[question.id];
    const distance = answers.visionDistanceSetup || "10 feet";
    const calibrated =
        answers.visionScreenCalibration &&
        answers.visionScreenCalibration.calibrated;

    const rows = [
        { label: "20/100", denominator: 100, text: "E" },
        { label: "20/70", denominator: 70, text: "F P" },
        { label: "20/50", denominator: 50, text: "T O Z" },
        { label: "20/40", denominator: 40, text: "L P E D" },
        { label: "20/30", denominator: 30, text: "P E C F D" },
        { label: "20/25", denominator: 25, text: "E D F C Z" },
        { label: "20/20", denominator: 20, text: "D E F P O T" }
    ];

    const wrapper = document.createElement("div");
    wrapper.className = "acuity-screen";

    wrapper.innerHTML = `
        <div class="acuity-meta">
            <strong>${escapeHtml(question.eye || "")}</strong>
            <span>${escapeHtml(distance)}</span>
            <span>${calibrated ? "Screen calibrated" : "Approximate screen sizing"}</span>
        </div>

        <div class="acuity-chart" aria-label="Approximate distance vision chart">
            ${rows.map(row => `
                <div class="acuity-row">
                    <span class="acuity-label">${row.label}</span>
                    <span
                        class="acuity-letters"
                        style="font-size:${snellenOptotypeHeightPx(row.denominator)}px;"
                    >
                        ${row.text}
                    </span>
                </div>
            `).join("")}
        </div>

        <p class="acuity-direction">
            Start at the top and move downward. Choose the smallest line you
            can identify comfortably. If you cannot identify the 20/100 line,
            select that option below.
        </p>

        <div class="acuity-answer-grid">
            ${[
                "20/20 line",
                "20/25 line",
                "20/30 line",
                "20/40 line",
                "20/50 line",
                "20/70 line",
                "20/100 line",
                "I cannot identify the 20/100 line",
                "The chart is too blurry or difficult to judge"
            ].map(answer => `
                <button
                    type="button"
                    class="answer-button ${selected === answer ? "selected" : ""}"
                    data-acuity-answer="${answer}"
                >
                    ${answer}
                </button>
            `).join("")}
        </div>

        <p class="acuity-warning">
            This produces a home-screening estimate only. Display calibration,
            room distance, browser zoom, lighting, and self-reporting can all
            affect the result.
        </p>
    `;

    wrapper
        .querySelectorAll("[data-acuity-answer]")
        .forEach(button => {
            button.addEventListener("click", () => {
                selectAnswer(question.id, button.dataset.acuityAnswer);
            });
        });

    container.appendChild(wrapper);
}


function renderAmslerGrid(container) {

    const grid = document.createElement("div");
    grid.className = "amsler-grid";
    grid.setAttribute("aria-label", "Central vision grid");

    for (let i = 0; i < 21; i++) {

        const vertical = document.createElement("span");
        vertical.className = "amsler-line vertical";
        vertical.style.left = `${(i / 20) * 100}%`;
        grid.appendChild(vertical);

        const horizontal = document.createElement("span");
        horizontal.className = "amsler-line horizontal";
        horizontal.style.top = `${(i / 20) * 100}%`;
        grid.appendChild(horizontal);
    }

    const dot = document.createElement("span");
    dot.className = "amsler-dot";
    grid.appendChild(dot);

    container.appendChild(grid);
}



function drawColorPlate(canvas, plate) {

    const size = 300;
    const ctx = canvas.getContext("2d");

    canvas.width = size;
    canvas.height = size;

    ctx.clearRect(0, 0, size, size);

    const digitMasks = {
        "2": [
            "01110",
            "10001",
            "00001",
            "00010",
            "00100",
            "01000",
            "11111"
        ],
        "3": [
            "11110",
            "00001",
            "00001",
            "01110",
            "00001",
            "00001",
            "11110"
        ],
        "5": [
            "11111",
            "10000",
            "10000",
            "11110",
            "00001",
            "00001",
            "11110"
        ],
        "6": [
            "01110",
            "10000",
            "10000",
            "11110",
            "10001",
            "10001",
            "01110"
        ],
        "8": [
            "01110",
            "10001",
            "10001",
            "01110",
            "10001",
            "10001",
            "01110"
        ],
        "9": [
            "01110",
            "10001",
            "10001",
            "01111",
            "00001",
            "00001",
            "01110"
        ]
    };

    const mask = digitMasks[plate.answer];

    function isTarget(x, y) {

        const gx = Math.floor(((x - 62) / 176) * 5);
        const gy = Math.floor(((y - 38) / 224) * 7);

        if (gx < 0 || gx >= 5 || gy < 0 || gy >= 7) {
            return false;
        }

        return mask[gy][gx] === "1";
    }

    // Deterministic pseudo-random generator so each plate remains stable.
    let seed = plate.seed;

    function random() {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    }

    const backgroundPalette = plate.background;
    const targetPalette = plate.target;

    for (let i = 0; i < 520; i++) {

        const angle = random() * Math.PI * 2;
        const radius = Math.sqrt(random()) * 132;

        const x = 150 + Math.cos(angle) * radius;
        const y = 150 + Math.sin(angle) * radius;

        const r = 3.5 + random() * 5.5;

        const target = isTarget(x, y);
        const palette = target ? targetPalette : backgroundPalette;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = palette[Math.floor(random() * palette.length)];
        ctx.fill();
    }
}


function renderColorPlateScreen(question, container) {

    const plates = [
        {
            answer: "5",
            seed: 17,
            background: ["#8f9656", "#7f8b51", "#a19a62", "#78894e"],
            target: ["#b66d50", "#c07855", "#a95f49", "#bd775e"]
        },
        {
            answer: "8",
            seed: 29,
            background: ["#a07b5e", "#96735b", "#a78566", "#8d725a"],
            target: ["#718357", "#7e915f", "#687b50", "#859365"]
        },
        {
            answer: "3",
            seed: 41,
            background: ["#8d8c59", "#99965f", "#828754", "#a09a61"],
            target: ["#b56f55", "#a96450", "#c17b60", "#af684f"]
        },
        {
            answer: "6",
            seed: 53,
            background: ["#9a765c", "#8d7058", "#a27f65", "#94745d"],
            target: ["#6e8357", "#788c5e", "#667a50", "#849566"]
        },
        {
            answer: "2",
            seed: 67,
            background: ["#8c8f58", "#7f8753", "#999661", "#878d58"],
            target: ["#b46b52", "#c0785a", "#aa614c", "#b97458"]
        },
        {
            answer: "9",
            seed: 79,
            background: ["#9b785e", "#8e7057", "#a17f63", "#94745c"],
            target: ["#708558", "#7e9061", "#667c50", "#839564"]
        }
    ];

    const previous = answers[question.id] || {};
    const previousResponses = Array.isArray(previous.responses)
        ? previous.responses
        : Array(plates.length).fill("");

    const wrapper = document.createElement("div");
    wrapper.className = "color-plate-screen";

    wrapper.innerHTML = `
        <div class="color-test-notice">
            <strong>Before you begin:</strong>
            Turn off Night Shift, Night Light, blue-light filters, grayscale,
            or unusual color filters if possible. Use normal screen brightness
            and ordinary room lighting.
        </div>

        <div class="color-plate-grid"></div>

        <button type="button" class="primary-button color-submit">
            Save Color Screen
        </button>

        <button type="button" class="secondary-button color-unsure">
            I can't reliably judge these on my screen
        </button>
    `;

    const grid = wrapper.querySelector(".color-plate-grid");

    plates.forEach((plate, index) => {

        const card = document.createElement("div");
        card.className = "color-plate-card";

        card.innerHTML = `
            <p class="color-plate-label">Plate ${index + 1}</p>
            <canvas class="color-plate-canvas" aria-label="Color discrimination plate ${index + 1}"></canvas>

            <label>
                What number do you see?
                <select class="color-plate-select" data-index="${index}">
                    <option value="">Choose...</option>
                    ${["0","1","2","3","4","5","6","7","8","9","Nothing / no number"]
                        .map(option => `
                            <option
                                value="${option}"
                                ${previousResponses[index] === option ? "selected" : ""}
                            >
                                ${option}
                            </option>
                        `).join("")}
                </select>
            </label>
        `;

        grid.appendChild(card);

        drawColorPlate(
            card.querySelector("canvas"),
            plate
        );
    });

    wrapper.querySelector(".color-submit").addEventListener("click", () => {

        const responses = Array.from(
            wrapper.querySelectorAll(".color-plate-select")
        ).map(select => select.value);

        if (responses.some(value => !value)) {
            alert("Choose an answer for each color plate, even if you see no number.");
            return;
        }

        const score = responses.reduce((total, response, index) => {
            return total + (response === plates[index].answer ? 1 : 0);
        }, 0);

        answers[question.id] = {
            responses,
            score,
            total: plates.length,
            status: `${score} of ${plates.length} patterns identified`
        };

        showQuestion();
    });

    wrapper.querySelector(".color-unsure").addEventListener("click", () => {
        answers[question.id] = {
            responses: [],
            score: null,
            total: plates.length,
            status: "Screen/display made the color test difficult to judge"
        };

        showQuestion();
    });

    container.appendChild(wrapper);
}


function renderRedComparison(container) {

    const target = document.createElement("div");
    target.className = "red-comparison-target";
    target.setAttribute("aria-label", "Red comparison target");
    container.appendChild(target);
}


function getAcuityDenominator(answer) {

    if (!answer || typeof answer !== "string") {
        return null;
    }

    const match = answer.match(/20\/(\d+)/);

    if (!match) {
        return answer.includes("cannot identify") ? 200 : null;
    }

    return Number(match[1]);
}


function visionResultLabel(denominator) {

    if (!denominator) return "Not measured";

    if (denominator <= 25) return "Strong home-screening clarity";
    if (denominator <= 40) return "Mild reduction on this home screen";
    if (denominator <= 70) return "Noticeable reduction on this home screen";
    return "Marked reduction on this home screen";
}


function renderVisionResults() {

    const resultsContainer = document.getElementById("answerSummary");
    const completion = document.getElementById("completionScreen");

    if (!resultsContainer || !completion) return;

    const heading = completion.querySelector("h1");
    const intro = completion.querySelector(".intro");

    if (heading) heading.textContent = "Your Vision Screening Results";

    if (intro) {
        intro.textContent =
            "These results compare how you performed during this at-home screen. They are not a prescription, diagnosis, or substitute for a comprehensive eye examination.";
    }

    const corrected = {
        od: getAcuityDenominator(answers.correctedDistanceOD),
        os: getAcuityDenominator(answers.correctedDistanceOS),
        ou: getAcuityDenominator(answers.correctedDistanceOU)
    };

    const unaided = {
        od: getAcuityDenominator(answers.unaidedDistanceOD),
        os: getAcuityDenominator(answers.unaidedDistanceOS),
        ou: getAcuityDenominator(answers.unaidedDistanceOU)
    };

    const hasCorrected = Boolean(corrected.od || corrected.os || corrected.ou);
    const hasUnaided = Boolean(unaided.od || unaided.os || unaided.ou);

    const distortionConcern = [
        answers.visionDistortionOD,
        answers.visionDistortionOS
    ].some(value =>
        [
            "Some lines look wavy, bent, or distorted",
            "Part of the grid looks missing, dark, or blank"
        ].includes(value)
    );

    const redDifference =
        [
            "It looks dimmer or less vivid through my right eye",
            "It looks dimmer or less vivid through my left eye",
            "It looks different, but I can't tell how"
        ].includes(answers.visionRedComparison);

    const binocularConcern =
        [
            "Sometimes",
            "Yes — frequently",
            "Only when I am tired or doing close work"
        ].includes(answers.visionBinocularComfort);

    const colorPlateResult = answers.visionColorPlates || {};
    const colorPlateScore =
        typeof colorPlateResult.score === "number"
            ? colorPlateResult.score
            : null;

    const colorScreenConcern =
        colorPlateScore !== null && colorPlateScore <= 4;

    const strongColorScreenConcern =
        colorPlateScore !== null && colorPlateScore <= 2;

    const newlyNoticedColorChange =
        answers.visionColorHistory === "Yes — I noticed it more recently";

    const newChange =
        [
            "Yes — it is new",
            "Yes — it has become noticeably worse"
        ].includes(answers.visionFinalChange);

    function eyeRow(label, data) {
        return `
            <tr>
                <td>${label}</td>
                <td>${data ? `Approx. 20/${data}` : "Not tested"}</td>
                <td>${visionResultLabel(data)}</td>
            </tr>
        `;
    }

    let html = `
        <section class="vision-results-card">
            <p class="eyebrow">TESTING MODE</p>
            <h2>${escapeHtml(answers.visionTestMode || (visionUsesCorrection() ? "Vision screening" : "Unaided screening"))}</h2>
            <p>
                Distance used: <strong>${escapeHtml(answers.visionDistanceSetup || "Not recorded")}</strong>.
                Screen sizing: <strong>${
                    answers.visionScreenCalibration?.calibrated
                        ? "card-calibrated"
                        : "approximate"
                }</strong>.
            </p>
        </section>
    `;

    if (hasCorrected) {
        html += `
            <section class="vision-results-card" id="visionCorrectedSection">
                <p class="eyebrow">WITH YOUR USUAL CORRECTION</p>
                <h2>Corrected distance-clarity screen</h2>
                <table class="vision-result-table">
                    <thead>
                        <tr>
                            <th>View</th>
                            <th>Home-screen estimate</th>
                            <th>Interpretation</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${eyeRow("Right eye (OD)", corrected.od)}
                        ${eyeRow("Left eye (OS)", corrected.os)}
                        ${eyeRow("Both eyes (OU)", corrected.ou)}
                    </tbody>
                </table>

                <p>
                    <strong>Near vision with correction:</strong>
                    ${escapeHtml(answers.correctedNear || "Not tested")}
                </p>
            </section>
        `;
    }

    if (hasUnaided) {
        html += `
            <section class="vision-results-card" id="visionUnaidedSection">
                <p class="eyebrow">WITHOUT CORRECTION</p>
                <h2>Unaided distance-clarity screen</h2>
                <table class="vision-result-table">
                    <thead>
                        <tr>
                            <th>View</th>
                            <th>Home-screen estimate</th>
                            <th>Interpretation</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${eyeRow("Right eye (OD)", unaided.od)}
                        ${eyeRow("Left eye (OS)", unaided.os)}
                        ${eyeRow("Both eyes (OU)", unaided.ou)}
                    </tbody>
                </table>

                <p>
                    <strong>Near vision without correction:</strong>
                    ${escapeHtml(answers.unaidedNear || "Not tested")}
                </p>
            </section>
        `;
    }

    if (hasCorrected && hasUnaided) {

        const comparison = [];

        ["od", "os", "ou"].forEach(key => {
            if (corrected[key] && unaided[key]) {
                const difference = unaided[key] - corrected[key];

                comparison.push({
                    key,
                    improved: difference > 10,
                    same: Math.abs(difference) <= 10
                });
            }
        });

        const improvedCount =
            comparison.filter(item => item.improved).length;

        html += `
            <section class="vision-results-card" id="visionCompareSection">
                <p class="eyebrow">CORRECTED VS. UNAIDED</p>
                <h2>How much did your usual correction help?</h2>

                <p>
                    ${
                        improvedCount >= 2
                            ? "Your usual correction produced noticeably better distance-chart performance in multiple viewing conditions."
                            : improvedCount === 1
                                ? "Your usual correction improved at least one part of the distance screen."
                                : "This home screen did not show a large corrected-versus-unaided difference. That does not determine whether your prescription is accurate."
                    }
                </p>

                ${
                    answers.visionCorrectionQuality
                        ? `<p><strong>Your own rating of the correction:</strong> ${escapeHtml(answers.visionCorrectionQuality)}</p>`
                        : ""
                }
            </section>
        `;
    }

    // Eye-to-eye difference.
    const source = hasCorrected ? corrected : unaided;

    if (source.od && source.os) {

        const eyeDifference = Math.abs(source.od - source.os);

        html += `
            <section class="vision-results-card">
                <p class="eyebrow">EYE-TO-EYE COMPARISON</p>
                <h2>${
                    eyeDifference >= 20
                        ? "A meaningful eye-to-eye difference appeared on this screen"
                        : "The two eyes performed relatively similarly on the distance screen"
                }</h2>
                <p>
                    ${
                        eyeDifference >= 20
                            ? "One eye reached a noticeably different chart level than the other. This can happen for many reasons, including prescription differences, amblyopia, or eye-health conditions, so the screen cannot identify the cause."
                            : "The right and left eyes reached similar approximate chart levels. A similar result does not rule out an eye-health problem."
                    }
                </p>
            </section>
        `;
    }

    // Color vision screening.
    html += `
        <section class="vision-results-card" id="visionColorSection">
            <p class="eyebrow">COLOR VISION SCREEN</p>
            <h2>${
                colorPlateScore === null
                    ? "Color discrimination was not scored"
                    : strongColorScreenConcern
                        ? "Frequent difficulty appeared on this browser color screen"
                        : colorScreenConcern
                            ? "Some color-discrimination difficulty appeared on this browser screen"
                            : "No obvious color-discrimination difficulty appeared on this browser screen"
            }</h2>

            <p>
                <strong>Pattern score:</strong>
                ${
                    colorPlateScore === null
                        ? escapeHtml(colorPlateResult.status || "Not completed")
                        : `${colorPlateScore} of ${colorPlateResult.total || 6} patterns identified`
                }
            </p>

            <p>
                <strong>Your color-vision history:</strong>
                ${escapeHtml(answers.visionColorHistory || "Not answered")}
            </p>

            <p>
                <strong>Known family history:</strong>
                ${escapeHtml(answers.visionColorFamilyHistory || "Not answered")}
            </p>

            <p>
                This is an original browser-based screening activity, not an
                Ishihara examination and not a diagnosis. Display technology,
                color filters, brightness, and lighting can change the result.
            </p>

            <a
                class="secondary-button vision-library-link"
                href="library.html?condition=color-vision-deficiency"
            >
                Learn about Color Vision Deficiency
            </a>
        </section>
    `;

    // Additional screening findings.
    html += `
        <section class="vision-results-card">
            <p class="eyebrow">OTHER VISUAL CHECKS</p>
            <h2>Central vision, color/brightness & binocular comfort</h2>

            <div class="vision-finding-list">
                <div>
                    <strong>Right-eye grid:</strong>
                    ${escapeHtml(answers.visionDistortionOD || "Not tested")}
                </div>

                <div>
                    <strong>Left-eye grid:</strong>
                    ${escapeHtml(answers.visionDistortionOS || "Not tested")}
                </div>

                <div>
                    <strong>Red brightness comparison:</strong>
                    ${escapeHtml(answers.visionRedComparison || "Not tested")}
                </div>

                <div>
                    <strong>Color discrimination screen:</strong>
                    ${escapeHtml(colorPlateResult.status || "Not tested")}
                </div>

                <div>
                    <strong>Both eyes together:</strong>
                    ${escapeHtml(answers.visionBinocularComfort || "Not tested")}
                </div>
            </div>
        </section>
    `;

    let recommendationTitle =
        "Keep this result as a baseline, not a diagnosis.";

    let recommendation =
        "Home screening can identify differences worth discussing, but it cannot check eye pressure, examine the retina or optic nerve, or determine an exact glasses/contact-lens prescription.";

    if (
        distortionConcern ||
        redDifference ||
        binocularConcern ||
        colorScreenConcern ||
        newlyNoticedColorChange ||
        newChange
    ) {
        recommendationTitle =
            newChange || distortionConcern
                ? "Professional eye evaluation is recommended."
                : "Consider discussing these findings at an eye examination.";

        recommendation =
            newlyNoticedColorChange
                ? "You reported that a color-vision difference may be new. Inherited color-vision deficiencies are usually longstanding, so a newly noticed change in color perception should be discussed with an eye-care professional rather than assumed to be ordinary color blindness."
                : "You reported or demonstrated a difference involving central distortion, color/brightness, color discrimination, binocular comfort, or a new/worsening visual change. These findings can have many causes and are best interpreted in context during an eye examination.";
    }

    html += `
        <section class="vision-results-card vision-next-step" id="visionNextStepSection">
            <p class="eyebrow">NEXT STEP</p>
            <h2>${recommendationTitle}</h2>
            <p>${recommendation}</p>

            ${
                (newChange && (distortionConcern || redDifference)) || newlyNoticedColorChange
                    ? `
                        <p>
                            Because you described the finding as new or worsening,
                            do not rely on this home screen to decide whether it can wait.
                        </p>
                    `
                    : ""
            }
        </section>

        <section class="vision-results-card">
            <p class="eyebrow">IMPORTANT LIMITATIONS</p>
            <h2>What this screen cannot tell you</h2>
            <ul>
                <li>It cannot create or verify an eyeglass or contact-lens prescription.</li>
                <li>It cannot diagnose myopia, astigmatism, amblyopia, retinal disease, glaucoma, or another eye condition.</li>
                <li>Browser zoom, monitor size, testing distance, lighting, and self-reporting affect the chart result.</li>
                <li>A normal-looking result does not rule out eye disease.</li>
            </ul>
        </section>

        ${getSharedPostTestActions({
            primaryLabel: "Explore Eye Health Library",
            primaryHref: "library.html",
            extraPrimary: `
                <button class="post-action post-action-primary-soft"
                        type="button"
                        onclick="scrollToResultSection('visionNextStepSection')">
                    What Should I Do Next?
                </button>
            `,
            extraSecondary: `
                ${
                    hasCorrected && hasUnaided
                        ? `
                            <button class="post-action post-action-secondary"
                                    type="button"
                                    onclick="scrollToResultSection('visionCompareSection')">
                                Compare Corrected vs. Unaided
                            </button>
                        `
                        : ""
                }

                <button class="post-action post-action-secondary"
                        type="button"
                        onclick="scrollToResultSection('visionColorSection')">
                    Review Color Vision
                </button>
            `
        })}
    `;

    resultsContainer.innerHTML = html;
}



function renderFutureTextInput(question, container) {
    const wrapper = document.createElement("div");
    wrapper.className = "future-text-input";
    const textarea = document.createElement("textarea");
    textarea.rows = 5;
    textarea.placeholder = "Optional";
    textarea.value = answers[question.id] || "";
    const save = document.createElement("button");
    save.type = "button";
    save.className = "primary-button";
    save.textContent = "Save & Continue";
    save.addEventListener("click", () => {
        answers[question.id] = textarea.value.trim() || "No additional information entered";
        showQuestion();
    });
    const skip = document.createElement("button");
    skip.type = "button";
    skip.className = "secondary-button";
    skip.textContent = "Skip";
    skip.addEventListener("click", () => {
        answers[question.id] = "Skipped";
        showQuestion();
    });
    wrapper.append(textarea, save, skip);
    container.appendChild(wrapper);
}


// ==========================================================
// FUTURE EYE HEALTH SCORING + RESULTS
// ==========================================================

const futureLibraryLinks = {
    glaucoma: "glaucoma",
    retina: "retinal-detachment",
    cornea: "keratoconus",
    surface: "dry-eye",
    cataract: "cataract",
    diabetes: "diabetic-retinopathy",
    inherited: "retinitis-pigmentosa",
    contact: "contact-lens-related-infections",
    injury: "eye-injury",
    color: "color-vision-deficiency"
};

function futureHas(id, value) {
    const a = answers[id];
    return Array.isArray(a) ? a.includes(value) : a === value;
}

function futureAny(id, values) {
    return values.some(v => futureHas(id, v));
}

function buildFutureProfile() {
    const areas = {
        glaucoma:{title:"Glaucoma & Optic Nerve Monitoring",score:0,reasons:[],actions:[],link:"glaucoma"},
        retina:{title:"Retina & Macula Monitoring",score:0,reasons:[],actions:[],link:"retinal-detachment"},
        cornea:{title:"Corneal Health",score:0,reasons:[],actions:[],link:"keratoconus"},
        surface:{title:"Ocular Surface & Dry Eye",score:0,reasons:[],actions:[],link:"dry-eye"},
        cataract:{title:"Lens & Cataract Health",score:0,reasons:[],actions:[],link:"cataract"},
        diabetes:{title:"Diabetes-Related Eye Health",score:0,reasons:[],actions:[],link:"diabetic-retinopathy"},
        inherited:{title:"Inherited Eye Disease Relevance",score:0,reasons:[],actions:[],link:"retinitis-pigmentosa"},
        contact:{title:"Contact Lens Safety",score:0,reasons:[],actions:[],link:"contact-lens-related-infections"},
        injury:{title:"Eye Injury Prevention",score:0,reasons:[],actions:[],link:"eye-injury"},
        uv:{title:"UV & Environmental Protection",score:0,reasons:[],actions:[],link:"cataract"},
        near:{title:"Near Work & Digital Eye Comfort",score:0,reasons:[],actions:[],link:"dry-eye"},
        followup:{title:"Eye Exam & Follow-Up Priority",score:0,reasons:[],actions:[],link:null},
        medication:{title:"Medication-Related Eye Monitoring",score:0,reasons:[],actions:[],link:null}
    };
    const positives = [];
    const add=(k,p,r,a)=>{areas[k].score+=p;if(r)areas[k].reasons.push(r);if(a)areas[k].actions.push(a);};

    // Age / exams
    if (futureAny("futureAge",["40–54","55–64","65–74","75+"])) add("followup",1,"Your age range makes regular comprehensive eye care increasingly important.");
    if (futureAny("futureAge",["55–64","65–74","75+"])) { add("cataract",1,"Lens changes become more relevant with age."); add("retina",1,"Age makes macular and retinal monitoring more relevant."); }
    if (futureAny("futureLastExam",["2–5 years ago","More than 5 years ago","I have never had one"])) add("followup",3,"Your last reported comprehensive eye exam was several years ago or you have never had one.","Arrange a comprehensive eye examination.");
    if (futureHas("futureExamSchedule","No") || futureHas("futureExamSchedule","I don't currently have an eye-care professional")) add("followup",2,"You reported that recommended routine eye-care follow-up is not currently consistent.");
    if (futureHas("futureExamSchedule","Yes") || futureHas("futureExamSchedule","Usually")) positives.push("You generally keep up with recommended comprehensive eye examinations.");
    if (futureHas("futureCloserMonitoring","Yes")) add("followup",3,"An eye-care professional has already recommended closer-than-routine monitoring.","Keep the follow-up schedule your eye-care professional gave you.");
    if (futureHas("futureCurrentMonitoring","Yes")) add("followup",3,"You are already being followed for an eye condition or risk factor.","Continue the monitoring plan set by your eye-care professional.");
    if (futureAny("futureAttendance",["Rarely","No"])) add("followup",3,"You reported missing recommended monitoring visits.","Re-establish the follow-up schedule recommended for the condition being monitored.");
    if (futureAny("futureAttendance",["Yes","Usually"])) positives.push("You generally attend condition-monitoring visits on schedule.");

    // Glaucoma
    if (futureAny("futureEyeConditions",["Glaucoma","Ocular hypertension"])) add("glaucoma",5,"You reported a personal diagnosis of glaucoma or ocular hypertension.","Continue clinician-directed pressure, optic nerve, OCT and/or visual-field monitoring.");
    if (futureAny("futureFindings",["Elevated eye pressure","Glaucoma suspect","Suspicious optic nerve","Thin corneas","Visual-field defect","Abnormal OCT"])) add("glaucoma",4,"You reported a previous finding that can be relevant to glaucoma or optic-nerve monitoring.");
    if (futureHas("futureFamilyConditions","Glaucoma") || futureHas("futureFamilyConditions","Congenital glaucoma")) add("glaucoma",3,"You reported glaucoma in your biological family.");
    if (futureHas("futureMedicationTypes","Long-term steroid medication")) add("glaucoma",2,"You reported current or previous long-term steroid use, which can be relevant to eye-pressure and lens monitoring.");
    if (futureHas("futureMedicationTypes","Long-term steroid medication")) add("cataract",2,"Long-term steroid exposure can be relevant to lens monitoring.");

    // Retina / inherited
    if (futureAny("futureEyeConditions",["Retinal tear","Retinal detachment","Lattice degeneration","Macular degeneration","Diabetic retinopathy","Inherited retinal disease"])) add("retina",5,"You reported a personal retinal or macular diagnosis.","Keep the retinal follow-up schedule recommended for you.");
    if (futureAny("futureFindings",["Lattice degeneration","Retinal hole","Retinal tear","Retinal thinning","Macular changes","Drusen","Diabetic retinal changes","Abnormal OCT"])) add("retina",4,"You reported a previous retinal, macular, or OCT finding.");
    if (futureAny("futureFamilyConditions",["Retinal detachment","Macular degeneration","Very strong myopia"])) add("retina",2,"Your family history includes a retinal/macular condition or very strong myopia.");
    if (futureAny("futureFamilyConditions",["Retinitis pigmentosa","Stargardt disease","Another inherited retinal disease"])) {add("inherited",5,"You reported an inherited retinal disorder in your biological family.","Ask whether your family history changes the type or frequency of eye examinations recommended for you.");add("retina",3,"Your family history includes an inherited retinal disease.");}
    if (futureAny("futureEyeConditions",["Inherited retinal disease","Color-vision deficiency"])) add("inherited",4,"You reported a diagnosed inherited retinal or color-vision condition.");
    if (futureHas("futureRxChange","Yes, it has become much stronger")) add("retina",1,"You reported a substantially strengthening prescription; the prescription itself does not diagnose retinal disease, but your eye-care professional can interpret it in context.");

    // Cornea / surface
    if (futureAny("futureEyeConditions",["Keratoconus","Corneal dystrophy"])) add("cornea",5,"You reported a diagnosed corneal condition.","Continue corneal monitoring recommended by your eye-care professional.");
    if (futureAny("futureFindings",["Keratoconus suspect","Irregular corneal shape","Thin corneas"])) add("cornea",4,"You reported a previous corneal shape or thickness finding.");
    if (futureAny("futureFamilyConditions",["Keratoconus","Corneal dystrophy"])) add("cornea",3,"You reported keratoconus or corneal dystrophy in your biological family.");
    if (futureAny("futureEyeConditions",["Dry eye","Blepharitis or meibomian gland dysfunction"])) add("surface",4,"You reported a diagnosed ocular-surface condition.");
    if (futureAny("futureScreenSymptoms",["Dryness","Burning"])) add("surface",2,"You reported dryness or burning during prolonged near work.");
    if (futureAny("futureEnvironment",["Wind","Smoke","Very dry air","Dust"])) add("surface",1,"Your regular environment includes exposures that can aggravate ocular-surface symptoms.");

    // Cataract
    if (futureHas("futureEyeConditions","Cataract") || futureHas("futureFindings","Cataract beginning to develop")) add("cataract",5,"You reported an existing cataract diagnosis or early lens change.");
    if (futureHas("futureFamilyConditions","Cataracts at a relatively young age")) add("cataract",2,"You reported relatively early cataracts in your biological family.");
    if (futureHas("futureSmoking","I currently smoke")) add("cataract",2,"Current smoking is a modifiable factor relevant to long-term eye health.");

    // Diabetes / systemic
    if (futureHas("futureMedical","Diabetes")) add("diabetes",5,"You reported diabetes.","Keep diabetes-related dilated retinal examinations on the schedule recommended by your health and eye-care professionals.");
    if (futureHas("futureMedical","Prediabetes")) add("diabetes",2,"You reported prediabetes, making general metabolic health relevant to future eye health.");
    if (futureHas("futureDiabetesEyes","Yes")) {add("diabetes",5,"You reported that diabetes has already affected your eyes.");add("retina",4,"You reported diabetes-related retinal involvement.");}
    if (futureHas("futureDiabetesDuration","More than 10 years")) add("diabetes",2,"You reported more than 10 years of blood-sugar problems.");
    if (futureAny("futureMedical",["High blood pressure","High cholesterol","Blood-clotting disorder","Sickle cell disease","Kidney disease"])) add("retina",1,"Your medical history includes a systemic factor that can be relevant to retinal vascular health.");
    if (futureAny("futureMedical",["Autoimmune disease","Thyroid disease"])) add("surface",1,"Your medical history includes a condition that can sometimes be relevant to ocular-surface or inflammatory eye care.");

    // Medication
    const monitoredMeds=["Hydroxychloroquine","Amiodarone","Topiramate","Tamoxifen","Ethambutol","Another medication I was told could affect my eyes"];
    if (monitoredMeds.some(v=>futureHas("futureMedicationTypes",v))) add("medication",4,"You reported a medication with potential eye-related monitoring considerations.","Do not stop medication on the basis of this test; ask the prescribing clinician or eye-care professional what eye monitoring is appropriate.");
    if (futureHas("futureMedsMonitoring","Yes")) add("medication",3,"You already know that at least one medication requires eye monitoring.");

    // Contacts
    const contactWearer = futureAny("futureCorrection",["Contact lenses","Both"]);
    if (contactWearer) {
        add("contact",1,"You wear contact lenses.");
        if (futureAny("futureContactReplace",["Sometimes later than recommended","Often later than recommended"])) add("contact",2,"You reported extending lens replacement beyond the recommended schedule.");
        if (futureAny("futureContactSleep",["Rarely","Sometimes","Often"])) add("contact",3,"You reported sleeping or napping in contacts that were not identified as prescribed overnight lenses.","Avoid sleeping in lenses unless your eye-care professional specifically prescribed that wear schedule.");
        if (futureAny("futureContactWater",["Rarely","Sometimes","Often"]) || futureAny("futureContactTap",["Rarely","Sometimes","Often"])) add("contact",3,"You reported water exposure while wearing or handling contact lenses.","Keep contact lenses away from tap, shower, pool, lake, and hot-tub water.");
        if (futureHas("futureContactClean","Water") || futureHas("futureContactClean","I sometimes reuse old solution")) add("contact",4,"Your reported reusable-lens cleaning method includes water or reused solution.","Use the lens-care system recommended for your lenses and fresh disinfecting solution.");
        if (futureAny("futureContactSymptoms",["Once","More than once"])) add("contact",4,"You reported continuing lens wear despite significant redness, pain, or irritation.","Remove lenses when significant pain, redness, or irritation occurs and seek professional advice when symptoms are concerning or persistent.");
        if (futureHas("futureContactReplace","Exactly as directed")) positives.push("You report replacing contact lenses on schedule.");
        if (futureHas("futureContactSleep","Never")) positives.push("You report avoiding sleeping or napping in your contact lenses.");
        if (futureHas("futureContactWater","Never") && futureHas("futureContactTap","Never")) positives.push("You report keeping contact lenses away from water.");
        if (futureHas("futureBackupGlasses","Yes")) positives.push("You keep backup glasses available, which makes it easier to stop lens wear when your eyes need a break.");
    }

    // Injury / UV
    if (futureHas("futureInjury","Yes")) add("injury",2,"You reported a previous significant eye injury.");
    if (futureHas("futureInjuryLasting","Yes")) add("followup",2,"A previous eye injury caused a lasting problem.");
    if (futureHas("futureHazards","Yes")) {
        add("injury",1,"Your work, sports, or hobbies include potential eye hazards.");
        if (futureAny("futureProtection",["Sometimes","Rarely","Never"])) add("injury",4,"Protective eyewear is not used consistently during reported eye-hazard activities.","Use activity-appropriate protective eyewear consistently.");
        if (futureAny("futureProtection",["Always","Usually"])) positives.push("You report using protective eyewear consistently during eye-hazard activities.");
    }
    if (futureAny("futureSunglasses",["Rarely","Never"]) || futureAny("futureUVProtection",["No","I'm not sure","I don't usually wear sunglasses"])) add("uv",2,"Your reported sun-protection habits could be strengthened.","Use sunglasses labeled for UV protection and appropriate sun protection outdoors.");
    if (futureHas("futureSunglasses","Almost always") && futureHas("futureUVProtection","Yes")) positives.push("You report consistent UV-protective sunglass use.");
    if (futureAny("futureEnvironment",["Chemicals","Welding or intense UV sources","Industrial debris"])) add("injury",3,"Your environment includes chemical, intense-UV, or industrial eye hazards.");

    // Near work
    if (futureAny("futureScreenHours",["6–8 hours","More than 8 hours"])) add("near",2,"You reported prolonged daily screen or near-work time.");
    if (futureAny("futureBreaks",["Rarely","Almost never"])) add("near",2,"You reported infrequent visual breaks during prolonged near work.","Build regular distance-looking and blinking breaks into long near-work sessions.");
    if (futureAny("futureScreenSymptoms",["Headaches","Blur","Difficulty refocusing","Eye strain","Double or overlapping vision"])) add("near",2,"You reported visual symptoms during prolonged screen or near tasks.");
    if (futureHas("futureBreaks","Frequently")) positives.push("You report taking frequent visual breaks during prolonged near work.");

    // Surgery / monitoring
    if (futureHas("futureProcedureFollowup","Yes")) add("followup",2,"A prior eye procedure came with a recommendation for long-term follow-up.");
    if (futureAny("futureProcedures",["Retinal laser","Retinal-detachment surgery","Vitrectomy","Eye injections"])) add("retina",3,"You reported a previous retinal procedure.");
    if (futureAny("futureProcedures",["Glaucoma laser","Glaucoma surgery"])) add("glaucoma",4,"You reported a previous glaucoma procedure.");
    if (futureAny("futureProcedures",["Corneal cross-linking","Corneal transplant"])) add("cornea",4,"You reported a previous corneal procedure.");

    // Protective general
    if (futureHas("futureSmoking","I do not smoke and am rarely around smoke")) positives.push("You report little or no smoking exposure.");
    if (futureHas("futureLastExam","Within the past 6 months") || futureHas("futureLastExam","6–12 months ago")) positives.push("You report a recent comprehensive eye examination.");

    return {areas, positives:[...new Set(positives)]};
}

function futureLevel(score) {
    if (score >= 7) return ["High monitoring relevance","future-level-high"];
    if (score >= 4) return ["Increased monitoring relevance","future-level-increased"];
    if (score >= 2) return ["Worth attention","future-level-attention"];
    return ["Routine awareness","future-level-routine"];
}

function renderFutureResults() {
    const resultsContainer = document.getElementById("answerSummary");
    const completion = document.getElementById("completionScreen");
    if (!resultsContainer || !completion) return;
    const heading = completion.querySelector("h1");
    const intro = completion.querySelector(".intro");
    if (heading) heading.textContent = "Your Future Eye Health Profile";
    if (intro) intro.textContent = "This educational profile highlights areas that may deserve attention based on the history and habits you reported. It does not calculate your probability of developing a disease and it does not diagnose an eye condition.";

    const {areas, positives} = buildFutureProfile();
    const ranked = Object.values(areas).sort((a,b)=>b.score-a.score);
    const priority = ranked.filter(a=>a.score>=2);
    const routine = ranked.filter(a=>a.score<2);

    let html = `
      <section class="future-overview-card">
        <p class="eyebrow">YOUR PROFILE</p>
        <h2>${priority.length ? `${priority.length} area${priority.length===1?"":"s"} stood out for added attention` : "No major added-monitoring signals stood out from your answers"}</h2>
        <p>These labels mean <strong>monitoring relevance</strong>, not disease risk. A higher label can appear because you already have a diagnosed condition, a clinician is monitoring a finding, or several relevant history/habit factors were reported.</p>
      </section>`;

    if (priority.length) {
      html += `<div class="future-priority-grid" id="futurePrioritySection">`;
      priority.forEach(a=>{
        const [label,cls]=futureLevel(a.score);
        html += `
          <section class="future-result-card">
            <div class="future-result-top">
              <p class="eyebrow">${a.title}</p>
              <span class="future-level ${cls}">${label}</span>
            </div>
            <h3>Why this appeared</h3>
            <ul>${[...new Set(a.reasons)].slice(0,6).map(r=>`<li>${escapeHtml(r)}</li>`).join("")}</ul>
            ${a.actions.length ? `<h3>Useful next steps</h3><ul>${[...new Set(a.actions)].slice(0,4).map(r=>`<li>${escapeHtml(r)}</li>`).join("")}</ul>` : ""}
            ${a.link ? `<a class="secondary-button future-learn" href="library.html?condition=${a.link}">Learn More in the Library →</a>` : ""}
          </section>`;
      });
      html += `</div>`;
    }

    html += `
      <section class="future-positive-card" id="futurePositiveSection">
        <p class="eyebrow">THINGS YOU'RE DOING WELL</p>
        <h2>Protective habits & follow-through</h2>
        ${positives.length ? `<ul>${positives.map(p=>`<li>${escapeHtml(p)}</li>`).join("")}</ul>` : `<p>Your answers did not provide enough information to highlight specific protective habits. That is not a negative result—it simply means this section had fewer clear matches.</p>`}
      </section>

      <section class="future-routine-card">
        <p class="eyebrow">ROUTINE AWARENESS</p>
        <h2>Other areas</h2>
        <div class="future-routine-tags">${routine.map(a=>`<span>${escapeHtml(a.title)}</span>`).join("")}</div>
        <p>These areas did not accumulate enough information in this questionnaire to be highlighted above. That does not mean disease is absent or future risk is zero.</p>
      </section>`;

    if (answers.futureOtherConcern && !["Skipped","No additional information entered"].includes(answers.futureOtherConcern)) {
      html += `<section class="future-note-card"><p class="eyebrow">YOUR NOTE</p><h2>Something else you wanted included</h2><p>${escapeHtml(answers.futureOtherConcern)}</p><p>This free-text note is shown for your reference and was not interpreted as a diagnosis or used to calculate the profile.</p></section>`;
    }

    html += `
      <section class="future-limit-card">
        <p class="eyebrow">IMPORTANT</p>
        <h2>This is not a disease-prediction score</h2>
        <p>Future eye health depends on clinical findings this questionnaire cannot measure, including examination of the retina and optic nerve, eye pressure, corneal measurements, visual fields, imaging, and changes over time. Follow an eye-care professional's recommendations when they differ from this educational profile.</p>
      </section>
      ${getSharedPostTestActions({
        primaryLabel: "Explore Eye Health Library",
        primaryHref: "library.html",
        extraPrimary: `
            <button class="post-action post-action-primary-soft"
                    type="button"
                    onclick="scrollToResultSection('futurePrioritySection')">
                View Monitoring Priorities
            </button>
        `,
        extraSecondary: `
            <button class="post-action post-action-secondary"
                    type="button"
                    onclick="scrollToResultSection('futurePositiveSection')">
                Things I'm Doing Well
            </button>
        `
      })}`;
    resultsContainer.innerHTML = html;
}

function showQuestion() {

    const test = tests[currentTest];
    const question = getQuestion(currentQuestionId);

    if (!question) {
        return;
    }

    const visible = getVisibleQuestions();
    let visibleIndex = visible.findIndex(q => q.id === currentQuestionId);

    if (visibleIndex < 0) {
        visibleIndex = 0;
    }

    document.getElementById("testName").textContent = test.name;
    document.getElementById("questionCounter").textContent =
        `Question ${visibleIndex + 1} of ${visible.length}`;

    document.getElementById("questionCategory").textContent =
        question.category;

    document.getElementById("questionText").textContent =
        question.question;

    document.getElementById("questionExplanation").textContent =
        question.explanation || "";

    const progress = ((visibleIndex + 1) / visible.length) * 100;
    document.getElementById("progressBar").style.width = `${progress}%`;

    const answerChoices = document.getElementById("answerChoices");
    answerChoices.innerHTML = "";

    if (question.type === "text") {

        renderFutureTextInput(question, answerChoices);

    } else if (question.type === "prescription") {

        renderPrescriptionForm(question, answerChoices);

    } else if (question.type === "calibration") {

        renderScreenCalibration(question, answerChoices);

    } else if (question.type === "acuity") {

        renderAcuityQuestion(question, answerChoices);

    } else if (question.type === "colorplates") {

        renderColorPlateScreen(question, answerChoices);

    } else {

        if (question.type === "amsler") {
            renderAmslerGrid(answerChoices);
        }

        if (question.type === "redcompare") {
            renderRedComparison(answerChoices);
        }

        if (question.type === "multiple") {

            if (!Array.isArray(answers[question.id])) {
                answers[question.id] = [];
            }

            question.answers.forEach(answer => {

                const button = document.createElement("button");
                button.textContent = answer;
                button.classList.add("answer-button");

                if (answers[question.id].includes(answer)) {
                    button.classList.add("selected");
                }

                button.addEventListener("click", () => {
                    selectMultipleAnswer(question, answer);
                });

                answerChoices.appendChild(button);
            });

        } else {

            question.answers.forEach(answer => {

                const button = document.createElement("button");
                button.textContent = answer;
                button.classList.add("answer-button");

                if (answers[question.id] === answer) {
                    button.classList.add("selected");
                }

                button.addEventListener("click", () => {
                    selectAnswer(question.id, answer);
                });

                answerChoices.appendChild(button);
            });
        }
    }

    document.getElementById("previousButton").style.visibility =
        questionHistory.length === 0 ? "hidden" : "visible";

    const nextButton = document.getElementById("nextButton");

    const hasAnswer = question.type === "multiple"
        ? Array.isArray(answers[question.id]) && answers[question.id].length > 0
        : Boolean(answers[question.id]);

    nextButton.disabled = !hasAnswer;
    nextButton.textContent = findNextQuestion() ? "Next" : "Finish Assessment";
}


// ==========================================================
// ANSWER HANDLING
// ==========================================================

function selectAnswer(questionId, answer) {

    const oldValue = answers[questionId];
    answers[questionId] = answer;

    if (oldValue !== undefined && oldValue !== answer) {
        removeHiddenAnswers();
    }

    showQuestion();
}


function selectMultipleAnswer(question, answer) {

    const questionId = question.id;

    if (!Array.isArray(answers[questionId])) {
        answers[questionId] = [];
    }

    const exclusiveChoices = [
        "None of these",
        "None that I know of",
        "Nothing that I know of",
        "No vision correction",
        "I'm not sure",
        "Prefer not to answer"
    ];

    const isExclusive = exclusiveChoices.includes(answer);

    if (isExclusive) {

        if (answers[questionId].includes(answer)) {
            answers[questionId] = [];
        } else {
            answers[questionId] = [answer];
        }

    } else {

        answers[questionId] =
            answers[questionId].filter(x => !exclusiveChoices.includes(x));

        if (answers[questionId].includes(answer)) {
            answers[questionId] =
                answers[questionId].filter(item => item !== answer);
        } else {
            answers[questionId].push(answer);
        }
    }

    removeHiddenAnswers();
    showQuestion();
}


function removeHiddenAnswers() {

    let changed = true;

    while (changed) {

        changed = false;

        tests[currentTest].questions.forEach(question => {

            if (
                answers[question.id] !== undefined &&
                !shouldShowQuestion(question)
            ) {
                delete answers[question.id];
                changed = true;
            }
        });
    }
}


// ==========================================================
// NAVIGATION
// ==========================================================

function findNextQuestion() {

    const questions = tests[currentTest].questions;
    const currentIndex =
        questions.findIndex(q => q.id === currentQuestionId);

    for (let i = currentIndex + 1; i < questions.length; i++) {
        if (shouldShowQuestion(questions[i])) {
            return questions[i];
        }
    }

    return null;
}


function nextQuestion() {

    const question = getQuestion(currentQuestionId);

    if (question.type === "multiple") {
        if (!Array.isArray(answers[question.id]) || !answers[question.id].length) {
            return;
        }
    } else if (!answers[question.id]) {
        return;
    }

    const next = findNextQuestion();

    if (next) {
        questionHistory.push(currentQuestionId);
        currentQuestionId = next.id;
        showQuestion();
    } else {
        finishTest();
    }
}


function previousQuestion() {

    if (!questionHistory.length) {
        return;
    }

    currentQuestionId = questionHistory.pop();
    showQuestion();
}


// ==========================================================
// MATCH ENGINE
// ==========================================================

function scoreCondition(condition) {

    let score = 0;
    let possible = 0;
    const matched = [];

    condition.rules.forEach(([questionId, expectedAnswers, weight]) => {

        possible += Math.max(weight, 0);

        if (answerMatches(questionId, expectedAnswers)) {

            score += weight;

            const question = tests.symptom.questions.find(
                q => q.id === questionId
            );

            const answer = answers[questionId];

            matched.push({
                label: question ? question.question : questionId,
                answer: Array.isArray(answer) ? answer.join(", ") : answer,
                weight
            });
        }
    });

    // Basic contradiction filters that prevent benign patterns from
    // outranking sudden/severe warning patterns.
    const majorSuddenVisionChange =
        answerMatches("finalSafetyCheck", ["A sudden major change in vision"]) ||
        (
            answerMatches("blurOnset", ["Suddenly"]) &&
            answerMatches("blurSpeed", ["Almost immediately", "Over minutes"])
        );

    if (
        majorSuddenVisionChange &&
        ["dry-eye", "digital-eye-strain", "refractive-error", "cataract"].includes(condition.id)
    ) {
        score -= 8;
    }

    const percent = possible > 0
        ? Math.max(0, Math.min(100, Math.round((Math.max(score, 0) / possible) * 100)))
        : 0;

    return {
        ...condition,
        rawScore: Math.max(score, 0),
        possibleScore: possible,
        matchPercent: percent,
        matched
    };
}


function getMatchLevel(percent, rawScore, resultType = "symptom", rarity = "common") {

    if (resultType === "risk") {
        if (rawScore >= 17) return "High Relevance";
        if (rawScore >= 10) return "Moderate Relevance";
        return "Worth Noting";
    }

    const rare = rarity === "rare" || rarity === "very-rare";

    if (rare) {
        if (rawScore >= 25 && percent >= 55) return "Strong Pattern Match";
        if (rawScore >= 17 && percent >= 38) return "Moderate Pattern Match";
        if (rawScore >= 12 && percent >= 28) return "Possible Pattern Match";
        return "Limited Match";
    }

    if (rawScore >= 20 && percent >= 60) return "Strong Pattern Match";
    if (rawScore >= 12 && percent >= 40) return "Moderate Pattern Match";
    if (rawScore >= 7 && percent >= 25) return "Possible Pattern Match";

    return "Limited Match";
}


function calculateConditionMatches() {

    return conditionLibrary
        .map(scoreCondition)
        .map(result => ({
            ...result,
            rarity: result.rarity || "common",
            resultType: result.resultType || "symptom",
            matchLevel: getMatchLevel(
                result.matchPercent,
                result.rawScore,
                result.resultType || "symptom",
                result.rarity || "common"
            )
        }))
        .filter(result => {
            if (result.resultType === "risk") {
                return result.rawScore >= 4;
            }

            return result.rawScore >= 7 &&
                   result.matchLevel !== "Limited Match";
        })
        .sort((a, b) => {
            if (b.rawScore !== a.rawScore) {
                return b.rawScore - a.rawScore;
            }
            return b.matchPercent - a.matchPercent;
        });
}


// ==========================================================
// URGENCY ENGINE
// ==========================================================
//
// Urgency is deliberately separate from condition matching.
// ==========================================================

function calculateUrgency() {

    const flags = [];

    const addFlag = (level, title, message) => {
        flags.push({ level, title, message });
    };

    const has = (id, vals) => answerMatches(id, vals);

    // Retinal detachment warning pattern
    const acuteFloaters =
        has("floatersIncrease", ["Yes"]) ||
        has("floatersNew", ["Yes, they are new", "I have old floaters but noticed new ones"]) ||
        has("floaterAmount", ["Many new floaters", "A sudden shower or cloud of spots"]);

    const acuteFlashes =
        has("flashesNew", ["Yes, they are new", "They are not new but have changed"]);

    const fieldShadow =
        has("missingVision", YES_SOMETIMES) &&
        (
            has("missingArea", ["A curtain-like area", "A larger shadowed area", "Side or peripheral vision"]) ||
            has("missingOnset", ["Suddenly"])
        );

    if ((acuteFloaters && acuteFlashes && fieldShadow) ||
        has("finalSafetyCheck", ["A new dark or curtain-like area in vision"])) {
        addFlag(
            CARE_LEVELS.URGENT,
            "Urgent eye evaluation recommended",
            "You reported a new retinal-type warning pattern involving floaters, flashes, or a shadow/missing area of vision. These symptoms can occur with vitreous changes, but a retinal tear or detachment cannot be ruled out without examining the retina."
        );
    }

    // Sudden major visual loss / transient monocular loss
    if (
        has("finalSafetyCheck", ["A sudden major change in vision"]) ||
        (
            has("blurOnset", ["Suddenly"]) &&
            has("blurSpeed", ["Almost immediately", "Over minutes"])
        ) ||
        has("transientMonocularLoss", ["Yes"])
    ) {
        addFlag(
            CARE_LEVELS.URGENT,
            "Sudden vision change needs urgent evaluation",
            "A sudden major or temporary loss of vision can have several eye or neurologic causes, including time-sensitive ones. This screening cannot determine which cause is responsible."
        );
    }

    // Acute painful red eye / angle closure / severe corneal or inflammatory disease
    const severePain = has("painSeverity", ["Severe"]);
    const redEye = has("appearanceTypes", ["Redness"]);
    const photophobia = has("lightProblemTypes", ["Bright light feels uncomfortable"]);
    const visionChange = has("painAssociated", ["Vision change"]) || has("blurredVision", YES_SOMETIMES);
    const nauseaHalos = has("painAssociated", ["Nausea or vomiting", "Halos around lights"]);

    if (
        (severePain && redEye && (visionChange || photophobia || nauseaHalos)) ||
        has("finalSafetyCheck", ["Very red and watery eye with pain"])
    ) {
        addFlag(
            CARE_LEVELS.URGENT,
            "Painful red-eye pattern needs urgent evaluation",
            "You reported a combination of significant eye pain with redness and visual or light-related symptoms. Several important eye conditions can cause this pattern, and direct examination is needed."
        );
    }

    // Contact lens + painful red eye / photophobia / blur
    const contactWearer = has("contactLensWear", YES_SOMETIMES) || has("correctionUse", ["Contact lenses"]);
    if (
        contactWearer &&
        redEye &&
        (
            severePain ||
            has("discomfortTypes", ["Sharp pain", "Aching"]) ||
            photophobia ||
            visionChange
        )
    ) {
        addFlag(
            CARE_LEVELS.PROMPT,
            "Prompt contact-lens eye evaluation recommended",
            "Pain, redness, light sensitivity, or reduced vision in a contact-lens wearer can involve the cornea and deserves prompt professional assessment."
        );
    }

    // Chemical / penetrating / retained object
    if (
        has("injuryType", ["Chemical or cleaning product exposure"]) ||
        has("injuryType", ["Something may be stuck in the eye"]) ||
        has("finalSafetyCheck", ["Something stuck in the eye"])
    ) {
        addFlag(
            CARE_LEVELS.URGENT,
            "Eye injury or exposure needs immediate attention",
            "You reported a possible chemical exposure or retained object. This assessment should not delay appropriate first aid and urgent professional guidance."
        );
    }

    // Recent eye procedure + pain/redness/vision loss
    const recentProcedure = has("procedureTiming", ["Yes", "Possibly"]);
    if (
        recentProcedure &&
        (
            severePain ||
            redEye ||
            visionChange ||
            acuteFloaters ||
            acuteFlashes
        )
    ) {
        addFlag(
            CARE_LEVELS.URGENT,
            "New symptoms after an eye procedure need urgent review",
            "New pain, redness, reduced vision, flashes, or many floaters after an eye procedure should be discussed urgently with the treating eye-care team."
        );
    }

    // Uveitis / scleritis / optic nerve
    if (
        (
            redEye &&
            has("painSeverity", ["Moderate", "Severe"]) &&
            photophobia
        ) ||
        (
            has("painMovement", ["Yes", "Sometimes"]) &&
            (
                has("colorChange", YES_SOMETIMES) ||
                has("dimVision", ["Right eye seems dimmer", "Left eye seems dimmer"])
            )
        )
    ) {
        addFlag(
            CARE_LEVELS.PROMPT,
            "Prompt eye evaluation recommended",
            "The combination of pain with light sensitivity, color/brightness change, or pain on eye movement can involve deeper eye or optic-nerve structures and should be professionally evaluated."
        );
    }

    // New ptosis + double vision
    if (
        has("lidProblemTypes", ["Drooping eyelid"]) &&
        has("doubleVision", YES_SOMETIMES) &&
        has("lidDroopTiming", ["Yes, new", "It has changed"])
    ) {
        addFlag(
            CARE_LEVELS.PROMPT,
            "New drooping with double vision needs prompt evaluation",
            "New or changing eyelid drooping together with double vision can reflect an eye-movement or neurologic problem that should be assessed."
        );
    }

    // Same-side field loss in both eyes
    if (has("fieldSameSideBothEyes", ["Yes"])) {
        addFlag(
            CARE_LEVELS.URGENT,
            "New visual-field loss needs urgent evaluation",
            "A new loss of the same side of vision in both eyes can come from the visual pathways beyond the eyes and should be medically evaluated urgently."
        );
    }

    // Raised intracranial pressure pattern
    if (
        has("transientVisualObscurations", YES_SOMETIMES) &&
        (
            has("obscurationPosition", YES_SOMETIMES) ||
            has("pulsatileWhoosh", YES_SOMETIMES) ||
            has("doubleVision", YES_SOMETIMES)
        )
    ) {
        addFlag(
            CARE_LEVELS.PROMPT,
            "Prompt neuro-ophthalmic evaluation recommended",
            "Brief dimming episodes combined with position-related changes, pulse-like whooshing, headache, or double vision can warrant evaluation of the optic nerves and neurologic visual system."
        );
    }

    if (!flags.length) {
        return {
            level: CARE_LEVELS.ROUTINE,
            label: "Routine",
            title: "No urgent pattern identified by this screening",
            message:
                "Your answers did not trigger one of this prototype's time-sensitive warning rules. That does not rule out an eye condition or replace a comprehensive eye examination."
        };
    }

    flags.sort((a, b) => b.level - a.level);
    const highest = flags[0].level;

    const labels = {
        3: "Urgent Evaluation",
        2: "Prompt Evaluation",
        1: "Schedule Soon",
        0: "Routine"
    };

    return {
        level: highest,
        label: labels[highest],
        title: flags[0].title,
        message: flags
            .filter(flag => flag.level === highest)
            .map(flag => flag.message)
            .join(" ")
    };
}


// ==========================================================
// INFORMATION QUALITY / CONFIDENCE
// ==========================================================

function calculateInformationQuality() {

    const entries = Object.values(answers);

    let totalAnswerUnits = 0;
    let uncertainUnits = 0;

    entries.forEach(value => {

        const values = Array.isArray(value) ? value : [value];

        values.forEach(item => {

            totalAnswerUnits += 1;

            if (
                typeof item === "string" &&
                (
                    item.includes("not sure") ||
                    item.includes("don't know") ||
                    item.includes("can't tell") ||
                    item.includes("I haven't tried") ||
                    item.includes("Prefer not")
                )
            ) {
                uncertainUnits += 1;
            }
        });
    });

    if (!totalAnswerUnits) {
        return {
            level: "Limited information",
            explanation: "Not enough answers were available to assess information quality."
        };
    }

    const uncertainRatio = uncertainUnits / totalAnswerUnits;

    if (uncertainRatio <= 0.12) {
        return {
            level: "Good information",
            explanation:
                "You provided specific answers to most of the questions that were relevant to your symptoms."
        };
    }

    if (uncertainRatio <= 0.28) {
        return {
            level: "Moderate information",
            explanation:
                "Several answers were uncertain, so some matches may be less specific."
        };
    }

    return {
        level: "Limited information",
        explanation:
            "Many answers were uncertain. The results may be broad because the assessment had less specific information to work with."
    };
}



// ==========================================================
// RESULT GROUPING / EXPLANATION HELPERS
// ==========================================================

function getExamText(result) {
    return result.exam ||
        "An eye-care professional may perform a comprehensive eye examination and choose additional testing based on the findings.";
}

function getWhyText(result) {

    const snippets = result.matched.slice(0, 4).map(item => {
        const answer = Array.isArray(item.answer) ? item.answer.join(", ") : item.answer;
        return `${item.label.replace(/\?$/, "")}: ${answer}`;
    });

    if (!snippets.length) {
        return "Your health or eye-history information made this result relevant.";
    }

    return `The strongest matching information included ${snippets.join("; ")}. These findings overlap with the pattern described above, but they are not specific enough to confirm a diagnosis without an examination.`;
}

function getRiskFindings(matches) {
    return matches.filter(result => result.resultType === "risk");
}

function getSymptomMatches(matches) {
    return matches.filter(result => result.resultType !== "risk");
}

function resultScopeLabel(result) {

    // This prototype preserves eye-specific answers throughout the
    // questionnaire. When a single condition profile has one clear
    // laterality answer, surface it here.
    const eyeFields = [
        "blurEye", "distortionEye", "missingEye", "floatersEye",
        "flashesEye", "burningEye", "grittyEye", "itchEye",
        "foreignBodyEye", "acheEye", "pressureEye", "sharpPainEye",
        "rednessEye", "tearDischargeEye", "injuryEye"
    ];

    const seen = [];

    eyeFields.forEach(id => {
        const value = answers[id];
        if (typeof value === "string") {
            if (value.includes("Right")) seen.push("Right Eye");
            if (value.includes("Left")) seen.push("Left Eye");
            if (value.includes("Both")) seen.push("Both Eyes");
        }
    });

    const unique = [...new Set(seen)];

    if (unique.length === 1) return unique[0];
    return "General / Eye-Specific Pattern";
}

function buildPrintableSummary() {

    const items = Object.entries(answers).map(([id, value]) => {
        const q = tests.symptom.questions.find(question => question.id === id);
        const label = q ? q.question : id;
        const shown = Array.isArray(value) ? value.join(", ") : value;

        return `<li><strong>${escapeHtml(label)}</strong><br>${escapeHtml(shown)}</li>`;
    }).join("");

    return `
        <details style="margin:30px 0;">
            <summary style="cursor:pointer;font-size:18px;">
                View my answer summary
            </summary>
            <ul style="line-height:1.7;margin-top:20px;">
                ${items}
            </ul>
        </details>
    `;
}

function printResults() {
    window.print();
}

function startAnotherAssessment() {
    returnHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showProviderNotice() {
    alert(
        "Find Eye Care is the next major feature planned for this site. " +
        "It will help users understand which type of eye-care professional may fit their needs and search for care by location. " +
        "No assessment answers are currently transmitted or shared."
    );
}



// ==========================================================
// SHARED POST-TEST ACTIONS
// ==========================================================

function scrollToResultSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function retakeCurrentAssessment() {
    const testToRetake = currentTest;
    if (!testToRetake) return;
    startTest(testToRetake);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToAssessmentMenu() {
    returnHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getSharedPostTestActions(config = {}) {
    const {
        primaryLabel = "Explore Eye Health Library",
        primaryHref = "library.html",
        showRetake = true,
        extraPrimary = "",
        extraSecondary = ""
    } = config;

    return `
        <section class="post-test-actions">
            <div class="post-test-actions-heading">
                <p class="eyebrow">WHAT WOULD YOU LIKE TO DO NEXT?</p>
                <h2>Keep exploring your results</h2>
                <p>
                    Learn more about the findings above, save a copy for yourself,
                    or continue with another eye-health assessment.
                </p>
            </div>

            <div class="post-test-primary-actions">
                ${extraPrimary}

                <a class="post-action post-action-primary" href="${primaryHref}">
                    ${primaryLabel}
                </a>

                <button class="post-action post-action-primary-soft"
                        type="button"
                        onclick="showProviderNotice()">
                    Find Eye Care
                    <span class="post-action-note">Coming next</span>
                </button>
            </div>

            <div class="post-test-secondary-actions">
                ${extraSecondary}

                <button class="post-action post-action-secondary"
                        type="button"
                        onclick="window.print()">
                    Print / Save Results
                </button>

                ${showRetake ? `
                    <button class="post-action post-action-secondary"
                            type="button"
                            onclick="retakeCurrentAssessment()">
                        Retake This Assessment
                    </button>
                ` : ""}

                <button class="post-action post-action-secondary"
                        type="button"
                        onclick="startAnotherAssessment()">
                    Take Another Assessment
                </button>

                <button class="post-action post-action-link"
                        type="button"
                        onclick="goToAssessmentMenu()">
                    Return Home
                </button>
            </div>
        </section>
    `;
}

function getSymptomLibraryLink(result) {
    if (!result || !result.id) return "library.html";
    return `library.html?condition=${encodeURIComponent(result.id)}`;
}

// ==========================================================
// RESULTS DISPLAY
// ==========================================================

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function renderResults() {

    const resultsContainer = document.getElementById("answerSummary");

    if (!resultsContainer) {
        return;
    }

    const allMatches = calculateConditionMatches();
    const symptomMatches = getSymptomMatches(allMatches).slice(0, 6);
    const riskFindings = getRiskFindings(allMatches).slice(0, 6);

    const urgency = calculateUrgency();
    const infoQuality = calculateInformationQuality();

    // Update completion heading from old placeholder language.
    const completion = document.getElementById("completionScreen");

    if (completion) {
        const heading = completion.querySelector("h1");
        const intro = completion.querySelector(".intro");

        if (heading) {
            heading.textContent = "Your Eye Health Results";
        }

        if (intro) {
            intro.textContent =
                "These results are educational pattern matches based on the answers you provided. They are not a diagnosis or a probability that you have a condition.";
        }
    }

    let html = "";

    // CARE LEVEL
    html += `
        <section style="
            background:white;
            border:1px solid #d7dede;
            padding:28px;
            margin:30px 0;
        ">
            <p class="eyebrow">RECOMMENDED LEVEL OF CARE</p>
            <h2 style="font-size:30px;margin-bottom:10px;">
                ${escapeHtml(urgency.label)}
            </h2>
            <p>${escapeHtml(urgency.message)}</p>
        </section>
    `;

    // INFORMATION QUALITY
    html += `
        <section style="
            background:white;
            border:1px solid #d7dede;
            padding:24px 28px;
            margin:20px 0 35px;
        ">
            <p class="eyebrow">INFORMATION QUALITY</p>
            <h2>${escapeHtml(infoQuality.level)}</h2>
            <p>${escapeHtml(infoQuality.explanation)}</p>
        </section>
    `;

    html += `
        <section style="margin:35px 0;">
            <p class="eyebrow">POSSIBLE EXPLANATIONS FOR YOUR CURRENT SYMPTOMS</p>
            <p style="max-width:760px;">
                A pattern match means that parts of your answers resemble
                features commonly associated with a condition. It does not
                mean that you have that condition, and these labels are not
                percentages or diagnostic probabilities.
            </p>
        </section>
    `;

    if (!symptomMatches.length) {

        html += `
            <article style="
                background:white;
                border:1px solid #d7dede;
                padding:30px;
                margin:22px 0;
            ">
                <h2>No clear symptom pattern identified</h2>
                <p>
                    Your answers did not create a strong enough pattern for
                    this prototype to highlight a specific explanation.
                    That does not mean that nothing is wrong or that an eye
                    condition has been ruled out.
                </p>
                <p>
                    Some important eye diseases can cause few or no noticeable
                    early symptoms, so a comprehensive eye examination remains
                    the best way to evaluate eye health.
                </p>
            </article>
        `;

    } else {

        symptomMatches.slice(0, 3).forEach(result => {

            const matchedAnswers = result.matched
                .slice(0, 7)
                .map(item => `
                    <li style="margin-bottom:10px;">
                        ${escapeHtml(item.label)}
                        <br>
                        <span style="color:#666;">
                            Your answer: ${escapeHtml(item.answer)}
                        </span>
                    </li>
                `)
                .join("");

            html += `
                <article style="
                    background:white;
                    border:1px solid #d7dede;
                    padding:32px;
                    margin:24px 0;
                ">
                    <p class="eyebrow">${escapeHtml(result.matchLevel)}</p>

                    <h2 style="font-size:30px;margin-bottom:8px;">
                        ${escapeHtml(result.name)}
                    </h2>

                    <p style="color:#666;margin-top:0;">
                        ${escapeHtml(resultScopeLabel(result))}
                    </p>

                    <h3>What is it?</h3>
                    <p>${escapeHtml(result.description)}</p>

                    <h3>Common signs</h3>
                    <ul>
                        ${result.signs.map(sign => `<li>${escapeHtml(sign)}</li>`).join("")}
                    </ul>

                    <h3>What you reported</h3>
                    <ul>${matchedAnswers}</ul>

                    <h3>Why these answers matter</h3>
                    <p>${escapeHtml(getWhyText(result))}</p>

                    <h3>How is it usually managed or treated?</h3>
                    <p>${escapeHtml(result.management)}</p>

                    <h3>What might happen at an eye exam?</h3>
                    <p>${escapeHtml(getExamText(result))}</p>

                    <h3>What should you do next?</h3>
                    <p>${escapeHtml(result.nextSteps)}</p>

                    <div class="result-card-actions">
                        <a class="result-learn-link"
                           href="${getSymptomLibraryLink(result)}">
                            Learn About ${escapeHtml(result.name)} →
                        </a>
                    </div>


                    <p style="
                        margin-top:25px;
                        font-size:14px;
                        color:#777;
                    ">
                        This is an educational pattern match and does not
                        confirm that you have this condition.
                    </p>
                </article>
            `;
        });

        if (symptomMatches.length > 3) {

            const additional = symptomMatches.slice(3).map(result => `
                <li style="margin-bottom:8px;">
                    <strong>${escapeHtml(result.name)}</strong>
                    — ${escapeHtml(result.matchLevel)}
                </li>
            `).join("");

            html += `
                <details style="
                    background:white;
                    border:1px solid #d7dede;
                    padding:24px 28px;
                    margin:22px 0;
                ">
                    <summary style="cursor:pointer;font-size:18px;">
                        View additional lower-strength matches
                    </summary>
                    <ul style="margin-top:18px;">
                        ${additional}
                    </ul>
                </details>
            `;
        }
    }

    // RISK / HISTORY
    if (riskFindings.length) {

        html += `
            <section style="
                background:#f8faf9;
                border:1px solid #d7dede;
                padding:28px;
                margin:40px 0 25px;
            ">
                <p class="eyebrow">OTHER THINGS WORTH KNOWING</p>
                <h2>Eye & Health History Findings</h2>
        `;

        riskFindings.forEach(result => {
            html += `
                <div style="
                    border-top:1px solid #dde3e3;
                    padding-top:18px;
                    margin-top:18px;
                ">
                    <h3>${escapeHtml(result.name)}</h3>
                    <p>${escapeHtml(result.description)}</p>
                    <p><strong>Next step:</strong> ${escapeHtml(result.nextSteps)}</p>
                </div>
            `;
        });

        html += `</section>`;
    }

    // Privacy + summary
    html += `
        <section style="
            background:white;
            border:1px solid #d7dede;
            padding:28px;
            margin:30px 0;
        ">
            <p class="eyebrow">YOUR INFORMATION</p>
            <h2>Your answers stay in this browser session</h2>
            <p>
                This prototype does not create an account or send your
                assessment answers anywhere. Printing uses your browser's
                print system. Provider sharing will only be enabled after
                an explicit consent step is connected to a real provider
                system.
            </p>

            ${buildPrintableSummary()}
        </section>
    `;

    // SHARED END ACTIONS
    html += getSharedPostTestActions({
        primaryLabel: "Explore Eye Health Library",
        primaryHref: "library.html",
        extraPrimary: `
            <button class="post-action post-action-primary-soft"
                    type="button"
                    onclick="scrollToResultSection('symptomMatchesSection')">
                Review My Possible Matches
            </button>
        `
    });

    resultsContainer.innerHTML = html;
}


// ==========================================================
// FINISH TEST
// ==========================================================

function finishTest() {

    document
        .getElementById("testScreen")
        .classList.add("hidden");

    document
        .getElementById("completionScreen")
        .classList.remove("hidden");

    if (currentTest === "symptom") {
        renderResults();
    } else if (currentTest === "vision") {
        renderVisionResults();
    } else if (currentTest === "future") {
        renderFutureResults();
    } else {

        const summary = document.getElementById("answerSummary");

        const completion = document.getElementById("completionScreen");
        if (completion) {
            const heading = completion.querySelector("h1");
            const intro = completion.querySelector(".intro");

            if (heading) heading.textContent = "Assessment Complete";
            if (intro) {
                intro.textContent =
                    "This assessment module is still being developed. Your Symptom Analysis is the completed prototype in this build.";
            }
        }

        if (summary) {
            summary.innerHTML = `
                <div style="
                    background:white;
                    border:1px solid #d7dede;
                    padding:28px;
                    margin:25px 0;
                ">
                    <p>
                        This module is still being developed. Return to the
                        assessment menu to take Symptom Analysis.
                    </p>
                </div>
            `;
        }
    }

    console.log("Completed assessment:", currentTest);
    console.log("Answers:", answers);
}


// ==========================================================
// RETURN HOME
// ==========================================================

function returnHome() {

    currentTest = null;
    currentQuestionId = null;
    answers = {};
    questionHistory = [];

    document.getElementById("testScreen").classList.add("hidden");
    document.getElementById("completionScreen").classList.add("hidden");
    document.getElementById("selectionScreen").classList.remove("hidden");

    const summary = document.getElementById("answerSummary");

    if (summary) {
        summary.innerHTML = "";
    }
}