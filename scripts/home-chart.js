document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('citationChart');
  if (!ctx) return;

  const years = Array.from({ length: 15 }, (_, i) => 2011 + i);
  const citations = [54, 61, 83, 127, 189, 256, 341, 418, 562, 703, 812, 934, 1012, 1184, 1326];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Citations',
          data: citations,
          backgroundColor: 'rgba(26, 115, 232, 0.75)',
          borderRadius: 6,
          hoverBackgroundColor: 'rgba(26, 115, 232, 0.9)'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.parsed.y.toLocaleString()} citations`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            callback(value) {
              return value.toLocaleString();
            }
          }
        }
      }
    }
  });
});
