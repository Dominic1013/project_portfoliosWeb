import "./personality.scss";

const personalityData = [
  {
    id: "1",
    title: "Skilled in Collaboration",
    desc: "I can accurately understand the methods and directions of cooperation, observe nuances in communication, and propose challenges and solutions.",
    icon: "/aboutPageImg/personalityImg/icons8-cooperation-38-1.png",
  },
  {
    id: "2",
    title: "Process Planning",
    desc: "Through work management tools, I plan work progress, execution directions, and key items such as project timelines.",
    icon: "/aboutPageImg/personalityImg/icons8-schedule-38-1.png",
  },
  {
    id: "3",
    title: "Problem Solving",
    desc: "Starting with problem-solving models, I construct SOPs for solving problems and integrate design thinking to produce solutions.",
    icon: "/aboutPageImg/personalityImg/icons8-light-38.png",
  },
  {
    id: "4",
    title: "Enjoy Interaction",
    desc: "I love dancing and music, enjoy interacting with people, understand society to enhance user experience, and promote personal and emotional growth.",
    icon: "/aboutPageImg/personalityImg/icons8-chat-38.png",
  },
  {
    id: "5",
    title: "Self-directed Learning",
    desc: "I proactively seek out and understand things I am passionate about, regularly improve myself, and reflect on my shortcomings.",
    icon: "/aboutPageImg/personalityImg/icons8-laptop-38.png",
  },
  {
    id: "6",
    title: "Positive Thinking",
    desc: "Positive thinking and reframing are the first steps in my problem-solving process and also serve as training during times of crisis and stress.",
    icon: "/aboutPageImg/personalityImg/icons8-positive-thinking-38.png",
  },
  {
    id: "7",
    title: "Human-centric",
    desc: "My education in social education has instilled in me a human-centric value system, which I apply to web development and all aspects of life.",
    icon: "/aboutPageImg/personalityImg/icons8-human-resources-38.png",
  },
];

export default function Personality() {
  return (
    <div className="personality">
      <h2>Personality</h2>
      <div className="personalityContent">
        {personalityData.map((data) => (
          <div className="personalityItem" key={data.id}>
            <div className="left">
              <img src={data.icon} alt={data.title} />
              <h3>{data.title}</h3>
            </div>
            <div className="right">
              <p>{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
