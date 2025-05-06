from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from threading import Lock

app = Flask(__name__)
CORS(app)

modelo_lock = Lock()  # Solo una petición a la vez al modelo

@app.route('/critica', methods=['POST'])
def critica():
    data = request.get_json()
    nombre = data.get('nombre', 'Sin nombre')
    descripcion = data.get('descripcion', 'Sin descripción')
    tags = data.get('tags', [])  # puedes enviar esto desde Vue opcionalmente
    estrellas = data.get('estrellas', 0)
    forks = data.get('forks', 0)
    issues = data.get('issues', 0)

    prompt = f"""Eres un crítico sarcástico y cruel. Tu trabajo es destruir proyectos inútiles con una frase demoledora.

Proyecto:
- Nombre: {nombre}
- Descripción: {descripcion}
- Etiquetas: {', '.join(tags)}
- Estrellas: {estrellas}
- Forks: {forks}
- Issues abiertos: {issues}

Crítica:"""

    try:
        with modelo_lock:
            response = requests.post(
                "http://localhost:1234/v1/chat/completions",
                json={
                    "model": "mistral-7b-instruct-v0.3",
                    "messages": [
                        {"role": "user", "content": prompt}
                    ],
                    "temperature": 0.9,
                    "max_tokens": 300
                },
                timeout=60
            )

        result = response.json()
        return jsonify({
            "critica": result['choices'][0]['message']['content'].strip()
        })

    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": "Error interno", "detalle": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, threaded=True)
