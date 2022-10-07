# Demo crear excel en un proyecto Angular

Hola Chikis, en esta demostración usaremos la librería **excelJS** para poder crear y descargar archivos excel.

## Exceljs y file-saver

Exceljs nos permite crear archivos excel, más información en https://www.npmjs.com/package/exceljs. Con la ayuda de lalibrería **file-saver** realizaremos la descarga.

```console
npm i exceljs file-saver
```

La librería **file-saver** necesita **types** para poder usarlo con typescript (valga la redundancia).

```console
npm i -D @types/file-saver
```

Tambien devemos hacer unos cambios en el archivo **tsconfig.app.json** , en la sección de **compilerOptions** existe un atributo de nombre **types** ahi agregaremos lo siguiente:

```json
"compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": ["node"]
  }
```

Pueden escribirme si tiene dudas chikis, gracias por su apoyo.🤗😎

Suscríbete a mi canal 😎
https://www.youtube.com/c/LogiDev

**Sígueme en mis redes:**
👉Facebook : https://facebook.com/LogiDev25  
búscame como: @LogiDev25  
👉Instagram: https://instagram.com/jimyhdolores/  
búscame como: @jimyhdolores  
👉Twitter: https://twitter.com/jimyHDolores  
búscame como: @jimyHDolores  
👉LinkedIn:https://linkedin.com/in/jimyhuachodolores/
