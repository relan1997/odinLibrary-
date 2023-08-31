let listBooks=[];
let counter=0;
let show=document.getElementById("showBtn");
let title=document.getElementById("nameTxt");
let author=document.getElementById("authorTxt");
let pages=document.getElementById("numTxt");
let read=document.getElementById("readTxt");
let confirm=document.getElementById("cnfrmBtn");
let display=document.getElementById("showBook");
let dialog=document.getElementById("myDialog");
let flex=document.getElementById("flex");
show.addEventListener("click",()=>{
    dialog.showModal();
});
confirm.addEventListener("click",()=>{
    let obj={};
    if(read.value=="yes" || read.value=="no"){
    obj.title=title.value;
    obj.author=author.value;
    obj.pages=pages.value;
    obj.read=read.value;
    listBooks.push(obj);
    if(counter==1)
    {
        display.click();
    }
    //console.table(listBooks);
    title.value="";
        author.value="";
        pages.value="";
        read.value="";
        console.log("Window Closing");
        dialog.close();
    }
    else
    {
        alert("Wrong Details:Enter again");
        // title.value="";
        // author.value="";
        // pages.value="";
        read.value="";
        console.log("Window shouldn't close");
    }
});
function removeElement(index)
{
    listBooks.splice(index,1);
    display.click();
}
function changeStatus(index)
{
    let x=listBooks[index].read;
    let y=(x=="yes"?"no":"yes");
    listBooks[index].read=y;
    display.click();
}
display.addEventListener("click",()=>{
    let del=document.querySelectorAll(".boxes");
    del.forEach((del)=>{    
        del.remove();
    });
    console.log("clicked");
    let len=listBooks.length;
    for(let i=0;i<len;i++)
    {
        let div=document.createElement("div");
        div.setAttribute("class","boxes")
        div.setAttribute("id",i);
        let p_name=document.createElement("p");
        p_name.textContent=`${listBooks[i].title}`;
        let p_author=document.createElement("p");
        p_author.textContent=`By: ${listBooks[i].author}`;
        let p_pages=document.createElement("p");
        p_pages.textContent=`Pages: ${listBooks[i].pages}`;
        let p_read=document.createElement("p");
        p_read.textContent=`Read Status: ${listBooks[i].read}`;
        let del=document.createElement("button");
        del.addEventListener("click",()=>removeElement(i));
        del.textContent=`Delete Book`;
        del.setAttribute("class","del_book");
        del.style.textAlign='center';
        let status=document.createElement("button");
        status.textContent=`Change Status`;
        status.addEventListener("click",()=>changeStatus(i));
        div.insertAdjacentElement("beforeend",p_name);
        div.insertAdjacentElement("beforeend",p_author);
        div.insertAdjacentElement("beforeend",p_pages);
        div.insertAdjacentElement("beforeend",p_read);
        div.insertAdjacentElement("beforeend",del);
        div.insertAdjacentElement("beforeend",status);
        flex.insertAdjacentElement("beforeend",div);
        console.log("elements added");
        counter=1;
    }
});


