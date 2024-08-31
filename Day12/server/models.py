from flask_pymongo import PyMongo

def __init__():
    mongo = PyMongo(app)
    return mongo

def create_user(mongo,username,email,password):
    hashed_password = bcrypt.hashnpw(password.encode('utf-8',bcrypt.gen))