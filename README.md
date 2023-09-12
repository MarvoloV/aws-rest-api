# Getting Started

## Available Scripts

En el directorio del proyecto, puede ejecutar:

### `npm test`

### `npm run build`

# Guía para desplegar una aplicación con AWS SAM

Este repositorio contiene los archivos y la configuración necesarios para desplegar una aplicación serverless en AWS utilizando AWS Serverless Application Model (SAM).

## Requisitos previos

Asegúrate de tener instalado lo siguiente antes de continuar:

- [AWS CLI](https://aws.amazon.com/cli/): Necesitarás configurar tus credenciales de AWS utilizando `aws configure`.
- [Docker](https://www.docker.com/): SAM utiliza Docker para crear entornos de desarrollo local.

## Pasos para desplegar

1. Compila la Aplicación:

   ```bash
   sam build
   ```

2. Despliega la Aplicación:

   ```bash
   sam deploy --guided
   ```

3. Prueba la Aplicación:
   Una vez que la aplicación se haya desplegado, puedes consumir un endpoint GET para obtener datos de ejemplo. La URL del endpoint será proporcionada en la salida del comando sam deploy. la url de la applicacion desplegada es :
   https://p7u9c58q84.execute-api.us-east-1.amazonaws.com/Prod/customers?name=a
   \
    También puedes realizar pruebas locales usando SAM CLI:

   ```bash
   sam local start-api
   ```

   En la siguiente url:
   http://127.0.0.1:3000/customers?name=a

## Mantenimiento

Para realizar actualizaciones en tu aplicación, puedes editar el código en la carpeta src, luego ejecutar sam build y sam deploy nuevamente para desplegar las modificaciones.
