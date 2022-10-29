import React, { useCallback, useEffect, useState } from "react";

interface StateType {
    isLoad: boolean,
    setLoad: () => void;
    removeLoad: () => void;
}

const LoadContext = React.createContext<StateType>({
    isLoad: true,
    setLoad: () => null,
    removeLoad: () => null
});

const LoadContextProvider = (props: any) => {
    const [loads, setLoads] = useState(0)
    const [isLoad, setIsLoad] = useState<boolean>(true)
    
    useEffect(() => {
        setIsLoad(Boolean(loads))
    }, [loads])
    
    const setLoad = useCallback(() => {
        setLoads(loads => loads + 1)
    }, [loads])
    const removeLoad = useCallback(() => {
        setLoads(loads => loads - 1)
    }, [loads])



    return (
        <LoadContext.Provider
            value={{
                isLoad: isLoad,
                setLoad: setLoad,
                removeLoad: removeLoad
            }}
            {...props}
        />
    );
};

const useLoadContext = () => React.useContext(LoadContext)
export {LoadContextProvider, useLoadContext}