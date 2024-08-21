
function max_width_768px()
{
    if (window.innerWidth <= 768)
    {
        let rowElementList = [].slice.call(document.querySelectorAll('.rowRemove'))
        let colElementList = [].slice.call(document.querySelectorAll('.colRemove'))
        rowElementList.map((element) => {
            element.classList.remove("row");
            
        })
        colElementList.map((element) => {
            element.classList.remove("col");
            element.classList.remove("col-9");
            element.classList.remove("col-3");
        });

    }
}