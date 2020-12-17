// src/ProtectRoute.js
import { useEffect } from 'react';
import { useRouter } from "next/router";

import useAuth from "../AuthContext";

const ProtectRoute = (Component) => {
    const Wrapper = (props) => {
        const { isAuthenticated, isLoading } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!isLoading && !isAuthenticated) router.push("/login");
        }, [isLoading, isAuthenticated]);

        if (isLoading || !isAuthenticated) return null;

        return <Component {...props} />;
    };

    return Wrapper;
};

export default ProtectRoute;
