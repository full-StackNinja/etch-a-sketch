//Ensure DOM Content is properly loaded before applying JS Code to them...
document.addEventListener("DOMContentLoaded", ()=>{
    const divContainer = document.createElement("div");
    const btn = document.createElement("button");
    btn.textContent = "Click to Change Grid Size";
    divContainer.classList.add("div-container");
    document.body.appendChild(divContainer);
    document.body.prepend(btn);

    const removeAllChilds =  function(parent){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild)
        }
    }
    const getGridSize = function(gridSize=16){
        // First remove already existing childs 
        removeAllChilds(divContainer);
        if(gridSize>100){
            getGridSize(prompt(`You entered grid size of ${gridSize} which is greater 
than maximum limit of 100! Please enter grid size less than 100`,''));
        }
        else{
            const totalDivs = gridSize**2;
            const divWidth = 100/gridSize-0.0;
            const divHeight = 100/gridSize-0.0;
            for(let i=1; i<=totalDivs; i++){
                let div = document.createElement("div");
                div.classList.add("squareDiv")
                div.style.minWidth = `${divWidth}vw`;
                div.style.minHeight = `${divHeight}vh`;
                divContainer.appendChild(div)
            }
        }
    }

    btn.addEventListener("click", ()=>{
        getGridSize(prompt("Enter Grid Size(max 100)", ''));
    })
    // Initially set default grid size of "16x16"...
    getGridSize();
    //Color generator using hash values...
    const colorGenerator = function(){
        const colorLetters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        let colorCode = "";
        for(let i=0; i<6; i++){
            let randomNum = Math.floor(Math.random()*16);
            colorCode+= colorLetters[randomNum];
        }
        return colorCode;
    }
    // Add event delegation to the parent element...
    divContainer.addEventListener("mouseover", function(e){
        if(e.target !== divContainer){
            console.log(`${e.target}`);
            let hoveredChild = e.target;
            hoveredChild.style.backgroundColor = `#${colorGenerator()}`;
        }
    })
    divContainer.addEventListener("mouseout", function(e){
        let hoveredChild = e.target;
        hoveredChild.style.backgroundColor = "#112233";
    })  
    });