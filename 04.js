
function descobrirInterruptores() {
    
    let lampada1 = false;
    let lampada2 = false;
    let lampada3 = false;

    
    let interruptor1 = true;
    
    let interruptor2 = true;

    lampada1 = interruptor1;
    lampada2 = interruptor2;
    lampada3 = interruptor1 !== interruptor2;

    
    console.log("Interruptor 1 controla a lâmpada:", lampada1);
    console.log("Interruptor 2 controla a lâmpada:", lampada2);
    console.log("Interruptor restante controla a lâmpada:", lampada3);
}


descobrirInterruptores();
