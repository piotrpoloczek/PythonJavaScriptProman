from flask import Flask, render_template, request, redirect, url_for, jsonify, json
from api_board import api_board_bp
from util.util import json_response
from util import queries
import json


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

@api_board_bp.route("/statuses")
@json_response
def get_satatuses():
    """
    All the statuses
    """
    return queries.get_statuses()

@api_board_bp.route("/boards/<int:board_id>/")
@json_response
def get_board(board_id: int):
    """
    All cards that belongs to a board
    :param board_id: id of the parent board
    """
    return queries.get_board(board_id)

@api_board_bp.route("/cards/<int:card_id>/")
@json_response
def get_card(card_id: int):
    """
    """
    return queries.get_card(card_id)

@api_board_bp.route("/boards/<int:board_id>/cards/")
@json_response
def get_cards_for_board(board_id: int):
    """
    All cards that belongs to a board
    :param board_id: id of the parent board
    """
    return queries.get_cards_for_board(board_id)

@api_board_bp.route("/status/<int:status_id>")
@json_response
def get_status(status_id: int):
    """
    """
    return queries.get_status(status_id)


@api_board_bp.route("/boards/", methods=["POST"])
# @json_response
def create_board():
    board_title = request.get_json()["title"]
    queries.add_board(board_title)
    return board_title, 201


@api_board_bp.route("/boards/cards/", methods=["POST"])
@json_response
def create_card():
    data = request.get_json()
    card_title = request.get_json()["title"]
    board_id = request.get_json()["board_id"]
    card_order = request.get_json()["card_order"]
    status_id = request.get_json()["status_id"]
    queries.add_card(card_title, board_id, status_id, card_order)
    return data, 201