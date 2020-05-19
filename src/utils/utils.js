
export const rateOfChange = (array) => {
    console.log("ROC Z",array)
    let roc = 0;
    let iRoc = 0;
    for(let i=0; i<array.length-1;i++){
        iRoc = ((array[i+1]-array[i])/array[i+1])*100
        console.log("iROC",iRoc.toFixed(2))
        roc = roc + iRoc
        console.log("ROC",roc.toFixed(2))
    }
    return (roc/(array.length-1)).toFixed(2)
}