let arr=[1223,24,32,56,778,98,9,9]
function binaryserach(arr,element,start,end){
    let mid=(start + end)/2
    if(start>end){
        return false
    }
    if(arr[mid]==element){
        return true
    }
    if(arr[mid]>element){
        return binaryserach(arr,element,start,mid-1,end)
    }else{
        return binaryserach(arr,element,start,mid-1,end)

    }
}
let result=binaryserach(arr,5,0,arr.length)
console.log(result);