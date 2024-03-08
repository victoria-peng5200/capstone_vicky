import Card1 from "../ui/dashborad/card/card1";
import Reportlist from "../ui/dashborad/reportlist/reportlist";
import styles from "../ui/dashborad/dashboard.module.css";
import Card2 from "../ui/dashborad/card/card2";
import Card3 from "../ui/dashborad/card/card3";
import Chart from "../ui/dashborad/chart/chart";
import MasterReport from "../ui/dashborad/reportlist/masterReport"


const Dashborad = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <MasterReport />
        <Reportlist />
        {/* <Chart /> */}
      </div>
    </div>
  );
};

export default Dashborad;
