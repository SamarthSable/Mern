// Find all Subsets of the given array

let input = [1,2,3];

function subset(numbers){
    const result=[];
    const curreentSolution =[];

    function backtrack(start){
        result.push([...curreentSolution]);

        for(let index= start ; index<numbers.length;index++){
            curreentSolution.push(numbers[index]); // Made Choice        
            backtrack(index+1);
            curreentSolution.pop();
        }
    }

    backtrack(0);
    return result;
}

console.log(subset(input));