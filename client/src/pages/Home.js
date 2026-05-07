import { useCallback, useEffect, useState } from 'react';
import { useDescope, useSession, useUser } from '@descope/react-sdk';
import { Descope } from '@descope/react-sdk';
import { getSessionToken } from '@descope/react-sdk';
import SecretMessage from '../components/SecretMessage';
import SSOSignIn from '../components/SSOSignIn';

const Home = () => {
    const { isAuthenticated, isSessionLoading } = useSession();
    const { isUserLoading } = useUser();

    useEffect(() => {
        if (!isSessionLoading && isAuthenticated) {
            window.location.href = '/dashboard';
        }
    });

    if (isSessionLoading || isUserLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="hero">
                <h1>Welcome to Bravo Ice Cream</h1>
                <p>Odesa's finest ice cream since 2024</p>
                <button onClick={() => window.location.href = '/signin'}>Sign In</button>
            </div>
            <div className="features">
                <div className="feature">
                    <h2>Artisanal Flavors</h2>
                    <p>Handcrafted with local ingredients</p>
                </div>
                <div className="feature">
                    <h2>Odesa Made</h2>
                    <p>Proudly serving our community</p>
                </div>
                <div className="feature">
                    <h2>Family Recipes</h2>
                    <p>Traditional methods, modern twists</p>
                </div>
            </div>
            <SecretMessage/>
            <SSOSignIn/>
        </>
    );
};

export default Home;