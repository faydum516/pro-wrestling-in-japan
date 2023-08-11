import type { Metadata } from "next";
import IWGPHeavyweightChampions from "./components/iwgp_heavyweight_champions";
import IWGPWorldHeavyweightChampions from "./components/iwgp_world_heavyweight_champions";

export const metadata: Metadata = {
    title: 'NJPW'
}

export default function ChampionsPage() {

    const promotion = 'NJPW';

    const content = (
        <>
            <h2 className="text-2xl font-medium mt-6 border-b border-black phone:text-xl phone:max-w-[300px]">Top Star Champions in {promotion}</h2>
            <p className="w-4/5 py-6 phone:text-sm">New Japan Pro Wrestling is one of the longest-existing pro wrestling promotions in history and is known for having incorporated <i>strong style</i> in various matches, being able to maintain its own popularity and success. Many top stars in NJPW were capable of cherishing the legacy of puroresu, so let&apos;s look at the two different list of NJPW&apos;s world champions because of the promotion having two different world title histories.</p>
            {/* @ts-expect-error Async Server Component */}
            <IWGPHeavyweightChampions />
            {/* @ts-expect-error Async Server Component */}
            <IWGPWorldHeavyweightChampions />
        </>
    );

    return content;
}