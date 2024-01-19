import React from "react";
import styles, { layout } from "@/styles/style";
import Image from "next/image";
import { labelCover } from "@public/assets";
import MediaCity from "@public/assets/MedicityLogo.svg";

const Clients: React.FC<{ clients: Array<any> }> = ({ clients }: { clients: any }) => {
  return (
    <section id="features" className={`${styles.flexCenter} flex-wrap w-full py-20 `}>
      <div id="clients" className={`${layout.sectionInfo} flex-wrap w-full py-20`}>
        <h2 className={`${styles.heading2} text-center `}>{clients?.title}</h2>
      </div>

      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients?.clients?.map((client: any) => (
          <div
            key={client?.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-x-[120px]`}
          >
            <Image src={labelCover} alt="discount" className="sm:w-[350px] w-[60%] absolute" />

            <Image
              src={MediaCity}
              alt="client"
              // width={150}
              // height={100}
              className="sm:w-[150px] w-[30%] object-contain hover:-translate-y-2 cursor-pointer transition-all ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
