var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "705",
        "ok": "705",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3512",
        "ok": "3512",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2137",
        "ok": "2137",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "977",
        "ok": "977",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2237",
        "ok": "2237",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2878",
        "ok": "2878",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3483",
        "ok": "3483",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3506",
        "ok": "3506",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 20
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
        "ko": "-"
    }
},
contents: {
"req_update-user-a0386": {
        type: "REQUEST",
        name: "update user",
path: "update user",
pathFormatted: "req_update-user-a0386",
stats: {
    "name": "update user",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1486",
        "ok": "1486",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3447",
        "ok": "3447",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2479",
        "ok": "2479",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "696",
        "ok": "696",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2487",
        "ok": "2487",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2988",
        "ok": "2988",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3355",
        "ok": "3355",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3429",
        "ok": "3429",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.833",
        "ko": "-"
    }
}
    },"req_create-user-req-048f5": {
        type: "REQUEST",
        name: "create user req",
path: "create user req",
pathFormatted: "req_create-user-req-048f5",
stats: {
    "name": "create user req",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "705",
        "ok": "705",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3512",
        "ok": "3512",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1795",
        "ok": "1795",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1091",
        "ok": "1091",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1483",
        "ok": "1483",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2549",
        "ok": "2549",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3319",
        "ok": "3319",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3473",
        "ok": "3473",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.833",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
