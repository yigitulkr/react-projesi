import { useState, useCallback } from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from '../firebase';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = useCallback(
        (e) => {
        e.preventDefault();

        if(!email || !password) {
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .catch((e) => {
                console.log(e);
            });
        },
     [email, password]
    );

    return(
        <div className="max-w-md mx-auto py-12">
            <h1 className="text-2xl">Giriş yap</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                <input 
                    type="email" 
                    placeholder="E-postanızı girin" 
                    className="p-4 bg-gray-100 rounded-md"
                    value={email} 
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <input 
                    type="password" 
                    placeholder="Şifrenizi girin" 
                    className="p-4 bg-gray-100 rounded-md"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <Link to="/forgot-password" className="ml-auto">Şifrenizi mi unuttunuz?</Link>
                <input 
                    type="submit" 
                    className="p-4 bg-blue-400 rounded-md" 
                    value="Giriş yap"
                />
                <div className="flex flex-row gap-2">
                    <p>Hesabınız yok mu? </p>
                    <Link to="/sign-up"> Kayıt ol</Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;