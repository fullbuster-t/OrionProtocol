---
layout: post
title: "Demostración de la creación, puesta en escena y commits"
date: 2024-08-16 08:50:00 -0600
categories: [Git y GitHub]
tags: [Git]
description: Ahora crearemos un nuevo fichero al que llamaremos README.md. Este es un archivo especial con la extensión Markdown, que se utiliza frecuentemente al subir repositorios a plataformas como GitHub.....
img: /assets/img/git-007.png
---

---

Ahora crearemos un nuevo fichero al que llamaremos README.md. Este es un archivo especial con la extensión Markdown, que se utiliza frecuentemente al subir repositorios a plataformas como GitHub. Este archivo permite proporcionar información importante sobre el proyecto, como su propósito, cómo instalarlo y usarlo, así como cualquier otra información relevante que los colaboradores y usuarios deban conocer.

![alt text](/assets/img/git-007-1.png){: width="600" }

Una vez que creamos el archivo README.md, escribimos un mensaje sobre él siguiendo las reglas de Markdown. Esto puede incluir encabezados, listas, enlaces, imágenes y otros elementos que ayuden a estructurar la información de manera clara.

Después de redactar el contenido, lo añadimos al stage de Git, utilizando el comando adecuado. Esto permite que los cambios realizados en el archivo sean registrados en la próxima confirmación (commit).

![alt text](/assets/img/git-007-2.png){: width="700" }

Ahora bien, si nosotros cambiamos de opinión y ya no queremos agregar este fichero o archivo al stage, podemos quitarlo con el siguiente comando:

**git reset README.md**

![alt text](/assets/img/git-007-3.png){: width="700" }

Y veremos que VSCode nos marca este archivo como untracked, es decir, que no se encuentra dentro del stage de Git.

![alt text](/assets/img/git-007-4.png){: width="600" }

Si en un futuro edito el README, es necesario hacer git add y git commit; esto quitaría un poco de tiempo. Es por ello que haremos estas dos acciones en una sola línea de comando.

**git commit -am "Readme updated"**

![alt text](/assets/img/git-007-5.png){: width="700" }

Es necesario mencionar que este comando solo funciona si ya se ha dado seguimiento previo al fichero.

Otro comando muy necesario es:

**git log**

Nos ayuda a ver los logs de mi repositorio.

![alt text](/assets/img/git-007-6.png){: width="700" }

Dentro de la información que nos ofrece ese comando esta lo siguiente:

**hash:**  Este es único y nunca habrá dos commits que tengan el mismo hash; funge como identificador único del commit realizado.

![alt text](/assets/img/git-007-7.png){: width="550" }

**head:**  punto en el cual se encuentra la última versión de nuestro repositorio.

![alt text](/assets/img/git-007-8.png){: width="550" }

**author:**  Indica el autor que ha realizado ese commit proporcionando el nombre y su correo electrónico.

![alt text](/assets/img/git-007-9.png){: width="550" }

**date:**  Indica la fecha y la hora en la que se realizo el commit.

![alt text](/assets/img/git-007-10.png){: width="550" }

**mensaje:** en el se encuentra el mensaje que fue adjuntado al momento de hacer commit.

![alt text](/assets/img/git-007-11.png){: width="550" }


**Debemos tener en cuenta que los commits están ordenados de más reciente a más antiguo.**
