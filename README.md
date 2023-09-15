# DATA-STRUCTURES-CP
This checkpoint solves this question
write an algorithm that fulfills the following description:
Problem 1
 
Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2 )
Give a solutions to this problem, using arrays
 
Problem 2 
You are asked to write an algorithm that fulfill the following: 

Name: Dot product
Description:
Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
Modify the previous algorithm if you use a dot_product function instead of a procedure.
Key notes to consider:
Problem 1
Solution  with an array.

Initialize sum = 0. 
Compare each element of set one with the second set and if element is not present then add that element to sum. 
Then do the vice versa to add elements from the second set.
Problem 2

While creating your algorithm, you should: 

Use array for presenting the vector.
Use nested loop (a loop inside another if you want)
Use different types of passing parameters

Pseudo code of Problem 1
Initialize an empty array called "distinctElements[]".
Initialize a variable called "sum" to 0.
Iterate through each element in Set 1:[3, 1, 7, 9]
If the element is not present in distinctElements[], add it to the array.
Add the element to the sum.
Iterate through each element in Set 2:[2, 4, 1, 9, 3]
If the element is not present in distinctElements[], add it to the array.
Add the element to the sum.
Return the sum.

Pseudo code of Problem 2
Create a function called "dot_product(vector1[], vector2[])" that calculates the dot product of two vectors and returns the result.
Create a function called "areOrthogonal(vector1[], vector2[])" that takes two vectors as input.
Calculate the dot product of vector1 and vector2 using the "dot_product()" function.
If the dot product is equal to 0, return true (vectors are orthogonal).
Otherwise, return false (vectors are not orthogonal).
Repeat steps 3-5 for each pair of vectors.
