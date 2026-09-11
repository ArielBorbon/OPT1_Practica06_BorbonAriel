Ariel Eduardo Borbon Izaguirre 252116

Preguntas:

¿qué pasaría si el módulo no quedara registrado en la raíz?
NestJS lo ignoraria, lo que hiciera que las peticiones dieran Error 404



¿por qué los métodos del repositorio devuelven promesas si los datos van a estar en memoria?
Para estar preparados ante el cambio de BD, aunque actualmente tengamos los datos a la mano, es bueno mantenerlo con promesas siempre para cuando cambiemos a una BD real como MySQL, asi cuando hagamos el cambio no tengamos que cambiar nada y dejemos intacto el service



¿qué error apareció al cambiar a la interfaz, y por qué la clase sí se había resuelto sola?
El error salio porque las interfaces no existen cuando se ejecuta el codigo, TS las elimina al pasarse a JS, asi que NestJS no sabe encontrarlas, pero las clases si sobreviven a la compilacion y se quedan en JS, por lo que si las guardamos como Token se pueden usar 



¿por qué el servicio necesita un token para el repositorio, pero el controlador no lo necesita para el servicio?
Porque como pasamos la clase directamente, el token es la misma clase, pero como lo que pasamos para el repositorio es una interfaz, ahi si necesitamos un token para esta para que no se desintegre al momento de compilar y que se pase a JS



¿cuál es la diferencia entre un 400 y un 409?
un 400 significa que el cliente envio informacion de manera incorrecta, como un error de sintaxis y el 409 es una peticion bien escrita pero que choca con una regla de negocio, por ejemplo inscribir a una persona mas a una clase llena



¿por qué cambió el código de estado de esa última petición?
paso de 409 a 201 porque cambiamos el espacio de la clase, como usamos un delete se abrio un espacio, y cuando mandamos otro post ahora con 1 puesto libre se paso la regla de negocio, haciendo que la peticion pasara exitosamente con un 201 created
