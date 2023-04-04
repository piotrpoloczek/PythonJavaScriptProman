from flask import Flask, render_template, request, redirect, url_for
from app import app


@app.route("/")
def index():
    """
    This is a one-pager which shows all the boards and cards
    """
    return render_template('app/index.html')

