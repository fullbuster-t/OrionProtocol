---
layout: post
title: "Que hace git por nosotros en estos momentos"
date: 2024-08-09 09:07:00 -0600
categories: [Git y GitHub]
tags: [Git]
description: Usualmente, cuando se está desarrollando o programando un proyecto, se deben realizar cambios de un momento a otro, y en algunas ocasiones estos cambios no resultan ser los últimos realizados.....
img: /assets/img/git-004.webp
---

--- 

Usualmente, cuando se está desarrollando o programando un proyecto, se deben realizar cambios de un momento a otro, y en algunas ocasiones estos cambios no resultan ser los últimos realizados. En otras ocasiones, incluso se debe regresar al modelo principal del proyecto. Teniendo esto en cuenta, un sistema de gestión de versiones nos ayudaría a cubrir esa necesidad, ya que, con un sistema de control de versiones, se podría viajar a esa versión base del proyecto y realizar comparaciones, restauraciones, o incluso experimentar con diferentes funciones sin temor a perder el trabajo anterior.

Es aquí donde Git nos cubre esa necesidad y nos ofrece una herramienta poderosa que, una vez utilizada, puede volverse imprescindible en el flujo de trabajo. Git permite hacer un seguimiento detallado de cada cambio en el código, facilitando la colaboración y el mantenimiento del historial de versiones de manera organizada.

Para ver la funcionalidad de el siguiente comando haremos modificaciones en nuestro index.html

![alt text](/assets/img/git-004-1.webp){: width="600" }

Eliminaremos la sección indicada del index y guardaremos los cambios. Hacemos la analogía de que en un futuro no podremos regresar al estado inicial usando ctrl + z como se haría de la manera tradicional.

Para poder recuperar y hacer un regresión en el archivo usaremos el comando “git checkout — .”

**git checkout -- .**  
Este comando nos ayuda a decir a git que queremos que el proyecto regrese al estado en donde se realizo el último commit. En este caso si usamos git log podremos ver que referencia tomará git.

![alt text](/assets/img/git-004-2.webp){: width="600" }

![alt text](/assets/img/git-004-3.webp){: width="600" }

Una vez que ejecutamos el comando podemos ver que el index.html recupero su estructura anterior y los cambios han sido descartados. 

![alt text](/assets/img/git-004-4.webp){: width="600" }

Debemos entender que solo hará cambios y tomará en cuenta esta regresión sobre los archivos a los que ya les esta dando seguimiento, si nosotros hacemos cambios dentro de un archivo que no ha sido agregado al stage y también hecho commit de el git no tendrá ningún registro de sus modificaciones.
