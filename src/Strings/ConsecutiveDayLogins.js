function ConsecutiveDayLogins(aLines) {
    this.oCustomerLoginDates = {};
    this.aConsecDayCustomers = [];
}

ConsecutiveDayLogins.prototype.get3ConsecDayLogins = function(aLines) {
    for (let i = 0; i < aLines.length; i++) {
        let aData = aLines[i].split('\t');
        let strId = aData[1];
        let oDate = new Date(aData[0]);

        if (this.oCustomerLoginDates[strId] && this.oCustomerLoginDates[strId].length > 0) {
            if (this.oCustomerLoginDates[strId].length === 3) {
                // If they already have 3 then who cares, we're done with them
                continue;
            }

            // Is last date contiguous?
            let aDates = this.oCustomerLoginDates[strId];
            if (oDate - aDates[aDates.length - 1] === 86400000) {
                // Consecutive! Check if length will be 3, if so, save off
                aDates.push(oDate);
                this.oCustomerLoginDates[strId] = aDates;

                if (aDates.length === 3) {
                    this.aConsecDayCustomers.push(strId);
                }
            } else {
                // Not conescutive!
                this.oCustomerLoginDates[strId] = [];
            }
        } else {
            this.oCustomerLoginDates[strId] = [oDate];
        }
    }
};

module.exports = ConsecutiveDayLogins;