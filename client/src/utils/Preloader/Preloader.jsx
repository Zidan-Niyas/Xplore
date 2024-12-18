import "./PreLoader.css"; // Importing the custom CSS for the keyframes

const PreLoader = () => {
  return (
    <div className="loader w-screen h-screen flex justify-center items-center">
      <div className="cube">
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
      </div>
    </div>
  );
};

export default PreLoader;
