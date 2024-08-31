from flask import Flask
from flask import jsonify
from flask import request


app = Flask(__name__)

@app.route('/')
def home():
    return "<h1>Hello World!</h1>"

if __name__ == '__main__':
    app.run(debug = True)


@app.route('/post', methods=['POST'])
def post_data():
    data = request.json
    return f"Received data: {data}", 200

@app.route('/data')
def data():
    return jsonify({"key": "value"})