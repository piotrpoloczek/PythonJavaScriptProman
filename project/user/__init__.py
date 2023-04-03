from flask import Blueprint

user_bp = Blueprint(
    "user_bp",
    __name__,
    static_folder="static",
    static_url_path="/user/static",
    template_folder="templates",
    url_prefix="/user",
)

from user import views