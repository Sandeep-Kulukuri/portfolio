import { AchievementsData } from "../../../Data/AchievementsData";
import Separator from "../../Common/Separator/Separator";
import './achievements.css'
function Achievements() {
    const data = AchievementsData
    return (
        <div className='achievements'>
            <Separator />
            <label className="section-title">Achievements</label>
        <div className="skills-container"></div>
            {data.map((item) => {
                return(
                <div className='skill-section'>
                    <ul>
                        <li>
                        <label style={{fontSize:20, fontWeight: "normal"}} className="skills-section-title">{item.achievement}</label>
                        </li>
                    </ul>
                    
                </div>)
            })}
            
            
            
        </div>
    )
}

export default Achievements
