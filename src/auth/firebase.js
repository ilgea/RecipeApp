// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// biz firebase'in authentication servislerini kullandığımız için firebase'in altında
// auth içerisinden import ediyoruz.
// eğer firebase'in database servislerini kullanmak isteseydik
// firebase/database altındakileri import edecektik. (getDatabase, ref, set,push, onValue, remove,update )

import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

// buradaki app, bizim tüm firebase bağlantımızı temsil ediyor
// mesela, firebase platformundan herhangi bir şeyi kullanmak istersem
// bunlar, Host, authentication, database vs. gibi özellikleridir.
const app = initializeApp(firebaseConfig);

// buradaki auth, kimliği doğrulanmış kullancı ile ilgili tüm bilgileri ihtiva eder.
// kimin yetkilendirildiğini bununla bulabiliriz.
// başka osyalarda erişebiliriz. bizim için önemli bir değişkendir.
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    toast.success("Registered Successfully!", {
      style: {
        width: "10rem",
        fontSize: ".9rem",
      },
    });
    navigate("/");
    return user;
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      toast.error("Bu eposta adresi zaten kullanımda");
    } else {
      toast.error(error.message, {
        style: {
          width: "10rem",
          fontSize: ".9rem",
        },
      });
    }
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success(`Hoşgeldiniz ${email.slice(0, email.indexOf("@"))}`, {
      style: {
        width: "10rem",
        fontSize: ".9rem",
      },
    });
    // başarılı olma durumunda anasayfaya git diyoruz.
    navigate("/");
  } catch (error) {
    if (error.code === "auth/invalid-credential") {
      toast.error("Geçersiz kimlik bilgileri", {
        style: {
          width: "10rem",
          fontSize: ".9rem",
        },
      });
    } else {
      toast.error(error.code, {
        style: {
          width: "10rem",
          fontSize: ".9rem",
        },
      });
    }
  }
};

export const userObserver = (setCurrentUser) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email } = user;
      setCurrentUser({ email });
      console.log(user);
    } else {
      setCurrentUser(false);
      // console.log("user signed out");
    }
  });
};

export const logOut = async () => {
  try {
    await signOut(auth);
    toast.success("Logged out successfully!", {
      style: {
        width: "10rem",
        fontSize: ".9rem",
      },
    });
    // return true;
  } catch (error) {
    toast.error(error.message, {
      style: {
        width: "10rem",
        fontSize: ".9rem",
      },
    });
    // return false;
  }
};
