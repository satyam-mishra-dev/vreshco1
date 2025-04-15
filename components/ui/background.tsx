// components/GradientBackground.tsx
const GradientBackground = () => {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
        <div className="relative w-full h-full">
          {/* Blue Glow */}
          <div className="absolute w-[600px] h-[600px] bg-blue-500 opacity-30 blur-[150px] top-[-100px] left-[-100px]" />
  
          {/* Purple-Pink Glow */}
          <div className="absolute w-[500px] h-[500px] bg-pink-500 opacity-30 blur-[120px] top-[100px] left-[200px]" />
  
          {/* Cyan Glow */}
          <div className="absolute w-[700px] h-[700px] bg-cyan-500 opacity-30 blur-[160px] bottom-[-150px] right-[-150px]" />
        </div>
      </div>
    );
  };
  
  export default GradientBackground;
  