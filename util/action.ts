'use server'

export const createHome = async(Data:any) =>{
    const title = Data.get('HomeName')
    console.log(title);
    
}