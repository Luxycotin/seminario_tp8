import tensorflow as tf


def generar_matriz(dim):
    return tf.random.uniform(shape=dim, minval=1, maxval=21, dtype=tf.int32)


def operaciones_con_matrices(dim):
    A = generar_matriz(dim)
    B = generar_matriz(dim)

    suma = tf.add(A, B)
    multiplicacion = tf.matmul(A, B)

    return A, B, suma, multiplicacion


dimension = (3, 3)


A, B, suma, multiplicacion = operaciones_con_matrices(dimension)


print("Matriz A:", A.numpy())
print("Matriz B:", B.numpy())
print("Suma:", suma.numpy())
print("Multiplicación:", multiplicacion.numpy())