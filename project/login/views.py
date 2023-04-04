from flask import Flask, render_template, request, redirect, url_for
from login import login_bp

@login_bp.route("/")
def index():
    """
    This is a one-pager which shows all the boards and cards
    """
    return render_template('login/index.html')