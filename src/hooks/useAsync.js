import { useState, useEffect } from "react";
import { useResolvedPath } from "react-router";

export const useAsync = (asyncFn, dependencies = []) => {
    const [d, setD] = useState ()
    const [error, setError] = useState ()
    const [isLoading, setIsLoading] = useState (true)

    useEffect(() => {
        setIsLoading (true)
        asyncFn().then(response => {
            setD(response)
        }).catch(error =>{
            setError(error)
        }).finally(() => {
            setIsLoading(false)
        })
    }, dependencies)

        return(
            isLoading,
            d,
            error
        )
}        