import { ShelfStore1, LabelCoverUse } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Button from "./Button";
import Image from "next/image";

interface CardDealProps {
  cardDeal: any; 
}

const CardDeal: React.FC<CardDealProps> = ({ cardDeal }) => (
  <section className={layout.section}>
    <div className={`${layout.sectionInfo} items-center`}>
      <h2 className={`${styles.heading2} text-center`}>{cardDeal.title}</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}>
      
        {cardDeal.desc1}
      </p>

      <ul className={`${styles.paragraph} max-w-[470px] mt-5 list-disc pl-8`}>
        {cardDeal?.links?.map((v: any, i: any) => (
          <li key={i}>{v.name}</li>
        ))}
      </ul>

      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}>
       
        {cardDeal.desc2}
      </p>
    </div>

    <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
      <Image
        src={LabelCoverUse}
        alt="shelfStore"
        className="w-[80%] h-[40%] absolute z-5  rounded"
      />
    </div>
  </section>
);

export default CardDeal;
