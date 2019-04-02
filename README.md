# WebApps
Assignment 1 - COMP 466

Instructions and General Requirements
Use a plain text editor such as Notepad++ or TextEdit to create all your web document pages for this assignment. Do not use MS Word or similar authoring tools to create or edit your web documents because you cannot see the actual codes.
Plan carefully what to put on each web page and how to lay out everything you want to present. Pay attention also to the visual design of your web pages. Clean, simple designs should work well.
Each web application or web page you write for each assignment project is expected to be a professional web application or web page. If you want to show course related information or links on the page, they should be placed in such a way that they will not interfere with the content, functionality, or the overall look and feel of your web application or web page.
You must do your best to write the best web page, or develop the best web application, for each and every project in the assignment. When you are asked to develop web applications, a single web page or a few inter-linked web pages may not be sufficient. You should create a web-based system. It should have a welcome page, a banner with the name or title of the application, menus and buttons for navigation, and required functional modules. You must do your best to make each of your web applications attractive, useful, and user-friendly. Your applications may not have a perfect professional look and feel, but you must show your effort to achieve that. Your time and effort in developing the best web applications for the assignment will contribute greatly to your future success as a web developer.
Use the same external style sheet for all your pages to ensure your assignment site has a consistent look and feel.
Validate all your web documents using the tools provided at W3C.
Test all web applications for the assignment on your personal web server to ensure that they work as expected.
When you submit your assignment, pack all your assignment files into a zip file named TMA1.zip, and upload the zip file to your tutor through the Assignment 1 link on the course home page. Contact your tutor if you need help to create and upload a zip file.
Important: All work submitted must be original, and no codes or packages from a third party should be used unless it is explicitly allowed in the assignment instructions. See the Athabasca University policy on intellectual honesty.

Main Page (tma1.htm)
file structure for Assignment 1
Your assignment file structure should look like this.

(10 marks)

All files for Assignment 1 should be in a directory called TMA1 (TMA stands for ‘tutor-marked assignment’) and its sub-directories for each part of the assignment as shown in the illustration. Directly under TMA1 there should be a file named tma1.htm.

The first page of tma1.htm file should be the cover page of the assignment clearly showing the following information:

assignment number
course number and name
your name and student ID number
date you began working on the assignment
date you completed the assignment
estimated hours you spent on the assignment
The required documentation on your work for each part of the assignment should follow the cover page, which should include:

the original description and requirements of the project
your interpretation of the assignment project and requirements
your analysis and design of the web application
documentation of your implementation
a guide for users (your tutor who will mark the assignment) to set up, to run, and to use the web application
a hyperlink to the web applications you design for the project
anything else you want to say to your tutor
Please keep in mind that all the web applications and related files you develop for the assignment must be accessible from the tma1.htm page, either directly or indirectly.

Please also keep in mind that each web application must use the same external style sheet to ensure the web application to have a consistent look and feel.

Part 1
(15 marks)

Create an XML version of your resume containing at least three sections: general information about you; your educational background, and your work experience. Create a schema for the XML document, and then create an XSLT for the XML document so that it can be rendered in a browser.

Save all three files (resume.xml, resume.xsd, and resume.xsl) for Part 1 in the directory TMA1/part1.

Part 2
(30 marks)

Using the web technologies you have learned so far, including HTML5, CSS3, JavaScript, XML and Ajax, write a web application, that can help people to learn the technologies covered in Unit 1, Unit 2, or Unit 3 of the course. The requirements are detailed as follows:

It must be a web-based system with a name you choose, a banner to show off your work, navigation menus and buttons. It should begin with a welcome page to greet the users, to explain what the application does, and what they get from it, and how they should proceed.
The application must have three pages of tutorials, accessible through navigation menus or buttons, to teach the technologies covered in Unit 1, Unit 2 and Unit 3 respectively. You don’t need to teach everything, but there should be enough content to make each of the tutorials useful.
There should be a quiz for each tutorial, which can be accessed right after the tutorial page, as well as through the navigation menus and buttons of the system.
After the submission button is hit, the quiz system should be able to grade the answers the learner has provided, show the correct answers as well as the score in percentage.
The quiz system should be designed so that questions can be easily edited, added, or deleted, and new quiz can be easily created.
You should do your best to use the web technologies covered in Unit 1, unit 2 and Unit 3, including HTML5, CSS3, JavaScript, XML and Ajax.
Your web application should use or teach at least five page-structure elements and six new input types
You should use an external style sheet for all pages of the system, to retain a consistent and user-friendly interface for your system.
When using HTML5 table, be sure that you only use it to display tabular information, not to lay out the elements on your page.
You must pay attention to both the functionalities and user interface. Save Part 2 files in the directory TMA1/part2.

Part 3
(15 marks)

For this project, you are required to create a slideshow web application using HTML5 canvas and other web technologies you have learned so far. The requirements are as follows:

The slideshow should be drawn on the canvas;
There should be a caption for each image in the show;
There should be a button to start/stop the show;
There should be a control to toggle the show between random and sequential;
There should be buttons to manually turn the show backward or forward, only if the show is in sequential mode;
There should be a dropdown list for users to select different transition/transformation effects for the show;
The data of the images should be in a JSON array so that images and their captions can be easily maintained;
To avoid copyright issues, you should use the images/photos you took. If you don’t have the images ready, please go around the place you live or work and take some good ones;
The show should have at least 20 nice pictures.
Save Part 3 files in the directory TMA1/part3.

Part 4
(30 marks)

For this project, you are required to develop a web application that can provide users with the following utility tools:

(10 marks) Measurement converter: weight, length, area and volume
(10 marks) Mortgage calculator
(10 marks) A utility tool that you think could be useful. You may need to do some research on the Web to build this last tool.
In order to get full marks for the above design and implementation, the following are required:

It must have an integrated and user-friendly interface for users to access each of the tools you designed.
You need to use JavaScript functions and built-in objects to implement the application.
At any time only one tool will be shown, to ensure a clean and tidy space for users to work with.
You need to use Ajax technologies to eliminate whole page update when switching from one utility to another.
You need to use event handler to calculate and show the result as soon as the user has given enough input to the system.
In the assignment report, you need to provide sufficient documentation for your work, including algorithms and formulas used for the tools. If you have used any resources, including documents on the Web, you must clearly identify the source in your documentation.
Save Part 4 files in the directory TMA1/part4.
