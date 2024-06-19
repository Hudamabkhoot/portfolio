import TypeWriterEffect from 'react-typewriter-effect';


export default function Title() {
return (

    <div>
         <TypeWriterEffect
        textStyle={{
          fontFamily: 'monospace',
          color: '#FFFFFF',
          fontWeight: 500,
          fontSize: '1.5em',
          borderBottom: '2px solid var(--blue)'
        }}
        cursorColor="#FFFFFF"
        text={
          "Let’s work together!"
        }
        TextDelay={1000}
        typeSpeed={50}
      />
    </div>
)

    }


    