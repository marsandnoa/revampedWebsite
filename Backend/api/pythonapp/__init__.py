# Backend/pythonapp/__init__.py
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flasgger import Swagger
from .config import Config

db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()
swagger = Swagger()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    CORS(app, supports_credentials=True)
    swagger.init_app(app)

    with app.app_context():
        from .controllers import auth_controller, user_controller
        app.register_blueprint(auth_controller.auth_bp)
        app.register_blueprint(user_controller.user_bp)

        db.create_all()

    @app.route('/apidocs/swagger.json')
    def swagger_json():
        return jsonify(swagger.get_apispecs())

    return app
