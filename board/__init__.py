from flask import Blueprint

board_bp = Blueprint(
    "board_bp",
    __name__,
    static_folder="static",
    static_url_path="/board/static",
    template_folder="templates",
    url_prefix="/board",
)

from board import views