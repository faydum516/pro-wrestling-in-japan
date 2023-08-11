import getIWGPChampions from '@/app/njpw/lib/iwgp_heavyweight_champions/getAllChampions';
import getIWGPWorldChampions from '@/app/njpw/lib/iwgp_world_heavyweight_champions/getAllChampions';
import getIWGPChampionWithMostReigns from '@/app/njpw/lib/iwgp_heavyweight_champions/getChampionWithMostReigns';
import getIWGPWorldChampionWithMostReigns from '@/app/njpw/lib/iwgp_world_heavyweight_champions/getChampionWithMostReigns';
import getLongestReigningIWGPWorldChampion from '@/app/njpw/lib/iwgp_world_heavyweight_champions/getLongestReigningChampion';
import getGHCChampions from '@/app/pro_wrestling_noah/lib/ghc_heavyweight_champions/getAllChampions';
import getGHCChampionWithMostReigns from '@/app/pro_wrestling_noah/lib/ghc_heavyweight_champions/getChampionWithMostReigns';
import getLongestReigningGHCChampion from '@/app/pro_wrestling_noah/lib/ghc_heavyweight_champions/getLongestReigningChampion';
import getAJPWChampions from '@/app/ajpw/lib/triple_crown_heavyweight_champions/getAllChampions';
import getAJPWChampionWithMostReigns from '@/app/ajpw/lib/triple_crown_heavyweight_champions/getChampionWithMostReigns';
import getAJPWChampionWithMostDefenses from '@/app/ajpw/lib/triple_crown_heavyweight_champions/getChampionWithMostDefenses';
import getAJPWChampionWithMostCombinedDefenses from '@/app/ajpw/lib/triple_crown_heavyweight_champions/getChampionWithMostCombinedDefenses';
import getTripleChampions from "../lib/triple_world_champions/getAllChampions";

export default async function PuroresuEmbodiment() {

    // New Japan Pro Wrestling
    const IWGPChampionsData: Promise<Champion[]> = getIWGPChampions();
    const IWGPChampionWithMostReignsData: Promise<ChampionWithMostReigns[]> = getIWGPChampionWithMostReigns();
    const IWGPWorldChampionWithMostReignsData: Promise<ChampionWithMostReigns[]> = getIWGPWorldChampionWithMostReigns();
    const longestReigningIWGPWorldChampionData: Promise<LongestReigningChampion[]> = getLongestReigningIWGPWorldChampion();

    const IWGPChampions = await IWGPChampionsData;
    const IWGPChampionWithMostReigns = await IWGPChampionWithMostReignsData;
    const IWGPWorldChampionWithMostReigns = await IWGPWorldChampionWithMostReignsData;
    const longestReigningIWGPWorldChampion = await longestReigningIWGPWorldChampionData;

    // Pro Wrestling NOAH
    const GHCChampionsData: Promise<Champion[]> = getGHCChampions();
    const GHCChampionWithMostReignsData: Promise<ChampionWithMostReigns[]> = getGHCChampionWithMostReigns();
    const longestReigningGHCChampionData: Promise<LongestReigningChampion[]> = getLongestReigningGHCChampion();

    const GHCChampions = await GHCChampionsData;
    const GHCChampionWithMostReigns = await GHCChampionWithMostReignsData;
    const longestReigningGHCChampion = await longestReigningGHCChampionData;

    // All Japan Pro Wrestling
    const AJPWChampionsData: Promise<Champion[]> = getAJPWChampions();
    const AJPWChampionWithMostReignsData: Promise<ChampionWithMostReigns[]> = getAJPWChampionWithMostReigns();
    const AJPWChampionWithMostDefensesData: Promise<ChampionWithMostDefenses[]> = getAJPWChampionWithMostDefenses();
    const AJPWChampionWithMostCombinedDefensesData: Promise<ChampionWithMostCombinedDefenses[]> = getAJPWChampionWithMostCombinedDefenses();

    const AJPWChampions = await AJPWChampionsData;
    const AJPWChampionWithMostReigns = await AJPWChampionWithMostReignsData;
    const AJPWChampionWithMostDefenses = await AJPWChampionWithMostDefensesData;
    const AJPWChampionWithMostCombinedDefenses = await AJPWChampionWithMostCombinedDefensesData;

    // Triple World Champions
    const tripleWorldChampionsData: Promise<TripleWorldChampion[]> = getTripleChampions();

    const tripleWorldChampions = await tripleWorldChampionsData;

    const tripleChampionsInString = `${tripleWorldChampions.map((champ) => champ.Champion).slice(0, -1).join(', ')}, and ${tripleWorldChampions[tripleWorldChampions.length - 1].Champion}`;

    // Most world title reigns
    const IWGPWorldChampionsData: Promise<Champion[]> = getIWGPWorldChampions();
    const IWGPWorldChampions = await IWGPWorldChampionsData;

    interface championWithTitleReigns {
        [key: string]: any
    }
    const championsByTitleReigns: championWithTitleReigns[] = [];

    for (let i = 0; i < tripleWorldChampions.length; i++) {
        let IWGPReigns = IWGPChampions.filter((champ) => champ.Champion === tripleWorldChampions[i].Champion).length !== 0 ? IWGPChampions.filter((champ) => champ.Champion === tripleWorldChampions[i].Champion)[0].NumOfReigns : 0;
        let IWGPWorldReigns = IWGPWorldChampions.filter((champ) => champ.Champion === tripleWorldChampions[i].Champion).length !== 0 ? IWGPWorldChampions.filter((champ) => champ.Champion === tripleWorldChampions[i].Champion)[0].NumOfReigns : 0;
        let GHCReigns = GHCChampions.filter((champ) => champ.Champion === tripleWorldChampions[i].Champion)[0].NumOfReigns;
        let AJPWReigns = AJPWChampions.filter((champ) => champ.Champion === tripleWorldChampions[i].Champion)[0].NumOfReigns;
        championsByTitleReigns.push({
            Champion: tripleWorldChampions[i].Champion,
            NumOfReigns: IWGPReigns + IWGPWorldReigns + GHCReigns + AJPWReigns
        });
    }

    championsByTitleReigns.sort((a: any, b: any) => b.NumOfReigns - a.NumOfReigns);
    
    const mostWorldTitleReigns = Array.from(new Set<number>(championsByTitleReigns.map((champion) => champion.NumOfReigns)))[0];

    const tripleChampionWithMostWorldTitleReigns = championsByTitleReigns.filter((champ) => champ.NumOfReigns === mostWorldTitleReigns)[0];

    const content = (
        <section className="flex justify-center items-center flex-col">
            <h3 className="w-4/5 text-xl border-b border-solid border-[#222225] phone:text-lg">Which World Champions Embody Puroresu?</h3>
            <p className="w-4/5 py-4 phone:text-sm">Puroresu evolved generation after generation, especially because many wrestlers in Japan wrestled to keep the sport alive up to this day. We did see Japanese wrestling legends like Antonio Inoki &amp; Giant Baba revolutionizing Japanese wrestling, but what about the world champions? They have the right to represent the sport because not only did they win world championships, but they also shaped the wrestling sport mostly because of all the impressive in-ring performances they&apos;ve done throughout their careers as well. Using the lists of wrestling stars who claimed world titles in the 3 largest Japanese promotions, which of them embody <i>puroresu</i>?</p>
            <p className="w-4/5 py-4 phone:text-sm">Firstly, we determine who&apos;s the greatest world champion in history in each promotion. In NJPW, there are two separate lists of the IWGP Heavyweight &amp; World Heavyweight Champions, so we analyze both of them. {IWGPChampions[0].Champion} is a {IWGPChampions[0].NumOfReigns}x IWGP Heavyweight Champion, holding the records for the longest reign, longest combined reign, most defenses in a single reign, and most combined defenses. He&apos;s also a record-setting {IWGPWorldChampionWithMostReigns[0].MostReigns}x IWGP World Heavyweight Champion, having held the world title at the longest combined reign. {IWGPChampionWithMostReigns[0].Champion} won the IWGP Heavyweight Championship a record of {IWGPChampionWithMostReigns[0].MostReigns} times. {longestReigningIWGPWorldChampion[0].Champion} is currently the longest reigning IWGP World Heavyweight Champion. Altogether, {IWGPChampions[0].Champion.split(' ')[1]} is the greatest world champion in NJPW, but for those who consider {IWGPChampionWithMostReigns[0].Champion.split(' ')[1]} New Japan&apos;s best world champion, that works too. In Pro Wrestling NOAH, {GHCChampions[0].Champion} is a {GHCChampions[0].NumOfReigns}x holder of the GHC Heavyweight Championship, with the records for the longest combined reign, most successful defenses in a single reign, and most combined defenses. {longestReigningGHCChampion[0].Champion}&apos;s only reign as the GHC Champion, considered one of the greatest world title reigns in <i>puroresu</i>&apos;s history, is the longest singular reign not only in the title&apos;s history, but also in any world title&apos;s history between NJPW, Pro Wrestling NOAH and AJPW, beating Okada&apos;s and Misawa&apos;s records. {GHCChampionWithMostReigns[0].Champion} is a record {GHCChampionWithMostReigns[0].MostReigns}x GHC Heavyweight Champion. Overall, {GHCChampions[0].Champion.split(' ')[1]} and {longestReigningGHCChampion[0].Champion.split(' ')[1]} are the two greatest world champions in NOAH. The late {AJPWChampions[0].Champion} was a {AJPWChampions[0].NumOfReigns}x Triple Crown Heavyweight Champion and still holds the longest singular &amp; combined reigns in the title&apos;s history. He was also a {GHCChampions.filter((champ) => champ.Champion === AJPWChampions[0].Champion)[0].NumOfReigns}x GHC Heavyweight Champion. That made him an {AJPWChampions[0].NumOfReigns + GHCChampions.filter((champ) => champ.Champion === AJPWChampions[0].Champion)[0].NumOfReigns}x world champion. {AJPWChampionWithMostReigns[0].Champion} is a record {AJPWChampionWithMostReigns[0].MostReigns}x Triple Crown Champion, tied with {IWGPChampionWithMostReigns[0].Champion.split(' ')[1]} for the most reigns for any distinct world championship between New Japan, Noah and All Japan. {AJPWChampionWithMostCombinedDefenses[0].Champion}, a {AJPWChampions.filter((champ) => champ.Champion === AJPWChampionWithMostCombinedDefenses[0].Champion)[0].NumOfReigns}x Triple Crown Champion, holds the record for the most combined defenses while being tied with {AJPWChampionWithMostDefenses[0].Champion} for most defenses in a single reign. {AJPWChampions[0].Champion.split(' ')[1]}, {AJPWChampionWithMostCombinedDefenses[0].Champion.split(' ')[1]}, and {AJPWChampionWithMostReigns[0].Champion} are the three greatest world champions in AJPW.</p>
            <p className="w-4/5 py-4 phone:text-sm">Next, we look at the Triple World Champions, that, in chronological order, are {tripleChampionsInString}. The wrestler among them with the most combined reigns in winning the world titles in NJPW, Noah and All Japan is {tripleChampionWithMostWorldTitleReigns.Champion}, who is an {tripleChampionWithMostWorldTitleReigns.NumOfReigns}x world champion between these 3 major promotions. Just because {championsByTitleReigns[championsByTitleReigns.length - 1].Champion.split(' ')[1]} has the least combined world title reigns with {championsByTitleReigns[championsByTitleReigns.length - 1].NumOfReigns} doesn&apos;t mean that he&apos;s an ignored world champion. Truthfully, every Triple World Champion has the right to be part of those representing Japanese wrestling, but if we have to decide who&apos;s the greatest Triple World Champion of all time, then we would say that {tripleChampionWithMostWorldTitleReigns.Champion.split(' ')[tripleChampionWithMostWorldTitleReigns.Champion.split(' ').length - 1]}-san is.</p>
            <p className="w-4/5 py-4 phone:text-sm">As a result, those who embody <i>puroresu</i> are {IWGPChampions[0].Champion.split(' ')[1]}, {IWGPChampionWithMostReigns[0].Champion.split(' ')[1]}, {GHCChampions[0].Champion.split(' ')[1]}, {longestReigningGHCChampion[0].Champion.split(' ')[1]}, {AJPWChampions[0].Champion.split(' ')[1]}, {AJPWChampionWithMostCombinedDefenses[0].Champion.split(' ')[1]}, {AJPWChampionWithMostReigns[0].Champion}, and {tripleChampionWithMostWorldTitleReigns.Champion.split(' ')[tripleChampionWithMostWorldTitleReigns.Champion.split(' ').length - 1]}. Many wrestling fans may have not known some of them, but they should see their matches and would be impressed by their amazing in-ring abilities. They would also end up accepting the fact that they have accumulated major accolades and have wrestled great matches, some of which were given a 5-or-more-star rating by wrestling journalist Dave Meltzer, and stating &#8220;That&apos;s why they became world champs&#8220;.</p>
        </section>
    );
    
    return content;
}