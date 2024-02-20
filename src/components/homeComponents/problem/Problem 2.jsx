import "./problem.scss";
import problemData from "./problemData";

export default function Problem() {
  return (
    <div className="problemWrapper">
      <div className="problem">
        <h2 data-aos="fade-up">
          How Do I <span>Resolve Problem ?</span>
        </h2>
        <div className="problemImgBox" data-aos="fade-up" data-aos-delay="200">
          <img src="/problemImgs/DDModel-Paint.PNG" alt="DDModel" />
        </div>
        <div className="problemContent">
          {problemData.map((problemItem, index) => (
            <div
              className="problemItem"
              key={problemItem.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3>{problemItem.name}</h3>
              <ul>
                {problemItem.list.map((list, i) => (
                  <li key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
