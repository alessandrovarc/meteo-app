
import "../styles/DaysCardCollections.css";
import DayCard from "./DayCard";


function DaysCardCollections ({weather}) {

    let hours = Array.from(Array(24).keys())

    return(
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 flex-nowrap mw-100 overflow-auto py-3 days-card-collection-container">
            {hours.map((item)=>{
            return(
                <DayCard hour={item} weather={weather}/>
            )
            })}
        </div>
    )
}
export default DaysCardCollections