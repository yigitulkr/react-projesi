import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            
            if(!email) {
                return;
            }

            sendPasswordResetEmail(auth, email)
                .catch((e) => {
                    console.log(e);
                });
        }, 
        [email]
    );

    return(
        <div className="max-w-md mx-auto py-12">
            <h1 className="text-2xl">Şifrenizi mi unuttunuz</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                <input 
                    type="email" 
                    className="p-4 bg-gray-100 rounded-md" 
                    placeholder="E-postanızı girin" 
                    value={email}
                    onChange={e => setEmail(e.currentTarget.value)}
                />
                <input 
                    type="submit" 
                    className="p-4 bg-blue-400 rounded-md" 
                    value="Şifre sıfırlama e-postası gönder" 
                />
                <Link to="/sign-in"> Giriş Yap'a Geri Dön</Link>
            </form>
        </div>
    );
};

export default ForgotPassword;