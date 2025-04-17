import SkillBox from "../skillBox/SkillBox";
import db from "../../assets/db.svg";
import gear from "../../assets/gear.svg";
import power from "../../assets/power.svg";
import "./styles.css";

const Skills = () => {
    return (
        <section className="section-wrapper">
            <div>
                <h2>The Skills that Create Me!</h2>
            </div>
            <div className="skill-wrapper">
                <SkillBox title="BE Stack"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque sagittis, neque eu finibus blandit, leo nisi convallis tortor, non dapibus est nunc sodales est. Sed."
                    icon={gear}
                    theme="coral"
                />
                <SkillBox title="SQL Rat"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque sagittis, neque eu finibus blandit, leo nisi convallis tortor, non dapibus est nunc sodales est. Sed."
                    icon={db}
                    theme="white"
                />
                <SkillBox title="Capabilities"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque sagittis, neque eu finibus blandit, leo nisi convallis tortor, non dapibus est nunc sodales est. Sed."
                    icon={power}
                    theme="white"
                />
            </div>
        </section>
    );
}

export default Skills;