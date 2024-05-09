import TypeWriterEffect from 'react-typewriter-effect';


export default function ProjectsTitle() {
return (

    <div>
         <TypeWriterEffect
        textStyle={{
          fontFamily: 'monospace',
          color: '#FFFFFF',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={900}
        cursorColor="#FFFFFF"
        text={
          "My Projects"
        }
        TextDelay={1000}
        typeSpeed={50}
      />
    </div>
)

    }


    