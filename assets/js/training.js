(function () {
  document.addEventListener('DOMContentLoaded', function () {
    /* Role card selection */
    document.querySelectorAll('.role-card').forEach(function (card) {
      card.addEventListener('click', function () {
        document.querySelectorAll('.role-card').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        var role = this.dataset.role;
        if (role) {
          localStorage.setItem('training_role', role);
          var href = this.getAttribute('href');
          if (href && href !== '#') window.location.href = href;
        }
      });
    });

    /* Restore selected role */
    var savedRole = localStorage.getItem('training_role');
    if (savedRole) {
      var card = document.querySelector('[data-role="' + savedRole + '"]');
      if (card) card.classList.add('active');
    }

    /* Quiz interaction */
    document.querySelectorAll('.quiz-option').forEach(function (opt) {
      opt.addEventListener('click', function () {
        var question = this.closest('.quiz-question');
        if (question.dataset.answered) return;
        question.dataset.answered = 'true';
        var isCorrect = this.dataset.correct === 'true';
        this.classList.add(isCorrect ? 'correct' : 'incorrect');
        if (!isCorrect) {
          var correct = question.querySelector('[data-correct="true"]');
          if (correct) correct.classList.add('correct');
        }
        checkQuizComplete();
      });
    });

    function checkQuizComplete() {
      var questions = document.querySelectorAll('.quiz-question');
      var answered = document.querySelectorAll('.quiz-question[data-answered]').length;
      if (answered < questions.length) return;
      var correct = document.querySelectorAll('.quiz-option.correct').length;
      var scoreEl = document.getElementById('quiz-score');
      var scoreNum = document.getElementById('score-num');
      if (scoreEl) scoreEl.style.display = 'block';
      if (scoreNum) scoreNum.textContent = correct;

      /* Mark module complete in localStorage */
      var module = document.body.dataset.module;
      if (module) {
        var progress = JSON.parse(localStorage.getItem('training_progress') || '{}');
        progress[module] = { completed: true, score: correct, total: questions.length };
        localStorage.setItem('training_progress', JSON.stringify(progress));
      }
    }
  });
})();
