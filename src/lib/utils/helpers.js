export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

export function formatDate(date) {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function generateId() {
  return `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function clickOutside(node, callback) {
  const handleClick = (event) => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      callback(event);
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  };
}
