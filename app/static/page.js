import { getCatFacts } from "@/apis/apis";
import Button from "../components/button";

export default async function Static() {
  const catFact = await getCatFacts();
  return (
    <div>
      <h1>Static Page - Pre-rendered at Build time</h1>
      <div className="mt-4">{catFact.fact}</div>
      <div className="mt-4">
        <Button>Click Me</Button>
      </div>
    </div>
  );
}
