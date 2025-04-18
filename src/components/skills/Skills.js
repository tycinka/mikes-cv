import SkillBox from "../skillBox/SkillBox";
import db from "../../assets/db.svg";
import gear from "../../assets/gear.svg";
import power from "../../assets/power.svg";
import "./styles.css";

const Skills = () => {
    return (
        <section className="section-wrapper">
            <div>
                <h2>The Skills that Shape Me!</h2>
            </div>
            <div className="skill-wrapper">
                <SkillBox title="PHP / Ruby"
                    content="Learning Ruby on Rails to expand my backend skills, with prior experience in Nette.
                    Exploring concepts like clean architecture, API design, and web application structure as I
                    gradually build confidence and understanding in backend development."
                    icon={gear}
                    theme="coral"
                />
                <SkillBox title="SQL & Python Rat"
                    content="Working with relational databases like PostgreSQL and MySQL in personal and learning
                    projects to handle structured data. Also learning to write Python data pipelines to process and
                    move data efficiently as part of backend and data-focused workflows."
                    icon={db}
                    theme="white"
                />
                <SkillBox title="Capabilities"
                    content="Motivated by learning and steady growth, with a thoughtful approach to solving problems.
                     I enjoy exploring new technologies and improving over time, supported by analytical thinking and
                     a genuine interest in how things work behind the scenes."
                    icon={power}
                    theme="white"
                />
            </div>
        </section>
    );
}

export default Skills;