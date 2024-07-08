document.getElementById("inbtn").addEventListener("click",incrementCounter);
document.getElementById("debtn").addEventListener("click",decrementCounter);
document.getElementById("reset").addEventListener("click",resetCounter);
let counter=document.getElementById("coundis");
let co=0;
function updatecounterdisplay()
{
    counter.textContent=co;
}
function incrementCounter()
{
    co++;
    updatecounterdisplay();

}
function decrementCounter()
{
    if(co >0)
    {
        co--;
    updatecounterdisplay();
    }

}
function resetCounter()
{
    co=0;
    updatecounterdisplay();

}