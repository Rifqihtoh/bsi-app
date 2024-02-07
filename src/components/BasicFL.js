import Card2 from "./Card2";
import { ScrollView, Text, FlatList, View } from "react-native";

const data = [
  {
    head: "COMPASS",
    desc: "Rising Freedom Gundam",
    url: "https://en.gundam.info/about-gundam/series-pages/seedfreedom/gseedfreedom/en/mechanical/2023/11/mecha_1-2_2.png",
  },
  {
    head: "COMPASS",
    desc: "Mighty Strike Freedom Gundam",
    url: "https://en.gundam.info/about-gundam/series-pages/seedfreedom/gseedfreedom/en/product/2024/01/hg_mighty_strike_freedom_gundam_01m_en.jpeg",
  },
  {
    head: "COMPASS",
    desc: "Immortal Justice Gundam",
    url: "https://en.gundam.info/about-gundam/series-pages/seedfreedom/gseedfreedom/en/mechanical/2023/11/mecha_2-2_1.png",
  },
  {
    head: "COMPASS",
    desc: "Infinite Justice Gundam Type-II",
    url: "https://www.gundamplanet.com/media/catalog/product/cache/a7d12aefadcc79b41c0fed72ccdcd80e/h/g/hg_infinite_justice_gundam_type-gp.jpg",
  },
  {
    head: "COMPASS",
    desc: "Force Impulse Gundam Spec-II",
    url: "https://en.gundam.info/about-gundam/series-pages/seedfreedom/gseedfreedom/en/mechanical/2023/11/mecha_3.png",
  },
  {
    head: "COMPASS",
    desc: "Destiny Gundam Type-II",
    url: "https://i.namu.wiki/i/GtxhhdCu9o6JFIT7JFPeRZFG_MdnzbiSX6D9nhvDhLveibfKzHYzCj7eDoObWupzdJtbjT_SL7YZ1iCXJUMwGg.webp",
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
const BasicFL = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Card2 head={item.head} desc={item.desc} url={item.url} />
            </View>
          )}
        />
      </View>
    </>
  );
};

export default BasicFL;
