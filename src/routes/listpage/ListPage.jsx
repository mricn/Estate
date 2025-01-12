import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import listData from "../../components/lib/dummydata";
import Map from "../../components/map/Map";
import "./listPage.scss";

export default function ListPage() {
  const data = listData;
  return (
    <div className="listpage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}
