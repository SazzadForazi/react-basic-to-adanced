import { getCatFacts } from "@/apis/apis";

export default async function CatFacts() {
    const catFact = await getCatFacts("dynamic");
    return <div>{catFact.fact}</div>;
}