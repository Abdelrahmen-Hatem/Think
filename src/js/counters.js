// Counter animation functionality
export function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  if (counters.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-count'));
        let count = 0;
        
        // Reset counter
        counter.innerText = '0';
        
        const increment = target / 100;
        
        const updateCount = () => {
          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        
        updateCount();
        observer.unobserve(counter);
      }
    });
  }, {
    threshold: 0.5
  });
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
}