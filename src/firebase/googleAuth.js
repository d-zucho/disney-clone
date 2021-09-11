import { auth, provider } from './firebase.config'
import { signInWithPopup } from 'firebase/auth'

export const handleGoogleAuth = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = {
        displayName: result.user.displayname,
        email: result.user.email,
        photoURL: result.user.photoURL,
        id: result.user.uid,
      }
      console.log(user)
    })
    .catch((error) => {
      console.log()
    })
}
