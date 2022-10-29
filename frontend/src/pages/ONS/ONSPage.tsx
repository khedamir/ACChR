import Content from "../../components/Content/Content";
import styles from "./ONSPage.module.scss";
import Map from "../../components/Map/Map";
import { DisctrictsProvider } from "../../context/districtContext";


const ONSPage: React.FC = () => {
  return (
    <DisctrictsProvider>
        <Content>
            <div>
                <div className={styles.title}>
                <h1>Объекты незавершенного строительства ЧР </h1>
                </div>
                <Map />
            </div>
        </Content>
    </DisctrictsProvider>
  );
};

export default ONSPage;
