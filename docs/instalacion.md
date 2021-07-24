# Instalación del CLI

```shell
yarn global add @nestjs/cli
```

**Validar la versión instalada:**

 ```shell
 nest -v
 ```

## Estructura de una aplicación

![image-20210724174825425](./img/struture_app.png)

## Crear un nuevo proyecto

```shell
nest new nombre_proyecto
```

## Correr el proyecto

```shell
yarn start:dev
```

## Module

* Cada aplicación tiene por lo menos un módulo (root module). Este es el punto de inicio de la aplicación.
* Los módulos son una forma eficaz de organizar componentes mediante un conjunto de capacidades estrechamente relacionadas.
* Es una buena practica tener una carpeta por módulo.
* Un módulo es singleton, por lo tanto un módulo puede ser inportado multiples veces desde otros otros módulos.
* Esta definido por una clase que esta anotada por el decorador: @Module.
* El decorador provee metadata que Nest usa para organizar la estructura de la aplicación.
* Propiedades del decorador:
  * providers: Un array de providers que estarán disponibles dentro del módulo a través de la inyección de dependencias.
  * controllers: Una array de controladores que seran instanciados con el módulo.
  * exports: Un array de providers a exportar a otros módulos.
  * imports: Una lista de módulos rqueridos por este módulo. Algun provider exportado por estos módulos pueden ser ahora accesibles en nuestro modulo via inyección de dependencias.

therefore - por lo tanto
