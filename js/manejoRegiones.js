 $(document).ready(function() {
            $('.scroll_content').slimscroll({
            height: '200px'
            })
            $(".dial").knob();
            var mapData = {
            "CO-RAN": 1135,
            "CO-RCA": 200,
            "CO-BOG":200
            /**"SA": 200,
            "CA": 1300,
            "DE": 220,
            "FR": 540,
            "CN": 120,
            "AU": 760,
            "BR": 550,
            "IN": 200,
            "GB": 120,
            "RU": 2000**/
            };
            var markers = [
            {latLng: [4.7501293,-74.0617922], name: 'Una Casa'},
            {latLng: [12.5507521,-81.7303871], name:"San Andrés"}
            ]
            $(function() {
            new jvm.MultiMap({
            container: $('#world-map'),
            maxLevel: 2,
            main: {
            map: 'co-compl_merc',
            backgroundColor: "transparent",
            regionStyle: {
            initial: {
            fill: '#7D7D7D',
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 0
            }
            },
            markers:markers,
            markerStyle: {
            initial: {
            fill: '#F8E23B',
            stroke: '#383f47'
            }
            },
            series: {
            regions: [{
            values: mapData,
            scale: ["#1ab394", "#22d6b1"],
            normalizeFunction: 'polynomial'
            }]
            }
            },
            mapUrlByCode: function(code, multiMap){
            // var id = code.toLowerCase()+'_merc';
            // console.log("Code: "+id);
            // return id;
            var path = 'js/plugins/jvectormap/col-compl.js';
            console.log(path);
            return path;
            }
            });
            });
            // $('#world-map').vectorMap({
            //     map: 'co-compl_merc',
            //     backgroundColor: "transparent",
            //     regionStyle: {
            //         initial: {
            //             fill: '#7D7D7D',
            //             "fill-opacity": 1,
            //             stroke: 'none',
            //             "stroke-width": 0,
            //             "stroke-opacity": 0
            //         }
            //     },
            //     series: {
            //         regions: [{
            //             values: mapData,
            //             scale: ["#1ab394", "#22d6b1"],
            //             normalizeFunction: 'polynomial'
            //         }]
            //     }
            // });
            });
           