var ctx = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Open to networking', 'Not open to networking'],
        datasets: [{
            label: '# of Votes',
            data: [72.2, 27.8],
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
        labels: ['Real-time collaboration useful', 'Real-time collaboration not useful'],
        datasets: [{
            label: '# of Votes',
            data: [77.8, 22.2],
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
        labels: ['Uses cloud storage', 'Does not use cloud storage'],
        datasets: [{
            label: '# of Votes',
            data: [81.8, 18.2],
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
        labels: ['Necessary for work', 'Unnecessary for work'],
        datasets: [{
            label: '# of Votes',
            data: [68.2, 31.8],
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
