function calculateInvestment(data) {
    var initialAmount = data.initialAmount, annualContribution = data.annualContribution, expectedReturn = data.expectedReturn, duration = data.duration;
    if (initialAmount < 0) {
        return "Initial investment amount must be at least zero";
    }
    if (duration < 0) {
        return "No valid amount of years provided";
    }
    if (expectedReturn < 0) {
        return "Expected result must be at least zero";
    }
    var total = initialAmount;
    var totalContributions = 0;
    var totalInterestEarned = 0;
    var annualResults = [];
    for (var i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: "Year ".concat(i + 1),
            totalAmount: total,
            totalContributions: totalContributions,
            totalInterestEarned: totalInterestEarned,
        });
    }
    return annualResults;
}
function printResult(results) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var yearEndResult = results_1[_i];
        console.group(yearEndResult.year);
        console.log("Total: ".concat(yearEndResult.totalAmount.toFixed(0)));
        console.log("Total Contributions: ".concat(yearEndResult.totalContributions.toFixed(0)));
        console.log("Total Interest Earned: ".concat(yearEndResult.totalInterestEarned.toFixed(0)));
        console.groupEnd();
    }
}
var investmentData = {
    initialAmount: 1000,
    annualContribution: 500,
    expectedReturn: 0.1,
    duration: 10,
};
var results = calculateInvestment(investmentData);
printResult(results);
