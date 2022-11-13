// In democracy we have a lot of elections. For example, we have to vote for a class representative in school, for a new parliament or a new government.

// Usually, we vote for a candidate, i.e. a set of eligible candidates is given. This is done by casting a ballot into a ballot-box. After that, it must be counted how many ballots (= votes) a candidate got.

// A candidate will win this election if he has the absolute majority.

// Your Task
// Return the name of the winner. If there is no winner, return null (in Java and JavaScript), None (in Python), nil (in Ruby), or * in C.
// Task Description
// There are no given candidates. An elector can vote for anyone. Each ballot contains only one name and represents one vote for this name. A name is an arbitrary string, e.g. "A", "B", or "XJDHD".

// There are no spoiled ballots.

// The ballot-box is represented by an unsorted list of names. Each entry in the list corresponds to one vote for this name. You do not know the names in advance (because there are no candidates).

// A name wins the election if it gets more than n/2 votes (n = number of all votes, i.e. n is equal to the size of the given list).
// Examples
// 3 votes for "A", 2 votes for "B" -> "A" wins the election
// getWinner(["A", "A", "A", "B", "B"]) === "A" //true
// 2 votes for "A", 2 votes for "B" -> No winner
// getWinner(["A", "A", "B", "B"]) === null //true
// 1 vote for each name -> No winner
// getWinner(["A", "B", "C", "D"]) === null //true
// 3 votes for "A", 2 votes for "B", 1 vote for "C"  
// -> No winner ("A" does not have more than n/2 = 3 votes)
// getWinner(["A", "A", "A", "B", "B", "C"]) === null //true


//Array => with string => they can any value == the array can any length
// Will count the candidate on the array => and will check if the highest count candidate is a absulute majority === (n > v/2)

function getWinner(listOfBallots) {
    //Your code here
    let candidate = {}
    for(let i= 0; i < listOfBallots.length; i++){
        if(candidate.hasOwnProperty(listOfBallots[i])) candidate[listOfBallots[i]]++;
        else candidate[listOfBallots[i]] = 1;
    }
    let candidateArray = Object.entries(candidate).sort((a,b)=> b[1] - a[1])

    if(candidateArray[0][1] > listOfBallots.length/2) return candidateArray[0][0]
    else return null
  }

console.log(getWinner(["A", "A", "A", "B", "B"]), "A")
console.log(getWinner(["A", "A", "B", "B"]), null)
console.log(getWinner(["A", "A", "B", "B", "C"]), null)