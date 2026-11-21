# 🌙 Trading 369 · Dashboard de Trading Lunar

Calendario estratégico que combina **ciclos lunares** con el comportamiento real de **Bitcoin (BTC)**, para tener cada día una referencia clara de la etapa del ciclo, la presión compradora o vendedora y una recomendación de disciplina, todo respaldado por estadística con datos reales desde 2018.

**👉 Ver el dashboard:** [albau15.github.io/trading-369](https://albau15.github.io/trading-369/)

> ⚠️ **Aviso:** este proyecto es una herramienta de referencia y disciplina, no una recomendación de inversión. Los resultados históricos no garantizan resultados futuros.

---

## 📱 Instalar como app

El dashboard es una **app web instalable (PWA)**: la misma página, pero con ícono propio, pantalla completa y modo sin conexión.

- **iPhone:** abre [albau15.github.io/trading-369](https://albau15.github.io/trading-369/) en **Safari** → botón **Compartir** → **"Agregar a inicio"**.
- **Android:** ábrelo en **Chrome** → menú **⋮** → **"Instalar app"** (o "Agregar a pantalla principal").

Sin internet, el calendario, las fases y la presión siguen funcionando; los precios de BTC usan la última copia guardada. Cada mejora que se sube al repositorio llega sola a la app.

## ¿Qué hace?

- **Te dice en qué etapa del ciclo estás hoy**: Iniciación, Crecimiento, Maduración o Cosecha, con una recomendación y un nivel de riesgo.
- **Mide la presión del día** de −100 (vendedores) a +100 (compradores), como si fuera un libro de órdenes.
- **Dibuja el precio real de BTC** sobre el ciclo teórico, para ver si el mercado sigue o no el patrón.
- **Pone las ideas a prueba con datos**: estadística histórica desde 2018 y una prueba en vivo que acumula datos nuevos desde el 21 de noviembre de 2026.

## Las tres vistas

| Vista | Qué es |
|---|---|
| 📅 **Gregoriano (ambas)** · *vista principal* | El calendario normal (enero–diciembre). Cada día muestra la presión combinada y la etapa en las otras dos vistas. |
| 🗓️ **13 meses (28 días)** | El calendario de 13 lunas: 13 meses de 28 días desde el 1 de enero, más el *Día Fuera del Tiempo* (31 de diciembre). |
| 🌙 **Ciclo lunar real** | Cada mes va de una luna nueva a la siguiente (29–30 días). Las fases siguen los cuartos lunares reales. |

### Las cuatro fases

| Fase | 13 meses | Ciclo lunar real | Acción sugerida |
|---|---|---|---|
| 🌱 Iniciación | días 1–7 | 🌑 luna nueva → 🌓 cuarto creciente | Observar, acumular en silencio |
| 📈 Crecimiento | días 8–14 | 🌓 cuarto creciente → 🌕 luna llena | Entradas, añadir a ganadores |
| ⚖️ Maduración | días 15–21 | 🌕 luna llena → 🌗 cuarto menguante | Mantener, ajustar stops, reducir |
| 🍂 Cosecha | días 22–28 | 🌗 cuarto menguante → 🌑 luna nueva | Tomar ganancias, cerrar especulativo |

## ⚖️ Presión combinada (libro de órdenes)

Cada vista aporta una **fuerza que crece y se desvanece de forma gradual** a lo largo de su ciclo:

```
inicio del ciclo (0) → máxima fuerza compradora a mitad de la subida →
pico: día 14–15 / luna llena (0) → máxima fuerza vendedora a mitad de la bajada →
cierre del ciclo (0)
```

La **presión combinada** es el promedio de las dos vistas, en escala de −100 a +100. En la vista gregoriana, cada día se colorea según su presión (más intenso = más fuerza) y el panel indica si va ganando fuerza compradora o vendedora respecto al día anterior.

## 🌌 Visión macro: el zodiaco

Además del ciclo del mes, el dashboard muestra en qué **signo zodiacal** está el Sol cada día, como una lectura del momento del año. El zodiaco tropical empieza en el equinoccio de marzo, así que las 4 estaciones agrupan 3 signos cada una, igual que las 4 fases:

| Etapa macro | Estación | Signos |
|---|---|---|
| 🌱 Iniciación | primavera | ♈ Aries · ♉ Tauro · ♊ Géminis |
| 📈 Crecimiento | verano | ♋ Cáncer · ♌ Leo · ♍ Virgo |
| ⚖️ Maduración | otoño | ♎ Libra · ♏ Escorpio · ♐ Sagitario |
| 🍂 Cosecha | invierno | ♑ Capricornio · ♒ Acuario · ♓ Piscis |

Dentro de cada estación, el signo **cardinal** arranca la etapa, el **fijo** la consolida y el **mutable** hace la transición a la siguiente. La tarjeta **🌌 Visión macro** muestra el signo del día, su idea central (por ejemplo, ♏ Escorpio: *la transformación, morir para renacer como una versión mejor*) y cuánto falta para el siguiente. Los cambios de signo también se marcan en el calendario. Es una lectura interpretativa, no una regla de operación.

## 📊 Pruebas con datos reales

Al final de la página hay cuatro tarjetas que se calculan solas con el historial diario de BTC:

1. **🧪 Prueba en vivo**: solo cuenta lo que pasa desde el 21 nov 2026 (datos que el modelo nunca vio). Es la prueba que dice si la idea funciona.
2. **⚖️ Prueba de la presión**: qué hizo BTC 1 y 7 días después de cada nivel de presión.
3. **🌊 Prueba de volatilidad**: cuánto se mueve BTC por día en cada fase, sin importar la dirección.
4. **📊 BTC por fase**: porcentaje de veces que sube y mediana del cambio en cada fase de ambas vistas.

### Lo que dice el histórico (2018 – nov 2026)

- En la vista de **28 días**, las fases se comportan prácticamente como una moneda al aire (~50%).
- En el **ciclo lunar real** hay una inclinación leve: de luna nueva a llena BTC subió el **56%** de las veces, y la fase de **Crecimiento** (🌓→🌕) el **60%**. Es la única señal que vale la pena seguir; la prueba en vivo dirá si se sostiene.
- La **presión combinada** todavía no separa bien los días buenos de los malos.
- La **volatilidad** es casi igual en todas las fases (~2.2% diario), así que la luna no marca cuándo hay más movimiento.

## Datos y cálculos

- **Precios de BTC**: se descargan en el navegador desde [Binance](https://www.binance.com) (BTC/USDT, desde 2018), con respaldo en CoinGecko. Se guardan 6 horas en caché.
- **Fases lunares**: calculadas con el método astronómico de Jean Meeus (*Astronomical Algorithms*, cap. 49), con menos de 2 minutos de error frente a las efemérides oficiales.
- **Signos zodiacales**: posición del Sol con Meeus (cap. 25); los cambios de signo coinciden con equinoccios y solsticios oficiales con un margen de minutos.
- **Eventos**: equinoccios y solsticios (USNO), eclipses y superlunas (NASA / Fred Espenak).
- **Fechas**: en hora del centro de México. Incluye equinoccios y solsticios de 2026 y 2027.
- **Años disponibles**: 2026 y 2027.

## Cómo usarlo

1. Abre [albau15.github.io/trading-369](https://albau15.github.io/trading-369/). Abre directo en el día de hoy.
2. Revisa la **presión del día** y la etapa de cada vista en el panel superior.
3. Usa el selector **🧭 Vista** para cambiar entre las tres vistas, y toca cualquier día del calendario para consultarlo.
4. Una vez al mes, revisa la tarjeta **🧪 Prueba en vivo**.

## Estructura

El dashboard completo está en un solo archivo, sin instalación ni dependencias:

```
index.html             Página principal de GitHub Pages (abre el dashboard)
manifest.webmanifest   Datos de la app instalable (nombre, ícono, colores)
sw.js                  Service worker: modo sin conexión
icons/                 Íconos de la app
Trading_13lunar.html   Dashboard completo (HTML + CSS + JavaScript)
README.md              Este documento
```

El código está organizado en secciones comentadas en español: fechas, fases lunares, calendarios, reglas de decisión, presión, gráficas, navegación y estadística de BTC.

---

Creado por **Alberto Bautista** · Veracruz, México
