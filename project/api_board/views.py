from flask import Flask, render_template, request, redirect, url_for
from api_board import api_board_bp
from util.util import json_response
from util import queries


@api_board_bp.route("/")
def index():
    """
    This is a one-pager which shows all the boards and cards
    """
    return render_template('api_board/index.html')

@api_board_bp.route("/boards")
@json_response
def get_boards():
    """
    All the boards
    """
    return queries.get_boards()

@api_board_bp.route("/boards/<int:board_id>/cards/")
@json_response
def get_cards_for_board(board_id: int):
    """
    All cards that belongs to a board
    :param board_id: id of the parent board
    """
    return queries.get_cards_for_board(board_id)