
var StockSpanner = function() {
    
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    if (!this.lists) {
        this.lists = []
    }
    
    const lastPrice = this.lists[this.lists.length - 1]
    let result = 1
    
    if (price >= lastPrice) {
        for (let i = this.lists.length - 1; i >= 0; i--) {
            if (this.lists[i] <= price) {
                result++
            } else {
                break
            }
        }
    }
    
    this.lists.push(price)
    return result
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */