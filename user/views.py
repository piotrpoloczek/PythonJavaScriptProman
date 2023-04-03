from flask import Flask, render_template, request, redirect, url_for
from user import user_bp

@user_bp.route("/")
def index():
    """
    This is a one-pager which shows all the boards and cards
    """
    return render_template('index.html')