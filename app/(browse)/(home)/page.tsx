import { UserButton } from "@clerk/nextjs";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
    {/*<Suspense fallback={<ResultsSkeleto />}>
      <Results />
  </Suspense>*/}
  <h1>Home Page</h1>
  </div> 
  )
}
