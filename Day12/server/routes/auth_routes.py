from models import create_user,find_user_by_email

from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required,get, get_jwt_identity
import bcrypt
from models import create_user, find_user_by_email


auth_bp = Blueprint('auth_bp',__name__)

@auth_bp.route('/register',methods=['POST'])
def register():
    data = request.json
    user= find_user_by_email(mongo,data['email'])
    if user:
        return jsonify({"msg":"user already exists"}),400
    create_user(mongo,data['username'],data['password'],data['email'])