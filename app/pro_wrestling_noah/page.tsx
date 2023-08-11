import type { Metadata } from "next";
import GHCHeavyweightChampions from "./components/ghc_heavyweight_champions";

export const metadata: Metadata = {
    title: 'Pro Wrestling NOAH'
}

export default function ChampionsPage() {

    const promotion = 'Pro Wrestling NOAH'
    
    const content = (
        <>
            <h2 className="text-2xl font-medium mt-6 border-b border-black phone:text-xl phone:max-w-[300px]">Top Star Champions in {promotion}</h2>
            <p className="w-4/5 py-6 phone:text-sm">Pro Wrestling NOAH is the only wrestling circuit among the three major Japanese promotions that was founded in the 21st century and still maintains its own popularity status today despite all the hardships it has endured in the past, including the passing of Noah founder &amp; star Mitsuharu Misawa in June 2009. Let&apos;s look at and analyze the whole list of NOAH&apos;s world champions to see which of them cherish modern pro wrestling that has been used in the promotion since the company was founded.</p>
            {/* @ts-expect-error Async Server Component */}
            <GHCHeavyweightChampions />
        </>
    );

    return content;
}