const Dot = () =>{
    return(
        <div className="h-3 w-3 rounded-full bg-white mx-auto"></div>
    )
}

const Joints = () => {
  return (
    <div className="hidden lg:block absolute inset-0 mx-auto mt-[100px] h-0.5 bg-white rounded-full w-[80%]">
      <div className="h-full w-full relative">
        <div className="absolute mt-[-5px] inset-x-0 grid grid-cols-4 place-items-center">
            <Dot/>
            <Dot/>
            <Dot/>
            <Dot/>
        </div>
      </div>
    </div>
  );
};

export default Joints;
