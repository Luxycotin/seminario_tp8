function generarMatriz(filas, columnas) {
    return tf.randomUniform([filas, columnas], 1, 21, 'int32');
}

function operacionesConMatrices(filas, columnas) {
    const A = generarMatriz(filas, columnas);
    const B = generarMatriz(filas, columnas);

    const suma = tf.add(A, B);
    const multiplicacion = tf.matMul(A, B);

    Promise.all([
        A.array(),
        B.array(),
        suma.array(),
        multiplicacion.array()
    ]).then(([a, b, s, m]) => {
        console.log("Matriz A:", a);
        console.log("Matriz B:", b);
        console.log("Suma:", s);
        console.log("Multiplicación:", m);
    });
}

operacionesConMatrices(3, 3);
