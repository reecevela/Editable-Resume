import '../styles/App.css';
import EditableField from './EditableField';

function App() {
  const year = new Date().getFullYear();
  return (
    <div className='body'>
      <div className='container'>
        <EditableField element="h1" text="Your Name" />
        <EditableField element="h2" text="Contact Information" />
        <EditableField element="p" text="123 Main Street, Anytown USA" />
        <EditableField element="p" text="youremail@example.com" />
        <EditableField element="p" text="123-456-7890" />

        <div className='title'>
          <h2>Education</h2>
        </div>
        <EditableField element="p" text="Bachelor of Science in Computer Science" />
        <EditableField element="p" text="University of Example, Anytown USA" />
        <EditableField element="p" text="Graduated May 20XX" />

        <div className='title'>
          <h2>Experience</h2>
        </div>
        <EditableField element="h3" text="Software Engineer" />
        <EditableField element="p" text="ABC Company, Anytown USA" />
        <EditableField element="p" text="June 20XX - Present" />
        <ul>
          <EditableField element="li" text="Designed and implemented a new feature for the company's flagship product." />
          <EditableField element="li" text="Led a team of developers to build a new microservice using Node.js and AWS." />
          <EditableField element="li" text="Improved the performance of the company's website by optimizing the front-end code." />
        </ul>

        <EditableField element="h3" text="Software Development Intern" />
        <EditableField element="p" text="XYZ Company, Anytown USA" />
        <EditableField element="p" text="May 20XX - August 20XX" />
        <ul>
          <EditableField element="li" text="Assisted with the development of a new mobile app using React Native." />
          <EditableField element="li" text="Collaborated with senior developers to write automated tests using Jest." />
          <EditableField element="li" text="Created a data visualization dashboard using D3.js and Elasticsearch." />
        </ul>

        <div className='title'>
          <h2>Skills</h2>
        </div>
        <ul>
          <EditableField element="li" text="JavaScript" />
          <EditableField element="li" text="React" />
          <EditableField element="li" text="Node.js" />
          <EditableField element="li" text="AWS" />
          <EditableField element="li" text="Git" />
          <EditableField element="li" text="Agile Development" />
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
