const Dot = () =>{
    return(
        <div className="h-3 w-3 rounded-full bg-white mx-auto"></div>
    )
}

const Joints = () => {
  return (
    <div className="hidden lg:block absolute inset-0 mx-auto mt-[100px] h-0.5 bg-white rounded-full w-[80%]">
      <div className="h-full w-full relative border-2">
        <div className="absolute inset-x-0 inset-y-6 grid grid-cols-4 place-items-center">
            <Dot/>
            <Dot/>
            <Dot/>
            <div className="h-3 w-3 rounded-full bg-white mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Joints;
