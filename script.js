const byteSize = (str) => {
  // write your code here
	const encoder = new TextEncoder();
  // Encode the string into an ArrayBuffer
  const encoded = encoder.encode(str);

  // Get the byte length of the ArrayBuffer
  const byteLength = encoded.byteLength;

  return byteLength;
};
// Do not change the code below  
const str = prompt("Enter some string.");
alert(byteSize(str));
