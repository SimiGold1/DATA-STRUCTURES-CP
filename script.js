//Problem 1 
//Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
//Example:
//Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
//Output: 13 (distinct elements 4, 7, 2 )
//Give a solutions to this problem, using arrays

function sumOfDistinctElements(set1, set2) {
    let distinctElements = [];
  
    // Traverse set1 and add distinct elements to the distinctElements array
    for (let i = 0; i < set1.length; i++) {
      if (!distinctElements.includes(set1[i])) {  // Check if the element is already in the distinctElements array
        distinctElements.push(set1[i]);  // Add the element to the distinctElements array if not present
      }
    }
  
    // Traverse set2 and add distinct elements to the distinctElements array
    for (let i = 0; i < set2.length; i++) {
      if (!distinctElements.includes(set2[i])) {  // Check if the element is already in the distinctElements array
        distinctElements.push(set2[i]);  // Add the element to the distinctElements array if not present
      }
    }
  
    // Calculate the sum of distinct elements
    let sum = 0;
    for (let i = 0; i < distinctElements.length; i++) {
      sum += distinctElements[i];  // Add each distinct element to the sum
    }
  
    return sum;  // Return the sum of distinct elements
  }
  
  // Example usage
  let set1 = [3, 1, 7, 9];
  let set2 = [2, 4, 1, 9, 3];
  let result = sumOfDistinctElements(set1, set2);
  console.log(result); // Output: 13

// Problem 2
//You are asked to write an algorithm that fulfill the following:
//Name: Dot product
//Description:
//Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
//Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
//Modify the previous algorithm if you use a dot_product function instead of a procedure.

function dotProduct(v1, v2) {
    let product = 0;
    for (let i = 0; i < v1.length; i++) {
      product += v1[i] * v2[i];  // Multiply the corresponding elements of v1 and v2 and add the result to the product
    }
    return product;  // Return the dot product
  }
  
  function areOrthogonal(v1, v2) {
    let product = dotProduct(v1, v2);  // Calculate the dot product of v1 and v2 using the dotProduct function
    return product === 0;  // Check if the dot product is zero and return true if so, indicating that the vectors are orthogonal
  }
  
  // Example usage
  let vectors = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (let i = 0; i < vectors.length; i++) {
    for (let j = i + 1; j < vectors.length; j++) {
      let v1 = vectors[i];
      let v2 = vectors[j];
      let orthogonal = areOrthogonal(v1, v2);  // Check if the vectors v1 and v2 are orthogonal using the areOrthogonal function
      console.log(`Vectors ${v1} and ${v2} are orthogonal: ${orthogonal}`);
    }
  }