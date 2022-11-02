import { projectfirestore } from "../firebase/config"
import { useEffect, useState } from "react"

export const useDocument = (collection, id) => {

    const [document,setdocument] = useState(null)
    const [error,seterror] = useState(null)



    useEffect(()=>{
        const ref=projectfirestore.collection(collection).doc(id)
        const unsubscribe=ref.onSnapshot(snapshot=>{

            if(snapshot.data()){
                setdocument({...snapshot.data(),id:snapshot.id})
                seterror(null)

            }else{
                seterror('No document exist')

            }

           



        },(error)=>{
            console.log(error.message)
            seterror(error.message)
        })


        return ()=>unsubscribe()

    },[collection,id])

    return {document,error}
}