import { signOut } from "firebase/auth";
import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Posts from "../components/Posts";
import { auth } from "../firebase";
import AddPost from "../components/AddPost";

const Home = () => {
    const [user, isLoading] = useAuthState(auth);

    const handleSignOut = useCallback(() => {
        signOut(auth)
    }, [])

    if(isLoading) {
        return <h1>Yükleniyor...</h1>
    }

    return(
        <div className="max-w-md py-12 mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xl">{user.displayName}</p>
                    <p className="text-lg text-gray-700">{user.email}</p>
                </div>
                <button onClick={handleSignOut} className="p-4 bg-red-500 rounded-md">
                    Çıkış yap
                </button>
            </div>
            <AddPost />
            <Posts />
        </div>
    );
};

export default Home;