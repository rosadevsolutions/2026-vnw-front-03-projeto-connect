import "./Metrics.scss";

const metrics = [
  {
    id: 1,
    value: "500+",
    label: "Empresas Voluntárias"
  },
  {
    id: 2,
    value: "1.2K+",
    label: "Projetos Realizados"
  },
  {
    id: 3,
    value: "50K+",
    label: "Vidas Impactadas"
  },
];

export default function Metrics() {
  return (
    <>
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className="home__metrics--item"
        >
          <p className="home__metrics--title">
            {metric.value}
          </p>
          <p className="home__metrics--text">
            {metric.label}
          </p>
        </div>
      ))}
    </>
  );
}
