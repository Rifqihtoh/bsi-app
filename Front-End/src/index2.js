import { View, Text } from "react-native";
// import RowLayout from "./components/RowLayout";
// import ColumnLayout from "./components/ColumnLayout";
// import BasicScrollView from "./components/BasicScrollview";
import BasicFlatList from "./components/BasicFlatList";

export default function AppSrc2() {
  const persons = [
    {
      head: "COMPASS",
      desc: "Rising Freedom Gundam",
      url: "https://en.gundam.info/about-gundam/series-pages/seedfreedom/gseedfreedom/en/mechanical/2023/11/mecha_1-2_2.png",
    },
    {
      head: "COMPASS",
      desc: "Mighty Strike Freedom Gundam",
      url: "https://static.wikia.nocookie.net/gundam/images/2/2a/Mighty_Strike_Freedom_Gundam_%28Front%29_01.png/revision/latest?cb=20240129040537",
    },
    {
      head: "COMPASS",
      desc: "Immortal Justice Gundam",
      url: "https://en.gundam.info/about-gundam/series-pages/seedfreedom/gseedfreedom/en/mechanical/2023/11/mecha_2-2_1.png",
    },
    {
      head: "COMPASS",
      desc: "Infinite Justice Gundam Type-II",
      url: "https://static.wikia.nocookie.net/gundam/images/f/f8/Infinite_Justice_Type_II.png/revision/latest/thumbnail/width/360/height/360?cb=20240129122920",
    },
    {
      head: "COMPASS",
      desc: "Force Impulse Gundam Spec-II",
      url: "https://en.gundam.info/about-gundam/series-pages/seedfreedom/gseedfreedom/en/mechanical/2023/11/mecha_3.png",
    },
    {
      head: "COMPASS",
      desc: "Destiny Gundam Type-II",
      url: "https://static.wikia.nocookie.net/gundam/images/3/30/Destiny_Spec_II.png/revision/latest/thumbnail/width/360/height/360?cb=20240129041230",
    },
    {
      head: "COMPASS",
      desc: "GELGOOG Menace",
      url: "https://en.gundam.info/about-gundam/series-pages/seedfreedom/gseedfreedom/en/mechanical/2023/11/mecha_4-2_1.png",
    },
    {
      head: "COMPASS",
      desc: "GYAN Strom",
      url: "https://en.gundam.info/about-gundam/series-pages/seedfreedom/gseedfreedom/en/mechanical/2023/11/mecha_5-2_1.png",
    },
    {
      head: "FOUNDATION",
      desc: "Black Knight Squad Shi-ve.A",
      url: "https://en.gundam.info/about-gundam/series-pages/seedfreedom/gseedfreedom/en/mechanical/2023/11/mecha_6_1.png",
    },
    {
      head: "FOUNDATION",
      desc: "Black Knight Squad Rud-ro.A",
      url: "https://en.gundam.info/about-gundam/series-pages/seedfreedom/gseedfreedom/en/mechanical/2023/11/mecha_7_1.png",
    },
    {
      head: "FOUNDATION",
      desc: "Black Knight Squad Rud-ro.A",
      url: "https://en.gundam.info/about-gundam/series-pages/seedfreedom/gseedfreedom/en/mechanical/2023/11/mecha_7_1.png",
    },
  ];
  return (
    <>
      {/* <RowLayout /> */}
      {/* <ColumnLayout /> */}
      {/* <BasicScrollView /> */}
      <BasicFlatList />
    </>
  );
}
