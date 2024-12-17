import "./Addict_Offline.scss";
import { storeData } from "../store/Data_Store";


export function AddictOfflinePage() {
  return (
    <article id="AddictOfflinePage">
      <img
        src="https://media.11corporation.com/cdn/addict/shopby/store/20240717/store-pc.jpg"
        alt="img"
      />
      {storeData.map((store, index) => (
        <div className="wrap" key={index}>
          <h3>{store.title}</h3>
          {store.locations.map((location, locIndex) => (
            <div key={locIndex}>
              <span>{location.name}</span>
              {location.address && <p>{location.address}</p>}
              {location.phone && <p>{location.phone}</p>}
            </div>
          ))}
        </div>
      ))}
    </article>
  );
}
