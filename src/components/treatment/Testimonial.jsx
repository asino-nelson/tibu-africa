const data = [
    {
        name:"Names",
        message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minima quam exercitationem deserunt non quas neque vel temporibus doloremque ducimus quisquam officiis, pariatur accusantium nulla! Veniam culpa vero tenetur inventore."
    },
    {
        name:"Names",
        message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minima quam exercitationem deserunt non quas neque vel temporibus doloremque ducimus quisquam officiis, pariatur accusantium nulla! Veniam culpa vero tenetur inventore."
    },
    {
        name:"Names",
        message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minima quam exercitationem deserunt non quas neque vel temporibus doloremque ducimus quisquam officiis, pariatur accusantium nulla! Veniam culpa vero tenetur inventore."
    }
]

const Testimonial = () => {
    return (
      <div className="w-3/4 m-auto py-10 lg:py-14 overflow-x-hidden lg:overflow-x-visible">
        <div className="w-full lg:w-1/2 mx-auto">
            <p className="font-semibold text-center text-2xl lg:text-4xl">Words From Our Health Rockstars!</p>
            <p className="pt-6 text-center text-base lg:text-xl">See what our health champions say about us</p>
        </div>
        <div className="mt-20 rounded-2xl p-6 m-6 text-sm">
          {data.map((d) => (
              <div key={d.name}>
                  <div className="pb-4">
                     <p>{d.message}</p> 
                  </div>
                  <div className="flex justify-end items-end">
                      <p>{d.name}</p>
                  </div>
              </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Testimonial;
  
