import { MdKeyboardArrowRight } from "react-icons/md";

const Question = [
  {
    question: "What are some of the common causes of stomach pain?",
  },
  {
    question: "How do I get my prescription? ",
  },
  {
    question: "Is that a 24hour service?",
  },
  {
    question: "Can I get a doctor's note for work or school?",
  },
  {
    question: "What mode of payments do you accept?",
  },
];

const Questions = () => {
  return (
    <div className="py-10 lg:py-14 px-28">
      <div className="w-full lg:w-1/2 mx-auto">
        <p className="font-semibold text-2xl lg:text-4xl text-center">
          Your Curious Questions
        </p>
        <p className="text-center pt-6 lg:text-lg">
          Some of these questions have een running through your mind
        </p>
      </div>
      <div className="flex flex-col divide-y divide-yellow-400 py-6">
        {Question.map((q) => (
          <div key={q.question} className="flex flex-col px-6 lg:px-10">
            <div className="group cursor-pointer py-6 flex justify-between">
              <div className="font-medium">
                <p>{q.question}</p>
              </div>
              <MdKeyboardArrowRight
                className="group-hover:text-orange-400"
                size={24}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
