import { user } from '$lib/stores'
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBgzxRhzcIvnpneO3mKI3J3ow6TbqLwGA0",
  authDomain: "craighead-digitech-bfb37.firebaseapp.com",
  projectId: "craighead-digitech-bfb37",
  storageBucket: "craighead-digitech-bfb37.appspot.com",
  messagingSenderId: "755351330847",
  appId: "1:755351330847:web:53cec85a2e3cc40952752a"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  login_hint: 'username@craighead.school.nz',
})

export async function login() {
  try {
    user.set(undefined)
    let result = await signInWithPopup(auth, provider)
    user.set({ ...result.user })
    console.log(`Logged in successfully.`)
  } catch (error) {
    console.error(`Something went wrong.`)
    console.error(`Code: ${error.code}`)
    console.error(`Message: ${error.message}`)
  }
}

export async function logout() {
  try{
    user.set(undefined)
    await signOut(auth)
    console.log(`Logged out successfully.`)
  } catch (error) {
    console.error(`Something went wrong.`)
  }
}
