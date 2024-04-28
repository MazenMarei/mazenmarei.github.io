// let items = document.querySelectorAll('.item');
// let leftbtn = document.getElementById('left');
// let rightbtn = document.getElementById('right');


// let currentImage = 0;




// leftbtn.addEventListener('click', function() {
//     items[currentImage].classList.remove('active');
//     currentImage--;
//     if (currentImage < 0) {
//       currentImage = items.length - 1;
//     }
//     items[currentImage].classList.add('active');
    

// })


// rightbtn.addEventListener('click', function() {
//     items[currentImage].classList.remove('active');
//     currentImage++;
//     if (currentImage >= items.length) {
//       currentImage = 0;
//     }
//     items[currentImage].classList.add('active');
// })
// let popupdiv = document.getElementById("popup");
// let popupbtn = document.getElementById("btn");
// let success = document.getElementById("success");
// popupbtn.addEventListener("click", function() {
//   console.log("clicked");
//   popupdiv.style.display = "block";
// })


// document.getElementById("sub").addEventListener("click", function(event) { 
//   event.preventDefault();
//   success.style.display = "block";
  // popupdiv.style.animationName = "nonpopup";


// })

(async ()=> {
 let modelfile = "You are a helpful assistant.";
 let model = "meta/meta-llama-3-70b-instruct";
 let role = "user";
  let msg = "I need help with my computer.";
  let textBox = document.getElementById("text");
  let chatBox = document.getElementById("chat");
 document.getElementById("sub").addEventListener("click", async function(event) {
  if(textBox.value == "") {
    alert("Please enter a message");
    return
  } else event.preventDefault();
  let msg = textBox.value;
  for await (const chunk of"Generating response...") {
    chatBox.value += chunk;
    await delay(50)
  }
  chatBox.value += "\n";

  const response = await axios.post('http://localhost:11434/api/generate', 
  {
    "model": "llama3",
    "prompt": msg,
    "stream" : false
  });
  chatBox.value = chatBox.value.replace("Generating response...", "");
  for await (const chunk of response.data.response) {
    chatBox.value += chunk;
    await delay(100);
  }
  chatBox.value += "\n";
 })
})()


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}