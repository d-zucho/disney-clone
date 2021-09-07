import { getAuth, updateProfile } from 'firebase/auth'

const auth = getAuth()

updateProfile(auth.currentUser, {
  displayName: auth.currentUser.displayName,
  email: auth.currentUser.email,
})
