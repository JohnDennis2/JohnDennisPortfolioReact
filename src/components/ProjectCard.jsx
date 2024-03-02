

export default function ProjectCard(props) {

  return (
    <div className="single">
    <div className="single-card card" style={{width: "18rem"}}>
   <img src={props.image} className="card-img-top" alt="..."/>
   <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.github} className="btn btn-primary">Github Repo</a>
    <a href={props.live} className="btn btn-primary">Live App</a>
  </div>
</div>
    </div>
  );
}
