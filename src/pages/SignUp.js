import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useState, useCallback } from "react"; 
import {auth} from "../firebase";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            console.log(email, password);

            if(!email || !password) {
                return;
            }

            createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                updateProfile(auth.user, {displayName: name});
            })
            .catch(e => {
                console.log(e);
            });
        }, 
        [name, email, password]
    );

    return (
     <div className="max-w-md mx-auto py-12">
        <h1 className="text-2xl">Yeni Hesap Oluştur</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
            <input 
                type="text" 
                placeholder="Adınızı girin" 
                className="p-4 bg-gray-100 rounded-md"
                value={name}
                onChange={e => setName(e.currentTarget.value)}
            />
            <input 
                type="email" 
                placeholder="E-postanızı girin" 
                className="p-4 bg-gray-100 rounded-md"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
            />
            <input 
                type="password" 
                placeholder="Şifrenizi girin" 
                className="p-4 bg-gray-100 rounded-md"
                value={password}
                onChange={e => setPassword(e.currentTarget.value)} 
            />
            <input 
                type="submit" 
                className="p-4 bg-green-400 rounded-md" 
                value="Kayıt ol"
            />
            <div className="flex flex-row gap-2">
                <p>Zaten bir hesabın var mı? </p>
                <Link to="/sign-in"> Giriş yap</Link>
            </div>

        </form>
     </div>
    );
};

export default SignUp;