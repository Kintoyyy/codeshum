import Executions from "./components/editor/progressPanel/Executions";

const ativityObj = {
    id: 123,
    name: "Activity name",
    is_exam: true,
    programming_languages: [
        {
            id: 1,
            name: "Java",
            extension: "java",
        }
    ],
    questions: [
        {
            id: 1,
            max_score: 10,
            modified: "2021-09-01T00:00:00Z",
            isCorrect: false,
            problem: {
                id: 1,
                name: "Day of the Week Identifier",
                problem_type: "coding",
                difficulty: "B",
                description: "Write a program that takes an integer day as input. This program should print the name of the day of the week corresponding to the provided day using the following rules:",
                must_be_perfect: false,
                sample_outputs: [
                    {
                        id: 1,
                        isHidden: false,
                        output_code: "Enter a number between 1 and 7: 1\nMonday",
                    },
                    {
                        id: 2,
                        isHidden: false,
                        output_code: "Enter a number between 1 and 7: 2\nTuesday",
                    },
                    {
                        id: 3,
                        isHidden: false,
                        output_code: "Enter a number between 1 and 7: 3\nWednesday",
                    }
                ],
                test_cases: [
                    {
                        id: 1,
                        inputs: [
                            {
                                id: 1,
                                problem_input:
                                {
                                    id: 1,
                                    input_name: "1"
                                },
                                input_value: "1"
                            }
                        ],
                        output: "Hello world", //hash the output
                        isShown: true,
                        isCollapsed: true,
                        isHidden: false,
                        description: "Test case description",
                        score: 10,
                        status: "ready",
                        executions: [
                            {
                                id: 1,
                                isSuccessful: false,
                                output: "Hello world!",
                                execution_time: 0.1
                            }
                        ]
                    },
                    {
                        id: 2,
                        inputs: [
                            {
                                id: 1,
                                problem_input:
                                {
                                    id: 1,
                                    input_name: "1"
                                },
                                input_value: "1"
                            }
                        ],
                        output: "Hello world123", //hash the output
                        isShown: true,
                        isCollapsed: true,
                        isHidden: false,
                        description: "Test case description",
                        score: 10,
                        status: "ready",
                        executions: [
                            {
                                id: 1,
                                isSuccessful: false,
                                output: "Hello world!",
                                execution_time: 0.1
                            }
                        ]
                    }
                ],
                boilerplates: [
                    {
                        id: 324,
                        read_only: false,
                        isCloseable: false,
                        file_name: "Main.java",
                        language: 'java',
                        content: `import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);

        System.out.print("Enter a number between 1 and 7: ");
        int x = in.nextInt();

        if(x == 1){
            System.out.println("Monday");
        }
        else if(x == 2){
            System.out.println("Tuesday");
        }
        else if(x == 3){
            System.out.println("Wednesday");
        }
        else if(x == 4){
            System.out.println("Thursday");
        }
        else if(x == 5){
            System.out.println("Friday");
        }
        else if(x == 6){
            System.out.println("Saturday");
        }
        else if(x == 7){
            System.out.println("Sunday");
        }
        else {
            System.out.println("Invalid input.");
        }
    }
}`
                    },
                    {
                        id: 33,
                        read_only: false,
                        isCloseable: true,
                        file_name: "calculate.java",
                        language: 'java',
                        content: `import java.util.Scanner;
import java.text.DecimalFormat;

public class Main{
    public static void main(String[] args){
        Beverage beer = new Beer(250,true,0.05);
        System.out.println(beer.toString());
        printPattern(5);
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter a num: ");
        int x = scan.nextInt();

        System.out.println(((x - 3) % 4 == 0) ? "Yes" : "No");
        System.out.print("Enter product name: ");
        String name = scan.next();
        System.out.print("Enter quantity: ");
        int quan = scan.nextInt();
        System.out.print("Enter price: ");
        double price = scan.nextDouble();
        DecimalFormat deciForm = new DecimalFormat("#,##0.00");
        System.out.printf("Product: %s\n",name);
        System.out.println("Quantity: " + quan);
        System.out.println("Price: PHP " + deciForm.format(price));
        System.out.println("Total Cost: PHP " + deciForm.format(price * quan));
    }
    static void printPattern(int x){
        for(int i = x; i>=1; i--){
            for(int j = 1; j<=x-i; j++){
                System.out.print(" ");
            }
            for(int k = 1; k<=2*i-1; k++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`
                    },
                ]
            },

        },
        {
            id: 32,
            max_score: 10,
            modified: "2021-09-01T00:00:00Z",
            isCorrect: true,
            problem: {
                id: 1,
                name: "Ambot",
                problem_type: "coding",
                difficulty: "B",
                description: "",
                must_be_perfect: false,
                sample_outputs: [
                    {
                        id: 1,
                        isHidden: false,
                        output_code: "Enter a number between 1 and 7: 1\nMonday",
                    },
                    {
                        id: 2,
                        isHidden: false,
                        output_code: "Enter a number between 1 and 7: 2\nTuesday",
                    }
                ],
                test_cases: [
                    {
                        id: 1,
                        inputs: [
                            {
                                id: 1,
                                problem_input:
                                {
                                    id: 1,
                                    input_name: "1"
                                },
                                input_value: "1"
                            }
                        ],
                        output: "123123", //hash the output
                        isShown: true,
                        isCollapsed: true,
                        isHidden: false,
                        description: "Test case description",
                        score: 10,
                        status: "ready",
                        executions: [
                            {
                                id: 1,
                                isSuccessful: false,
                                output: "234234",
                                execution_time: 0.1
                            }
                        ]
                    }
                ],
                boilerplates: [
                    {
                        id: 324,
                        read_only: false,
                        isCloseable: false,
                        file_name: "Main.java",
                        language: 'java',
                        content: `import java.util.Scanner;`
                    },
                ]
            },

        }
    ]
};

export default ativityObj;