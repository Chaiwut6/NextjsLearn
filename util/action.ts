'use server'
import { currentUser } from '@clerk/nextjs/server'

const getAuthUser = async () => {
    const user = await currentUser()
    console.log(user);
}

export const createHome = async(Data:any) =>{
    getAuthUser()
    const title = Data.get('HomeName')
    console.log(title);
    
}