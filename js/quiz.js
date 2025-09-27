// ShikshaPlay - Quiz JavaScript

// Quiz state variables
let currentQuiz = null;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let quizStartTime = null;
let quizResults = null;

// NEW: Timer state variables
let timerInterval = null;
const QUESTION_TIME_LIMIT = 30; // Time limit in seconds for each question

// Initialize quiz page
document.addEventListener('DOMContentLoaded', function() {
    initializeQuizPage();
});

// Initialize quiz page functionality
function initializeQuizPage() {
    // Check if user is logged in
    const user = userManager.getCurrentUser();
    if (!user) {
        showAlert('Please login first to take a quiz!', 'warning');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
        return;
    }
    
    // Update user info
    updateUserInfo(user);
    
    // Check for saved progress
    const savedProgress = quizProgressManager.getCurrentProgress();
    if (savedProgress) {
        // Resume saved quiz
        resumeQuiz(savedProgress);
    } else {
        // Show quiz selection
        showQuizSelection();
    }
}

// Update user information in UI
function updateUserInfo(user) {
    const currentUserElement = document.getElementById('currentUser');
    const currentPointsElement = document.getElementById('currentPoints');
    
    if (currentUserElement) {
        currentUserElement.textContent = user.name;
    }
    
    if (currentPointsElement) {
        currentPointsElement.textContent = `${user.totalPoints} points`;
    }
}

// Show quiz selection screen
function showQuizSelection() {
    const selectionScreen = document.getElementById('quizSelection');
    const gameScreen = document.getElementById('quizGame');
    
    if (selectionScreen) selectionScreen.classList.remove('d-none');
    if (gameScreen) gameScreen.classList.add('d-none');
}

// Select a quiz
function selectQuiz(subject, level) {
    showLoadingOverlay('Loading your quiz...');
    
    setTimeout(() => {
        const quiz = getQuizForSubject(subject, level);
        if (!quiz) {
            hideLoadingOverlay();
            showAlert('Quiz not available. Please try another subject.', 'warning');
            return;
        }
        
        // Shuffle questions for variety
        shuffleArray(quiz.questions);
        
        currentQuiz = quiz;
        currentQuestionIndex = 0;
        selectedAnswer = null;
        quizStartTime = new Date();
        
        // Start quiz progress tracking
        quizProgressManager.startQuiz(quiz);
        
        hideLoadingOverlay();
        startQuiz();
    }, 1000);
}

// Start the quiz
function startQuiz() {
    const selectionScreen = document.getElementById('quizSelection');
    const gameScreen = document.getElementById('quizGame');
    
    if (selectionScreen) selectionScreen.classList.add('d-none');
    if (gameScreen) gameScreen.classList.remove('d-none');
    
    // Initialize quiz UI
    updateQuizHeader();
    loadQuestion();
    
    // Play start sound
    playSound('success');
    
    console.log('Quiz started:', currentQuiz.subject);
}

// Resume saved quiz
function resumeQuiz(savedProgress) {
    showLoadingOverlay('Resuming your quiz...');
    
    setTimeout(() => {
        const quiz = getQuizForSubject(savedProgress.subject, savedProgress.level);
        if (!quiz) {
            hideLoadingOverlay();
            quizProgressManager.clearProgress();
            showQuizSelection();
            return;
        }
        
        currentQuiz = quiz;
        currentQuestionIndex = savedProgress.currentQuestion;
        quizStartTime = new Date(savedProgress.startTime);
        
        hideLoadingOverlay();
        startQuiz();
        
        showAlert('Resuming your quiz where you left off!', 'info');
    }, 1000);
}

// Update quiz header information
function updateQuizHeader() {
    const questionNumberElement = document.getElementById('questionNumber');
    const totalQuestionsElement = document.getElementById('totalQuestions');
    const progressBarElement = document.getElementById('progressBar');
    const quizPointsElement = document.getElementById('quizPoints');
    const quizSubjectElement = document.getElementById('quizSubject');
    
    if (questionNumberElement) {
        questionNumberElement.textContent = currentQuestionIndex + 1;
    }
    
    if (totalQuestionsElement) {
        totalQuestionsElement.textContent = currentQuiz.questions.length;
    }
    
    if (progressBarElement) {
        const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
        progressBarElement.style.width = `${progress}%`;
        progressBarElement.setAttribute('aria-valuenow', progress);
        
        // MODIFIED: Ensure the progress bar is in "progress" mode, not "timer" mode.
        progressBarElement.classList.remove('bg-warning', 'progress-bar-striped');
        progressBarElement.classList.add('progress-bar-animated');
    }
    
    if (quizPointsElement) {
        const earnedPoints = quizProgressManager.getCurrentProgress()?.score * currentQuiz.pointsPerQuestion || 0;
        quizPointsElement.textContent = earnedPoints;
    }
    
    if (quizSubjectElement) {
        quizSubjectElement.textContent = currentQuiz.subject;
    }
}

// Load current question
function loadQuestion() {
    // NEW: Stop any previous timer when a new question loads
    clearInterval(timerInterval);

    const question = currentQuiz.questions[currentQuestionIndex];
    if (!question) return;
    
    // Update question text
    const questionTextElement = document.getElementById('questionText');
    if (questionTextElement) {
        questionTextElement.textContent = question.text;
    }
    
    // Update answer options
    const options = ['option0', 'option1', 'option2'];
    options.forEach((optionId, index) => {
        const optionElement = document.getElementById(optionId);
        if (optionElement && question.options[index]) {
            const optionText = optionElement.querySelector('.option-text');
            if (optionText) {
                optionText.textContent = question.options[index];
            }
            
            // Reset option state
            optionElement.classList.remove('selected', 'correct', 'incorrect');
            optionElement.disabled = false;
        }
    });
    
    // Reset UI state
    selectedAnswer = null;
    hideQuizButtons();
    showQuizButton('submitBtn');
    hideFeedback();
    
    // Animate question appearance
    const questionCard = document.querySelector('.question-card');
    if (questionCard) {
        animateElement(questionCard, 'animate__fadeIn');
    }
    
    // Update encouragement message
    updateEncouragementMessage();

    // NEW: Start the countdown timer for the new question
    startTimer();
}

// Select an answer
function selectAnswer(index) {
    document.querySelectorAll('.answer-btn').forEach(btn => btn.classList.remove('selected'));
    const selectedBtn = document.getElementById('option' + index);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    }
    selectedAnswer = index;
}

// Submit the selected answer
function submitAnswer() {
    if (selectedAnswer === null) {
        showAlert('Please select an answer first!', 'warning');
        return;
    }

    // NEW: Stop the timer as soon as a valid answer is submitted
    clearInterval(timerInterval);
    
    const question = currentQuiz.questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correctAnswer;
    
    // Record answer
    quizProgressManager.answerQuestion(currentQuestionIndex, selectedAnswer, isCorrect);
    
    // Update UI to show correct/incorrect
    const options = ['option0', 'option1', 'option2'];
    options.forEach((optionId, index) => {
        const optionElement = document.getElementById(optionId);
        if (optionElement) {
            optionElement.disabled = true;
            
            if (index === question.correctAnswer) {
                optionElement.classList.add('correct');
            } else if (index === selectedAnswer && !isCorrect) {
                optionElement.classList.add('incorrect');
            }
        }
    });
    
    // Show feedback
    showFeedback(isCorrect, question.explanation);
    
    // Play sound
    playSound(isCorrect ? 'correct' : 'incorrect');
    
    // Update header (this resets the progress bar to show overall progress)
    updateQuizHeader();
    
    // Hide submit button, show next/finish button
    hideQuizButton('submitBtn');
    
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        showQuizButton('nextBtn');
    } else {
        showQuizButton('finishBtn');
    }
    
    console.log('Answer submitted:', { selected: selectedAnswer, correct: question.correctAnswer, isCorrect });
}

// Show feedback for the answer
function showFeedback(isCorrect, explanation) {
    const feedbackSection = document.getElementById('feedbackSection');
    const correctFeedback = document.getElementById('correctFeedback');
    const incorrectFeedback = document.getElementById('incorrectFeedback');
    const correctMessage = document.getElementById('correctMessage');
    const incorrectMessage = document.getElementById('incorrectMessage');
    
    if (feedbackSection) {
        feedbackSection.classList.remove('d-none');
    }
    
    if (isCorrect) {
        if (correctFeedback) correctFeedback.classList.remove('d-none');
        if (incorrectFeedback) incorrectFeedback.classList.add('d-none');
        if (correctMessage) correctMessage.textContent = explanation || 'Great job!';
    } else {
        if (correctFeedback) correctFeedback.classList.add('d-none');
        if (incorrectFeedback) incorrectFeedback.classList.remove('d-none');
        if (incorrectMessage) incorrectMessage.textContent = explanation || 'Keep trying!';
    }
}

// Hide feedback
function hideFeedback() {
    const feedbackSection = document.getElementById('feedbackSection');
    const correctFeedback = document.getElementById('correctFeedback');
    const incorrectFeedback = document.getElementById('incorrectFeedback');
    
    if (feedbackSection) feedbackSection.classList.add('d-none');
    if (correctFeedback) correctFeedback.classList.add('d-none');
    if (incorrectFeedback) incorrectFeedback.classList.add('d-none');
}

// Move to next question
function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        quizProgressManager.nextQuestion();
        loadQuestion();
        updateQuizHeader();
    }
}

// Finish the quiz
function finishQuiz() {
    // NEW: Stop the timer if quiz is finished manually
    clearInterval(timerInterval);

    const confirmFinish = confirm('Are you sure you want to finish the quiz?');
    if (!confirmFinish) return;
    
    showLoadingOverlay('Calculating your results...');
    
    setTimeout(() => {
        // Complete quiz and get results
        const quizProgress = quizProgressManager.completeQuiz();
        
        // Calculate final results
        const totalQuestions = currentQuiz.questions.length;
        const correctAnswers = quizProgress.score;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        const pointsEarned = correctAnswers * currentQuiz.pointsPerQuestion;
        
        quizResults = {
            quizId: currentQuiz.id,
            subject: currentQuiz.subject,
            level: currentQuiz.level,
            totalQuestions,
            correctAnswers,
            percentage,
            points: pointsEarned,
            timeSpent: quizProgress.timeSpent,
            answers: quizProgress.answers
        };
        
        // Update user data
        const user = userManager.getCurrentUser();
        if (user && !user.isGuest) {
            userManager.updateUserPoints(pointsEarned);
            userManager.updateUserStats(quizResults);
            
            // Check for new badges
            const newBadges = badgeManager.checkForNewBadges(userManager.getCurrentUser());
            quizResults.newBadges = newBadges;
            
            // Award new badges
            newBadges.forEach(badge => {
                userManager.addBadgeToUser(badge.id);
            });
        }
        
        hideLoadingOverlay();
        
        // Store results for results page
        sessionStorage.setItem('quizResults', JSON.stringify(quizResults));
        
        // Navigate to results page
        window.location.href = 'results.html';
    }, 2000);
}

// NEW: Helper functions to manage the question timer
/**
 * Starts the countdown timer for the current question.
 */
function startTimer() {
    let secondsLeft = QUESTION_TIME_LIMIT;
    const progressBarElement = document.getElementById('progressBar');
    
    // Set the progress bar to timer mode (full width and warning color)
    if (progressBarElement) {
        progressBarElement.classList.add('bg-warning', 'progress-bar-striped');
        progressBarElement.classList.remove('progress-bar-animated');
    }
    updateTimerBar(secondsLeft);

    timerInterval = setInterval(() => {
        secondsLeft--;
        updateTimerBar(secondsLeft);

        if (secondsLeft < 0) {
            handleTimeout();
        }
    }, 1000);
}

/**
 * Updates the progress bar width to reflect the time remaining.
 * @param {number} secondsLeft - The number of seconds left on the timer.
 */
function updateTimerBar(secondsLeft) {
    const progressBarElement = document.getElementById('progressBar');
    if (progressBarElement) {
        const percentage = Math.max(0, (secondsLeft / QUESTION_TIME_LIMIT) * 100);
        progressBarElement.style.width = `${percentage}%`;
        progressBarElement.setAttribute('aria-valuenow', percentage);
    }
}

/**
 * Handles the logic for when the question timer runs out.
 */
function handleTimeout() {
    clearInterval(timerInterval);
    
    showAlert("Time's up! Moving to the next question.", 'info');
    playSound('incorrect');

    // Disable answer options
    document.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);

    // Record the question as unanswered (and therefore incorrect)
    quizProgressManager.answerQuestion(currentQuestionIndex, null, false);
    
    // Automatically move to the next question or finish the quiz
    setTimeout(() => {
        if (currentQuestionIndex < currentQuiz.questions.length - 1) {
            nextQuestion();
        } else {
            finishQuiz();
        }
    }, 2000); // 2-second delay for the user to see the timeout message
}


// Update encouragement message
function updateEncouragementMessage() {
    const messages = [
        "You're doing great! Keep it up! 🌟",
        "Amazing progress! You're learning so much! 📚",
        "Fantastic work! Every question makes you smarter! 🧠",
        "Keep going! You're doing wonderfully! ⭐",
        "Excellent effort! Learning is fun! 🎉",
        "Super job! You're getting better with each question! 💪",
        "Wonderful! Your hard work is paying off! ✨",
        "Great job! You're on fire! 🔥",
        "Amazing! You're a learning champion! 🏆",
        "Perfect! Keep up the excellent work! 👍"
    ];
    
    const messageElement = document.getElementById('encouragementMessage');
    if (messageElement) {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const badgeElement = messageElement.querySelector('.badge');
        if (badgeElement) {
            badgeElement.innerHTML = `<i class="fas fa-heart text-danger"></i> ${randomMessage}`;
        }
    }
}

// Show/hide quiz buttons
function showQuizButton(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.classList.remove('d-none');
    }
}

function hideQuizButton(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.classList.add('d-none');
    }
}

function hideQuizButtons() {
    hideQuizButton('submitBtn');
    hideQuizButton('nextBtn');
    hideQuizButton('finishBtn');
}

// Utility function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Go back to quiz selection
function goBackToSelection() {
    const confirmBack = confirm('Are you sure you want to go back? Your progress will be lost.');
    if (confirmBack) {
        // NEW: Stop the timer when going back
        clearInterval(timerInterval);
        quizProgressManager.clearProgress();
        currentQuiz = null;
        currentQuestionIndex = 0;
        selectedAnswer = null;
        showQuizSelection();
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Only handle keys during quiz
    if (!currentQuiz || document.getElementById('quizGame').classList.contains('d-none')) {
        return;
    }
    
    // Number keys 1-3 for selecting answers
    if (e.key >= '1' && e.key <= '3' && selectedAnswer === null) {
        const answerIndex = parseInt(e.key) - 1;
        selectAnswer(answerIndex);
    }
    
    // Enter key to submit/next
    if (e.key === 'Enter') {
        if (!document.getElementById('submitBtn').classList.contains('d-none')) {
            submitAnswer();
        } else if (!document.getElementById('nextBtn').classList.contains('d-none')) {
            nextQuestion();
        } else if (!document.getElementById('finishBtn').classList.contains('d-none')) {
            finishQuiz();
        }
    }
    
    // Escape key to go back
    if (e.key === 'Escape') {
        goBackToSelection();
    }
});

// Auto-save progress periodically
setInterval(() => {
    if (currentQuiz && quizProgressManager.getCurrentProgress()) {
        // Progress is automatically saved by quizProgressManager
        console.log('Quiz progress auto-saved');
    }
}, 30000); // Every 30 seconds

// Handle page unload
window.addEventListener('beforeunload', function(e) {
    if (currentQuiz && selectedAnswer === null && currentQuestionIndex > 0) {
        e.preventDefault();
        e.returnValue = 'You have an unfinished quiz. Your progress will be saved.';
    }
});

// Export functions for global access
window.selectQuiz = selectQuiz;
window.selectAnswer = selectAnswer;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.finishQuiz = finishQuiz;
window.goBackToSelection = goBackToSelection;