import React, { Ref, useCallback } from "react";
import styles from "./Map.module.scss";
import {
    iConstructions,
    useDistrictsContext,
} from "../../context/districtContext";
import { Map, Polygon, YMaps } from "react-yandex-maps";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

const MyMap: React.FC = (props) => {
    const districtsContext = useDistrictsContext();

    const mapRef = React.useRef<any>(null);

    const CHRstatistics = {
        name: "Чеченская республика",
        cost: districtsContext.districts.reduce(
            (a, b) => a + b.constructions.reduce((a, b) => a + b.cost, 0),
            0
        ),
        count: districtsContext.districts.reduce(
            (a, b) => a + b.constructions.reduce((a, b) => a + b.count, 0),
            0
        ),
    } as iConstructions;

    const setMapRef = useCallback(
        (instance: Ref<any>) => {
            mapRef.current = instance;
            if (mapRef && mapRef.current && mapRef.current.behaviors !== null) {
                mapRef.current.behaviors.disable("scrollZoom");
                mapRef.current.behaviors.disable("drag");
                mapRef.current.behaviors.disable("dblClickZoom");
                mapRef.current.behaviors.disable("multiTouch");
                mapRef.current.behaviors.disable("rightMouseButtonMagnifier");
                mapRef.current.behaviors.disable("leftMouseButtonMagnifier");
            }
        },
        [mapRef]
    );

    return (
        <div className={cx(styles.container)}>
            <div className={cx(styles.map)}>
                <YMaps>
                    <Map
                        instanceRef={(myMap: any) => {
                            setMapRef(myMap);
                        }}
                        width={600}
                        height={500}
                        defaultState={{ center: [43.3245415, 45.6619813], zoom: 8 }}
                        modules={["geoObject.addon.hint"]}
                    >
                        <Polygon
                            geometry={[
                                [
                                    [45, 42],
                                    [45, 49],
                                    [41, 49],
                                    [41, 42],
                                ],
                            ]}
                            options={{
                                fillColor: "#FFFFFF",
                                fillOpacity: 1,
                            }}
                            onClick={() => {
                                districtsContext.setActiveDistrict(undefined);
                            }}
                        />
                        {districtsContext.districts.map((x) => (
                            <Polygon
                                key={x.name}
                                options={{
                                    fillColor:
                                        x == districtsContext.activeDisctrict ? "#BBBBBB" : "#444444",
                                    fillOpacity: 0.5,
                                    strokeWidth: 4,
                                    strokeColor: "#11CC11",
                                }}
                                properties={{
                                    // hintContent: x.name,
                                    hintContent: `<div style= 'background-color: #fff; padding: 2px 10px' >${x.name}<div/>`,
                                }}
                                onClick={() => {
                                    districtsContext.setActiveDistrict(x);
                                }}
                                geometry={x.coordinates}
                            />
                        ))}
                    </Map>
                </YMaps>
            </div>
            <div className={cx(styles.contInfo)}>
                <div>
                    <div>
                        <h2 className={cx(styles.title)}>
                            {districtsContext.activeDisctrict?.name ?? CHRstatistics.name}
                        </h2>
                    </div>
                    <ul>
                        <li>
                            Всего вложений:{" "}
                            {(
                                districtsContext.activeDisctrict?.constructions.reduce(
                                    (a, b) => a + b.cost,
                                    0
                                ) ?? CHRstatistics.cost
                            ).toFixed(2)}{" "}
                            ₽
                        </li>
                        <li>
                            Всего недостроенных объектов:{" "}
                            {districtsContext.activeDisctrict?.constructions.reduce(
                                (a, b) => a + b.count,
                                0
                            ) ?? CHRstatistics.count}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyMap;
