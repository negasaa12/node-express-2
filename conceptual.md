### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  
  JWT stands for "JSON Web Token." It is an open standard (RFC 7519) that defines a compact and self-contained method for securely transmitting information between parties as a JSON object

- What is the signature portion of the JWT?  What does it do?

The signature ensures the integrity of the token and can be used to verify that the sender is who it claims to be and to ensure that the message has not been tampered with.


- If a JWT is intercepted, can the attacker see what's inside the payload?

yes they can, they're online tools that can see what the payload has.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

the user logs in and sends credentials to server. the server verifies the credential and generates a JWT token,
then the server sends JWT token back to the client. THe clieny stores JWT token (local storage or cookie). 
The server verifies the jwt token signature and the server perform authorization checks.

- Compare and contrast unit, integration and end-to-end tests.

In summary, unit tests focus on individual units of code, integration tests verify interactions between components, and end-to-end tests cover the entire system's functionality. Each type of test serves a different purpose and provides different levels of confidence in the software's correctness and reliability.


- What is a mock? What are some things you would mock?

A mock is a simulated object or component that imitates the behavior of a real object or component. Mocks are used primarily in unit testing to isolate the code under test from its dependencies, enabling focused testing and removing the need for actual external resources


- What is continuous integration?

Continuous Integration (CI) is a development practice where developers frequently integrate their code changes into a shared repository. Each integration triggers an automated build and a series of tests to detect integration errors early.

- What is an environment variable and what are they used for?

An environment variable is a dynamic value that is set in the operating system or the execution environment and can be accessed by running programs or scripts. It is a key-value pair that provides configuration information or runtime data to applications. 

- What is TDD? What are some benefits and drawbacks?

Test-Driven Development (TDD) is a software development approach where developers write tests before writing the actual code.

- What is the value of using JSONSchema for validation?

Data validation: JSONSchema allows you to validate JSON data against a predefined schema, ensuring that it conforms to the specified structure and constraints.

- What are some ways to decide which code to test?

  Tesy critical and complex functionality, cover user workflows and use cases.

- What does `RETURNING` do in SQL? When would you use it?

In SQL, the RETURNING clause is used in certain database systems, such as PostgreSQL and Oracle, to retrieve values of specific columns after performing an INSERT, UPDATE, or DELETE operation. It allows you to retrieve the affected data from the modified rows as part of the same SQL statement.

- What are some differences between Web Sockets and HTTP?

HTTP is suitable for traditional request-response communication and transferring structured documents, Web Sockets provide a persistent, bidirectional communication channel that is well-suited for real-time, interactive applications requiring continuous data exchange between clients and servers.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  Flask because Python is easier to read for me and it makes more sense unlike Java Script language can be very vague and complex.
