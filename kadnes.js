let arr=[-2,-3,4,-1,-2,1,5,-3]
let max=0
let current=arr[0]
for(let i=0;i<arr.length;i++){
    current=current+arr[i]
    if(current<0){
        current=0
    }
    if(max<current){
        max=current
    }
}
console.log(max);