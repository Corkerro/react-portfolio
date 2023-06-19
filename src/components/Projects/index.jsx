import React from 'react';
import Card from './Card';
import axios from 'axios';
const Projects = ({ data }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const fetchProjects = () => {
    setIsLoading(true);
    axios
      .get('https://648ff52e1e6aa71680ca49da.mockapi.io/portfolio')
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };
  React.useEffect(() => {
    fetchProjects();
  }, []);
  let projects;
  if (isLoading) {
    projects = [...new Array(3)].map((obj, i) => (
      <Card key={i} title={''} description={[]} imgs={[]} link={''} isLoading={isLoading} />
    ));
  } else {
    projects = items.map((obj, i) => <Card key={i} data={data} {...obj} isLoading={isLoading} />);
  }

  return (
    <div className="projects" id="_Projects">
      <div className="projects__container">
        <h1 data-aos="fade-up">Projects</h1>
        <div data-aos="fade-up" className="projects__inner">
          {projects}
        </div>
      </div>
    </div>
  );
};

export default Projects;
