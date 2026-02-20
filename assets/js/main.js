/**
 * Strategic Business Research Methods - Interactive Features
 * Vanilla JavaScript, no dependencies
 */

document.addEventListener('DOMContentLoaded', function () {
  generateTableOfContents();
  setupSmoothScrolling();
  trackActiveSection();
  setupKeyboardNavigation();
});

/**
 * Auto-generates Table of Contents from h2 and h3 headings
 */
function generateTableOfContents() {
  var toc = document.getElementById('toc');
  var content = document.querySelector('.module-content');
  if (!toc || !content) return;

  var headings = content.querySelectorAll('h2, h3');
  if (headings.length === 0) return;

  var list = document.createElement('ul');
  list.className = 'toc-list';

  headings.forEach(function (heading, index) {
    if (!heading.id) {
      heading.id = 'section-' + index;
    }

    var li = document.createElement('li');
    li.className = heading.tagName === 'H3' ? 'toc-item toc-item-sub' : 'toc-item';

    var a = document.createElement('a');
    a.href = '#' + heading.id;
    a.textContent = heading.textContent;
    a.className = 'toc-link';

    li.appendChild(a);
    list.appendChild(li);
  });

  toc.appendChild(list);
}

/**
 * Smooth scrolling for all anchor links
 */
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').substring(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        var offset = 100;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Tracks active section in viewport and highlights TOC link
 */
function trackActiveSection() {
  var content = document.querySelector('.module-content');
  if (!content) return;

  var headings = content.querySelectorAll('h2, h3');
  if (headings.length === 0) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          document.querySelectorAll('.toc-link').forEach(function (link) {
            link.classList.remove('active');
          });
          var activeLink = document.querySelector('.toc-link[href="#' + entry.target.id + '"]');
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    },
    {
      rootMargin: '-100px 0px -66%',
      threshold: 0
    }
  );

  headings.forEach(function (heading) {
    observer.observe(heading);
  });
}

/**
 * Keyboard navigation for modules
 */
function setupKeyboardNavigation() {
  document.addEventListener('keydown', function (e) {
    if (e.altKey && e.key === 'ArrowLeft') {
      var prevLink = document.querySelector('.nav-prev');
      if (prevLink) prevLink.click();
    }
    if (e.altKey && e.key === 'ArrowRight') {
      var nextLink = document.querySelector('.nav-next');
      if (nextLink) nextLink.click();
    }
  });
}
