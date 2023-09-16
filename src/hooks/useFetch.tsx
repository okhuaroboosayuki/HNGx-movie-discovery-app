import { useEffect, useRef, useState } from "react";


export const useFetch = (url: any) => {
    const cache = useRef({} as any);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({} as any);

    useEffect(() => {
        if (!url) return;
        
        const fetchData =async () => {
            setLoading(true);

            if (cache.current[url]) {
                setLoading(false);
                return cache.current[url]
            }

            try{
                const res = await fetch(url);

                if (!res.ok) {
                    setError(res.statusText);
                }

                const data = await res.json();
                cache.current[url] = data;

                setLoading(false);
                setData(data);
            } catch (error: any) {
                setError(error?.message)
            }
        }

        fetchData();
    }, [url])

    return {error, loading, data}
};
