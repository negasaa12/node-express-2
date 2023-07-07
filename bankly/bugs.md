

- BUG #1 User/[username] doesn't throw error when a username doesn't exist. There was no test to check if username doesn't exist. 


- BUG #2 in helpers/partialUpdate the function was returning * showing personal information like password and if they're admins.

- BUG #3 in auth/register the admin key wasn't being taken from the body so it always defaulted for user to be false. 

-#BUG 4 