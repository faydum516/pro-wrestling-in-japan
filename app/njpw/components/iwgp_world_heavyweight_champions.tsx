// HTML Parser
import parse from 'html-react-parser';

// Retrieving data from MySQL database server using Fetch API
import getAllChampions from "../lib/iwgp_world_heavyweight_champions/getAllChampions";
import getAllChampionsByReign from "../lib/iwgp_world_heavyweight_champions/getAllChampionsByReign";
import getLongestReigningChampion from "../lib/iwgp_world_heavyweight_champions/getLongestReigningChampion";
import getChampionWithMostReigns from "../lib/iwgp_world_heavyweight_champions/getChampionWithMostReigns";
import getYoungestChampion from '../lib/iwgp_world_heavyweight_champions/getYoungestChampion';
import getOldestChampion from '../lib/iwgp_world_heavyweight_champions/getOldestChampion';
import getChampionWithMostDefenses from '../lib/iwgp_world_heavyweight_champions/getChampionWithMostDefenses';
import getChampionWithMostCombinedDefenses from '../lib/iwgp_world_heavyweight_champions/getChampionWithMostCombinedDefenses';

// Adding images
import Image from 'next/image';
import belt from '../img/iwgp_world_heavyweight_championship.jpg';

export default async function IWGPWorldHeavyweightChampions() {
    const championsData: Promise<Champion[]> = getAllChampions()
    const championsByReignData: Promise<ChampionByReign[]> = getAllChampionsByReign();
    const longestReigningChampionData: Promise<LongestReigningChampion[]> = getLongestReigningChampion();
    const championWithMostReignsData: Promise<ChampionWithMostReigns[]> = getChampionWithMostReigns();
    const youngestChampionData: Promise<YoungestChampion[]> = getYoungestChampion();
    const oldestChampionData: Promise<OldestChampion[]> = getOldestChampion();
    const championWithMostDefensesData: Promise<ChampionWithMostDefenses[]> = getChampionWithMostDefenses();
    const championWithMostCombinedDefensesData: Promise<ChampionWithMostCombinedDefenses[]> = getChampionWithMostCombinedDefenses();

    const [champions, championsByReign, 
        longestReigningChampion, championWithMostReigns, 
        youngestChampion, oldestChampion, championWithMostDefenses, 
        championWithMostCombinedDefenses] = await Promise.all([
        championsData, championsByReignData, longestReigningChampionData, 
        championWithMostReignsData, youngestChampionData, oldestChampionData, 
        championWithMostDefensesData, championWithMostCombinedDefensesData]);

    // Championship Belt
    const championship = "IWGP World Heavyweight Championship";

    // Current champion
    const currentChampion =  championsByReign[championsByReign.length - 1].Champion !== "Vacated" ?
        `${championsByReign[championsByReign.length - 1].Champion} is the current champion.` : 
        "Nobody is holding the championship because it has been vacated";

    // Youngest champion
    const youngestAge = `${youngestChampion[0].AgeInYears} years${youngestChampion[0].AddedMonths > 1 && youngestChampion[0].AddedDays > 1 ? `, ${youngestChampion[0].AddedMonths} months and ${youngestChampion[0].AddedDays} days` : 
    youngestChampion[0].AddedMonths > 1 && youngestChampion[0].AddedDays === 1 ? `, ${youngestChampion[0].AddedMonths} months and ${youngestChampion[0].AddedDays} day` :
    youngestChampion[0].AddedMonths === 1 && youngestChampion[0].AddedDays > 1 ? `, ${youngestChampion[0].AddedMonths} month and ${youngestChampion[0].AddedDays} days` :
    youngestChampion[0].AddedMonths === 1 && youngestChampion[0].AddedDays === 1 ? `, ${youngestChampion[0].AddedMonths} month and ${youngestChampion[0].AddedDays} day` :
    youngestChampion[0].AddedMonths > 1 ? ` and ${youngestChampion[0].AddedMonths} months` : 
    youngestChampion[0].AddedMonths === 1 ? ` and ${youngestChampion[0].AddedMonths} month` :
    youngestChampion[0].AddedDays > 1 ? ` and ${youngestChampion[0].AddedMonths} days` :
    youngestChampion[0].AddedDays === 1 ? ` and ${youngestChampion[0].AddedDays} day` : ""}`;

    // Oldest champion
    const oldestAge = `${oldestChampion[0].AgeInYears} years${oldestChampion[0].AddedMonths > 1 && oldestChampion[0].AddedDays > 1 ? `, ${oldestChampion[0].AddedMonths} months and ${oldestChampion[0].AddedDays} days` : 
    oldestChampion[0].AddedMonths > 1 && oldestChampion[0].AddedDays === 1 ? `, ${oldestChampion[0].AddedMonths} months and ${oldestChampion[0].AddedDays} day` :
    oldestChampion[0].AddedMonths === 1 && oldestChampion[0].AddedDays > 1 ? `, ${oldestChampion[0].AddedMonths} month and ${oldestChampion[0].AddedDays} days` :
    oldestChampion[0].AddedMonths === 1 && oldestChampion[0].AddedDays === 1 ? `, ${oldestChampion[0].AddedMonths} month and ${oldestChampion[0].AddedDays} day` :
    oldestChampion[0].AddedMonths > 1 ? ` and ${oldestChampion[0].AddedMonths} months` : 
    oldestChampion[0].AddedMonths === 1 ? ` and ${oldestChampion[0].AddedMonths} month` :
    oldestChampion[0].AddedDays > 1 ? ` and ${oldestChampion[0].AddedMonths} days` :
    oldestChampion[0].AddedDays === 1 ? ` and ${oldestChampion[0].AddedDays} day` : ""}`;

    const section = (
        <section className="flex justify-center items-center flex-col">
            <div className="mb-6 flex justify-center items-center flex-col">
                <h3 className="w-4/5 text-xl border-b border-[#222225] phone:text-lg">{championship}</h3>    
                <p className="w-4/5 pt-3 pb-4 phone:text-sm">
                There have been {championsByReign.filter((champ) => champ.Champion !== "Vacated" && champ.Champion !== "Unified").length} championship reigns so far with {champions.length} wrestlers 
                in total having won the title. {currentChampion} {longestReigningChampion[0].Champion} is currently the longest reigning champion at {longestReigningChampion[0].LongestDays} days, but {champions[0].Champion} is currently the longest combined reigning champion at {champions[0].CombinedDays} days and also holds the records for most reigns with {championWithMostReigns[0].MostReigns}, most successful title defenses at {championWithMostDefenses[0].Defenses}, and most combined title defenses at {championWithMostCombinedDefenses[0].SumOfDefenses}. {youngestChampion[0].Champion} is currently the youngest champion at the age of {youngestAge}, while {oldestChampion[0].Champion} is currently the oldest champion at {oldestAge}.
                </p> 
                <figure>
                    <Image     
                        src={belt}
                        width={0}
                        height={0}
                        alt={championship}
                        className="w-[400px] h-auto phone:w-[300px]"
                        priority
                    />  
                    <figcaption className="text-center w-[400px] phone:text-sm phone:w-[300px]">{championship}</figcaption>
                </figure> 
            </div>
            <div className="mb-6">
                <h4 className="text-lg mb-3 phone:text-base border-[#222225] border-b">Reigns</h4>
                <div className="flex scroll phone:w-[325px] overflow-x-auto">
                    <table className="border border-black border-solid border-collapse text-center font-worksans min-w-[450px] mb-1">
                        <thead>
                            <tr className="bg-[#222225] text-white phone:text-sm">
                                <th className="border border-black border-solid border-collapse w-14 py-2">No.</th>
                                <th className="border border-black border-solid border-collapse w-44 py-2">Champion</th>
                                <th className="border border-black border-solid border-collapse w-36 py-2">Date</th>
                                <th className="border border-black border-solid border-collapse w-24 py-2">Reign</th>
                                <th className="border border-black border-solid border-collapse w-32 py-2">No. of Days</th>
                                <th className="border border-black border-solid border-collapse w-32 py-2">Defenses</th>
                            </tr> 
                        </thead> 
                        <tbody>          
                            {championsByReign.map((champ, index) => {
                                return (
                                    <tr key={index} className={champ.Num === null ? 'bg-slate-200 phone:text-xs' : 'bg-inherit phone:text-xs'}>
                                        <td className="border border-black border-solid border-collapse py-1.5">{champ.Num === null ? parse("&mdash;") : champ.Num}</td>
                                        <td className="border border-black border-solid border-collapse py-1.5">{champ.Champion}</td>
                                        <td className="border border-black border-solid border-collapse py-1.5">{champ.DateOfTitleWon.slice(0, 10)}</td>
                                        <td className="border border-black border-solid border-collapse py-1.5">{champ.Reign === null ? parse("&mdash;") : champ.Reign}</td>
                                        <td className="border border-black border-solid border-collapse py-1.5">{champ.NumOfDays === null ? parse("&mdash;") : champ.NumOfDays}</td>
                                        <td className="border border-black border-solid border-collapse py-1.5">{champ.Defenses === null ? parse("&mdash;") : champ.Defenses}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mb-6">
                <h4 className="text-lg mb-3 phone:text-base border-[#222225] border-b">Combined Reigns</h4>
                <div className="flex scroll phone:w-[325px] overflow-x-auto">
                    <table className="border border-black border-solid border-collapse text-center font-worksans min-w-[450px] mb-1">
                        <thead>
                            <tr className="bg-[#222225] text-white phone:text-sm">
                                <th className="border border-black border-solid border-collapse w-14 py-2">No.</th>
                                <th className="border border-black border-solid border-collapse w-44 py-2">Champion</th>
                                <th className="border border-black border-solid border-collapse w-32 py-2">No. of Reigns</th>
                                <th className="border border-black border-solid border-collapse w-32 py-2">Combined Defenses</th>
                                <th className="border border-black border-solid border-collapse w-36 py-2">Combined Days</th>
                            </tr>
                        </thead>
                        <tbody>            
                            {champions.map(champ => {
                                return (
                                    <tr key={champ.Champion} className="phone:text-xs">
                                        <td className="border border-black border-solid border-collapse py-1.5">{champ.Position}</td>
                                        <td className="border border-black border-solid border-collapse py-1.5">{champ.Champion}</td>
                                        <td className="border border-black border-solid border-collapse py-1.5">{champ.NumOfReigns}</td>
                                        <td className="border border-black border-solid border-collapse py-1.5">{champ.CombinedDefenses}</td>
                                        <td className="border border-black border-solid border-collapse py-1.5">{champ.CombinedDays}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <p className="w-4/5 pt-3 pb-4 phone:text-sm">Since there are only {champions.length} wrestlers having won the IWGP World Heavyweight Championship, we cannot conduct an analysis to determine the number of wrestlers who won the world title for the first time in each respective age group by decade and the total number of IWGP World Heavyweight Champions must be over 10.</p>
        </section>
    );

    return section;

}