/**
 * Strategic Business Research Methods - Interactive Learning Engine
 * Gamified activities, progress tracking, and achievement system
 * Vanilla JavaScript, no dependencies
 */
(function () {
  'use strict';

  // ===== Configuration =====
  var CONFIG = {
    storageKey: 'srm-course-progress',
    levels: [
      { name: 'Research Novice', minXP: 0 },
      { name: 'Research Apprentice', minXP: 50 },
      { name: 'Research Analyst', minXP: 150 },
      { name: 'Research Strategist', minXP: 300 },
      { name: 'Research Expert', minXP: 450 },
      { name: 'Research Master', minXP: 600 }
    ],
    badges: {
      'first-activity': { name: 'First Steps', desc: 'Complete your first activity', icon: '1' },
      'perfect-score': { name: 'Perfect Score', desc: 'Get 100% on any activity', icon: 'P' },
      'streak-3': { name: 'Hot Streak', desc: '3 perfect activities in a row', icon: '3' },
      'streak-5': { name: 'On Fire', desc: '5 perfect activities in a row', icon: '5' },
      'halfway': { name: 'Halfway There', desc: 'Complete 50% of all activities', icon: 'H' },
      'quiz-whiz': { name: 'Quiz Whiz', desc: 'Score 80%+ on 5 quizzes', icon: 'Q' },
      'flashcard-fan': { name: 'Term Expert', desc: 'Master all flashcard sets', icon: 'F' },
      'course-complete': { name: 'Course Complete', desc: 'Finish all activities', icon: 'R' }
    }
  };

  // ===== State Management =====
  var state;

  function getDefaultState() {
    return {
      xp: 0,
      level: 0,
      badges: [],
      streak: 0,
      completedActivities: {},
      activityScores: {},
      moduleProgress: {},
      quizHighScores: 0,
      flashcardSetsCompleted: 0
    };
  }

  function loadState() {
    try {
      var saved = localStorage.getItem(CONFIG.storageKey);
      if (saved) {
        var parsed = JSON.parse(saved);
        return mergeDefaults(getDefaultState(), parsed);
      }
    } catch (e) { /* ignore */ }
    return getDefaultState();
  }

  function mergeDefaults(defaults, obj) {
    var result = {};
    for (var key in defaults) {
      if (defaults.hasOwnProperty(key)) {
        result[key] = (obj && obj.hasOwnProperty(key)) ? obj[key] : defaults[key];
      }
    }
    return result;
  }

  function saveState() {
    try {
      localStorage.setItem(CONFIG.storageKey, JSON.stringify(state));
    } catch (e) { /* ignore */ }
  }

  // ===== Initialization =====
  document.addEventListener('DOMContentLoaded', function () {
    state = loadState();
    initAllActivities();
    initProgressDisplay();
    initHomepageProgress();
    restoreCompletedActivities();
  });

  function initAllActivities() {
    initQuizzes();
    initSortActivities();
    initMatchActivities();
    initScenarios();
    initFlashcards();
    initFillBlanks();
  }

  // ===== Quiz Activities =====
  function initQuizzes() {
    var quizzes = document.querySelectorAll('.activity-quiz');
    for (var q = 0; q < quizzes.length; q++) {
      (function (quiz) {
        var activityId = quiz.getAttribute('data-activity-id');
        var questions = quiz.querySelectorAll('.quiz-question');

        // Option click handling
        for (var i = 0; i < questions.length; i++) {
          (function (question) {
            var options = question.querySelectorAll('.quiz-option');
            for (var j = 0; j < options.length; j++) {
              options[j].addEventListener('click', function () {
                if (quiz.classList.contains('completed')) return;
                for (var k = 0; k < options.length; k++) {
                  options[k].classList.remove('selected');
                }
                this.classList.add('selected');
              });
            }
          })(questions[i]);
        }

        var submitBtn = quiz.querySelector('.btn-check-answer');
        if (submitBtn) {
          submitBtn.addEventListener('click', function () {
            evaluateQuiz(quiz, activityId);
          });
        }

        var resetBtn = quiz.querySelector('.btn-reset-activity');
        if (resetBtn) {
          resetBtn.addEventListener('click', function () {
            resetQuiz(quiz);
          });
        }
      })(quizzes[q]);
    }
  }

  function evaluateQuiz(quiz, activityId) {
    if (quiz.classList.contains('completed')) return;

    var questions = quiz.querySelectorAll('.quiz-question');
    var correct = 0;
    var total = questions.length;

    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      var correctAnswer = q.getAttribute('data-correct');
      var selected = q.querySelector('.quiz-option.selected');
      var selectedValue = selected ? selected.getAttribute('data-value') : null;

      var fbCorrect = q.querySelector('.feedback-correct');
      var fbIncorrect = q.querySelector('.feedback-incorrect');

      if (selectedValue === correctAnswer) {
        correct++;
        q.classList.add('answered-correct');
        if (fbCorrect) fbCorrect.style.display = 'block';
        if (selected) selected.classList.add('correct');
      } else {
        q.classList.add('answered-incorrect');
        if (fbIncorrect) fbIncorrect.style.display = 'block';
        if (selected) selected.classList.add('incorrect');
        // Highlight correct answer
        var correctOpt = q.querySelector('.quiz-option[data-value="' + correctAnswer + '"]');
        if (correctOpt) correctOpt.classList.add('correct');
      }
    }

    var score = Math.round((correct / total) * 100);
    var points = parseInt(quiz.getAttribute('data-points') || '10', 10);
    var earnedPoints = Math.round(points * (correct / total));

    showActivityResult(quiz, correct, total, earnedPoints);
    completeActivity(activityId, score, earnedPoints);
    quiz.classList.add('completed');

    var submitBtn = quiz.querySelector('.btn-check-answer');
    if (submitBtn) submitBtn.style.display = 'none';
    var resetBtn = quiz.querySelector('.btn-reset-activity');
    if (resetBtn) resetBtn.style.display = 'inline-flex';
  }

  function resetQuiz(quiz) {
    quiz.classList.remove('completed');
    var questions = quiz.querySelectorAll('.quiz-question');
    for (var i = 0; i < questions.length; i++) {
      questions[i].classList.remove('answered-correct', 'answered-incorrect');
      var opts = questions[i].querySelectorAll('.quiz-option');
      for (var j = 0; j < opts.length; j++) {
        opts[j].classList.remove('selected', 'correct', 'incorrect');
      }
      var fc = questions[i].querySelector('.feedback-correct');
      var fi = questions[i].querySelector('.feedback-incorrect');
      if (fc) fc.style.display = 'none';
      if (fi) fi.style.display = 'none';
    }
    hideResult(quiz);
    var submitBtn = quiz.querySelector('.btn-check-answer');
    if (submitBtn) submitBtn.style.display = 'inline-flex';
    var resetBtn = quiz.querySelector('.btn-reset-activity');
    if (resetBtn) resetBtn.style.display = 'none';
  }

  // ===== Sort/Order Activities =====
  function initSortActivities() {
    var sorts = document.querySelectorAll('.activity-sort');
    for (var s = 0; s < sorts.length; s++) {
      (function (sortEl) {
        var activityId = sortEl.getAttribute('data-activity-id');
        var container = sortEl.querySelector('.sort-items');
        if (!container) return;

        var items = container.querySelectorAll('.sort-item');
        // Shuffle items on load
        shuffleChildren(container);

        // Add move buttons
        for (var i = 0; i < items.length; i++) {
          (function (item) {
            var controls = document.createElement('span');
            controls.className = 'sort-controls';
            controls.innerHTML = '<button class="sort-up" title="Move up">&#9650;</button><button class="sort-down" title="Move down">&#9660;</button>';
            item.insertBefore(controls, item.firstChild);

            controls.querySelector('.sort-up').addEventListener('click', function (e) {
              e.stopPropagation();
              if (sortEl.classList.contains('completed')) return;
              var prev = item.previousElementSibling;
              if (prev) container.insertBefore(item, prev);
            });
            controls.querySelector('.sort-down').addEventListener('click', function (e) {
              e.stopPropagation();
              if (sortEl.classList.contains('completed')) return;
              var next = item.nextElementSibling;
              if (next) container.insertBefore(next, item);
            });
          })(items[i]);
        }

        var submitBtn = sortEl.querySelector('.btn-check-answer');
        if (submitBtn) {
          submitBtn.addEventListener('click', function () {
            evaluateSort(sortEl, activityId);
          });
        }

        var resetBtn = sortEl.querySelector('.btn-reset-activity');
        if (resetBtn) {
          resetBtn.addEventListener('click', function () {
            resetSort(sortEl, container);
          });
        }
      })(sorts[s]);
    }
  }

  function evaluateSort(sortEl, activityId) {
    if (sortEl.classList.contains('completed')) return;

    var correctOrder = sortEl.getAttribute('data-correct-order').split(',');
    var items = sortEl.querySelector('.sort-items').querySelectorAll('.sort-item');
    var correct = 0;
    var total = correctOrder.length;

    for (var i = 0; i < items.length; i++) {
      if (items[i].getAttribute('data-sort-id') === correctOrder[i]) {
        correct++;
        items[i].classList.add('sort-correct');
      } else {
        items[i].classList.add('sort-incorrect');
      }
    }

    var score = Math.round((correct / total) * 100);
    var points = parseInt(sortEl.getAttribute('data-points') || '15', 10);
    var earnedPoints = Math.round(points * (correct / total));

    showActivityResult(sortEl, correct, total, earnedPoints);
    completeActivity(activityId, score, earnedPoints);
    sortEl.classList.add('completed');

    var submitBtn = sortEl.querySelector('.btn-check-answer');
    if (submitBtn) submitBtn.style.display = 'none';
    var resetBtn = sortEl.querySelector('.btn-reset-activity');
    if (resetBtn) resetBtn.style.display = 'inline-flex';
  }

  function resetSort(sortEl, container) {
    sortEl.classList.remove('completed');
    var items = container.querySelectorAll('.sort-item');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('sort-correct', 'sort-incorrect');
    }
    shuffleChildren(container);
    hideResult(sortEl);
    var submitBtn = sortEl.querySelector('.btn-check-answer');
    if (submitBtn) submitBtn.style.display = 'inline-flex';
    var resetBtn = sortEl.querySelector('.btn-reset-activity');
    if (resetBtn) resetBtn.style.display = 'none';
  }

  // ===== Match Activities =====
  function initMatchActivities() {
    var matches = document.querySelectorAll('.activity-match');
    for (var m = 0; m < matches.length; m++) {
      (function (matchEl) {
        var activityId = matchEl.getAttribute('data-activity-id');
        var leftItems = matchEl.querySelectorAll('.match-left .match-item');
        var rightContainer = matchEl.querySelector('.match-right');
        var selectedLeft = null;
        var pairsMade = {};
        var pairCount = 0;
        var colors = ['#e3120b', '#17a2b8', '#28a745', '#6f42c1', '#fd7e14', '#20c997', '#e83e8c', '#6610f2'];

        // Shuffle right side
        if (rightContainer) shuffleChildren(rightContainer);
        var rightItems = matchEl.querySelectorAll('.match-right .match-item');

        for (var i = 0; i < leftItems.length; i++) {
          (function (item) {
            item.addEventListener('click', function () {
              if (matchEl.classList.contains('completed') || item.classList.contains('matched')) return;
              for (var k = 0; k < leftItems.length; k++) leftItems[k].classList.remove('active');
              item.classList.add('active');
              selectedLeft = item;
            });
          })(leftItems[i]);
        }

        for (var j = 0; j < rightItems.length; j++) {
          (function (item) {
            item.addEventListener('click', function () {
              if (matchEl.classList.contains('completed') || !selectedLeft || item.classList.contains('matched')) return;

              var color = colors[pairCount % colors.length];
              selectedLeft.classList.add('matched');
              selectedLeft.classList.remove('active');
              selectedLeft.style.borderLeftColor = color;
              selectedLeft.setAttribute('data-matched-to', item.getAttribute('data-match-id'));

              item.classList.add('matched');
              item.style.borderLeftColor = color;

              pairsMade[selectedLeft.getAttribute('data-match-id')] = item.getAttribute('data-match-id');
              pairCount++;
              selectedLeft = null;

              // Auto-evaluate when all matched
              if (pairCount === leftItems.length) {
                setTimeout(function () {
                  evaluateMatch(matchEl, activityId, pairsMade);
                }, 300);
              }
            });
          })(rightItems[j]);
        }

        var resetBtn = matchEl.querySelector('.btn-reset-activity');
        if (resetBtn) {
          resetBtn.addEventListener('click', function () {
            resetMatch(matchEl);
          });
        }
      })(matches[m]);
    }
  }

  function evaluateMatch(matchEl, activityId, pairsMade) {
    if (matchEl.classList.contains('completed')) return;

    var leftItems = matchEl.querySelectorAll('.match-left .match-item');
    var correct = 0;
    var total = leftItems.length;

    for (var i = 0; i < leftItems.length; i++) {
      var expected = leftItems[i].getAttribute('data-match-target');
      var actual = leftItems[i].getAttribute('data-matched-to');
      if (expected === actual) {
        correct++;
        leftItems[i].classList.add('match-correct');
        var r = matchEl.querySelector('.match-right .match-item[data-match-id="' + actual + '"]');
        if (r) r.classList.add('match-correct');
      } else {
        leftItems[i].classList.add('match-incorrect');
        var r2 = matchEl.querySelector('.match-right .match-item[data-match-id="' + actual + '"]');
        if (r2) r2.classList.add('match-incorrect');
      }
    }

    var score = Math.round((correct / total) * 100);
    var points = parseInt(matchEl.getAttribute('data-points') || '15', 10);
    var earnedPoints = Math.round(points * (correct / total));

    showActivityResult(matchEl, correct, total, earnedPoints);
    completeActivity(activityId, score, earnedPoints);
    matchEl.classList.add('completed');

    var resetBtn = matchEl.querySelector('.btn-reset-activity');
    if (resetBtn) resetBtn.style.display = 'inline-flex';
  }

  function resetMatch(matchEl) {
    matchEl.classList.remove('completed');
    var allItems = matchEl.querySelectorAll('.match-item');
    for (var i = 0; i < allItems.length; i++) {
      allItems[i].classList.remove('matched', 'active', 'match-correct', 'match-incorrect');
      allItems[i].style.borderLeftColor = '';
      allItems[i].removeAttribute('data-matched-to');
    }
    var rightContainer = matchEl.querySelector('.match-right');
    if (rightContainer) shuffleChildren(rightContainer);
    hideResult(matchEl);
    var resetBtn = matchEl.querySelector('.btn-reset-activity');
    if (resetBtn) resetBtn.style.display = 'none';

    // Re-initialize click handlers by re-calling initMatchActivities
    // Instead, just reload the page behavior by resetting state variables
    // The closure variables need resetting, so we reinitialize
    initMatchActivities();
  }

  // ===== Scenario Activities =====
  function initScenarios() {
    var scenarios = document.querySelectorAll('.activity-scenario');
    for (var s = 0; s < scenarios.length; s++) {
      (function (scenarioEl) {
        var activityId = scenarioEl.getAttribute('data-activity-id');
        var options = scenarioEl.querySelectorAll('.scenario-option');

        for (var i = 0; i < options.length; i++) {
          (function (opt) {
            opt.addEventListener('click', function () {
              if (scenarioEl.classList.contains('completed')) return;
              evaluateScenario(scenarioEl, activityId, opt);
            });
          })(options[i]);
        }

        var resetBtn = scenarioEl.querySelector('.btn-reset-activity');
        if (resetBtn) {
          resetBtn.addEventListener('click', function () {
            resetScenario(scenarioEl);
          });
        }
      })(scenarios[s]);
    }
  }

  function evaluateScenario(scenarioEl, activityId, selectedOption) {
    scenarioEl.classList.add('completed');
    var isCorrect = selectedOption.getAttribute('data-correct') === 'true';
    var points = parseInt(scenarioEl.getAttribute('data-points') || '15', 10);

    var options = scenarioEl.querySelectorAll('.scenario-option');
    for (var i = 0; i < options.length; i++) {
      if (options[i].getAttribute('data-correct') === 'true') {
        options[i].classList.add('scenario-correct');
      } else if (options[i] === selectedOption) {
        options[i].classList.add('scenario-incorrect');
      }
      options[i].style.pointerEvents = 'none';
    }

    // Show feedback
    var feedback = selectedOption.querySelector('.scenario-feedback');
    if (feedback) feedback.style.display = 'block';

    if (!isCorrect) {
      var correctOpt = scenarioEl.querySelector('.scenario-option[data-correct="true"]');
      if (correctOpt) {
        var correctFb = correctOpt.querySelector('.scenario-feedback');
        if (correctFb) correctFb.style.display = 'block';
      }
    }

    var score = isCorrect ? 100 : 0;
    var earnedPoints = isCorrect ? points : 0;

    showActivityResult(scenarioEl, isCorrect ? 1 : 0, 1, earnedPoints);
    completeActivity(activityId, score, earnedPoints);

    var resetBtn = scenarioEl.querySelector('.btn-reset-activity');
    if (resetBtn) resetBtn.style.display = 'inline-flex';
  }

  function resetScenario(scenarioEl) {
    scenarioEl.classList.remove('completed');
    var options = scenarioEl.querySelectorAll('.scenario-option');
    for (var i = 0; i < options.length; i++) {
      options[i].classList.remove('scenario-correct', 'scenario-incorrect');
      options[i].style.pointerEvents = '';
      var fb = options[i].querySelector('.scenario-feedback');
      if (fb) fb.style.display = 'none';
    }
    hideResult(scenarioEl);
    var resetBtn = scenarioEl.querySelector('.btn-reset-activity');
    if (resetBtn) resetBtn.style.display = 'none';
  }

  // ===== Flashcard Activities =====
  function initFlashcards() {
    var flashSets = document.querySelectorAll('.activity-flashcards');
    for (var f = 0; f < flashSets.length; f++) {
      (function (flashEl) {
        var activityId = flashEl.getAttribute('data-activity-id');
        var cards = flashEl.querySelectorAll('.flashcard');
        var currentIndex = 0;
        var masteredCount = 0;
        var total = cards.length;

        if (cards.length > 0) cards[0].classList.add('fc-active');
        updateCounter(flashEl, currentIndex, total);

        // Flip on click
        for (var i = 0; i < cards.length; i++) {
          (function (card) {
            card.addEventListener('click', function (e) {
              if (e.target.closest('.flashcard-nav')) return;
              card.classList.toggle('flipped');
            });
          })(cards[i]);
        }

        var prevBtn = flashEl.querySelector('.fc-prev');
        var nextBtn = flashEl.querySelector('.fc-next');
        var gotItBtn = flashEl.querySelector('.fc-got-it');

        if (prevBtn) {
          prevBtn.addEventListener('click', function () {
            if (currentIndex > 0) {
              cards[currentIndex].classList.remove('fc-active', 'flipped');
              currentIndex--;
              cards[currentIndex].classList.add('fc-active');
              cards[currentIndex].classList.remove('flipped');
              updateCounter(flashEl, currentIndex, total);
            }
          });
        }

        if (nextBtn) {
          nextBtn.addEventListener('click', function () {
            if (currentIndex < total - 1) {
              cards[currentIndex].classList.remove('fc-active', 'flipped');
              currentIndex++;
              cards[currentIndex].classList.add('fc-active');
              cards[currentIndex].classList.remove('flipped');
              updateCounter(flashEl, currentIndex, total);
            }
          });
        }

        if (gotItBtn) {
          gotItBtn.addEventListener('click', function () {
            if (!cards[currentIndex].classList.contains('fc-mastered')) {
              cards[currentIndex].classList.add('fc-mastered');
              masteredCount++;
              var mc = flashEl.querySelector('.fc-mastered-count');
              if (mc) mc.textContent = masteredCount;
            }

            if (currentIndex < total - 1) {
              cards[currentIndex].classList.remove('fc-active', 'flipped');
              currentIndex++;
              cards[currentIndex].classList.add('fc-active');
              cards[currentIndex].classList.remove('flipped');
              updateCounter(flashEl, currentIndex, total);
            }

            if (masteredCount === total && !flashEl.classList.contains('completed')) {
              var points = parseInt(flashEl.getAttribute('data-points') || '10', 10);
              completeActivity(activityId, 100, points);
              flashEl.classList.add('completed');
              showActivityResult(flashEl, total, total, points);
              state.flashcardSetsCompleted++;
              saveState();
            }
          });
        }
      })(flashSets[f]);
    }
  }

  function updateCounter(flashEl, current, total) {
    var counter = flashEl.querySelector('.fc-counter');
    if (counter) counter.textContent = (current + 1) + ' / ' + total;
  }

  // ===== Fill-in-the-Blank Activities =====
  function initFillBlanks() {
    var fills = document.querySelectorAll('.activity-fill');
    for (var f = 0; f < fills.length; f++) {
      (function (fillEl) {
        var activityId = fillEl.getAttribute('data-activity-id');

        var submitBtn = fillEl.querySelector('.btn-check-answer');
        if (submitBtn) {
          submitBtn.addEventListener('click', function () {
            evaluateFillBlanks(fillEl, activityId);
          });
        }

        var resetBtn = fillEl.querySelector('.btn-reset-activity');
        if (resetBtn) {
          resetBtn.addEventListener('click', function () {
            resetFillBlanks(fillEl);
          });
        }
      })(fills[f]);
    }
  }

  function evaluateFillBlanks(fillEl, activityId) {
    if (fillEl.classList.contains('completed')) return;

    var blanks = fillEl.querySelectorAll('.fill-blank');
    var correct = 0;
    var total = blanks.length;

    for (var i = 0; i < blanks.length; i++) {
      var input = blanks[i].querySelector('input');
      var answers = blanks[i].getAttribute('data-answers').split('|');
      var userAnswer = input.value.trim().toLowerCase();

      var isCorrect = false;
      for (var j = 0; j < answers.length; j++) {
        if (answers[j].trim().toLowerCase() === userAnswer) {
          isCorrect = true;
          break;
        }
      }

      if (isCorrect) {
        correct++;
        blanks[i].classList.add('fill-correct');
      } else {
        blanks[i].classList.add('fill-incorrect');
        var hint = blanks[i].querySelector('.fill-answer');
        if (hint) hint.style.display = 'inline';
      }
      input.disabled = true;
    }

    var score = Math.round((correct / total) * 100);
    var points = parseInt(fillEl.getAttribute('data-points') || '10', 10);
    var earnedPoints = Math.round(points * (correct / total));

    showActivityResult(fillEl, correct, total, earnedPoints);
    completeActivity(activityId, score, earnedPoints);
    fillEl.classList.add('completed');

    var submitBtn = fillEl.querySelector('.btn-check-answer');
    if (submitBtn) submitBtn.style.display = 'none';
    var resetBtn = fillEl.querySelector('.btn-reset-activity');
    if (resetBtn) resetBtn.style.display = 'inline-flex';
  }

  function resetFillBlanks(fillEl) {
    fillEl.classList.remove('completed');
    var blanks = fillEl.querySelectorAll('.fill-blank');
    for (var i = 0; i < blanks.length; i++) {
      blanks[i].classList.remove('fill-correct', 'fill-incorrect');
      var input = blanks[i].querySelector('input');
      if (input) { input.value = ''; input.disabled = false; }
      var hint = blanks[i].querySelector('.fill-answer');
      if (hint) hint.style.display = 'none';
    }
    hideResult(fillEl);
    var submitBtn = fillEl.querySelector('.btn-check-answer');
    if (submitBtn) submitBtn.style.display = 'inline-flex';
    var resetBtn = fillEl.querySelector('.btn-reset-activity');
    if (resetBtn) resetBtn.style.display = 'none';
  }

  // ===== Progress & Gamification =====
  function completeActivity(activityId, score, earnedPoints) {
    var isNew = !state.completedActivities[activityId];

    state.completedActivities[activityId] = {
      score: score,
      completedAt: new Date().toISOString(),
      points: earnedPoints
    };

    if (isNew) {
      state.xp += earnedPoints;

      if (score === 100) {
        state.streak++;
      } else {
        state.streak = 0;
      }

      if (score >= 80) {
        state.quizHighScores++;
      }

      updateLevel();
      checkBadges();
    } else {
      // Re-attempt: only add difference if improved
      var prev = state.activityScores[activityId] || 0;
      if (earnedPoints > prev) {
        state.xp += (earnedPoints - prev);
      }
    }

    state.activityScores[activityId] = Math.max(state.activityScores[activityId] || 0, earnedPoints);
    updateModuleProgress();
    saveState();

    if (isNew && earnedPoints > 0) {
      showXPGain(earnedPoints);
    }

    updateProgressDisplay();
  }

  function updateLevel() {
    for (var i = CONFIG.levels.length - 1; i >= 0; i--) {
      if (state.xp >= CONFIG.levels[i].minXP) {
        if (i > state.level) {
          state.level = i;
          showLevelUp(CONFIG.levels[i].name);
        }
        state.level = i;
        break;
      }
    }
  }

  function checkBadges() {
    var completed = Object.keys(state.completedActivities).length;
    var newBadges = [];
    var totalOnPage = document.querySelectorAll('[data-activity-id]').length;

    function award(id) {
      if (state.badges.indexOf(id) === -1) {
        state.badges.push(id);
        newBadges.push(id);
      }
    }

    if (completed >= 1) award('first-activity');
    if (state.streak >= 3) award('streak-3');
    if (state.streak >= 5) award('streak-5');
    if (state.quizHighScores >= 5) award('quiz-whiz');

    var hasPerfect = false;
    for (var key in state.completedActivities) {
      if (state.completedActivities[key].score === 100) { hasPerfect = true; break; }
    }
    if (hasPerfect) award('perfect-score');

    if (totalOnPage > 0 && completed >= Math.ceil(totalOnPage / 2)) award('halfway');

    for (var b = 0; b < newBadges.length; b++) {
      (function (idx) {
        setTimeout(function () {
          showBadgeEarned(newBadges[idx]);
        }, (idx + 1) * 1500);
      })(b);
    }
  }

  function updateModuleProgress() {
    var moduleNumEl = document.querySelector('.module-number');
    if (!moduleNumEl) return;
    var match = moduleNumEl.textContent.match(/\d+/);
    if (!match) return;
    var moduleNum = match[0];

    var acts = document.querySelectorAll('[data-activity-id^="m' + moduleNum + '-"]');
    var done = 0;
    for (var i = 0; i < acts.length; i++) {
      if (state.completedActivities[acts[i].getAttribute('data-activity-id')]) done++;
    }
    state.moduleProgress['module-' + moduleNum] = {
      total: acts.length,
      completed: done,
      percent: acts.length > 0 ? Math.round((done / acts.length) * 100) : 0
    };
  }

  // ===== UI =====
  function initProgressDisplay() {
    var moduleHeader = document.querySelector('.module-header-container');
    if (!moduleHeader) return;

    var el = document.createElement('div');
    el.className = 'module-progress-bar';
    el.innerHTML = '<div class="progress-info"><span class="progress-label">Module Progress</span><span class="progress-percent">0%</span></div>' +
      '<div class="progress-track"><div class="progress-fill" style="width:0%"></div></div>';
    moduleHeader.appendChild(el);

    // XP in nav
    var nav = document.querySelector('.nav-container');
    if (nav) {
      var xpEl = document.createElement('div');
      xpEl.className = 'nav-xp';
      xpEl.innerHTML = '<span class="xp-level">' + CONFIG.levels[state.level].name + '</span><span class="xp-count">' + state.xp + ' XP</span>';
      nav.appendChild(xpEl);
    }

    updateProgressDisplay();
  }

  function updateProgressDisplay() {
    var moduleNumEl = document.querySelector('.module-number');
    if (!moduleNumEl) return;
    var match = moduleNumEl.textContent.match(/\d+/);
    if (!match) return;
    var moduleNum = match[0];

    var acts = document.querySelectorAll('[data-activity-id^="m' + moduleNum + '-"]');
    var done = 0;
    for (var i = 0; i < acts.length; i++) {
      if (state.completedActivities[acts[i].getAttribute('data-activity-id')]) done++;
    }
    var percent = acts.length > 0 ? Math.round((done / acts.length) * 100) : 0;

    var fill = document.querySelector('.progress-fill');
    var pct = document.querySelector('.progress-percent');
    if (fill) fill.style.width = percent + '%';
    if (pct) pct.textContent = percent + '%';

    var xpCount = document.querySelector('.xp-count');
    var xpLevel = document.querySelector('.xp-level');
    if (xpCount) xpCount.textContent = state.xp + ' XP';
    if (xpLevel) xpLevel.textContent = CONFIG.levels[state.level].name;
  }

  function initHomepageProgress() {
    var moduleCards = document.querySelectorAll('.module-card');
    for (var i = 0; i < moduleCards.length; i++) {
      var href = moduleCards[i].getAttribute('href') || '';
      var match = href.match(/module-(\d+)/);
      if (!match) continue;
      var moduleNum = match[1];
      var progress = state.moduleProgress['module-' + moduleNum];
      if (progress && progress.percent > 0) {
        var div = document.createElement('div');
        div.className = 'card-progress';
        div.innerHTML = '<div class="card-progress-track"><div class="card-progress-fill" style="width:' + progress.percent + '%"></div></div>' +
          '<span class="card-progress-text">' + progress.percent + '% complete</span>';
        moduleCards[i].appendChild(div);
      }
    }

    // Course stats on homepage
    var hero = document.querySelector('.hero-container');
    if (hero && state.xp > 0) {
      var stats = document.createElement('div');
      stats.className = 'course-stats';
      stats.innerHTML = '<div class="stat-item"><span class="stat-value">' + state.xp + '</span><span class="stat-label">XP Earned</span></div>' +
        '<div class="stat-item"><span class="stat-value">' + CONFIG.levels[state.level].name + '</span><span class="stat-label">Current Level</span></div>' +
        '<div class="stat-item"><span class="stat-value">' + Object.keys(state.completedActivities).length + '</span><span class="stat-label">Activities</span></div>' +
        '<div class="stat-item"><span class="stat-value">' + state.badges.length + '</span><span class="stat-label">Badges</span></div>';
      hero.appendChild(stats);
    }
  }

  function restoreCompletedActivities() {
    var activities = document.querySelectorAll('[data-activity-id]');
    for (var i = 0; i < activities.length; i++) {
      var id = activities[i].getAttribute('data-activity-id');
      if (state.completedActivities[id]) {
        activities[i].classList.add('previously-completed');
        var header = activities[i].querySelector('.activity-header');
        if (header) {
          var badge = document.createElement('span');
          badge.className = 'activity-completed-badge';
          badge.innerHTML = '&#10003; Completed &middot; ' + state.completedActivities[id].score + '%';
          header.appendChild(badge);
        }
      }
    }
  }

  // ===== Notifications =====
  function showActivityResult(activityEl, correct, total, points) {
    var footer = activityEl.querySelector('.activity-footer');
    if (!footer) return;
    var resultEl = footer.querySelector('.activity-result');
    if (!resultEl) {
      resultEl = document.createElement('div');
      resultEl.className = 'activity-result';
      footer.appendChild(resultEl);
    }

    var pct = Math.round((correct / total) * 100);
    var msg, cls;
    if (pct === 100) {
      msg = 'Perfect! ' + correct + '/' + total + ' correct';
      cls = 'result-perfect';
    } else if (pct >= 70) {
      msg = 'Good work! ' + correct + '/' + total + ' correct';
      cls = 'result-good';
    } else {
      msg = correct + '/' + total + ' correct. Review and try again!';
      cls = 'result-needs-work';
    }
    if (points > 0) msg += ' (+' + points + ' XP)';

    resultEl.textContent = msg;
    resultEl.className = 'activity-result ' + cls;
    resultEl.style.display = 'block';
  }

  function hideResult(el) {
    var r = el.querySelector('.activity-result');
    if (r) r.style.display = 'none';
  }

  function showXPGain(points) {
    var toast = document.createElement('div');
    toast.className = 'xp-toast';
    toast.textContent = '+' + points + ' XP';
    document.body.appendChild(toast);
    requestAnimationFrame(function () {
      toast.classList.add('xp-toast-show');
      setTimeout(function () {
        toast.classList.add('xp-toast-fade');
        setTimeout(function () { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 500);
      }, 1500);
    });
  }

  function showLevelUp(levelName) {
    var overlay = document.createElement('div');
    overlay.className = 'level-up-overlay';
    overlay.innerHTML = '<div class="level-up-content">' +
      '<div class="level-up-icon">&#9733;</div>' +
      '<h3>Level Up!</h3>' +
      '<p>You are now a</p>' +
      '<h2>' + levelName + '</h2>' +
      '<button class="btn btn-primary level-up-close">Continue</button>' +
      '</div>';
    document.body.appendChild(overlay);
    requestAnimationFrame(function () { overlay.classList.add('level-up-show'); });
    overlay.querySelector('.level-up-close').addEventListener('click', function () {
      overlay.classList.remove('level-up-show');
      setTimeout(function () { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 300);
    });
  }

  function showBadgeEarned(badgeId) {
    var badge = CONFIG.badges[badgeId];
    if (!badge) return;
    var toast = document.createElement('div');
    toast.className = 'badge-toast';
    toast.innerHTML = '<div class="badge-toast-icon">' + badge.icon + '</div>' +
      '<div class="badge-toast-info"><strong>Badge Earned!</strong><span>' + badge.name + '</span></div>';
    document.body.appendChild(toast);
    requestAnimationFrame(function () {
      toast.classList.add('badge-toast-show');
      setTimeout(function () {
        toast.classList.add('badge-toast-fade');
        setTimeout(function () { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 500);
      }, 3000);
    });
  }

  // ===== Utility =====
  function shuffleChildren(container) {
    var items = [];
    var children = container.children;
    for (var i = 0; i < children.length; i++) items.push(children[i]);
    for (var j = items.length - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1));
      container.appendChild(items[k]);
      var temp = items[k];
      items[k] = items[j];
      items[j] = temp;
    }
  }

})();
