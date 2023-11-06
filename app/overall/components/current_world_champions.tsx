import getAJPWChampions from '../../ajpw/lib/triple_crown_heavyweight_champions/getAllChampionsByReign';
import getIWGPChampions from '../../njpw/lib/iwgp_world_heavyweight_champions/getAllChampionsByReign';
import getGHCChampions from '../../pro_wrestling_noah/lib/ghc_heavyweight_champions/getAllChampionsByReign';

// Adding images
import Image from 'next/image';
import SANADA from '../current_champion_images/SANADA.jpg';
import JakeLee from '../current_champion_images/Jake_Lee.jpg';
import YumaAoyagi from '../current_champion_images/Yuma_Aoyagi.jpg';

export default async function CurrentWorldChampions() {

    const IWGPChampionsData: Promise<Champion[]> = getIWGPChampions();
    const GHCChampionsData: Promise<Champion[]> = getGHCChampions();
    const AJPWChampionsData: Promise<Champion[]> = getAJPWChampions();

    const [IWGPChampions, GHCChampions, AJPWChampions] = await Promise.all([IWGPChampionsData, GHCChampionsData, AJPWChampionsData]);

    const section = (
        <section className="flex justify-center items-center flex-col pb-6">
            <h2 className="w-4/5 text-xl border-b border-solid border-[#222225] phone:text-lg">Current Champions</h2>
            <p className="w-4/5 py-4 phone:text-sm">The current world champions hailing from New Japan, Noah, and All Japan can rightfully claim to be the leading stars in Japan, earning their place among the esteemed legends of the wrestling industry who have held world championship titles.</p>       
            <div className="w-4/5 flex justify-between phone:flex-col phone:items-center phone:gap-y-[20px]">
                <figure>
                    <Image     
                        src={SANADA}
                        width={0}
                        height={0}
                        className="w-[300px] h-[200px] object-cover phone:w-[198px] phone:h-[133px]"
                        alt="SANADA"
                        priority
                    /> 
                    <figcaption className="text-center w-[300px] phone:w-[198px] phone:text-sm">IWGP World Heavyweight Champion {IWGPChampions[IWGPChampions.length - 1].Champion}</figcaption>
                </figure>
                <figure>
                    <Image     
                        src={JakeLee}
                        width={0}
                        height={0}
                        className="w-[300px] h-[200px] object-cover phone:w-[198px] phone:h-[133px]"
                        alt="Jake Lee"
                        priority
                    /> 
                    <figcaption className="text-center w-[300px] phone:w-[198px] phone:text-sm">GHC Heavyweight Champion {GHCChampions[GHCChampions.length - 1].Champion}</figcaption>
                </figure>
                <figure>
                    <Image     
                        src={YumaAoyagi}
                        width={0}
                        height={0}
                        className="w-[300px] h-[200px] object-cover phone:w-[198px] phone:h-[133px]"
                        alt="Yuma Aoyagi"
                        priority
                    /> 
                    <figcaption className="text-center w-[300px] phone:w-[198px] phone:text-sm">Triple Crown Heavyweight Champion {AJPWChampions[AJPWChampions.length - 1].Champion}</figcaption>
                </figure>
            </div>
        </section>

    );

    return section;
}