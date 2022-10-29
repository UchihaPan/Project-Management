import { useState, useEffect } from 'react'
import { projectauth,projectstorage } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName,thumbnail) => {
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await projectauth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      const uploadpath=`thumbnails/${res.user.uid}/${thumbnail.name}`
      const image=await projectstorage.ref(uploadpath).put(thumbnail)
      const imageurl=await image.ref.getDownloadURL()


      // add display name to user
      await res.user.updateProfile({ displayName,photoURL:imageurl })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { signup, error, isPending }
}