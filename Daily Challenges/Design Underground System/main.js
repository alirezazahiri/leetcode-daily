// URL: https://leetcode.com/problems/design-underground-system/

var UndergroundSystem = function () {
    this.customers = {};
    this.times = {}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    this.customers[id] = { stationName, t };
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    const prev = this.customers[id];
    const {stationName: prevStationName, t: prevT} = prev;
    
    this.customers[id] = {stationName, t: t-this.customers[id].t};

    const names = [prevStationName, stationName];
    const key = names.join("-");
    
    if (!this.times[key])
        this.times[key] = [Math.abs(prevT-t)];
    else 
        this.times[key].push(Math.abs(prevT-t));
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
    const names = [startStation, endStation];
    const key = names.join("-");
    return (this.times[key].reduce((prev, curr) => prev+curr, 0)/this.times[key].length).toFixed(5);
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */