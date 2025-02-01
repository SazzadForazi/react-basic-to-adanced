import { getCatFacts } from "@/apis/apis";
export const dynamic = "force-dynamic";

export default async function Dynamic() {
  const catFact = await getCatFacts("dynamic");
  return (
    <div>
      <h1>Dynamic Page -prerender at Run time</h1>
      <div className="mt-4">{catFact.fact}</div>
    </div>
  );
}

// export const dynamic = "force-dynamic";

// export default function Dynamic() {
//   return (
//     <div>
//       <h1>Dynamic Page -prerender at Run time</h1>
//       <div className="mt-4">{new Date().toISOString()}</div>
//     </div>
//   );
// }
