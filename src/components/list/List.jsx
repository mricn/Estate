import Card from "../card/Card";
import listData from "../../components/lib/dummydata";
import "./list.scss";
export default function List() {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
