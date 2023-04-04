from flask import Flask, render_template, url_for
from dotenv import load_dotenv
from util.util import json_response
import mimetypes
from data_manager import queries
import os
import login
import api_board
import register
import app as main_app


mimetypes.add_type('application/javascript', '.js')
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv()

# register the blueprints
app.register_blueprint(main_app.app)
app.register_blueprint(login.login_bp)
app.register_blueprint(register.register_bp)
app.register_blueprint(api_board.api_board_bp)


def main():
    app.run(debug=True)

    # Serving the favicon
    with app.app_context():
        app.add_url_rule('/favicon.ico', redirect_to=url_for('static', filename='favicon/favicon.ico'))


if __name__ == '__main__':
    main()