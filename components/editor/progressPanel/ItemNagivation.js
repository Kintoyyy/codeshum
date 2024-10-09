import { Button } from "@/components/ui/button";

export default function ItemNavigation({ questions = [], currentQuestion, setCurrentQuestion }) {
    const changeQuestion = (index) => {
        if (setCurrentQuestion) {
            setCurrentQuestion(questions[index]);
        }
    };

    return (
        <div className="p-6 rounded-lg">
            <span className="font-semibold">Item Navigation</span>
            <div className="flex flex-wrap gap-2 mt-2">
                {questions.length > 0 ? (
                    questions.map((question, index) => (
                        <Button
                            key={index}
                            onClick={() => changeQuestion(index)}
                            className={` relative flex-shrink-0 w-8 h-12 p-0 overflow-hidden border bg-muted ${currentQuestion === question ? 'border-blue-500' : ''
                                }`}
                            aria-label={`Question ${index + 1}`}
                        >
                            <span className="w-full text-lg font-bold text-center text-black dark:text-white"> {/* Switch color based on mode */}
                                {index + 1}
                            </span>
                            <div
                                className={`absolute w-2 h-2 rounded-full top-1 right-1 ${question.isCorrect ? 'bg-green-500' : 'bg-red-500'
                                    }`}
                            />
                        </Button>
                    ))
                ) : (
                    <p>No questions available</p>
                )}
            </div>
        </div>
    );
}
