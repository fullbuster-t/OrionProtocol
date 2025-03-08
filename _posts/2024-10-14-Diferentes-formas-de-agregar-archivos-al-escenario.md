---
layout: post
title: "Diferentes formas de agregar archivos al escenario"
date: 2024-10-14 11:37:00 -0600
categories: [Git y GitHub]
tags: [Git]
description: Cuando editamos varios archivos dentro de un repositorio, lo más común es que, al terminar, se realice un commit que englobe todos los cambios realizados.....
img: /assets/img/git-009.webp
---

--- 

> Nota: Para el desarrollo de esta parte haremos uso de una carpeta con una serie de archivos que utilizaremos para familiarizarnos con algunos comandos de git.  
> [**Descarga del proyecto**](https://drive.google.com/file/d/1WStEZOTuuqGcdokfw2I2mRT3W7VlSbZi/view?usp=sharing)    
> Lo que haremos es descargar el .zip. Una vez descargado lo descomprimimos y accedemos a el mediante la terminal de git “git bash” usando el comando **cd [seguido de la ruta de la carpeta]**.  
> Una vez que ya tengan abierto el repositorio dentro de git bash podemos continuar con las practicas de git.  

Cuando editamos varios archivos dentro de un repositorio, lo más común es que, al terminar, se realice un *commit* que englobe todos los cambios realizados. Sin embargo, esto no siempre es la mejor opción, ya que se sugiere agrupar los cambios en bloques, como archivos HTML fundamentales del repositorio, archivos CSS, entre otros. Por ello, existen diversas formas de añadir archivos al *stage* (escenario), y estas son algunas de ellas:

git add index.html main.html
Aquí añadimos un par de archivos dentro de el escenario para conservar los bloques en los cuales debemos hacer commit.

![alt text](/assets/img/git-009-1.webp){: width="700" }

Se observa que estos dos archivos están dentro del escenario agregados en forma de bloque de archivos

Para un gran número de archivos HTML, añadir cada archivo uno por uno puede ser una tarea bastante complicada. Para facilitar este proceso, podemos utilizar comodines. Teniendo esto en cuenta, la estructura del nuevo comando sería la siguiente:

**git add * .html**

![alt text](/assets/img/git-009-2.webp){: width="700" }

Como podemos observar, el resultado es el mismo que con el comando anterior, en el que añadíamos los archivos HTML uno por uno. Sin embargo, esta opción permite ahorrar tiempo al momento de realizar los commits.

![alt text](/assets/img/git-009-3.webp){: width="700" }

![alt text](/assets/img/git-009-4.webp){: width="600" }

Ahora para comprobar el poder de eficiencia de este comodín haremos las misma operación con los archivos js.

![alt text](/assets/img/git-009-5.webp){: width="700" }

Como podemos observar, se generan advertencias acerca de esta sintaxis de comando. El problema radica en que git add solo toma en cuenta los archivos en el nivel raíz del proyecto. Por ello, debemos especificar en qué carpeta se encuentran los archivos que queremos agregar.

![alt text](/assets/img/git-009-6.webp){: width="700" }

![alt text](/assets/img/git-009-7.webp){: width="700" }

También existe el caso en el que nosotros agreguemos una nueva carpeta o directorio, en este caso si la carpeta no contiene ningún archivo git la ignorará en automático.

![alt text](/assets/img/git-009-8.webp){: width="300" }

![alt text](/assets/img/git-009-9.webp){: width="700" }

Sin embargo, esto representa un problema con la carpeta que contiene los archivos que un usuario puede subir a nuestro repositorio. Para solucionar esto, existe un archivo especial de Git que le indica al sistema mantener la carpeta para recibir actualizaciones continuas.

![alt text](/assets/img/git-009-10.webp){: width="500" }



