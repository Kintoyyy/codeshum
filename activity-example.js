
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
                        isMain: true,
                        isCloseable: false,
                        file_name: "Main.java",
                        language: 'java',
                        content: "import java.util.Scanner;\r\n\r\npublic class Main{\r\n    public static void main(String[] args){\r\n        Scanner in = new Scanner(System.in);\r\n        \r\n        System.out.print(\"Enter a number between 1 and 7: \");\r\n        int x = in.nextInt();\r\n        \r\n        if(x == 1){\r\n            System.out.println(\"Monday\");\r\n        }\r\n        else if(x == 2){\r\n            System.out.println(\"Tuesday\");\r\n        }\r\n        else if(x == 3){\r\n            System.out.println(\"Wednesday\");\r\n        }\r\n        else if(x == 4){\r\n            System.out.println(\"Thursday\");\r\n        }\r\n        else if(x == 5){\r\n            System.out.println(\"Friday\");\r\n        }\r\n        else if(x == 6){\r\n            System.out.println(\"Saturday\");\r\n        }\r\n        else if(x == 7){\r\n            System.out.println(\"Sunday\");\r\n        }\r\n        else {\r\n            System.out.println(\"Invalid input.\");\r\n        }\r\n    }\r\n}"
                    },
                ],
                files: [
                    {
                        id: 324,
                        read_only: false,
                        isMain: true,
                        isCloseable: false,
                        file_name: "Main.java",
                        language: 'java',
                        content: "import java.util.Scanner;\r\n\r\npublic class Main{\r\n    public static void main(String[] args){\r\n        Scanner in = new Scanner(System.in);\r\n        \r\n        System.out.print(\"Enter a number between 1 and 7: \");\r\n        int x = in.nextInt();\r\n        \r\n        if(x == 1){\r\n            System.out.println(\"Monday\");\r\n        }\r\n        else if(x == 2){\r\n            System.out.println(\"Tuesday\");\r\n        }\r\n        else if(x == 3){\r\n            System.out.println(\"Wednesday\");\r\n        }\r\n        else if(x == 4){\r\n            System.out.println(\"Thursday\");\r\n        }\r\n        else if(x == 5){\r\n            System.out.println(\"Friday\");\r\n        }\r\n        else if(x == 6){\r\n            System.out.println(\"Saturday\");\r\n        }\r\n        else if(x == 7){\r\n            System.out.println(\"Sunday\");\r\n        }\r\n        else {\r\n            System.out.println(\"Invalid input.\");\r\n        }\r\n    }\r\n}"
                    },
                ]
            },

        },
        {
            id: 1,
            max_score: 10,
            modified: "2021-09-01T00:00:00Z",
            isCorrect: false,
            problem: {
                id: 1,
                name: "School Library - Java",
                problem_type: "coding",
                difficulty: "B",
                description: "Implement the class Book with the following details:",
                description_code: "Class - Book:\r\n\r\nPrivate Properties:\r\nprivate String title: Represents the title of the book.\r\nprivate int numberOfPages: Holds the number of pages in the book.\r\nprivate boolean isFictional: Indicates whether the book is fictional.\r\nGetters and setters:\r\ngetTitle() and setTitle(String title) - for retrieving and setting the title property\r\ngetNumberOfPages() and setNumberOfPages(int pages) - for retrieving and setting the numberOfPages property\r\ngetIsFictional() and setIsFictional(boolean isFictional) - for retrieving and setting the isFictional property",
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
                        id: 33,
                        read_only: false,
                        isMain: true,
                        isCloseable: false,
                        file_name: "Main.java",
                        language: 'java',
                        content: "import java.util.ArrayList;\r\nimport java.util.Scanner;\r\n\r\npublic class Main {\r\n    \/\/ List to store books\r\n    private static ArrayList<Book> books = new ArrayList<>();\r\n    \r\n    public static void main(String[] args) {\r\n        Scanner scanner = new Scanner(System.in);\r\n        int choice;\r\n\r\n        do {\r\n            System.out.println(\"\\nSchool Library Management\");\r\n            System.out.println(\"1. Add Book\");\r\n            System.out.println(\"2. View Books\");\r\n            System.out.println(\"3. Update Book\");\r\n            System.out.println(\"4. Delete Book\");\r\n            System.out.println(\"5. Exit\");\r\n            System.out.print(\"Enter your choice: \");\r\n            choice = scanner.nextInt();\r\n            scanner.nextLine();  \/\/ Consume newline\r\n\r\n            switch (choice) {\r\n                case 1:\r\n                    addBook(scanner);\r\n                    break;\r\n                case 2:\r\n                    viewBooks();\r\n                    break;\r\n                case 3:\r\n                    updateBook(scanner);\r\n                    break;\r\n                case 4:\r\n                    deleteBook(scanner);\r\n                    break;\r\n                case 5:\r\n                    System.out.println(\"Exiting...\");\r\n                    break;\r\n                default:\r\n                    System.out.println(\"Invalid choice! Please try again.\");\r\n            }\r\n        } while (choice != 5);\r\n        \r\n        scanner.close();\r\n    }\r\n\r\n    \/\/ Method to add a new book\r\n    private static void addBook(Scanner scanner) {\r\n        System.out.print(\"Enter book title: \");\r\n        String title = scanner.nextLine();\r\n        System.out.print(\"Enter number of pages: \");\r\n        int pages = scanner.nextInt();\r\n        System.out.print(\"Is it fictional? (true\/false): \");\r\n        boolean isFictional = scanner.nextBoolean();\r\n        scanner.nextLine();  \/\/ Consume newline\r\n        \r\n        Book newBook = new Book(title, pages, isFictional);\r\n        books.add(newBook);\r\n        System.out.println(\"Book added successfully.\");\r\n    }\r\n\r\n    \/\/ Method to view all books\r\n    private static void viewBooks() {\r\n        if (books.isEmpty()) {\r\n            System.out.println(\"No books available.\");\r\n        } else {\r\n            System.out.println(\"List of Books:\");\r\n            for (int i = 0; i < books.size(); i++) {\r\n                System.out.println((i + 1) + \". \" + books.get(i));\r\n            }\r\n        }\r\n    }\r\n\r\n    \/\/ Method to update a book's details\r\n    private static void updateBook(Scanner scanner) {\r\n        viewBooks();\r\n        System.out.print(\"Enter the book number to update: \");\r\n        int bookNumber = scanner.nextInt();\r\n        scanner.nextLine();  \/\/ Consume newline\r\n        \r\n        if (bookNumber < 1 || bookNumber > books.size()) {\r\n            System.out.println(\"Invalid book number!\");\r\n            return;\r\n        }\r\n\r\n        Book bookToUpdate = books.get(bookNumber - 1);\r\n        System.out.print(\"Enter new title (leave blank to keep current): \");\r\n        String title = scanner.nextLine();\r\n        if (!title.isEmpty()) {\r\n            bookToUpdate.setTitle(title);\r\n        }\r\n\r\n        System.out.print(\"Enter new number of pages (0 to keep current): \");\r\n        int pages = scanner.nextInt();\r\n        if (pages > 0) {\r\n            bookToUpdate.setNumberOfPages(pages);\r\n        }\r\n\r\n        System.out.print(\"Is it fictional? (true\/false, leave blank to keep current): \");\r\n        String input = scanner.nextLine();\r\n        if (!input.isEmpty()) {\r\n            bookToUpdate.setIsFictional(Boolean.parseBoolean(input));\r\n        }\r\n\r\n        System.out.println(\"Book updated successfully.\");\r\n    }\r\n\r\n    \/\/ Method to delete a book\r\n    private static void deleteBook(Scanner scanner) {\r\n        viewBooks();\r\n        System.out.print(\"Enter the book number to delete: \");\r\n        int bookNumber = scanner.nextInt();\r\n        \r\n        if (bookNumber < 1 || bookNumber > books.size()) {\r\n            System.out.println(\"Invalid book number!\");\r\n            return;\r\n        }\r\n\r\n        books.remove(bookNumber - 1);\r\n        System.out.println(\"Book deleted successfully.\");\r\n    }\r\n}\r\n"
                    },
                    {
                        id: 324,
                        read_only: false,
                        isMain: false,
                        isCloseable: true,
                        file_name: "Book.java",
                        language: 'java',
                        content: "public class Book {\r\n    private String title;\r\n    private int numberOfPages;\r\n    private boolean isFictional;\r\n\r\n    \/\/ Constructor to initialize a new Book object\r\n    public Book(String title, int numberOfPages, boolean isFictional) {\r\n        this.title = title;\r\n        this.numberOfPages = numberOfPages;\r\n        this.isFictional = isFictional;\r\n    }\r\n\r\n    \/\/ Getter for title\r\n    public String getTitle() {\r\n        return this.title;\r\n    }\r\n\r\n    \/\/ Setter for title\r\n    public void setTitle(String title) {\r\n        this.title = title;\r\n    }\r\n\r\n    \/\/ Getter for numberOfPages\r\n    public int getNumberOfPages() {\r\n        return this.numberOfPages;\r\n    }\r\n\r\n    \/\/ Setter for numberOfPages\r\n    public void setNumberOfPages(int numberOfPages) {\r\n        this.numberOfPages = numberOfPages;\r\n    }\r\n\r\n    \/\/ Getter for isFictional\r\n    public boolean getIsFictional() {\r\n        return this.isFictional;\r\n    }\r\n\r\n    \/\/ Setter for isFictional\r\n    public void setIsFictional(boolean isFictional) {\r\n        this.isFictional = isFictional;\r\n    }\r\n\r\n    \/\/ toString method for representing the Book object\r\n    @Override\r\n    public String toString() {\r\n        return \"Book{\" +\r\n                \"title='\" + title + '\\'' +\r\n                \", numberOfPages=\" + numberOfPages +\r\n                \", isFictional=\" + isFictional +\r\n                '}';\r\n    }\r\n}\r\n"
                    },
                ], files: [
                    {
                        id: 324,
                        read_only: false,
                        isMain: true,
                        isCloseable: false,
                        file_name: "Main.java",
                        language: 'java',
                        content: "import java.util.Scanner;\r\n\r\nclass Main{\r\n    public static void main(String[] args){\r\n        Scanner in = new Scanner(System.in);\r\n\r\n        System.out.print(\"Enter a number between 1 and 7: \");\r\n        int x = in.nextInt();\r\n\r\n        if(x == 1){\r\n            System.out.println(\"Monday\");\r\n        }\r\n        else if(x == 2){\r\n            System.out.println(\"Tuesday\");\r\n        }\r\n        else if(x == 3){\r\n            System.out.println(\"Wednesday\");\r\n        }\r\n        else if(x == 4){\r\n            System.out.println(\"Thursday\");\r\n        }\r\n        else if(x == 5){\r\n            System.out.println(\"Friday\");\r\n        }\r\n        else if(x == 6){\r\n            System.out.println(\"Saturday\");\r\n        }\r\n        else if(x == 7){\r\n            System.out.println(\"Sunday\");\r\n        }\r\n        else {\r\n            System.out.println(\"Invalid input.\");\r\n        }\r\n    }\r\n}"
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