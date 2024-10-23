import TypeWriterEffect from 'react-typewriter-effect';


export default function HomeTitle() {
return (

    <div>
         <TypeWriterEffect
        textStyle={{
          fontFamily: 'monospace',
          color: '#D6D7D7',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={900}
        cursorColor="#D6D7D7"
        multiText={[
          "Huda Mabkhoot",
          "Frontend Developer",
          "Huda Mabkhoot",
        ]}
        multiTextDelay={1000}
        typeSpeed={50}
      />
    </div>
)

    }


    