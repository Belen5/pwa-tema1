let num1, num2;

function generarNumeros() {
    const tipos = ["natural", "decimal", "fraccion"];
    const t = tipos[Math.floor(Math.random() * tipos.length)];

    if (t === "natural") {
        num1 = Math.floor(Math.random() * 100);
        num2 = Math.floor(Math.random() * 100);
    }

    if (t === "decimal") {
        num1 = (Math.random() * 10).toFixed(2);
        num2 = (Math.random() * 10).toFixed(2);
    }

    if (t === "fraccion") {
        const fracciones = ["1/2", "3/4", "2/3", "4/5"];
        num1 = fracciones[Math.floor(Math.random() * fracciones.length)];
        num2 = fracciones[Math.floor(Math.random() * fracciones.length)];
    }

    document.getElementById("num1").textContent = num1;
    document.getElementById("num2").textContent = num2;

    document.getElementById("resultado").textContent = "";
    document.getElementById("explicacion").textContent = "";
}

function convertir(n) {
    if (typeof n === "string" && n.includes("/")) {
        const [a, b] = n.split("/");
        return parseFloat(a) / parseFloat(b);
    }
    return parseFloat(n);
}

function respuesta(opcion) {
    const n1 = convertir(num1);
    const n2 = convertir(num2);

    let correcto = false;

    if (opcion === "num1" && n1 > n2) correcto = true;
    if (opcion === "num2" && n2 > n1) correcto = true;

    const r = document.getElementById("resultado");
    const e = document.getElementById("explicacion");

    if (correcto) {
        r.textContent = "Correcto 🎉";
        r.style.color = "green";
    } else {
        r.textContent = "Incorrecto ❌";
        r.style.color = "red";
    }

    e.textContent = `Valor decimal: ${n1} vs ${n2}`;
}

function verificarAutoeval() {
    const correctas = { p1: "b", p2: "c", p3: "b" };
    let puntos = 0;

    for (let p in correctas) {
        const seleccionada = document.querySelector(`input[name="${p}"]:checked`);
        if (seleccionada && seleccionada.value === correctas[p]) {
            puntos++;
        }
    }

    const r = document.getElementById("resultadoAutoeval");
    r.textContent = `Obtuviste ${puntos} de 3 correctas.`;
}
generarNumeros();
