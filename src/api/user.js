export const loginUser = (email,password) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(email === "test@gmail.com" && password === "pass"){
                resolve({
                    success:true,
                    data:{
                        email,
                        username:"TEST",
                        token:"cgfhjkjlkjasidxgvasjdb"
                    }
                });
            } else{
                reject({success:false, error:"Invalid Crendials"});
                
            }
        },1000)
    })
}