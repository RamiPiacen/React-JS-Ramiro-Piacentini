let itsOk = true;
const customFetch = (time, task) => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=> {
            if(itsOk){
            resolve(task)
            }else{
                reject("error")
            }
        },time)})
}
export default customFetch;