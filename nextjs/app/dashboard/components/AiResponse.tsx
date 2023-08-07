import ReactTyped from "react-typed";


const AiBotResponse = ({response} : {response: string}) => {
    return (
      <div className="w-full h-full p-5">
        <ReactTyped
          strings={[
            response
          ]}
          typeSpeed={40}
          loop
        />
      </div>
    );
}

export default AiBotResponse;