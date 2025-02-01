import { getCatFacts } from "@/apis/apis";
import CatFacts from "../components/cat-facts";
import { Suspense } from "react";

export default async function Hybrid() {
  const catFact = await getCatFacts();
  return (
    <div>
      <h1>Hybrid Page -prerender at Run time</h1>
      <div className="mt-4">{catFact.fact}</div>
      <div className="mt-6">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <CatFacts />
        </Suspense>
      </div>
    </div>
  );
}
