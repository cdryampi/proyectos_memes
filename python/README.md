# API Crítica Cruel 🤬

Esta es una API sarcástica que utiliza un modelo local (Mistral) a través de LM Studio para criticar cruelmente proyectos.

## 💡 Descripción

Este backend está pensado para proyectos educativos o memes. Se conecta con un modelo LLM corriendo en tu máquina y genera respuestas estilo crítico amargado.

## 🧰 Requisitos

- Python 3.8+
- Flask
- flask-cors
- python-dotenv
- requests
- LM Studio corriendo con un modelo Instruct (ej. `mistral-7b-instruct-v0.3`)

## 📦 Instalación

```bash
pip install flask flask-cors requests
```

## Iniciar el ngrok

```bash
ngrok http 5000
```

## memes:

```javaScript
    // Metelo en la llamada fetch o del axios
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
```
