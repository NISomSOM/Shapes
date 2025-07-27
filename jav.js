function DateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('datetime').textContent = now.toLocaleDateString('en-US', options);
}
setInterval(DateTime, 1000);
DateTime();

document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "Light Mode";
    }

    if (darkModeToggle) {
        darkModeToggle.onclick = function() {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
                this.textContent = "Light Mode";
            } else {
                localStorage.setItem("darkMode", "disabled");
                this.textContent = "Dark Mode";
            }
        };
    }
});


function validateForm(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailPattern.test(email)) {
        alert("Invalid email format.");
        return false;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one letter and one number.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    alert("Registration successful!");
    document.getElementById("registerForm").submit();
}

function validateQuiz() {
    const questions = document.querySelectorAll('.question');
    let score = 0;
    let totalQuestions = questions.length;
    let answeredQuestions = 0;
    
    questions.forEach((question, index) => {
      const radioButtons = question.querySelectorAll('input[type="radio"]:checked');
      const checkboxes = question.querySelectorAll('input[type="checkbox"]:checked');
      const textInputs = question.querySelectorAll('input[type="text"], textarea');
      
      if (radioButtons.length > 0 || checkboxes.length > 0 || 
          (textInputs.length > 0 && textInputs[0].value.trim() !== '')) {
        answeredQuestions++;
        
        if (radioButtons.length > 0 && radioButtons[0].value === 'correct') {
          score += 10;
        }
        
        if (checkboxes.length > 0) {
          const allCorrect = Array.from(checkboxes).every(cb => cb.value === 'correct');
          const correctCount = question.querySelectorAll('input[type="checkbox"][value="correct"]').length;
          
          if (allCorrect && checkboxes.length === correctCount) {
            score += 10;
          }
        }
        
        if (textInputs.length > 0) {
          const userAnswer = textInputs[0].value.trim().toLowerCase();
          const correctAnswer = textInputs[0].getAttribute('data-correct-answer').toLowerCase();
          
          if (userAnswer === correctAnswer) {
            score += 10;
          }
        }
      }
    });
    
    if (answeredQuestions < totalQuestions) {
      alert(`Please answer all questions. You've answered ${answeredQuestions} out of ${totalQuestions} questions.`);
      return false;
    }
    
    displayScore(score, totalQuestions * 10);
    return true;
  }
  
  function displayScore(score, maxScore) {
    let scoreDisplay = document.getElementById('scoreDisplay');
    
    if (!scoreDisplay) {
      scoreDisplay = document.createElement('div');
      scoreDisplay.id = 'scoreDisplay';
      scoreDisplay.style.marginTop = '20px';
      scoreDisplay.style.fontSize = '22px';
      scoreDisplay.style.textAlign = 'left';
      scoreDisplay.style.color = '#004d40';
      document.querySelector('.quiz').appendChild(scoreDisplay);
    }
    
    const percentage = (score / maxScore) * 100;
    
    scoreDisplay.innerHTML = `
      <h2 style="text-decoration: underline; text-align:left;">Quiz Results</h2>
      <p>Your score: ${score} out of ${maxScore} (${percentage.toFixed(2)}%)</p>
      <p>${getFeedback(percentage)}</p>
    `;
  }
  
  
  function getFeedback(percentage) {
    if (percentage >= 90) {
      return "Excellent!";
    } else if (percentage >= 70) {
      return "Good job!";
    } else if (percentage >= 50) {
      return "Not bad";
    } else {
      return "Terrible Score";
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('input[type="submit"]');
    
    if (submitButton) {
      submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        validateQuiz();
      });
    }
  });
  
  function submitFeedback(event) {
    event.preventDefault();
    document.getElementById("feedback-form").reset();
    document.getElementById("thank-you").style.display = "block";
}

