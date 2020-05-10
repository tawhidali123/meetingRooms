// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

// Example 1:

// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2

// Example 2:

// Input: [[7,10],[2,4]]
// Output: 1

// gameplan
// create a counter for occupied room 
// compare times of first meeting to second meeting
//   - if 1st end time > 2nd start time, make new room
//   - if not, the room is not occupied

function meetingRoom(arr){
  if(arr.length === 0) return 0

  let occupiedRoom = 0
  let endTime = 0 

  arr.sort((a,b) => a[0] - b[0])

  for(let i=0; i < arr.length; i++){
    let iST = arr[i][0]
    let iET = arr[i][1]

    if(occupiedRoom === 0){
      occupiedRoom++
      endTime = iET
    } else if(endTime > arr[i][0]){
      occupiedRoom ++
      endTime = arr[i][1]
    }
    
  }

  return occupiedRoom
}

meetingRoom([[0, 30],[5, 10],[15, 20]])
// meetingRoom([[7,10],[2,4]])