from flask import Flask
app = Flask(__name__)


@app.route('/hello', methods=['GET'])
def index():
    return 'hello'
