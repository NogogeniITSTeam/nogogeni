import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { DivisionItem } from "./DivisionItem";

type Department = "managers" | "technical" | "non-technical" | "finance";
interface Division {
  name: string;
  teams: {
    name: string;
    position: string;
    imgPath: string;
    linkedInURL: string;
  }[];
}

const departments = new Map<Department, Division[]>();
departments.set("managers", [
  {
    name: "Managers",
    teams: [
      {
        name: "Safira Dewi Agustina",
        position: "Non-Technical Manager",
        imgPath: "/our-team/safira.png",
        linkedInURL: "https://www.linkedin.com/in/safiradewia",
      },
      {
        name: "Aji Yusuf Saputra Setiawan",
        position: "Technical Manager",
        imgPath: "/our-team/aji.png",
        linkedInURL:
          "https://www.linkedin.com/in/aji-yusuf-saputra-setiawan-a455a2367",
      },
      {
        name: "Saputra Ardyan Syah",
        position: "General Manager",
        imgPath: "/our-team/saputra.png",
        linkedInURL:
          "https://www.linkedin.com/in/saputra-ardyan-syah-6246a4252",
      },
    ],
  },
]);

departments.set("technical", [
  {
    name: "Engine & Drive Train",
    teams: [
      {
        name: "Roland Khusnu Winada",
        position: "Head of Division",
        imgPath: "/our-team/roland.png",
        linkedInURL: "https://www.linkedin.com/in/roland-khusnu-809952379",
      },
      {
        name: "Muhammad Rahadi Rizky Maulana",
        position: "Expert Staff",
        imgPath: "/our-team/rahadi.png",
        linkedInURL:
          "https://www.linkedin.com/in/m-rahadi-rizky-maulana-404328282",
      },
      {
        name: "Bagas Wirahadi Santoso",
        position: "Expert Staff",
        imgPath: "/our-team/bagas.png",
        linkedInURL:
          "https://www.linkedin.com/in/bagas-wirahadi-santoso-12a55b332",
      },
      {
        name: "Devin Bayu Indika Putra",
        position: "Staff",
        imgPath: "/our-team/devin.png",
        linkedInURL: "https://id.linkedin.com/in/devinbayuindikaputrab",
      },
      {
        name: "Muhammad Rizki Mauludin",
        position: "Staff",
        imgPath: "/our-team/rizki.png",
        linkedInURL: "https://www.linkedin.com/in/rizki-mauludin-02941a326",
      },
    ],
  },
  {
    name: "Electrical & Propulsion System",
    teams: [
      {
        name: "Anung Bagus Prasetyo",
        position: "Head of Division",
        imgPath: "/our-team/anung.png",
        linkedInURL:
          "https://id.linkedin.com/in/anung-bagus-prasetyo-802a64255",
      },
      {
        name: "Azrul Aiman",
        position: "Expert Staff",
        imgPath: "/our-team/azrul.png",
        linkedInURL: "https://id.linkedin.com/in/azrul-aiman-68255824a",
      },
      {
        name: "Muhammad Raihan Fathoni",
        position: "Expert Staff",
        imgPath: "/our-team/raihan.png",
        linkedInURL: "https://id.linkedin.com/in/raihan-fathoni-4bab56205",
      },
      {
        name: "Dionisius Davis",
        position: "Staff",
        imgPath: "/our-team/dionisius.png",
        linkedInURL: "https://id.linkedin.com/in/dionisiusdavis",
      },
      {
        name: "Cahyo Okto Risfian",
        position: "Staff",
        imgPath: "/our-team/cahyo.png",
        linkedInURL:
          "https://id.linkedin.com/in/cahyo-okto-okto-risfian-982471295",
      },
      {
        name: "Rayhana Zul Rahman Azzam",
        position: "Staff",
        imgPath: "/our-team/rayhana.png",
        linkedInURL:
          "http://linkedin.com/in/rayhana-zul-rahman-azzam-6bb266323",
      },
    ],
  },
  {
    name: "Body & Frame",
    teams: [
      {
        name: "Rifqi Adikara",
        position: "Head of Division",
        imgPath: "/our-team/rifqi.png",
        linkedInURL: "https://www.linkedin.com/in/rifqiadikara",
      },
      {
        name: "Timothy Alfa Febrianto",
        position: "Expert Staff",
        imgPath: "/our-team/timothy.png",
        linkedInURL: "https://www.linkedin.com/in/timothy-febrianto-89239a28a",
      },
      {
        name: "Mahendra Stia Pamuji",
        position: "Expert Staff",
        imgPath: "/our-team/mahendra.png",
        linkedInURL: "https://www.linkedin.com/in/mahendra-stia-pamuji",
      },
      {
        name: "Andika Bakti Pambudi",
        position: "Staff",
        imgPath: "/our-team/andika.png",
        linkedInURL:
          "https://www.linkedin.com/in/andika-bakti-pambudi-a5a790288",
      },
      {
        name: "Randah Ambarah Kautsar Riski",
        position: "Staff",
        imgPath: "/our-team/randah.png",
        linkedInURL:
          "https://id.linkedin.com/in/randah-ambarah-kautsar-riski-8b7355292",
      },
    ],
  },
  {
    name: "Vehicle Dynamics",
    teams: [
      {
        name: "Muhammad Fery Setiawan",
        position: "Head of Division",
        imgPath: "/our-team/fery.png",
        linkedInURL: "http://www.linkedin.com/in/ferryjambul",
      },
      {
        name: "Yardan Parama Romadhon",
        position: "Expert Staff",
        imgPath: "/our-team/yardan.png",
        linkedInURL: "http://www.linkedin.com/in/yardan-parama",
      },
      {
        name: "Kumara Elno Nayottama",
        position: "Expert Staff",
        imgPath: "/our-team/kumara.png",
        linkedInURL: "http://www.linkedin.com/in/kumara-elno-nayotama2907",
      },
      {
        name: "Hafiz Diandra Pratama",
        position: "Staff",
        imgPath: "/our-team/hafiz.png",
        linkedInURL:
          "https://www.linkedin.com/in/hafiz-diandra-pratama-226637288",
      },
      {
        name: "Zaky Dwi Alfareza",
        position: "Staff",
        imgPath: "/our-team/zaky.png",
        linkedInURL: "http://www.linkedin.com/in/zaky-dwi-09b542277",
      },
      {
        name: "Jeremi Mantovanio Sibarani",
        position: "Staff",
        imgPath: "/our-team/jeremi.png",
        linkedInURL:
          "https://www.linkedin.com/in/jeremi-mantovanio-sibarani-a4b977379",
      },
    ],
  },
]);

departments.set("non-technical", [
  {
    name: "Creative Media",
    teams: [
      {
        name: "Finna Ananda Salsabila",
        position: "Head of Division",
        imgPath: "/our-team/finna.png",
        linkedInURL: "https://www.linkedin.com/in/finna-ananda",
      },
      {
        name: "Tepy Lindia Nanta",
        position: "Expert Staff",
        imgPath: "/our-team/tepy.png",
        linkedInURL: "https://id.linkedin.com/in/tepy-lindia-nanta",
      },
      {
        name: "Putri Amalia Farhana",
        position: "Expert Staff",
        imgPath: "/our-team/putri.png",
        linkedInURL: "http://linkedin.com/in/putrialfr",
      },
      {
        name: "Ahmad Fadad Muafi",
        position: "Staff",
        imgPath: "/our-team/fadad.png",
        linkedInURL: "http://linkedin.com/in/ahmadfadadm",
      },
      {
        name: "Achmad Rafif Aryaputra",
        position: "Staff",
        imgPath: "/our-team/rafif.png",
        linkedInURL: "https://www.linkedin.com/in/rafif-arya-557983326",
      },
      {
        name: "Rajendra Bestian Putra",
        position: "Staff",
        imgPath: "/our-team/rajendra.png",
        linkedInURL: "https://www.linkedin.com/in/rajendra-bestian-putra",
      },
    ],
  },
  {
    name: "Sponsorship & Public Relation",
    teams: [
      {
        name: "Firmansyah Permadi Rastanto",
        position: "Head of Division",
        imgPath: "/our-team/firmansyah.png",
        linkedInURL: "https://www.linkedin.com/in/firmansyahpermadi",
      },
      {
        name: "Bintang TalythaAzrul Aiman",
        position: "Expert Staff",
        imgPath: "/our-team/bintang.png",
        linkedInURL: "https://id.linkedin.com/in/bintang-talytha",
      },
      {
        name: "I Putu Danta D. W.",
        position: "Staff",
        imgPath: "/our-team/danta.png",
        linkedInURL: "https://www.linkedin.com/in/dantadivtya",
      },
      {
        name: "Ahmad Fadhli Abdullah W. U.",
        position: "Staff",
        imgPath: "/our-team/fadhli.png",
        linkedInURL:
          "https://www.linkedin.com/in/ahmad-fadhli-abdullah-warih-utomo-13494728b",
      },
      {
        name: "Duffania Eka Patricia",
        position: "Staff",
        imgPath: "/our-team/duffania.png",
        linkedInURL: "https://www.linkedin.com/in/duffania",
      },
    ],
  },
  {
    name: "Administration",
    teams: [
      {
        name: "Zafia Henggar Prasastya ",
        position: "Head of Division",
        imgPath: "/our-team/zafia.png",
        linkedInURL: "http://linkedin.com/in/zafia-henggar-prasastya-920156282",
      },
      {
        name: "Thania Febriyanti",
        position: "Expert Staff",
        imgPath: "/our-team/thania.png",
        linkedInURL: "http://www.linkedin.com/in/thania-febriyanti-8686221b4",
      },
      {
        name: "Ervika Dwi Yuni Fauzika",
        position: "Staff",
        imgPath: "/our-team/ervika.png",
        linkedInURL:
          "https://www.linkedin.com/in/ervika-dwi-yuni-fauzika-217793276",
      },
      {
        name: "Sheren Nurdiana Sastradiharja",
        position: "Staff",
        imgPath: "/our-team/sheren.png",
        linkedInURL: "http://www.linkedin.com/in/sherennurdianasastradiharja",
      },
    ],
  },
]);

departments.set("finance", [
  {
    name: "Finance",
    teams: [
      {
        name: "Afrah Althafahillah Sukaton",
        position: "Head of Division",
        imgPath: "/our-team/afrah.png",
        linkedInURL: "https://id.linkedin.com/in/afrahalthafahillahs",
      },
      {
        name: "Dita Tya Amanda",
        position: "Staff",
        imgPath: "/our-team/dita.png",
        linkedInURL: "https://id.linkedin.com/in/dita-tya-amanda-b13aab290",
      },
    ],
  },
]);

function DivisionList() {
  const [department, setDepartment] = useState<Department>("managers");

  const selectedDepartment = useMemo(() => {
    return departments.get(department);
  }, [department]);

  return (
    <>
      <section className="relative z-10 flex flex-wrap justify-center items-center gap-6 pt-16 px-8 tablet:px-16 tablet:pt-24 desktop:px-32 desktop:pt-32">
        <Button
          className={`${
            department === "managers"
              ? "bg-nogogeni-white/50"
              : "bg-nogogeni-black"
          } hover:bg-nogogeni-white/50 border border-nogogeni-white w-full max-w-64 text-sm tablet:max-w-48 desktop:text-base`}
          onClick={() => setDepartment("managers")}
        >
          Managers
        </Button>
        <Button
          className={`${
            department === "technical"
              ? "bg-nogogeni-white/50"
              : "bg-nogogeni-black"
          } hover:bg-nogogeni-white/50 border border-nogogeni-white w-full max-w-64 text-sm tablet:max-w-48 desktop:text-base`}
          onClick={() => setDepartment("technical")}
        >
          Technical
        </Button>
        <Button
          className={`${
            department === "non-technical"
              ? "bg-nogogeni-white/50"
              : "bg-nogogeni-black"
          } hover:bg-nogogeni-white/50 border border-nogogeni-white w-full max-w-64 text-sm tablet:max-w-48 desktop:text-base`}
          onClick={() => setDepartment("non-technical")}
        >
          Non-Technical
        </Button>
        <Button
          className={`${
            department === "finance"
              ? "bg-nogogeni-white/50"
              : "bg-nogogeni-black"
          } hover:bg-nogogeni-white/50 border border-nogogeni-white w-full max-w-64 text-sm tablet:max-w-48 desktop:text-base`}
          onClick={() => setDepartment("finance")}
        >
          Finance
        </Button>
      </section>

      {selectedDepartment ? (
        <section className="pt-16 px-8 tablet:px-16 tablet:pt-24 desktop:px-32 desktop:pt-32">
          <div className="w-full mx-auto max-w-7xl">
            {selectedDepartment.map((division) => (
              <DivisionItem key={division.name} division={division} />
            ))}
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export { DivisionList };
export type { Division };
