from flask import Flask

from flask_pymongo import PyMongo 
from flask_jwt_extended import JWTManager 
from flask_cors import CORS 
import bcrypt 

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb+srv://akashkumar5cs23:<9UHIPeN52ekPP7cx>@gla.jx0pa.mongodb.net/'

mongo = PyMongo(app)

app.config['JWT_SECRET_KEY'] = '#'

jwt = JWTManager(app)

CORS(app)

@app.route('/')
def hello():
    return 'Hello'

if __name__ == "__main__":
    app.run(debug=True)