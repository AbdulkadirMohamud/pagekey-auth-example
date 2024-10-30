import {signIn, signOut, useSession} from 'next-auth/react';

export default function Home() {
    const {data: session} = useSession();
    const handleLoginwithGoogle = () => {
        signIn("google");
    };
    const handleLoginwithApple = () => {
        console.log('Ouch')
    };
    let loginElem = (
        <>
        <button className= "p-3 bg-blue 600 text-white font-bold rounded onClick={handleLoginwithGoogle}">Login with Google</button>
        <button className= "p-3 bg-blue 600 text-white font-bold rounded onClick={handleLoginwithApple}">Login with Apple</button>
        
        </>
    ); 

    if (session && session.user) {
        loginElem = (
            
            <div>
                logged in as {session.user.email}
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    }
    return (
        <>
        <div className="text-2xl font-bold my-4">My App</div>
        {loginElem}
        </>
    );
}