import { useQuery } from "@tanstack/react-query";

export let TanstackQuery = ()=>{

    let getData = async()=>{
        try {
            let fetchReq = await fetch('https://dummyjson.com/products');
            let response = await fetchReq.json();

            if(!fetchReq.ok){
                throw new Error("network error");
            }

            return response;

        } catch (error) {
            console.log(error.message);
        }
    }

    let {data,
  dataUpdatedAt,
  error,
  errorUpdatedAt,
  failureCount,
  failureReason,
  fetchStatus,
  isError,
  isFetched,
  isFetchedAfterMount,
  isFetching,
  isLoading,
  isLoadingError,
  isPaused,
  isPending,
  isPlaceholderData,
  isRefetchError,
  isRefetching,
  isStale,
  isSuccess,
  isEnabled,
  promise,
  refetch,
  status,} = useQuery({
        queryKey:['test1'],
        queryFn:getData,
        //refetchInterval:1000,
        //refetchIntervalInBackground:true,
    });

console.log("dataUpdatedAt", dataUpdatedAt)
console.log("error", error)
console.log("errorUpdatedAt", errorUpdatedAt)
console.log("failureCount", failureCount)
console.log("failureReason", failureReason)
console.log("fetchStatus", fetchStatus)
console.log("isError", isError)
console.log("isFetched", isFetched)
console.log("isFetchedAfterMount", isFetchedAfterMount)
console.log("isFetching", isFetching)
console.log("isLoading", isLoading)
console.log("isLoadingError", isLoadingError)
console.log("isPaused", isPaused)
console.log("isPending", isPending)
console.log("isPlaceholderData", isPlaceholderData)
console.log("isRefetchError", isRefetchError)
console.log("isRefetching", isRefetching)
console.log("isStale", isStale)
console.log("isSuccess", isSuccess)
console.log("isEnabled", isEnabled)
console.log("promise", promise)
console.log("refetch", refetch)
console.log("status", status);

if(isLoading){
    return("loading ho rahi hai...")
}
    return(
        <>
        {
            data.products.map((item)=>{
                return (<p style={{fontSize:'0.875rem', margin:'0.25rem'}} key={item.id}>{item.title}</p>)
            })
        }
        </>
    );

}