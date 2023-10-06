
// ============= HIDE SHOW FORM BUTTON ===================

var div = document.getElementById('navshow-pc');
var div2 = document.getElementById('navshow-mb');
var display = 1;

function hideshow() 
{
    if(display == 1)
    {
        div.style.display = 'flex';
        div2.style.display = 'flex';
        display = 0;  
    }
    else
    {
        div.style.display = 'flex';
        div2.style.display = 'flex';
        display = 1;
    }
}
