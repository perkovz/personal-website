import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }, []);

  return ( 
    <div className="not-found">
      <h1>Oooops....</h1>
      <h2>That page cannot be found. You will be redirected to the Homepage.</h2>
    </div> 
   );
}
 
export default NotFound;