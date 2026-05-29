# Metodología de curso autoconducido con Claude

Este documento describe el método que estamos usando para construir el curso de Historia de Argentina, pensado para ser **portable** a otras áreas del conocimiento: economía, filosofía, historia de la ciencia, derecho, literatura, política comparada, teoría política, historia del arte, antropología cultural, etc. La idea es que cualquier campo donde haya un cuerpo de conocimiento contestado, fuentes diversas, y necesidad de profundidad, pueda trabajarse con esta misma estructura.

## 1. Los tres pilares

Todo el método se apoya en tres compromisos explícitos que conviene hacer al principio del curso y dejar escritos en la memoria del asistente para que se reiteren sesión tras sesión.

**Rigor.** Citar siempre fuentes documentales: monografías académicas, archivos primarios, datos cuantitativos de organismos independientes. Distinguir entre hechos documentados, interpretaciones de distintas escuelas, y opinión propia (del asistente o del usuario). Nunca presentar una lectura como única cuando hay disputa.

**Pluralidad.** Mostrar cómo distintas escuelas o tradiciones interpretan los mismos hechos. No flatten las disputas: nombrarlas explícitamente, ubicar cada autor en su corriente, dejar al lector ver el mapa intelectual completo. Esto es central porque la mayoría de las áreas valiosas son disputadas; el aplanamiento intelectual produce manuales infantiles, no formación adulta.

**Franqueza.** Decir lo que la narrativa estándar omite o tergiversa. No reemplazar una mitología por otra. Asumir que el usuario quiere la verdad incómoda, no la versión cómoda. Si el asistente tiene opinión propia, ofrecerla cuando se le pida; si discrepa con el usuario, decirlo respetuosamente. La aprobación complaciente no es servicio.

## 2. La arquitectura de tres ejes

Cada módulo trabaja tres ejes analíticos en paralelo. Esto evita el reduccionismo (el error de contar la historia política como si fuera la historia entera, o la económica como si fuera el subterráneo de todo lo demás).

Para Historia de Argentina los ejes son: **histórico-político**, **económico** y **social-cultural**. Pero la arquitectura se traslada fácilmente a otros campos.

| Área | Eje 1 | Eje 2 | Eje 3 |
|---|---|---|---|
| Historia | político | económico | social/cultural |
| Economía | macro | micro | historia económica |
| Filosofía | ontología/metafísica | epistemología | ética y política |
| Filosofía moderna | autor/biografía | sistema teórico | recepción y crítica |
| Historia de la ciencia | descubrimientos | instituciones | filosofía implícita |
| Política comparada | instituciones | economía política | cultura política |
| Derecho | normativo | doctrinal | sociología jurídica |
| Literatura | obra | autor/contexto | recepción crítica |
| Arte | obra/técnica | mecenazgo/economía | recepción cultural |
| Antropología | etnografía | estructura social | cosmovisión |

La regla: tres ejes que iluminen el mismo objeto desde ángulos no reducibles entre sí. Si dos ejes están demasiado solapados, falta complejidad. Si los tres ejes no se hablan entre sí, sobra.

## 3. Estructura interna de cada módulo

Plantilla recomendada para cada módulo —ajustar según el campo—:

1. **Contexto y cronología.** Qué pasa en el mundo y en regiones vecinas en paralelo. Útil para no aislar el caso.
2. **Eje 1.** Narrativa principal del primer eje.
3. **Eje 2.** Narrativa principal del segundo eje.
4. **Eje 3.** Narrativa principal del tercer eje.
5. **Personajes (o autores, escuelas, instituciones) clave.** Perfiles breves de los protagonistas con datos verificables.
6. **Fuentes primarias.** Citas literales o fragmentos representativos de documentos originales: leyes, manifiestos, cartas, datos estadísticos, obras de los autores discutidos.
7. **Debates historiográficos (o teóricos).** La sección distintiva. Identificar dos o tres puntos donde las escuelas chocan, mostrar la lectura de cada una, ubicarlas en su corriente, no resolverlas artificialmente.
8. **Mapa, gráfico o cuadro.** Apoyo visual: línea de tiempo, mapa, comparación demográfica, árbol genealógico de ideas, cuadro sinóptico. Hecho en SVG inline para ahorrar tokens.
9. **Lecturas recomendadas.** Dos o tres obras (mainstream + contraste) para profundizar.

Cada módulo termina con un enlace al siguiente y al índice maestro.

## 4. Producción en dos sesiones + discusión

Cada módulo se construye en dos sesiones principales más una fase de discusión.

**Sesión A — Esqueleto y narrativa principal.** Se genera el HTML completo con el contenido sustantivo de los tres ejes, personajes, fuentes primarias y bibliografía. Sin gráficos todavía, sin la sección de debates expandida. Salida típica: ~12 a 18 páginas de prosa.

**Sesión B — Gráficos, debates, polish.** Sobre el archivo ya escrito, se **edita** (no se reescribe). Se agregan los grafismos SVG, se expande la sección de debates con las distintas escuelas en confrontación, se ajustan errores o lagunas detectadas en la lectura, se pulen los datos. Salida típica: 5 a 10 páginas extras + 3 a 6 grafismos.

**Fase de discusión (entre módulos).** El usuario lee el HTML completo, anota dudas y preguntas de ampliación, y vuelve a la conversación para profundizar. El asistente responde sin necesariamente generar archivo. Si de la discusión sale algo que merece quedar registrado, se incorpora al HTML del módulo mediante una edición puntual. Esta fase es central, no opcional: es donde el conocimiento se asienta y se vuelve crítico.

## 5. Formato y economía de tokens

Las decisiones de formato no son cosméticas: determinan cuánto cuesta producir y mantener el curso.

**HTML autocontenido** sobre PDF, porque evita el overhead de generación (instalación de dependencias, LaTeX o ReportLab, fuentes, render). Texto plano con etiquetas, sin pasos de generación adicionales. Visualmente igual de cuidado, mucho más barato.

**CSS común reutilizable** en un solo archivo `estilos.css` enlazado por todos los módulos. Se escribe una vez al inicio del curso; cada módulo lo referencia con una etiqueta `<link>`. Esto ahorra entre el 20% y el 40% del coste por módulo.

**SVG inline para grafismos.** Líneas de tiempo, mapas esquemáticos, comparaciones de barras, árboles genealógicos. Un gráfico SVG completo y limpio suele ocupar entre 30 y 100 líneas de código —barato—. Evitar bibliotecas pesadas salvo que se necesite interactividad real. Evitar absolutamente imágenes incrustadas en base64: son el peor coste posible en tokens. Si se necesitan ilustraciones (retratos, fotos históricas), enlazar a Wikimedia Commons.

**Editar, no reescribir.** Las sesiones B y las ampliaciones por discusión usan la herramienta de edición puntual del asistente, no reescritura completa. Esto multiplica por tres o cuatro la eficiencia.

**Memoria persistente entre sesiones.** Las preferencias, el canon de fuentes, el estilo de escritura y la estructura del curso quedan guardados en archivos de memoria que el asistente recarga automáticamente. El usuario no necesita repetir el contexto al inicio de cada sesión.

## 6. Adaptar este método a otras áreas

### Economía

Estructura sugerida en módulos: 1) Pensamiento económico antiguo y mercantilismo · 2) Clásicos (Smith, Ricardo, Marx) · 3) Marginalismo y neoclásicos · 4) Keynesianismo · 5) Monetarismo y Escuela de Chicago · 6) Escuela Austríaca · 7) Estructuralismo y dependencia · 8) Nueva economía clásica y RBC · 9) Behavioral economics · 10) Economía post-2008 · 11) Economía del cambio climático · 12) Debates contemporáneos.

Ejes: macro / micro / historia económica.

Pilar de pluralidad: imprescindible. Pocas áreas son tan disputadas. Mostrar siempre cómo lee cada escuela los mismos episodios (1929, 1973, 2008, hiperinflaciones, crisis de deuda). Los datos cuantitativos deben venir de fuentes independientes (Banco Mundial, FMI, Maddison Project, Penn World Tables, IPUMS).

### Filosofía

Estructura sugerida: 1) Pensamiento prefilosófico y origen griego · 2) Clásicos griegos (Sócrates, Platón, Aristóteles) · 3) Helenismo y filosofía romana · 4) Pensamiento medieval (Agustín, Tomás, Avicena, Maimónides) · 5) Modernidad temprana (Descartes, Spinoza, Leibniz) · 6) Ilustración (Locke, Hume, Kant) · 7) Idealismo alemán · 8) Pensamiento del XIX (Marx, Nietzsche, Kierkegaard) · 9) Fenomenología y existencialismo · 10) Filosofía analítica · 11) Filosofía contemporánea continental · 12) Debates actuales (filosofía de la mente, ética aplicada, IA).

Ejes posibles: ontología y epistemología / ética y política / lenguaje y método. O alternativamente: autor y biografía / sistema teórico / recepción y crítica.

Pilar de franqueza: indispensable para no caer en hagiografía. Mostrar contradicciones, errores, contextos de prejuicios.

### Historia de la ciencia

Estructura sugerida: 1) Ciencia antigua y oriental · 2) Ciencia medieval islámica y latina · 3) Revolución científica (Copérnico a Newton) · 4) Ilustración científica · 5) Siglo XIX: termodinámica, evolución, electromagnetismo · 6) Crisis de fundamentos (relatividad, cuántica) · 7) Biología molecular y ADN · 8) Big Science y posguerra · 9) Computación e informática · 10) Genómica · 11) Cambio climático y ciencia · 12) Frontera contemporánea.

Ejes: descubrimientos y teorías / instituciones y financiamiento / filosofía implícita y controversias.

Pilar de pluralidad: confrontar el relato whig (la ciencia como progreso lineal) con el de Kuhn (revoluciones), con el constructivismo social, con el realismo científico.

### Pasos para arrancar un curso nuevo en cualquier área

1. **Definir el alcance.** ¿De dónde a dónde? ¿Qué quedará fuera?
2. **Acordar fuentes.** Hacer una lista de los autores y obras canónicas, identificar las distintas corrientes, decidir qué se incluye y qué se excluye. Discutirlo con el asistente al principio.
3. **Acordar ejes.** Elegir tres ejes que cubran el objeto sin solaparse demasiado.
4. **Acordar periodización.** Dividir el campo en 10–15 módulos según hitos naturales.
5. **Guardar todo en memoria.** Pedirle al asistente que registre las decisiones para no renegociarlas en cada sesión.
6. **Crear la infraestructura.** Sesión 0: índice maestro, hoja de estilos común, recursos transversales (línea de tiempo, glosario, mapas si aplica).
7. **Empezar por el Módulo 1.** Sesión A primero, después sesión B.
8. **Discutir antes de avanzar.** No saltar al módulo siguiente sin haber pasado por la fase de discusión del anterior. Es donde el conocimiento cuaja.
9. **Mantener el canon vivo.** A medida que el curso avanza, agregar fuentes, corregir énfasis, dejar constancia de cambios de criterio.

## 7. Plantillas de prompts útiles

Para activar el método en una conversación nueva con un asistente capaz:

> Voy a construir un curso detallado sobre **[área del conocimiento]** organizado en doce módulos. El enfoque debe ser plural-comparativo, riguroso documentalmente, y honesto con los puntos donde las distintas escuelas o tradiciones discrepan. Antes de empezar, quiero conversar sobre las **fuentes** —qué autores y obras canónicas incluir y excluir—, la **periodización** —qué cortes hacer entre módulos— y los **ejes analíticos** —qué tres ángulos vamos a sostener en cada módulo—. Cuando lleguemos a un acuerdo, lo guardás en memoria y arrancamos por el Módulo 1.

> Estoy construyendo el módulo **[N]** de un curso sobre **[área]**. Sesión A: generá el HTML autocontenido con el esqueleto del módulo y el contenido principal de los tres ejes, perfiles de los autores/protagonistas clave, fuentes primarias citadas, y bibliografía. Sin gráficos por ahora. Usá el CSS común que ya existe en `estilos.css`.

> Sobre el HTML del módulo **[N]** que ya generaste, ahora hace la Sesión B: agregá los grafismos SVG inline donde corresponda, expandí la sección de debates con las distintas escuelas en confrontación, y pulí lo que haga falta. Editá el archivo, no lo reescribas.

> Estoy en fase de discusión del módulo **[N]**. Mi pregunta es: **[pregunta de ampliación]**. Respondé en conversación, sin generar archivo. Si lo que sale es importante, al final me proponés agregar un párrafo al HTML del módulo.

## 8. Errores frecuentes y cómo evitarlos

**Saltar el acuerdo inicial sobre fuentes.** Si no se acordó qué canon usar, cada sesión va a re-empezar la discusión. Pérdida de tiempo y de coherencia.

**Generar todo de una sola vez.** Pedirle al asistente "hacé el curso entero" produce un texto largo, plano y caro. La división en módulos y sesiones es lo que permite profundidad.

**Aceptar la primera versión sin discutir.** La fase de discusión no es decorativa. Es donde el conocimiento se vuelve crítico. Si se la salta, el curso termina siendo enciclopedia, no formación.

**Pedir imágenes incrustadas.** Es el error más caro en tokens. Siempre enlazar a fuentes externas (Wikimedia Commons, archivos públicos) y dejar al navegador hacer el resto.

**No guardar en memoria.** Si el asistente tiene memoria persistente, usarla. Si no la tiene, mantener un archivo de "estado del curso" que se le pase al inicio de cada sesión.

**Confundir profundidad con extensión.** Un módulo de 25 páginas bien escritas vale más que uno de 80 páginas con relleno. La medida no es la cantidad de texto sino la cantidad de pensamiento por página.

## 9. Una nota final

Este método nació para Historia de Argentina pero la estructura subyacente —tres pilares, tres ejes, doce módulos, dos sesiones de producción más discusión, HTML con SVG inline, memoria persistente— funciona en cualquier campo donde haya algo serio que aprender y donde la verdad no esté resuelta de antemano. Eso es prácticamente todo lo que vale la pena estudiar.

Lo que distingue a este método de un manual o de un MOOC convencional no es el contenido. Es la **postura epistémica**: aceptar que el saber está siempre en disputa, que las fuentes hablan distinto según quién las lea, y que la formación adulta consiste en aprender a navegar ese desacuerdo, no a obtenerlo resuelto.

---

*Documento generado dentro del curso "Historia de Argentina · de los pueblos originarios al siglo XXI", como recurso para portar la metodología a otras áreas. Última actualización: 2026-05-26.*
