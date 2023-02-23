// URL: https://leetcode.com/problems/ipo/

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) 
{
    let projects = [];
    
    for(let i=0; i<profits.length; i++)
        projects.push([profits[i],capital[i]]);
    projects.sort((a,b)=>a[1]-b[1]);

    let pq = new MaxPriorityQueue(), pp = 0;
    while(k > 0)
    {
        while(pp < projects.length && projects[pp][1] <= w)
        {
            pq.enqueue(pp,projects[pp][0]);
            pp++;
        }

        if(pq.size() === 0)
            break;

        let el = pq.dequeue();
        w += el.priority;
        k--;
    }

    return w;
};