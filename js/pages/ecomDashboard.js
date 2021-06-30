/*
 *  Document   : ecomDashboard.js
 *  Author     : pixelcave
 *  Description: Custom javascript code used in eCommerce Dashboard page
 */

var EcomDashboard = function() {

    return {
        init: function() {
            /*
             * Flot Jquery plugin is used for charts
             *
             * For more examples or getting extra plugins you can check http://www.flotcharts.org/
             * Plugins included in this template: pie, resize, stack, time
             */

            // Get the elements where we will attach the charts
            var chartOverview = $('#chart-overview');
            var incomeReport = $('#chart-overview1');

            // Random data for the charts
            var healthyFoodMarket = [
                [1, 10600],
                [2, 12950],
                [3, 9900],
                [4, 9050],
                [5, 10000],
                [6, 13300],
                [7, 11500],
                [8, 14050],
                [9, 11650],
                [10, 13000],
                [11, 14000],
                [12, 16900]
            ];
            var trainers = [
                [1, 4000],
                [2, 4500],
                [3, 3900],
                [4, 4800],
                [5, 3800],
                [6, 3408],
                [7, 3682],
                [8, 5400],
                [9, 6400],
                [10, 5750],
                [11, 7100],
                [12, 8560]
            ];
            var nutritionist = [
                [1, 1000],
                [2, 2500],
                [3, 1900],
                [4, 2800],
                [5, 1800],
                [6, 1408],
                [7, 1682],
                [8, 3400],
                [9, 4400],
                [10, 3750],
                [11, 5100],
                [12, 6560]
            ];
            var fitnessMarket = [
                [1, 12600],
                [2, 14950],
                [3, 11900],
                [4, 11050],
                [5, 12000],
                [6, 15300],
                [7, 13500],
                [8, 16050],
                [9, 13650],
                [10, 15000],
                [11, 16000],
                [12, 18900]
            ];

            // Array with month labels used in Classic and Stacked chart
            var chartMonths = [
                [1, 'Jan'],
                [2, 'Feb'],
                [3, 'Mar'],
                [4, 'Apr'],
                [5, 'May'],
                [6, 'Jun'],
                [7, 'Jul'],
                [8, 'Aug'],
                [9, 'Sep'],
                [10, 'Oct'],
                [11, 'Nov'],
                [12, 'Dec']
            ];

            // Overview Chart
            $.plot(chartOverview, [{
                    label: 'Fitness Market ',
                    data: fitnessMarket,
                    lines: { show: true, fill: true, fillColor: { colors: [{ opacity: 0.15 }, { opacity: 0.15 }] } },
                    points: { show: true, radius: 6 }
                },
                {
                    label: 'Healthy Food Market',
                    data: healthyFoodMarket,
                    lines: { show: true, fill: true, fillColor: { colors: [{ opacity: 0.15 }, { opacity: 0.15 }] } },
                    points: { show: true, radius: 6 }
                },
                {
                    label: 'Trainers ',
                    data: trainers,
                    lines: { show: true, fill: true, fillColor: { colors: [{ opacity: 0.15 }, { opacity: 0.15 }] } },
                    points: { show: true, radius: 6 }
                },
                {
                    label: 'Nutritionist ',
                    data: nutritionist,
                    lines: { show: true, fill: true, fillColor: { colors: [{ opacity: 0.15 }, { opacity: 0.15 }] } },
                    points: { show: true, radius: 6 }
                }
            ], {
                colors: ['#f39800', '#8fc322', '#043e50', '#231916'],
                legend: { show: true, position: 'nw', margin: [15, 10] },
                grid: { borderWidth: 0, hoverable: true, clickable: true },
                yaxis: { ticks: 3, tickColor: '#f1f1f1' },
                xaxis: { ticks: chartMonths, tickColor: '#ffffff' }
            });

            $.plot(incomeReport, [{
                    label: 'Fitness Market ',
                    data: fitnessMarket,
                    lines: { show: true, fill: true, fillColor: { colors: [{ opacity: 0.15 }, { opacity: 0.15 }] } },
                    points: { show: true, radius: 6 }
                },
                {
                    label: 'Healthy Food Market',
                    data: healthyFoodMarket,
                    lines: { show: true, fill: true, fillColor: { colors: [{ opacity: 0.15 }, { opacity: 0.15 }] } },
                    points: { show: true, radius: 6 }
                },
                {
                    label: 'Trainers ',
                    data: trainers,
                    lines: { show: true, fill: true, fillColor: { colors: [{ opacity: 0.15 }, { opacity: 0.15 }] } },
                    points: { show: true, radius: 6 }
                },
                {
                    label: 'Nutritionist ',
                    data: nutritionist,
                    lines: { show: true, fill: true, fillColor: { colors: [{ opacity: 0.15 }, { opacity: 0.15 }] } },
                    points: { show: true, radius: 6 }
                }
            ], {
                colors: ['#f39800', '#8fc322', '#043e50', '#231916'],
                legend: { show: true, position: 'nw', margin: [15, 10] },
                grid: { borderWidth: 0, hoverable: true, clickable: true },
                yaxis: { ticks: 3, tickColor: '#f1f1f1' },
                xaxis: { ticks: chartMonths, tickColor: '#ffffff' }
            });

            // Creating and attaching a tooltip to the classic chart
            var previousPoint = null,
                ttlabel = null;
            chartOverview.bind('plothover', function(event, pos, item) {

                if (item) {
                    if (previousPoint !== item.dataIndex) {
                        previousPoint = item.dataIndex;

                        $('#chart-tooltip').remove();
                        var x = item.datapoint[0],
                            y = item.datapoint[1];

                        if (item.seriesIndex === 1) {
                            ttlabel = '<strong>' + y + '</strong> Orders';
                        } else {
                            ttlabel = '$ <strong>' + y + '</strong>';
                        }

                        $('<div id="chart-tooltip" class="chart-tooltip">' + ttlabel + '</div>')
                            .css({ top: item.pageY - 45, left: item.pageX + 5 }).appendTo("body").show();
                    }
                } else {
                    $('#chart-tooltip').remove();
                    previousPoint = null;
                }
            });

            incomeReport.bind('plothover', function(event, pos, item) {

                if (item) {
                    if (previousPoint !== item.dataIndex) {
                        previousPoint = item.dataIndex;

                        $('#chart-tooltip').remove();
                        var x = item.datapoint[0],
                            y = item.datapoint[1];

                        if (item.seriesIndex === 1) {
                            ttlabel = '<strong>' + y + '</strong> Orders';
                        } else {
                            ttlabel = '$ <strong>' + y + '</strong>';
                        }

                        $('<div id="chart-tooltip" class="chart-tooltip">' + ttlabel + '</div>')
                            .css({ top: item.pageY - 45, left: item.pageX + 5 }).appendTo("body").show();
                    }
                } else {
                    $('#chart-tooltip').remove();
                    previousPoint = null;
                }
            });
        }
    };
}();