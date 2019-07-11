var ctx = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Open', 'Not open'],
        datasets: [{
            label: '# of Votes',
            data: [65, 35],
            backgroundColor: [
                'rgba(135, 131, 209, 0.8)',
                'rgba(178, 226, 242, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false,
      }
    }
});

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Useful', 'Not useful'],
        datasets: [{
            label: '# of Votes',
            data: [87, 13],
            backgroundColor: [
                'rgba(135, 131, 209, 0.8)',
                'rgba(178, 226, 242, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false,
      }
    }
});

var ctx = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Use', 'Do not use'],
        datasets: [{
            label: '# of Votes',
            data: [70, 30],
            backgroundColor: [
                'rgba(135, 131, 209, 0.8)',
                'rgba(178, 226, 242, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false,
      }
    }
});

var ctx = document.getElementById('myChart4').getContext('2d');
var myChart4 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Necessary', 'Unnecessary'],
        datasets: [{
            label: '# of Votes',
            data: [63.6, 36.4],
            backgroundColor: [
                'rgba(135, 131, 209, 0.8)',
                'rgba(178, 226, 242, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false,
      }
    }
});
