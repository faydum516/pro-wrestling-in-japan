// Adding images
import Image from 'next/image';

// Upcoming//Ongoing Wrestling Tournaments
import G1Climax33 from './tournament_images/g1climax33.jpg';
import N1Victory2023 from './tournament_images/n1victory2023.jpg';
import OwenHartCup2023 from './tournament_images/owenhartfoundationcup2023.jpg';

// Past Wrestling Tournaments
import BOSJ30 from './tournament_images/BOSJ30.jpg';
import ChampionCarnival2023 from './tournament_images/ChampionCarnival2023.jpg';
import NewJapanCup2023 from './tournament_images/New-Japan-Cup-2023.jpg';

// import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col min-h-screen px-6 mx-auto font-poppins">
      <section className="w-[56rem] py-6 phone:w-[325px]">
        <h1 className="text-xl phone:text-lg">Upcoming/Ongoing Wrestling Tournaments</h1>
        <hr className="border-[#222225]" />
        <div className="w-[56rem] flex gap-[20px] overflow-x-auto scroll py-6 phone:w-[325px]">
          <figure>
            <Image     
              src={G1Climax33}
              width={0}
              height={0}
              className="w-[400px] h-[225px] object-cover phone:w-[300px] phone:h-[168.75px]"
              alt="G1 Climax 33"
              priority
            /> 
            <figcaption className="text-center w-[400px] phone:w-[300px] phone:text-sm">G1 Climax 33 is underway</figcaption>
          </figure>
          <figure>
            <Image     
              src={N1Victory2023}
              width={0}
              height={0}
              className="w-[400px] h-[225px] object-cover phone:w-[300px] phone:h-[168.75px]"
              alt="N1 Victory 2023"
              priority
            /> 
            <figcaption className="text-center w-[400px] phone:w-[300px] phone:text-sm">N1 Victory 2023 starts on August 6th</figcaption>
          </figure>
        </div>
      </section>
      <section className="w-[56rem] py-6 phone:w-[325px]">
        <h1 className="text-xl phone:text-lg">Past Wrestling Tournaments</h1>
        <hr className="border-[#222225]" />
        <div className="w-[56rem] flex gap-[20px] overflow-x-auto scroll py-6 phone:w-[325px]">          
          <figure>
            <Image     
              src={OwenHartCup2023}
              width={0}
              height={0}
              className="w-[400px] h-[225px] object-cover phone:w-[300px] phone:h-[168.75px]"
              alt="Owen Hart Foundation Cup 2023"
              priority
            /> 
            <figcaption className="text-center w-[400px] phone:w-[300px] phone:text-sm">Ricky Starks &amp; Willow Nightingale are the winners of the men&apos;s and women&apos;s tournaments respectively.</figcaption>
          </figure>
          <figure>
            <Image     
              src={BOSJ30}
              width={0}
              height={0}
              className="w-[400px] h-[225px] object-cover phone:w-[300px] phone:h-[168.75px]"
              alt="Best of the Super Juniors 30"
              priority
            /> 
            <figcaption className="text-center w-[400px] phone:w-[300px] phone:text-sm">Master Wato is the winner of the BOSJ 30</figcaption>
          </figure>          
          <figure>
            <Image     
              src={ChampionCarnival2023}
              width={0}
              height={0}
              className="w-[400px] h-[225px] object-cover phone:w-[300px] phone:h-[168.75px]"
              alt="Champion Carnival 2023"
              priority
            /> 
            <figcaption className="text-center w-[400px] phone:w-[300px] phone:text-sm">Shotaro Ashino is the winner of the Champion Carnival 2023</figcaption>
          </figure>
          <figure>
            <Image     
              src={NewJapanCup2023}
              width={0}
              height={0}
              className="w-[400px] h-[225px] object-cover phone:w-[300px] phone:h-[168.75px]"
              alt="New Japan Cup 2023"
              priority
            /> 
            <figcaption className="text-center w-[400px] phone:w-[300px] phone:text-sm">Sanada is the winner of the New Japan Cup 2023</figcaption>
          </figure>

        </div>
      </section>
    </main>
  )
}
