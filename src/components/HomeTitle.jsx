import TypeWriterEffect from 'react-typewriter-effect';


export default function HomeTitle() {
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


    