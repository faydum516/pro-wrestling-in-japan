import type { Metadata } from "next";
import TripleWorldChampions from "./components/triple_world_champions";
import CurrentWorldChampions from "./components/current_world_champions";
import PuroresuEmbodiment from "./components/puroresu_embodiment";

export const metadata: Metadata = {
    title: 'Overall'
}

export default function OverallChampionsPage() {

    const content = (
        <>
            <h2 className="text-2xl font-medium mt-6 border-b border-black phone:text-xl phone:max-w-[300px]">All Top Star Champions in Japan</h2>
            <p className="w-4/5 py-6 phone:text-sm">As we assemble the world champions from their promotions, we&apos;re presented with an opportunity to identify the true essence of puroresu. The wrestlers who have triumphed in securing the IWGP, GHC, and Triple Crown &#40;World&#41; Heavyweight Championships in NJPW, Pro Wrestling Noah, and AJPW respectively are known as Triple World Champions and stand as the pinnacle. The reigning world champions across these three promotions have the privilege to consider themselves as premier stars and potential icons in the world of wrestling.</p>
            {/* @ts-expect-error Async Server Component */}
            <TripleWorldChampions />
            {/* @ts-expect-error Async Server Component */}
            <CurrentWorldChampions />
            {/* @ts-expect-error Async Server Component */}
            <PuroresuEmbodiment />
        </>
    );

    return content;
}

