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
            var chartOverview = $('#chart-monthlyTarget');
            
            var dataset = [ 
                {data: [[1, 0]], color: "transparent", label:""}, 
                {data: [[2, 0]], color: "transparent", label:""}, 
                {data: [[3, 0]], color: "transparent", label:""}, 
                {data: [[4, 0]], color: "transparent", label:""},
                {data: [[5, 0]], color: "transparent", label:""}, 
                {data: [[6, 0]], color: "transparent", }, 
                {data: [[7, 10]], color: "#8fc322", label:"المبلغ المحقق"}, 
                {data: [[7, 0]], color: "#043e50", label:"الهدف الشهري"}, 
                {data: [[8, 0]], color: "transparent", label:""},
                {data: [[9, 0]], color: "transparent", label:""}, 
                {data: [[10, 0]], color: "transparent", label:""}, 
                {data: [[11, 0]], color: "transparent", label:""}, 
                {data: [[12, 0]], color: "transparent", label:""}
            ];
            
            var ticks = [
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
            $.plot(chartOverview,dataset, {
                series: {
                    bars: {
                        show: true
                    }
                },
                bars: {
                    align: "center",
                    barWidth: 1
                },
                legend: { show: true, position: 'nw'},
                grid: { borderWidth: 0, hoverable: true, clickable: true },
                yaxis: { ticks: 10, tickColor: '#f1f1f1' },
                xaxis: {ticks: ticks}
            });


            // pie chart
            var chartOverview2 = $('#flot-placeholder');
            var dataSetPie = [
                {label: "نسبة التحقق", data: 344120000, color: "#ccc" },
                { label: "نسبة الهدف المحقق المتبقية", data: 2090950000, color: "#043e50" }   
            ];

            var optionsPie = {
                series: {
                    pie: {
                        show: true,
                    }
                }
            };
 
            $.plot(chartOverview2, dataSetPie, optionsPie);
        }
    };
}();