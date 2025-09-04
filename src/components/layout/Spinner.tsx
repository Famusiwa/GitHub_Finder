// import spinner from "./assets/spinner.gif"
const Spinner:React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <img width={180} className="text-center" src={spinner}  alt="Loading...."/> */}
      <svg
        className="w-16 h-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x="28"
            y="14"
            width="4"
            height="12"
            rx="2"
            ry="2"
            fill="white"
            transform={`rotate(${i * 30} 50 50)`}
          >
            <animate
              attributeName="opacity"
              values="1;0"
              dur="1s"
              begin={`${i * 0.083}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </svg>
    </div>
  )
}

export default Spinner
