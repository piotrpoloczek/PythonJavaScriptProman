from flask import Blueprint

register_bp = Blueprint(
    "register_bp",
    __name__,
    static_folder="static",
    static_url_path="/register/static",
    template_folder="templates",
    url_prefix="/register",
)

from register import views