//bai 1
function array(array1,array2)
{
    for(let i=0;i<array1.length;i++)
    {
        for(let j=0;j<array2.length;j++)
        {
            if(array1[i]===array2[j])
            {
                console.log(array1[i]) ;
            }
        }
    }
}
array([1,2,3,4],[3,4,5,6]);
//bai 2
function sumInAnArray(arr)
{
     let max1=arr[0];
     let max2=0;
    for(let i=0;i<arr.length;i++)
    {
       
        if(max1<arr[i])
        {
            max1=arr[i];
            max2=arr[i-1];
            
        }
        
    }
    console.log(max1,max2);
}
sumInAnArray([1,2,6,8,9,3,5]);
//bai 3
function sumIsEqual(arr1)
{
    const sum=10;
    for(let i=0;i<arr1.length;i++)
    {
        for(let j=0;j<arr1.length;j++)
        {
            if (arr1[i]+arr1[j]===sum)
            {
                console.log("[",arr1[i],arr1[j],"]");
            }
        }
    }
}

sumIsEqual([1,7,9,2,5,3,8]);
//bai 4
const GetANewArray=new Set([1,2,3,1,2,3,4,5,6,4]);
console.log(GetANewArray);
//bai 5
function duplicateElements(arr1,arr2)
{
  let pushElement=[];
    for(let i=0;i<arr1.length;i++)
    {
        for(let j=0;j<arr2.length;j++)
        {
            if(arr1[i]===arr2[j])
            {
                pushElement.push(arr1[i]);
               
               
            }
        }
    }
     console.log(pushElement);
     let setduplicateElements=new Set(pushElement);
     console.log(setduplicateElements)
} 
duplicateElements([1,2,3,4,5,6,7,9,9,8,7,7],[3,5,9,10,88])


//bai 6
const arr1=[1,2,3,4,2,,3,5,3,1,1,5,2,3];
const myFunc=(inputArr)=>{
    const pushMyFunc=[];
    for(let i=0;i<inputArr.length;i++)
    {
        for(let j=0;j<inputArr.length;j++)
        {
            if(inputArr[i]==inputArr[j]&&i!==j)
            {
                pushMyFunc.push(inputArr[i]);
            }
        }
    }
    console.log(pushMyFunc);
    const setMyFunc=new Set(pushMyFunc);
    console.log(setMyFunc);
}
const arr2=myFunc(arr1);
//bai 7
const myArr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];
			const myFuncti = (inputArr) => {
                let pushmyFuncti=[];
                for(let i=0;i<inputArr.length;i++)
                {   
                    let count=0;
                    for(let j=0;j<inputArr.length;j++)
                    {
                        if(inputArr[i]===inputArr[j])
                        {
                            count++;
                            
                             
                        } 
                    }
                    
                    //  const result=inputArr[i]+":"+count;
                    //  console.log(result);
                    
                    pushmyFuncti.push(inputArr[i]+":"+count);
                    //  console.log(pushmyFuncti)
                     let setResult=new Set(pushmyFuncti);
                     console.log(setResult);
                }
               
			}
			console.log(myFuncti(myArr));
            const myArr1 = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];
            const duma=new Set(myArr1);
            console.log(duma)