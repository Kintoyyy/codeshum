
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
                description_code: "1 - Monday\n2 - Tuesday\n3 - Wednesday\n4 - Thursday\n5 - Friday\n6 - Saturday\n7 - Sunday",
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
                        output: "Enter a number between 1 and 7: 1\nMonday", //hash the output
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
                        output: "Enter a number between 1 and 7: 3\nWednesday", //hash the output
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
                        content: "import java.util.Scanner;\r\n\r\npublic class Main{\r\n    public static void main(String[] args){\r\n        Scanner in = new Scanner(System.in);\r\n\r\n        System.out.print(\"Enter a number between 1 and 7: \");\r\n        int x = in.nextInt();\r\n\r\n        if(x == 1){\r\n            System.out.println(\"Monday\");\r\n        }\r\n        else if(x == 2){\r\n            System.out.println(\"Tuesday\");\r\n        }\r\n        else if(x == 3){\r\n            System.out.println(\"Wednesday\");\r\n        }\r\n        else if(x == 4){\r\n            System.out.println(\"Thursday\");\r\n        }\r\n        else if(x == 5){\r\n            System.out.println(\"Friday\");\r\n        }\r\n        else if(x == 6){\r\n            System.out.println(\"Saturday\");\r\n        }\r\n        else if(x == 7){\r\n            System.out.println(\"Sunday\");\r\n        }\r\n        else {\r\n            System.out.println(\"Invalid input.\");\r\n        }\r\n    }\r\n}"
                    },
                    {
                        id: 33,
                        read_only: false,
                        isCloseable: true,
                        file_name: "calculate.java",
                        language: 'java',
                        content: "import java.util.Scanner;\r\nimport java.text.DecimalFormat;\r\n\r\npublic class Main{\r\n    public static void main(String[] args){\r\n        Beverage beer = new Beer(250,true,0.05);\r\n        System.out.println(beer.toString());\r\n        printPattern(5);\r\n        Scanner scan = new Scanner(System.in);\r\n        System.out.print(\"Enter a num: \");\r\n        int x = scan.nextInt();\r\n\r\n        System.out.println(((x - 3) % 4 == 0) ? \"Yes\" : \"No\");\r\n        System.out.print(\"Enter product name: \");\r\n        String name = scan.next();\r\n        System.out.print(\"Enter quantity: \");\r\n        int quan = scan.nextInt();\r\n        System.out.print(\"Enter price: \");\r\n        double price = scan.nextDouble();\r\n        DecimalFormat deciForm = new DecimalFormat(\"#,##0.00\");\r\n        System.out.printf(\"Product: %s\\n\",name);\r\n        System.out.println(\"Quantity: \" + quan);\r\n        System.out.println(\"Price: PHP \" + deciForm.format(price));\r\n        System.out.println(\"Total Cost: PHP \" + deciForm.format(price * quan));\r\n    }\r\n    static void printPattern(int x){\r\n        for(int i = x; i>=1; i--){\r\n            for(int j = 1; j<=x-i; j++){\r\n                System.out.print(\" \");\r\n            }\r\n            for(int k = 1; k<=2*i-1; k++){\r\n                System.out.print(\"*\");\r\n            }\r\n            System.out.println();\r\n        }\r\n    }\r\n}"
                    },
                ], files: [

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
                name: "Average of Floating-Point Numbers",
                problem_type: "coding",
                difficulty: "B",
                description: "Write a program that prompts the user to enter 10 floating-point numbers and stores them in the given array. Calculate the average of all the elements in the array. Finally, print the resulting average.",
                description_code: "",
                must_be_perfect: false,
                sample_outputs: [
                    {
                        id: 1,
                        isHidden: false,
                        output_code: "Enter 10 floating-point numbers:\r\n1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\nThe average is: 5.50",
                    },
                    {
                        id: 2,
                        isHidden: false,
                        output_code: "Enter 10 floating-point numbers:\r\n10.5\r\n20.5\r\n30.5\r\n40.5\r\n50.6\r\n60.6\r\n70.6\r\n80.6\r\n90.6\r\n100.6\r\nThe average is: 55.56",
                    },
                    {
                        id: 2,
                        isHidden: false,
                        output_code: "Enter 10 floating-point numbers:\r\n1.1\r\n2.2\r\n3.3\r\n4.4\r\n5.5\r\n6.6\r\n7.7\r\n8.8\r\n9.9\r\n10.10\r\nThe average is: 5.96",
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
                        output: "Enter 10 floating-point numbers:\r\n1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\nThe average is: 5.50",
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
                        output: "Enter 10 floating-point numbers:\r\n10.5\r\n20.5\r\n30.5\r\n40.5\r\n50.6\r\n60.6\r\n70.6\r\n80.6\r\n90.6\r\n100.6\r\nThe average is: 55.56",
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
                        file_name: "Main.cpp",
                        language: 'cpp',
                        content: `#include <iostream>\r\n#include <iomanip>\r\n\r\nint main() {\r\n    const int SIZE = 10;\r\n    double arr[SIZE];\r\n    double sum = 0.0;\r\n    double average;\r\n\r\n    std::cout << \"Enter \" << SIZE << \" floating-point numbers:\" << std::endl;\r\n    for (int i = 0; i < SIZE; i++) {\r\n        std::cin >> arr[i];\r\n    }\r\n\r\n    for (int i = 0; i < SIZE; i++) {\r\n        sum += arr[i];\r\n    }\r\n\r\n    average = sum \/ SIZE;\r\n\r\n    std::cout << std::fixed << std::setprecision(2);\r\n    std::cout << \"The average is: \" << average << std::endl;\r\n\r\n    return 0;\r\n}`
                    },
                ]
            },

        }
    ]
};

export default ativityObj;