//  Contador primeiro dia

document.addEventListener('DOMContentLoaded', () => {
  const startDate = new Date('Jun 06, 2026 23:17:00').getTime();
  const countupElement = document.getElementById('countup');

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = now - startDate;

    if (distance < 0) {
      countupElement.innerHTML = 'Data futura inválida';
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countupElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
});
