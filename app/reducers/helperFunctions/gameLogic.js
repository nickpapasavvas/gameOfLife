
// Create randomly an initial array of alive or dead cells. The live ones are light red (young)
//Don't forget to test the reducers
//make if functional, use haskell notation

//console.log(newArray);
//var newArray = [...Array(36)].map( ()=>{
//  return Math.random() > 0.5 ? 1 : 0 ; 
//} );


//countcountTheNeighborsOfEachCell::Array ,Number   ,Function->Array
function countTheNeighborsOfEachCell(oldState,numOfCols){
      //cellValueMapper::Number->Number
      var cVM = function cellValueMapper (el){
                if   (typeof(el) != "number") {return 0}
                if    (el==0){return 0}
                if    (el==1){return 1}
                else         {return 1}
                } 
  
  
      var numberOfNeighborsArray = oldState.map( function numberOfNeighborsArrayCreator (elem,index){    
      //first row element
      if (index%numOfCols == 0){
        return      (
                                   cVM(oldState[index-numOfCols]) + cVM(oldState[index+1-numOfCols]) + 
                                                                              cVM(oldState[index+1]) +
                                   cVM(oldState[index+numOfCols]) + cVM(oldState[index+1+numOfCols])
                     )
      } 
      //last row elements
      if ((index+1)%numOfCols == 0){
           return   (
   cVM(oldState[index-1-numOfCols]) + cVM(oldState[index-numOfCols]) + 
   cVM(oldState[index-1])           + 
   cVM(oldState[index-1+numOfCols]) + cVM(oldState[index+numOfCols])                   )
      }
      //elements of the middle rows
      else return (
   cVM(oldState[index-1-numOfCols]) + cVM(oldState[index-numOfCols]) + cVM(oldState[index+1-numOfCols]) +
   cVM(oldState[index-1])                                                      + cVM(oldState[index+1]) +
   cVM(oldState[index-1+numOfCols]) + cVM(oldState[index+numOfCols]) + cVM(oldState[index+1+numOfCols])
      )
  })
      return [oldState,numberOfNeighborsArray];
};


function newStateCreator (argArray){
  var oldState               = argArray[0];
  var numberOfNeighborsArray = argArray[1];
  var newState = oldState.map( function createTheNewState (el,index){
  if ((el==1 || el ==2) && (numberOfNeighborsArray[index] ==0 || numberOfNeighborsArray[index] ==1 )){return 0}
  if ((el==1 || el ==2) && (numberOfNeighborsArray[index] ==2 || numberOfNeighborsArray[index] ==3 )){return 2}
  if ((el==1 || el ==2)&& numberOfNeighborsArray[index] >=4 ){return 0}
  if (el==0 && numberOfNeighborsArray[index] ==3 ){return 1}
  if (el==0 && numberOfNeighborsArray[index] !=3 ){return 0}
}  )
  return newState;  
}

//for (var i=0; i<5; i++){
//  console.log(oldState)
//  var oldState = newStateCreator(countTheNeighborsOfEachCell(oldState,6))
//}

//const composeTwoArgs = (a,b) => (c,d)=> a(b(c,d))
//const improvedStateCreator = composeTwoArgs(newStateCreator,countTheNeighborsOfEachCell); 
//export default improvedStateCreator;

export default function improvedStateCreator ( oldState, numOfCols ){
  return newStateCreator(countTheNeighborsOfEachCell(oldState,numOfCols))
}
  

