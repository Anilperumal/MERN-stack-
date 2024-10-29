    // 1. write every input in form tag 
    // 2. dont take button instead take input with type submit
    // 3. add event listener to form tag
    // 4. event name should be submit
    // 5. whenever we use form it try to send data to server, In this process page reload.... to prevent this default submit we use 
    // event.preventDefault()   which prevents form tag to send data to server


    document.querySelector("form").addEventListener("submit", todo);

    function todo(){
        event.preventDefault();

        let name=document.querySelector("#name").value;
        let qty=document.querySelector("#quantity").value;
        let prior=document.querySelector("option").value;
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerText=name;
        let td2=document.createElement("td");
        td2.innerText=qty;
        let td3=document.createElement("td");
        td3.innerText=prior;
        tr.append(td1,td2,td3);
        document.querySelector("tbody").append(tr);
    }
