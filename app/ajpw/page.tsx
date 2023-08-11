import type { Metadata } from "next";
import TripleCrownHeavyweightChampions from "./components/triple_crown_heavyweight_champions";

export const metadata: Metadata = {
    title: 'AJPW'
}

export default function ChampionsPage() {

    const promotion = 'AJPW';
    
    const content = (
        <>
            <h2 className="text-2xl font-medium mt-6 border-b border-black phone:text-xl phone:max-w-[300px]">Top Star Champions in {promotion}</h2>
            <p className="w-4/5 py-6 phone:text-sm">All Japan Pro Wrestling continues to be an important wrestling promotion in Japan and still carries the legacy of Rikid&#333;zan in its top championship. Thus, let&apos;s look at the list of all the Triple Crown Heavyweight Champions to see who mostly carried the late wrestling legend&apos;s legacy.</p>
            {/* @ts-expect-error Async Server Component */}
            <TripleCrownHeavyweightChampions />
        </>
    );

    return content;
}