// Retrieving data from MySQL database server using Fetch API
import getAllChampions from "../lib/triple_world_champions/getAllChampions";
import getFastestChampion from "../lib/triple_world_champions/getFastestChampions";
import getYoungestChampion from "../lib/triple_world_champions/getYoungestChampion";
import getIWGPChampions from '@/app/njpw/lib/iwgp_heavyweight_champions/getAllChampions';
import getIWGPWorldChampions from '@/app/njpw/lib/iwgp_world_heavyweight_champions/getAllChampions';
import getGHCChampions from '@/app/pro_wrestling_noah/lib/ghc_heavyweight_champions/getAllChampions';
import getAJPWChampions from '@/app/ajpw/lib/triple_crown_heavyweight_champions/getAllChampions';

export default async function TripleWorldChampions() {
    const tripleWorldChampionsData: Promise<TripleWorldChampion[]> = getAllChampions();
    const fastestChampionData: Promise<ChampionWithYearsMonthsDays[]> = getFastestChampion();
    const youngestChampionData: Promise<ChampionWithYearsMonthsDays[]> = getYoungestChampion();
    const IWGPChampionsData: Promise<Champion[]> = getIWGPChampions();
    const IWGPWorldChampionsData: Promise<Champion[]> = getIWGPWorldChampions();
    const GHCChampionsData: Promise<Champion[]> = getGHCChampions();
    const AJPWChampionsData: Promise<Champion[]> = getAJPWChampions();

    const [tripleWorldChampions, fastestChampion, 
        youngestChampion, IWGPChampions,
        IWGPWorldChampions, GHCChampions, AJPWChampions] = await Promise.all([
            tripleWorldChampionsData, fastestChampionData,
            youngestChampionData, IWGPChampionsData,
            IWGPWorldChampionsData, GHCChampionsData, AJPWChampionsData
        ]);

    // Fastest Time To Achieve The Feat
    const fastestTime = `${fastestChampion[0].Years} years${fastestChampion[0].Months > 1 && fastestChampion[0].Days > 1 ? `, ${fastestChampion[0].Months} months and ${fastestChampion[0].Days} days` : 
    fastestChampion[0].Months > 1 && fastestChampion[0].Days === 1 ? `, ${fastestChampion[0].Months} months and ${fastestChampion[0].Days} day` :
    fastestChampion[0].Months === 1 && fastestChampion[0].Days > 1 ? `, ${fastestChampion[0].Months} month and ${fastestChampion[0].Days} days` :
    fastestChampion[0].Months === 1 && fastestChampion[0].Days === 1 ? `, ${fastestChampion[0].Months} month and ${fastestChampion[0].Days} day` :
    fastestChampion[0].Months > 1 ? ` and ${fastestChampion[0].Months} months` : 
    fastestChampion[0].Months === 1 ? ` and ${fastestChampion[0].Months} month` :
    fastestChampion[0].Days > 1 ? ` and ${fastestChampion[0].Months} days` :
    fastestChampion[0].Days === 1 ? ` and ${fastestChampion[0].Days} day` : ""}`;

    // Youngest Champions To Do So
    const youngestAge = `${youngestChampion[0].Years} years${youngestChampion[0].Months > 1 && youngestChampion[0].Days > 1 ? `, ${youngestChampion[0].Months} months and ${youngestChampion[0].Days} days` : 
    youngestChampion[0].Months > 1 && youngestChampion[0].Days === 1 ? `, ${youngestChampion[0].Months} months and ${youngestChampion[0].Days} day` :
    youngestChampion[0].Months === 1 && youngestChampion[0].Days > 1 ? `, ${youngestChampion[0].Months} month and ${youngestChampion[0].Days} days` :
    youngestChampion[0].Months === 1 && youngestChampion[0].Days === 1 ? `, ${youngestChampion[0].Months} month and ${youngestChampion[0].Days} day` :
    youngestChampion[0].Months > 1 ? ` and ${youngestChampion[0].Months} months` : 
    youngestChampion[0].Months === 1 ? ` and ${youngestChampion[0].Months} month` :
    youngestChampion[0].Days > 1 ? ` and ${youngestChampion[0].Months} days` :
    youngestChampion[0].Days === 1 ? ` and ${youngestChampion[0].Days} day` : ""}`;

    // Most world title reigns
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

    const tripleChampionWithMostWorldTitleReigns = championsByTitleReigns.filter((champ) => champ.NumOfReigns === mostWorldTitleReigns)[0].Champion;

    const tripleChampionIWGPReigns = IWGPChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns > 2 ? `${IWGPChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns} times` : IWGPChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns > 1 ? "twice" :  IWGPChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns === 1 ? "once" : "";

    const tripleChampionGHCReigns = GHCChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns > 2 ? `${GHCChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns} times` : GHCChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns > 1 ? "twice" :  GHCChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns === 1 ? "once" : "";

    const tripleChampionAJPWReigns = AJPWChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns > 2 ? `${AJPWChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns} times` : AJPWChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns > 1 ? "twice" :  AJPWChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns === 1 ? "once" : "";

    const section = (
        <section className="flex justify-center items-center flex-col">
            <h3 className="w-4/5 text-xl border-b border-solid border-[#222225] phone:text-lg">Triple World Champions</h3>
            <p className="w-4/5 py-4 phone:text-sm">Winning all 3 of these prestigious world championships is a huge accomplishment for any wrestler having achieved it. Those who attain this feat can call themselves legends in the wrestling industry and those who cherish the legacy of Japanese pro wresting. Only {tripleWorldChampions.length} wrestlers have claimed all the top championships in their illustrious careers. {tripleWorldChampions[0].Champion} is the first to achieve the feat and also the youngest wrestler to do so at {youngestAge} old. {fastestChampion[0].Champion} currently holds the record for the fastest time to do so at {fastestTime}. {tripleChampionWithMostWorldTitleReigns}, who won the IWGP Heavyweight Championship {tripleChampionIWGPReigns}, the GHC Heavyweight Championship {tripleChampionGHCReigns} and the Triple Crown Heavyweight Championship {tripleChampionAJPWReigns}, among the Triple World Champions, has the most combined reigns in winning the 3 world titles with {IWGPChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns + GHCChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns + AJPWChampions.filter((champ) => champ.Champion === tripleChampionWithMostWorldTitleReigns)[0].NumOfReigns}.</p>
            <div className="flex scroll phone:w-[325px] overflow-x-auto phone:mb-4">
                <table className="border border-black border-solid border-collapse text-center my-6 font-worksans max-w-[700px] min-w-[550px] phone:text-sm phone:mt-4 phone:mb-1">
                    <caption className="font-bold">Legend</caption>
                    <tbody>
                        <tr>
                            <th className="bg-[#cfcfcf] border border-black border-solid border-collapse py-1.5">IWGP Champion Date</th>
                            <td className="border border-black border-solid border-collapse py-1.5">Date on which the specific champion won the IWGP &#40;World&#41; Heavyweight Championship</td>
                        </tr>
                        <tr>
                            <th className="bg-[#cfcfcf] border border-black border-solid border-collapse py-1.5">GHC Champion Date</th>
                            <td className="border border-black border-solid border-collapse py-1.5">Date on which the specific champion won the GHC Heavyweight Championship</td>
                        </tr>
                        <tr>
                            <th className="bg-[#cfcfcf] border border-black border-solid border-collapse py-1.5">AJPW Champion Date</th>
                            <td className="border border-black border-solid border-collapse py-1.5">Date on which the specific champion won the Triple Crown Heavyweight Championship</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex scroll phone:w-[325px] overflow-x-auto phone:mb-6">
                <table className="border border-black border-solid border-collapse text-center my-6 font-worksans max-w-[700px] min-w-[550px] phone:text-sm phone:mt-6 phone:mb-1">
                    <thead> 
                        <tr className="bg-[#222225] text-white">
                            <th className="border border-black border-solid border-collapse py-2">Champion</th>
                            <th className="border border-black border-solid border-collapse py-2">IWGP Champion Date</th>
                            <th className="border border-black border-solid border-collapse py-2">GHC Champion Date</th>
                            <th className="border border-black border-solid border-collapse py-2">AJPW Champion Date</th>
                        </tr> 
                    </thead>
                    <tbody>
                    {tripleWorldChampions.map((champ, index) => {
                            return (
                                <tr key={index}>
                                    <td className="border border-black border-solid border-collapse py-1.5">{champ.Champion}</td>
                                    <td className="border border-black border-solid border-collapse py-1.5">{champ.IWGPChampDate.slice(0, 10)}</td>
                                    <td className="border border-black border-solid border-collapse py-1.5">{champ.GHCChampDate.slice(0, 10)}</td>
                                    <td className="border border-black border-solid border-collapse py-1.5">{champ.AJPWChampDate.slice(0, 10)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );

    return section;
}