
document.addEventListener("DOMContentLoaded", function(event) {
    cherryCheesecake = ['B9121B', '4C1B1B', 'F6E497', 'FCFAE1', 'BD8D46'];
    waterMelon       = ['7D8A2E', 'C9D787', 'FFFFFF', 'FFC0A9', 'FF8598'];
    sparclingSife    = ['171119', '311332', '660C47', 'B23467', 'CCBB51'];
    antigravity      = ['F00807', '5F6273', 'A4ABBF', 'CCC9D1', 'E2E1E9'];
    ocean            = ['003840', '005A5B', '007369', '008C72', '02A676']
    blackAndWhite    = ['000', 'FFF'];

    palettes = [cherryCheesecake, waterMelon, sparclingSife, ocean, antigravity, blackAndWhite];
    
    console.log("DOM fully loaded and parsed");
    document.body.innerHTML += "<div class='field' id='tile-field'></div>";
    field = document.getElementById("tile-field");
    amount = 8
    interval = 100;
    transition = true;
    palette = 4;
    updateTiles = function(){
        field.innerHTML = ""
        for (i = 0; i < Math.pow(amount, 2); i++){
            field.innerHTML += "<div class='field-tile' id='tile" + i + "'>";
            tile = document.querySelector("#tile" + i);
            tile.style.width = tile.style.height =(100/amount) + '%';
        }
    }

    getRandomColor = function () {
        if(palette == 0){
            return Math.floor(Math.random()*16777215).toString(16);
        }else{
            current = palettes[palette-1]
            return current[Math.floor(Math.random()*current.length)]
        }
    }

    updateColors = function () {
        for (i = 0; i < Math.pow(amount, 2); i++){
            tile = document.querySelector("#tile" + i);
            color = getRandomColor() 
            tile.style.backgroundColor = '#'+color;
        }
    }

    updateTiles();
    updateColorsInterval = setInterval(updateColors, interval);

    document.onkeypress = function(e){
        console.log(e.keyCode)
        switch(e.keyCode){
        case 113:
            interval = 100;
            break;
        case 100:
            interval = 200;
            break;
        case 114:
            interval = 300;
            break;
        case 93:
            transition = false;
            break;
        case 91:
            transition = true;
            break;
        case 105:
            interval -= 10;
            break;
        case 39:
            interval += 10;
            break;
        case 44:
            amount -= 1;
            updateTiles();
            break;
        case 46:
            amount += 1;
            updateTiles();
            break;
        case 47:
            palette++;
            if(palette > palettes.length){palette = 0}
        }
        for (i = 0; i < Math.pow(amount, 2); i++){
            tile = document.querySelector("#tile" + i);
            if(transition){
                tile.style.transition = "background-color " + (interval/1000) + "s"
            }else{
                tile.style.transition = 'none'
            }
        }
        clearInterval(updateColorsInterval);
        updateColorsInterval = setInterval(updateColors, interval);
    };

});
