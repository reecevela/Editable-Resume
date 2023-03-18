import '../styles/App.css';
import EditableField from './EditableField';

function App() {
  return (
    <div>
  <EditableField element="h1" text="Your Name" className="resume-name" />
  <EditableField element="h2" text="Contact Information" className="resume-section-title" />
  <EditableField element="p" text="123 Main Street, Anytown USA" className="resume-section-content" />
  <EditableField element="p" text="youremail@example.com" className="resume-email resume-section-content" />
  <EditableField element="p" text="123-456-7890" className="resume-phone resume-section-content" />

  <EditableField element="h2" text="Education" className="resume-section-title" />
  <EditableField element="p" text="Bachelor of Science in Computer Science" className="resume-section-content" />
  <EditableField element="p" text="University of Example, Anytown USA" className="resume-section-content" />
  <EditableField element="p" text="Graduated May 20XX" className="resume-section-content" />

  <EditableField element="h2" text="Experience" className="resume-section-title" />
  <EditableField element="h3" text="Software Engineer" className="resume-section-title" />
  <EditableField element="p" text="ABC Company, Anytown USA" className="resume-section-content" />
  <EditableField element="p" text="June 20XX - Present" className="resume-section-content" />
  <EditableField element="ul" text="" className="resume-section-content">
    <EditableField element="li" text="Designed and implemented a new feature for the company's flagship product." />
    <EditableField element="li" text="Led a team of developers to build a new microservice using Node.js and AWS." />
    <EditableField element="li" text="Improved the performance of the company's website by optimizing the front-end code." />
  </EditableField>

  <EditableField element="h3" text="Software Development Intern" className="resume-section-title" />
  <EditableField element="p" text="XYZ Company, Anytown USA" className="resume-section-content" />
  <EditableField element="p" text="May 20XX - August 20XX" className="resume-section-content" />
  <EditableField element="ul" text="" className="resume-section-content">
    <EditableField element="li" text="Assisted with the development of a new mobile app using React Native." />
    <EditableField element="li" text="Collaborated with senior developers to write automated tests using Jest." />
    <EditableField element="li" text="Created a data visualization dashboard using D3.js and Elasticsearch." />
  </EditableField>

  <EditableField element="h2" text="Skills" className="resume-section-title" />
  <EditableField element="ul" text="" className="resume-section-content">
    <EditableField element="li" text="JavaScript" />
    <EditableField element="li" text="React" />
    <EditableField element="li" text="Node.js" />
    <EditableField element="li" text="AWS" />
    <EditableField element="li" text="Git" />
    <EditableField element="li" text="Agile Development" />
  </EditableField>
</div>

  );
}

export default App;
