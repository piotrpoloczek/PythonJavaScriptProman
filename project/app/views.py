from flask import Flask, render_template, request, redirect, url_for, session
from app import app
import os


@app.route("/")
def index():
    """
    This is a one-pager which shows all the boards and cards
    """
    return render_template('app/index.html')

@app.route("/design/")
def design():
    """
    This is a one-pager which shows all the boards and cards
    """
    return render_template('app/design.html')