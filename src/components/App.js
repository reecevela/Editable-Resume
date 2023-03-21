import '../styles/App.css';
import EditableField from './EditableField';

function App() {
  const year = new Date().getFullYear();
  return (
    <div className='body'>
      <div className='container'>
        <EditableField element="h1" initialText="Your Name" />
        <EditableField element="h2" initialText="Contact Information" />
        <EditableField element="p" initialText="123 Main Street, Anytown USA" />
        <EditableField element="p" initialText="youremail@example.com" />
        <EditableField element="p" initialText="123-456-7890" />

        <div className='title'>
          <h2>Education</h2>
        </div>
        <EditableField element="p" initialText="Bachelor of Science in Computer Science" />
        <EditableField element="p" initialText="University of Example, Anytown USA" />
        <EditableField element="p" initialText="Graduated May 20XX" />

        <div className='title'>
          <h2>Experience</h2>
        </div>
        <EditableField element="h3" initialText="Software Engineer" />
        <EditableField element="p" initialText="ABC Company, Anytown USA" />
        <EditableField element="p" initialText="June 20XX - Present" />
        <ul>
          <EditableField element="li" initialText="Designed and implemented a new feature for the company's flagship product." />
          <EditableField element="li" initialText="Led a team of developers to build a new microservice using Node.js and AWS." />
          <EditableField element="li" initialText="Improved the performance of the company's website by optimizing the front-end code." />
        </ul>

        <EditableField element="h3" initialText="Software Development Intern" />
        <EditableField element="p" initialText="XYZ Company, Anytown USA" />
        <EditableField element="p" initialText="May 20XX - August 20XX" />
        <ul>
          <EditableField element="li" initialText="Assisted with the development of a new mobile app using React Native." />
          <EditableField element="li" initialText="Collaborated with senior developers to write automated tests using Jest." />
          <EditableField element="li" initialText="Created a data visualization dashboard using D3.js and Elasticsearch." />
        </ul>

        <div className='title'>
          <h2>Skills</h2>
        </div>
        <ul>
          <EditableField element="li" initialText="JavaScript" />
          <EditableField element="li" initialText="React" />
          <EditableField element="li" initialText="Node.js" />
          <EditableField element="li" initialText="AWS" />
          <EditableField element="li" initialText="Git" />
          <EditableField element="li" initialText="Agile Development" />
        </ul>

      </div>
      <div className="footer">
        <p>Created by Reece Vela © {year} </p>
        <a href="https://github.com/reecevela/cv-project">GitHub Repository</a>
      </div>
    </div>
  );
}

export default App;
